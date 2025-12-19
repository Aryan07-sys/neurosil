import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

interface Profile {
  id: number;
  name: string;
  department: string;
  year: string;
  skills: string[];
  researchInterest: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  resume?: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Deepkumar Gadhethariya – Founder',
    department: 'Computer Science And Engineering',
    year: '2nd Senior',
    skills: ['Machine Learning', 'Python', 'TensorFlow'],
    researchInterest: 'AI Ethics & Fairness',
    bio: 'Passionate about developing ethical AI systems that benefit society. Currently researching bias detection in machine learning models.',
    image: '/images/Deep.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/mr-deepkumar-gadhethariya-b05989316/',
  },
  {
    id: 2,
    name: 'Aryan Vamja – Co-Founder',
    department: 'Computer Science And Engineering',
    year: '2nd Senior',
    skills: ['Machine Learning', 'Python', 'TensorFlow'],
    researchInterest: 'AI Ethics & Fairness',
    bio: 'Passionate about developing ethical AI systems that benefit society. Currently researching bias detection in machine learning models.',
    image: '/images/Aryan.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/aryan-vamja-50a060349/',
    resume: '/resume/Aryan_Vamja_Resume.pdf',
  },
];

export default function Profiles() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Our Innovators
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Meet the brilliant minds driving innovation and pushing the
              boundaries of technology
            </p>
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {profile.name}
                    </h3>
                    <p className="text-blue-200">
                      {profile.department} • {profile.year}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Modal */}
          {selectedProfile && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedProfile(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-4xl w-full mx-4 p-5 relative
                           max-h-[90vh] overflow-y-auto animate-modal-in"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-xl"
                >
                  ✕
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="w-full md:w-72 h-40 sm:h-64 object-contain bg-gray-100 rounded-xl"
                  />

                  {/* Details */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedProfile.name}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {selectedProfile.department} • {selectedProfile.year}
                    </p>

                    <p className="mt-4 text-gray-700">
                      {selectedProfile.bio}
                    </p>

                    <h3 className="mt-4 font-semibold text-gray-800">
                      Research Interest
                    </h3>
                    <p className="text-blue-600">
                      {selectedProfile.researchInterest}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProfile.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href={selectedProfile.github}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        <Github size={20} /> GitHub
                      </a>

                      <a
                        href={selectedProfile.linkedin}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                      >
                        <Linkedin size={20} /> LinkedIn
                      </a>

                      {selectedProfile.resume && (
                        <a
                          href={selectedProfile.resume}
                          download
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          📄 Download Resume
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom space for mobile */}
                <div className="h-6" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
