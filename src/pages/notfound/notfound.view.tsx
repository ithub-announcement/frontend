import { FC } from "react";

const NotFoundView: FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center flex flex-col gap-10 justify-center items-center">
        <h1 className="text-6xl text-black font-bold">#404</h1>
        <a href="/" className="text-gray-400 hover:text-purple-400">
          <span>Вернуться назад</span>
        </a>
      </div>
    </div>
  );
};

export default NotFoundView;
