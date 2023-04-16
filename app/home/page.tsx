import { NextPage } from "next";
import Home from "./home";


const page = async () => {

  const response = await fetch('http://localhost:3000/api/post', {

  method: 'GET',
 
  headers: {
      "Content-Type": "application/json",
  },

      
    }).then(res => res.json()).catch(error => console.log(error)
    )

console.log(response);
   
  return <div className="box-border p-0 m-0"><Home videos={response} /></div>
};
 
export default page;
