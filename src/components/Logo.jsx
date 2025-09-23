import { Link } from "react-router-dom";

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center space-x-2 ${className} cursor-pointer`}>
      {/* Sphere-like circle */}
      {/* <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
      </div> */}

      {/* Brand text */}
      <Link to='/'>
      <span className="text-2xl font-extrabold tracking-wide">
        Post<span className="text-blue-500">Sphere</span>
      </span>
      </Link>
    </div>
  );
}

export default Logo;