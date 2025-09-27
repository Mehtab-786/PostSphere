import { lazy, Suspense } from "react";
const SignUpComponent = lazy(() => import("../components/Signup"));

function SignUp() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center self-center justify-self-center text-2xl font-semibold">
            Loading...
          </div>
        }
      >
        <SignUpComponent />
      </Suspense>
    </div>
  );
}

export default SignUp;
