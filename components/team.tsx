"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  github: string
  avatar: string
}

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Daisy Cedeño",
      role: "Full Stack Developer",
      bio: "Especialista en desarrollo web con experiencia en React y Node.js.",
      github: "https://github.com/deyCedeno",
      avatar: "",
    },
    {
      id: 2,
      name: "Glend Rojas",
      role: "Frontend Developer",
      bio: "Experto en interfaces de usuario y experiencia de usuario.",
      github: "https://github.com/Glend-2003",
      avatar: "",
    },
    {
      id: 3,
      name: "Dilan Gutierrez",
      role: "Backend Developer",
      bio: "Especialista en arquitectura de sistemas y bases de datos.",
      github: "https://github.com/DilanGOD02",
      avatar: "",
    },
    {
      id: 4,
      name: "Jamel S. Anderson",
      role: "Mobile Developer",
      bio: "Desarrollador de aplicaciones móviles con experiencia en React Native.",
      github: "https://github.com/Jamel-Sandi",
      avatar: "",
    },
  ])

  useEffect(() => {
    const fetchGithubAvatars = async () => {
      try {
        const updatedMembers = await Promise.all(
          teamMembers.map(async (member) => {
            const username = member.github.split("/").pop()
            if (!username) return member

            try {
              const response = await fetch(`https://api.github.com/users/${username}`)
              if (response.ok) {
                const data = await response.json()
                return {
                  ...member,
                  avatar: data.avatar_url,
                }
              }
            } catch (error) {
              console.error(`Error fetching GitHub data for ${username}:`, error)
            }

            return member
          }),
        )

        setTeamMembers(updatedMembers)
      } catch (error) {
        console.error("Error fetching GitHub avatars:", error)
      }
    }

    fetchGithubAvatars()
  }, [])

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
    <section id="team" className="py-20 bg-black/50">
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
            Nuestro <span className="text-blue-500">Equipo</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Conoce a los talentosos profesionales detrás de Halob Company que hacen posible cada proyecto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.avatar || `/placeholder.svg?height=300&width=300`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-400">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Ver GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
