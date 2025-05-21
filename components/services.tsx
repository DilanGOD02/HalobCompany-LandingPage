"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Database, LayoutDashboard, ShoppingCart, Code2 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados para buscadores que destacan tu marca.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-500" />,
      title: "Aplicaciones Móviles",
      description:
        "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.",
    },
    {
      icon: <Database className="h-12 w-12 text-blue-500" />,
      title: "Bases de Datos",
      description:
        "Diseñamos e implementamos soluciones de bases de datos escalables y seguras para gestionar tu información.",
    },
    {
      icon: <LayoutDashboard className="h-12 w-12 text-purple-500" />,
      title: "Dashboards",
      description: "Creamos paneles de control intuitivos que visualizan datos complejos de manera clara y accionable.",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-500" />,
      title: "E-Commerce",
      description:
        "Implementamos tiendas online completas con pasarelas de pago seguras y experiencias de compra optimizadas.",
    },
    {
      icon: <Code2 className="h-12 w-12 text-purple-500" />,
      title: "APIs y Microservicios",
      description: "Desarrollamos APIs robustas y microservicios escalables para conectar tus sistemas y aplicaciones.",
    },
  ]

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
    <section id="services" className="py-20 bg-black">
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
            Nuestros <span className="text-blue-500">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Ofrecemos una amplia gama de servicios de desarrollo para ayudarte a alcanzar tus objetivos digitales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-purple-500/30 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="mb-4 bg-gray-800/50 p-4 inline-block rounded-lg">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
