import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
            className="rounded-xl"
            />

            <div className='text-xl font-bold'>
                <h2>{title}</h2>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
