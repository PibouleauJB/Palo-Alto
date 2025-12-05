import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Users, BookOpen, Trophy, ChevronRight, Zap, Lock, Cloud, CheckCircle, ArrowRight, Award, BarChart2, Target } from 'lucide-react';

export default function NIRDVillage() {
  const [currentSection, setCurrentSection] = useState('home');
  const [score, setScore] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [visitedSections, setVisitedSections] = useState(['home']);

  useEffect(() => {
    if (!visitedSections.includes(currentSection)) {
      setVisitedSections([...visitedSections, currentSection]);
    }
  }, [currentSection]);

  useEffect(() => {
    if (visitedSections.length === sections.length) {
      unlockBadge('explorer');
    }
  }, [visitedSections]);

  const badges = [
    { id: 'explorer', name: 'Explorateur', icon: '🗺️', condition: 'Visiter toutes les sections' },
    { id: 'warrior', name: 'Guerrier du Libre', icon: '⚔️', condition: 'Réussir le quiz' },
    { id: 'builder', name: 'Bâtisseur', icon: '🏗️', condition: 'Découvrir les solutions' },
  ];

  const sections = [
    { id: 'home', title: 'Bienvenue', icon: Shield, color: 'blue' },
    { id: 'problem', title: "L'Empire", icon: Lock, color: 'red' },
    { id: 'solution', title: 'Les Solutions', icon: Zap, color: 'green' },
    { id: 'action', title: "À l'Action", icon: Users, color: 'purple' },
    { id: 'quiz', title: 'Le Défi', icon: Trophy, color: 'yellow' },
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Quel est le principal problème de la fin de support de Windows 10 ?",
      options: [
        "Les ordinateurs explosent",
        "Des milliers d'ordinateurs fonctionnels deviennent obsolètes",
        "Windows devient gratuit"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Que signifie NIRD ?",
      options: [
        "Numérique Inclusif, Responsable et Durable",
        "Nouveau Internet Rapide et Digital",
        "Nécessité d'Installer des Routeurs Différents"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "Quelle solution permet de prolonger la vie du matériel informatique ?",
      options: [
        "Acheter du matériel neuf chaque année",
        "Installer Linux sur les anciennes machines",
        "Jeter et racheter"
      ],
      correct: 1
    }
  ];

  const unlockBadge = (badgeId) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges([...unlockedBadges, badgeId]);
      setScore(score + 10);
    }
  };

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers({...quizAnswers, [questionId]: answerIndex});
  };

  const checkQuiz = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) correct++;
    });
    if (correct === quizQuestions.length) {
      unlockBadge('warrior');
      alert(`🎉 Parfait ! ${correct}/${quizQuestions.length} bonnes réponses !`);
    } else {
      alert(`Vous avez ${correct}/${quizQuestions.length} bonnes réponses. Réessayez !`);
    }
  };

  const renderHome = () => (
    <div className="space-y-8">
      <div className="text-center pt-8 pb-12 bg-white rounded-xl shadow-inner-lg">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
          <Shield className="text-blue-600" size={48} />
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 mb-3">Le Village Numérique Résistant</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">David contre Goliath, Astérix contre l&apos;Empire numérique. Reprenez le contrôle.</p>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg flex items-center gap-4">
        <Target size={32} className="flex-shrink-0" />
        <div>
          <p className="text-lg font-semibold">🎯 Votre mission :</p>
          <p>Découvrir comment les établissements scolaires peuvent reprendre leur autonomie face aux Big Tech !</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6 border-t-4 border-red-500">
          <div className="flex items-center gap-4 mb-4">
            <Lock className="text-red-500" size={32} />
            <h3 className="text-2xl font-bold text-slate-800">Le Problème</h3>
          </div>
          <p className="text-slate-600 mb-6">Windows 10 en fin de vie, c&apos;est des milliers d&apos;ordinateurs fonctionnels qui deviennent obsolètes. Coûts de licence, données hors UE, écosystèmes fermés...</p>
          <button
            onClick={() => setCurrentSection('problem')}
            className="font-semibold text-red-600 hover:text-red-700 transition-colors flex items-center gap-2"
          >
            Analyser la menace <ArrowRight size={16} />
          </button>
        </div>

        <div className="card p-6 border-t-4 border-green-500">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="text-green-500" size={32} />
            <h3 className="text-2xl font-bold text-slate-800">La Solution</h3>
          </div>
          <p className="text-slate-600 mb-6">La démarche NIRD : un Numérique Inclusif, Responsable et Durable. Linux, logiciels libres, réemploi, autonomie...</p>
          <button
            onClick={() => { setCurrentSection('solution'); unlockBadge('builder'); }}
            className="font-semibold text-green-600 hover:text-green-700 transition-colors flex items-center gap-2"
          >
            Découvrir les alternatives <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Rejoignez le Village Résistant !</h2>
        <p className="mb-6 max-w-2xl mx-auto">Élèves, enseignants, familles, collectivités : ensemble, construisons un numérique plus libre, éthique et durable.</p>
        <button
          onClick={() => setCurrentSection('action')}
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transform hover:scale-105 transition-transform"
        >
          Passer à l&apos;action ! 🚀
        </button>
      </div>
    </div>
  );

  const renderProblem = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
          <Lock className="text-red-600" size={40} />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-800 mb-2">L&apos;Empire Numérique : Goliath</h2>
        <p className="text-lg text-slate-600">Comprendre les enjeux de la dépendance technologique</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <Cpu className="text-red-500 mb-4" size={32} />
          <h3 className="font-bold text-xl mb-2 text-slate-800">Obsolescence Programmée</h3>
          <p className="text-slate-600">Matériel rendu obsolète alors qu&apos;il fonctionne. Fin de Windows 10 = milliers d&apos;ordinateurs à la poubelle.</p>
        </div>

        <div className="card p-6">
          <Cloud className="text-red-500 mb-4" size={32} />
          <h3 className="font-bold text-xl mb-2 text-slate-800">Données Hors UE</h3>
          <p className="text-slate-600">Stockage des données scolaires sur des serveurs étrangers, sans contrôle ni souveraineté (Cloud Act).</p>
        </div>

        <div className="card p-6">
          <div className="text-red-500 mb-4 text-3xl font-bold">€</div>
          <h3 className="font-bold text-xl mb-2 text-slate-800">Écosystèmes Fermés</h3>
          <p className="text-slate-600">Dépendance totale : licences coûteuses, abonnements obligatoires, impossibilité de choisir.</p>
        </div>
      </div>

      <div className="card p-6 bg-slate-800 text-white">
        <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
          <BarChart2 className="text-yellow-400" /> Les Chiffres qui Font Peur
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-3">
            <ArrowRight size={18} className="text-red-400 mt-1 flex-shrink-0" />
            <span><span className="font-bold text-white">Des milliers d&apos;ordinateurs</span> fonctionnels potentiellement jetés avec la fin de Windows 10.</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight size={18} className="text-red-400 mt-1 flex-shrink-0" />
            <span>Le budget de l&apos;éducation numérique en partie <span className="font-bold text-white">capté par les licences</span> propriétaires.</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight size={18} className="text-red-400 mt-1 flex-shrink-0" />
            <span><span className="font-bold text-white">Impact écologique majeur</span> du renouvelement forcé du matériel.</span>
          </li>
        </ul>
      </div>

      <div className="text-center pt-6">
        <p className="text-lg mb-4 text-slate-700">💪 Mais le village résiste et contre-attaque !</p>
        <button
          onClick={() => setCurrentSection('solution')}
          className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 font-bold text-lg transition-colors"
        >
          Découvrir les solutions <ArrowRight className="inline-block ml-2" size={20} />
        </button>
      </div>
    </div>
  );

  const renderSolution = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
          <Zap className="text-green-600" size={40} />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-800 mb-2">Les Armes du Village NIRD</h2>
        <p className="text-lg text-slate-600">Solutions concrètes pour l&apos;autonomie numérique</p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        <div className="card lg:flex items-center gap-8 p-8">
          <div className="text-6xl mb-4 lg:mb-0">🐧</div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Linux : La Potion Magique</h3>
            <p className="text-slate-600 mb-4">Un système d&apos;exploitation libre et gratuit qui redonne vie aux anciennes machines. Plus besoin de Windows !</p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Fonctionne sur du matériel ancien</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Gratuit et sans licence</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Sécurisé et respectueux de la vie privée</li>
            </ul>
          </div>
        </div>

        <div className="card p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">🔓</div>
            <h3 className="text-2xl font-bold text-slate-800">Logiciels Libres</h3>
          </div>
          <p className="text-slate-600 mb-6">LibreOffice, Firefox, GIMP... Des alternatives gratuites et performantes aux logiciels propriétaires pour tous les usages.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-center">
            <div className="bg-slate-100 p-3 rounded-lg"><span className="font-semibold">📝 LibreOffice</span> → MS Office</div>
            <div className="bg-slate-100 p-3 rounded-lg"><span className="font-semibold">🎨 GIMP</span> → Photoshop</div>
            <div className="bg-slate-100 p-3 rounded-lg"><span className="font-semibold">🌐 Firefox</span> → Chrome</div>
            <div className="bg-slate-100 p-3 rounded-lg"><span className="font-semibold">🎬 Kdenlive</span> → Premiere Pro</div>
          </div>
        </div>

        <div className="card p-8 bg-purple-50 border-l-4 border-purple-500">
          <div className="flex items-start gap-6">
            <div className="text-5xl">♻️</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">Réemploi & Reconditionnement</h3>
              <p className="text-purple-800 mb-4">Donner une seconde vie au matériel informatique : écologique, économique, et un superbe projet pédagogique !</p>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <p className="font-semibold text-slate-800 mb-2">🎓 Projet pédagogique :</p>
                <p className="text-sm text-slate-600">Les élèves apprennent à reconditionner des ordinateurs, installer Linux, et découvrent les métiers du numérique responsable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl shadow-lg text-center">
        <h3 className="text-3xl font-bold mb-4">🏆 Les 3 Piliers NIRD</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          <div className="bg-white/20 p-6 rounded-lg">
            <div className="text-4xl mb-2">🤝</div>
            <div className="font-bold text-lg">INCLUSIF</div>
            <div className="text-sm opacity-80">Accessible à tous</div>
          </div>
          <div className="bg-white/20 p-6 rounded-lg">
            <div className="text-4xl mb-2">⚖️</div>
            <div className="font-bold text-lg">RESPONSABLE</div>
            <div className="text-sm opacity-80">Éthique & souverain</div>
          </div>
          <div className="bg-white/20 p-6 rounded-lg">
            <div className="text-4xl mb-2">🌱</div>
            <div className="font-bold text-lg">DURABLE</div>
            <div className="text-sm opacity-80">Écologique & pérenne</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAction = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
          <Users className="text-purple-600" size={40} />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-800 mb-2">Rejoignez la Résistance !</h2>
        <p className="text-lg text-slate-600">Comment votre établissement peut passer à l&apos;action, pas à pas.</p>
      </div>

      <div className="card bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8">
        <h3 className="text-3xl font-bold mb-6">📍 Parcours Progressif vers l&apos;Autonomie</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full text-xl font-bold">1</div>
            <div>
              <div className="font-bold text-xl">Sensibilisation</div>
              <div className="opacity-90">Comprendre les enjeux, partager l&apos;information avec les équipes pédagogiques et la direction.</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full text-xl font-bold">2</div>
            <div>
              <div className="font-bold text-xl">Expérimentation</div>
              <div className="opacity-90">Installer Linux sur quelques machines, tester des logiciels libres sur des cas d'usage concrets.</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full text-xl font-bold">3</div>
            <div>
              <div className="font-bold text-xl">Déploiement</div>
              <div className="opacity-90">Étendre la démarche, impliquer les élèves dans des projets, partager l&apos;expérience avec d&apos;autres.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
            <Users className="text-blue-600" />
            Pour les Enseignants
          </h3>
          <ul className="space-y-2 text-slate-600 list-disc list-inside">
            <li>Rejoignez la communauté NIRD sur la Forge</li>
            <li>Montez un projet de reconditionnement avec vos élèves</li>
            <li>Partagez vos ressources et cours sous licence libre</li>
            <li>Formez-vous aux outils libres (tutoriels, webinaires)</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
            <BookOpen className="text-green-600" />
            Pour les Élèves
          </h3>
          <ul className="space-y-2 text-slate-600 list-disc list-inside">
            <li>Devenez éco-délégué du numérique dans votre classe</li>
            <li>Participez aux ateliers de reconditionnement</li>
            <li>Découvrez Linux et les logiciels libres (programmation, graphisme)</li>
            <li>Sensibilisez vos camarades et vos parents</li>
          </ul>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-bold text-2xl mb-4 text-center text-slate-800">🔗 Ressources Officielles</h3>
        <div className="space-y-4">
          <a href="https://nird.forge.apps.education.fr/" target="_blank" rel="noopener noreferrer"
             className="block bg-slate-100 p-4 rounded-lg hover:bg-blue-100 hover:border-blue-500 border-2 border-transparent transition-colors">
            <div className="font-bold text-blue-600">🌐 Site officiel NIRD</div>
            <div className="text-sm text-slate-600">Documentation, guides, et accès à la communauté.</div>
          </a>
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="font-bold text-slate-800 mb-2">📺 Vidéos & Reportages</div>
            <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
              <li>Reportage France 3 : Windows 11 et logiciels libres</li>
              <li>France Inter : Obsolescence programmée et solutions</li>
              <li>Lycée Carnot : &quot;Linux, c&apos;est facile !&quot;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
          <Trophy className="text-yellow-600" size={40} />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-800 mb-2">Le Défi du Résistant</h2>
        <p className="text-lg text-slate-600">Testez vos connaissances sur la démarche NIRD !</p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {quizQuestions.map((q, idx) => (
          <div key={q.id} className="card p-6">
            <p className="font-semibold text-slate-800 mb-4">Question {idx + 1} : {q.question}</p>
            <div className="space-y-3">
              {q.options.map((option, optIdx) => (
                <label key={optIdx} className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer border-2 transition-all ${
                  quizAnswers[q.id] === optIdx
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    checked={quizAnswers[q.id] === optIdx}
                    onChange={() => handleQuizAnswer(q.id, optIdx)}
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={checkQuiz}
          disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
          className="bg-yellow-500 text-white px-10 py-4 rounded-full hover:bg-yellow-600 disabled:bg-slate-400 disabled:cursor-not-allowed font-bold text-xl transform hover:scale-105 transition-transform"
        >
          Valider mes réponses 🎯
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="text-blue-600" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Village NIRD</h1>
                <p className="text-xs text-slate-500">Numérique Inclusif, Responsable, Durable</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm font-medium text-slate-500">Score</div>
                <div className="text-2xl font-bold text-purple-600">{score} pts</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-lg">
                {badges.map(badge => (
                  <div key={badge.id}
                       className={`text-3xl transition-opacity duration-500 ${unlockedBadges.includes(badge.id) ? 'opacity-100 scale-110' : 'opacity-20'}`}
                       title={`${badge.name}: ${badge.condition}`}>
                    {badge.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 overflow-x-auto py-3">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = currentSection === section.id;
              const colors = {
                blue: 'bg-blue-600 text-white',
                red: 'bg-red-600 text-white',
                green: 'bg-green-600 text-white',
                purple: 'bg-purple-600 text-white',
                yellow: 'bg-yellow-500 text-white',
              };
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 text-sm font-semibold ${
                    isActive 
                      ? colors[section.color]
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon size={16} />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentSection === 'home' && renderHome()}
        {currentSection === 'problem' && renderProblem()}
        {currentSection === 'solution' && renderSolution()}
        {currentSection === 'action' && renderAction()}
        {currentSection === 'quiz' && renderQuiz()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️⚔️🐧</div>
            <p className="text-2xl font-bold mb-2">Rejoignez le Village Numérique Résistant !</p>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Un projet porté par le collectif enseignant NIRD et la Forge des communs numériques éducatifs pour un numérique plus juste.
            </p>
            <a href="https://nird.forge.apps.education.fr/" target="_blank" rel="noopener noreferrer"
               className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors">
              Visiter le site officiel NIRD <ArrowRight className="inline-block ml-2" size={16} />
            </a>
          </div>
          <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
            <p>Nuit de l&apos;Info 2025 - Développé avec des outils Libres</p>
            <p>Le code source de ce projet est disponible sous licence MIT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
