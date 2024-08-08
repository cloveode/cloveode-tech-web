import Link from "next/link";

export const Contact = () => {
  return (
    <div className="w-full py-8 px-4 bg-gray-200 mt-[100px]">
      <div className="text-center container mx-auto mt-15 mb-20 ">
        <h1 className="text-5xl md:text-6xl text-gray-600 font-bold font-poppins md:mt-8">
          Get in Touch with Us
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-poppins text-body-color mb-8 dark:text-dark-6">
          Ready to discuss your project or explore how our services can benefit
          your business?
        </p>
        <Link
          href={"https://tally.so/r/wv4Y9d"}
          className="btn btn-wide border-none font-poppins text-white hover:bg-black hover:underline bg-black"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
