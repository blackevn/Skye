import { IProps } from "@/types/interfaces"
import React from "react";

const ProfileHeader: React.FC<IProps> = ({children}) => {

  return    <div className=' rounded-3xl relative overflow-hidden'>

              <img src='/backgroundPlace.jpg' className='absolute lg:hidden w-full h-full object-cover -z-20' alt="" />
    
                {children}
                    
            </div>
};

export default ProfileHeader;
