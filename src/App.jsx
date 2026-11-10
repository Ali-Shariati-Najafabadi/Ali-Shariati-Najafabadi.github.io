import React, { useState, useEffect } from 'react';
import { Github, Mail, MapPin, Code, Brain, Award, ExternalLink, Globe, Briefcase, Linkedin, ShieldCheck, Fingerprint, GraduationCap, ArrowDown } from 'lucide-react';

function Section({ id, index, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-10">
        <span className="font-mono text-xs tracking-[0.25em] text-muted">{index} / 05</span>
        <h2 className="font-heading text-4xl md:text-5xl text-text mt-2">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
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
        },
        project4: {
          title: 'Detection of Multi-Modal Deepfakes',
          org: 'Bachelor-Thesis · Fraunhofer SIT & TU Darmstadt',
          desc: 'Systematischer Vergleich von ResNet-50/BiLSTM, X3D-M und TimeSformer als Video-Encoder in Fusion mit HuBERT-Audio zur Erkennung und Modalitätszuordnung von Audio-Video-Deepfakes (vier Klassen: Real, FARV, RAFV, FAFV). Cross-Dataset-Evaluation auf AV-Deepfake1M++, FakeAVCeleb und DeepSpeak v2.0.'
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
        },
        project4: {
          title: 'Detection of Multi-Modal Deepfakes',
          org: 'Bachelor Thesis · Fraunhofer SIT & TU Darmstadt',
          desc: 'Systematic comparison of ResNet-50/BiLSTM, X3D-M and TimeSformer video encoders fused with HuBERT audio for multi-modal deepfake detection and modality attribution (four classes: Real, FARV, RAFV, FAFV). Cross-dataset evaluation on AV-Deepfake1M++, FakeAVCeleb and DeepSpeak v2.0.'
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

  useEffect(() => {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ['hero', ...sectionKeys].forEach((key) => {
      const el = document.getElementById(key);
      if (el) navObserver.observe(el);
    });
    return () => navObserver.disconnect();
  }, []);

  const tile = 'bg-surface border border-border rounded-lg';

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      {/* Header / Nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#hero" className="font-mono text-xs tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors">
            Ali Shariati Najafabadi
          </a>
          <div className="hidden md:flex items-center gap-7">
            {sectionKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className={`relative font-mono text-xs uppercase tracking-wider pb-1 transition-colors ${
                  activeSection === key ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {t.sections[key]}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-accent origin-left transition-transform duration-300 ${
                    activeSection === key ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </div>
          <button
            onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted border border-border rounded-full px-3 py-1.5 hover:text-accent hover:border-accent transition-colors shrink-0"
          >
            <Globe size={14} />
            {language === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>
        {/* Mobile nav */}
        <div className="flex md:hidden gap-2 font-mono text-xs uppercase tracking-wider px-6 pb-4 overflow-x-auto">
          {sectionKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap border transition-colors duration-200 ${
                activeSection === key
                  ? 'bg-accent text-surface font-semibold border-accent'
                  : 'text-muted border-border'
              }`}
            >
              {t.sections[key]}
            </a>
          ))}
        </div>
      </header>

      <main>
        <div className="container mx-auto px-6 max-w-5xl py-14 md:py-20 space-y-20 md:space-y-28">

          {/* Hero */}
          <section id="hero" className="scroll-mt-28">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
              <div className="w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border border-border">
                <img
                  src="/IMG_5354.PNG"
                  alt="Ali Shariati Najafabadi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl font-heading text-text bg-surface">AS</div>';
                  }}
                />
              </div>

              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">Portfolio</p>
                <h1 className="font-heading text-6xl md:text-8xl leading-[0.95] text-text mb-6">
                  {t.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted leading-relaxed mb-3 max-w-xl">
                  {t.hero.subtitle}
                </p>
                <p className="font-mono text-xs text-muted uppercase tracking-wide mb-8">
                  {t.hero.tagline}
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="mailto:alishariaty0854@gmail.com" className="flex items-center gap-2 text-text border-b border-text pb-0.5 hover:text-accent hover:border-accent transition-colors">
                    <Mail size={15} />
                    {t.hero.contact}
                  </a>
                  <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text border-b border-text pb-0.5 hover:text-accent hover:border-accent transition-colors">
                    <Github size={15} />
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ali-shariati-najafabadi-b69063220/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text border-b border-text pb-0.5 hover:text-accent hover:border-accent transition-colors">
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-14">
              <a href="#about" className="text-muted hover:text-accent transition-colors animate-bounce" aria-label="Scroll down">
                <ArrowDown size={16} />
              </a>
            </div>
          </section>

          {/* About */}
          <Section id="about" index={sectionIndex.about} title={t.about.title}>
            <div className="grid md:grid-cols-3 gap-5">
              <div className={`${tile} md:col-span-2 p-6 md:p-8 grid sm:grid-cols-2 gap-6`}>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 text-accent shrink-0" size={17} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">{t.about.email}</p>
                    <a href="mailto:alishariaty0854@gmail.com" className="hover:text-accent transition-colors break-all">
                      alishariaty0854@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-accent shrink-0" size={17} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">{t.about.location}</p>
                    <p>{t.about.locationValue}</p>
                  </div>
                </div>
              </div>
              <div className={`${tile} p-6 md:p-8`}>
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
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{ width: lang.fill }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience" index={sectionIndex.experience} title={t.experience.title}>
            <div className="grid md:grid-cols-3 gap-5">
              {t.experience.positions.map((job, index) => (
                <div
                  key={index}
                  className={`${tile} p-6 md:p-8 hover:border-accent transition-colors duration-300 ${
                    job.tasks.length > 0 ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="text-xl font-semibold text-text flex items-center gap-2">
                      <Briefcase className="text-accent shrink-0" size={17} />
                      {job.position}
                    </h3>
                    <p className="text-muted">{job.company}</p>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">{job.period}</span>
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
          </Section>

          {/* Education */}
          <Section id="education" index={sectionIndex.education} title={t.education.title}>
            <div className="grid md:grid-cols-3 gap-5">
              {t.education.positions.map((edu, index) => (
                <div
                  key={index}
                  className={`${tile} p-6 md:p-8 hover:border-accent transition-colors duration-300 ${
                    edu.note ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="text-xl font-semibold text-text flex items-center gap-2">
                      <GraduationCap className="text-accent shrink-0" size={17} />
                      {edu.degree}
                    </h3>
                    <p className="text-muted">{edu.university}</p>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">{edu.period}</span>
                  </div>
                  {edu.note && (
                    <p className="text-muted mt-4">{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section id="projects" index={sectionIndex.projects} title={t.projects.title}>
            <div className="grid md:grid-cols-3 gap-5">
              <a
                href="https://github.com/Ali-Shariati-Najafabadi/Real-Time-Deepfake-Pipeline"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tile} md:col-span-2 p-6 md:p-8 hover:border-accent transition-colors duration-300 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Code className="text-accent" size={20} />
                  <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={15} />
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

              <div className={`${tile} md:col-span-1 p-6 md:p-8 hover:border-accent transition-colors duration-300`}>
                <div className="flex items-start justify-between mb-3">
                  <ShieldCheck className="text-accent" size={20} />
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
                className={`${tile} md:col-span-1 p-6 md:p-8 hover:border-accent transition-colors duration-300 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Brain className="text-accent" size={20} />
                  <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={15} />
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

              <a
                href="https://github.com/Ali-Shariati-Najafabadi/multimodal-deepfake-detection"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tile} md:col-span-2 p-6 md:p-8 hover:border-accent transition-colors duration-300 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Fingerprint className="text-accent" size={20} />
                  <ExternalLink className="text-muted group-hover:text-accent transition-colors" size={15} />
                </div>
                <h3 className="text-lg font-semibold text-text mb-1">
                  {t.projects.project4.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">{t.projects.project4.org}</p>
                <p className="text-muted mb-4">{t.projects.project4.desc}</p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="border border-border rounded-full px-3 py-1">Python</span>
                  <span className="border border-border rounded-full px-3 py-1">PyTorch</span>
                  <span className="border border-border rounded-full px-3 py-1">HuBERT</span>
                  <span className="border border-border rounded-full px-3 py-1">Transformers</span>
                </div>
              </a>
            </div>
          </Section>

          {/* Skills */}
          <Section id="skills" index={sectionIndex.skills} title={t.skills.title}>
            <div className="grid md:grid-cols-3 gap-5">
              <div className={`${tile} p-6 md:p-8`}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                  <Code size={15} className="text-accent" />
                  {t.skills.languages}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++'].map(skill => (
                    <span key={skill} className="border border-border rounded-full px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${tile} p-6 md:p-8`}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                  <Award size={15} className="text-accent" />
                  {t.skills.frameworks}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Vue.js', 'Flask', 'FastAPI', 'TestComplete', 'ReadyAPI', 'Selenium', 'Git', 'Docker', 'Azure DevOps', 'PostgreSQL', 'MongoDB'].map(skill => (
                    <span key={skill} className="border border-border rounded-full px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${tile} p-6 md:p-8`}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-4 flex items-center gap-2">
                  <Brain size={15} className="text-accent" />
                  {t.skills.ml}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'Computer Vision', 'NLP', 'Deep Learning', 'CNNs', 'Transformers'].map(skill => (
                    <span key={skill} className="border border-border rounded-full px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-muted">{t.footer.rights}</p>
            <div className="flex gap-5">
              <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                <Github size={17} />
              </a>
              <a href="https://www.linkedin.com/in/ali-shariati-najafabadi-b69063220/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                <Linkedin size={17} />
              </a>
              <a href="mailto:alishariaty0854@gmail.com" className="text-muted hover:text-accent transition-colors">
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
