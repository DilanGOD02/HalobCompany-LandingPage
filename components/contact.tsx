"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      title: "Email",
      details: "info@halobcompany.com",
      link: "mailto:info@halobcompany.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: "Teléfono",
      details: "+506 8895-5772",
      link: "tel:+12345678901",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-500" />,
      title: "Ubicación",
      details: "San Luis, Jimenez, Costa Rica",
      link: "https://maps.app.goo.gl/CtTzDHSEdWfPE8x78",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
      

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-gray-800/50 p-4 rounded-full mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
              <p className="text-gray-400">{info.details}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
      

       
        </div>
      </div>
    </section>
  )
}
