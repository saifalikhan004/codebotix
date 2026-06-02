// Redux/auth removed: no user state or logout; static navigation
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const MobileNavLink = ({ to, children }) => (
    <NavLink to={to} onClick={() => setIsMenuOpen(false)}>
      {children}
    </NavLink>
  );

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Blogs", to: "/blogs" },
  ];

  return (
    <>
      <nav className="sticky top-0 inset-x-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex h-16 items-center justify-between lg:grid lg:grid-cols-3">
            {/* left: brand */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-2xl font-bold text-gray-900">
                CodeBotix
              </NavLink>
            </div>

            {/* center: desktop nav links */}
            <div className="hidden lg:flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.to}
                  className="relative text-gray-700 hover:text-black transition-colors duration-300 group font-inter"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </div>

            {/* right: desktop actions */}
            <div className="hidden lg:flex items-center justify-end space-x-5">
              <a
                href="https://calendly.com/codebotix/free-demo-class?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-green text-brand-green px-5 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-brand-green hover:text-white nav-float-demo"
                aria-label="Book a Free Demo"
              >
                Book a Free Demo
              </a>
              <NavLink
                to="/ai"
                className="bg-brand-green text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-transform hover:scale-105"
              >
                AI Lab
              </NavLink>
            </div>

            {/* mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-900"
                aria-label="Open menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-gray-900/95 text-white flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-7 right-6 text-white"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.nav
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col items-center gap-8 text-center"
            >
              {navLinks.map((link) => (
                <motion.div key={link.title} variants={linkVariants}>
                  <MobileNavLink to={link.to}>
                    <span className="text-3xl font-medium font-inter">{link.title}</span>
                  </MobileNavLink>
                </motion.div>
              ))}

              {/* mobile auth buttons */}
              <div className="mt-10 flex flex-col items-center gap-6">
                <motion.div variants={linkVariants}>
                  <a
                    href="https://calendly.com/codebotix/free-demo-class?month=2026-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green text-white px-6 py-3 rounded-lg font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Free Demo
                  </a>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <MobileNavLink to="/ai">
                    <span className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold">
                      AI Lab
                    </span>
                  </MobileNavLink>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
