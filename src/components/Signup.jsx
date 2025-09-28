import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        dispatch(login(currentUser));
        navigate("/");
        toast.success("User registered successfully 🎉");
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8 backdrop-blur-sm">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Join us to get started with your journey
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
              <p className="text-red-700 text-sm font-medium text-center">
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(create)} className="space-y-6">
            <div className="space-y-5">
              {/* Full Name Input */}
              <div className="group">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400 text-slate-900 group-hover:border-slate-400"
                  {...register("name", { required: true })}
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400 text-slate-900 group-hover:border-slate-400"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address is not valid",
                    },
                  })}
                />
              </div>

              {/* Password Input */}
              <div className="group">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400 text-slate-900 group-hover:border-slate-400"
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                Create Account
              </Button>
            </div>
          </form>

          {/* Sign In Link */}
          <div className="text-center mb-5 mt-5">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Footer Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              By creating an account, you agree to our{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
