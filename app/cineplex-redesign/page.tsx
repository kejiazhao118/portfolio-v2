import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cineplex Mobile App Redesign — AVISS KEJIA ZHAO",
};

export default function CineplexRedesign() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link">← Back to Work</a>

      <h1 className="case-title">Cineplex Mobile App Redesign</h1>
      <p className="case-subtitle">Redesigning the Cineplex mobile app to improve navigation, user flows, and UI consistency — driven by user research and a passion for better movie-going experiences.</p>

      <img src="/images/cineplex-redesign/Cover.webp" alt="Cineplex Mobile App Redesign Cover" className="case-cover" />

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">Cineplex is a Canadian brand known for its operation in film entertainment, providing a unique escape from everyday life to millions of guests through its network of over 170 movie theatres. The Cineplex mobile app allows customers to purchase tickets and enter theatres using digital tickets for a paperless experience.</p>
        <p className="section-body">However, I experienced frustrating user interfaces and flows while using the app, and reviews on the Google Play Store and App Store confirmed I wasn't alone. The primary focus of this project is to redesign the UI, address identified pain points, and enhance the current experience.</p>
      </div>

      <div className="section">
        <p className="section-label">UX Research</p>
        <p className="section-body">To understand user pain points, the project began with a research phase analyzing reviews from the Google Play Store and Apple App Store.</p>

        <p className="section-body"><strong>Qualitative Research — App Analytics</strong></p>
        <p className="section-body">The research methodology was qualitative UX research — a widely recognized approach for understanding motivations, thoughts, and attitudes of a target audience. App analytics played an essential role in assessing difficulties experienced by users, identifying existing problems while gaining an understanding of the current user experience.</p>
        <img src="/images/cineplex-redesign/Review-1.webp" alt="App Review 1" className="img-full" />
        <img src="/images/cineplex-redesign/Review-2.webp" alt="App Review 2" className="img-full" />
        <img src="/images/cineplex-redesign/Review-3.webp" alt="App Review 3" className="img-full" />
        <img src="/images/cineplex-redesign/Review-4.webp" alt="App Review 4" className="img-full" />
        <img src="/images/cineplex-redesign/Review-5.webp" alt="App Store Reviews 1" className="img-full" />
        <img src="/images/cineplex-redesign/Review-6.webp" alt="App Store Reviews 2" className="img-full" />
        <p className="section-body">These reviews represent a fraction of the overall feedback. Negative reviews have appeared consistently from 2018 through 2023, indicating issues have not been adequately addressed.</p>

        <p className="section-body"><strong>Focus Group</strong></p>
        <p className="section-body">I invited eight participants — former classmates, coworkers, and friends — all with prior experience using the Cineplex app. A remote meeting facilitated open discussion where participants shared their perspectives. The focus group helped identify:</p>
        <ul className="section-list">
          <li>How users perceive the Cineplex app</li>
          <li>What users believe are the app's most important features</li>
          <li>What problems users experience with the app</li>
          <li>How they would make modifications or improvements</li>
        </ul>

        <p className="section-body"><strong>Existing Problems Identified:</strong></p>
        <ul className="section-list">
          <li>Failure to add cards when attempting to checkout</li>
          <li>Glitches when saving payment methods</li>
          <li>Errors and crashes when booking tickets or logging in/out</li>
          <li>Difficulty locating specific movies due to a messy movie list</li>
          <li>Poor navigation — high loading times, tickets failing to load</li>
          <li>Seat selection getting stuck frequently</li>
          <li>Inconsistent UI across certain pages</li>
          <li>Location not saving, all theatres showing up when booking</li>
          <li>Accepted tickets not appearing after confirmation</li>
        </ul>
        <p className="section-body"><strong>Navigation, user flows, and modification of current features would be the primary focus of this project.</strong></p>
      </div>

      <div className="section">
        <p className="section-body"><strong>Existing App</strong></p>
        <p className="section-body">An overview of the current Cineplex app screens that have been redesigned as part of this case study:</p>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Existing-1.webp" alt="Existing 1" />
          <img src="/images/cineplex-redesign/Existing-2.webp" alt="Existing 2" />
          <img src="/images/cineplex-redesign/Existing-3.webp" alt="Existing 3" />
        </div>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Existing-4.webp" alt="Existing 4" />
          <img src="/images/cineplex-redesign/Existing-5.webp" alt="Existing 5" />
          <img src="/images/cineplex-redesign/Existing-6.webp" alt="Existing 6" />
        </div>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Existing-7.webp" alt="Existing 7" />
          <img src="/images/cineplex-redesign/Existing-8.webp" alt="Existing 8" />
          <img src="/images/cineplex-redesign/Existing-9.webp" alt="Existing 9" />
        </div>
      </div>

      <div className="section">
        <p className="section-label">Redesign Process</p>

        <p className="section-body"><strong>User Personas</strong></p>
        <p className="section-body">User personas represent fictitious characters based on the real target audience, helping to identify user needs and desires and making the redesign process more focused.</p>
        <img src="/images/cineplex-redesign/Persona-1.webp" alt="User Persona Tracy" className="img-full" />
        <img src="/images/cineplex-redesign/Persona-2.webp" alt="User Persona Chris" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Information Architecture</strong></p>
        <img src="/images/cineplex-redesign/IA.webp" alt="Information Architecture" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>User Flow</strong></p>
        <p className="section-body">Creating a user flow maps out the series of steps a user takes to accomplish a specific task within the app — helping identify how users navigate and whether the design meets their needs.</p>
        <img src="/images/cineplex-redesign/User-flow.webp" alt="User Flow" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Low-Fidelity Wireframes</strong></p>
        <p className="section-body">The home page holds a crucial role within the app — the primary objective is the ticket checkout process. Modifications focus on improving information organization, architecture, and overall user flow.</p>
        <img src="/images/cineplex-redesign/Wireframe-1.webp" alt="Wireframe v1" className="img-full" />
        <p className="caption">First version of wireframe</p>
        <img src="/images/cineplex-redesign/Wireframe-2.webp" alt="Wireframe v2" className="img-full" />
        <p className="caption">Second version of wireframe indicating feature names</p>
        <img src="/images/cineplex-redesign/Flow.webp" alt="Navigation flow" className="img-full" />
        <img src="/images/cineplex-redesign/Flow-a.webp" alt="Flow A" className="img-full" />
        <img src="/images/cineplex-redesign/Flow-b.webp" alt="Flow B" className="img-full" />
        <p className="caption">Navigation / user flow</p>

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Brand Guideline / Design System</strong></p>
        <p className="section-body">Aligned with Cineplex's brand guidelines — logos and main colors (yellow and blue) — I added a few new colors. While the app recently adopted light mode, I chose dark mode to enhance the ambiance of a movie theatre.</p>
        <img src="/images/cineplex-redesign/Brand-1.webp" alt="Brand 1" className="img-full" />
        <img src="/images/cineplex-redesign/Brand-2.webp" alt="Brand 2" className="img-full" />
        <img src="/images/cineplex-redesign/Brand-3.webp" alt="Brand 3" className="img-full" />
        <img src="/images/cineplex-redesign/Brand-4.webp" alt="Brand 4" className="img-full" />
        <img src="/images/cineplex-redesign/Brand-5.webp" alt="Brand 5 - Dropdown menus" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">High-Fidelity UI Design</p>
        <p className="section-body">Sticking with Cineplex's brand colours of blue and yellow, with additional colors and dark mode:</p>
        <img src="/images/cineplex-redesign/Showcase-1.webp" alt="Showcase 1" className="img-full" />
        <img src="/images/cineplex-redesign/Showcase-2.webp" alt="Showcase 2" className="img-full" />
        <img src="/images/cineplex-redesign/Showcase-3.webp" alt="Showcase 3" className="img-full" />
        <img src="/images/cineplex-redesign/Showcase-4.webp" alt="Showcase 4" className="img-full" />
        <img src="/images/cineplex-redesign/Showcase-5.webp" alt="Showcase 5" className="img-full" />
        <img src="/images/cineplex-redesign/Showcase-6.webp" alt="Showcase 6" className="img-full" />

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Navigation Screens</strong></p>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Nav-homepage.webp" alt="Homepage" />
          <img src="/images/cineplex-redesign/Nav-theatres.webp" alt="Theatres" />
          <img src="/images/cineplex-redesign/Nav-ticket.webp" alt="Ticket" />
        </div>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Nav-watchlist.webp" alt="Watchlist" />
          <img src="/images/cineplex-redesign/Nav-account.webp" alt="My Account" />
        </div>

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Authorization Screens</strong></p>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Auth-login.webp" alt="Login" />
          <img src="/images/cineplex-redesign/Auth-signup.webp" alt="Sign Up" />
          <img src="/images/cineplex-redesign/Auth-forgot.webp" alt="Forgot Password" />
        </div>

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Booking Screens</strong></p>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Booking-1.webp" alt="Booking 1" />
          <img src="/images/cineplex-redesign/Booking-2.webp" alt="Booking 2" />
          <img src="/images/cineplex-redesign/Booking-3.webp" alt="Booking 3" />
        </div>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Booking-4.webp" alt="Booking 4" />
          <img src="/images/cineplex-redesign/Booking-5.webp" alt="Booking 5" />
          <img src="/images/cineplex-redesign/Booking-6.webp" alt="Booking 6" />
        </div>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Booking-7.webp" alt="Booking 7" />
          <img src="/images/cineplex-redesign/Booking-8.webp" alt="Booking 8" />
        </div>

        <p className="section-body" style={{ marginTop: "3rem" }}><strong>Payment Screens</strong></p>
        <div className="img-grid-3">
          <img src="/images/cineplex-redesign/Payment-1.webp" alt="Payment 1" />
          <img src="/images/cineplex-redesign/Payment-2.webp" alt="Payment 2" />
          <img src="/images/cineplex-redesign/Payment-3.webp" alt="Payment 3" />
        </div>
      </div>

      <div className="section">
        <p className="section-label">Analysis of Modifications & Improvements</p>
        <p className="section-body">Below are examples of the analysis of modifications and improvements made in this redesign. Throughout the entire process, I dedicated myself to thorough research and incorporating my own thoughts into refining the details.</p>
        <img src="/images/cineplex-redesign/Improvement-1.webp" alt="Improvement 1" className="img-full" />
        <img src="/images/cineplex-redesign/Improvement-2.webp" alt="Improvement 2" className="img-full" />
        <img src="/images/cineplex-redesign/Improvement-3.webp" alt="Improvement 3" className="img-full" />
        <img src="/images/cineplex-redesign/Improvement-4.webp" alt="Improvement 4" className="img-full" />
        <img src="/images/cineplex-redesign/Improvement-5.webp" alt="Improvement 5" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">App Mockups</p>
        <img src="/images/cineplex-redesign/Mockup-1.webp" alt="App Mockup 1" className="img-full" />
        <img src="/images/cineplex-redesign/Mockup-2.webp" alt="App Mockup 2" className="img-full" />
        <img src="/images/cineplex-redesign/Mockup-3.webp" alt="App Mockup 3" className="img-full" />
        <img src="/images/cineplex-redesign/Mockup-4.webp" alt="App Mockup 4" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">High-Fidelity Prototype</p>
        <img src="/images/cineplex-redesign/Prototype.webp" alt="Prototype" className="img-full" />
        <p className="section-body">→ <a href="https://www.figma.com/proto/Q9uGi8Wl172TwUidgUd92o/Cineplex-Redesign?node-id=727-12840&page-id=727%3A11505&scaling=scale-down&starting-point-node-id=727%3A12840&type=design&viewport=-403%2C795%2C0.5" target="_blank" style={{ color: "hsl(9, 63%, 65%)" }}>View Cineplex Mobile App Redesign Prototype</a></p>
      </div>

      <div className="section">
        <p className="section-label">Usability Studies</p>
        <p className="section-body">Usability studies were conducted to uncover areas requiring revision based on the current prototype. By observing participants interacting with the prototype, their feedback provided valuable insights for further refinement.</p>
        <ul className="section-list">
          <li>Search bars are not available yet</li>
          <li>Details of movies cannot be viewed</li>
          <li>The booking process is straightforward with essential selections</li>
          <li>The carousel of movie categories on the home page helps users find specific movies quickly</li>
          <li>Drop-down menus are visually better than buttons for selection</li>
          <li>Google directions to theatre locations are not available yet</li>
        </ul>
        <p className="section-body">Both pros and cons were reviewed by participants. This feedback will guide further iteration — usability studies play a crucial role in identifying potential problems before finalizing the design.</p>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">The Cineplex Mobile App Redesign is a passion project driven by my desire to improve the existing design and provide a better user experience. The redesign process encompassed extensive research, design thinking, problem identification, and implementation of relevant techniques and skills.</p>
        <p className="section-body">This project gave me insights into the issues users have faced, while highlighting the potential for designers to solve real problems. While the entire app has not been completed, this marks a strong starting point I plan to continue building on.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link">← Back to Work</a>
      </div>

    </main>
  );
}