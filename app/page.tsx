import VideoBg from "./components/VideoBg";
import Navbar from "./components/Navbar";
import Homecon from "./components/Homecon";
import Recentlog from "./components/Recentlog";

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <VideoBg />
      <Navbar/> 
      <Homecon/>
      {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <button className="border border-white p-2 px-4 text-white hover:bg-white hover:text-black transition-colors">
          LOGS
        </button>
      </div> */}
      <Recentlog/>
    </div>

  )
}
