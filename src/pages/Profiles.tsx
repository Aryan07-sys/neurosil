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
  name: 'Deepkumar Gadhethariya - Founder',
  department: 'Computer Science And Engineering',
  year: '2nd Senior',
  skills: ['Machine Learning', 'Python', 'TensorFlow'],
  researchInterest: 'AI Ethics & Fairness',
  bio: 'Passionate about developing ethical AI systems that benefit society. Currently researching bias detection in machine learning models.',
  image: '/images/Deep.jpeg?auto=compress&cs=tinysrgb&w=400',   // ✅ JPEG path
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/mr-deepkumar-gadhethariya-b05989316/',
},


  {
    id: 2,
    name: 'Aryan Vamja- co-founder',
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
  {
    id: 3,
    name: 'Priya Sharma',
    department: 'Robotics',
    year: 'Graduate',
    skills: ['ROS', 'Computer Vision', 'Deep Learning'],
    researchInterest: 'Autonomous Systems',
    bio: 'Developing autonomous navigation systems for mobile robots. Working on integrating vision-based localization with reinforcement learning.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Alex Rivera',
    department: 'Cybersecurity',
    year: 'Senior',
    skills: ['Penetration Testing', 'Network Security', 'Python'],
    researchInterest: 'Blockchain Security',
    bio: 'Researching vulnerabilities in smart contracts and developing automated testing frameworks for blockchain applications.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 5,
    name: 'Emily Zhang',
    department: 'Data Science',
    year: 'Junior',
    skills: ['Data Visualization', 'R', 'SQL'],
    researchInterest: 'Healthcare Analytics',
    bio: 'Applying data science to healthcare challenges. Currently analyzing patient data to predict disease outcomes and optimize treatment.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 6,
    name: 'David Kim',
    department: 'Software Engineering',
    year: 'Senior',
    skills: ['React', 'Node.js', 'Cloud Computing'],
    researchInterest: 'Full-Stack Development',
    bio: 'Building scalable web applications with modern technologies. Interested in microservices architecture and serverless computing.',
    image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=400',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function Profiles() {
   const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Innovators</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Meet the brilliant minds driving innovation and pushing the boundaries of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                    <p className="text-blue-200">{profile.department} • {profile.year}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Research Interest</h4>
                    <p className="text-blue-600 font-medium">{profile.researchInterest}</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{profile.bio}</p>

                  <div className="flex space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {selectedProfile && (
 <div
  className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
  onClick={() => setSelectedProfile(null)}
>
<div
  className="bg-white rounded-2xl max-w-4xl w-full mx-4 p-6 relative
             transform transition-all duration-300 ease-out
             scale-95 opacity-0 animate-modal-in"
  onClick={(e) => e.stopPropagation()}
>

      {/* Close button */}
      <button
        onClick={() => setSelectedProfile(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <img
          src={selectedProfile.image}
          alt={selectedProfile.name}
          className="w-full md:w-72 h-72 object-cover rounded-xl"
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

          <p className="mt-4 font-semibold text-gray-800">
            Research Interest
          </p>
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
    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
  >
    <Github size={20} /> GitHub
  </a>

  <a
    href={selectedProfile.linkedin}
    target="_blank"
    className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
  >
    <Linkedin size={20} /> LinkedIn
  </a>

  <a
    href={selectedProfile.resume}
    download
    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    📄 Download Resume
  </a>
</div>

        </div>
      </div>
    </div>
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
}
