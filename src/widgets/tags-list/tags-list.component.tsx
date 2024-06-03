import { useGetListOfTagsQuery } from "@/entities/tags/tags.api";
import { FC, useEffect } from "react";
import { TagRow } from "../tag-row/tag-row.component";
import { useActions } from "@/shared/hooks/redux/redux.actions";

export const TagsList: FC = () => {
  const { data, isLoading, isSuccess } = useGetListOfTagsQuery();
  const { setGlobalLoading } = useActions();

  useEffect(() => {
    setGlobalLoading(false);
  }, [isSuccess && data]);

  if (isLoading || !data) {
    setGlobalLoading(true);

    return <></>;
  }

  return data?.map((item) => <TagRow key={item.id} {...item} />);
};
