import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Heading from "@/shared/Heading";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

// You can set the type for TypeScript as well.
// Instead of enumerating all the details here, they are kept in the types.ts file.
// You should always tell TS what types make up your objects
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    text: "Work out in luxury as you enjoy our modern gym complete with the most up to date machines and amenities. You will not be disappointed!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    text: "No doubt you'll be able to find a class right up your alley! Enjoy some relaxing yoga or push yourself to the next level with some circuit training!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    text: "Need that extra push? Contact one of our Specialists to create a custom diet and excercise plan for you based on your body type and fitness level!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>More than just a gym.</Heading>
          <p className="my-5">
            We provide world class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We provide each
            and every member five star service because we truly care about you
            and your goals.
          </p>
        </motion.div>
        {/* Benefits */}
        {/* Created an array of objects to represent each of the benefit cards */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            // Dont forget the unique key
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              text={benefit.text}
              title={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Happy Members Section */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Image */}
          <motion.img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="Focused Gym Lady"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 25 },
              visible: { opacity: 1, x: 0 },
            }}
          />
          {/* Title */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Heading>
                    Millions of happy members getting{" "}
                    <span className="text-primary-500">fit</span>.
                  </Heading>
                </motion.div>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="my-5">
                Going to the gym has numerous benefits for both the body and
                mind. Regular exercise can help improve cardiovascular health,
                increase muscle strength and flexibility, and aid in weight
                management. It can also help reduce stress and improve mood, as
                well as boost energy levels and self-confidence.
              </p>
              <p className="mb-5">
                In addition, the social aspect of going to the gym can provide a
                sense of community and accountability. At our gym, we offer a
                variety of equipment and classes to suit all fitness levels, as
                well as personal training options for those looking for more
                guidance and motivation. Come see us today and experience the
                many benefits of a regular gym routine.
              </p>
            </div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <motion.div
                  className="mt-8 flex items-center gap-8 md:justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.75 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
