import { FC } from "react";
import { useGetListOfDraftsQuery } from "../../drafts.api";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { DraftCard } from "../draft-card/draft-card.component";

export const DraftsList: FC = () => {
  const { data, isLoading } = useGetListOfDraftsQuery();

  if (isLoading || !data) {
    return <Preloader fullScreen={false} />;
  }

  return (
    <div className="flex flex-col gap-2">
      {data.length == 0 && (
        <div className="w-full flex justify-center items-center rounded p-5">
          <h4>Пустота ваще...</h4>
        </div>
      )}
      {data.map((draft) => (
        <DraftCard key={draft.uuid} {...draft} />
      ))}
    </div>
  );
};
