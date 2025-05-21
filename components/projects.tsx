"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras y panel de administración.",
      image: "/images/carniceria.png?height=400&width=600",
      category: "web",
      technologies: ["React", "Spring boot", "MySQL"],
      link: "https://github.com/Glend-2003/Frontend-Carniceria-La-Bendicion",
      github: "#",
    },
    {
      id: 2,
      title: "Aplicación de Gestión",
      description: "Sistema de gestión agricola, para control de inventario, clientes y productos.",
      image: "/images/logo.jpeg?height=400&width=600",
      category: "web",
      technologies: ["React.js", "Java", "JPA", "MySQL"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Biblioteca Web",
      description: "Aplicación web para gestionar el prestamo de libros, socios, multas, etc.",
      image: "/images/libreria.png?height=400&width=600",
      category: "mobile",
      technologies: ["Spring boot", "JPA", "SQL Server"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Dashboard Analítico",
      description: "Panel de control para visualización de datos empresariales con gráficos interactivos.",
      image: "/images/graficos.JPG?height=400&width=600",
      category: "dashboard",
      technologies: ["React.js", "Tailwind CSS", "Supabase"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Plataforma Educativa",
      description: "Sistema de gestión de aprendizaje con cursos, evaluaciones y certificaciones.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["Angular", "Django", "PostgreSQL", "AWS"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "App de Finanzas Personales",
      description: "Aplicación para control de gastos, presupuestos y seguimiento de inversiones.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mobile",
      technologies: [".Net", "SQL Server", "kotlin", "Swagger"],
      link: "#",
      github: "#",
    },
  ]

  const categories = [
    { id: "all", name: "Todos" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Móvil" },
    { id: "dashboard", name: "Dashboards" },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-[#0a0118]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nuestros <span className="text-purple-500">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explora algunos de nuestros trabajos más destacados y descubre cómo hemos ayudado a nuestros clientes a
            alcanzar sus objetivos.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-purple-500 text-white hover:bg-purple-500/10"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image || "../images/image.s"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
      
             
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


           /* <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>*/