import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="navbar md:bg-none bg-white sticky top-0 z-50">
      <div className="flex-1">
        <Link href={"/"} className="">
          <img width={200} src="/logo-tech.png" alt="Cloveode Tech" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="hover:bg-white hover:underline" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:bg-white hover:underline" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-white hover:underline"
              href={"https://tally.so/r/wv4Y9d"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
