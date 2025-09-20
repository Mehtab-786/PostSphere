import { useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  async function getPosts() {
    await appwriteServices.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.rows);
      }
    });
  }

  useEffect(() => {
    getPosts();   
  }, []);

  if (posts.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-slate-50 to-slate-100">
        <Container>
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-slate-900">
                Welcome to Our Blog
              </h1>
              <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                Discover amazing stories and insights. Sign in to access all
                posts and join our community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={() => navigate("/signup")}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Sign In to Read Posts
              </button>

              <button className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-200 transition-all duration-200 shadow-sm">
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Latest Posts
          </h1>
          <p className="text-slate-600">
            Discover our latest stories and insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts?.map((post) => (
            <div key={post?.$id} className="group">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
