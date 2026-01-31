import React, { useState } from 'react'
import { useI18n } from '../contexts/I18nContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'

export default function Header(){
  const { t, lang, setLang } = useI18n()
  const { toggle, theme } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav>
        <div className="logo spin-on-load">J</div>
        <button className="menu-toggle" aria-label={lang==='es'?'Abrir menú':'Open menu'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(o=>!o)}>☰</button>
        <div id="primary-nav" className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#home">{t('nav.home')}</a>
          <a href="#hire">{t('nav.hire')}</a>
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
