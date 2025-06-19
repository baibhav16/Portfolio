
import { Inter} from "next/font/google";
import About from "./component/About";
import Projects from "./Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<main>
<About/>

  </main>
  
  );
}
