import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useEffect } from "react";

function PostCard({ $id, title, featuredImage }) {

  async function oneTime(){
    const fileimag = appwriteService.getFilePreview(featuredImage)
    const fileidd = appwriteService.getFilePreview($id)
    console.log($id)
    console.log(featuredImage)
    console.log(fileimag)
    console.log(fileidd)
  }
  useEffect(() => {
    // oneTime()
  },[])
  
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            <img src={`${appwriteService.getFilePreview(featuredImage)}&mode=admin`} alt={title} 
            className="rounded-xl"
            />

            <div className='text-xl font-bold'>
                <h2 className="text-black">{title}</h2>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
