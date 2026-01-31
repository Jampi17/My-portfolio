import React from 'react'
import { useI18n } from '../contexts/I18nContext.jsx'

export default function Footer(){
  const { t } = useI18n()
  return (
    <footer>
      <p>{t('footer.copy')}</p>
      <div className="footer-logo">J</div>
    </footer>
  )
}
