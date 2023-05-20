import prisma from "../../../lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { userId } = req.query;

      if (!userId || typeof userId !== "string") {
        throw new Error("Invalid ID");
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      const followCount = await prisma.user.count({
        where: {
          followingId: {
            has: userId,
          },
        },
      });

      return res.status(200).json({ ...existingUser, followCount });
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  } else {
    console.log(res.status(400).end());
  }
}
