import React from "react";

type props = {
  message?: string;
};

export default function Loading({ message = "Loading..." }: props) {
  return <div className="text-base animate-bounce">{message}</div>;
}
