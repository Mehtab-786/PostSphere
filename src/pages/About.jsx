import { Link } from "react-router-dom";
import { Logo } from "../components";

function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex">
                <Logo /> — A place to share ideas
              </h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                We believe in thoughtful writing, clear discussions and building
                a helpful community. PostSphere is a lightweight blog platform
                to create, read and collaborate.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition"
                >
                  View Posts
                </Link>

                <Link
                  to="/add-post"
                  className="inline-flex items-center px-4 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition"
                >
                  Add Post
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values & Mission */}
        <section className="mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                To make publishing simple and reading delightful. We focus on
                speed, accessibility, and an uncluttered experience so writers
                can focus on ideas and readers on discovery.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Fast & Accessible:</strong> Built for modern web
                    performance and accessibility.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Community-First:</strong> Encouraging respectful
                    discussion and knowledge sharing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <span>
                    <strong>Simple by Design:</strong> A minimal, friction-free
                    writing and reading experience.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900">
                Meet the Team
              </h2>
              <p className="mt-4 text-gray-600">
                A small, passionate team with big ideas for the future of online
                communities.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Mehtab Hussain</h3>
                    <p className="text-sm text-gray-500">Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Community</h3>
                    <p className="text-sm text-gray-500">
                      Readers, writers, and contributors like you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold">Ready to Join?</h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Create an account and start sharing your ideas. We welcome
            thoughtful posts and constructive feedback.
          </p>
          <div className="mt-6">
            <Link
              to="/signup"
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
            >
              Sign Up Now
            </Link>
          </div>
        </section>

        <div className="h-5" />
      </div>
    </main>
  );
}

export default About;
