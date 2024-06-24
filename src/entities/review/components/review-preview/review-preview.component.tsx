import { Preview } from "@/widgets/preview/preview.component";
import { FC } from "react";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";

export const ReivewPreview: FC = () => {
  const payload = useTypedSelector((state) => state.ReviewSliceReducer);
  return <Preview {...payload.origin} />;
};
