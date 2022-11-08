import React from "react";
import { VideoEntryType } from "~/lib/content-api";
type VideoTitleProps = {
  data: VideoEntryType;
};
export default function VideoTitle({ data }: VideoTitleProps) {
  return (
    <div className="w-full hover:-translate-y-2">
      <img
        src={data?.images["Poster Art"]?.url}
        className="  w-full h-full object-contain"
      />

      <p className="text-sm text-gray-600 ">{data?.title}</p>
    </div>
  );
}
