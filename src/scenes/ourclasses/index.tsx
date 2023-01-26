import { SelectedPage } from "@/shared/types";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Heading from "@/shared/Heading";
import Class from "./Class";
import { ClassType } from "@/shared/types";

// There is a way to make things optional in your TS object types. Simply adding
// a question mark next to the key of what you want to make optional will make
// it not required
const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    text: "Get strong and toned with our weight training classes! Our experienced trainers will guide you through a variety of exercises and techniques to help you build muscle, increase strength, and improve overall fitness.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    text: "Find your balance and inner peace with our yoga classes! Our certified instructors will lead you through a range of poses and breathing exercises to help you improve flexibility, reduce stress, and increase overall well-being.",
    image: Image2,
  },
  {
    name: "Fitness Classes",
    image: Image5,
  },
  {
    name: "Ab/Core Classes",
    text: "Get a strong core and defined abs with our ab/core classes! Our certified trainers will lead you through a variety of exercises and techniques to target your abdominal and core muscles, helping you to achieve a stronger, more toned midsection.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    text: "Get a full-body workout and an adventure all in one with our outdoor adventure gym classes! Our certified trainers will lead you through a variety of outdoor exercises, including cardio, strength training, and functional movements, all while exploring the great outdoors.",
    image: Image4,
  },
  {
    name: "Training Classes",
    image: Image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mx-auto w-5/6 md:w-3/5">
            <Heading>Our Classes</Heading>
            <p className="py-5">
              Achieve your fitness goals with our comprehensive gym class
              offerings! Our certified trainers will guide you through a wide
              range of classes, including cardio, strength training, yoga, and
              more. Whether you're looking to lose weight, build muscle, or just
              improve your overall fitness, we have something for everyone. Our
              classes are held at convenient times, in a welcoming and inclusive
              environment, and are limited in size to ensure personalized
              attention. Join us today and start reaching your full potential!
            </p>
          </div>
        </motion.div>
        {/* Side Scroller */}
        {/* Basically, setting the child container to a width larger than that of 
        the parent container with width at 100% creates the conditions for a side 
        scroller. The only thing left after that is to set the overflow properties 
        on the parent div. */}
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                // This is a good way to make the key completely unique
                key={`${item.name}-${index}`}
                name={item.name}
                text={item.text}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
