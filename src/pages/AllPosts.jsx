import { lazy, Suspense, useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";
import { Container} from "../components/index";
const PostCard = lazy(() => import("../components/PostCard"));

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.rows);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <Container>
          <div className="flex items-center justify-center min-h-[40vh]">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl animate-pulse">
                <svg
                  className="w-6 h-6 text-white animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <p className="text-slate-600 font-medium">Loading posts...</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <Container>
          <div className="text-center space-y-6 min-h-[40vh] flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-400 to-slate-500 rounded-2xl shadow-lg mb-4 mx-auto">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">
                No Posts Found
              </h2>
              <p className="text-slate-600 max-w-md mx-auto">
                There are no posts available at the moment. Check back later for
                new content.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                All Posts
              </h1>
              <p className="text-slate-600">
                Explore our complete collection of {posts.length}{" "}
                {posts.length === 1 ? "post" : "posts"}
              </p>
            </div>

            {/* Filter/Sort Options (Future Enhancement) */}
            {/* <div className="hidden md:flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              
              <button className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                Sort
              </button>
            </div> */}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="group">
              <Suspense fallback={<div className="text-center self-center justify-self-center text-2xl font-semibold">Loading...</div>}>
              <PostCard {...post} />
              </Suspense>
            </div>
          ))}
        </div>

        {/* Load More Button (Future Enhancement) */}
        {/* {posts.length >= 12 && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl text-slate-700 font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Load More Posts
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        )} */}
      </Container>
    </div>
  );
}

export default AllPosts;
