import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('harvard-resume')
export class HarvardResume extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      padding: 2cm 2cm 2cm 2cm;
    }
    header {
      border-bottom: 2px solid var(--web-resume-text-color);
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      text-align: center;
    }
    h1 {
      font-size: 2.2rem;
      margin: 0;
      letter-spacing: 2px;
      color: var(--web-resume-text-color);
      font-weight: bold;
    }
    h2 {
      color: var(--web-resume-text-color);
      font-size: 1.2rem;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid var(--web-resume-text-color);
      padding-bottom: 0.2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    h3 {
      margin: 0.5rem 0 0.2rem 0;
      font-size: 1rem;
      color: #333;
      font-weight: bold;
    }
    .contact {
      font-size: 0.95rem;
      margin-top: 0.5rem;
      color: #444;
    }
    .section {
      margin-bottom: 1.5rem;
    }
    ul {
      margin: 0.2rem 0 0.8rem 1.2rem;
      padding: 0;
    }
    li {
      margin-bottom: 0.2rem;
      font-size: 0.98rem;
    }
    .edu-degree {
      font-weight: bold;
    }
    .edu-school {
      font-style: italic;
      color: #555;
    }
    .job-title {
      font-weight: bold;
      color: var(--web-resume-text-color);
    }
    .job-company {
      font-style: italic;
      color: #333;
    }
    .job-dates {
      float: right;
      color: #888;
      font-size: 0.95rem;
    }
    @media print {
      :host {
        box-shadow: none;
        border: none;
      }
    }
  `;

  render() {
    return html`
      <header>
        <h1>José David Cano Pérez</h1>
        <div class="contact">
          Murcia, Spain &nbsp;|&nbsp;
          <a href="mailto:joseda87@gmail.com">joseda87@gmail.com</a> &nbsp;|&nbsp;
          +34 665345201 &nbsp;|&nbsp;
          <a href="https://github.com/Gorzas" target="_blank">GitHub</a> &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/jd-cano/" target="_blank">LinkedIn</a>
        </div>
      </header>

      

      <section class="section">
        <h2>Professional Experience</h2>
        <div>
          <span class="job-title">Senior Frontend Developer</span>,
          <span class="job-company">Descartes Kontainers</span>
          <span class="job-dates">Apr 2021 – Present</span>
          (<a href="https://www.descartes.com">descartes.com</a>)
          <ul>
            <li>Developed a SaaS platform for customer experience logistics.</li>
            <li>Upgraded the codebase from EmberJS v3.6 to v5.8, ensuring compatibility and performance improvements.</li>
            <li>Implemented TDD practices and used Cypress for end-to-end testing.</li>
            <li>Collaborated closely with QA, backend, and UI/UX teams to align project goals and deliverables.</li>
          </ul>
        </div>
        <div>
          <span class="job-title">Lead Frontend Developer</span>,
          <span class="job-company">Neuromobile</span>
          <span class="job-dates">Dec 2013 – Apr 2021</span>
          (<a href="https://neuromobile.es/">neuromobile.es</a>)
          <ul>
            <li>Led a frontend team of 4 developers building SaaS solutions using EmberJS for malls and retail sectors.</li>
            <li>Defined frontend coding standards and best practices.</li>
            <li>Managed a full-stack team using agile methodologies, assigning priorities according to the needs of our customers.</li>
          </ul>
        </div>
        <div>
          <span class="job-title">Full Stack Web Developer</span>,
          <span class="job-company">Playroom 360</span>
          <span class="job-dates">Oct 2012 – Dec 2013</span>
          (<a href="https://www.playroom360.es/">playroom360.es</a>)
          <ul>
            <li>Developed Facebook apps for major brands.</li>
            <li>Created advergaming products with HTML5 and Canvas API.</li>
            <li>Implemented automated testing for scalable products.</li>
            <li>Built responsive layouts with complex designs.</li>
          </ul>
        </div>
        <div>
          <span class="job-title">Internship</span>,
          <span class="job-company">OPENRED SOLUCIONES</span>
          <span class="job-dates">Oct 2011 – Oct 2012</span>
          (<a href="https://www.openred.es/">openred.es</a>)
          <ul>
            <li>Developed websites and online shops using open-source platforms like Magento.</li>
          </ul>
        </div>
      </section>

      <section class="section">
        <h2>Education</h2>
        <div>
          <span class="edu-degree">Bachelors in Computer Science</span>,
          <span class="edu-school">Universidad de Murcia</span>
          <span class="job-dates">2011</span>
        </div>
      </section>

      <section class="section">
        <h2>Additional Skills</h2>
        <ul>
          <li><strong>Programming languages:</strong> JavaScript, TypeScript, HTML5, CSS, SASS, PHP</li>
          <li><strong>Frameworks:</strong> EmberJS, Angular, React, Node.js, Laravel</li>
          <li><strong>Other:</strong> MySQL, Cypress, QUnit</li>
          <li><strong>Methodologies:</strong> Agile (Scrum), TDD</li>
          <li><strong>Tools:</strong> Jira, Gitlab, Azure, git</li>
          <li><strong>Languages:</strong> Spanish (Native), English (C1)</li>
        </ul>
      </section>
    `;
  }
}