import React, { useState } from 'react';
import { Github, Mail, Phone, MapPin, Calendar, Code, Brain, Award, ExternalLink, Download } from 'lucide-react';

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
            <div className="hidden md:flex gap-6">
              {Object.entries(sections).map(([key, label]) => (
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
        </nav>
        
        <div className="relative container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Foto Bereich */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full blur-lg opacity-90 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900">
                {}
                <img 
                  src="https://i.imgur.com/F0IviBD.jpeg" 
                  alt="Ali Shariati Najafabadi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback wenn kein Foto vorhanden
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-white bg-gradient-to-br from-blue-600 to-purple-600">AS</div>';
                  }}
                />
              </div>
            </div>

            {/* Text Bereich */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                Ali Shariati Najafabadi
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 mb-6 leading-relaxed">
                Informatikstudent an der TU Darmstadt mit Erfahrung in Softwareentwicklung, 
                Machine Learning und Testautomatisierung.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Teamfähig • Analytisch • Praxisorientiert
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:alishariaty0854@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50">
                  <Mail size={20} />
                  Kontakt
                </a>
                <a href="https://github.com/Ali-Shariati-Najafabadi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black border-2 border-cyan-500/50 hover:border-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="/lebenslauf.pdf" download className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:from-fuchsia-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-fuchsia-500/50">
                  <Download size={20} />
                  CV
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
                Über mich
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-300 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <Mail className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">E-Mail</p>
                      <a href="mailto:alishariaty0854@gmail.com" className="hover:text-blue-400 transition-colors">
                        alishariaty0854@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <Phone className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">Telefon</p>
                      <a href="tel:+4915754703516" className="hover:text-blue-400 transition-colors">
                        015754703516
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <MapPin className="mt-1 text-blue-400" size={20} />
                    <div>
                      <p className="font-semibold text-white">Standort</p>
                      <p>Darmstadt, Deutschland</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white mb-4">Sprachkenntnisse</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-gray-300 mb-2">
                        <span className="font-medium">Deutsch</span>
                        <span className="text-blue-400">Fortgeschritten</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-4/5 rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-300 mb-2">
                        <span className="font-medium">Englisch</span>
                        <span className="text-blue-400">Fortgeschritten</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 w-4/5 rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-300 mb-2">
                        <span className="font-medium">Persisch</span>
                        <span className="text-purple-400">Muttersprache</span>
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
                Berufserfahrung
              </h3>
              <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
                <div className="mb-8">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 animate-pulse"></div>
                  <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Werkstudent Softwareentwicklung & Testautomatisierung</h4>
                        <p className="text-blue-400 font-semibold">Fraport AG, Frankfurt am Main</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full">Aug 2023 - Aktuell</span>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Unterstützung bei der Entwicklung und Qualitätssicherung des mobilen Informationssystems zur Flugzeugabfertigung</span>
                      </li>
                      <li className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Entwicklung automatisierter End-to-End-Tests mit TestComplete und JavaScript (Gherkin)</span>
                      </li>
                      <li className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Erstellung von API-Tests mit ReadyAPI und Validierung von Kafka-Nachrichten zur Backend-Integration</span>
                      </li>
                      <li className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>Dokumentation und Analyse von Fehlern in JIRA, Verwaltung von Aufgaben in Azure DevOps</span>
                      </li>
                      <li className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-blue-400 mt-1">▸</span>
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
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ausbildung
              </h3>
              <div className="relative border-l-2 border-purple-500 pl-8 ml-4">
                <div className="mb-8">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-0 animate-pulse"></div>
                  <div className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">B.Sc. Informatik</h4>
                        <p className="text-purple-400 font-semibold">Technische Universität Darmstadt</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full">Okt 2021 - Aktuell</span>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex gap-3 hover:text-white transition-colors">
                        <span className="text-purple-400">▸</span>
                        <span>Bachelorarbeit beim Fraunhofer SIT: "Detection von multimodalen Deepfakes"</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projekte
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
                      Real-Time Deepfake Pipeline
                    </h4>
                    <div className="flex gap-2">
                      <Code className="text-blue-400" size={24} />
                      <ExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                    </div>
                  </div>
                  <p className="text-sm text-blue-400 mb-2 font-semibold">System Security Lab, TU Darmstadt</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                    Entwicklung einer Echtzeit-Pipeline zur Stimm- und Gesichtsumwandlung für Videoanwendungen mit Diff-HierVC, InsightFace und GFPGAN.
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
                      Tool Support for Sustainable Protocol Security
                    </h4>
                    <Award className="text-purple-400" size={24} />
                  </div>
                  <p className="text-sm text-purple-400 mb-2 font-semibold">SEEMOO, TU Darmstadt</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                    Entwicklung von Python-basierten Tools zur Analyse und Visualisierung von Sicherheitslücken in LoRaWAN. CLI-Integration und modernes Frontend.
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
                      Context-Aware Captions from Photos
                    </h4>
                    <div className="flex gap-2">
                      <Brain className="text-green-400" size={24} />
                      <ExternalLink className="text-gray-400 group-hover:text-green-400 transition-colors" size={20} />
                    </div>
                  </div>
                  <p className="text-sm text-green-400 mb-2 font-semibold">System Security Lab, TU Darmstadt</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                    Entwicklung eines Modells zur kontextbewussten Bildbeschreibung mit BLIP-2 und GoodNews-Datensatz. Kombination von visuellen und textuellen Informationen.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Python</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">PyTorch</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">NLP</span>
                    <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Transformers</span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50 animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technische Kompetenzen
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Code size={24} />
                    Programmiersprachen
                  </h4>
                  <div className="space-y-2">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <Award size={24} />
                    Frameworks & Tools
                  </h4>
                  <div className="space-y-2">
                    {['React', 'Node.js', 'Vue.js', 'Flask', 'FastAPI', 'PyTorch', 'Hugging Face', 'TestComplete', 'ReadyAPI', 'Git', 'Docker', 'Azure DevOps'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                    <Brain size={24} />
                    Machine Learning & AI
                  </h4>
                  <div className="space-y-2">
                    {['Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Model Fine-Tuning', 'Transformer-Models', 'CNNs'].map(skill => (
                      <div key={skill} className="bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-green-500/50">
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
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 Ali Shariati Najafabadi. Alle Rechte vorbehalten.
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
