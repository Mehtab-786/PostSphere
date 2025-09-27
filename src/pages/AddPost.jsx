import { lazy, Suspense } from "react";
import { Container } from "../components";
const PostForm = lazy(() => import("../components/PostForm/PostForm"));

function AddPost() {
  return (
    <div className="">
      <Container>
        <Suspense
          fallback={
            <div className="text-center self-center justify-self-center text-2xl font-semibold">
              Loading...
            </div>
          }
        >
          <PostForm />
        </Suspense>
      </Container>
    </div>
  );
}

export default AddPost;
