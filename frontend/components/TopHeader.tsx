"use client";

import { Icon } from "@/components/Icon";

interface TopHeaderProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
}

export default function TopHeader({ title, showBack, backHref = "index.html" }: TopHeaderProps) {
  return (
    <header className="flex justify-between items-center w-full px-margin-mobile h-14 bg-surface sticky top-0 z-50 border-b border-border-subtle/50 shadow-sm">
      {showBack ? (
        <>
          <a
            href={backHref}
            className="w-10 h-10 flex items-center justify-center -ml-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-high"
          >
            <Icon name="arrow_back_ios_new" />
          </a>
          <h1 className="text-headline-md text-on-surface font-semibold absolute left-1/2 -translate-x-1/2">
            {title}
          </h1>
          <div className="w-10 h-10" />
        </>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-primary-container flex items-center justify-center">
              <Icon name="person" className="text-on-primary text-[18px]" />
            </div>
            <a href="index.html" className="text-headline-md font-bold text-primary">
              RecruitFlow
            </a>
          </div>
          <a
            href="filter.html"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors"
          >
            <Icon name="search" className="text-primary" />
          </a>
        </>
      )}
    </header>
  );
}
