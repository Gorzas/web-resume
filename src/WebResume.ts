import { html, css, LitElement } from 'lit';
import './resume-type/customized-resume';
import './resume-type/harvard-resume';
import { property } from 'lit/decorators.js';

export class WebResume extends LitElement {
  @property({ type: Boolean }) isCustomized = false;

  static styles = css`
    :host {
      --web-resume-text-color: #000;
      color: var(--web-resume-text-color, #000);
      background: #fff;
      border: 1px solid gray;
      box-shadow: 5px 5px 5px gray;
      display: block;
      font-family:Helvetica,Arial, sans-serif;
      height: 29.7cm;
      margin: 0 auto;
      overflow: hidden;
      width: 21cm;
    }
  `;



  render() {
    return html`
      ${this.isCustomized
        ? html`<customized-resume></customized-resume>`
        : html`<harvard-resume></harvard-resume>`
      }
    `;
  }
}
