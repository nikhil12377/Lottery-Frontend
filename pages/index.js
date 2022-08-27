import { Header } from "../components/Header";
import { LotteryEntrance } from "../components/LotteryEntrance";

export default function Home() {
  return (
    <>
      <nav className="p-5 border-b-2 flex flex-row">
        <h1 className="py-4 px-4 font-bold text-3xl"> Decentralized Lottery</h1>
        <div className="ml-auto py-2 px-4">
          <Header />
        </div>
      </nav>

      <LotteryEntrance />
    </>
  );
}
