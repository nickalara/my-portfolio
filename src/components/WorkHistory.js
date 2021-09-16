import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

// Not using background image yet. Saving import for later.
// import backgroundImage from "../horizon.jpg";

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
      <section className="container mx-auto max-w-3xl">
        <h1
          className="text-5xl flex justify-center"
        >Work History</h1>
        <h2
          className="text-xl text-gray-700 flex justify-center mb-12 pt-4"
        >Here is my extensive work history. Clicking anywhere within a section takes you to the contact info for that employer.</h2>
        <div className="grid gap-8">
          {workHistData && workHistData.map((workHistory, index) => (
            <a
              href={workHistory.companyURL}
              alt={workHistory.companyURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="shadow-2xl">
                <div
                  className="block relative bg-blue-200"
                  key={index}>
                  <div className="text-white font-bold bg-blue-600 bg-opacity-80 px-3">
                    <h2 className=" text-3xl pt-4 pb-2">{workHistory.position}</h2>
                    <h3 className="text-white text-lg px-3 py-2 pt-0">{[workHistory.employer, ":\t", workHistory.location]}</h3>
                  </div>
                  <div className="px-3 pb-2">
                    From:{" "}{workHistory.startDate}{" "}To:{" "}{workHistory.endDate}
                    <BlockContent
                      blocks={workHistory.duties} />
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};