import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Education() {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "education"]{
      course,
      semester,
      college,
      topics
    }`).then((data) => setEducationData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <section>
          <article>
            <h3>
              <div>Some content</div>
            </h3>
          </article>
        </section>
      </section>
    </main>
  );
};