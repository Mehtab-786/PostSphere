import { useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";
import { Container, PostCard } from "../components/index";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
      if (posts) {
        // console.log(posts)
        setPosts(posts.rows);
      }
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
