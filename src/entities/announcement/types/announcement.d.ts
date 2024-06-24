import { TagType } from "@/entities/tags/types/tags";

export type AnnouncementType = {
  uuid: string;
  title: string;
  content: string;
  authorId: string;
  dateTime: Date;
  tags: TagType[];
};
