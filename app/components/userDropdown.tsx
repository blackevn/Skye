import React from "react";
import Avatar from "./avatar";
import { useSession } from "next-auth/react";
import { IProps, IUser } from "@/types/interfaces";

interface UserDropdownProps {
  children: JSX.Element[]
  currentUser?: IUser;
}

const UserDropdown: React.FC<UserDropdownProps> = ({currentUser, children}) => {

  const { data: session } = useSession()

  return <div className="dropdown dropdown-end">
            <label tabIndex={0} className=""> <Avatar src={currentUser?.profileImage}/></label>
            <div tabIndex={0} className="dropdown-content card card-compact shadow bg-opacity-25 bg-gray-400 backdrop-blur-2xl min-w-[300px] p-2 rounded-2xl">
                <div className="card-body">
                  { children }
                </div>
            </div>
            </div>
};

export default UserDropdown;
