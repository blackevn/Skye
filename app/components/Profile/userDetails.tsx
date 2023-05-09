import { UserProfile } from "@/types/interfaces";
import Avatar from "../avatar";

const UserDetails: React.FC<UserProfile> = ({currentProfileUser}) => {

  return <>

      <div className=' space-y-6 text-white lg:text-gray-600'>

      <div className="profileHeaderImage">
            <img className="w-full absolute" src='/backgroundPlace.jpg' alt="" />
        </div>

        <div className="w-full gap-4 grid">

        <div className="flex gap-8 items-center">
              
              <Avatar width='w-16 lg:w-32'/>

              <div className='flex gap-4 relative items-center min-h-[20px] max-h-[30px]'>
                <div> 
                    <h2>Followers</h2>
                    <span className="font-bold text-3xl">0{currentProfileUser?.followingId}</span> 
                </div>
                  <div className='border h-[50px] border-gray-400 rounded-full '></div> 
                <div> 
                  <h2>Following </h2>
                  <span className="font-bold text-3xl">0{currentProfileUser?.followingId}</span>
                </div>
                  <div className='border h-[50px] border-gray-400 rounded-full'></div> 
                <div> 
                  <h2>Posts </h2>
                  <span className="font-bold text-3xl">0{currentProfileUser?.followingId}</span>
                </div>
                </div>
            </div>

        <div className=''>
            <h1 className="font-bold">{currentProfileUser?.name}</h1>
            <h1>@{currentProfileUser?.userName}</h1>
        </div>

        </div>
  

          <div className="max-w-[80%] lg:max-w-[50%]">
              <p className="">Non incididunt anim id consequat velit adipisicing laborum reprehenderit laborum quis.</p>
          </div>

        </div>

        </>
};

export default UserDetails;
