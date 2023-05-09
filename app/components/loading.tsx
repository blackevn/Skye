import { BarLoader } from "react-spinners";

const Loading: React.FC = () => {
  return <div className="w-full min-h-[200px] grid place-items-center">
            {/* <button className="btn btn-circle loading"></button> */}
            <BarLoader className="" color="gray"/>
         </div>;
};

export default Loading;
