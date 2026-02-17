"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-colors",
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          {dates ? (
            <time className="text-sm text-muted-foreground">{dates}</time>
          ) : null}
        </div>
        <div className="text-sm text-muted-foreground">
          <Markdown
            components={{
              p: ({ children }) => (
                <p className="mb-0 leading-relaxed">{children}</p>
              ),
            }}
          >
            {description}
          </Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full border border-border/60 bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {href && (
          <Button asChild size="sm" className="mt-3 w-fit gap-2">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
