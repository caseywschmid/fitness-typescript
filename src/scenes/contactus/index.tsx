import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Heading from "@/shared/Heading";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  // This is rare instance where the 'any' keyword is appropriate in TS
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>
            <span className="text-primary-500">Join Now</span> to get in shape!
          </Heading>
          <p>
            Don't wait any longer, join our gym today and take the first step
            towards a healthier, happier you! With our state-of-the-art
            equipment, knowledgeable staff, and flexible membership plans, we
            have everything you need to reach your fitness goals. Sign up now
            and see the results for yourself!
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* FormSubmit - https://formsubmit.co/ */}
            {/* Need to add anonymous email from Form Submit */}
            <form
              action="https://formsubmit.co/2dd821f078446a8a10d88c26c7d27b13"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            >
              {/* NAME */}
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              {/* EMAIL */}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "pattern" && "Invalid email address"}
                </p>
              )}
              {/* MESSAGE */}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              {/* Submit Button */}
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
                <button
                  type="submit"
                  className="mb-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 ease-in hover:scale-[1.01] hover:bg-primary-500 hover:text-white"
                >
                  Submit
                </button>
              </motion.div>
              <p className="w-2/5 text-xs">
                This form is fully functional and will send an email to my
                personal email address.{" "}
              </p>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-20 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactUsPageGraphic}
                alt="Lady Stretching"
                className="mx-auto w-5/6"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
