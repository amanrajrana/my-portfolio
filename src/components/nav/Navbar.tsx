import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full">
      <div className="flex justify-between items-center border border-indigo-950 rounded-full max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold ml-5">{"<AmanRajRana/>"}</h1>

        <ul className="flex gap-x-12">
          <li>
            <a href="#about">Home</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <span className="">Light</span>
            <ThemeToggle />
            <span className="">Dark</span>
          </div>

          <div className="font-semibold rounded-full bg-purple-950 bg-opacity-50 h-full px-6 py-3 m-1">
            Contact Me
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
