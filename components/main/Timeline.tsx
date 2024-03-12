'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Timeline = () => {
  const router = useRouter();
  return (
    <section id="timeline" className="h-fit py-12 mx-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold py-4 px-4 lg:px-8">Timeline</h1>
      <ol className="relative border-s mt-4 border-gray-200 dark:border-gray-700">

      <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
            <svg
              className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex tracking-wide items-center mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Registration Starts{" "}
          </h3>
          <time className="block mt-2 mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 6th, 2024
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Save the date! Registration opens on 6th March. Join us for an unforgettable experience filled with tech insights, innovation, and networking. Secure your spots now!
          </p>
          <Button onClick={()=>router.push('/')} className="text-lg">Register Now!</Button>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
            <svg
              className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
            Day 1{" "}
            <span className="bg-blue-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 ms-3">
              Orientation
            </span>
          </h3>
          <time className="block mt-2 mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 6th, 2024
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Day 1 of Nirmaan
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
            <svg
              className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
            Day 2
          </h3>
          <time className="block mt-2 mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 7th, 2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Day 2 of Nirmaan
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
            <svg
              className="w-2.5 h-2.5 text-yellow-800 dark:text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Day 3
          </h3>
          <time className="block mt-2 mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 8th, 2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Day 3 of Nirmaan
          </p>
        </li>
      </ol>
      <div className="py-4"></div>
    </section>
  );
};

export default Timeline;
