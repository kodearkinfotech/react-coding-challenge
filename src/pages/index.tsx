import React from "react";
import CategoryItem from "~/components/CategoryItem";
import ErrorMessage from "~/components/ErrorMessage";
import { Layout } from "~/components/Layout";
import Loading from "~/components/Loading";
import { useCategories } from "~/hooks/useData";

export default function HomePage() {
  const { state, fetchData } = useCategories();

  return (
    <Layout title="Popular Titles">
      {state.loading && <Loading />}
      {state.error && <ErrorMessage />}
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
        {state.data.map((c) => (
          <CategoryItem key={c} name={c} />
        ))}
      </div>
    </Layout>
  );
}
