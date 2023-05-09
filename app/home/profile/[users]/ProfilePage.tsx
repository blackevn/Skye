'use client'

import { Avatar, ProfileHeader, Button, UserDetails, CurrentUserDetails, EditForm } from '@/app/components';
import { NextPage } from 'next';
import { IUser, UserProfile } from '@/types/interfaces';
import { faCircle, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from '@/app/hooks';
import { useAppContext } from '@/app/context/AppContext';


const UserProfile: NextPage<UserProfile> = ({currentProfileUser, currentUser}) => {

  const { handleEdit, formData, handleFormChange } = useForm()

  const { editProfileToggle, handleEditProfileToggle } = useAppContext()
  
  const currentUserDisplay =  currentProfileUser?.id === currentUser?.id

  const timestamp = currentProfileUser?.createAt;

  const formattedDate = timestamp ? new Date(timestamp).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : '';
  
  console.log(currentUserDisplay);

  return <>

  { editProfileToggle && <EditForm formData={formData} handleEdit={handleEdit} handleFormChange={handleFormChange}/>}
         
          <ProfileHeader>

          <div className='flex flex-col w-full space-y-4 p-4'>

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
           
              <Button modifier='bg-white w-full' icon={faEdit} text='Edit' clickEvent={handleEditProfileToggle}/>
              
              :
              
              <Button modifier='bg-white w-full' icon={faUserPlus} text='Follow'/>
           
            }

          </div>

          </div>

          </div>

          </ProfileHeader>

          
            
        </>
};

export default UserProfile;
