import WordRotate from "@/components/animation/WordRotate";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="container mx-auto mt-[4rem] md:mt-[8rem] md:px-0 px-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="text-left">
            <div className="flex">
              <h1 className="font-poppins text-6xl md:text-[140px] text-gray-600 font-bold md:leading-[140px]">
                Elevate
              </h1>
            </div>
            <div className="flex">
              <h1 className="md:text-[140px] text-6xl text-dark font-poppins font-bold md:leading-[140px]">
                Develop
              </h1>
            </div>
            <div className="flex">
              <WordRotate
                className="md:text-[140px] text-6xl font-bold font-poppins md:leading-[140px] text-[#ff345f]"
                words={["Grow", "Thrive", "Build"]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-gray-600 font-platypi font-medium text-2xl ">
              Transforming Your Digital Ambitions into Reality. At Cloveode
              Technologies, we specialize in creating innovative web and
              blockchain applications tailored to your unique needs.
            </p>
            <p className="text-dark font-platypi">
              Unlock the potential of your business with our comprehensive range
              of services. From ideation to implementation, we provide
              end-to-end solutions designed to meet your specific requirements.
            </p>
            <p className="text-dark font-platypi">
              Our commitment to excellence ensures every project is executed
              with the highest standards of professionalism and expertise. We
              turn your visions into reality by creating bespoke applications
              that exceed expectations, driving tangible results and sustained
              growth for your business.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href={"https://tally.so/r/wv4Y9d"}
                className="btn btn-wide border-none font-poppins text-white hover:bg-black bg-black hover:underline"
              >
                Contact Us
              </Link>

              <Link
                href={"https://calendly.com/cloveode-info/30min?month=2024-08"}
                className="btn btn-wide  btn-outline hover:underline  hover:bg-white font-poppins hover:text-black"
              >
                Book A Free Consultation Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
