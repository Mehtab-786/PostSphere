import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
const RTE = lazy(() => import("../RTE"));
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchAddPost, fetchUpdatePost } from "../../store/postSlice";

function PostForm({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const [ImagePrev, setImagePrev] = useState(null);

  const userData = useSelector((state) => state?.auth?.userData);

  useEffect(() => {
    const loadPreview = async () => {
      try {
        if (post?.featuredImage && !ImagePrev) {
          const url = await appwriteService.getFileView(post.featuredImage);
          setImagePrev(url);
        }
      } catch (error) {
        console.error("Error loading preview:", error);
      }
    };
    loadPreview();
  }, [post?.featuredImage]);

  const submitHandler = async (data) => {
    try {
      if (post) {
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        if (file) {
          await appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) {
          dispatch(fetchUpdatePost(dbPost));
          navigate(`/post/${dbPost.$id}`);
          toast.success("Post updated");
        }
      } else {
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        if (file) {
          const fileId = file.$id;
          setImagePrev(fileId);
          data.featuredImage = fileId;
        }

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData?.$id,
          userName: userData?.name,
        });

        if (dbPost) {
          dispatch(fetchAddPost(dbPost));
          navigate(`/post/${dbPost.$id}`);
          toast.success("Post created");
        }
      }
    } catch (err) {
      toast.warning(err.message);
      console.log("Appwrite error :: create/update post ::", err);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValidate: true,
          })
        );
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <Suspense
        fallback={
          <div className="text-center self-center justify-self-center text-2xl font-semibold">
            Loading...
          </div>
        }
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {post ? "Edit Post" : "Create New Post"}
            </h1>
            <p className="text-slate-600">
              {post
                ? "Update your existing post content and settings"
                : "Write and publish your new blog post"}
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
            <form onSubmit={handleSubmit(submitHandler)} className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="space-y-6">
                    <Input
                      label="Post Title"
                      placeholder="Enter an engaging title for your post"
                      {...register("title", { required: true })}
                    />

                    <Input
                      label="URL Slug"
                      placeholder="url-friendly-slug"
                      {...register("slug", { required: true })}
                      onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), {
                          shouldValidate: true,
                        });
                      }}
                    />
                  </div>

                  {/* Rich Text Editor */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <RTE
                      label="Post Content"
                      name="content"
                      control={control}
                      defaultValue={getValues("content")}
                    />
                  </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                  {/* Publish Settings Card */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                        />
                      </svg>
                      Publish Settings
                    </h3>

                    <div className="space-y-4">
                      <Select
                        options={["active", "inactive"]}
                        label="Publication Status"
                        {...register("status", { required: true })}
                      />

                      <Button
                        type="submit"
                        className={`w-full cursor-pointer ${
                          post
                            ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        } text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:ring-2 ${
                          post ? "focus:ring-green-500" : "focus:ring-blue-500"
                        } focus:ring-offset-2`}
                      >
                        <span className="flex items-center justify-center">
                          {post ? (
                            <>
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
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                              </svg>
                              Update Post
                            </>
                          ) : (
                            <>
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
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                              Publish Post
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* Featured Image Card */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Featured Image
                    </h3>

                    <div className="space-y-4">
                      <Input
                        label="Upload Image"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                      />

                      {ImagePrev && (
                        <div className="relative group">
                          <img
                            src={ImagePrev}
                            alt={post?.title?.slice(0, 50) || "Post Image"}
                            className="w-full rounded-lg shadow-sm border border-slate-200 transition-transform duration-200 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                              Current Image
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tips Card */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Writing Tips
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Write compelling titles that grab attention
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Use high-quality featured images
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Keep URLs short and descriptive
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Set status to "active" to publish
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default PostForm;
