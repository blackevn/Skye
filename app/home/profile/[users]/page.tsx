'use client'

import { Loading } from "@/app/components";
import UserProfile from "./ProfilePage";
import { useUser, useCurrentUser } from '@/app/hooks';
import { usePathname } from 'next/navigation';


const page = () => {

  const pathname = usePathname();
  const userId = pathname?.toString().replace(/^\/home\/profile\//, "");
  const { data: currentProfileUser } = useUser(userId as string)
  const { data: currentUser } = useCurrentUser()
 
  if ( !currentProfileUser?.name ) return  <Loading/>

  return <>
        
          <UserProfile currentProfileUser={currentProfileUser}  currentUser={currentUser}/> 

        </>;
};

export default page;
