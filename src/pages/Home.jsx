import Greetings from "../components/Greetings";
import PortfolioAnimation from "../components/PortfolioAnimation";
import About from "../components/About";
import BriefPro from "../components/BriefPro";
import BriefAbt from "../components/BriefAbt";
import ConnectionBttn from "../components/ui/ConnectionBttn";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Greetings />
      <PortfolioAnimation />
      <div className="bg-neutral-950 w-full flex justify-center flex-col items-center gap-4 p-10">
        <About />
        {/* <BriefPro /> */}
        <div className="text-neutral-700">Coming Soon</div>
      </div>
      <div className="bg-neutral-950 w-full flex justify-center items-center p-20">
        <div className="w-1/2 flex justify-between">
          <h1 className="text-neutral-700">2025 IG-@6bilguun9</h1>
          <ConnectionBttn />
        </div>
      </div>
    </div>
  );
}
export default Home;
