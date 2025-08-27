// src/Portfolio.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  MapPin,
  Award,
  Code2,
  Cpu,
  Globe,
  Layers,
  GraduationCap,
  Star,
} from "lucide-react";

/* ====== PROFILE & DATA (edit if needed) ====== */
const LINKS = {
  linkedin: "https://www.linkedin.com/in/nikita-joshi-291316296",
  github: "https://github.com/NIKITA-JOSHI-19",
  email: "mailto:nikitajoshi19092005@gmail.com",
  resume: "/NikitaResume.pdf",
};

const PROFILE = {
  name: "Nikita Joshi",
  tagline: "B.Tech CSE (2026) · Full Stack Developer · Problem Solver",
  location: "Dehradun, India (Open to relocate)",
  summary:
    "B.Tech Computer Science student at Graphic Era Hill University (CGPA 8.52/10). Skilled in Full-Stack Development, Data Structures, and Machine Learning. Experienced in building real-world projects, hackathons, and internships.",
};

const PROJECTS = [
  {
    title: "Fake News Detection System",
    desc:
      "ML pipeline using Python, NLP, TF-IDF and Logistic Regression. Deployed with Streamlit for interactive testing.",
    stack: ["Python, ", "NLP, ", "scikit-learn, ", "Streamlit, "],
    icon: Cpu,
  },
  {
    title: "Disk Scheduling Simulator",
    desc:
      "Interactive visualization of FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK algorithms using Canvas animations and C++ logic.",
    stack: ["C++, ", "JavaScript, ", "Canvas.js "],
    icon: Code2,
  },
  {
    title: "Weather Dashboard Web App",
    desc:
      "Responsive app showing real-time weather data using OpenWeatherMap API, includes location detection and forecasts.",
    stack: ["HTML, ", "CSS, ", "JavaScript, ", "REST API"],
    icon: Globe,
  },
  {
    title: "Source-to-Source Translator (C→Python)",
    desc:
      "Compiler-style project: lexical analysis and parsing (Flex/Bison) with a Flask frontend for online conversion.",
    stack: ["C++, ", "Flex/Bison, ", "Flask, ", "Python "],
    icon: Layers,
  },
];

const SKILLS = {
  Languages: ["C/C++ (Proficient), ", "Python, ", "Java ", "SQL, ", "HTML, ", "CSS, ", "JavaScript "],
  Tools: ["VSCode, ", "Ubuntu, ", "Google Colab, ", "Jupyter Notebook"],
  Core: ["Data Structures & Algorithms, ", "OOP, ", "DBMS, ", "Operating Systems, ", "Machine Learning "],
};

const EDUCATION = [
  { degree: "B.Tech in Computer Science & Engineering", institute: "Graphic Era Hill University, Dehradun", period: "Aug 2022 – Present", highlights: ["CGPA: 8.52 / 10.0"] },
  { degree: "12th, CBSE", institute: "Oakland Public School, Dehradun", period: "2022", highlights: ["Percentage: 86.4%"] },
  { degree: "10th, CBSE", institute: "Mallikarjun Public School, Dehradun", period: "2020", highlights: ["Percentage: 91.3%"] },
];

const ACHIEVEMENTS = [
  "Completed virtual internship with SmartBridge Salesforce (2025)",
  "Active volunteer in NSS",
  "Secured 1st position in district-level Quiz Competition",
  "CBSE Merit Holder & academic scholarship",
  "NPTEL certifications in C Programming, Assembly Language, Cybersecurity",
];

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-white/50">
    {children}
  </span>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-6 flex items-center gap-3">
    <Icon className="h-6 w-6 text-blue-600" />
    <div>
      <h2 className="text-xl font-semibold leading-tight">{title}</h2>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-12">
        <motion.div initial="hidden" animate="show" variants={fadeIn} className="rounded-2xl border bg-white p-6 md:p-10 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
              </div>
              <h1 className="text-3xl font-bold md:text-5xl">{PROFILE.name}</h1>
              <p className="mt-2 text-base text-gray-700 md:text-lg">{PROFILE.tagline}</p>
              <p className="mt-4 text-sm md:text-base text-gray-700">{PROFILE.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-gray-100" href={LINKS.resume} target="_blank" rel="noreferrer">
                  <FileDown className="h-4 w-4" /> Resume
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-gray-100" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-gray-100" href={LINKS.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-gray-100" href={LINKS.email}>
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <SectionTitle icon={Code2} title="Projects" subtitle="Highlighted Work" />
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <p.icon className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <SectionTitle icon={Award} title="Technical Skills" />
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(SKILLS).map(([group, arr]) => (
            <div key={group} className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase text-gray-500">{group}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {arr.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <SectionTitle icon={GraduationCap} title="Education" />
        <div className="grid gap-4 md:grid-cols-2">
          {EDUCATION.map((e) => (
            <div key={e.degree} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="text-sm text-gray-600">{e.institute} · {e.period}</p>
              <ul className="mt-2 list-disc pl-5 text-sm">
                {e.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <SectionTitle icon={Star} title="Achievements & Responsibilities" />
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <ul className="list-disc pl-5 text-sm">
            {ACHIEVEMENTS.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-4 py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {PROFILE.name}. Built with ❤️ using React & Tailwind.
      </footer>
    </div>
  );
}
