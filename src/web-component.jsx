import ReactDOM from "react-dom/client";
import Subscription from "./components/Subscription";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Button, ChakraProvider } from "@chakra-ui/react";
// eslint-disable-next-line react-refresh/only-export-components
export const normalizeAttribute = (attribute) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class SubscriptionWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    console.log("this", this)
    const root = ReactDOM.createRoot(this.shadowRoot);
    console.log("root", root)
    // const rootElement = document.createElement("body");

    const myCache = createCache({
      // @ts-ignore
      container: this.shadowRoot,
      prepend: true,
      key: "css",
    });
    // root.render(<Subscription {...props} />);


    root.render(
      <Subscription value={myCache} {...props}></Subscription>
    );



  }

  getPropsFromAttributes() {
    const props = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props;
  }
}

export default SubscriptionWebComponent;
