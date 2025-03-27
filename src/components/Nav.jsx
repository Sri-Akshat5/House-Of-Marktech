import { useState } from "react";
import { Menu, X, Home, Briefcase, Mail, DollarSign } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Hero", href: "#hero", icon: <Home size={20} /> },
    { name: "Services", href: "#services", icon: <Briefcase size={20} /> },
    { name: "Pricing", href: "#pricing", icon: <DollarSign size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-400">
          MarkTechs 🚀
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 hover:text-blue-400 transition"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            {menuItems.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-center hover:text-blue-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
