import axios from "axios";

export async function getFeedData() {
  const { data } = await axios.get<FeedResponseType>(`/api/feed`);
  return data;
}

export async function getCategoryTypes() {
  const { entries = [] } = await getFeedData();

  let categories: string[] = [];

  if (entries && entries.length) {
    entries.map((e) => {
      if (!categories.includes(e.programType)) {
        categories.push(e.programType);
      }
    });
  }

  return categories;
}

export async function getEntriesByCategory(category: VideoProgramType) {
  const { entries } = await getFeedData();

  return entries.filter((item) => item.programType === category);
}

export type VideoProgramType = "series" | "movie" | string;

export type VideoEntryType = {
  title: string;
  description: string;
  programType: VideoProgramType;
  releaseYear: number;
  images: {
    "Poster Art": ImageType;
  };
};

type ImageType = {
  url: string;
  width: number;
  height: number;
};

export type FeedResponseType = {
  entries: VideoEntryType[];
  total: number;
};
