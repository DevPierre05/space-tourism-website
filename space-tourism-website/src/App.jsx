import "./App.css";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import DestinationLayout from "./pages/destination/DestinationLayout";
import CrewLayout from "./pages/crew/CrewLayout";
import Crew_Mark from "./pages/crew/Crew_Mark";
import Crew_Douglas from "./pages/crew/Crew_Douglas";
import Crew_Victor from "./pages/crew/Crew_Victor";
import Crew_Anousheh from "./pages/crew/Crew_Anousheh";
import TechnologyLayout from "./pages/technology/TechnologyLayout";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europa from "./pages/destination/Europa";
import Titan from "./pages/destination/Titan";
import Vehicle from "./pages/technology/Vehicle";
import Spaceport from "./pages/technology/Spaceport";
import SpaceCapsule from "./pages/technology/SpaceCapsule";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<DestinationLayout />}>
          <Route index element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="crew" element={<CrewLayout />}>
          <Route index element={<Crew_Douglas />} />
          <Route path="mark" element={<Crew_Mark />} />
          <Route path="victor" element={<Crew_Victor />} />
          <Route path="anousheh" element={<Crew_Anousheh />} />
        </Route>
        <Route path="technology" element={<TechnologyLayout />}>
          <Route index element= {<Vehicle />}/>
          <Route path="spaceport" element={<Spaceport/>} />
          <Route path="space-capsule" element={<SpaceCapsule />} />
        </Route>
      </Route>
    )
  );

  useEffect(() => {
    AOS.init({
      delay: 20, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease",
      once: false,
    });
    AOS.refresh();
    
  }, [])

  return <RouterProvider router={router} />;
}

export default App;
