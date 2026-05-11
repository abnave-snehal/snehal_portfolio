import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Portfolio,
  Social,
} from "./Components/index";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
function App() {
  const[experience,setExperience]=useState('2')
  useEffect(() => {
    const calculateTotalExperience = () => {
      const jobs = [
        {
          start: new Date("2022-01-03"),
          end: new Date("2025-01-31"),
        },
        {
          start: new Date("2025-02-03"),
          end: new Date("2025-10-17"),
        },
      ];

      let totalMonths = 0;

      jobs.forEach((job) => {
        const years = job.end.getFullYear() - job.start.getFullYear();
        const months = job.end.getMonth() - job.start.getMonth();
        totalMonths += years * 12 + months;
      });

      const finalYears = Math.floor(totalMonths / 12);
      const finalMonths = totalMonths % 12;

      setExperience(`${finalYears}.${finalMonths}`);
    };

    calculateTotalExperience();
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home experience={experience}/>
      <Portfolio />
      <Experience experience={experience} />
      <Social />
      <About />
      <Contact />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
    </div>
  );
}

export default App;
