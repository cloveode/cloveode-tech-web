import Link from "next/link";
import Globe from "./animation/Globe";
import SparklesText from "./animation/SparklesText";

export const CallToAction = () => {
  return (
    <div className="container mx-auto mt-[4rem] md:mt-[8rem] md:px-0 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <Globe />
        </div>
        <div className="my-auto">
          <SparklesText
            className="text-4xl md:text-6xl font-poppins font-bold"
            text="Book a Free Consultation Call from Anywhere in the World"
          />
          <p className="text-dark my-4 font-poppins">
            No matter where you are, Cloveode Technologies is here to help you
            transform your ideas into reality. Schedule a free consultation call
            with our experts today and discover how our global expertise can
            drive your success. Our team is ready to assist you no matter your
            location.
          </p>

          <Link
            href={"https://calendly.com/cloveode-info/30min?month=2024-08"}
            className="btn btn-wide font-poppins border-none text-white hover:bg-black hover:underline bg-black"
          >
            Book A Free Consultation Call
          </Link>
        </div>
      </div>
    </div>
  );
};
