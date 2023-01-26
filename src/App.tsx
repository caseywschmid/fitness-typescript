import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourclasses";
import ContactUs from "@/scenes/contactus";
import Footer from "@/scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  // need a state to track whether the user has scrolled down or not so the bg
  // color of the navbar can be changed.
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        // Ensures the Home option on the navbar has its color changed since
        // thats where we should be if we're at the top of the page.
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsAtTop(false);
      }
    };
    // anytime the user scrolls, check the y position and change navbar color
    // accordingly
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isAtTop={isAtTop}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
