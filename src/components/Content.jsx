import React, { forwardRef, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.jsx'
import profile from '../data/profile.json'

function useReveal(){
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useParallax(containerRef, bgRef){
  useEffect(() => {
    const content = containerRef.current
    const bg = bgRef.current
    if (!content || !bg) return
    const onScroll = () => {
      const y = content.scrollTop * 0.06
      bg.style.transform = `translate3d(0, ${y}px, 0)`
    }
    content.addEventListener('scroll', onScroll)
    return () => content.removeEventListener('scroll', onScroll)
  }, [containerRef, bgRef])
}

function useTyped(ref, text, speed = 20){
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let i = 0
    el.textContent = ''
    const timer = setInterval(() => {
      el.textContent = text.slice(0, i)
      i++
      if (i > text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [ref, text, speed])
}

const Content = forwardRef(function Content(_, ref){
  const { t } = useI18n()
  const bgRef = useRef(null)
  const titleRef = useRef(null)

  useReveal()
  useParallax(ref, bgRef)
  useTyped(titleRef, t('title.main'))

  return (
    <main className="content" id="home" ref={ref}>
      <div className="parallax-bg" ref={bgRef} aria-hidden="true" />
      <h1 className="main-title typed-title" ref={titleRef}></h1>
      <div className="content-grid">
        <motion.div id="start" className="content-block block-upwork"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}>
          <div className="block-title">{t('block.python.title')}</div>
          <div className="block-subtitle">{t('block.python.subtitle')}</div>
        </motion.div>

        <motion.div className="content-block block-about"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}>
          <div className="block-title">{t('block.about.title')}</div>
          <div className="block-subtitle">{t('block.about.subtitle')}</div>
        </motion.div>

        <motion.div className="content-block block-dribbble"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}>
          <div className="block-title">{t('block.backend.title')}</div>
          <div className="block-subtitle">{t('block.backend.subtitle')}</div>
        </motion.div>

        <motion.div className="content-block block-skills"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}>
          <div className="block-title">{t('block.skills.title')}</div>
          <div className="block-subtitle">{t('block.skills.subtitle')}</div>
        </motion.div>

        <motion.div className="content-block block-subscribe"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}>
          <div className="block-title">{t('block.contact.title')}</div>
          <div className="block-subtitle">{t('block.contact.subtitle')}</div>
        </motion.div>
      </div>

      <div className="skills-list">
        {[
          ['skill.python.title','skill.python.desc'],
          ['skill.odoo.title','skill.odoo.desc'],
          ['skill.java.title','skill.java.desc'],
          ['skill.mysql.title','skill.mysql.desc'],
          ['skill.pg.title','skill.pg.desc'],
          ['skill.git.title','skill.git.desc'],
          ['skill.htmlcss.title','skill.htmlcss.desc'],
          ['skill.js.title','skill.js.desc'],
          ['skill.ide.title','skill.ide.desc'],
          ['skill.excel.title','skill.excel.desc'],
        ].map(([titleKey,descKey], idx) => (
          <motion.div className="skill-item" key={titleKey}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}>
            <h3>{t(titleKey)}</h3>
            <p>{t(descKey)}</p>
          </motion.div>
        ))}
      </div>

      <section className="projects" id="projects" style={{ marginTop: '2.5rem' }}>
        <h2 className="section-title">{t('section.projects.title')}</h2>
        <div className="content-grid">
          <motion.div className="content-block block-project project-hotel" style={{ background:'var(--brand-2)' }}
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} whileHover={{ y: -2 }}>
            <div className="block-title">{t('project.hotel.title')}</div>
            <div className="block-subtitle">{t('project.hotel.subtitle')}</div>
          </motion.div>
          <div className="content-block block-project project-odoo reveal-right" style={{ background:'var(--brand-3)' }}>
            <div className="block-title">{t('project.odoo.title')}</div>
            <div className="block-subtitle">{t('project.odoo.subtitle')}</div>
          </div>
          <motion.div className="content-block block-project project-academic" style={{ background:'var(--brand-4)' }}
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} whileHover={{ y: -2 }}>
            <div className="block-title">{t('project.academic.title')}</div>
            <div className="block-subtitle">{t('project.academic.subtitle')}</div>
          </motion.div>
        </div>
      </section>

      <section className="services-section" id="services" style={{ marginTop: '2.5rem' }}>
        <h2 className="section-title">{t('section.services.title')}</h2>
        <ul className="service-list" style={{ marginTop: '1rem', lineHeight: 1.8 }}>
          <li>{t('service.odoo')}</li>
          <li>{t('service.backend')}</li>
          <li>{t('service.automation')}</li>
          <li>{t('service.management')}</li>
          <li>{t('service.support')}</li>
        </ul>
      </section>

      <section className="blog-section" id="blog" style={{ marginTop: '2.5rem' }}>
        <h2 className="section-title">{t('section.blog.title')}</h2>
        <div className="content-grid" style={{ marginTop: '1rem' }}>
          <motion.article className="content-block block-project"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}>
            <div className="block-title">{t('blog.item1.title')}</div>
            <div className="block-subtitle">{t('blog.item1.subtitle')}</div>
          </motion.article>
          <motion.article className="content-block block-project"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}>
            <div className="block-title">{t('blog.item2.title')}</div>
            <div className="block-subtitle">{t('blog.item2.subtitle')}</div>
          </motion.article>
        </div>
      </section>

      <section className="final-contact" id="contact" style={{ marginTop: '2.5rem' }}>
        <h2 className="section-title">{t('section.contact.title')}</h2>
        <p style={{ marginTop: '.7rem' }}>{t('contact.cta')}</p>
        <div className="action-buttons" style={{ marginTop: '1rem', maxWidth: 360 }}>
          <a className="btn btn-primary" href={`mailto:${profile.email || 'jeampier.99k@gmail.com'}`}>{t('contact.email')}</a>
          <a className="btn btn-secondary" href={`https://wa.me/${(profile.phone||'').replace(/\D/g,'').length===9? '51'+(profile.phone||'').replace(/\D/g,'') : (profile.phone||'').replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer">{t('contact.whatsapp')}</a>
          <a className="btn btn-secondary" href={profile.portfolioUrl || 'https://jampi17.github.io/Misti-code/'} target="_blank" rel="noopener noreferrer">{t('contact.web')}</a>
        </div>
      </section>

    </main>
  )
})

export default Content
