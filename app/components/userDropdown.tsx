import React from "react";
import Avatar from "./avatar";

const UserDropdown = ({image, children}: any) => {

  return <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">{children}</label>
            <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                <div className="card-body">
                <h3 className="card-title">Card title!</h3>
                <p>you can use any element as a dropdown.</p>
                </div>
            </div>
            </div>
};

export default UserDropdown;
