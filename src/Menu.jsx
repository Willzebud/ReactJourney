// src/Menu.jsx
//"use client";

import Link from "next/link";
import clsx from "clsx";

export const Menu = ({ filters, currentFilter }) => {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuFilter isActive={!currentFilter} filter="" key="filter">
        all
      </MenuFilter>
      {filters.map((filter) => {
        return (
          <MenuFilter
            isActive={filter === currentFilter}
            filter={filter}
            key={filter}
          >
            {filter}
          </MenuFilter>
        );
      })}
    </aside>
  );
};

const MenuFilter = ({ filter, children, isActive }) => {
  return (
    <Link
      href={`/?filter=${filter}`}
      key={filter}
      className={clsx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        { "font-bold": isActive }
      )}
    >
      {children}
    </Link>
  );
};
