import logo from '../logo.svg';

const NavBar = () => {
  return (
    <nav className="py-2.5 px-2 bg-white border-gray-200 sm:px-4 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Example App" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Example App
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
