"use client";

import React, { useEffect, useState } from "react";
import VercelSVG from "./svg/vercel-svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiBell } from "react-icons/fi";
import { FaEquals } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

type pageType = {
  title: string;
  url: string;
};

const pages: pageType[] = [
  {
    title: "Overview",
    url: "/",
  },
  {
    title: "Integrations",
    url: "/integrations",
  },
  {
    title: "Activity",
    url: "/activity",
  },
  {
    title: "Domains",
    url: "/domains",
  },
  {
    title: "Usage",
    url: "/usage",
  },
  {
    title: "Settings",
    url: "/settings",
  },
];

const Header = (props: Props) => {
  const pathName = usePathname();
  const onlyWidth = useWindowWidth();
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  return (
    <div className="bg-gray-600/10">
      <div className="p-10 flex flex-wrap justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {/* first section */}
          <VercelSVG />
          {/* second section */}
          <Image
            className="rounded-full"
            height={39}
            width={39}
            src={"https://vercel.com/api/www/avatar?u=khaman1&s=44"}
            alt={"My Avatar"}
          />
          <p className="text-2xl font-semibold">khaman1</p>
          <Button className="rounded-full text-xl dark:bg-gray-800/40 dark:text-white">
            Hobby
          </Button>
          <Button className="rounded-full text-xl bg-white text-gray-700 dark:bg-black dark:fill-white">
            <svg height="30" viewBox="0 0 16 24">
              <path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"></path>
            </svg>
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button className="border dark:bg-transparent dark:text-gray-500 dark:semibold text-xl hover:dark:bg-gray-400 hover:text-gray-300">
            Feedback
          </Button>
          <Button className="dark:bg-transparent dark:text-gray-500 dark:semibold text-xl hover:dark:bg-gray-400 hover:text-gray-300">
            Changelog
          </Button>
          <Button className="dark:bg-transparent dark:text-gray-500 dark:semibold text-xl hover:dark:bg-gray-400 hover:text-gray-300">
            Help
          </Button>
          <Button className="dark:bg-transparent dark:text-gray-500 dark:semibold text-xl hover:dark:bg-gray-400 hover:text-gray-300">
            Docs
          </Button>
          <Button className="border p-2 dark:border-gray-500 rounded-full dark:text-white dark:bg-transparent text-2xl hover:dark:bg-gray-400 hover:text-gray-300">
            <FiBell />
          </Button>
          {mobileWidth && (
            <Button className="border p-2 dark:border-gray-500 rounded-full dark:text-white dark:bg-transparent text-2xl hover:dark:bg-gray-400 hover:text-gray-300">
              <FaEquals></FaEquals>
            </Button>
          )}
        </div>
      </div>

      <section className="mx-0 my-2 flex flex-wrap border-b-2">
        {/* <Button className="dark:bg-transparent dark:text-gray-500 text-xl hover:dark:bg-gray-400">
          123
        </Button> */}
        <div className="mx-5 flex flex-wrap gap-3 ">
          {pages.map((d, i) => (
            <Link
              className={cn(
                "p-3 rounded-t-md rounded-b-none dark:bg-transparent dark:text-gray-600 text-xl hover:dark:bg-gray-400 hover:bg-gray-700 hover:text-gray-300",
                d.url === pathName
                  ? "dark:text-white border-b-4 border-gray-100"
                  : ""
              )}
              key={i}
              href={d.url}
            >
              {d.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Header;
