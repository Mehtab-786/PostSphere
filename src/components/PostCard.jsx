import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import React, { useEffect, useState } from "react";

function PostCard({ $id, title, featuredImage,userName }) {

  const [ImagePrev, setImagePrev] = useState(null)

  useEffect(() => {
    appwriteService?.getFileView(featuredImage)
    .then(res => setImagePrev(res))
    .catch(err => console.error('Preview error', err))
  }, [featuredImage,ImagePrev])
  
  return (
    <Link to={`/post/${$id}`} className="block group">
      <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
        {/* Featured Image */}
        <div className="relative overflow-hidden aspect-video bg-slate-100">
          <img
            src={ImagePrev || null }
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />

          {/* Read More Badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200/60">
              Read More
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-lg font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h2>

          {/* Meta Information */}
          <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{userName.slice(0,1)}</span>
              </div>
              <span className="font-medium">{userName}</span>
            </div>

            <div className="flex items-center space-x-1">
              <span className="mr-2 hover:text-blue-500">Read Article</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default React.memo(PostCard);
