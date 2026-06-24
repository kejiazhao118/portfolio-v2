import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usability Testing for WeChat — AVISS KEJIA ZHAO",
};

export default function UsabilityWeChat() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link">← Back to Work</a>

      <h1 className="case-title">Usability Testing for WeChat</h1>
      <p className="case-subtitle">A full usability study of the WeChat mobile app for Canadian users — from test plan and participant recruitment to task analysis and final reporting.</p>

      <img src="/images/usability-wechat/Cover.webp" alt="Usability Testing for WeChat" className="case-cover" />

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">WeChat is a super-app developed by Tencent, combining messaging, social media, and mobile payment into a single platform. Widely known as China's "app for everything," it has begun expanding into the North American market — most notably through WeChat Pay's partnership with Citcon, enabling Canadian businesses to accept WeChat Pay.</p>
        <p className="section-body">As the app enters new markets, assessing its usability for Canadian users becomes essential. <strong>The purpose of this study was to conduct usability testing on the WeChat app in Canada and gather insights to improve its usability for this audience.</strong></p>
        <p className="section-body">The study observed and recorded how well participants completed twelve predefined tasks within the app — measuring satisfaction, identifying frustrations, and surfacing design concerns alongside the app's strengths.</p>
      </div>

      <div className="section">
        <p className="section-label">Goals</p>
        <img src="/images/usability-wechat/Goal-1.webp" alt="Usability Testing Goal 1" className="img-full" />

        <p className="subsection-title">Goal 1 — Learnability</p>
        <p className="section-body">To assess the learnability of the app's core functionalities among first-time users, including the time taken and number of clicks required to complete each task.</p>

        <img src="/images/usability-wechat/Goal-2.webp" alt="Usability Testing Goal 2" className="img-full" />

        <p className="subsection-title">Goal 2 — Frustration & Design Concerns</p>
        <p className="section-body">To identify participants' frustrations, challenges, and concerns with the app's interface design and information architecture.</p>

        <p className="section-body" style={{ marginTop: "1.5rem" }}>The usability test included task performance assessments, post-task questionnaires, and one-on-one post-test interviews. Findings were analyzed to recommend improvements that better align WeChat with the needs and expectations of Canadian users.</p>
      </div>

      <div className="section">
        <p className="section-label">Research Questions</p>
        <ul className="section-list">
          <li>How easily do participants understand what the app is?</li>
          <li>How easily do participants register for the app?</li>
          <li>How easily do participants start to explore the core functionalities?</li>
          <li>How well do participants understand the symbols and icons?</li>
          <li>Is there an appropriate balance of ease of use and ease of learning?</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Participants</p>
        <img src="/images/usability-wechat/Participants.webp" alt="Participants" className="img-full" />
        <p className="section-body">Five participants were recruited — all with zero or minimal prior experience using WeChat, and all intermediate to advanced mobile technology users. Participants were primarily classmates or coworkers.</p>
        <p className="section-body">Recruiting criteria were based on familiarity with the app, mobile technology experience, and general comfort with smartphones. All participants owned a smartphone (iPhone or Android) and knew how to download apps.</p>
        <p className="section-body">By recruiting participants with a range of mobile technology experience, the study was able to better understand varying user needs, expectations, and motivations — and determine whether the app's design is functional, meaningful, and enjoyable.</p>
      </div>

      <div className="section">
        <p className="section-label">Procedure</p>
        <img src="/images/usability-wechat/Procedure.webp" alt="Procedure" className="img-full" />
        <p className="section-body">Tests were conducted at various locations based on participant availability. Participants used their own smartphones to complete the tasks, keeping the experience as natural as possible. I sat beside each participant, providing instructions and acting as both moderator and note-taker — observing and recording behaviours throughout.</p>
        <p className="section-body">All sessions were video recorded. Before the test began, participants signed a consent form and received a brief overview of the app and the testing process. Tasks were read aloud one at a time. At the end of each task, participants completed a short questionnaire. After all tasks were completed, a one-on-one interview was conducted.</p>
      </div>

      <div className="section">
        <p className="section-label">Data Collection</p>
        <p className="section-body">As note-taker and moderator, I documented participant responses, comments, and observed behaviours throughout each session. A task list was provided as a reference, and the percentage of tasks completed successfully was calculated for each participant.</p>
        <p className="section-body">A rubric was used to measure basic usability metrics against the app's existing build. This ensured consistent data collection across all five sessions.</p>
      </div>

      <div className="section">
        <p className="section-label">Task List</p>
        <img src="/images/usability-wechat/Task-list.webp" alt="Task List" className="img-full" />
        <p className="section-body">Participants completed twelve tasks designed to test the app's accessibility and learnability, as well as to identify friction points in the interface and information architecture.</p>

        <ol className="task-list">
          <li>
            <strong>Task 1 — Download the app</strong>
            <p className="task-criteria">Find the app in the app store and successfully download it.</p>
          </li>
          <li>
            <strong>Task 2 — Sign up</strong>
            <p className="task-criteria">Open the app, tap sign up, and complete both steps to create a new account.</p>
          </li>
          <li>
            <strong>Task 3 — Get to the home page</strong>
            <p className="task-criteria">Sign in and navigate to the home page.</p>
          </li>
          <li>
            <strong>Task 4 — Build the profile</strong>
            <p className="task-criteria">Find "My Profile," upload an image, and complete the profile fields.</p>
          </li>
          <li>
            <strong>Task 5 — Add a new contact</strong>
            <p className="task-criteria">Find "Add Contacts" and add the provided WeChat number.</p>
          </li>
          <li>
            <strong>Task 6 — Send various messages</strong>
            <p className="task-criteria">Send a voice message, an image, and an emoji to the added contact.</p>
          </li>
          <li>
            <strong>Task 7 — Post a Moment</strong>
            <p className="task-criteria">Navigate to Moments, upload an image with a short description, and post it.</p>
          </li>
          <li>
            <strong>Task 8 — View a contact's album</strong>
            <p className="task-criteria">Find the newly added contact, navigate to their profile, and open their Album.</p>
          </li>
          <li>
            <strong>Task 9 — Leave a comment</strong>
            <p className="task-criteria">Browse the contact's Moments and leave a comment on any post.</p>
          </li>
          <li>
            <strong>Task 10 — Find "Message in a Bottle"</strong>
            <p className="task-criteria">Locate the hidden feature, pick up a bottle, and throw it back or reply.</p>
          </li>
          <li>
            <strong>Task 11 — Set up Privacy</strong>
            <p className="task-criteria">Navigate to account settings, find Privacy, and turn on Friend Confirmation.</p>
          </li>
          <li>
            <strong>Task 12 — Find the Language setting</strong>
            <p className="task-criteria">Navigate to General settings and locate the Language option.</p>
          </li>
        </ol>
      </div>

      <div className="section">
        <p className="section-label">Post-Test Questionnaire & Interview</p>
        <img src="/images/usability-wechat/Post-test.webp" alt="Post-Test Questionnaire" className="img-full" />
        <p className="section-body">After completing all tasks, participants filled out a mixed questionnaire — combining multiple choice and open-ended questions — to share their overall experience and rate their satisfaction with the app. This gave participants a structured opportunity to reflect on whether the app felt functional, meaningful, and useful.</p>
        <p className="section-body">A one-on-one interview followed, allowing for a more open conversation about each participant's experience and impressions of WeChat. Completion time for each of the twelve tasks was also recorded to measure task speed, identify errors, and pinpoint areas of frustration.</p>
      </div>

      <div className="section">
        <p className="section-label">Reporting Results</p>
        <img src="/images/usability-wechat/Results.webp" alt="Reporting Results" className="img-full" />
        <p className="section-body">At the conclusion of testing, a final report and poster were developed summarizing all findings, an evaluation against the original usability goals, and recommendations for future improvements.</p>
        <ul className="section-list">
          <li>Participants completed most of the 12 tasks effectively, though several caused notable confusion.</li>
          <li><strong>80% of participants failed the voice message task</strong> — they were unaware that the phone needed to be held closer to the speaker to capture audio, leading to repeated failures and frustration.</li>
          <li>Hidden features were difficult to discover, creating friction for first-time users.</li>
          <li>Similarly labelled functions — such as voice call, voice input, and voice message — caused confusion due to overlapping terminology.</li>
          <li>Half of the participants landed on incorrect pages multiple times before successfully completing tasks.</li>
          <li>Despite these issues, participants found WeChat easy to navigate overall and gave positive feedback — particularly about features not found in comparable apps.</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">This project provided hands-on experience conducting a full usability study from start to finish — developing a test plan, recruiting participants, moderating sessions, collecting data, and synthesizing findings into actionable recommendations.</p>
        <p className="section-body">The process deepened my understanding of how real users interact with complex, feature-rich apps, and how small design decisions — labelling, discoverability, and information architecture — can significantly impact the user experience. Observing participants struggle with hidden features and similarly named functions reinforced the importance of clarity and consistency in interface design.</p>
        <p className="section-body">Most importantly, this study demonstrated that usability testing is not just about finding problems — it's about understanding the gap between what designers intend and what users actually experience.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link">← Back to Work</a>
      </div>

    </main>
  );
}