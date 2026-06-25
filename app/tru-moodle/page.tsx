import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRU Moodle Dashboard Redesign — AVISS KEJIA ZHAO",
};

export default function TRUMoodle() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link"><span>←</span> Back to Work</a>

      <h1 className="case-title">TRU Moodle Dashboard Redesign</h1>
      <p className="case-subtitle">Redesigning Thompson Rivers University's Moodle learning management system — improving information hierarchy, usability, and visual design.</p>

      <img src="/images/tru-moodle/Cover.webp" alt="TRU Moodle Dashboard Redesign Cover" className="case-cover" />

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">This passion project originated during my time as a student at Thompson Rivers University (TRU). As a student, I frequently interacted with Moodle — TRU's internal learning management system — for accessing courses, submitting assignments, and engaging with professors and peers. While Moodle's functionality is straightforward, I believe there is ample opportunity to refine and enhance its user interface.</p>
        <p className="section-body">For this case study, I focused on redesigning the dashboards, which are the main navigation within Moodle. I analyzed the existing UI and proposed improvements to enhance the user experience. Currently, I have completed six static pages, with the intention to continue working on subpages.</p>
      </div>

      <div className="section">
        <p className="section-label">Overview of Existing Moodle Interface</p>
        <p className="section-body">This is an overview of the current Moodle home page after logging in. As you can see, the interface lacks design elements and the information hierarchy is not clear. The information is not properly organized, which can make it challenging for users to quickly find what they need.</p>
        <img src="/images/tru-moodle/Existing-1.webp" alt="Existing Moodle 1" className="img-full" />
        <img src="/images/tru-moodle/Existing-2.webp" alt="Existing Moodle 2" className="img-full" />
        <img src="/images/tru-moodle/Existing-3.webp" alt="Existing Moodle My Courses" className="img-full" />
        <img src="/images/tru-moodle/Existing-4.webp" alt="Existing Moodle My Media" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Analysis of Existing Static Pages</p>
        <p className="section-body"><strong>A couple of problems that I have identified:</strong></p>

        <p className="section-body">1. There are 3 boxes around the course search bar which are not necessary and making it look quite cluttered.</p>
        <img src="/images/tru-moodle/Issue-1.webp" alt="Issue 1 - Search bar" className="img-full" />

        <p className="section-body">2. Currently, each course is represented by <strong>a large rectangle with irrelevant colors</strong>, which can be distracting and not provide meaningful information to users at a glance. The most important information — name, code, and progress — should be emphasized instead.</p>
        <img src="/images/tru-moodle/Issue-2.webp" alt="Issue 2 - Course colors" className="img-full" />

        <p className="section-body">3. There are inconsistent icons displayed in the upper right corners of the interface. The icons vary in size and style.</p>
        <img src="/images/tru-moodle/Issue-3.webp" alt="Issue 3 - Inconsistent icons" className="img-full" />

        <p className="section-body">4. After clicking "My courses", users are directed to the course overview section. However, the presence of "My courses" in the header, as well as the repetition of "My courses" and "Course overview" in the section itself, can be <strong>redundant</strong>.</p>

        <p className="section-body">5. <strong>Search bar under My Courses is placed between two drop-down menus</strong> which is not intuitive or user-friendly.</p>
        <img src="/images/tru-moodle/Issue-5.webp" alt="Issue 5 - Search bar placement" className="img-full" />

        <p className="section-body">6. In the "Latest Announcements" section, there is repetition in the displayed information — two "Site News" items and "General News and Announcements" create <strong>unnecessary redundancy</strong>. The <strong>lack of visual clarity and inconsistent use of colors for clickable elements</strong> can make it confusing for users. Also, there is currently <strong>only one topic visible</strong>, and it is unclear how to access the rest.</p>
        <img src="/images/tru-moodle/Issue-6.webp" alt="Issue 6 - Announcements" className="img-full" />

        <p className="section-body">There are several areas in which the static pages of the Moodle platform can be refined and further developed. From information hierarchy to high-fidelity UI design, there is ample room for improvement.</p>
      </div>

      <div className="section">
        <p className="section-label">Information Architecture</p>
        <img src="/images/tru-moodle/IA.webp" alt="Information Architecture" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Low-Fidelity Wireframes</p>
        <img src="/images/tru-moodle/Wireframe-1.webp" alt="Wireframe First Version" className="img-full" />
        <p className="caption">First version of wireframe</p>
        <img src="/images/tru-moodle/Wireframe-2.webp" alt="Wireframe Second Version" className="img-full" />
        <p className="caption">Second version of wireframe</p>
      </div>

      <div className="section">
        <p className="section-label">Brand Guideline & UI Kit</p>
        <img src="/images/tru-moodle/Color-palette.webp" alt="Color Palette" className="img-full" />
        <img src="/images/tru-moodle/Typography.webp" alt="Typography" className="img-full" />
        <img src="/images/tru-moodle/UI-kit.webp" alt="UI Kit" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">High-Fidelity Pages Redesign & Analysis</p>

        <p className="section-body"><strong>Dashboard Redesign</strong></p>
        <p className="section-body">The TRU header and footer have been retained to maintain consistency with the university's branding. The existing dashboard consists of three sections: "Latest Announcements," "Timeline," and "Recently Accessed Courses." In my redesign, I kept these three main sections while <strong>introducing a calendar and upcoming activities section</strong>. I also renamed "Timeline" to <strong>"Completion Progress"</strong>, which now displays the progress of each course. Three announcements are shown instead of one, and 2D illustrations add a vibrant and engaging feel.</p>
        <img src="/images/tru-moodle/Dashboard.webp" alt="Dashboard Redesign" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>My Courses Redesign</strong></p>
        <p className="section-body">"My Courses" presents a concise overview listing all ongoing and completed courses. <strong>Two sorting options</strong> have been implemented: by progress/date and by course name/most recently accessed. <strong>Courses belonging to the same subject area are assigned the same color</strong> — for example, VISA3991 and VISA1101 share the same color. Each course includes a progress bar and percentage.</p>
        <img src="/images/tru-moodle/My-courses.webp" alt="My Courses Redesign" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>My Media Redesign</strong></p>
        <p className="section-body">Since the original screenshot did not display any content under "My Media", a full redesign was not conducted. However, buttons and drop-down menus have been modified to align with the redesigned pages, ensuring consistency throughout the UI.</p>
        <img src="/images/tru-moodle/My-media.webp" alt="My Media Redesign" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Recently Accessed Courses Redesign</strong></p>
        <p className="section-body">This page displays only the courses that have been accessed recently, excluding completed ones. The overall design and layout of the "My Courses" page has been applied here, ensuring consistency throughout the UI.</p>
        <img src="/images/tru-moodle/Recent-courses.webp" alt="Recently Accessed Courses" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Completion Progress Redesign</strong></p>
        <p className="section-body">The section previously known as "Timeline" has been renamed to "Completion Progress." This page incorporates a <strong>Gantt Chart system</strong> that enables students to track progress of assignments, projects, exams, and other coursework. The Gantt chart should ideally be editable, allowing students to customize it according to their specific needs.</p>
        <img src="/images/tru-moodle/Completion-progress.webp" alt="Completion Progress" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Latest Announcements Redesign</strong></p>
        <p className="section-body">Improvements have been made to enhance user experience and visualization. Each box now contains essential details — the topic creator, a brief summary, date and time, and information about other participants. A sorting feature and search bar have also been added.</p>
        <img src="/images/tru-moodle/Latest-announcements.webp" alt="Latest Announcements Redesign" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">While studying at TRU, I used Moodle frequently and noticed its interface could get some improvements. By combining my own insights with research on successful dashboard designs and learning management systems, I developed a more effective and visually appealing version of Moodle's interface. This project allowed me to identify and resolve noticeable issues, and I look forward to improving the overall user flows in the future.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link"><span>←</span> Back to Work</a>
      </div>

    </main>
  );
}