export type ReviewType = {
  uuid: string;
  title: string;
  content: string;
  authorId: string;
  dateTime: Date;
  reason: string;
  tags: [];
  statusReview: StatusReview;
};

export enum StatusReview {
  review,
  accept,
  reject,
}

export type ReviewPayload = {
  uuid: string;
  tags: number[];
};
