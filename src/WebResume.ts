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

    aside h3 {
      font-variant:small-caps;
    }
  `;

  render() {
    return html`
      <aside>
        <h3>Contact</h3>
        <ul>
          <li>email</li>
          <li>LinkedIn</li>
          <li>website</li>
          <li>Github profile</li>
          <li>Location</li>
        </ul>
      </aside>
      <article>
        <header>
          <h1>José David Cano Pérez</h1>
          <h4>Frontend Software Engineer</h4>
        </header>
        <h3>Professional Experience</h3>
        <h3>Education</h3>
      </article>
    `;
  }
}
