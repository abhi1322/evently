"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

type urlPaginationProms = {
  urlParamName?: string;
  page: Number | string;
  totalPages: Number;
};

const Pagination = ({ urlParamName, page, totalPages }: urlPaginationProms) => {
  const router = useRouter();

  const searchPrams = useSearchParams();
  const onClick = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchPrams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex gap-2">
      <Button
        className="w-28"
        size="lg"
        variant="outline"
        onClick={() => onClick("prev")}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>
      <Button
        className="w-28"
        size="lg"
        variant="outline"
        onClick={() => onClick("next")}
        disabled={Number(page) >= Number(totalPages)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
