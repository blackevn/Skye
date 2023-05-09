import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import prisma from "../../lib/prismadb"

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
    ) {

        if ( req.method === 'PATCH') {

            try {
                const { currentUser } =  await serverAuth(req)
                const { name, userName, bio, profileImage, coverImage } = req.body

                if( !name || !userName) {
                    throw new Error('Missing fields')
                }

                const updatedUser = await prisma.user.update({
                    where: {
                        id: currentUser?.id
                    },
                    data: {
                        name,
                        userName,
                        bio,
                        profileImage,
                        coverImage
                    }
                })

                return res.status(200).json(updatedUser)

            } catch (error) {

                console.log(error);
                return res.status(500).end()
                
            }

        } else {
            return res.status(405).end()
        }
    
}
