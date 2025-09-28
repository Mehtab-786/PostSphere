import { useEffect, useState } from "react";
import { Button, Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [name, setname] = useState(null);

  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state?.auth?.userData);

  useEffect(() => {
    if (userData?.name) {
      setname(userData.name);
    }
  }, [name]);

  // Nav items depending on auth status
  const navItems = authStatus
    ? [
        { name: "Home", slug: "/", active: true },
        { name: "My Post", slug: "/my-post", active: true },
        { name: "Add Post", slug: "/add-post", active: true },
        { name: "About", slug: "/about", active: true },
      ]
    : [
        { name: "Home", slug: "/", active: true },
        { name: "About", slug: "/about", active: true },
      ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-2">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center: Navigation Menu */}
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.slug}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-3 py-2 font-medium text-slate-700 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Auth Buttons */}
          <div className="flex items-center space-x-3">
            {authStatus ? (
              <>
                {/* Username */}
                <button className="px-4 py-2.5 bg-slate-300 text-slate-700 rounded-xl font-medium text-sm shadow-sm hover:bg-slate-200 transition-all duration-200 cursor-pointer">
                  {name}
                </button>
                {/* Logout */}
                <LogoutBtn />
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 bg-blue-500 text-white rounded-xl font-medium text-sm hover:bg-blue-600 transition-all duration-200 cursor-pointer"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-xl font-medium text-sm hover:bg-indigo-600 transition-all duration-200 cursor-pointer"
                >
                  Signup
                </Button>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
