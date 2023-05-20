'use client'

import { Avatar, ProfileHeader, Button, UserDetails, CurrentUserDetails, EditForm, PostFeed } from '@/app/components';
import { NextPage } from 'next';
import { IUser, UserProfile } from '@/types/interfaces';
import { faCircle, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@/app/hooks';
import { useAppContext } from '@/app/context/AppContext';
import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';


const UserProfile: NextPage<UserProfile> = ({currentProfileUser, currentUser}) => {

  const { editProfileToggle, handleEditProfileToggle, post } = useAppContext()

  const controller = useAnimationControls()
  
  const currentUserDisplay =  currentProfileUser?.id === currentUser?.id

  const timestamp = currentProfileUser?.createAt;

  const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : '';
  
  console.log(post);

  useEffect(() => {
    if (editProfileToggle) {
      controller.start('show')
    }
  }, [editProfileToggle]);
  

  return <>

     <EditForm controller={controller}/>
         
          <ProfileHeader currentProfileUser={currentProfileUser} >

          <div className={`flex flex-col w-full space-y-4 p-4 bg-opacity-40 lg:bg-opacity-0 ${!currentUserDisplay ? "bg-black" : "bg-none"}`}>

          {currentUserDisplay ? 
          
          <CurrentUserDetails currentUser = {currentUser}/>
          
          : 

          <UserDetails currentProfileUser = {currentProfileUser}/>

          } 
           
          <div className='flex flex-col-reverse md:flex-row items-center md:justify-between w-full relative md:items-end gap-2'>
              
            <div>

                <p className='text-[12px] italic font-extralight'>Joined {formattedDate}</p>

            </div>

          <div className='w-full md:w-auto'>
    
            { currentUserDisplay ?
           
              <Button 
              modifier='bg-white w-full text-black' 
              icon={faEdit} 
              text='Edit' 
              clickEvent={handleEditProfileToggle}
              />
              
              :
              
              <Button modifier='bg-white w-full text-black' icon={faUserPlus} text='Follow'/>
           
            }

          </div>

          </div>

          </div>

          </ProfileHeader>

                  
            
        </>
};

export default UserProfile;
