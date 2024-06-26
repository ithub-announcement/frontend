import { useTitle } from "@/shared/hooks/react/useTitle.hook";
import { FC } from "react";

const NotFoundView: FC = () => {
  useTitle("Такой странички тут нет");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center flex flex-col gap-10 justify-center items-center">
        <img
          className="w-1/2 rounded"
          src="https://i.pinimg.com/564x/ca/4c/0f/ca4c0f03599823dac3a8ad403fcc44b1.jpg"
          alt="not found"
        />
        <h1 className="text-6xl text-black font-bold">#404</h1>
        <p>Ну чо не судьба(</p>
        <a href="/" className="text-gray-400 hover:text-purple-400">
          <span>Вернуться назад</span>
        </a>
      </div>
    </div>
  );
};

export default NotFoundView;
