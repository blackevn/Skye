import Link from "next/link";

const page = async () => {

  await fetch("http://localhost:3000/api/hello").then(res => res.json()).then(data => console.log(data))

  return <div className="w-full h-screen grid place-items-center">

               <Link href='/auth'>
                Auth
               </Link>
               
          </div>;
};

export default page;
