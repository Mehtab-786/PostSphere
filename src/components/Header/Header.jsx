import { Container, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

return (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
    <Container>
      <nav className="flex items-center justify-between py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-slate-900 cursor-pointer hover:text-blue-600 transition-colors duration-200">
            Logo
          </span>
        </div>

        {/* Navigation Menu */}
        <ul className="flex items-center space-x-1">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.slug}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-4 py-2 text-balance font-medium text-slate-700 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
              </li>
            ) : null
          )}
          
          {/* Logout Button */}
          {authStatus && (
            <li className="pl-4">
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
);
}

export default Header;
