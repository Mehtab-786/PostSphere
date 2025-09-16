import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import appwriteServices from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((posts) => {
        if (posts) {
          setPost(posts);
        }
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
