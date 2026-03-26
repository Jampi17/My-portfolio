import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.jsx'
import fotoUrl from '../../images/foto_profesional.png'
import profile from '../data/profile.json'
import cvUrl from '../../archivos/CV_Jeampierre_Pacori_Condori.pdf?url'

export default function Sidebar() {
  const { t } = useI18n()
  const mistiCodeUrl = 'https://jampi17.github.io/Misti-code/'
  const cleanPhone = (profile.phone || '').replace(/\D/g, '')
  const whatsappNumber = cleanPhone.length === 9 ? `51${cleanPhone}` : cleanPhone

  return (
    <aside className="sidebar">
      <motion.div className="profile-img"
        style={{ backgroundImage: `url(${fotoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="greeting">
        <h1>JEAMPIERRE</h1>
        <h2>{t('greeting.role')}</h2>
        <p className="tagline">{t('tagline.main')}</p>
        <p className="value">{t('value.main')}</p>
        <div className="availability">{t('available.freelance')}</div>
        <div className="meta">
          <span>{t('meta.location')}</span>
          <span>{t('meta.availability')}</span>
          <span>{t('meta.focus')}</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="contact-info">
        <h3 className="sidebar-subtitle">Contacto directo</h3>
        <div className="contact-list">
          <a className="contact-item" href={`mailto:${profile.email || 'jeampier.dev@gmail.com'}`}>
            <span>📧</span>
            <span>{profile.email || 'jeampier.dev@gmail.com'}</span>
          </a>
          {profile.phone ? (
            <a className="contact-item" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <span>📱</span>
              <span>{profile.phone}</span>
            </a>
          ) : null}
          <a className="contact-item" href={profile.portfolioUrl || mistiCodeUrl} target="_blank" rel="noopener noreferrer">
            <span>🌐</span>
            <span>{t('contact.portfolio')}</span>
          </a>
        </div>
      </div>

      <div className="action-buttons">
        <a aria-label={t('btn.contact')} href={`https://wa.me/${(profile.phone || '').replace(/\D/g, '').length === 9 ? '51' + (profile.phone || '').replace(/\D/g, '') : (profile.phone || '').replace(/\D/g, '')}?text=${encodeURIComponent(t('whatsapp.msg'))}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('btn.contact')}</a>
        <a aria-label={t('btn.cv')} href={cvUrl} className="btn btn-secondary" download="Jeampier-CV.pdf">{t('btn.cv')}</a>
      </div>

      <div className="social-wrap">
        <h3 className="sidebar-subtitle">Redes</h3>
      <div className="social-links">
        {[
          ['in', 'https://www.linkedin.com/in/jeampierre-pacori-condori-976811354'], ['web', mistiCodeUrl]
        ].map(([label, href]) => (
          <motion.a key={label} href={href} className="social-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} target="_blank" rel="noopener noreferrer">
            {label === 'in' ? 'in' : '🌐'}
          </motion.a>
        ))}
      </div>
      </div>
    </aside>
  )
}
