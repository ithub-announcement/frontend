import { FC } from "react";
import { useGetListOfDraftsQuery } from "../../drafts.api";
import { Preloader } from "@/widgets/preloader/preloader.component";
import { DraftCard } from "../draft-card/draft-card.component";

export const DraftsList: FC = () => {
  const { data, isLoading } = useGetListOfDraftsQuery();

  if (isLoading || !data) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col gap-2">
      {data.map((draft) => (
        <DraftCard key={draft.uuid} {...draft} />
      ))}
    </div>
  );
};
