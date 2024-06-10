import { FC } from "react";
import { ReviewType } from "../../types/review";
import { Card } from "flowbite-react";

export const ReviewCard: FC<ReviewType> = (_props) => {
  return <Card className="w-full shadow-none"></Card>;
};
