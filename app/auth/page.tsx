import AuthPage from "./AuthPage";
import axios from "axios";
import { json } from "stream/consumers";

const Auth = async () => {


  const response = await fetch('http://localhost:3000/api/hello', {

      method: 'GET',
     
      headers: {
          "Content-Type": "application/json",
      },

      
  }).then(res => res.json()).catch(error => console.log(error)
  )

  console.log(response);
  

  return <>
            <AuthPage response={response}/>
        </>
};

export default Auth;
