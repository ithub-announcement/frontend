export type DeleteModalProps = {
  id: unknown;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  deleteRequest: (args: any) => unknown;
};
