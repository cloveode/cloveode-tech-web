import Link from "next/link";
import Globe from "./animation/Globe";

export const CallToAction = () => {
  return (
    <div className="container mx-auto mt-[100px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <Globe />
        </div>
        <div className="my-auto">
          <h2 className="text-4xl font-poppins">
            Book a Free Consultation Call from Anywhere in the World
          </h2>
          <p className="text-dark my-4 font-platypi">
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
