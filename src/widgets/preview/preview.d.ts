import { TagType } from "@/entities/tags/types/tags";

export type PreviewProps = {
  title: string;
  content: string;
  authorId: string;
  tags: TagType[];
  dateTime: Date;
};
