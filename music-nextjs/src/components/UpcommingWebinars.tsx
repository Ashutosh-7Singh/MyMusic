"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcommingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Mastering Jazz Improvisation",
      description:
        "Learn the art of jazz improvisation from seasoned musicians and take your skills to the next level.",
      slug: "mastering-jazz-improvisation",
      isFeatured: true,
    },
    {
      title: "Exploring World Music Traditions",
      description:
        "Discover the rich tapestry of world music traditions from different cultures and regions around the globe.",
      slug: "exploring-world-music-traditions",
      isFeatured: true,
    },
    {
      title: "Songwriting Workshop: From Inspiration to Composition",
      description:
        "Unlock your creativity and learn the techniques of songwriting from experienced songwriters.",
      slug: "songwriting-workshop",
      isFeatured: true,
    },
    {
      title: "Introduction to Electronic Music Production",
      description:
        "Learn the basics of electronic music production and start creating your own tracks with software and hardware tools.",
      slug: "introduction-to-electronic-music-production",
      isFeatured: true,
    },
    {
      title: "The Art of Vocal Performance",
      description:
        "Explore the techniques and nuances of vocal performance with expert instructors.",
      slug: "art-of-vocal-performance",
      isFeatured: true,
    },
    {
      title: "Guitar Techniques Workshop: From Riffs to Solos",
      description:
        "Improve your guitar skills with this comprehensive workshop covering various techniques from riffs to solos.",
      slug: "guitar-techniques-workshop",
      isFeatured: true,
    },
    {
      title: "Percussion Masterclass: Exploring Rhythms of the World",
      description:
        "Dive into the diverse world of percussion and explore rhythms from various cultures and traditions.",
      slug: "percussion-masterclass",
      isFeatured: true,
    },
    {
      title: "Interactive Music Composition: From Idea to Performance",
      description:
        "Learn how to compose music interactively and see your creations come to life in real-time performances.",
      slug: "interactive-music-composition",
      isFeatured: true,
    },
    {
      title: "Advanced Music Production Techniques",
      description:
        "Take your music production skills to the next level with advanced techniques and workflows.",
      slug: "advanced-music-production-techniques",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center ">
          <h2 className="ext-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className=""> Enhacne Your Musical Journery</p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars.map(webinar=>({
            title:webinar.title,
            description:webinar.description,
            link:'/'
          }))} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 mt-5 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcommingWebinars;
