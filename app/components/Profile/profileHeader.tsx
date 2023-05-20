'use client'

import { useAppContext } from "@/app/context/AppContext";
import { useUsers } from "@/app/hooks";
import { IProps, IUser } from "@/types/interfaces"
import { usePathname } from "next/navigation";
import React from "react";

interface ProfileHeaderProps {

  children: React.ReactNode
  currentProfileUser: IUser | undefined

}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({children, currentProfileUser}) => {

   

  return    <div className=' rounded-3xl relative overflow-hidden text-gray-200 lg:text-gray-600'>

            <img src={currentProfileUser?.coverImage} className='absolute lg:hidden w-full h-full object-cover -z-20' alt="" />
    
                {children}
                    
            </div>
};

export default ProfileHeader;
