import { UserProfile } from "@/types/interfaces";
import Avatar from "../avatar";

const UserDetails: React.FC<UserProfile> = ({currentProfileUser}) => {

  return <>

      <div className=' space-y-6 '>

        <h1 className="font-bold text-2xl">{currentProfileUser?.name}</h1>

      <div className="profileHeaderImage">

        <img className="w-full absolute" src={`${currentProfileUser?.coverImage !== null || '' ? currentProfileUser?.coverImage
  
          : ('/backgroundPlace.jpg')}`} alt="" />

        </div>

        <div className="w-full gap-4 grid">

        <div className="flex gap-4 lg:gap-8 items-center">
              
              <Avatar width='w-16 lg:w-32' src={`${currentProfileUser?.profileImage !== null || '' ? currentProfileUser?.profileImage
  
          : ('/vercel.svg')}`}/>

              <div className='flex gap-4 relative items-center min-h-[20px] max-h-[30px]'>
                <div> 
                    <h2>Followers</h2>
                    <span className="font-bold text-3xl">0{currentProfileUser?.followingId.length}</span> 
                </div>
                  <div className='border h-[50px] border-gray-400 rounded-full '></div> 
                <div> 
                  <h2>Following </h2>
                  <span className="font-bold text-3xl">0{currentProfileUser?.followingId.length}</span>
                </div>
                  <div className='border h-[50px] border-gray-400 rounded-full'></div> 
                <div> 
                  <h2>Posts </h2>
                  <span className="font-bold text-3xl">0</span>
                </div>
                </div>
            </div>

        <div className=''>
         
            <h1 className="font-bold text-lg">@{currentProfileUser?.userName}</h1>
        </div>

        </div>
  

          <div className="max-w-[80%] lg:max-w-[50%]">
              <p className="">{currentProfileUser?.bio}</p>
          </div>

        </div>

        </>
};

export default UserDetails;
