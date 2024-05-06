import ReactDOM from "react-dom/client";
import Subscription from "./components/Subscription";

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
    const root = ReactDOM.createRoot(this.shadowRoot);
    root.render(<Subscription {...props} />);
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
