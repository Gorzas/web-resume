import { html, css, LitElement } from 'lit';

export class WebResume extends LitElement {
  static styles = css`
    :host {
      color: var(--web-resume-text-color, #000);
      background: #fff;
      border: 1px solid gray;
      box-shadow: 5px 5px 5px gray;
      display: flex;
      font-family:Helvetica,Arial, sans-serif;
      margin: 0 auto;
      max-width:900px;
    }

    aside {
      background: #77f277;
      flex: 2;
      padding-left:2rem;
    }

    article {
      flex: 4;
      padding: 0 2rem;
    }

    hr {
      margin-left:0;
      max-width: 20%;
    }

    aside h3 {
      font-variant:small-caps;
    }

    ul {
      list-style: none;
      padding:0;
    }

    li {
      line-height: 1.2;
    }
  `;

  render() {
    return html`
      <aside>
        <section>
          <h2>Contact</h2>
          <ul>
            <li>email</li>
            <li>LinkedIn</li>
            <li>website</li>
            <li>Github profile</li>
            <li>Location</li>
          </ul>
        </section>
        <section>
          <h2>Tech Stack</h2>
          <section>
            <h3>Frontend</h3>
          </section>
        </section>
        <section>
          <h2>Languages</h2>
          <ul>
            <li>Spanish (Native)</li>
            <li>English (B2)</li>
          </ul>
        </section>
      </aside>
      <article>
        <header>
          <h1>José David Cano Pérez</h1>
          <h4>Frontend Software Engineer</h4>
          <hr>
          <p>My own personal description</p>
        </header>
        <h2>Professional Experience</h2>
        <h2>Education</h2>
      </article>
    `;
  }
}
