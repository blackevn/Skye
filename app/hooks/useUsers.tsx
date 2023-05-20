import fetcher from "@/lib/fetcher";
import useSwr from "swr"


const useUsers = () => {

    const { data, error, isLoading, mutate } = useSwr('/api/users', fetcher)

    return { data, error, isLoading, mutate }

};

export default useUsers;
