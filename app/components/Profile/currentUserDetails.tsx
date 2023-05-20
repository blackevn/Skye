import { UserProfile } from "@/types/interfaces";
import Avatar from "../avatar";

const CurrentUserDetails: React.FC<UserProfile> = ({ currentUser }) => {

    

  return <>

        <div className={`profileHeaderImage`}>
            <img className="w-full absolute" src={currentUser?.coverImage} alt="" />
        </div>

      <div className='grid grid-cols-2 md:flex gap-4 overflow-auto text-white lg:text-gray-600'>

               <div className="profileInfoCard">
              
<Avatar src={currentUser?.profileImage} userId={currentUser?.id} width="w-16 lg:w-24 "/>

                <div className="text-center font-bold">
                    <h1>{currentUser?.name}</h1>
                    <h1>@{currentUser?.userName}</h1>
                </div>
              
               </div> 


               <div className="profileInfoCard">
                
                <div className="text-center">
                    <h1 className="text-xl">Followers</h1>
                    <h1 className="text-7xl font-black">0{currentUser?.followingId}</h1>
                </div>
               </div>
               

               <div className=" profileInfoCard">
                <div className="text-center">
                <h1 className="text-xl">Following</h1>
                    <h1 className="text-7xl font-black">0{currentUser?.followingId}</h1>
                </div>
               </div>


               <div className=" profileInfoCard">
           
                <div className="text-center">
                    <h1 className="text-xl">Posts</h1>
                    <h1 className="text-7xl font-black">0{currentUser?.followingId}</h1>
                </div>
               </div>

        </div>

        </>
};

export default CurrentUserDetails;
