'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Timeline = () => {
  const router = useRouter();
  return (
    <section id="timeline" className="h-fit py-12 mx-4 flex flex-col items-center justify-center px-4 md:px-8">
      <h1 className="text-5xl text-gray-700">Stay tuned for timeline !</h1>
    </section>
  );
};

export default Timeline;
