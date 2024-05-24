import { useAuhtorzationClientMutation } from "@/entities/login/login.api";
import { Button, Spinner, TextInput } from "flowbite-react";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm: FC = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [request, { data, isSuccess, isLoading }] =
    useAuhtorzationClientMutation();

  if (isSuccess) {
    localStorage.setItem("access", data.data?.accessToken!);
    localStorage.setItem("refresh", data.data?.refreshToken!);

    navigate("/");
  }

  return (
    <form
      className="w-full flex flex-col gap-5 pb-10"
      onSubmit={(e) => {
        e.preventDefault();
        request(state);
      }}
    >
      <div className="mb-8">
        <h1 className="text-4xl text-center font-semibold">Войти</h1>
      </div>
      <div className="w-full flex flex-col gap-2">
        <TextInput
          className="w-full"
          placeholder="Введите логин"
          value={state.username}
          onChange={(ev) =>
            setState((prev) => ({ ...prev, username: ev.target.value }))
          }
        />
        <TextInput
          className="w-full"
          placeholder="Введите пароль"
          type="password"
          onChange={(ev) =>
            setState((prev) => ({ ...prev, password: ev.target.value }))
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-[#835de1] hover:bg-[#9b7ef1] text-white transition"
          type="submit"
          disabled={
            state.username.length <= 3 ||
            state.password.length <= 3 ||
            isLoading
          }
        >
          {isLoading ? (
            <Spinner color="purple" size="sm" />
          ) : (
            <span>Войти</span>
          )}
        </Button>
        <Button
          color="transparent"
          size="lg"
          className="w-full bg-transparent hover:bg-gray-100 text-gray-500 transition"
          onClick={() => navigate(-1)}
        >
          <span>Назад</span>
        </Button>
      </div>
      <div className="w-full text-center">
        <a
          href="#"
          className="text-center text-[#835de1] hover:opacity-80 transition"
        >
          Не можете войти?
        </a>
      </div>
    </form>
  );
};
