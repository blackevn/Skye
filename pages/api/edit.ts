import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import prisma from "../../lib/prismadb"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'PATCH') {
      return res.status(405).end();
    }
  
    try {
      const { currentUser } = await serverAuth(req, res);
  
      const { name, userName, bio, profileImage, coverImage } = req.body;

      console.log(req.body);
      
  
      if (!name || !userName) {
        throw new Error('Missing fields');
      }
  
      const updatedUser = await prisma.user.update({
        where: {
          id: currentUser.id,
        },
          data: {
          userName,
          name,
          bio ,
          coverImage,
          profileImage
        }
      });
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }