# Product Requirements Document (PRD): Personal Portfolio Landing Page
## 1. Product Overview
**Objective:** Build a premium, high-converting personal portfolio landing page for Omer Gottlieb. The goal is to showcase engineering background, development capabilities, and operational management skills to technical recruiters and CEOs, demonstrating a high-level command of AI orchestration, modern web technologies, and advanced UI/UX.
**Theme:** Light Mode with Advanced Glassmorphism & Split-Screen Layout.
**Vibe:** Professional, highly polished, deep, and modern.
## 2. Design System & Layout Guidelines (Powered by NextLevelBuilder Skill)
**Critical Instruction:** The AI agent MUST reference and utilize the UI/UX patterns from `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` to execute this design.
*   **Core Layout (Split-Screen):** Implement a persistent Fixed Sidebar on one side for Desktop views, containing the navigation menu. The main content area scrolls independently on the other side. On Mobile, this adapts to a fixed Top Header or Bottom Navigation bar.
*   **Aesthetic (Glassmorphism):** The sidebar and content cards must utilize a frosted glass effect (e.g., `bg-white/30` or `bg-slate-50/40`, `backdrop-blur-md`, subtle `border-white/40`). 
*   **Background:** A subtle, clean gradient or soft mesh background in very light, professional tones (e.g., icy blues, soft grays, or pure white) to allow the glass effect to pop.
*   **Typography:** Modern Sans-Serif fonts (e.g., Inter). Use dark gray/black (`#111827`) for high contrast against the light glass panels.
## 3. Content Architecture (Strict Adherence Required)
**CRITICAL RULE:** Base all content STRICTLY on the provided data below. Do not invent roles, skills, or titles. 
*   **Hero Section:** 
    *   Huge Headline: OMER GOTTLIEB (All-caps, optionally split into two contrasting brand colors).
    *   Subtitle: Industrial Engineering & Management Student (Information Systems Specialization).
    *   Bio: "Practical, proactive, and highly motivated. Experienced in taking responsibility and thriving in roles that allow for process improvement and learning. Proven ability to lead in challenging situations, utilizing creative thinking and practical solutions."
    *   Contact Bar: A single line below the bio containing: Phone: 052-6036426 • Email: omergot5@gmail.com • [LinkedIn/GitHub Icons].
*   **Experience Section (Glass Cards):**
    *   **Scalify (2025 - Present) | Practical Experience:** Executed full mapping of information flow and existing automations. Built new automations in GoHighLevel (GHL) CRM for lead management, reminders, and marketing content. Troubleshot automation systems and ensured proper data transfer.
    *   **Makeover | Logistics Manager:** Managed logistics for 8 concurrent work sites, ensuring efficient daily operations under pressure. Collaborated with contractors and provided direct consultation to the CEO.
    *   **IDF | Combat Soldier & Team Commander (Duvdevan Unit):** Commanded and led a team within the unit. Executed complex missions and developed leadership capabilities in high-pressure environments.
*   **Projects Section (Hover Overlay Cards):**
    *   **Smart Shift Management App (Independent Developer, 2022):** Developed an HR management app using Cloud Code (Anti-Gravity) featuring an AI component for shift optimization. Implemented cloud infrastructure using Supabase and GitHub for version control. Designed APIs to streamline complex real-time processes.
    *   *Visual interaction:* Project cards must feature a visual background. On mouse hover, a dark translucent overlay should smoothly appear, displaying the project description and small pill-shaped badges for the tech stack used (e.g., Supabase, Cloud Code).
*   **Skills Section (Icon Grid on Glass):** Display skills using monochromatic, clean SVG icons in a grid layout. Include: Python, GitHub, Data Analysis, SQL, CRM, Cloud Code, GHL, Automation Tools.
*   **Education:** Ariel University (2018 - 2022) - Industrial Engineering & Management Student. Year 3 - Information Systems Specialization.
## 4. Tech Stack Definition
*   **Frontend Framework:** Next.js (React) utilizing the App Router.
*   **Styling:** Tailwind CSS (crucial for utility-based Glassmorphism).
*   **Icons:** Lucide React or similar clean SVG icons.
*   **Animations:** Framer Motion (for fluid entry animations and hover states).
*   **Deployment:** Vercel (CI/CD via GitHub). Fully static architecture.
## 5. Navigation & User Flow
*   **Fixed Sidebar:** The sidebar contains bold, clean links: "ABOUT", "EXPERIENCE", "PROJECTS", "SKILLS". Active sections should highlight dynamically as the user scrolls.
*   **Smooth Scrolling:** Clicking navigation links must smoothly anchor-scroll to the respective page sections.
## 6. SEO, Meta Data & Open Graph
*   **Primary Meta Title:** Omer Gottlieb | System & Data Engineering
*   **Meta Description:** Personal portfolio of Omer Gottlieb. Showcasing experience in operational management, process automation, and system engineering.
*   **Open Graph (OG) Card:** Main Text: Omer Gottlieb. Subtext: Industrial Engineering & Management Student | Information Systems Specialization.
## 7. Accessibility (A11y) & Performance
*   **Lighthouse Goal:** Score 95+ across Performance, Accessibility, Best Practices, and SEO.
*   **Accessibility:** Use semantic HTML5 tags. Ensure text over the glass elements maintains WCAG AA color contrast compliance. Add `aria-labels` to all buttons/links.
*   **Performance:** Implement lazy loading. Use the Next.js `<Image />` component.
## 8. External Links & Deployment Directives
*   **External Links:** All project and social links (LinkedIn: linkedin.com/in/omer-gottlieb | GitHub: github.com/omergot5) must open in a new tab (`target="_blank" rel="noopener noreferrer"`).
*   **Git Initialization:** The codebase must be a Git repository with a standard Next.js `.gitignore`.
*   **Build Scripts:** Configured for standard Vercel deployment (`npm run build`).
## 9. Claude Code Specific Instructions (Guardrails)
*   **AI Skill Integration:** Parse and apply the UI rules from `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` before generating component markup.
*   **Modularity:** Break the UI into logical components (e.g., `/components/Hero.tsx`, `/components/GlassCard.tsx`, `/components/Sidebar.tsx`). Maximum ~150 lines per file.
*   **Strict Typing:** Utilize strict TypeScript. Define explicitly typed `Interfaces` for the CV data structures. Do NOT use `any`.
## 10. Acceptance Criteria (Definition of Done)
- [ ] App builds (`npm run dev`) with zero console errors.
- [ ] UI strictly follows the Light Mode Glassmorphism aesthetic derived from the provided GitHub skill, featuring a fixed sidebar layout.
- [ ] Layout is 100% responsive across Mobile (375px), Tablet (768px), and Desktop (1024px+).
- [ ] All external links function correctly and open in new tabs.
