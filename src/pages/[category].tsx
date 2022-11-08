import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { Layout } from "~/components/Layout";
import VideoTitle from "~/components/VideoTitle";
import { useEntriesByCategory } from "~/hooks/useData";
import Loading from "~/components/Loading";
import ErrorMessage from "~/components/ErrorMessage";

export default function index() {
  const router = useRouter();

  const { category } = router.query;
  const { state, fetchData } = useEntriesByCategory();

  const [title, setTitle] = React.useState("");

  useEffect(() => {
    fetchData(category as string);
    setTitle(category as string);
  }, [category]);

  return (
    <Layout title={`Popular ${title}`}>
      {state.loading && <Loading />}
      {state.error && <ErrorMessage />}
      <div className="py-6 grid grid-cols-6 gap-6 w-full ">
        {state.data.map((v) => (
          <VideoTitle key={v.title} data={v} />
        ))}
      </div>
    </Layout>
  );
}
