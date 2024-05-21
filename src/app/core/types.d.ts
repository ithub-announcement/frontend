export type AppComponent = () => React.ReactNode;

export type CoreConfiguration = {
  AppDOMNode: () => HTMLDivElement;
  AppComponent: AppComponent;
  AppReactDOM: ReactDOM.Root | null;
};

export type AuthorizationType = {
  accessToken: string;
  refreshToken: string;
};
