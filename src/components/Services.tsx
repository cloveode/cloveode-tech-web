import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <div className="container mx-auto mt-[4rem] md:mt-[16rem] md:px-0 px-8">
      <h1 className="text-5xl md:text-8xl text-black md:leading-[10px]  font-bold font-poppins">
        Domains Of Expertise
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mt-[60px]">
        <div className="w-full p-8 bg-gray-600">
          <div className="wow fadeInUp group" data-wow-delay=".15s">
            <h3 className="mb-3 text-md font-semibold font-poppins text-gray-400">
              Solidity | Rust | TypeScript | Web3
            </h3>
            <h3 className="mb-3 font-poppins text-xl font-bold text-white">
              Blockchain Development
            </h3>
            <p className="mb-8 font-platypi text-white">
              Unlock the potential of blockchain technology with Cloveode
              Technologies through our custom development, smart contracts,
              DApps, tokenization, and integration services.
            </p>
            <Link
              className="flex hover:underline font-poppins text-white font-medium"
              href={"/services/blockchain"}
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
            <h3 className="mb-3 font-poppins font-semibold text-gray-500">
              React | PHP | Laravel | WordPress | Node
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
              href={"/services/website-development"}
            >
              Learn More{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full p-8 bg-gray-600 ">
          <div className="wow fadeInUp group" data-wow-delay=".15s">
            <h3 className="mb-3 text-md font-poppins font-semibold text-gray-400">
              Python | Rust | Go
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
              href={"/services/custom-software"}
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
