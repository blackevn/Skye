import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

   if (req.method === 'GET') {
  
       try {
        const users = await prisma.user.findMany({
    
            orderBy: {
                createAt: "desc"
              }
    
        })
    
        return res.status(200).json(users)
       } catch (error) {
    
        console.log(error);
        return res.status(400).end()
            
       }
   } else {

    console.log("Method not allowed")

   }

}
