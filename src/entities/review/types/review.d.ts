export type ReviewType = {
  uuid: string;
  title: string;
  content: string;
  authorId: string;
  dateTime: Date;
  reason: string;
  inspector: string;
  tags: [];
  statusReview: "accept" | "review" | "reject";
};

export type ReviewPayload = {
  uuid: string;
  tags: number[];
};
