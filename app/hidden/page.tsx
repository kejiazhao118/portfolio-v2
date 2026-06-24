import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hidden — AVISS KEJIA ZHAO",
};

export default function Hidden() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link">← Back to Work</a>

      <h1 className="case-title">Hidden — A City Walking Tour App with AR</h1>
      <p className="case-subtitle">A collaborative interactive system project exploring Toronto's hidden subcultures — combining UX research, branding, app prototyping, and Snapchat AR components.</p>

      <img src="/images/hidden/Cover.gif" alt="Hidden City Walking Tour App" className="case-cover" />

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">This project was developed around the theme <strong>"City of Experience"</strong> — exploring how living in the 21st century has expanded beyond the models of the 20th century. The brief challenged us to examine the ideologies, structures, and systems of contemporary urban life, and to create experiences of invisible cities that extend beyond physical infrastructure.</p>
        <p className="section-body">The project was a collaboration between myself and my partner, Irem Harnark, spanning research, concept development, branding, app prototyping, and AR component design.</p>
      </div>

      <div className="section">
        <p className="section-label">Research & Exploration</p>
        <p className="section-body">The first phase required creating a visual timeline of city experiences — looking back 100 years and forward 100 years. The goal was to blend primary research (interviews, surveys, observations) with secondary research (historical and future facts) to map the different patterns and relationships of experience found in the city.</p>
        <p className="section-body">The timeline included 50 items from the past, 10 from the future, and 5 moments of primary research. It served as a guide and map for concept development — narrowing our lens to cities we had personally visited and knew well.</p>
        <img src="/images/hidden/Timeline.webp" alt="City Experience Timeline" className="img-full" />
        <p className="caption">Visual timeline of city experiences — past, present, and future</p>
      </div>

      <div className="section">
        <p className="section-label">The Concept Video</p>
        <p className="section-body">In the second phase, three 30-second concept videos were created to explore and pitch different directions. The concept we chose was a city walking tour app that gives users the opportunity to discover hidden gems, hear untold stories, and uncover secrets about the cities they live in or visit.</p>
        <p className="section-body">The pitch video illustrates how Audio AR could integrate with the app using smart glasses. As the user walks through the city, GPS tracking alerts them to a hidden gem nearby. A tap on the glasses triggers the hidden story tied to that location.</p>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/OwW5wGnMw98?start=4" title="Hidden — Concept Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ margin: "1.5rem 0", display: "block" }}></iframe>
      </div>

      <div className="section">
        <p className="section-label">Initial Concept</p>
        <p className="section-body">Exploring hidden gems in cities led to the initial concept: an app that lets users uncover a city's secrets and hidden spots. <strong>"Hidden"</strong> became both the app name and the project name.</p>
        <img src="/images/hidden/Initial-concept.gif" alt="Initial Low-Fidelity App Prototype" style={{ width: "40%", display: "block", margin: "1.5rem 0" }} />
        <p className="caption">First version of the low-fidelity app prototype</p>
        <p className="section-body"><strong>Hidden — The platform to explore cities' hidden secrets.</strong></p>
        <p className="section-body">Tired of tourist destinations overrun by crowds? Hidden is an invitation to explore cities as living, breathing entities — uncovering the unusual, unspoken histories, local stories, and cultural secrets that lie beneath the surface.</p>
      </div>

      <div className="section">
        <p className="section-label">Revised Concept</p>
        <p className="section-body">During research and development, we realized the original scope was too broad for the available timeframe and resources. We narrowed the focus to Toronto — creating a prototype that reveals local subcultures that may be "hidden" to residents and visitors alike. This allowed us to focus entirely on content quality without relying on GPS infrastructure.</p>
        <p className="section-body">The prototype presents four Toronto subcultures in an app interface, with AR snippets via Snapchat to enrich each story. The planned year-end show setup:</p>
        <ul className="section-list">
          <li>A monitor looping the app's promo video to draw visitors into the installation space</li>
          <li>Users explore the interface and discover four stories</li>
          <li>The app prompts users to open Snapchat for additional AR content</li>
          <li>Physical marker cards are on display — scanning them triggers dedicated AR content for each story</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Stories of Hidden</p>
        <p className="section-body">Four Toronto subcultures were selected, each representing a different dimension of the hidden city: <strong>Unknown, Unseen, Unusual,</strong> and <strong>Unexpected.</strong></p>

        <img src="/images/hidden/Story-ballroom.webp" alt="Kiki Ballroom Scene" className="img-full" />
        <p className="caption">Unknown — Kiki Ballroom Scene</p>
        <p className="section-body">The Kiki Ballroom Scene originated in 1980s underground New York — a movement that rose from the underground to shape over 20 years of pop culture and identity. Canada's ballroom scene has built its own community of formidable dancers, judges, and MCs, with its own language, style, and etiquette.</p>

        <img src="/images/hidden/Story-underground.webp" alt="Underground Dance Music" className="img-full" />
        <p className="caption">Unseen — Underground Dance Music</p>
        <p className="section-body">Toronto's underground dance culture has weathered decades of change but persevered and evolved. After the peak years of the 90s and early 2000s, underground clubs, pop-ups, and warehouse-style parties continue to define the city's after-hours scene — especially in summer.</p>

        <img src="/images/hidden/Story-furries.webp" alt="Furries" className="img-full" />
        <p className="caption">Unusual — Furries</p>
        <p className="section-body">Furries are fans of anthropomorphic animals — animals with human characteristics. The community is deeply creative, encouraging imagination and self-expression. In a memorable moment, a large group of Toronto furries chartered an entire TTC streetcar, delighting onlookers across the city.</p>

        <img src="/images/hidden/Story-drifting.webp" alt="Drifting" className="img-full" />
        <p className="caption">Unexpected — Drifting</p>
        <p className="section-body">Drifting is a motorsport originating in Japan where the driver intentionally loses traction to maintain speed through corners. Though technically illegal on public roads, Toronto's drifting community thrives — from suburban parking lots to underground lessons — surviving and staying active even through harsh winters.</p>
      </div>

      <div className="section">
        <p className="section-label">Branding</p>
        <p className="section-body">Two moodboards guided the visual direction for Hidden's brand identity. Classic orange and dark navy were selected as primary brand colors — bold, distinctive, and fitting for a platform built around discovery and the underground. The design approach prioritized simplicity, clarity, and consistency across the logo, typography, AR markers, and all supporting assets.</p>
        <img src="/images/hidden/Moodboard-1.webp" alt="Moodboard 1" className="img-full" />
        <img src="/images/hidden/Moodboard-2.webp" alt="Moodboard 2" className="img-full" />
        <img src="/images/hidden/Branding-1.webp" alt="Branding 1" className="img-full" />
        <img src="/images/hidden/Branding-2.webp" alt="Branding 2" className="img-full" />
        <img src="/images/hidden/Branding-3.webp" alt="Branding 3" className="img-full" />
        <img src="/images/hidden/Branding-4.webp" alt="Branding 4" className="img-full" />
        <img src="/images/hidden/Branding-5.webp" alt="Branding 5" className="img-full" />
        <img src="/images/hidden/Branding-6.webp" alt="Branding 6" className="img-full" />
        <img src="/images/hidden/Branding-7.webp" alt="AR Marker Mockup" className="img-full" />
        <p className="caption">AR marker mockup for the installation</p>
      </div>

      <div className="section">
        <p className="section-label">Posters at Installation</p>
        <div className="img-grid-3">
          <img src="/images/hidden/Poster-1.webp" alt="Poster 1" />
          <img src="/images/hidden/Poster-2.webp" alt="Poster 2" />
          <img src="/images/hidden/Poster-3.webp" alt="Poster 3" />
        </div>
        <img src="/images/hidden/Poster-mockup.webp" alt="Poster Mockup" className="img-full" />
        <img src="/images/hidden/Installation.webp" alt="Installation Photo" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">App Prototype</p>
        <p className="section-body">The app prototype was led by Irem, who coded the site and also developed a Figma version. The coded prototype is still in progress and not yet mobile-responsive.</p>
        <p className="section-body">
          → <a href="https://iremharnak.github.io/hiddenPrototype/" target="_blank" className="proto-link">View coded prototype</a><br />
          → <a href="https://www.figma.com/proto/Ebb59FM537EMq3UhKmZpU5/HIDDEN-PROTOTYPE?node-id=15%3A414&scaling=scale-down" target="_blank" className="proto-link">View Figma mobile prototype</a>
        </p>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/BjWmrfQuKwM?start=1" title="Hidden App Prototype" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ margin: "1.5rem 0", display: "block" }}></iframe>
      </div>

      <div className="section">
        <p className="section-label">AR Components</p>
        <p className="section-body">The AR components were built using Lens Studio — a platform that lets users experience AR directly through the Snapchat app on their own phones. After familiarizing ourselves with the tool, we found it approachable, particularly for importing and creating 2D elements.</p>
        <p className="section-body">Each marker in the installation corresponds to one of the four stories. When a user taps through a story in the app, they are prompted to switch to Snapchat and scan the physical marker. Scanning triggers AR content tied to that story — allowing users to interact with the narrative in the physical space.</p>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/0JAmQlvIryg?start=1" title="Hidden AR Component 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ margin: "1.5rem 0", display: "block" }}></iframe>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/xTUgUvbvBoU" title="Hidden AR Component 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ margin: "1.5rem 0", display: "block" }}></iframe>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/amQhgocx2ic" title="Hidden AR Component 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ margin: "1.5rem 0", display: "block" }}></iframe>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/ZwT0WnwOixI" title="Hidden AR Component 4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ margin: "1.5rem 0", display: "block" }}></iframe>
        <p className="subsection-title">Tools & Technologies</p>
        <img src="/images/hidden/Tools.webp" alt="Tools and Technologies" className="img-full" />
        <p className="caption">Tools & technologies used — Lens Studio, Snapchat, Figma, and more</p>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">Hidden was a collaborative project that pushed us to think creatively and adapt quickly. Without a developer on the team, we encountered technical limitations that required us to rethink our approach — adjusting scope without compromising the content or vision.</p>
        <p className="section-body">The process — from initial research to final deliverable — strengthened our ability to generate and combine ideas, communicate effectively as collaborators, and work across multiple tools and technologies to achieve a cohesive result.</p>
        <p className="section-body">Unfortunately, the school year-end show was cancelled due to COVID-19. What was planned as a physical interactive installation was transformed into a comprehensive case study, documenting the full scope of work completed.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link">← Back to Work</a>
      </div>

    </main>
  );
}