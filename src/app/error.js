"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function error({ error, reset }) {
  // const navigate = use();

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center mx-auto max-h-full h-96">
      <h1>Something went wrong. Please try again later.</h1>
      <Link
        href="/"
        className="border-2 border-primary-500 p-4 px-8 rounded-lg hover:text-amber-600 cursor-pointer"
        onClick={() => reset()}
      >
        Try Again
      </Link>
    </div>
  );
}
