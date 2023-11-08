import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full z-50 mx-2">
      <div className="flex justify-between items-center backdrop-blur-md bg-black bg-opacity-5 border border-indigo-950 rounded-full max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold ml-4 md:ml-5 my-2">
          {"<AmanRajRana/>"}
        </h1>

        <ul className="gap-x-12 hidden sm:flex">
          <li>
            <a href="#about">Home</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <span className="">Light</span>
            <ThemeToggle />
            <span className="">Dark</span>
          </div>

          <div className="font-semibold rounded-full bg-purple-950 bg-opacity-50 h-full px-6 py-3 m-1 hidden md:block">
            Contact Me
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
