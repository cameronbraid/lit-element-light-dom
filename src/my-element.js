import { LitElement, html, css } from 'lit-element';
import { render } from 'lit-html';

class MyElement extends LitElement {
  static get properties() {
    return {
      mood: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.content = this.removeChild(this.childNodes[0]);
  }

  static get styles() {
    return css`.mood { color: green; }`;
  }

  render() {
    return html`
      Web Components are
        <!-- content rendered in the shadow dom will not be styled from host -->
        <span class='mood'>${this.mood}</span>
        <!-- the slots will retain the styles from the host dom -->
        <slot name='a'></slot>
        <slot></slot>
      !`;
  }

  firstUpdated() {
    render(html`<span slot='a'>${this.content}</span><span class='mood'>${this.mood}</span>`, this);
  }
}

customElements.define('my-element', MyElement);
