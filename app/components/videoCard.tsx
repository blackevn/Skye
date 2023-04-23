import { IProps, Video } from "@/types/interfaces";
import { useWidth } from "../hooks";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import useZustand from "../hooks/useZustand";
import Button from "./button";


const VideoCard = () => {

  const [ width ] = useWidth()
  const toggle = useZustand((state) => state.toggle)
  const handleToggle =  useZustand((state) => state.toggleHandle)
 
  return <>

            <div className={`rounded-xl space-y-2 ${width >= 768 ? "bg-gray-400" : ""} xxs:h-[20em] xs:h-[25em] sm:h-[35em] md:h-[40em] xl:h-[50em] w-full snap-center p-4`}>

             <div className="flex gap-4 p-2 rounded-full items-center h-14" >
              <Image className="bg-white p-2 w-14 h-14 rounded-full" src={"/vercel.svg"} width={50} height={50} alt="thumbnail"/>
              <div>
                <h1 className="p-0 m-0">Kevin Louie</h1>
                <p className="p-0 m-0">@blackevn</p>
              </div>
             </div>

             <div className="w-full bg-gray-600 h-[70%] grid place-items-center rounded-lg">

              <Button clickEvent={() => handleToggle()} text="" icon={ toggle ? faPlayCircle : faPauseCircle} modifier="text-white text-5xl" />

             </div>

             <div>
              <h1 className="text-xl font-black">Title</h1>
             </div>
 
            </div>
  
        </>
};

export default VideoCard;
