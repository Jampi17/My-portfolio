import React, { useState } from 'react'
import { useI18n } from '../contexts/I18nContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'

export default function Header({ setActivePage }){
  const { t, lang, setLang } = useI18n()
  const { toggle, theme } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav>
        <div className="logo spin-on-load">J</div>
        <button className="menu-toggle" aria-label={lang==='es'?'Abrir menú':'Open menu'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(o=>!o)}>☰</button>
        <div id="primary-nav" className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#start" onClick={(e) => {
            e.preventDefault()
            if (setActivePage) setActivePage('home')
            // wait a tick for content to render then scroll
            requestAnimationFrame(() => {
              const el = document.getElementById('start')
              if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })
            setOpen(false)
          }}>{t('nav.home')}</a>
          <a href="#projects" onClick={(e) => {
            e.preventDefault()
            if (setActivePage) setActivePage('home')
            requestAnimationFrame(() => {
              const el = document.getElementById('projects')
              if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })
            setOpen(false)
          }}>{t('nav.projects')}</a>
          <a href="#services" onClick={(e) => {
            e.preventDefault()
            if (setActivePage) setActivePage('home')
            requestAnimationFrame(() => {
              const el = document.getElementById('services')
              if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })
            setOpen(false)
          }}>{t('nav.services')}</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault()
            if (setActivePage) setActivePage('about')
            // no scroll needed; About will be rendered
            setOpen(false)
          }}>Acerca</a>
          <div className="lang-switch" role="group" aria-label="Seleccionar idioma">
            <button className="lang-toggle" aria-pressed={lang === 'es'} onClick={() => setLang('es')}>ES</button>
            <button className="lang-toggle" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
          <span className="nav-icon theme-toggle" title={lang==='es'? 'Cambiar tema':'Toggle theme'} onClick={toggle}>{theme==='light'?'☀️':'🌙'}</span>
        </div>
      </nav>
    </header>
  )
}
