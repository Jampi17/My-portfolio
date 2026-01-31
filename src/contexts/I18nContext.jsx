import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const dict = {
  es: {
    'nav.home': 'INICIO',
    'nav.hire': 'CONTRÁTAME',
    'btn.hire': 'Contrátame',
    'btn.cv': 'Descargar CV',
    'btn.contact': 'Contactar',
    'title.main': 'DESARROLLADOR DE SOFTWARE ESPECIALIZADO EN PYTHON, ODOO Y SISTEMAS EMPRESARIALES',
    'greeting.role': 'DESARROLLADOR DE SOFTWARE',
    'tagline.main': 'Python • Odoo ERP • Java • Sistemas Backend',
    'value.main': 'Desarrollo soluciones de software orientadas a automatizar procesos, optimizar la gestión y mejorar la eficiencia empresarial.',
    'meta.location': '📍 Perú',
    'meta.availability': '💼 Disponible (Remoto / Híbrido)',
    'meta.focus': '🧠 Enfoque: Sistemas empresariales',
    'contact.portfolio': 'Portafolio GitHub',
    'block.python.title': 'Python & Odoo ERP',
    'block.python.subtitle': 'Desarrollo de módulos, automatización y mejoras funcionales',
    'block.about.title': 'Sobre mí',
    'block.about.subtitle': 'Desarrollador de software con experiencia en sistemas de gestión, backend y ERP, orientado a soluciones prácticas y escalables.',
    'block.backend.title': 'Desarrollo Backend',
    'block.backend.subtitle': 'Lógica de negocio, APIs y conexión con bases de datos usando Python y Java.',
    'block.skills.title': 'Mis mejores habilidades',
    'block.skills.subtitle': 'Backend, ERP y Desarrollo Web',
    'block.contact.title': 'Contáctame',
    'block.contact.subtitle': '¿Tienes un proyecto o una vacante? Hablemos.',
    'skill.python.title': 'Python',
    'skill.python.desc': 'Automatización, backend y lógica de negocio',
    'skill.odoo.title': 'Odoo ERP',
    'skill.odoo.desc': 'Módulos personalizados, ORM, vistas y workflows',
    'skill.java.title': 'Java',
    'skill.java.desc': 'Aplicaciones empresariales y patrón MVC',
    'skill.mysql.title': 'MySQL',
    'skill.mysql.desc': 'Diseño de tablas, consultas y relaciones',
    'skill.pg.title': 'PostgreSQL',
    'skill.pg.desc': 'Uso con Odoo',
    'skill.git.title': 'Git / GitHub',
    'skill.git.desc': 'Control de versiones',
    'skill.htmlcss.title': 'HTML5 y CSS3',
    'skill.htmlcss.desc': 'Diseño responsivo y moderno',
    'skill.js.title': 'JavaScript',
    'skill.js.desc': 'Interacciones básicas y animaciones',
    'skill.ide.title': 'NetBeans / VS Code',
    'skill.ide.desc': 'Entornos de desarrollo',
    'skill.excel.title': 'Excel',
    'skill.excel.desc': 'Intermedio–avanzado',
    'section.projects.title': 'Experiencia / Proyectos',
    'project.hotel.title': 'Sistema de Gestión Hotelera',
    'project.hotel.subtitle': 'Java + MySQL • MVC • Clientes, reservas y usuarios',
    'project.odoo.title': 'Módulos Odoo Personalizados',
    'project.odoo.subtitle': 'Automatización de procesos internos y mejora de la gestión empresarial',
    'project.academic.title': 'Sistemas Académicos',
    'project.academic.subtitle': 'Control de alumnos, asistencia y notas (Java y Python)',
    'section.services.title': 'Servicios',
    'service.odoo': 'Desarrollo y personalización de Odoo ERP',
    'service.backend': 'Backend con Python y Java',
    'service.automation': 'Automatización de procesos',
    'service.management': 'Sistemas de gestión (inventarios, reservas, clientes)',
    'service.support': 'Soporte y mejoras de sistemas existentes',
    'section.final.text': 'Estoy abierto a oportunidades laborales, prácticas profesionales y proyectos freelance relacionados a desarrollo de software y sistemas empresariales.',
    'footer.copy': 'Copyright Jeampier©2026. Todos los derechos reservados.'
  },
  en: {
    'nav.home': 'HOME',
    'nav.hire': 'HIRE ME',
    'btn.hire': 'Hire Me',
    'btn.cv': 'Download CV',
    'btn.contact': 'Contact',
    'title.main': 'SOFTWARE DEVELOPER SPECIALIZED IN PYTHON, ODOO & BUSINESS SYSTEMS',
    'greeting.role': 'SOFTWARE DEVELOPER',
    'tagline.main': 'Python • Odoo ERP • Java • Backend Systems',
    'value.main': 'I build software to automate processes, optimize management and improve business efficiency.',
    'meta.location': '📍 Peru',
    'meta.availability': '💼 Open to work (Remote / Hybrid)',
    'meta.focus': '🧠 Focus: Enterprise Systems',
    'contact.portfolio': 'GitHub Portfolio',
    'block.python.title': 'Python & Odoo ERP',
    'block.python.subtitle': 'Module development, automation and functional improvements',
    'block.about.title': 'About Me',
    'block.about.subtitle': 'Software developer experienced in management systems, backend and ERP, focused on practical, scalable solutions.',
    'block.backend.title': 'Backend Development',
    'block.backend.subtitle': 'Business logic, APIs and database integration using Python and Java.',
    'block.skills.title': 'My Best Skills',
    'block.skills.subtitle': 'Backend, ERP & Web Development',
    'block.contact.title': 'Contact Me',
    'block.contact.subtitle': 'Got a project or an opening? Let\'s talk.',
    'skill.python.title': 'Python',
    'skill.python.desc': 'Automation, backend and business logic',
    'skill.odoo.title': 'Odoo ERP',
    'skill.odoo.desc': 'Custom modules, ORM, views and workflows',
    'skill.java.title': 'Java',
    'skill.java.desc': 'Enterprise apps and MVC pattern',
    'skill.mysql.title': 'MySQL',
    'skill.mysql.desc': 'Table design, queries and relations',
    'skill.pg.title': 'PostgreSQL',
    'skill.pg.desc': 'Used with Odoo',
    'skill.git.title': 'Git / GitHub',
    'skill.git.desc': 'Version control',
    'skill.htmlcss.title': 'HTML5 & CSS3',
    'skill.htmlcss.desc': 'Responsive modern design',
    'skill.js.title': 'JavaScript',
    'skill.js.desc': 'Basic interactions and animations',
    'skill.ide.title': 'NetBeans / VS Code',
    'skill.ide.desc': 'Development environments',
    'skill.excel.title': 'Excel',
    'skill.excel.desc': 'Intermediate–advanced',
    'section.projects.title': 'Experience / Projects',
    'project.hotel.title': 'Hotel Management System',
    'project.hotel.subtitle': 'Java + MySQL • MVC • Clients, bookings and users',
    'project.odoo.title': 'Custom Odoo Modules',
    'project.odoo.subtitle': 'Automation of internal processes and improved business management',
    'project.academic.title': 'Academic Systems',
    'project.academic.subtitle': 'Student control, attendance and grades (Java and Python)',
    'section.services.title': 'Services',
    'service.odoo': 'Odoo ERP development and customization',
    'service.backend': 'Backend with Python and Java',
    'service.automation': 'Process automation',
    'service.management': 'Management systems (inventory, bookings, clients)',
    'service.support': 'Support and improvements to existing systems',
    'section.final.text': "I'm open to job opportunities, internships and freelance projects related to software development and enterprise systems.",
    'footer.copy': 'Copyright Jeampier©2026. All rights reserved.'
  }
}

const I18nContext = createContext()

export function I18nProvider({ children }){
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') === 'en' ? 'en' : 'es' } catch { return 'es' }
  })
  useEffect(() => { try { localStorage.setItem('lang', lang) } catch{} }, [lang])
  const t = useMemo(() => {
    const translations = dict[lang] || dict.es
    return (key) => translations[key] || key
  }, [lang])
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}
export function useI18n(){ return useContext(I18nContext) }
