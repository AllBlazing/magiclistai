# 🎯 Vision

I'm building a micro SaaS project for hybrid athletes—especially Hyrox competitors. This is one of 12 MVPs I'll launch in 12 months. Each project must be lean, useful, automated, and athlete-centric.

This project is a mobile-first shopping list tool for Hyrox athletes. It helps users discover gear relevant to their Hyrox performance by pasting a race result or manually entering their race stats. Gear recommendations will be evidence-driven (e.g. Reddit reviews, pros/cons, product summaries), not prescriptive. Products can be added to a shopping list and eventually purchased.

The UI must be clean, black and white with #E2FE38 as the accent color. Built for mobile web (will view via Chrome > Finder).

---

# 🔐 Tools and Services

- **Frontend**: HTML / CSS / Vanilla JavaScript (no frameworks unless necessary)
- **Auth**: Firebase (Email/password only to start)
- **Backend**: Firebase
- **AI**: x.ai Live Search (mocked API for now, credentials added later)
- **Payments**: Stripe (for subscription)
- **Hosting**: Firebase Hosting (Netlify not required)
- **Git**: Save files locally first, then connect to GitHub later

---

# 📜 Rules to Follow (Enforced Strictly)

1. **Write Clear, Minimal Code**
   - No unnecessary libraries or dependencies
   - Use vanilla JS or ultra-light packages if absolutely required

2. **Add Meaningful Comments**
   - Comment every major function, logic block, and style rule
   - Pretend you're teaching a motivated non-coder

3. **Ask Before Changing Existing Code**
   - Never refactor or add files without confirmation
   - If you have a better idea, suggest it, but wait for approval

4. **Stick to Scope**
   - Don't add new screens, pages, or features without permission
   - Don't import heavy third-party tools

5. **Build for Automation**
   - Recommend ways to reduce manual work (e.g. live search summaries, auto-fill fields, scraping later)

6. **Design for Mobile Athletes**
   - UX should feel fast, simple, and mobile-first
   - Minimize friction—0 or 1 click for core flows

---

# 🧪 MVP Functional Requirements

- Home screen should:
  - Let user paste their race result URL (hyrox.com or hyressult.com) **or** enter athlete name
  - Include fallback manual fields: `Race time`, `Gender`, `Age Group` (dropdowns or inputs)
  - Send this data to a mocked `x.ai` fetch module that returns dummy gear suggestions
  - Display results in a clean layout: gear card with product name, summary, Reddit snippet (mocked), and "Add to list" button

- Shopping list:
  - Allows adding/removing items
  - Saves in local storage (MVP)
  - Future: gated behind Firebase auth + Stripe (1 free search, then paid)

- Stripe:
  - Basic integration to allow payments via Firebase Functions (mock this flow for now)
  - Pricing tiers: Free (1 search), Pro (unlimited + summary features)

---

# 🚧 Technical Implementation Notes

- Use dummy JSON files to simulate x.ai search results and gear suggestions
- Wrap AI fetch logic in a single `liveSearch.js` module
  - Comment with `// Replace with real x.ai fetch call later`
- Style with mobile-first CSS, following minimalist aesthetic
- Use only `email/password` login method at first
- Placeholder project name: `hywizardai.com` (can change later)

---

# 🔄 Project File Handling

- Save files in `/Users/mark/Desktop/hywizardai/`
- I will open HTML using **Finder > Chrome**, not localhost
- Structure the project as:
  - `index.html`
  - `style.css`
  - `main.js`
  - `liveSearch.js` (mocked x.ai)
  - `data/sampleGear.json` (optional)
  - `README.md` (overview + dev notes)

---

# ✅ Start Task

Set up the full scaffold for this project:
- Create all the files and folders listed above
- Implement the home screen flow (manual + URL input + dummy fetch + gear cards)
- Build a local shopping list UI (no backend yet)
- Include comments and placeholder code for Stripe, x.ai, and Firebase auth
- Follow all vision and rules strictly

Before proceeding with any auth or payment integration, **ask for confirmation**.

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">