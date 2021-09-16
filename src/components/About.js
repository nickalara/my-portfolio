import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageURLBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import backgroundImage from "../horizon.jpg";

const builder = imageURLBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
};

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`)
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main>
      <img src={backgroundImage}
        alt="Edge of Earth's horizon seen from space"
        className="absolute object-cover w-full h-full"
      />
      <div className="p-16 container mx-auto relative">
        <section
          className="flex p-20"
        >
          <img src={urlFor(author.authorImage).url()}
            className="rounded max-h-96 mr-14"
            alt={author.name}
          />
          <div className="container rounded bg-blue-300 bg-opacity-90 text-lg flex flex-col">
            <span className="px-10 pt-6">
              <h1
                className="text-4xl mb-4">
                My name is {" "}
                {author.name}.
              </h1>
              <div className="prose text-black">
                <BlockContent
                  blocks={author.bio}
                  projectId="xugza5hs"
                  dataset="production"
                />
              </div>
            </span>
          </div>
        </section>
      </div>
    </main>
  )
};