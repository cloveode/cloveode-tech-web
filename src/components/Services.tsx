import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <div className="container mx-auto mt-[150px]">
      <h1 className="text-8xl font-semibold font-poppins">
        Domains Of Expertise
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-[100px]">
        <div className="w-full p-8 bg-[#5dcca0]">
          <div className="wow fadeInUp group" data-wow-delay=".15s">
            <h3 className="mb-3 text-md font-poppins text-white">
              Solidity | Rust | TypeScript | web3
            </h3>
            <h3 className="mb-3 font-poppins text-xl font-bold text-dark">
              Blockchain Development
            </h3>
            <p className="mb-8 font-platypi text-body-color dark:text-dark-6">
              Unlock the potential of blockchain technology with Cloveode
              Technologies through our custom development, smart contracts,
              DApps, tokenization, and integration services.
            </p>
            <Link
              className="flex hover:underline font-poppins text-white font-medium"
              href={""}
            >
              Learn More{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full p-8 bg-black ">
          <div className="wow fadeInUp group" data-wow-delay=".15s">
            <h3 className="mb-3 text-md font-poppins text-gray-500">
              React | PHP | Laravel | WordPress
            </h3>
            <h3 className="mb-3 text-xl font-poppins font-bold text-white">
              Website Development
            </h3>
            <p className="mb-8 font-platypi text-white">
              Transform your online presence with Cloveode Technologies. Our
              website development services include custom web design, responsive
              layouts, and e-commerce solutions.
            </p>
            <Link
              className="flex hover:underline font-poppins text-white font-medium"
              href={""}
            >
              Learn More{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full p-8 bg-[#ff345f] ">
          <div className="wow fadeInUp group" data-wow-delay=".15s">
            <h3 className="mb-3 text-md font-poppins font-medium text-gray-900">
              Python | Rust |Go
            </h3>
            <h3 className="mb-3 text-xl font-poppins font-bold text-white">
              Custom Software Development
            </h3>
            <p className="mb-8 font-platypi text-white">
              Enhance your business operations with Cloveode Technologies. Our
              custom software development services include tailored software
              solutions, enterprise application development, and AI Development.
            </p>
            <Link
              className="flex hover:underline font-poppins text-white font-medium"
              href={""}
            >
              Learn More{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
