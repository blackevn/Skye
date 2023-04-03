"use client"

import useForm, { FormAuthData } from "../hooks/useForm";
import { Input, GroupedInput, Form, Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faAt, faEye, faEyeSlash, faRegistered, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const AuthPage = ({response}: any) => {
 
const { formData, handleFormChange, handleSubmit, isSignup, switchAuth, showPassword, handlePassword, session, signIn, signOut }  = useForm() 

const inputIcon = showPassword ? faEye : faEyeSlash

console.log(response );

 
  return <>

          <div className="w-full h-screen grid place-items-center">

            <div className="w-full h-full flex">

              {/* Image section */}

              <div className="h-full md:w-[50%] bg-black hidden md:block">

              </div>

              {/* Form section */}

              <div className="h-full w-full md:w-[50%] grid place-items-center relative ">

                <div className="flex justify-between w-full absolute top-0 left-0 gap-8 items-center p-4">

                  <div className="flex items-center gap-8">

                <p className="font-black text-2xl">blackevn</p>

                <Link className="m-0 p-0" href="/home">
                <p className="font-semibold text-2xl">home</p> 
                </Link>

                </div>

                <Button icon={faSignIn} text="Login" modifier=" btn" clickEvent={switchAuth}/>

                </div>


                <div className="w-[90%] h-[80%] grid place-items-center ">

                  <Form onSubmit={handleSubmit} label={ isSignup ? "Sign up" : "Sign in"} modifier="space-y-4">

                  {isSignup ? 

                  // Sign up
                  
                  <div className="space-y-6">

                    <div className="grid lg:grid-cols-2 gap-6">

                     <GroupedInput   
                     type="text"
                     placeholder="First name"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleFormChange}
                     >

                    <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>

                    </GroupedInput>

                    <GroupedInput   
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white" ><FontAwesomeIcon icon={faUser}/></span>
                    </GroupedInput>

                    </div>
                    
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white"><FontAwesomeIcon onClick={handlePassword} icon={inputIcon}/></span>
                    </GroupedInput>

                    <GroupedInput   
                    type={showPassword ? "text" : "password"}
                    placeholder="Repeat password"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white"><FontAwesomeIcon onClick={handlePassword} icon={inputIcon}/></span>
                    </GroupedInput> 

                  </div> 
                  
                      :

                  // Sign in
                  
                  <div className="space-y-6 md:w-[300px] lg:w-[400px] xl:w-[500px]">

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
                    name="email"
                    value={formData.password}
                    onChange={handleFormChange}
                    >
                    <span className="bg-white rounded-2xl " onClick={handlePassword}><FontAwesomeIcon icon={inputIcon}/></span>
                    </GroupedInput>
                  
                  </div>

                  }

                      <Button 
                      clickEvent={handleSubmit} 
                      text="Sign up" 
                      modifier="btn w-full"
                      icon={faArrowAltCircleRight}
                      /> 

                      <Button 
                      clickEvent={() => signIn("google", {callbackUrl: "https://skye-du6p4rckq-blackevn.vercel.app/auth/api/auth/callback/google"})}
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
