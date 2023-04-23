"use client"

import { useForm } from "../hooks";
import { GroupedInput, Form, Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faAt, faEye, faEyeSlash, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { NextPage } from "next";

const AuthPage: NextPage = () => {
 
const { formData, 
        handleFormChange, 
        handleSubmit, 
        isSignup, 
        switchAuth, 
        showPassword, 
        handlePassword, 
        signIn, user,
        defaultPrevent }  = useForm() 
        
        const inputIcon = showPassword ? faEye : faEyeSlash
 
        console.log(user?.name);
        
 
  return <>

          <div className="w-full h-screen grid place-items-center">

            <div className="w-full h-full flex">

              {/* Image section */}

              <div className="h-full md:w-[50%] hidden md:block p-4">

                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="h-full w-full authLeft bg-no-repeat bg-center bg-cover"></div>
                  </div>

              </div>

              {/* Form section */}

              <div className="h-full w-full md:w-[50%] grid place-items-center relative ">

                <div className="flex justify-between w-full absolute top-0 left-0 gap-8 items-center p-4">

                  <div className="flex items-center gap-8">

                <p className="font-black text-2xl">Skye</p>

                <Link className="m-0 p-0" href="/home">
                <p className="font-semibold text-2xl">home</p> 
                </Link>

                </div>

                <Button icon={faSignIn} text={isSignup ? "Signin" : "Signup"} modifier=" btn" clickEvent={switchAuth}/>

                </div>


                <div className="w-[90%] h-[80%] grid place-items-center ">

                  <Form onSubmit={defaultPrevent} label={ isSignup ? "Sign up" : "Sign in"} modifier="space-y-2 md:w-[300px] lg:w-[400px] xl:w-[500px]">

                  {isSignup ? 

                  // Sign up
                  
                  <div className="space-y-2 lg:space-y-4">
                                
                    <GroupedInput 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white"><FontAwesomeIcon icon={faAt}/></span>
                    </GroupedInput>

                    
                    <GroupedInput   
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={formData.name}
                     onChange={handleFormChange}
                     >
                    <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
                    </GroupedInput>
                    
                    <GroupedInput   
                     type="text"
                     placeholder="Username"
                     name="userName"
                     value={formData.userName}
                     onChange={handleFormChange}
                     >
                    <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
                    </GroupedInput>

                    <GroupedInput   
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white"><FontAwesomeIcon onClick={handlePassword} icon={inputIcon}/></span>
                    </GroupedInput>

                  </div> 
                  
                      :

                  // Sign in
                  
                  <div className="space-y-2 lg:space-y-4">

                    <GroupedInput   
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white" ><FontAwesomeIcon icon={faAt}/></span>
                    </GroupedInput>

                    <GroupedInput   
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white rounded-2xl tras" onClick={handlePassword}><FontAwesomeIcon icon={inputIcon}/></span>
                    </GroupedInput>
                  
                  </div>

                  }

                      <Button 
                      clickEvent={handleSubmit} 
                      text={isSignup ? "Signup" : "Signin"}
                      modifier="btn w-full"
                      icon={faArrowAltCircleRight}
                      /> 

                      <Button 
                      clickEvent={() => signIn("google", {callbackUrl: "https://skye-git-auth-blackevn.vercel.app/api/auth/callback/google"})}
                      text="Google" 
                      modifier="btn w-full"
                      icon={faArrowAltCircleRight}
                      /> 
             
                  </Form>

                </div>

              </div>

            </div>

          </div>
  
         </>
}

export default AuthPage;
