"use client"

import { motion } from "framer-motion"
import { Code, Rocket, Users } from "lucide-react"

export default function About() {
  const fadeIn = {
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

  const features = [
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Desarrollo a Medida",
      description:
        "Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-500" />,
      title: "Innovación Constante",
      description:
        "Nos mantenemos a la vanguardia de las tecnologías emergentes para ofrecer soluciones modernas y eficientes.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Equipo Especializado",
      description: "Contamos con desarrolladores expertos apasionados por crear productos digitales de alta calidad.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Sobre <span className="text-purple-500">Nosotros</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Halob Company es una empresa de desarrollo de software especializada en crear soluciones digitales
            innovadoras. Nuestro enfoque combina tecnología de vanguardia con diseño centrado en el usuario para ofrecer
            experiencias digitales excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index + 1}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
