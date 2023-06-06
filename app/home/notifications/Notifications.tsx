'use client'

import { useEffect } from "react";
import { NextPage } from "next";
import { useCurrentUser, useNotifications } from "@/app/hooks";


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

  return <div className="flex flex-col">
    {fetchedNotifications.map((notification: Record<string, any>) => (
    <div key={notification.id} className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800">
        <p className="text-white">
        {notification.body}
      </p>
    </div>
    ))}
</div>
}

export default Notifications;