import { Contact } from "@/components/Contact";

export default function About() {
  return (
    <div>
      <div className="container mx-auto mt-20">
        <h1 className="text-7xl font-semibold font-poppins">About Us</h1>
        <p className="text-gray-600 font-platypi font-medium text-2xl py-5">
          Cloveode Technologies: Pioneering Innovation in Web and Blockchain
          Solutions
        </p>
        <p className="text-dark font-platypi font-medium text-md">
          At Cloveode Technologies, we are dedicated to driving digital
          transformation through cutting-edge web and blockchain solutions.
          Founded on a passion for technology and innovation, our mission is to
          empower businesses worldwide with custom software solutions that
          enhance efficiency, security, and growth.
        </p>
        <div className="py-5 mt-10">
          <h3 className="text-4xl font-semibold font-poppins my-3">
            Who We Are
          </h3>
          <p className="text-dark font-platypi">
            We are a team of seasoned professionals with deep expertise in web
            development, blockchain technology, and custom software solutions.
            Our diverse backgrounds and skills come together to deliver
            exceptional results for our clients, from startups to established
            enterprises. We pride ourselves on our commitment to excellence,
            attention to detail, and personalized approach.
          </p>
        </div>
        <div className="divider"></div>
        <div className="py-5 mt-10">
          <h3 className="text-4xl font-semibold font-poppins my-3">
            Our Expertise
          </h3>
          <ul>
            <li>
              <p className="text-dark font-platypi">
                <span>Web Development:</span> We create dynamic, responsive, and
                visually stunning websites that capture your brand’s essence and
                drive user engagement. Our services include custom web design,
                e-commerce solutions, and SEO optimization to ensure your online
                presence stands out.
              </p>
            </li>
            <li>
              <p className="text-dark font-platypi">
                <span>Blockchain Development:</span> Leveraging the power of
                blockchain technology, we offer bespoke solutions including
                smart contracts, decentralized applications (DApps), and
                tokenization services. Our blockchain expertise helps businesses
                innovate and secure their digital assets.
              </p>
            </li>
            <li>
              <p className="text-dark font-platypi">
                <span>Custom Software Development:</span> We develop tailored
                software solutions to meet your unique business needs. From
                enterprise applications to system integration, our custom
                software is designed to enhance your operations and provide a
                competitive edge.
              </p>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="text-4xl font-semibold font-poppins my-3">
            Our Approach
          </h3>
          <p className="text-dark font-platypi">
            At Cloveode Technologies, we believe in a collaborative approach to
            achieve the best outcomes for our clients. We start by understanding
            your goals and challenges, then craft tailored solutions that align
            with your business objectives. Our agile development process ensures
            flexibility and adaptability, allowing us to respond swiftly to
            evolving requirements.
          </p>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="text-4xl font-semibold font-poppins my-3">
            Why Choose Us?
          </h3>
          <ul className="">
            <li>
              <p className="text-dark font-platypi">
                <span>Expert Team:</span> Our skilled professionals bring
                extensive experience and specialized knowledge to every project.
              </p>
            </li>
            <li>
              <p className="text-dark font-platypi">
                <span>Innovative Solutions:</span> We stay ahead of industry
                trends to deliver the latest and most effective technologies.
              </p>
            </li>
            <li>
              <p className="text-dark font-platypi">
                <span>Client-Centric Focus:</span> Your success is our priority.
                We work closely with you to ensure our solutions meet your
                specific needs.
              </p>
            </li>
            <li>
              <p className="text-dark font-platypi">
                <span>Global Reach:</span> With clients around the world, we
                have the experience and capability to handle projects of any
                scale.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Our Commitment</h3>
          <p className="text-dark font-platypi">
            We are committed to delivering high-quality solutions that drive
            real results. Whether you're looking to build a new website, develop
            a blockchain application, or create custom software, Cloveode
            Technologies is here to help you succeed.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
