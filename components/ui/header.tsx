/** @format */

import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {title && (
        <h1 className="font-semibold text-2xl md:text-4xl leading-10 text-d_gray dark:text-white max-w-[542px] px-2">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="leading-6 text-base text-gray px-2 max-w-[650px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Header;
