import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img width={200} src="/logo-tech.png" alt="Cloveode Tech" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"https://tally.so/r/wv4Y9d"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
