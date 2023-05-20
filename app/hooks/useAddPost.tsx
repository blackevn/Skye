import axios from "axios";
import { useState } from "react";
import usePosts from "./usePosts";
import { PostData } from "@/types/interfaces";
import { useAppContext } from "../context/AppContext";
import { Toast } from "../components";
import { toast } from "react-hot-toast";
import { faCheckCircle, faExclamationCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";



const initialPostData: PostData = {
    body: "",
    image: ""
}

const useAddPost = () => {

const { mutate: mutatePosts } = usePosts();
const { user } = useAppContext()
const [ postData, setPostData ] = useState<PostData>(initialPostData)

const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setPostData((prevData) => ({
        ...prevData,
        [name]: value
        }))
}                                            

const handlePost: () => void = async () => {

    try {

    await axios.post('/api/posts', postData )

    toast.custom((t) => (<Toast
        text={`Post added`}
        modifier="bg-green-500 text-white"
        icon={faCheckCircle}
       />))

    } catch (error) {

        toast.custom((t) => (<Toast
            text={`Something went wrong. Please try again.`}
            modifier="bg-orange-500 text-white"
            icon={faExclamationTriangle}
           />))
        
    }
}

const defaultPrevent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    }
  
    return {

        defaultPrevent, handlePost, mutatePosts,
        handleEditChange, user, postData, setPostData
    }
};

export default useAddPost;
