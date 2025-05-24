// app/page.jsx
"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("aboutme");
  const [isDark, setIsDark] = useState(false); // dark mode by default

  return (
    <>
      <Head>
        <title>Hasanul Mukit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full shadow z-50 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className={`text-4xl font-extrabold ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                : "text-4xl font-bold text-[#173b45]"
            }`}
          >
            Mukit
            <span className={isDark ? "text-[#ff8225]" : "text-[#ff8225]"}>
              .
            </span>
          </a>
          <div className="flex items-center">
            {/* Light/Dark toggle with sun/moon icon */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="mr-4 p-2 focus:outline-none"
            >
              {isDark ? (
                <img
                  src="/assets/icons/sun.svg"
                  alt="Switch to light mode"
                  className="h-6 w-6"
                />
              ) : (
                <img
                  src="/assets/icons/moon.svg"
                  alt="Switch to dark mode"
                  className="h-6 w-6"
                />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-2xl focus:outline-none text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`flex space-x-8 ${
                navOpen
                  ? "block absolute top-full left-0 w-full p-4"
                  : "hidden md:flex"
              }`}
            >
              {["home", "skills", "portfolio", "about", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`transition duration-300 inline-block border-b border-transparent  ${
                        isDark
                          ? "text-white hover:border-blue-400 hover:text-blue-400"
                          : "text-gray-700 hover:border-[#4a7766] hover:text-[#4a7766]"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main
        className={`pt-24 transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-b from-gray-800 to-gray-900 text-white"
            : "bg-white text-gray-800"
        }`}
      >
        {/* HOME SECTION */}
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6"
        >
          <div className="flex-1 space-y-6">
            <h1
              className={`text-4xl md:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Hello, I'm <br />
              <span className={isDark ? "text-blue-400" : "text-[#4a7766]"}>
                Hasanul Mukit
              </span>
              <br />
              <span className="text-xl">
                Passionate web developer &amp; aspiring AI/ML researcher
                specializing in front-end design and machine learning.
              </span>
            </h1>
            <a
              href="/assets/CV_Hasanul_Mukit.pdf"
              download
              className={`inline-block py-3 px-8 rounded-lg transition ${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-[#4a7766] hover:bg-[#3d6734] text-white"
              }`}
            >
              Download CV
            </a>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.linkedin.com/in/hasanul-mukit-b7a00117b/",
                  icon: "/assets/icons/linkedin.png",
                  alt: "LinkedIn",
                },
                {
                  href: "https://github.com/hasanulmukit",
                  icon: "/assets/icons/github.png",
                  alt: "Github",
                },
                {
                  href: "https://leetcode.com/u/hmukit",
                  icon: "/assets/icons/leetcode.png",
                  alt: "Leetcode",
                },
                {
                  href: "https://dev.to/hasanulmukit",
                  icon: "/assets/icons/dev.png",
                  alt: "Dev",
                },
                {
                  href: "https://www.hackerrank.com/profile/hmukit_gub",
                  icon: "/assets/icons/hackerrank.png",
                  alt: "Hackerrank",
                },
                {
                  href: "https://scholar.google.com/citations?hl=en&user=AxgFFXIAAAAJ",
                  icon: "/assets/icons/scholar.png",
                  alt: "Scholar",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img src={social.icon} alt={social.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="/images/portfolio.png"
              alt="Portfolio"
              className="w-80 mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className={`py-16 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className={`text-3xl font-bold text-center mb-12 ${
                isDark ? "text-blue-400" : "text-green-600"
              }`}
            >
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Next.js",
                  icon: "/assets/icons/nextjs.svg",
                  percent: 80,
                },
                {
                  name: "Tailwind CSS",
                  icon: "/assets/icons/tailwind.svg",
                  percent: 85,
                },
                {
                  name: "Node.js",
                  icon: "/assets/icons/node-js.png",
                  percent: 75,
                },
                {
                  name: "React.js",
                  icon: "/assets/icons/react.png",
                  percent: 80,
                },
                {
                  name: "Python",
                  icon: "/assets/icons/python.png",
                  percent: 55,
                },
                { name: "Java", icon: "/assets/icons/java.png", percent: 75 },
                {
                  name: "UI/UX Design",
                  icon: "/assets/icons/prototyping.png",
                  percent: 90,
                },
                {
                  name: "Content Writing",
                  icon: "/assets/icons/content-writing.png",
                  percent: 90,
                },
              ].map((skill) => (
                <div key={skill.name} className="flex items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 mr-4"
                  />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div
                      className={`w-full rounded h-2 ${
                        isDark ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`h-2 rounded transition-all duration-500 ${
                          isDark ? "bg-blue-500" : "bg-green-600"
                        }`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION – Overlay Hover for Buttons */}
        <section id="portfolio" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className={`text-3xl font-bold text-center mb-12 ${
                isDark ? "text-blue-400" : "text-green-600"
              }`}
            >
              Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "/images/prj2.png",
                  live: "https://hasanulmukit.github.io/ePlant-shop/",
                  github: "https://github.com/hasanulmukit/ePlant-shop",
                },
                {
                  image: "/images/prj1.png",
                  live: "https://hasanulmukit.github.io/responsive-restaurant-webapp/",
                  github:
                    "https://github.com/hasanulmukit/responsive-restaurant-webapp",
                },
                {
                  image: "/images/prj3.png",
                  live: "https://github.com/hasanulmukit/dev-manager-nextjs",
                  github: "https://github.com/hasanulmukit/dev-manager-nextjs",
                },
                {
                  image: "/images/prj5.png",
                  live: "https://smiles2dta-demo.streamlit.app/",
                  github: "https://github.com/hasanulmukit/smiles2dta-demo",
                },
                {
                  image: "/images/prj6.png",
                  live: "https://github.com/hasanulmukit/EcoSphereAI",
                  github: "https://github.com/hasanulmukit/EcoSphereAI",
                },
                {
                  image: "/images/prj4.png",
                  live: "https://github.com/hasanulmukit/time-series-forecasting",
                  github:
                    "https://github.com/hasanulmukit/time-series-forecasting",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className={`relative group rounded overflow-hidden shadow ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`Project ${i + 1}`}
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-x-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`py-2 px-4 rounded transition ${
                          isDark
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-[#4a7766] hover:bg-[#3d6734]"
                        } text-white`}
                      >
                        Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`py-2 px-4 rounded transition ${
                          isDark
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-[#4a7766] hover:bg-[#3d6734]"
                        } text-white`}
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://github.com/hasanulmukit?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block py-2 px-6 rounded transition ${
                  isDark
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-[#4a7766] hover:bg-[#3d6734] text-white"
                }`}
              >
                Discover More
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className={`text-3xl font-bold text-center mb-12 ${
                isDark ? "text-blue-400" : "text-green-600"
              }`}
            >
              About
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Tab Buttons */}
              <div className="md:w-1/4">
                <div className="flex flex-col space-y-2">
                  {[
                    { key: "aboutme", label: "About Me" },
                    { key: "experience", label: "Experience" },
                    { key: "education", label: "Education" },
                    { key: "achievements", label: "Achievements" },
                    { key: "publications", label: "Publications" },
                    { key: "languages", label: "Language Proficiency" },
                    { key: "software", label: "Software Expertise" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`py-2 px-4 text-left rounded transition ${
                        activeTab === tab.key
                          ? isDark
                            ? "bg-blue-500 text-white"
                            : "bg-[#4a7766] text-white"
                          : isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Tab Content */}
              <div className="md:w-3/4 bg-transparent p-6 rounded shadow h-96 overflow-y-auto">
                {activeTab === "aboutme" && (
                  <div
                    className={`space-y-4 text-justify transition-colors duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    <p>
                      Hello, I’m Hasanul Mukit, a dedicated computer engineering
                      graduate with a passion for creating innovative digital
                      experiences. With expertise in web development, UI/UX
                      design, and content writing, I thrive at the intersection
                      of creativity and technology.
                    </p>
                    <p>
                      I’m currently building my professional portfolio,
                      dedicating significant time to developing practical
                      projects—all of which reflect my commitment to clean code
                      and user-focused design.
                    </p>
                    <p>
                      I believe in lifelong learning, which drives me to
                      constantly explore new tools and technologies. My tech
                      stack includes HTML, CSS, JavaScript, React, Node.js,
                      Next.js, and Tailwind CSS, among others.
                    </p>
                    <p>
                      Alongside my core expertise, I actively engage in AI/ML
                      research and development, collaborating on group projects
                      that leverage machine learning algorithms to solve
                      real-world challenges.
                    </p>
                    <p>
                      When I’m not coding or designing, you’ll likely find me
                      exploring ways to incorporate sustainability into
                      technology or enjoying a good book. I’m always looking to
                      connect with like-minded individuals—let’s connect!
                    </p>
                  </div>
                )}
                {activeTab === "experience" && (
                  <div
                    className={`space-y-4 ${
                      isDark ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {[
                      {
                        title: "AI/ML Researcher & Developer",
                        details: "Independent Contractor | Oct 2022 - Present",
                      },
                      {
                        title: "Web Developer",
                        details: "Independent Contractor | May 2022 - Present",
                      },
                      {
                        title: "Content Writer",
                        details: "Independent Contractor | Mar 2020 - Dec 2024",
                      },
                      {
                        title: "IT officer",
                        details:
                          "Nabarupa Fashion House BD Ltd. | Sep 2023 - Aug 2024",
                      },
                      {
                        title: "UI/UX Designer",
                        details:
                          "Independent Contractor | Nov 2020 - July 2023",
                      },
                      {
                        title: "Educator",
                        details:
                          "Comfort Education Care | April 2016 - Feb 2019",
                      },
                    ].map((exp, i) => (
                      <div key={i} className="border p-4 rounded">
                        <h3 className="font-bold">{exp.title}</h3>
                        <p className="text-sm">{exp.details}</p>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "education" && (
                  <div
                    className={`space-y-4 ${
                      isDark ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {[
                      {
                        title: "BSc (Engg.) in Computer Science & Engineering",
                        details:
                          "CGPA: 3.8/4\nGreen University of Bangladesh, 2019 - 2022",
                      },
                      {
                        title: "Higher Secondary Certificate (Science)",
                        details:
                          "GPA: 4.67/5\nMonipur High School & College, 2017",
                      },
                      {
                        title: "Certifications",
                        details:
                          "Responsive Web Design Developer from freecodecamp, 2024\nFront-End Development from Codecademy, 2022",
                      },
                    ].map((edu, i) => (
                      <div key={i} className="border p-4 rounded">
                        <h3 className="font-bold">{edu.title}</h3>
                        <p className="text-sm whitespace-pre-line">
                          {edu.details}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "achievements" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        image: "/images/ibm_granite.jpg",
                        title:
                          "Certificate of achievement at Generative AI Hackathon with IBM Granite, Feb 21-23, 2025",
                      },
                      {
                        image: "/images/ai_hack.webp",
                        title:
                          "AI for Connectivity Hackathon Certificate, Jan 24-26, 2025",
                      },
                      {
                        image: "/images/dev1.jpg",
                        title:
                          "Responsive Web Design Developer Certification, 2024",
                      },
                      {
                        image: "/images/bookreading.jpg",
                        title:
                          "2nd Runner up, British Council Book Reading Competition, Fall 2019",
                      },
                      {
                        image: "/images/vc.jpg",
                        title:
                          "Vice Chancellor Awards, Green University of Bangladesh",
                      },
                      {
                        image: "/images/dean.jpg",
                        title: "Dean Awards, Green University of Bangladesh",
                      },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <img
                          src={item.image}
                          alt={`Achievement ${i + 1}`}
                          className="w-full h-64 object-cover rounded transition transform hover:scale-105"
                        />
                        <h3 className="mt-2 text-sm font-bold">{item.title}</h3>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "publications" && (
                  <div
                    className={`space-y-4 ${
                      isDark ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {[
                      {
                        title:
                          "SMILES2DTA: a CNN-based approach for identifying drug candidates and predicting drug-target binding affinity",
                        details:
                          "First Author, Published in Neural Computing and Applications by Springer London (2024)",
                        link: "https://link.springer.com/article/10.1007/s00521-024-10814-x",
                      },
                      {
                        title:
                          "EcoSphereAI: Public Sector Networks Optimization",
                        details: "First Author, Work in progress",
                      },
                      {
                        title:
                          "Deep Autoencoder-Based Anomaly Detection in Blockchain Transactions",
                        details: "First Author, Work in progress",
                      },
                    ].map((pub, i) => (
                      <div key={i} className="border p-4 rounded">
                        <h3 className="font-bold">{pub.title}</h3>
                        <p className="text-sm whitespace-pre-line">
                          {pub.details}
                        </p>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                          >
                            View Article
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "languages" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        language: "English",
                        skills: { Reading: 5, Writing: 5, Speaking: 4 },
                      },
                      {
                        language: "Bangla",
                        skills: { Reading: 5, Writing: 5, Speaking: 5 },
                      },
                      {
                        language: "Hindi",
                        skills: { Reading: 0, Writing: 0, Speaking: 5 },
                      },
                      {
                        language: "Korean (Learning)",
                        skills: { Reading: 2, Writing: 3, Speaking: 1 },
                      },
                    ].map((lang, i) => (
                      <div key={i} className="border p-4 rounded flex flex-col">
                        <h3 className="font-bold mb-2">{lang.language}</h3>
                        <div className="flex flex-col space-y-2">
                          {Object.entries(lang.skills).map(
                            ([skillName, level], j) => (
                              <div
                                key={j}
                                className="flex items-center space-x-2"
                              >
                                <p className="text-sm font-semibold w-20">
                                  {skillName}
                                </p>
                                <div className="flex space-x-1">
                                  {Array.from({ length: 5 }).map((_, idx) => (
                                    <div
                                      key={idx}
                                      className={`w-3 h-3 rounded ${
                                        isDark
                                          ? idx < level
                                            ? "bg-blue-500"
                                            : "bg-gray-600"
                                          : idx < level
                                          ? "bg-green-500"
                                          : "bg-gray-300"
                                      }`}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "software" && (
                  <div
                    className={`space-y-8 ${
                      isDark ? "text-gray-300" : "text-black"
                    }`}
                  >
                    <div>
                      <h3 className="font-bold mb-2">Design Tools</h3>
                      <div className="flex space-x-6">
                        {[
                          { icon: "/assets/icons/figma.png", name: "Figma" },
                          {
                            icon: "/assets/icons/adobe-xd.png",
                            name: "Adobe XD",
                          },
                          {
                            icon: "/assets/icons/photoshop.png",
                            name: "Photoshop",
                          },
                          {
                            icon: "/assets/icons/autocad.png",
                            name: "AutoCAD",
                          },
                          {
                            icon: "/assets/icons/lucidchart.png",
                            name: "Lucidchart",
                          },
                        ].map((tool, i) => (
                          <div key={i} className="text-center">
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-16 h-16 mx-auto"
                            />
                            <span className="text-sm">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Development Tools</h3>
                      <div className="flex space-x-6">
                        {[
                          { icon: "/assets/icons/vscode.png", name: "VS Code" },
                          { icon: "/assets/icons/git.png", name: "Git" },
                          {
                            icon: "/assets/icons/wordpress.png",
                            name: "WordPress",
                          },
                          {
                            icon: "/assets/icons/android-studio.png",
                            name: "Android Studio",
                          },
                          { icon: "/assets/icons/LaTeX.png", name: "LaTeX" },
                        ].map((tool, i) => (
                          <div key={i} className="text-center">
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-16 h-16 mx-auto"
                            />
                            <span className="text-sm">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Productivity Tools</h3>
                      <div className="flex space-x-6">
                        {[
                          { icon: "/assets/icons/word.png", name: "MS Word" },
                          { icon: "/assets/icons/excel.png", name: "MS Excel" },
                          {
                            icon: "/assets/icons/powerpoint.png",
                            name: "MS PowerPoint",
                          },
                        ].map((tool, i) => (
                          <div key={i} className="text-center">
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-16 h-16 mx-auto"
                            />
                            <span className="text-sm">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Data Analysis Tools</h3>
                      <div className="flex space-x-6">
                        <div className="text-center">
                          <img
                            src="/assets/icons/origin.png"
                            alt="OriginLab"
                            className="w-16 h-16 mx-auto"
                          />
                          <span className="text-sm">OriginLab</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2
              className={`text-3xl font-bold mb-12 ${
                isDark ? "text-blue-400" : "text-green-600"
              }`}
            >
              Contact Me
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:hasanulmukit.se@gmail.com"
                className={`flex items-center py-2 px-4 rounded transition ${
                  isDark
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-[#4a7766] hover:bg-[#3d6734] text-white"
                }`}
              >
                <img
                  src="/assets/icons/gmail.png"
                  alt="Email"
                  className="w-6 h-6 mr-2"
                />
                Send Mail
              </a>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://m.me/H.D.Mukit",
                    icon: "/assets/icons/messenger.png",
                    label: "Messenger",
                  },
                  {
                    href: "https://wa.me/8801946187082",
                    icon: "/assets/icons/whatsapp.png",
                    label: "WhatsApp",
                  },
                  {
                    href: "https://profile.imo.im/profileshare/shr.AAAAAAAAAAAAAAAAAAAAAI-ExEa0ZEM5ADo3yLliFXVWyKsPTvMCdHRpOPDktSlG",
                    icon: "/assets/icons/imo.png",
                    label: "IMO",
                  },
                  {
                    href: "https://t.me/hasanulmukit",
                    icon: "/assets/icons/telegram.png",
                    label: "Telegram",
                  },
                ].map((contact, i) => (
                  <a
                    key={i}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center py-2 px-4 rounded transition ${
                      isDark
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-[#4a7766] hover:bg-[#3d6734] text-white"
                    }`}
                  >
                    <img
                      src={contact.icon}
                      alt={contact.label}
                      className="w-6 h-6 mr-2"
                    />
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`py-8 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold">Hasanul Mukit</p>
            <p className="flex items-center mt-2">
              <img
                src="/assets/icons/location.png"
                alt="Location"
                className="w-5 h-5 mr-2"
              />
              Dhaka, Bangladesh
            </p>
            <p className="flex items-center mt-2">
              <img
                src="/assets/icons/phone.png"
                alt="Phone"
                className="w-5 h-5 mr-2"
              />
              +880 1754 961609
            </p>
            <p className="flex items-center mt-2">
              <img
                src="/assets/icons/mail.png"
                alt="Email"
                className="w-5 h-5 mr-2"
              />
              hasanulmukit.se@gmail.com
            </p>
          </div>
          <div className="flex space-x-4">
            {[
              {
                href: "https://web.facebook.com/H.D.Mukit/",
                icon: "/assets/icons/facebook.png",
              },
              {
                href: "https://www.instagram.com/h.d.mukit94/",
                icon: "/assets/icons/instagram.png",
              },
              {
                href: "https://x.com/H_Mukit",
                icon: "/assets/icons/twitter.png",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src={social.icon} alt="Social Icon" className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center mt-4 text-sm">
          &#169; Hasanul Mukit. All rights reserved
        </p>
      </footer>
    </>
  );
}
