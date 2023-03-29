import React from "react";

const page = async () => {

  await fetch("http://localhost:3000/api/hello").then(res => res.json()).then(data => console.log(data))

  return <div>page</div>;
};

export default page;
