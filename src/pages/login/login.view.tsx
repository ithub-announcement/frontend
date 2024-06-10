import { useTitle } from "@/shared/hooks/react/useTitle.hook";
import { LoginForm } from "@/widgets/login/login-form.component";
import { FC } from "react";

const LoginView: FC = () => {
  useTitle("Вход в систему");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm h-screen flex justify-center items-center px-2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
