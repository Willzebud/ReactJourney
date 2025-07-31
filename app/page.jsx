import { Header } from "@/src/Header";
import { REACT_CARDS } from "@/src/ReactCard";

export default function Home() {
  const filter = [...new Set(REACT_CARDS.map(card => card.category))]

  console.log({filter})
  return (
    <div className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header/>
      <div classeName="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col"></div>
    </div>
  );
}
