import { FC } from "react";

const PublicListView: FC = () => {
  return (
    <div className="w-full max-w-[1440px] flex flex-row gap-2 m-auto pt-[80px]">
      <div className="w-full min-h-screen flex flex-col gap-2"></div>
      <aside className="w-1/3"></aside>
    </div>
  );
};

export default PublicListView;
