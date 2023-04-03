import { AppProps } from "next/app";
import React from "react";
import { MyComponentProps } from "@/types/interfaces";
import Image from "next/image";

const Avatar = ({children, src}: MyComponentProps) => {

  return <div className="avatar">
        <div className="w-10 mask mask-squircle">
            <img src={ src }  alt="Avartar"/>
        </div>
        </div>
};

export default Avatar;
