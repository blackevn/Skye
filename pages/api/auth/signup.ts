import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDatabase } from '@/database/connection'
import Users from '@/models/Schema'
import { hash } from 'bcryptjs'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    connectDatabase().catch( error => res.json({ error: "Database not found" }))

    try {

        if (req.method === "POST") {

            const { username, email, password } = req.body

            // check duplicate users
    
            const existingUser = await Users.findOne({email})
    
            if ( existingUser ) return res.status(422).json({ message: "User already exists" })
    
            if ( !req.body )  return res.status(404).json({ error: "Form data empty" })
    
            // hash password
    
            Users.create({ username, email, password: await hash(password, 12) })
            .then(() => res.status(200).json({ message: "User created"}))

            } else {
    
            res.status(500).json({ message: "Only 'POST' method allowed" })
    
        }
        
    } catch (error) {

        console.log(error);
        
        
    }

  

}
