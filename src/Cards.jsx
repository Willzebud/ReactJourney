// src/Cards.jsx
//import { Button } from "./Button";
import { ReactSvg } from "./logoReact";
import Link from "next/link";

export const Cards = ({ items }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={22} />
        <h2 className="text-base font-bold">React</h2>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold">
        {items.name}
      </p>
      <div className="flex w-full items-center gap-2">{items.category}</div>
      <Link href=""></Link>
    </div>
  );
};
