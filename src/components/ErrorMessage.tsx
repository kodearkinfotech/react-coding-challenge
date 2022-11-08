import React from "react";

type props = {
  message?: string;
};
export default function ErrorMessage({
  message = "Oops, Something went wrong",
}: props) {
  return <div className="text-red-500 text-base">{message}</div>;
}
