import { Cpu, Layers3, Palette, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'PCB Design',
      desc: 'Professional schematic and PCB layout design for embedded and electronic systems.',
      icon: Cpu,
    },
    {
      title: '3D Structure Design',
      desc: 'Mechanical & enclosure design for robots, IoT devices, and prototypes.',
      icon: Layers3,
    },
    {
      title: 'Graphics Design',
      desc: 'UI/UX, posters, branding, and technical visuals for projects and startups.',
      icon: Palette,
    },
    {
      title: 'AI & Robotics',
      desc: 'Autonomous systems, ML models, computer vision, and robotic integrations.',
      icon: Bot,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            What we build & deliver
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="
                  bg-gray-900/10
                  backdrop-blur-md
                  border border-gray-300
                  rounded-2xl p-8 text-center
                  shadow-xl hover:shadow-2xl
                  transition-all duration-300 hover:scale-105
                  animate-fade-up
                "
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600">
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{s.title}</h3>
                <p className="text-gray-800 dark:text-gray-300 text-sm font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}