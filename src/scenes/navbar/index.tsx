import { useState } from "react";
// https://heroicons.com/
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isAtTop: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isAtTop }: Props) => {
  // I'm going to use these tailwind classes often so I'm sticking them into a
  // variable.
  const flexBetween = "flex items-center justify-between";

  // provies a convienient conditional for website responsiveness.
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const navbarBackgroundColor = isAtTop ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      {/* Nav Outer Container */}
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navbarBackgroundColor}`}
      >
        {/* Nav Inner Container */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left */}
            <img src={Logo} alt="logo" />

            {/* Right */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Nav Links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Sign In / Become a Member */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {/* Need small screen and user to click button */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items */}
          <div
            className={"ml-[33%] flex flex-col gap-10 text-2xl transition-all"}
          >
            <Link
              page="Hero"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
