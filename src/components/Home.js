import React from "react";
import backgroundImage from "../horizon.jpg";

export default function Home() {
  return (
    <main>
      <img src={backgroundImage}
        alt="Edge of Earth's horizon seen from space"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
        <h1 className="text-6xl text-blue-100 font-bold leading-none lg:leading-snug">Web | iOS | AWS</h1>
      </section>
    </main>
  )
};