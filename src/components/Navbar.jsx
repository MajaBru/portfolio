import { useLocation, useNavigate } from "react-router";
import { SiGithub } from "react-icons/si";
import { FaArrowLeft} from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isProjectPage = location.pathname !== "/";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-auto bg-base text-bgBase z-20 shadow-md">
      <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-xl font-bold">
          <a
            href="/"
            className="hover:text-white transition-colors duration-300"
            onClick={closeMenu}
          >
            Maja Brunsvik
          </a>
        </div>

        <div className="md:hidden z-30 flex items-center justify-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <IoClose size={36} /> : <IoMenu size={36} />}
          </button>
        </div>

        {!isProjectPage && (
          <><ul className="hidden md:flex gap-8 text-lg font-medium">
            <li className="relative group">
              <a href="#projects" className="hover:text-white transition">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="relative group">
              <a href="#about" className="hover:text-white transition">
                About me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li className="relative group">
              <a href="#contact" className="hover:text-white transition">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          <a
            href="https://github.com/MajaBru"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex cursor-pointer hover:scale-110 transition-transform duration-300 items-center gap-2"
          >
              <SiGithub size={30} />
            </a></>
        )}


        {isProjectPage && (
          <a
            href="#projects"
            onClick={() => navigate("/#projects")}
            className="hidden md:flex text-white hover:text-accent transition duration-300 items-center gap-2"
          >
            <FaArrowLeft />
            <span>Back to projects</span>
          </a>
        )}
      </div>
      

      {menuOpen && (
        <div className="md:hidden bg-secondary px-6 pb-6 pt-2 flex flex-col gap-4 text-lg font-medium shadow-md">
          {!isProjectPage ? (
            <>
              <a href="#projects" className="block hover:text-white pt-4" onClick={closeMenu}>Projects</a>
              <a href="#about" className="block hover:text-white" onClick={closeMenu}>About me</a>
              <a href="#contact" className="block hover:text-white" onClick={closeMenu}>Contact</a>
            </>
          ) : (
            <a
              href="#projects"
              onClick={() => {
                closeMenu();
                navigate("/#projects");
              }}
              className="flex items-center gap-2 text-white hover:text-accent pt-4  "
            >
              <FaArrowLeft />
              <span>Back to projects</span>
            </a>
          )}

          <a
            href="https://github.com/MajaBru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white pt-2"
            onClick={closeMenu}
          >
            <SiGithub size={24} />
            <span className="text-sm">Github link</span>
          </a>
        </div>
      )}
    </nav>
  );
};
