import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl: string; // Теперь обязательный пропс
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 relative overflow-hidden rounded-xl border border-neutral-200 transition duration-200 hover:shadow-xl dark:border-white/[0.2]",
        className
      )}
    >
      {/* Фоновое изображение на всю карточку */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={typeof title === "string" ? title : ""}
          fill
          className="object-cover transition-transform duration-500 group-hover/bento:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover/bento:bg-black/40" />
      </div>

      {/* Контент поверх изображения */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          <div className="mb-2 font-sans text-xl font-bold text-white drop-shadow-md">
            {title}
          </div>
          <div className="font-sans text-sm font-normal text-white/90 drop-shadow-md">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};