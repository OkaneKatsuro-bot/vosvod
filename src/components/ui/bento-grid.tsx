// components/ui/bento-grid.tsx
"use client";

import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[auto] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

type BentoGridItemProps = HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  imageUrl: string;
  titleClass?: string;
  descriptionClass?: string;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageUrl,
  titleClass,
  descriptionClass,
  ...props
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition-shadow duration-200",
        className
      )}
      {...props}
    >
      <img
        src={imageUrl}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 group-hover/bento:bg-black/70 transition-all" />
      
      <div className="relative p-6 flex flex-col h-full">
        {title && (
          <h3 className={cn("text-2xl font-bold mb-2", titleClass)}>
            {title}
          </h3>
        )}
        {description && (
          <p className={cn("text-lg mt-auto", descriptionClass)}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};