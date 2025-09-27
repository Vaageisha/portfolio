import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Play, Info, ChevronLeft, ChevronRight, Star, Code2, Database, Server, Zap } from 'lucide-react';

const NetflixPortfolio = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeSection, setActiveSection] = useState('featured');
  const [scrollPosition, setScrollPosition] = useState({});

  const heroProjects = [
    {
      id: 1,
      title: "Personal Finance Tracker",
      subtitle: "A Vaageisha Sharma Production",
      description: "Scalable full-stack application with microservices architecture managing financial data for concurrent users. Built with cutting-edge MERN technology.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      rating: "98% Match",
      year: "2024",
      duration: "Full Stack",
      category: "Trending",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&crop=center",
      link: "https://github.com/Vaageisha/PersonalFinanceTracker.git"
    },
    {
      id: 2,
      title: "CodeHub Platform",
      subtitle: "Distributed Version Control",
      description: "Collaborative code-hosting platform with distributed version control supporting concurrent operations and real-time collaboration features.",
      tech: ["MERN", "Socket.io", "Git", "API"],
      rating: "95% Match",
      year: "2024", 
      duration: "Platform",
      category: "Featured",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center",
      link: "https://github.com/Vaageisha/code-hub-backend.git"
    },
    {
      id: 3,
      title: "VideoGather",
      subtitle: "Real-Time Communications",
      description: "Enterprise-grade video conferencing platform handling peer-to-peer connections at scale with fault-tolerant WebRTC architecture.",
      tech: ["React", "WebRTC", "Node.js", "P2P"],
      rating: "92% Match",
      year: "2024",
      duration: "Real-Time",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&h=1080&fit=crop&crop=center"
    }
  ];

  const projectCategories = {
    featured: {
      title: "Featured Projects",
      projects: [
        {
          title: "ISRO-ARIES SSA",
          description: "Distributed computing pipelines processing astronomical data",
          tech: "Python • ML • Distributed Systems",
          image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
          stats: "40% performance boost",
          type: "Research"
        },
        {
          title: "Personal Finance Tracker",
          description: "Microservices architecture for financial management",
          tech: "MERN • Chart.js • JWT",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
          stats: "35% engagement increase",
          type: "Full Stack"
        },
        {
          title: "CodeHub Platform", 
          description: "Collaborative development environment",
          tech: "MERN • Git • API Integration",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          stats: "50% faster rollbacks",
          type: "Platform"
        },
        {
          title: "VideoGather",
          description: "WebRTC-based video conferencing solution",
          tech: "React • Node.js • WebRTC",
          image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop",
          stats: "45% improved stability",
          type: "Real-Time"
        }
      ]
    },
    distributed: {
      title: "Distributed Systems",
      projects: [
        {
          title: "Orbital Parameter Extraction",
          description: "ML-powered systems achieving 92% accuracy",
          tech: "Python • TensorFlow • Distributed ML",
          image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
          stats: "92% accuracy",
          type: "ML Research"
        },
        {
          title: "Astronomical Data Pipeline",
          description: "High-volume data processing across multiple nodes",
          tech: "Python • Apache Spark • Kafka",
          image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=300&h=200&fit=crop",
          stats: "Petabyte scale",
          type: "Big Data"
        }
      ]
    },
    fullstack: {
      title: "Full Stack Development",
      projects: [
        {
          title: "MERN Authentication System",
          description: "Secure JWT-based auth serving concurrent users",
          tech: "MongoDB • Express • React • Node",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          stats: "30% API improvement",
          type: "Security"
        },
        {
          title: "RESTful API Design",
          description: "Scalable APIs with automated data retrieval",
          tech: "Node.js • Express • MongoDB",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
          stats: "20% performance gain",
          type: "Backend"
        }
      ]
    }
  };

  const skills = [
    { name: "Distributed Systems", level: 92, icon: <Server className="w-5 h-5" /> },
    { name: "System Design", level: 88, icon: <Code2 className="w-5 h-5" /> },
    { name: "Full Stack", level: 94, icon: <Database className="w-5 h-5" /> },
    { name: "Performance", level: 90, icon: <Zap className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction, category) => {
    const container = document.getElementById(`scroll-${category}`);
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const ProjectCard = ({ project, isLarge = false }) => (
    <div 
      className={`relative bg-gray-900 rounded-md overflow-hidden transition-all duration-300 hover:scale-110 hover:z-20 group cursor-pointer flex-shrink-0 ${isLarge ? 'w-80 h-48' : 'w-72 h-40'}`}
      onMouseEnter={() => setHoveredProject(project)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className={`font-bold mb-1 ${isLarge ? 'text-lg' : 'text-base'}`}>{project.title}</h3>
        <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs bg-red-600 px-2 py-1 rounded">{project.type}</span>
          {project.stats && (
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs text-green-400">{project.stats}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.split(' • ').slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs bg-gray-700 px-2 py-0.5 rounded text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Play Button on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black bg-opacity-50 rounded-full p-3">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );

  const currentProject = heroProjects[currentHero];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Netflix Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="text-red-600 font-bold text-2xl">VAAGEISHA</div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => setActiveSection('featured')} className={`hover:text-gray-300 transition-colors ${activeSection === 'featured' ? 'text-white' : 'text-gray-400'}`}>
                Projects
              </button>
              <button onClick={() => setActiveSection('distributed')} className={`hover:text-gray-300 transition-colors ${activeSection === 'distributed' ? 'text-white' : 'text-gray-400'}`}>
                Systems
              </button>
              <button onClick={() => setActiveSection('fullstack')} className={`hover:text-gray-300 transition-colors ${activeSection === 'fullstack' ? 'text-white' : 'text-gray-400'}`}>
                Full Stack
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Vaageisha" className="hover:text-gray-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/vaageisha" className="hover:text-gray-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-32">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                {currentProject.category}
              </div>
              <span className="text-gray-300">{currentProject.year}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-300">{currentProject.duration}</span>
              <span className="text-gray-300">•</span>
              <div className="flex items-center space-x-1">
                <span className="text-green-400 font-bold">{currentProject.rating}</span>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-4">{currentProject.title}</h1>
            <h2 className="text-xl text-gray-300 mb-6">{currentProject.subtitle}</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
              {currentProject.description}
            </p>
            
            <div className="flex space-x-4 mb-6">
              <button className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
                <Play className="w-5 h-5" />
                <span>View Project</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-600 bg-opacity-70 px-8 py-3 rounded font-bold hover:bg-opacity-90 transition-colors">
                <Info className="w-5 h-5" />
                <span>More Info</span>
              </button>
            </div>
            
            <div className="flex space-x-3">
              {currentProject.tech.map((tech, index) => (
                <span key={index} className="bg-gray-800 bg-opacity-80 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {heroProjects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-1 transition-all duration-300 ${
                index === currentHero ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentHero(index)}
            />
          ))}
        </div>
      </div>

      {/* Project Categories */}
      <div className="px-8 py-12 space-y-12">
        {Object.entries(projectCategories).map(([key, category]) => (
          <div key={key} className="space-y-6">
            <h2 className="text-2xl font-bold">{category.title}</h2>
            <div className="relative group">
              {/* Scroll Buttons */}
              <button 
                onClick={() => scroll('left', key)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right', key)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Project Row */}
              <div 
                id={`scroll-${key}`}
                className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.projects.map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    project={project} 
                    isLarge={key === 'featured' && index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="px-8 py-12 bg-gray-900">
        <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                {skill.icon}
                <h3 className="font-bold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400">{skill.level}% Proficiency</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-8 py-16 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future</h2>
          <p className="text-xl text-gray-400 mb-8">
            Software Development Engineer passionate about distributed systems and scalable solutions
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">200+</div>
              <div className="text-gray-400">LeetCode Problems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">8.01</div>
              <div className="text-gray-400">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">40%</div>
              <div className="text-gray-400">Performance Boost</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="mailto:vaageishasharma@gmail.com" className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-bold transition-colors">
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
            <button className="flex items-center space-x-2 border border-gray-600 hover:border-gray-400 px-8 py-3 rounded font-bold transition-colors">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixPortfolio;