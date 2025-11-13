import React, { useState } from 'react';
import { Github, Mail, Phone, MapPin, Calendar, Code, Brain, Award, ExternalLink, Download, Globe, Briefcase } from 'lucide-react';

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
        skills: 'Kompetenzen',
        timeline: 'Mein Weg'
      },
      hero: {
        title: 'Ali Shariati Najafabadi',
        subtitle: 'Informatikstudent an der TU Darmstadt mit Erfahrung in Softwareentwicklung, Machine Learning und Testautomatisierung.',
        tagline: 'Teamfähig • Analytisch • Praxisorientiert',
        contact: 'Kontakt',
        cv: 'Lebenslauf'
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
        position: 'Werkstudent Softwareentwicklung & Testautomatisierung',
        company: 'Fraport AG, Frankfurt am Main',
        period: 'Aug 2023 - Aktuell',
        tasks: [
          'Entwicklung und Qualitätssicherung des mobilen Informationssystems zur Flugzeugabfertigung',
          'Implementierung von 60+ End-to-End-Tests mit TestComplete und JavaScript (Gherkin), Reduktion manueller Testzeit um 60%',
          'Entwicklung von 70+ automatisierten API-Tests mit ReadyAPI, Integration in CI/CD-Pipeline zur Validierung von Kafka-Nachrichten',
          'Dokumentation und Analyse von Fehlern in JIRA, Verwaltung von Aufgaben in Azure DevOps',
          'Optimierung der CI/CD-Pipeline im agilen Team, regelmäßige Teilnahme an Sprint-Reviews'
        ]
      },
      education: {
        title: 'Ausbildung',
        degree: 'B.Sc. Informatik',
        university: 'Technische Universität Darmstadt',
        period: 'Okt 2021 - Aktuell',
        thesis: 'Bachelor-Thesis (Abschluss: März 2026): "Detection of Multimodal Deepfakes" beim Fraunhofer SIT',
        master: 'Geplant: Master Informatik, TU Darmstadt (ab April 2026)'
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
      timeline: {
        title: 'Mein Weg',
        subtitle: 'Eine interaktive Reise durch meine akademische und berufliche Laufbahn',
        events: [
          {
            year: '2021',
            month: 'Okt',
            title: 'Studienstart: Informatik B.Sc.',
            organization: 'TU Darmstadt',
            description: 'Beginn des Informatikstudiums an der Technischen Universität Darmstadt',
            type: 'education',
            icon: 'Award'
          },
          {
            year: '2022',
            month: 'Apr',
            title: 'Erste Programmierprojekte',
            organization: 'TU Darmstadt',
            description: 'Vertiefung in objektorientierter Programmierung und Algorithmen',
            type: 'education',
            icon: 'Code'
          },
          {
            year: '2023',
            month: 'Aug',
            title: 'Start als Werkstudent',
            organization: 'Fraport AG',
            description: 'Beginn der Werkstudententätigkeit in Softwareentwicklung & Testautomatisierung',
            type: 'work',
            icon: 'Briefcase'
          },
          {
            year: '2024',
            month: 'Feb',
            title: 'Context-Aware Captions Projekt',
            organization: 'System Security Lab, TU Darmstadt',
            description: 'Training eines BLIP-2-Modells zur kontextbewussten Bildbeschreibung',
            type: 'project',
            icon: 'Brain'
          },
          {
            year: '2024',
            month: 'Jun',
            title: 'LoRaWAN Security Tool',
            organization: 'SEEMOO, TU Darmstadt',
            description: 'Entwicklung einer Full-Stack-Webanwendung zur Analyse von Sicherheitslücken',
            type: 'project',
            icon: 'Code'
          },
          {
            year: '2024',
            month: 'Sep',
            title: 'Real-Time Deepfake Pipeline',
            organization: 'System Security Lab, TU Darmstadt',
            description: 'Entwicklung einer Echtzeit-Pipeline zur Stimm- und Gesichtsumwandlung',
            type: 'project',
            icon: 'Brain'
          },
          {
            year: '2025',
            month: 'Jan',
            title: 'Bachelor-Thesis',
            organization: 'Fraunhofer SIT',
            description: 'Start der Bachelor-Arbeit: "Detection of Multimodal Deepfakes"',
            type: 'education',
            icon: 'Award'
          },
          {
            year: '2026',
            month: 'Mär',
            title: 'Bachelor-Abschluss',
            organization: 'TU Darmstadt',
            description: 'Geplanter Abschluss des B.Sc. Informatik',
            type: 'education',
            icon: 'Award'
          },
          {
            year: '2026',
            month: 'Apr',
            title: 'Master-Start',
            organization: 'TU Darmstadt',
            description: 'Geplanter Beginn des Master-Studiums Informatik',
            type: 'education',
            icon: 'Award'
          }
        ]
      },
      footer: {
        rights: '© 2025 Ali Shariati Najafabadi. Alle Rechte vorbehalten.'
      }
    },
    en: {
      sections: {
        about: 'About Me',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        skills: 'Skills',
        timeline: 'My Journey'
      },
      hero: {
        title: 'Ali Shariati Najafabadi',
        subtitle: 'Computer Science student at TU Darmstadt with experience in software development, machine learning, and test automation.',
        tagline: 'Team Player • Analytical • Practical',
        contact: 'Contact',
        cv: 'Resume'
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
        position: 'Working Student Software Development & Test Automation',
        company: 'Fraport AG, Frankfurt am Main',
        period: 'Aug 2023 - Present',
        tasks: [
          'Development and quality assurance of mobile information system for aircraft handling',
          'Implementation of 60+ end-to-end tests with TestComplete and JavaScript (Gherkin), reducing manual testing time by 60%',
          'Development of 70+ automated API tests with ReadyAPI, integration into CI/CD pipeline for Kafka message validation',
          'Documentation and analysis of errors in JIRA, task management in Azure DevOps',
          'Optimization of CI/CD pipeline in agile team, regular participation in sprint reviews'
        ]
      },
      education: {
        title: 'Education',
        degree: 'B.Sc. Computer Science',
        university: 'Technical University of Darmstadt',
        period: 'Oct 2021 - Present',
        thesis: 'Bachelor Thesis (Completion: March 2026): "Detection of Multimodal Deepfakes" at Fraunhofer SIT',
        master: 'Planned: Master Computer Science, TU Darmstadt (from April 2026)'
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
      timeline: {
        title: 'My Journey',
        subtitle: 'An interactive journey through my academic and professional career',
        events: [
          {
            year: '2021',
            month: 'Oct',
            title: 'Started B.Sc. Computer Science',
            organization: 'TU Darmstadt',
            description: 'Began Computer Science studies at Technical University of Darmstadt',
            type: 'education',
            icon: 'Award'
          },
          {
            year: '2022',
            month: 'Apr',
            title: 'First Programming Projects',
            organization: 'TU Darmstadt',
            description: 'Deep dive into object-oriented programming and algorithms',
            type: 'education',
            icon: 'Code'
          },
          {
            year: '2023',
            month: 'Aug',
            title: 'Started Working Student Position',
            organization: 'Fraport AG',
            description: 'Began working student position in software development & test automation',
            type: 'work',
            icon: 'Briefcase'
          },
          {
            year: '2024',
            month: 'Feb',
            title: 'Context-Aware Captions Project',
            organization: 'System Security Lab, TU Darmstadt',
            description: 'Training BLIP-2 model for context-aware image captioning',
            type: 'project',
            icon: 'Brain'
          },
          {
            year: '2024',
            month: 'Jun',
            title: 'LoRaWAN Security Tool',
            organization: 'SEEMOO, TU Darmstadt',
            description: 'Development of full-stack web application for security vulnerability analysis',
            type: 'project',
            icon: 'Code'
          },
          {
            year: '2024',
            month: 'Sep',
            title: 'Real-Time Deepfake Pipeline',
            organization: 'System Security Lab, TU Darmstadt',
            description: 'Development of real-time pipeline for voice and face conversion',
            type: 'project',
            icon: 'Brain'
          },
          {
            year: '2025',
            month: 'Jan',
            title: 'Bachelor Thesis',
            organization: 'Fraunhofer SIT',
            description: 'Started Bachelor thesis: "Detection of Multimodal Deepfakes"',
            type: 'education',
            icon: 'Award'
          },
          {
            year: '2026',
            month: 'Mar',
            title: 'Bachelor Graduation',
            organization: 'TU Darmstadt',
            description: 'Planned completion of B.Sc. Computer Science',
            type: 'education',
            icon: 'Award'
          },
          {
            year: '2026',
            month: 'Apr',
            title: 'Master\'s Program Start',
            organization: 'TU Darmstadt',
            description: 'Planned start of Master\'s program in Computer Science',
            type: 'education',
            icon: 'Award'
          }
        ]
      },
      footer: {
        rights: '© 2025 Ali Shariati Najafabadi. All rights reserved.'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black flex flex-col">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-fuchsia-500/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ali Shariati
            </h1>
            <div className="flex items-center gap-6">
              {/* Sprach-Umschalter */}
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 hover:border-cyan-500/50"
              >
                <Globe size={16} />
                {language === 'de' ? 'EN' : 'DE'}
              </button>
              
              <div className="hidden md:flex gap-6">
                {Object.entries(t.sections).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`text-sm font-medium transition-all duration-300 ${
                      activeSection === key
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Foto Bereich */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full blur-lg opacity-90 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900">
                <img 
                  src="https://i.imgur.com/F0IviBD.jpeg" 
                  alt="Ali Shariati Najafabadi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-white bg-gradient-to-br from-blue-600 to-purple-600">AS</div>';
                  }}
                />
              </div>
            </div>

            {/* Text Bereich */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {t.hero.title}
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-6 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8">
                {t.hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:alishariaty0854@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50">
                  <Mail size={20} />
                  {t.hero.contact}
                </a>
                <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black border-2 border-cyan-500/50 hover:border-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://drive.google.com/file/d/1akL79j8rGwaduOdEle3y33AehPmTY1cb/view?usp=sharing" download className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-fuchsia-500/50">
                  <Download size={20} />
                  {t.hero.cv}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.about.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-300 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <Mail className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">{t.about.email}</p>
                      <a href="mailto:alishariaty0854@gmail.com" className="hover:text-blue-400 transition-colors">
                        alishariaty0854@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <Phone className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">{t.about.phone}</p>
                      <a href="tel:+4915754703516" className="hover:text-blue-400 transition-colors">
                        +49 157 54703516
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <MapPin className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">{t.about.location}</p>
                      <p>{t.about.locationValue}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white mb-4">{t.about.languages}</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-gray-300 mb-2">
                        <span className="font-medium">{t.about.german}</span>
                        <span className="text-blue-400">{t.about.advanced}</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-4/5 rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-300 mb-2">
                        <span className="font-medium">{t.about.english}</span>
                        <span className="text-blue-400">{t.about.advanced}</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-4/5 rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-300 mb-2">
                        <span className="font-medium">{t.about.persian}</span>
                        <span className="text-purple-400">{t.about.native}</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 w-full rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.experience.title}
              </h3>
              <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
                <div className="mb-8">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 animate-pulse"></div>
                  <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{t.experience.position}</h4>
                        <p className="text-blue-400 font-semibold">{t.experience.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full">{t.experience.period}</span>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      {t.experience.tasks.map((task, index) => (
                        <li key={index} className="flex gap-3 hover:text-white transition-colors">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education Section - */}
          {activeSection === 'education' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.education.title}
              </h3>
              <div className="relative border-l-2 border-purple-500 pl-8 ml-4">
                <div className="mb-8">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0 animate-pulse"></div>
                  <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{t.education.degree}</h4>
                        <p className="text-purple-400 font-semibold">{t.education.university}</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full">{t.education.period}</span>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-purple-400">▸</span>
                        <span>{t.education.thesis}</span>
                      </p>
                      <p className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-purple-400">▸</span>
                        <span>{t.education.master}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section - */}
          {activeSection === 'projects' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.projects.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Projekt 1 */}
                <a 
                  href="https://github.com/Ali-Shariati-Najafabadi/Real-Time-Deepfake-Pipeline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {t.projects.project1.title}
                    </h4>
                    <div className="flex gap-2">
                      <Code className="text-blue-400" size={24} />
                      <ExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                    </div>
                  </div>
                  <p className="text-sm text-blue-400 mb-2 font-semibold">{t.projects.project1.org}</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                    {t.projects.project1.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">Python</span>
                    <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">PyTorch</span>
                    <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">Computer Vision</span>
                  </div>
                </a>

                {/* Projekt 2 */}
                <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50 hover:scale-105 group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {t.projects.project2.title}
                    </h4>
                    <Award className="text-purple-400" size={24} />
                  </div>
                  <p className="text-sm text-purple-400 mb-2 font-semibold">{t.projects.project2.org}</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                    {t.projects.project2.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Python</span>
                    <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">React</span>
                    <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">Security</span>
                  </div>
                </div>

                {/* Projekt 3 */}
                <a 
                  href="https://github.com/Ali-Shariati-Najafabadi/Generate-Context-Aware-Captions-from-Photos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-green-500/50 hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {t.projects.project3.title}
                    </h4>
                    <div className="flex gap-2">
                      <Brain className="text-green-400" size={24} />
                      <ExternalLink className="text-gray-400 group-hover:text-green-400 transition-colors" size={20} />
                    </div>
                  </div>
                  <p className="text-sm text-green-400 mb-2 font-semibold">{t.projects.project3.org}</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                    {t.projects.project3.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Python</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">PyTorch</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">NLP</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">BLIP-2</span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.skills.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Code size={24} />
                    {t.skills.languages}
                  </h4>
                  <div className="space-y-2">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <Award size={24} />
                    {t.skills.frameworks}
                  </h4>
                  <div className="space-y-2">
                    {['React', 'Node.js', 'Vue.js', 'Flask', 'FastAPI', 'TestComplete', 'ReadyAPI', 'Selenium', 'Git', 'Docker', 'Azure DevOps', 'PostgreSQL', 'MongoDB'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                    <Brain size={24} />
                    {t.skills.ml}
                  </h4>
                  <div className="space-y-2">
                    {['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'Computer Vision', 'NLP', 'Deep Learning', 'CNNs', 'Transformers'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-green-500/50">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Section */}
          {activeSection === 'timeline' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.timeline.title}
              </h3>
              <p className="text-gray-300 mb-8 text-lg">{t.timeline.subtitle}</p>

              {/* Timeline Container */}
              <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30 hidden md:block"></div>

                {/* Timeline Events */}
                <div className="space-y-12">
                  {t.timeline.events.map((event, index) => {
                    const isLeft = index % 2 === 0;
                    const IconComponent = event.icon === 'Award' ? Award : event.icon === 'Code' ? Code : event.icon === 'Brain' ? Brain : Briefcase;

                    const typeColors = {
                      education: 'from-blue-500 to-blue-600',
                      work: 'from-purple-500 to-purple-600',
                      project: 'from-green-500 to-green-600'
                    };

                    const borderColors = {
                      education: 'border-blue-500/50',
                      work: 'border-purple-500/50',
                      project: 'border-green-500/50'
                    };

                    const hoverBorderColors = {
                      education: 'hover:border-blue-400',
                      work: 'hover:border-purple-400',
                      project: 'hover:border-green-400'
                    };

                    return (
                      <div key={index} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                        {/* Content Card */}
                        <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          <div className={`bg-slate-700/50 rounded-xl p-6 border ${borderColors[event.type]} ${hoverBorderColors[event.type]} hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 group`}>
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div className={`flex-1 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                  {event.title}
                                </h4>
                                <p className={`text-sm font-semibold mb-2 ${event.type === 'education' ? 'text-blue-400' : event.type === 'work' ? 'text-purple-400' : 'text-green-400'}`}>
                                  {event.organization}
                                </p>
                              </div>
                              <div className={`${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                                <IconComponent className={`${event.type === 'education' ? 'text-blue-400' : event.type === 'work' ? 'text-purple-400' : 'text-green-400'}`} size={28} />
                              </div>
                            </div>
                            <p className="text-gray-300 group-hover:text-white transition-colors">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Center Dot with Year */}
                        <div className="flex md:w-2/12 items-center justify-center relative z-10">
                          <div className="flex flex-col items-center">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${typeColors[event.type]} flex items-center justify-center shadow-lg border-4 border-slate-900 animate-pulse`}>
                              <div className="text-white font-bold text-sm text-center">
                                <div>{event.month}</div>
                                <div className="text-xs">{event.year}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Empty Space for Alternating Layout */}
                        <div className="hidden md:block w-5/12"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              {t.footer.rights}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:alishariaty0854@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
