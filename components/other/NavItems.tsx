"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hackathon",
    href: "/#hackathon",
    description:
      "MAIN EVENT: A 36-hour hackathon where you can build anything you want.",
  },
  {
    title: "Themes",
    href: "/#themes",
    description:
      "Choose from a variety of themes and build projects based on them.",
  },
  {
    title: "Our Team",
    href: "#our-team",
    description:
      "Nirmaan'24 is organized by a team of passionate students from Poornima University.",
  },
  {
    title: "Register ↗️",
    href: "/",
    description: "Register for Nirmaan'24 now.",
  },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background">
            <ul className="grid gap-3 p-4 md:w-[400px]  lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/#about" title="AboutUs">
                About Nirmaan&apos;24
              </ListItem>
              <ListItem href="/#faq" title="FAQ">
                Frequently Asked Questions
              </ListItem>
              <ListItem href="/#timeline" title="Timeline">
                Nirmaan&apos;24 Timeline
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hackathon & Events</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
