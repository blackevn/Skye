import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { RequestInternal } from "next-auth";
import { connectDatabase } from "@/database/connection";
import Users from "@/models/Schema";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials: any, req: Pick<RequestInternal, "body" | "query" | "headers"
       | "method">) {

        if (!credentials?.email || !credentials?.password) {
         connectDatabase().catch( error => { error: "Connection failed"})
        }
        
        const user = await Users.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error('This email does not match a registered account');
        }

        const isCorrectPassword = await compare( credentials?.password, user.password )

        if (!isCorrectPassword || user.email !== credentials?.email) {
          throw new Error('Password incorrect');
        }
        
        return user;
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },

  pages: {
    signIn: "/home",
  },
};

export default NextAuth(authOptions);