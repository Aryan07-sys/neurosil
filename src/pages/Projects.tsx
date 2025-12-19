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
      'YAGYA is an advanced autonomous ground-based system developed to reduce human involvement in high-risk and life-threatening environments such as defense operations, disaster response zones, and hazardous industrial areas.',
    tags: ['AI', 'Defense', 'Autonomous Systems'],
    images: ['/images/yagya.jpeg', '/images/yagya2.jpeg'],
    features: [
      'Autonomous navigation in hazardous environments',
      'Real-time obstacle detection and avoidance',
      'AI-based decision making system',
      'Live monitoring and remote control',
      'Modular design for defense and rescue missions',
    ],
    techStack: [
      'ESP32 / Embedded Controller',
      'Python',
      'Computer Vision (OpenCV)',
      'Machine Learning',
      'Ultrasonic & IR Sensors',
      'Motor Drivers (BTS7960 / L298N)',
      'Web-based Control Dashboard',
      'Wireless Communication (Wi-Fi)',
    ],
  },
  {
    id: 2,
    title: 'UGV – Unmanned Ground Vehicle',
    description:
      'The Unmanned Ground Vehicle (UGV) is a remotely operated and semi-autonomous robotic platform developed for surveillance, reconnaissance, and logistics support.',
    tags: ['Robotics', 'UGV', 'IoT'],
    images: [],
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  /* Lock background scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our Research Projects
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Flagship innovations developed by our research & robotics team
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedTag('All')}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedTag === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              All
            </button>

            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-medium ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-56 bg-gray-100">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Image Coming Soon
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedProject(null)}
              onTouchStart={(e) => setTouchStartY(e.touches[0].clientY)}
              onTouchEnd={(e) => {
                if (touchStartY && e.changedTouches[0].clientY - touchStartY > 80) {
                  setSelectedProject(null);
                }
                setTouchStartY(null);
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full mx-4 p-5
                           max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl"
                >
                  ✕
                </button>

                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>

                {selectedProject.images.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {selectedProject.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="w-full h-48 object-contain bg-gray-100 rounded-xl"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-48 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
                    Images coming soon
                  </div>
                )}

                <p className="text-gray-700">{selectedProject.description}</p>

                {selectedProject.features && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {selectedProject.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.techStack && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="h-6" />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
