"use client";

import SearchBar from "@/components/SearchBar";
import ViewAll from "@/components/ViewAll";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {

  return (
    <div>
      <SearchBar />
      <ViewAll topic="search" />
    </div>
  );
};

export default page;
