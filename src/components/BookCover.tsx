import type { CSSProperties } from "react";

interface Props {
  title: string;
  author: string;
  color: string;
  accent: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { w: "w-28", h: "h-40", title: "text-[11px]", author: "text-[8px]" },
  md: { w: "w-full", h: "aspect-[2/3]", title: "text-base", author: "text-[10px]" },
  lg: { w: "w-full", h: "aspect-[2/3]", title: "text-2xl", author: "text-xs" },
};

export function BookCover({ title, author, color, accent, size = "md", className }: Props) {
  const s = sizes[size];
  const style: CSSProperties = {
    backgroundColor: color,
    color: accent,
    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.25) 100%)`,
  };
  return (
    <div
      className={`book-shadow relative overflow-hidden rounded-[2px] ${s.w} ${s.h} ${className ?? ""}`}
      style={style}
    >
      <div
        className="absolute inset-y-0 left-0 w-[3px] opacity-30"
        style={{ backgroundColor: "#000" }}
      />
      <div className="flex h-full flex-col justify-between p-4">
        <div
          className="h-px w-full opacity-50"
          style={{ backgroundColor: accent }}
        />
        <div className="text-center">
          <div
            className={`font-serif italic leading-tight ${s.title}`}
            style={{ color: accent }}
          >
            {title}
          </div>
          <div
            className={`mt-3 tracking-[0.25em] uppercase ${s.author} opacity-80`}
            style={{ color: accent }}
          >
            {author}
          </div>
        </div>
        <div
          className="h-px w-full opacity-50"
          style={{ backgroundColor: accent }}
        />
      </div>
    </div>
  );
}