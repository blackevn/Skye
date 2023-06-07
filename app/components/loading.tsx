import { BarLoader, HashLoader } from "react-spinners";

const Loading: React.FC = () => {
  return <div className="w-full h-full grid place-items-center">
            {/* <button className="btn btn-circle loading"></button> */}
            <HashLoader className="bg-300-gray" color="gray"/>
         </div>;
};

export default Loading;
