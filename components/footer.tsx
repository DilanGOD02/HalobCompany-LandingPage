import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-bold text-2xl flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Halob</span>
              <span className="text-white ml-1">Company</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Transformamos ideas en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio.
            </p>
         
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Dashboards
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Bases de Datos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  APIs y Microservicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:info@halobcompany.com" className="text-blue-400 hover:text-blue-300">
                  info@halobcompany.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Teléfono:</span>
                <a href="tel:+50688955772" className="text-blue-400 hover:text-blue-300">
                  +506 8895-5772 
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Dirección:</span>
                <span>Juan Luis, Jimenez, Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {currentYear} Halob Company. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

/*
   <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
            */