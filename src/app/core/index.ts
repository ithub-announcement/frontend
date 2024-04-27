import ReactDOM from "react-dom/client";
import { AppComponent, CoreConfiguration } from "./types";

export class AppCore {
  private configuration: CoreConfiguration = {
    AppComponent: () => void 0,
    AppDOMNode: () => document.getElementById("root") as HTMLDivElement,
    AppReactDOM: null,
  };

  constructor(component: AppComponent) {
    this.configuration.AppComponent = component;
  }

  // @ts-ignore
  private async validateAuthorization() {
    try {
    } catch (err: unknown) {
      console.error(err as string);
    }
  }

  public async makeCall(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    try {
      return await fetch(input, init);
    } catch (e) {
      throw new Error(e as string);
    }
  }

  private mount(DomNode: HTMLDivElement): void {
    const { AppComponent } = this.configuration;

    this.configuration.AppReactDOM = ReactDOM.createRoot(DomNode);
    this.configuration.AppReactDOM.render(AppComponent());
  }

  // @ts-ignore
  private unmount(): void {
    const { AppReactDOM } = this.configuration;

    if (AppReactDOM) {
      return AppReactDOM.unmount();
    }

    throw new Error("Core::ApplicationReactDOM cannot be null");
  }

  public static setup(component: AppComponent): void {
    const core = new AppCore(component);

    core.validateAuthorization();

    const { AppDOMNode } = core.configuration;

    core.mount(AppDOMNode());

    return void 0;
  }
}
