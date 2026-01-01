import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  features?: string[];
  techStack?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'YAGYA – Autonomous Safety & Defense System',
    description:
      'YAGYA is an advanced autonomous ground-based system designed to reduce human involvement in high-risk environments such as defense zones, disaster response areas, and hazardous industrial sites.',
    tags: ['AI', 'Defense', 'Autonomous Systems'],
    images: ['/images/yagya.jpeg', '/images/yagya2.jpeg'],
    features: [
      'Autonomous navigation in hazardous environments',
      'Real-time obstacle detection and avoidance',
      'AI-driven decision-making system',
      'Live monitoring and remote operation',
      'Modular design for defense & rescue missions',
    ],
    techStack: [
      'ESP32 / Embedded Controller',
      'Python',
      'Computer Vision (OpenCV)',
      'Machine Learning',
      'Ultrasonic & IR Sensors',
      'BTS7960 / L298N Motor Drivers',
      'Web-based Control Dashboard',
      'Wi-Fi Communication',
    ],
  },
];

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const filtered =
    selectedTag === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <h1 className="text-5xl font-bold mb-4">Our Research Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Flagship autonomous and robotics innovations
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 animate-fade-up">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedTag === tag
                  ? 'bg-gray-900 text-white dark:bg-gray-700'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards - Centered when single project */}
        <div className="flex justify-center">
          <div className={`grid gap-10 ${filtered.length === 1 ? 'grid-cols-1 max-w-xl' : 'grid-cols-1 md:grid-cols-2 max-w-5xl'}`}>
            {filtered.map(p => (
              <div
                key={p.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                {/* Image */}
                <div className="h-72 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
                  {p.images[0] ? (
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-400">Image Coming Soon</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col gap-5">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      🚀 Autonomous Research Project
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-4">
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Designed for real-world deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Research & defense focused architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Modular and scalable system</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-semibold shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(p)}
                    className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    View Details <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              {selectedProject.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {selectedProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-48 object-contain bg-gray-100 dark:bg-gray-800 rounded-xl"
                    />
                  ))}
                </div>
              )}

              <p className="mb-6 text-gray-600 dark:text-gray-300">
                {selectedProject.description}
              </p>

              {selectedProject.features && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.techStack && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}