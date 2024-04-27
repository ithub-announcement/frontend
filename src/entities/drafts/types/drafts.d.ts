export type DraftType = {
  uuid: string;
  title: string;
  content: string;
  authorId: null;
  dateTime: Date;
  status: string;
};

export type DraftsPayload = {
  title: string;
  content: string;
};

export type DraftsSaveType = {
  uuid: string | undefined;
  body: DraftsPayload;
};
