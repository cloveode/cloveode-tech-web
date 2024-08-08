import Link from "next/link";

export const Contact = () => {
  return (
    <section className="w-full p-8 bg-gray-200 mt-[100px]">
      <div
        className="text-center wow fadeInUp group mt-15 mb-20 "
        data-wow-delay=".15s"
      >
        <h1 className="text-[60px] font-poppins my-4 font-bold text-dark dark:text-white">
          Get in Touch with Us
        </h1>
        <p className="text-2xl font-platypi text-body-color mb-8 dark:text-dark-6 mx-20">
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
    </section>
  );
};
