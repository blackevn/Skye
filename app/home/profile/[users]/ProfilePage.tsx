'use client'

import { Avatar, ProfileHeader, Button, UserDetails, CurrentUserDetails, EditForm, PostFeed } from '@/app/components';
import { NextPage } from 'next';
import { IUser, Post, UserProfile } from '@/types/interfaces';
import { faCircle, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '@/app/context/AppContext';
import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { useFollow } from '@/app/hooks';



const UserProfile: NextPage<UserProfile> = ({currentProfileUser, currentUser, userId}) => {

  const { editProfileToggle, handleEditProfileToggle, posts } = useAppContext()
  const { isFollowing, toggleFollow } = useFollow(userId as string)
  const controller = useAnimationControls()
  
  const currentUserDisplay =  currentProfileUser?.id === currentUser?.id

  const timestamp = currentProfileUser?.createAt;
  const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : '';


  const filteredPosts: Post = posts?.filter((post: Post) => post.userId === userId) 

  useEffect(() => {
    if (editProfileToggle) {
      controller.start('show')
    }
  }, [editProfileToggle]);

  // ${!currentUserDisplay ? "bg-black/40" : "bg-transparent"}
  

  return <>

     <EditForm controller={controller}/>
         
          <ProfileHeader currentProfileUser={currentProfileUser} currentUser={currentUser} userId={userId}>

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
              
              <Button 
                clickEvent={toggleFollow} 
                modifier='bg-white w-full text-black' 
                icon={faUserPlus} 
                text={isFollowing ? 'Unfollow' : 'Follow'}/>
           
            }

          </div>

          </div>

          </div>

          </ProfileHeader>

       { posts && <PostFeed posts={filteredPosts}/> } 
            
        </>
};

export default UserProfile;
