import Link from "next/link";
import React from "react";

export default function Credit() {
  return (
    <div className="bg-zinc-950 py-12 text-center">
      <h1 className="py-2 text-2xl uppercase md:text-4xl tracking-wide flex items-center justify-center leading-none select-none font-semibold">
        <span
          data-content="Crafted"
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
            CRAFTED
          </span>
        </span>
        <span
          data-content="by"
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
            BY
          </span>
        </span>
        <span
          data-content="Dev Chauhan"
          className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3 before:underline"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
            <Link
              className="underline"
              href="https://in.linkedin.com/in/dev-chauhan-7646a125b"
              target="_blank"
            >
              DEV CHAUHAN
            </Link>
          </span>
        </span>
      </h1>
    </div>
  );
}
