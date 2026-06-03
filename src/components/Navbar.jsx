import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto py-6">
      {/* Logo */}
      <h1 className="text-4xl font-playwrite text-[#1b1325]">
        Angadpreet Kaur
      </h1>

      {/* Nav Links */}
      <div className="flex items-center gap-12 text-2xl font-light text-[#1b1325]">
        <a href="#" className="hover:text-[#59c3e6] transition-colors duration-300">about</a>
        <a href="#" className="hover:text-[#59c3e6] transition-colors duration-300">education</a>
        <a href="#" className="hover:text-[#59c3e6] transition-colors duration-300">projects</a>
        <a href="#" className="hover:text-[#59c3e6] transition-colors duration-300">Experience</a>
        <a href="#" className="hover:text-[#59c3e6] transition-colors duration-300">Skills</a>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-[#1b1325]">
        <a href="https://github.com/angaddd" className="hover:text-[#59c3e6] transition-colors duration-300"><FaGithub size={34} /></a>
        <a href="https://www.linkedin.com/in/angadkaur" className="hover:text-[#59c3e6] transition-colors duration-300"><FaLinkedinIn size={34} /></a>
        <a href="#" className="hover:text-[#59c3e6] transition-colors duration-300"><FaInstagram size={34} /></a>
      </div>
    </nav>
  );
};

export default Navbar;