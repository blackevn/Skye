import React from "react";
import Avatar from "./avatar";
import { useSession } from "next-auth/react";

const UserDropdown = ({image, children}: any) => {

  const { data: session } = useSession()

  return <div className="dropdown dropdown-end">
            <label tabIndex={0} className=""> <Avatar src={session?.user?.image} image={session?.user?.image}/></label>
            <div tabIndex={0} className="dropdown-content card card-compact shadow bg-base-100 ">
                <div className="card-body">
                  { children }
                </div>
            </div>
            </div>
};

export default UserDropdown;
