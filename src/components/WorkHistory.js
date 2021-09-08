import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function WorkHistory() {
  const [workHistData, setWorkHist] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "workHistory"]{
        position,
        employer,
        location,
        companyURL,
        startDate,
        endDate,
        duties
      }`)
      .then((data) => setWorkHist(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-200 min-h-screen p-10">
      <section className="container mx-auto">
        <h1
          className="text-5xl flex justify-center"
        >Work History</h1>
        <h2
          className="text-xl text-gray-700 flex justify-center mb-12 pt-4"
        >Here is my extensive work history</h2>
        <div className="grid gap-8">
          {workHistData && workHistData.map((workHistory, index) => (
            <a
              href={workHistory.companyURL}
              alt={workHistory.companyURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <h2 className="text-white text-3xl font-bold px-3 py-4 bg-blue-700 bg-opacity-75">{workHistory.position}</h2>
                <h3 className="text-white text-lg font-bold px-3 py-2 pt-0 bg-blue-700 bg-opacity-75">{[workHistory.employer, ":\t", workHistory.location]}</h3>
                <span>
                  From:{" "}{workHistory.startDate}{" "}To:{" "}{workHistory.endDate}
                </span>
                <div>
                  <BlockContent
                    blocks={workHistory.duties} />
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};