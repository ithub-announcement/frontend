import { LoginForm } from "@/widgets/login/login-form.component";
import { FC } from "react";

const LoginView: FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm h-screen flex justify-center items-center px-2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
