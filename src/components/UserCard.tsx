import Image from "next/image";
import React from "react";

interface UserCardProps {
  type: string;
}

const UserCard: React.FC<UserCardProps> = ({ type }) => {
  // component code
  return (
	<div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-wrap">
	   <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white p-2 rounded-full text-green-600 text-xm">2024/25</span>
        <Image src="/more.png" alt="" width={20} height={20}/>
       </div>
       <h1 className="text-2xl text-semibold my-4">2008</h1>
       <h1 className="capitalize text-sm font-medium text-gray-500">{type}</h1>
	</div>
  )
}

export default UserCard