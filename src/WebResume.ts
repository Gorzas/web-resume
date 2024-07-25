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
            <li>📩 <a href="mailto:joseda87@gmail.com">joseda87@gmail.com</a></li>
            <li>LinkedIn <a href="https://www.linkedin.com/in/jd-cano/">@jd-cano</a></li>
            <li>🌐 <a href="https://jdcano.com">jdcano.com</a></li>
            <li>Github profile <a href="https://github.com/Gorzas">@gorzas</a></li>
            <li>📍 Murcia, Spain</li>
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
          <h4>Software Engineer</h4>
          <hr>
          <p>My own personal description</p>
        </header>
        <h2>Professional Experience</h2>
        <section>
          <h3>Company name</h3>
          <div class="job-position">
            
          </div>
        </section>
        <h2>Education</h2>
        <section>
          <h3>Universidad de Murcia</h3>
          <p>Bachelors in Information Technology</p>
        </section>
      </article>
    `;
  }
}
