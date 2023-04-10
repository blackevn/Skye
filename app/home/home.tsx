"use client"

import { NextPage } from "next";
import { DiscoveryLine } from "../components";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {

  const { data: session} = useSession()

  return <div>
          
           {session?.user && <DiscoveryLine/>}
     
        </div>;
};

export default Home;
