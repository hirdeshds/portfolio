/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-100 object-cover"
      onError={() => setImageError(false)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-200",
        className
      )}
    >
      {/* Image/video section removed. Only text, tags, and GitHub button remain. */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
          <div className="mt-0">
            <time className="text-xs text-gray-500">{dates}</time>
          </div>
        </div>
        <div className="text-sm flex-1 text-gray-700 mb-2">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 rounded px-2 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <div className="mt-2">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded font-semibold text-xs hover:bg-gray-800 transition"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
