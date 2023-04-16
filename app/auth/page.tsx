import AuthPage from "./AuthPage";


const Auth = async () => {

  const response = await fetch('http://localhost:3000/api/post', {

      method: 'GET',
     
      headers: {
          "Content-Type": "application/json",
      },

      
  }).then(res => res.json()).catch(error => console.log(error)
  )

  console.log(response);
  

  return <>
            <AuthPage/>
        </>
};

export default Auth;
