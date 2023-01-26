import React from "react";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import Link from "../navbar/Link";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="w-full bg-primary-100 py-20">
      <div className="mx-auto w-5/6 md:flex md:justify-between">
        <motion.div
          className="basis-1/3 pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={Logo} alt="EvoGym Logo" className="pb-5" />
          <p>
            Get in shape and feel great at our gym! Our state-of-the-art
            equipment and knowledgeable staff will help you reach your fitness
            goals. Whether you're a seasoned athlete or just starting out, we
            have something for everyone. With a variety of classes, personal
            training options, and flexible membership plans, we make it easy to
            fit fitness into your busy life. Come see us today and experience
            the difference at our gym!
          </p>
          <p className="pt-5">© Evogym All Rights Reserved</p>
        </motion.div>
        <motion.div
          className="pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="pb-5 font-bold">Links</p>
          {/* Nav Links */}
          <div className={"text-md flex flex-col gap-4"}>
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
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="pb-5 font-bold">Contact Us</p>
          <p className="pb-5">Call us anytime, day or night!</p>
          <p className="pb-5">(555) 123-6789</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
