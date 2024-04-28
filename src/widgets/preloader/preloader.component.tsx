import { Spinner } from "flowbite-react";
import { FC } from "react";

export const Preloader: FC<{ fullScreen?: boolean }> = ({
  fullScreen = true,
}: {
  fullScreen?: boolean;
}) => {
  return (
    <div
      className={`w-full ${
        fullScreen ? "h-screen" : "h-fit py-2"
      } flex justify-center items-center bg-white bg-opacity-80`}
    >
      <Spinner color="purple" size="xl" />
    </div>
  );
};
