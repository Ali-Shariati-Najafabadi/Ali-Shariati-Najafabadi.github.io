import React, { useState } from 'react';
import { Github, Mail, Phone, MapPin, Code, Brain, Award, ExternalLink, Globe, Briefcase, Linkedin } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [language, setLanguage] = useState('de');

  const translations = {
    de: {
      sections: {
        about: 'Über mich',
        experience: 'Berufserfahrung',
        education: 'Ausbildung',
        projects: 'Projekte',
        skills: 'Kompetenzen'
      },
      hero: {
        title: 'Ali Shariati Najafabadi',
        subtitle: 'Software Developer bei Capgemini · M.Sc.-Informatikstudent an der TU Darmstadt',
        tagline: 'Teamfähig · Analytisch · Praxisorientiert',
        contact: 'E-Mail'
      },
      about: {
        title: 'Über mich',
        email: 'E-Mail',
        phone: 'Telefon',
        location: 'Standort',
        locationValue: 'Darmstadt, Deutschland',
        languages: 'Sprachkenntnisse',
        german: 'Deutsch',
        english: 'Englisch',
        persian: 'Persisch',
        advanced: 'Fortgeschritten',
        native: 'Muttersprache'
      },
      experience: {
        title: 'Berufserfahrung',
        positions: [
          {
            position: 'Software Developer',
            company: 'Capgemini',
            period: 'Jun 2026 – Aktuell',
            tasks: []
          },
          {
            position: 'Werkstudent Softwareentwicklung & Testautomatisierung',
            company: 'Fraport AG, Frankfurt am Main',
            period: 'Aug 2023 – Feb 2026',
            tasks: [
              'Entwicklung und Qualitätssicherung des mobilen Informationssystems zur Flugzeugabfertigung',
              'Implementierung von 60+ End-to-End-Tests mit TestComplete und JavaScript (Gherkin), Reduktion manueller Testzeit um 60%',
              'Entwicklung von 70+ automatisierten API-Tests mit ReadyAPI, Integration in CI/CD-Pipeline zur Validierung von Kafka-Nachrichten',
              'Dokumentation und Analyse von Fehlern in JIRA, Verwaltung von Aufgaben in Azure DevOps',
              'Optimierung der CI/CD-Pipeline im agilen Team, regelmäßige Teilnahme an Sprint-Reviews'
            ]
          }
        ]
      },
      education: {
        title: 'Ausbildung',
        positions: [
          {
            degree: 'M.Sc. Informatik',
            university: 'Technische Universität Darmstadt',
            period: 'Okt 2026 – Aktuell',
            note: ''
          },
          {
            degree: 'B.Sc. Informatik',
            university: 'Technische Universität Darmstadt',
            period: 'Okt 2021 – 2026',
            note: 'Bachelor-Thesis: „Detection of Multimodal Deepfakes" beim Fraunhofer SIT — Deep-Learning-System zur Erkennung und Lokalisierung von Audio-Video-Manipulationen, basierend auf CNNs und Transformer-Architekturen (Wav2Vec, HuBERT)'
          }
        ]
      },
      projects: {
        title: 'Projekte',
        project1: {
          title: 'Real-Time Deepfake Pipeline',
          org: 'System Security Lab, TU Darmstadt',
          desc: 'Entwicklung einer performanten Echtzeit-Pipeline zur Stimm- und Gesichtsumwandlung mit Client-Server-Architektur und benutzerfreundlicher GUI. Technologien: Diff-HierVC, InsightFace, GFPGAN'
        },
        project2: {
          title: 'Tool Support for Sustainable Protocol Security',
          org: 'SEEMOO, TU Darmstadt',
          desc: 'Full-Stack-Webanwendung zur Analyse von LoRaWAN-Sicherheitslücken aus 100+ Papers mit interaktiver Visualisierung und Graph-Ansichten. Python CLI-Tools zur automatisierten Generierung von LaTeX-Tabellen.'
        },
        project3: {
          title: 'Context-Aware Captions from Photos',
          org: 'System Security Lab, TU Darmstadt',
          desc: 'Training eines BLIP-2-Modells auf GoodNews-Datensatz (15k Bilder) zur kontextbewussten Bildbeschreibung - erreichte 23% Verbesserung gegenüber Baseline bei BLEU-Score'
        }
      },
      skills: {
        title: 'Technische Kompetenzen',
        languages: 'Programmiersprachen',
        frameworks: 'Frameworks & Tools',
        ml: 'Machine Learning & AI'
      },
      footer: {
        rights: '© 2026 Ali Shariati Najafabadi.'
      }
    },
    en: {
      sections: {
        about: 'About Me',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        skills: 'Skills'
      },
      hero: {
        title: 'Ali Shariati Najafabadi',
        subtitle: 'Software Developer at Capgemini · M.Sc. Computer Science student at TU Darmstadt',
        tagline: 'Team Player · Analytical · Practical',
        contact: 'Email'
      },
      about: {
        title: 'About Me',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Darmstadt, Germany',
        languages: 'Languages',
        german: 'German',
        english: 'English',
        persian: 'Persian',
        advanced: 'Advanced',
        native: 'Native'
      },
      experience: {
        title: 'Work Experience',
        positions: [
          {
            position: 'Software Developer',
            company: 'Capgemini',
            period: 'Jun 2026 – Present',
            tasks: []
          },
          {
            position: 'Working Student Software Development & Test Automation',
            company: 'Fraport AG, Frankfurt am Main',
            period: 'Aug 2023 – Feb 2026',
            tasks: [
              'Development and quality assurance of mobile information system for aircraft handling',
              'Implementation of 60+ end-to-end tests with TestComplete and JavaScript (Gherkin), reducing manual testing time by 60%',
              'Development of 70+ automated API tests with ReadyAPI, integration into CI/CD pipeline for Kafka message validation',
              'Documentation and analysis of errors in JIRA, task management in Azure DevOps',
              'Optimization of CI/CD pipeline in agile team, regular participation in sprint reviews'
            ]
          }
        ]
      },
      education: {
        title: 'Education',
        positions: [
          {
            degree: 'M.Sc. Computer Science',
            university: 'Technical University of Darmstadt',
            period: 'Oct 2026 – Present',
            note: ''
          },
          {
            degree: 'B.Sc. Computer Science',
            university: 'Technical University of Darmstadt',
            period: 'Oct 2021 – 2026',
            note: 'Bachelor Thesis: "Detection of Multimodal Deepfakes" at Fraunhofer SIT — deep learning system detecting and localizing audio-video manipulations, combining CNNs and transformer architectures (Wav2Vec, HuBERT)'
          }
        ]
      },
      projects: {
        title: 'Projects',
        project1: {
          title: 'Real-Time Deepfake Pipeline',
          org: 'System Security Lab, TU Darmstadt',
          desc: 'Development of a performant real-time pipeline for voice and face conversion with client-server architecture and user-friendly GUI. Technologies: Diff-HierVC, InsightFace, GFPGAN'
        },
        project2: {
          title: 'Tool Support for Sustainable Protocol Security',
          org: 'SEEMOO, TU Darmstadt',
          desc: 'Full-stack web application for analyzing LoRaWAN security vulnerabilities from 100+ papers with interactive visualization and graph views. Python CLI tools for automated generation of LaTeX tables.'
        },
        project3: {
          title: 'Context-Aware Captions from Photos',
          org: 'System Security Lab, TU Darmstadt',
          desc: 'Training of a BLIP-2 model on GoodNews dataset (15k images) for context-aware image captioning - achieved 23% improvement over baseline in BLEU score'
        }
      },
      skills: {
        title: 'Technical Skills',
        languages: 'Programming Languages',
        frameworks: 'Frameworks & Tools',
        ml: 'Machine Learning & AI'
      },
      footer: {
        rights: '© 2026 Ali Shariati Najafabadi.'
      }
    }
  };

  const t = translations[language];
  const sectionKeys = ['about', 'experience', 'education', 'projects', 'skills'];
  const sectionIndex = {
    about: '01',
    experience: '02',
    education: '03',
    projects: '04',
    skills: '05'
  };

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-sans relative overflow-x-hidden">
      {/* Decorative glow background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[24rem] h-[24rem] rounded-full bg-accent2/10 blur-[120px]" />
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted">
              Ali Shariati Najafabadi
            </span>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2 font-mono text-xs uppercase tracking-wider bg-surface border border-border rounded-full p-1">
                {sectionKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                      activeSection === key
                        ? 'bg-accent-gradient text-bg font-semibold shadow-glow'
                        : 'text-muted hover:text-text'
                    }`}
                  >
                    {t.sections[key]}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted border border-border rounded-full px-3 py-1.5 hover:text-accent hover:border-accent transition-colors"
              >
                <Globe size={14} />
                {language === 'de' ? 'EN' : 'DE'}
              </button>
            </div>
          </div>
          {/* Mobile nav */}
          <div className="flex md:hidden gap-2 font-mono text-xs uppercase tracking-wider mt-4 overflow-x-auto">
            {sectionKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap border transition-colors duration-200 ${
                  activeSection === key
                    ? 'bg-accent-gradient text-bg font-semibold border-transparent'
                    : 'text-muted border-border'
                }`}
              >
                {t.sections[key]}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-5xl mx-auto">
          <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-3xl p-1 bg-accent-gradient shadow-glow">
            <div className="w-full h-full rounded-[20px] overflow-hidden bg-surface">
              <img
                src="/IMG_5354.PNG"
                alt="Ali Shariati Najafabadi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-heading font-semibold text-text bg-surface">AS</div>';
                }}
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold leading-[1.05] mb-5 bg-accent-gradient bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-5 max-w-xl">
              {t.hero.subtitle}
            </p>
            <p className="inline-block font-mono text-xs text-accent uppercase tracking-wide mb-8 border border-accent/40 bg-accent/10 rounded-full px-4 py-1.5">
              {t.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:alishariaty0854@gmail.com" className="flex items-center gap-2 text-text bg-surface border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors">
                <Mail size={16} />
                {t.hero.contact}
              </a>
              <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text bg-surface border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ali-shariati-najafabadi-b69063220/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text bg-surface border border-border rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 flex-1 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-gradient text-bg font-mono text-sm font-semibold shrink-0">{sectionIndex.about}</span>
                <h2 className="font-heading text-3xl font-semibold text-text">{t.about.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface border border-border rounded-2xl p-6 space-y-5">
                  <div className="flex items-start gap-3 pb-4 border-b border-border">
                    <Mail className="mt-1 text-accent" size={18} />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">{t.about.email}</p>
                      <a href="mailto:alishariaty0854@gmail.com" className="hover:text-accent transition-colors">
                        alishariaty0854@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border">
                    <Phone className="mt-1 text-accent" size={18} />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">{t.about.phone}</p>
                      <a href="tel:+4915754703516" className="hover:text-accent transition-colors">
                        +49 157 54703516
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 text-accent" size={18} />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">{t.about.location}</p>
                      <p>{t.about.locationValue}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-5">{t.about.languages}</h3>
                  <div className="space-y-5">
                    {[
                      { label: t.about.german, level: t.about.advanced, fill: '80%' },
                      { label: t.about.english, level: t.about.advanced, fill: '80%' },
                      { label: t.about.persian, level: t.about.native, fill: '100%' }
                    ].map((lang) => (
                      <div key={lang.label}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{lang.label}</span>
                          <span className="font-mono text-xs text-accent uppercase">{lang.level}</span>
                        </div>
                        <div className="h-1.5 bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-accent-gradient rounded-full" style={{ width: lang.fill }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-gradient text-bg font-mono text-sm font-semibold shrink-0">{sectionIndex.experience}</span>
                <h2 className="font-heading text-3xl font-semibold text-text">{t.experience.title}</h2>
              </div>
              <div className="space-y-6">
                {t.experience.positions.map((job, index) => (
                  <div key={index} className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                      <div>
                        <h3 className="text-xl font-semibold text-text flex items-center gap-2">
                          <Briefcase className="text-accent" size={18} />
                          {job.position}
                        </h3>
                        <p className="text-muted">{job.company}</p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent shrink-0">{job.period}</span>
                    </div>
                    {job.tasks.length > 0 && (
                      <ul className="space-y-2.5 mt-4">
                        {job.tasks.map((task, i) => (
                          <li key={i} className="flex gap-3 text-muted">
                            <span className="text-accent">—</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-gradient text-bg font-mono text-sm font-semibold shrink-0">{sectionIndex.education}</span>
                <h2 className="font-heading text-3xl font-semibold text-text">{t.education.title}</h2>
              </div>
              <div className="space-y-6">
                {t.education.positions.map((edu, index) => (
                  <div key={index} className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3 gap-1">
                      <div>
                        <h3 className="text-xl font-semibold text-text flex items-center gap-2">
                          <Award className="text-accent" size={18} />
                          {edu.degree}
                        </h3>
                        <p className="text-muted">{edu.university}</p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-accent shrink-0">{edu.period}</span>
                    </div>
                    {edu.note && (
                      <p className="text-muted mt-4">{edu.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-gradient text-bg font-mono text-sm font-semibold shrink-0">{sectionIndex.projects}</span>
                <h2 className="font-heading text-3xl font-semibold text-text">{t.projects.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="https://github.com/Ali-Shariati-Najafabadi/Real-Time-Deepfake-Pipeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent"><Code size={20} /></span>
                    <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {t.projects.project1.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">{t.projects.project1.org}</p>
                  <p className="text-muted mb-4">{t.projects.project1.desc}</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="border border-border rounded-full px-3 py-1">Python</span>
                    <span className="border border-border rounded-full px-3 py-1">PyTorch</span>
                    <span className="border border-border rounded-full px-3 py-1">Computer Vision</span>
                  </div>
                </a>

                <div className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent"><Award size={20} /></span>
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {t.projects.project2.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">{t.projects.project2.org}</p>
                  <p className="text-muted mb-4">{t.projects.project2.desc}</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="border border-border rounded-full px-3 py-1">Python</span>
                    <span className="border border-border rounded-full px-3 py-1">React</span>
                    <span className="border border-border rounded-full px-3 py-1">Security</span>
                  </div>
                </div>

                <a
                  href="https://github.com/Ali-Shariati-Najafabadi/Generate-Context-Aware-Captions-from-Photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-glow transition-all duration-300 group md:col-span-2"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent"><Brain size={20} /></span>
                    <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {t.projects.project3.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">{t.projects.project3.org}</p>
                  <p className="text-muted mb-4">{t.projects.project3.desc}</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="border border-border rounded-full px-3 py-1">Python</span>
                    <span className="border border-border rounded-full px-3 py-1">PyTorch</span>
                    <span className="border border-border rounded-full px-3 py-1">NLP</span>
                    <span className="border border-border rounded-full px-3 py-1">BLIP-2</span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-10">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-gradient text-bg font-mono text-sm font-semibold shrink-0">{sectionIndex.skills}</span>
                <h2 className="font-heading text-3xl font-semibold text-text">{t.skills.title}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                    <Code size={16} className="text-accent" />
                    {t.skills.languages}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++'].map(skill => (
                      <span key={skill} className="border border-border rounded-full px-3 py-1.5 text-sm hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                    <Award size={16} className="text-accent" />
                    {t.skills.frameworks}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Vue.js', 'Flask', 'FastAPI', 'TestComplete', 'ReadyAPI', 'Selenium', 'Git', 'Docker', 'Azure DevOps', 'PostgreSQL', 'MongoDB'].map(skill => (
                      <span key={skill} className="border border-border rounded-full px-3 py-1.5 text-sm hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                    <Brain size={16} className="text-accent" />
                    {t.skills.ml}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'Computer Vision', 'NLP', 'Deep Learning', 'CNNs', 'Transformers'].map(skill => (
                      <span key={skill} className="border border-border rounded-full px-3 py-1.5 text-sm hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-muted">{t.footer.rights}</p>
            <div className="flex gap-3">
              <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-border text-muted hover:border-accent hover:text-accent transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/ali-shariati-najafabadi-b69063220/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-border text-muted hover:border-accent hover:text-accent transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:alishariaty0854@gmail.com" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-border text-muted hover:border-accent hover:text-accent transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
