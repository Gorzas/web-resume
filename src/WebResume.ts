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
      width: 21cm;
      height: 29.7cm;
    }

    a {
      color:#000;
      text-decoration:none;
    }

    aside {
      background: rgb(147, 207, 236);
      padding:0 2rem;
    }

    article {
      padding:0 2rem;
    }

    hr {
      margin-left:0;
      max-width: 20%;
    }

    h2 {
      border-bottom:1px gray solid;
      margin: 1rem 0;
      padding-bottom: .5rem;
    }

    h3 {
      font-size: 1rem;
      font-variant:small-caps;
      margin:0;
    }

    img {
      /* TODO use it only for icons */
      height: 17px;
    }

    ul {
      list-style: none;
      padding:0;
    }

    li {
      line-height: 1.2;
    }
    
    .dates {
      text-align: right;
    }

    .location {
      font-size: .8rem;
      font-style:italic;
    }

    .position-header {
      /* TODO use subcomponent: avoid code repeated and better CSS specifity */
      display: grid;
      grid-template-columns: repeat(2, 50%);

      .title, .location {
        grid-column: 1 / 3;
      }
    }
  `;

  render() {
    return html`
      <aside>
        <section>
          <h2>Contact</h2>
          <ul>
            <li>📩 <a href="mailto:joseda87@gmail.com">joseda87@gmail.com</a></li>
            <li><img class="icon" src="../dist/src/assets/linkedin.svg" alt="Linkedin logo">  <a href="https://www.linkedin.com/in/jd-cano/">@jd-cano</a></li>
            <li>🌐 <a href="https://jdcano.com">jdcano.com</a></li>
            <li><img class="icon" src="../dist/src/assets/github.svg" alt="Github logo"> <a href="https://github.com/Gorzas">@gorzas</a></li>
            <li>📍 Murcia, Spain</li>
          </ul>
        </section>
        <section>
          <h2>Tech Stack</h2>
          <section>
            <h3>Frontend</h3>
            <ul>
              <li>EmberJS</li>
              <li>HTML5 + CSS3</li>
              <li>JavaScript</li>
              <li>Cypress</li>
              <li>QUnit</li>
              <li>SASS</li>
            </ul>
          </section>
          <section>
            <h3>Backend</h3>
            <ul>
              <li>PHP</li>
              <li>Laravel</li>
              <li>NodeJS</li>
              <li>MySQL</li>
            </ul>
          </section>
          <section>
            <h3>Others</h3>
            <ul>
              <li>Jira / Gitlab / Azure</li>
              <li>Agile (Scrum)</li>
              <li>TDD</li>
              <li>git</li>
            </ul>
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
          <p>Software Engineer with 13 years of experience building user interfaces and with experience in backend development.</p>
        </header>
        <h2>Professional Experience</h2>
        <section>
          <header class="position-header">
            <h3 class="title">Descartes Kontainers</h3>
            <div class="location">Remote</div>
            <div class="position">Senior Frontend Developer</div>
            <div class="dates">April 2021 - Present</div>
          </header>
          <ul class="tasks"></ul>
        </section>
        <section>
          <header class="position-header">
            <h3 class="title">Neuromobile - Marketing Activo Inteligente, S.L</h3>
            <div class="location">Murcia, Spain</div>
            <div class="position">Lead Frontend Developer</div>
            <div class="dates">December 2013 - April 2021</div>
          </header>
          <ul class="tasks">
            <li>Lead engineer of a small frontend team, leading the building of web app solutions for different sectors: Real State, Business Intelligence, Leasing, Mall, Retail.</li>
            <li>Definition of frontend Coding Standards and good practices.</li>
            <li>Lead and manage a full-stack team using agile methodologies, assigning priorities according to needs of our customers.</li>
            <li>Frontend development of WebApp solutions.</li>
          </ul>
        </section>
        <section>
          <header class="position-header">
            <h3 class="title">Playroom 360</h3>
            <div class="location">Murcia, Spain</div>
            <div class="position">Full Stack Web Developer</div>
            <div class="dates">October 2012 - December 2013</div>
          </header>
          <ul class="tasks">
            <li>Full-stack development of Facebook apps for companies like Hero, Fini, Plátano de Canarias and Aquaservice.</li>
            <li>Development of advergaming products with HTML5, working directly with Canvas API.</li>
            <li>Usage automated testing to build reliable and scalable products with thousands of users per day.</li>
            <li>Building of responsive layouts with complex designs.</li>
          </ul>
        </section>
        <section>
          <header class="position-header">
            <h3 class="title">OPENRED SOLUCIONES</h3>
            <div class="location">Murcia, Spain</div>
            <div class="position">Internship</div>
            <div class="dates">October 2011 - October 2012</div>
          </header>
          <ul class="tasks">
            <li>Development of websites based in free software (Joomla, Magento, Sakai...), specially development of online shops with Magento.</li>
          </ul>
        </section>
        <h2>Education</h2>
        <section>
          <header class="position-header">
            <h3>Universidad de Murcia</h3>
            <div class="location">Murcia</div>
            <div class="position">Bachelors in Computer Science</div>
            <div class="dates">2011</div>
          </header>
        </section>
      </article>
    `;
  }
}
