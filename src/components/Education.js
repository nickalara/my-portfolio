import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

// Not using background image yet. Saving import for later.
// import backgroundImage from "../horizon.jpg";

export default function Education() {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "education"]{
        course,
        semester,
        college,
        topics
      }`)
      .then((data) => setEducationData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-200 min-h-screen p-10">
      <section className="container mx-auto">
        <h1
          className="text-5xl flex justify-center"
        >Coursework/Education</h1>
        <h2
          className="text-xl text-gray-700 flex justify-center mb-12 pt-4"
        >These are the computer science courses I have completed in my journey to developer.</h2>
        {educationData && educationData.map((education, index) => (
          <article>
            <div
              className="border border-black block relative bg-blue-200"
              key={index}>
              <div className="text-white font-bold bg-blue-700 bg-opacity-80 px-3">
                <h2 className=" text-3xl pt-4 pb-2">{education.course}</h2>
                <h3 className="text-white text-lg px-3 py-2 pt-0">{education.semester}</h3>
              </div>
              <div className="px-3 pb-2">
                <strong>{education.college}</strong>
                <BlockContent
                  blocks={education.topics} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};