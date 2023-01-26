import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  // provies a convienient conditional for website responsiveness.
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      {/* Added a tracker for the auto switching of the nav link color on user scroll */}
      {/* Framer Motion has a feature that can be used to trigger a function 
      when the user enters the section */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Left Section */}
        {/* Its a good idea to use basis when using flex-box over width */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          {/* Framer Motion Docs- https://www.framer.com/motion/ */}
          {/* initial = initial setting */}
          {/* whileInView = final setting */}
          {/* viewport -> once = only want the animation triggered once */}
          {/* viewport -> amount = how much of the div you have to see to trigger */}
          {/* transition -> duration = how long in secs  */}
          {/* variants -> set intial and whileInView keywords  */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* Its a good idea to place things that overlap relative
                    to another part of the page. Set relative on the parent div */}
            <div className="relative">
              {/* Make the child absolute */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="EVOGYM - evolutionary fitness" />
              </div>
            </div>
            <p className="mt-8 text-sm w-2/3 md:w-full md:text-base">
              Unrivaled Gym. Unparalleled Fitness Training Classes. World Class
              Studios to get the body that you've always dreamed of... Get your
              dream body now!
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline transition duration-200 ease-in hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* Right Section */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <motion.img
            src={HomePageGraphic}
            alt="Confident Gym Lady"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
          />
        </div>
      </motion.div>
      {/* Sponsors Section */}
      {isAboveMediumScreens ? (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="mx-auto flex w-4/5 items-center justify-between gap-8">
              <img src={SponsorFortune} alt="fortune-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorRedBull} alt="red-bull-sponsor" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Home;
