"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="mt-4 border-2 border-grey-50 p-4 rounded-lg hover:text-amber-600"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
