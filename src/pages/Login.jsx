import { lazy, Suspense } from "react";
const LoginComponent = lazy(() => import("../components/Login"));

function Login() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center self-center justify-self-center text-2xl font-semibold">
            Loading...
          </div>
        }
      >
        <LoginComponent />
      </Suspense>
    </div>
  );
}

export default Login;
