import React from "react";
import Link from "next/link";

type props = {
  href?: string;
  children?: React.ReactNode;
};
export function ButtonLink({ href, children = null }: props) {
  return (
    <Link href={href} className="px-3 p-1 text-sm bg-gray-800 ">
      {children}
    </Link>
  );
}
