"use client";

import SearchBar from "@/components/SearchBar";
import ViewAll from "@/components/ViewAll";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const data = (params.tags as String).split('%2C');

  return (
    <div>
      <SearchBar />
      <ViewAll topic="search" tags={data} />
    </div>
  );
};

export default page;
