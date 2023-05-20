import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import { useUsers, useCurrentUser } from "@/app/hooks";
import { IUser, UserProfile } from "@/types/interfaces";
import Loading from "../loading";
import Avatar from "../avatar";
import Link from "next/link";


const People: React.FC<UserProfile> = ({currentUser}) => {

    const { data: users = [] } = useUsers();

      if (!users.length) return <div className="h-[250px]">
                                          <Loading/>
                                </div>

  return <>
          <div className="space-y-4">
                <h1>People to follow</h1>
                <div className="space-y-4">
                        {users.map((user: IUser) =>

                                                    <div  key={user.id} >
                                                    
                                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                                        <div className="flex gap-4 items-center">
                                                        <Avatar 
                                                        userId={user.id} 
                                                        src={`${user?.profileImage !== null || '' ? user?.profileImage
                                                          : ('/vercel.svg')}`}
                                                        />
                                                        <Link href={`/home/profile/${user.id}`}>
                                                        <div>
                                                            <h1 className="font-bold text-sm">{user.name}</h1>
                                                            <h1 className="text-sm">@{user.userName}</h1>                                                 
                                                        </div>
                                                        </Link>
                                                        </div>
                                                        <Button text="" icon={faUserPlus} modifier="border border-gray-400"/>
                                                        </div>

                                                    </div>
                        ).slice(4,8)}
                </div>
            </div> 
         </>
};

export default People;
