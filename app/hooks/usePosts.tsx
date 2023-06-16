import useSWR from 'swr';
import fetcher from "@/lib/fetcher";
import { useEffect, useRef } from 'react';


const usePosts = (userId?: string) => {

  const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
  const { data, error, isLoading, mutate, isValidating } = useSWR(url, fetcher);
  const containerRef = useRef<HTMLDivElement>(null);;
  
  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container && container.scrollHeight !== undefined && container.scrollTop !== undefined && container.clientHeight !== undefined) {
        if (container.scrollHeight - container.scrollTop === container.clientHeight) {
          mutate(); 
        }
      }
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [isValidating]);

  return {
    data,
    error,
    isLoading,
    mutate,
    isValidating,
    containerRef
  }
  
};

export default usePosts;