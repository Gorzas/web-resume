import { html, css, LitElement } from 'lit';

export class WebResume extends LitElement {
  static styles = css`
    :host {
      color: var(--web-resume-text-color, #000);
      display: flex;
      padding: 25px;
      margin: 0 auto;
      max-width:800px;
    }

    aside {
      background: green;
      flex: 2;
    }

    article {
      flex: 4;
      padding: 0 5rem;
    }

    header {
      border-bottom: 1px solid #000;
    }
  `;

  render() {
    return html`
      <aside></aside>
      <article>
        <header>
          <h1>José David Cano Pérez</h1>
        </header>
      </article>
    `;
  }
}
