import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth";
import prisma from "../../../lib/prismadb";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password'}
            },

            async authorize(credentials) {

                if (!credentials?.email || !credentials?.password) {
                    
                    throw new Error('Invalid credentials')
                   
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials')
                }

                const isValid = await bcrypt.compare(
                    credentials?.password, 
                    user?.hashedPassword)

                if (!isValid) {

                    throw new Error('Invalid credentials')
                }

                return user
                           
            }
        })

        
    ],

 
  pages: {
    signIn: '/auth'
  },


    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET,

    
})