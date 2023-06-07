'use client'

import { ReactNode, useEffect } from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { useCurrentUser, useNotifications } from "@/app/hooks";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faThumbsUp, faUserPlus } from "@fortawesome/free-solid-svg-icons";


const Notifications: NextPage = () => {
  
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);
 

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
         className="flex flex-row items-center p-4 gap-4 mophBg rounded-2xl justify-between">
      <div className="flex items-center gap-4">
      <FontAwesomeIcon 
      icon={ notification.body.includes('followed') ? 
      faUserPlus : notification.body.includes('liked') ? 
      faThumbsUp : faAt}/>
        <p>{notification.body}</p>
        </div>
        <p className="text-[12px] italic font-extralight">{moment(notification.createdAt).fromNow()}</p>
    </motion.div>

))}
<p className="text-center p-8">That's all we got!</p>
</div>
}

export default Notifications;
