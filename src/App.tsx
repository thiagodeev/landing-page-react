import './Assets/styles/main.css';

import { HeroBanner } from "./Components/HeroBanner";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
  <>
    <header>
      <NavBar/>
    </header>
    <main>
      <HeroBanner/>
    </main>
  </>
  )
}

export default App
