import { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import appwriteServices from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((posts) => {
        if (posts) {
          setPost(posts);
        }
        setLoading(false);
      }).catch(() => {
        setLoading(false);
        navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <Container>
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl animate-pulse">
                <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-slate-900">Loading Post</h2>
                <p className="text-slate-600">Please wait while we fetch your post data...</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <Container>
          <div className="text-center space-y-6 min-h-[60vh] flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg mb-4 mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.76 0L4.054 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-slate-900">Post Not Found</h1>
              <p className="text-slate-600 max-w-md mx-auto">
                The post you're trying to edit doesn't exist or you don't have permission to access it.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/")}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </button>
              
              <button 
                onClick={() => navigate("/all-posts")}
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-200 transition-all duration-200 shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                View All Posts
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return <PostForm post={post} />;
}

export default EditPost;