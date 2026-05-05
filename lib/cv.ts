export interface ContactInfo {
  readonly phone: string;
  readonly email: string;
  readonly linkedin: { readonly label: string; readonly url: string };
  readonly github: { readonly label: string; readonly url: string };
}

export type CompanyLogoId = "scalify" | "makeover" | "idf";

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly bullets: readonly string[];
  readonly logoId: CompanyLogoId;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly bullets: readonly string[];
  readonly tags: readonly string[];
  readonly cover: string;
  readonly url?: string;
}

export interface SkillBadge {
  readonly id: string;
  readonly label: string;
}

export interface Education {
  readonly institution: string;
  readonly period: string;
  readonly program: string;
  readonly note: string;
}

export interface CvData {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly experience: readonly Experience[];
  readonly projects: readonly Project[];
  readonly skills: readonly SkillBadge[];
  readonly education: Education;
  readonly contact: ContactInfo;
}

export const cv: CvData = {
  name: "Omer Gottlieb",
  title:
    "Industrial Engineering & Management Student (Information Systems Specialization)",
  bio: "I’m a hands-on and motivated person. I like taking initiative and being in roles where I can grow, learn, and make things better. I’ve had experience leading in challenging situations, and I always try to bring creative thinking and practical solutions. When I’m part of something, I take responsibility and give it my full effort.",
  experience: [
    {
      id: "scalify",
      company: "Scalify",
      role: "Practical Experience",
      period: "2025 - Present",
      logoId: "scalify",
      bullets: [
        "Mapped full information flow and existing automations.",
        "Built new GoHighLevel (GHL) automations for leads, reminders, and marketing.",
        "Troubleshot automation systems and ensured reliable data transfer.",
      ],
    },
    {
      id: "makeover",
      company: "Makeover",
      role: "Logistics Manager",
      period: "Past",
      logoId: "makeover",
      bullets: [
        "Managed logistics for 8 concurrent work sites under pressure.",
        "Collaborated with contractors and consulted directly with the CEO.",
      ],
    },
    {
      id: "idf",
      company: "IDF — Duvdevan Unit",
      role: "Combat Soldier & Team Commander",
      period: "Military Service",
      logoId: "idf",
      bullets: [
        "Commanded and led a team within the unit.",
        "Executed complex missions in high-pressure environments.",
      ],
    },
  ],
  projects: [
    {
      id: "smart-shift",
      title: "Smart Shift Management App",
      subtitle: "",
      bullets: [
        "Developed an HR management app using Cloud Code (Anti-Gravity) featuring an AI component for shift optimization.",
        "Implemented cloud infrastructure using Supabase and GitHub for version control.",
        "Designed APIs to streamline complex real-time processes.",
      ],
      tags: ["Cloud Code", "Supabase", "GitHub", "AI", "APIs"],
      cover: "url('/smart-shift.png')",
      url: "https://sceurityidf.vercel.app/",
    },
    {
      id: "crime-baltimore",
      title: "Crime in Baltimore - Data Analysis",
      subtitle: "",
      bullets: [
        "Analyzed crime patterns in Baltimore as part of a data analysis team project, focusing on optimizing local policing strategies.",
        "Conducted data exploration and applied advanced analytical techniques to identify areas for improving resource allocation, particularly in home burglaries and car thefts.",
        "Collaborated effectively with team members to generate actionable insights.",
      ],
      tags: ["Data Analysis", "Python", "Jupyter Notebook"],
      cover: "url('/crime-baltimore.png')",
      url: "https://github.com/omergot5/Crime-in-Baltimore/blob/main/33.ipynb",
    },
  ],
  skills: [
    { id: "python", label: "Python" },
    { id: "github", label: "GitHub" },
    { id: "data", label: "Data Analysis" },
    { id: "sql", label: "SQL" },
    { id: "crm", label: "CRM" },
    { id: "cloud-code", label: "Cloud Code" },
    { id: "ghl", label: "GHL" },
    { id: "automation", label: "Automation Tools" },
  ],
  education: {
    institution: "Ariel University",
    period: "2018 - 2022",
    program: "Industrial Engineering & Management Student",
    note: "Year 3 — Information Systems Specialization",
  },
  contact: {
    phone: "052-6036426",
    email: "omergot5@gmail.com",
    linkedin: {
      label: "linkedin.com/in/omer-gottlieb",
      url: "https://www.linkedin.com/in/omer-gottlieb",
    },
    github: {
      label: "github.com/omergot5",
      url: "https://github.com/omergot5",
    },
  },
};
