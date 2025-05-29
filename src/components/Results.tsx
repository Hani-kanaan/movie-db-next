import React from "react";
import Card from "./Card";
export default function Results({ results }: { results: any }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 py-6">
      {results.map((result: any) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
