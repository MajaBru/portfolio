import { SiGithub } from "react-icons/si";

export const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 bg-base text-bgBase z-10">
      <div className="w-full mx-auto px-6 py-4 flex h-15 justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#home" className="hover:text-white transition-colors duration-300">
            Maja Celin Brunsvik
          </a>
        </div>
        <ul className="flex gap-5 space-x-8 text-lg font-medium">
          <li className="relative group">
            <a href="#about" className="hover:text-white transition-colors duration-300 relative">
              About me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#projects" className="hover:text-white transition-colors duration-300 relative">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#contact" className="hover:text-white transition-colors duration-300 relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        <a 
        href="https://github.com/MajaBru" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
        >
        <SiGithub size={34} />
        </a>
      </div>
    </nav>
  );
};
