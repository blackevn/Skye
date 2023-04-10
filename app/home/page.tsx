import { NextPage } from "next";
import Home from "./home";
import { Video } from "@/types/interfaces";

const page = async () => {

  const staticData = await fetch(`http://localhost:3000/api/post`, { 
  method: "GET",  
  }, );

  console.log(staticData);
  

 
  return <div><Home/></div>
};
 
export default page;
