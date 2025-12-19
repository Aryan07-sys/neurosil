import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900/20 z-10"></div>

        <iframe
          src="https://my.spline.design/untitled-788a053023b04996a5c236267ef44"
          className="absolute inset-0 w-full h-full border-0"
          title="3D Background"
        />

        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="text-blue-400" size={20} />
              <span className="text-blue-100 font-medium">Student Innovation Hub</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
  Innovating the Future
  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
    Student Research & Development Hub
  </span>
</h1>


            <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
              Where creativity meets engineering excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link
                to="/projects"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Explore Projects</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link
                to="/profiles"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:scale-105"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our R&D Group
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a passionate community of student innovators, researchers, and developers
              pushing the boundaries of technology. Our mission is to transform bold ideas into
              impactful solutions through collaborative research, cutting-edge development, and
              continuous learning. From artificial intelligence to robotics, cybersecurity to
              sustainable tech, we explore diverse domains to shape the future of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-700">Active Projects</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-700">Student Researchers</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-700">Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
