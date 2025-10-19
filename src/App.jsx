import React, { useState } from 'react';
import { Github, Mail, Phone, MapPin, Calendar, Code, Brain, Award } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: 'Über mich',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    projects: 'Projekte',
    skills: 'Kompetenzen'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">AS</h1>
            <div className="flex gap-6">
              {Object.entries(sections).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === key
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold text-white mb-4">
              Ali Shariati Najafabadi
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Informatikstudent an der TU Darmstadt mit Erfahrung in Softwareentwicklung, 
              Machine Learning und Testautomatisierung. Teamfähig, analytisch und praxisorientiert.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:alishariaty0854@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Mail size={20} />
                Kontakt
              </a>
              <a href="https://github.com/ali-shariaty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Über mich</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-300">
                    <Mail className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">E-Mail</p>
                      <p>alishariaty0854@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <Phone className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">Telefon</p>
                      <p>015754703516</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">Adresse</p>
                      <p>Nieder-Ramstädter Str. 189, 64285 Darmstadt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <Calendar className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">Geburtsdatum</p>
                      <p>20. September 2000</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white mb-4">Sprachkenntnisse</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-gray-300 mb-1">
                        <span>Deutsch</span>
                        <span className="text-blue-400">Fortgeschritten</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-300 mb-1">
                        <span>Englisch</span>
                        <span className="text-blue-400">Fortgeschritten</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-300 mb-1">
                        <span>Persisch</span>
                        <span className="text-blue-400">Muttersprache</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Berufserfahrung</h3>
              <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
                <div className="mb-8">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">Werkstudent Softwareentwicklung & Testautomatisierung</h4>
                        <p className="text-blue-400 font-semibold">Fraport AG, Frankfurt am Main</p>
                      </div>
                      <span className="text-gray-400 text-sm">Aug 2023 - Aug 2026</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Unterstützung bei der Entwicklung und Qualitätssicherung des mobilen Informationssystems zur Flugzeugabfertigung</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Entwicklung automatisierter End-to-End-Tests mit TestComplete und JavaScript (Gherkin)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Erstellung von API-Tests mit ReadyAPI und Validierung von Kafka-Nachrichten zur Backend-Integration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Dokumentation und Analyse von Fehlern in JIRA, Verwaltung von Aufgaben in Azure DevOps</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Mitarbeit an der Verbesserung von CI/CD-Prozessen und der Testumgebung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Ausbildung</h3>
              <div className="relative border-l-2 border-purple-500 pl-8 ml-4">
                <div className="mb-8">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-slate-700/50 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">B.Sc. Informatik</h4>
                        <p className="text-purple-400 font-semibold">Technische Universität Darmstadt</p>
                      </div>
                      <span className="text-gray-400 text-sm">Okt 2021 - Aktuell</span>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex gap-2">
                        <span className="text-purple-400">•</span>
                        <span>Bachelorarbeit beim Fraunhofer SIT: "Detection von multimodalen Deepfakes"</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-purple-400">•</span>
                        <span>Geplanter Beginn des Masterstudiums Informatik: Wintersemester 2026</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="text-purple-400">•</span>
                        <span>Erreichte Credits: 110 CP (Stand: Oktober 2025)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Projekte</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">Real-Time Deepfake Pipeline</h4>
                    <Code className="text-blue-400" size={24} />
                  </div>
                  <p className="text-gray-300 mb-4">
                    System Security Lab TU Darmstadt - Entwicklung einer Echtzeit-Pipeline zur Stimm- und Gesichtsumwandlung für Videoanwendungen mit Diff-HierVC, InsightFace und GFPGAN.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
                    <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">Tool Support for Sustainable Protocol Security</h4>
                    <Award className="text-purple-400" size={24} />
                  </div>
                  <p className="text-gray-300 mb-4">
                    SEEMOO, TU Darmstadt - Entwicklung von Python-basierten Tools zur Analyse und Visualisierung von Sicherheitslücken in LoRaWAN. CLI-Integration und modernes Frontend.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">Security</span>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">Context-Aware Captions from Photos</h4>
                    <Brain className="text-green-400" size={24} />
                  </div>
                  <p className="text-gray-300 mb-4">
                    System Security Lab - Entwicklung eines Modells zur kontextbewussten Bildbeschreibung mit BLIP-2 und GoodNews-Datensatz. Kombination von visuellen und textuellen Informationen.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">NLP</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">Transformers</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Technische Kompetenzen</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Programmiersprachen</h4>
                  <div className="space-y-2">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'Bluespec'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-2 rounded-lg text-gray-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Frameworks & Tools</h4>
                  <div className="space-y-2">
                    {['React', 'Node.js', 'Vue.js', 'Flask', 'FastAPI', 'PyTorch', 'Hugging Face', 'TestComplete', 'ReadyAPI', 'Git', 'Docker', 'Azure DevOps'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-2 rounded-lg text-gray-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Machine Learning & AI</h4>
                  <div className="space-y-2">
                    {['Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Model Fine-Tuning', 'Transformer-Models', 'CNNs'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-2 rounded-lg text-gray-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Ali Shariati Najafabadi. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}