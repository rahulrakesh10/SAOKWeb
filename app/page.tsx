'use client'

import type { ComponentType } from "react"
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Navigation } from "@/components/navigation"
import { Code2, Gamepad2, Sparkles, Github, Linkedin, Mail, ExternalLink, Wrench, FileText, Terminal, Database } from "lucide-react"
import Image from "next/image"
import {
  SiUnity,
  SiUnrealengine,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiLinux,
  SiGooglecloud,
  SiPytorch,
  SiOpenjdk,
  SiVscodium,
  SiPycharm,
  SiIntellijidea,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiR,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
} from "react-icons/si"

const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  Python: SiPython,
  Java: SiOpenjdk,
  "C++": SiCplusplus,
  "C#": Code2,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  R: SiR,
  SQL: Database,
  "HTML/CSS": SiHtml5,
  C: Code2,
  React: SiReact,
  "Node.js": SiNodedotjs,
}

const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  Unity: SiUnity,
  "Unreal Engine": SiUnrealengine,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  Unix: Terminal,
  BigQuery: SiGooglecloud,
  PyTorch: SiPytorch,
  JavaFX: SiOpenjdk,
  "VS Code": SiVscodium,
  PyCharm: SiPycharm,
  IntelliJ: SiIntellijidea,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Game Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-purple-200 to-purple-400">
                Sean Kenyon
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
                Creating immersive gaming experiences through innovative design and cutting-edge technology
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-purple-500/50 hover:border-purple-500 rounded-lg transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right 3D Scene */}
            <div className="h-[500px] md:h-[600px] relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a Computer Science student at the University of Western Ontario, specializing in 
                Game Development. With a passion for creating engaging interactive experiences, I combine 
                technical expertise with creative vision to build games that captivate players.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in game development has led me to work on various projects, from virtual pet 
                simulations to machine learning applications. I'm always exploring new technologies and 
                pushing the boundaries of what's possible in interactive media.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Gamepad2 className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Game Development</h3>
                  <p className="text-gray-400 text-sm">Specialized in creating interactive gaming experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Full-Stack Development</h3>
                  <p className="text-gray-400 text-sm">Building robust applications with modern technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Innovation</h3>
                  <p className="text-gray-400 text-sm">Always exploring new tools and techniques</p>
                </div>
              </div>
              <a
                href="/Sean Kenyon - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-6 px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors w-fit"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technology Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technology</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-300">Programming</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Python', 'Java', 'C++', 'C#',
                  'JavaScript', 'TypeScript', 'R', 'SQL',
                  'HTML/CSS', 'C', 'React', 'Node.js'
                ].map((skill) => {
                  const Icon = skillIcons[skill] ?? Code2
                  return (
                    <Card key={skill} className="p-4 text-center bg-purple-500/5 border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                      <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <span className="text-gray-300">{skill}</span>
                    </Card>
                  )
                })}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-300">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Unity', 'Unreal Engine', 'Django', 'PostgreSQL',
                  'MySQL', 'MongoDB', 'Git', 'Docker',
                  'Linux', 'Unix', 'BigQuery', 'PyTorch',
                  'JavaFX', 'VS Code', 'PyCharm', 'IntelliJ'
                ].map((tech) => {
                  const Icon = techIcons[tech] ?? Wrench
                  return (
                    <Card key={tech} className="p-4 text-center bg-purple-500/5 border-purple-500/20 hover:bg-purple-500/10 transition-colors">
                      <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <span className="text-gray-300">{tech}</span>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects & Games</h2>
          
          <div className="space-y-12">
            {/* Project 1 - Pet Simulation Game */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-purple-300">Game Development</span>
                  </div>
                  <h3 className="text-3xl font-bold">Pet Simulation Game</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Architected a Java-based virtual pet simulation game as part of a 5-member team, 
                    applying object-oriented programming principles and design patterns to ensure scalability 
                    and maintainability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'JavaFX', 'OOP', 'Git'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-full bg-gradient-to-br from-purple-900/40 to-black">
                  <Image
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                    alt="Pet Simulation Game"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-full bg-gradient-to-br from-purple-900/40 to-black order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80"
                    alt="ML Project"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <div className="p-8 space-y-4 order-1 md:order-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-purple-300">Machine Learning</span>
                  </div>
                  <h3 className="text-3xl font-bold">Graduate Employability Predictor</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built an end-to-end machine learning pipeline to predict graduate employment outcomes 
                    using a 10,000-record dataset. Designed and trained a multi-layer neural network in 
                    PyTorch that achieved 99.3% accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'PyTorch', 'ML', 'Data Science'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            <Card className="p-6 bg-purple-500/5 border-purple-500/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
                  <p className="text-purple-300">Cru • Chiang Mai, Thailand</p>
                </div>
                <span className="text-sm text-gray-400">July 2024 - August 2024</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Engineered enterprise-grade web app using Python and Django REST Framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Optimized Big Data workflows with Google BigQuery, reducing query costs by 22%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Developed ETL pipelines handling 3.2 GB/day with 99.1% success rate</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <Card className="p-8 bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20">
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="mailto:Sean.ao.kenyon@gmail.com" 
                className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors border border-purple-500/20"
              >
                <Mail className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300">Email</span>
                <span className="text-sm text-purple-300">Sean.ao.kenyon@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/sean-kenyon" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors border border-purple-500/20"
              >
                <Linkedin className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300">LinkedIn</span>
                <span className="text-sm text-purple-300">in/sean-kenyon</span>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors border border-purple-500/20"
              >
                <Github className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300">GitHub</span>
                <span className="text-sm text-purple-300">View Projects</span>
              </a>
            </div>
          </Card>
        </div>
      </section>

    </main>
  )
}
