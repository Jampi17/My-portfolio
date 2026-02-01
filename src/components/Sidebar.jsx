import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.jsx'
const profilePublicUrl = new URL('foto.png', import.meta.env.BASE_URL).href
import profile from '../data/profile.json'
import cvUrl from '../../archivos/CV_Jeampierre_Pacori_Condori.pdf?url'

export default function Sidebar(){
  const { t } = useI18n()
  return (
    <aside className="sidebar">
      <motion.div className="profile-img"
        style={{ backgroundImage: `url(${profilePublicUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="greeting">
        <h1>JEAMPIER</h1>
        <h2>{t('greeting.role')}</h2>
        <p className="tagline">{t('tagline.main')}</p>
        <p className="value">{t('value.main')}</p>
        <div className="meta">
          <span>{t('meta.location')}</span>
          <span>{t('meta.availability')}</span>
          <span>{t('meta.focus')}</span>
        </div>
      </div>
      <div className="contact-info">
        <p>📧 {profile.email || 'jeampier.dev@gmail.com'}</p>
        {profile.phone ? <p>📱 {profile.phone}</p> : null}
        <p><a href={profile.portfolioUrl || '#'}>{t('contact.portfolio')}</a></p>
      </div>
      <div className="action-buttons">
        <a href="#hire" className="btn btn-primary">{t('btn.hire')}</a>
        <a href={cvUrl} className="btn btn-secondary" download="Jeampier-CV.pdf">{t('btn.cv')}</a>
      </div>
      <div className="social-links">
        {[
          ['f', '#'], ['𝕏', '#'], ['in', '#'], ['ig', '#']
        ].map(([label, href]) => (
          <motion.a key={label} href={href} className="social-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
            {label}
          </motion.a>
        ))}
      </div>
    </aside>
  )
}
