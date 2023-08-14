import Square from "@/components/TikTakToe/Square/Square";
import { Button } from "../components/Button";
import Image from "next/image";

import Board from "@/components/TikTakToe/Board/Board";

function HomePage() {
  return (
    <main>
      <div>
        <h1> Welcome to BlueberryTart </h1>{" "}
        <Board/>
      </div>
      <div></div>
    </main>
  );
}

export default HomePage;
