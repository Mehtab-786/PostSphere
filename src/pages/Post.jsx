import { useEffect,  useMemo,  useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Post() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state?.auth?.userData);
      
  const isAuther = useMemo(() => {
    return post && userData ? post?.userId === userData?.$id : false;
  }, [post, userData])


  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
        toast.success("post deleted")
      }
    });
  };

  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (post?.featuredImage) {
      appwriteService.getFileView(post.featuredImage).then((url) => {
        setFileUrl(url);
      });
    }
  }, [post?.featuredImage]);


  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img 
            src={fileUrl || null} 
            alt={post.title} 
            className="w-full aspect-video object-contain"
          />

          {isAuther && (
            <div className="absolute right-6 top-6">
                <Button className="mr-3 bg-blue-600 px-4 py-2 rounded-lg  text-white font-medium ">
              <Link to={`/edit-post/${post.$id}`}>
                  Edit
              </Link>
                </Button>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
                  <div className="px-8 py-8">
            <div className="w-full mb-8 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900 leading-tight">{post.title}</h1>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none">
              <div 
                className="browser-css text-slate-700 leading-relaxed"
                style={{ fontSize: '18px', lineHeight: '1.7' }}
              >
                {parse(post.content)}
              </div>
            </div>
          </div>
      </Container>
    </div>
  ) : null;
}
