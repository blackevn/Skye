import Link from "next/link";

const page = async () => {


  return <div className="w-full h-screen grid place-items-center">

               <Link href='/auth'>
                Auth
               </Link>
               
          </div>;
};

export default page;
