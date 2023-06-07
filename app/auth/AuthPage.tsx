"use client"

import { useForm, useVariants } from "../hooks";
import { GroupedInput, Form, Button } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faAt, faEye, faEyeSlash, faHome, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { NextPage } from "next";
import { motion } from "framer-motion";

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

      const { authVariants, authChildrenVariants, skyeText } = useVariants()
 
 
  return <>

          <div className="w-full h-screen grid place-items-center bg-[url('/animeRainbowFlowersGreenGrass.jpg')] bg-no-repeat bg-center bg-cover">

            <div className="w-full h-full flex">

              {/* Image section */}

              <div className="h-full md:w-[50%] hidden md:block p-4">

                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <div className="h-full w-full bg-no-repeat bg-center bg-cover grid place-items-center">
                  <motion.h1 
                  variants={skyeText}
                  initial='hidden'
                  animate='show'
                 
                  className="text-[12rem] font-bold text-white drop-shadow-2xl shadow-blue-400">
                    Skye
                  </motion.h1>
                  </div>
                  </div>

              </div>

              {/* Form section */}

              <motion.div
             
              className="h-full w-full md:w-[50%] grid place-items-center relative ">

                <div className="flex justify-between w-full absolute top-0 left-0 gap-8 items-center p-4">

                  <div className="flex items-center gap-8">

                <Link className="m-0 p-0" href="/home">
                <motion.p 
                  variants={authChildrenVariants}
                  animate='show'
                  initial='hidden'
                  exit='hidden'
                  className="font-semibold text-2xl">home</motion.p> 
                </Link>

                </div>

                <Button icon={faSignIn} text={isSignup ? "Signin" : "Signup"} modifier={`btn ${user?.name ? "hidden" : ""}`} clickEvent={switchAuth}/>

                </div>


                <motion.div
                  variants={authVariants}
                  animate='show'
                  initial='hidden'
                  exit='hidden'
                  className="w-full h-[80%] grid place-items-center">

               { !user?.name ? <Form 
                  onSubmit={defaultPrevent} 
                  label={ isSignup ? "Sign up" : "Sign in"} 
                  modifier="space-y-2 md:w-[300px] lg:w-[400px] xl:w-[500px] mophBg p-8 rounded-3xl">

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

                  <div className="space-y-2">


                      <Button 
                      clickEvent={handleSubmit} 
                      text={isSignup ? "Signup" : "Signin"}
                      modifier="btn w-full"
                      icon={faArrowAltCircleRight}
                      /> 

                      <Button 
                      clickEvent={() => signIn("google", {callbackUrl: "/home"})}
                      text="Google" 
                      modifier="btn w-full"
                      icon={faArrowAltCircleRight}
                      /> 
             
                </div>

                  </Form>

                     :

                    <div className="mophBg p-8 grid place-items-center space-y-4 rounded-3xl text-gray-600">
                      <h1 className="text-3xl lg:text-4xl">Welcome back!</h1>
                      <h1 className="font-bold">{user?.name}</h1>
                      <Link href="/home">
                        <Button icon={faHome} text="Go home"/>
                      </Link>
                    </div>

                     
                     }
                </motion.div>

              </motion.div>

            </div>

          </div>
  
         </>
}

export default AuthPage;
