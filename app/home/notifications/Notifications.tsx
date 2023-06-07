'use client'

import { useEffect } from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { useCurrentUser, useNotifications } from "@/app/hooks";


const Notifications: NextPage = () => {
  
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  console.log(fetchedNotifications);
  

    useEffect(() => {
      mutateCurrentUser();
    }, [mutateCurrentUser]);
  
    if (fetchedNotifications.length === 0) {
      return (
        <div className="text-neutral-600 text-center p-6 text-xl">
          No notifications
        </div>
      )
    }

    return <div className="flex flex-col gap-2 pb-20">
    {fetchedNotifications.map((notification: Record<string, any>, i: number) => (
    <motion.div 
      initial={{
        y: 10,
        opacity: 0.5
    }}
    animate={{
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            ease: 'easeIn'
        }
    }}
      key={notification.id} 
      className="flex flex-row items-center p-4 gap-4 mophBg rounded-2xl">
        <p>
        {notification.body}
      </p>
    </motion.div>

))}
<p className="text-center p-8">That's all we got!</p>
</div>
}

export default Notifications;
