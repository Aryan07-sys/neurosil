import { Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

/* ===================== TYPES ===================== */
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
}

/* ===================== LEADERS ===================== */
const leaders: Profile[] = [
  {
    id: 8,
    name: 'Dev Dayani – Co-Founder',
    department: 'Electrical Engineer',
    year: '2nd Year',
    skills: ['Embedded Systems', 'Robotics', 'Drone',"PCB", 'AI'],
    researchInterest: 'Autonomous & Defence Systems',
    bio: 'Co-Founder of Neurosil AI Techno',
    image: '/images/dev.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/dev-dayani/',
  },{
    id: 1,
    name: 'Deepkumar Gadhethariya – Founder',
    department: 'Student & Researcher',
    year: '2nd Year',
    skills: ['Embedded Systems', 'Robotics', 'ESP32','Verilog', 'AI'],
    researchInterest: 'Chip Design & AI Technology',
    bio: 'Founder of Neurosil AI Techno, focused on autonomous ground systems and AI-driven robotics.',
    image: '/images/Deep.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/mr-deepkumar-gadhethariya-b05989316/',
  },
  {
    id: 2,
    name: 'Aryan Vamja – Co-Founder',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    skills: ['Machine Learning', 'Computer Vision', 'Web-Design'],
    researchInterest: 'AI Systems & Robotics, Cybersecurity',
    bio: 'Co-founder of Neurosil AI Techno, working on AI models and dashboards.',
    image: '/images/Aryan.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/aryan-vamja-50a060349/',
  },
];

/* ===================== TEAM ===================== */
const teamMembers: Profile[] = [
  {
    id: 7,
    name: 'Priyanshi Kharva',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    skills: ['Linux', 'Networking Basics', 'Cybersecurity Fundamentals'],
    researchInterest: 'Cybersecurity and Network Security',
    bio: 'Exploring cybersecurity concepts with hands-on practice in system and network security',
    image: '/images/priyanshi.jpg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/priyanshi-kharva-15754435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  { 
    id: 5, 
    name: 'Astha Lakkad', 
    department: 'Computer Science & Engineering', 
    year: '2nd Year', 
    skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsive Design'], 
    researchInterest: 'Web Development and UI/UX Design', 
    bio: 'Designed responsive and user-friendly websites using modern web technologies.', 
    image: '/images/Astha.jpeg', 
    github: 'https://github.com', 
    linkedin: 'https://www.linkedin.com/in/aastha-lakkad-7bb107344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
  }, 
  { 
    id: 6, 
    name: 'Vishva Zala', 
    department: 'Computer Science & Engineering', 
    year: '2nd Year',
    skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsive Design'], 
    researchInterest: 'Web Development and UI/UX Design', 
    bio: 'Designed responsive and user-friendly websites using modern web technologies.',  
    image: '/images/Vishva.jpeg', 
    github: 'https://github.com', 
    linkedin: 'https://linkedin.com', 
  },
  {
    id: 3,
    name: 'Vasu Pokiya',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    skills: ['Graphic-Design', 'Computer Vision'],
    researchInterest: 'Autonomous Systems',
    bio: 'Working on robotic perception and navigation systems.',
    image: '/images/Vasu.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/vasu-pokiya-a386453a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 4,
    name: 'Ved Patel',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    skills: ['AI-Simulation'],
    researchInterest: 'Autonomous Systems',
    bio: 'Working on robotics and AI integration.',
    image: '/images/Ved.jpeg',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/ved-patel-a3902b349/',
  },
];

/* ===================== COMPONENT ===================== */
export default function Profiles() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    document.body.style.overflow = selectedProfile ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProfile]);

  const handleImageError = (profileId: number) => {
    setImageErrors(prev => ({ ...prev, [profileId]: true }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Innovators</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            Meet the minds behind Neurosil AI Techno
          </p>
        </div>

        {/* FOUNDERS SECTION TITLE */}

        {/* LEADERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 max-w-6xl mx-auto">
          {leaders.map(p => (
            <ProfileCard 
              key={p.id} 
              profile={p} 
              onClick={() => setSelectedProfile(p)}
              hasError={imageErrors[p.id]}
              onImageError={() => handleImageError(p.id)}
            />
          ))}
        </div>

        {/* TEAM */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 animate-fade-up">
          Our Team Members
        </h2>

        {/* First Row - 3 Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-6 sm:mb-8">
          {teamMembers.slice(0, 3).map(p => (
            <ProfileCard 
              key={p.id} 
              profile={p} 
              onClick={() => setSelectedProfile(p)}
              hasError={imageErrors[p.id]}
              onImageError={() => handleImageError(p.id)}
            />
          ))}
        </div>

        {/* Second Row - 2 Members Centered */}
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap max-w-6xl mx-auto">
          {teamMembers.slice(3).map(p => (
            <div key={p.id} className="w-full sm:w-[calc(50%-1rem)] max-w-sm">
              <ProfileCard 
                profile={p} 
                onClick={() => setSelectedProfile(p)}
                hasError={imageErrors[p.id]}
                onImageError={() => handleImageError(p.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProfile && (
        <div
          className="fixed inset-0 bg-gray-300/90 dark:bg-gray-700/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProfile(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900/10 backdrop-blur-lg rounded-3xl border border-gray-300 dark:border-gray-600 p-6 sm:p-8 lg:p-12 max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedProfile(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-2xl sm:text-3xl hover:text-gray-600 dark:hover:text-gray-400 transition z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image - Left Side */}
              <div className="flex justify-center">
                {imageErrors[selectedProfile.id] ? (
                  <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl sm:text-5xl text-white font-bold">
                          {selectedProfile.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Image not available</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    onError={() => handleImageError(selectedProfile.id)}
                    className="w-full max-w-md aspect-square object-contain rounded-2xl shadow-xl"
                  />
                )}
              </div>

              {/* Content - Right Side */}
              <div className="text-center md:text-left">
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                    {selectedProfile.name.split('–')[0].trim()}
                  </h2>
                  {selectedProfile.name.includes('–') && (
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
                      ({selectedProfile.name.split('–')[1].trim()})
                    </p>
                  )}
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {selectedProfile.department}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
                    {selectedProfile.year}
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">About</h3>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                      {selectedProfile.bio}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Research Interest</h3>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                      {selectedProfile.researchInterest}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Skills</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {selectedProfile.skills.map(s => (
                        <span
                          key={s}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href={selectedProfile.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-900/20 transition"
                  >
                    <Github size={24} className="sm:w-7 sm:h-7" />
                  </a>
                  <a 
                    href={selectedProfile.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-900/20 transition"
                  >
                    <Linkedin size={24} className="sm:w-7 sm:h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== CARD ===================== */
function ProfileCard({
  profile,
  onClick,
  hasError,
  onImageError,
}: {
  profile: Profile;
  onClick: () => void;
  hasError?: boolean;
  onImageError: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="
        bg-gray-900/10
        backdrop-blur-md
        border border-gray-300 dark:border-gray-600
        rounded-2xl shadow-xl
        hover:shadow-2xl cursor-pointer
        overflow-hidden transition-all duration-300
        hover:scale-105
        animate-fade-up
      "
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800">
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl sm:text-4xl text-white font-bold">
                  {profile.name.charAt(0)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Photo coming soon</p>
            </div>
          </div>
        ) : (
          <img
            src={profile.image}
            alt={profile.name}
            onError={onImageError}
            className="absolute inset-0 w-full h-full object-contain"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 line-clamp-2 text-gray-900 dark:text-gray-100">{profile.name}</h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 line-clamp-2 font-medium">
          {profile.department}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 font-medium">
          {profile.year}
        </p>
      </div>
    </div>
  );
}