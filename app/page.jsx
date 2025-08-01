//page.jsx
"use client";
import { Header } from "@/src/Header";
import { REACT_CARDS } from "@/src/ReactCard";
import { Menu } from "@/src/Menu";
import { Cards } from "@/src/Cards";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter");
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  return (
    <div className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="py-2 mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Menu currentFilter={currentFilter} filters={filters} />
      </div>
      <div className="grid grid-cols-1">
        {REACT_CARDS.map((card) => {
          return <Cards items={card} key={card.name} />
        })}
      </div>
    </div>
  );
}
