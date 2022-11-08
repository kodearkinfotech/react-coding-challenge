import Link from "next/link";
import React from "react";

type CategoryItemProps = {
  name?: string;
};
export default function CategoryItem({ name = "Unnamed" }: CategoryItemProps) {
  return (
    <Link href={`/${name}`} className="flex w-full">
      <div className=" hover:-translate-y-2">
        <div className=" w-full bg-gray-700 h-48 relative flex justify-center items-center ">
          <img src="/assets/placeholder.png" className=" w-80  scale-150" />
          <div className=" absolute inset-0  w-full h-full  flex justify-center items-center">
            <h2 className="font-bold text-xl uppercase text-gray-50">{name}</h2>
          </div>
        </div>
        <p className="text-sm text-gray-600 py-1">
          Popular <span className=" capitalize">{name}</span>
        </p>
      </div>
    </Link>
  );
}
