import React, { useEffect, useRef } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import { useTheme } from './contexts/ThemeContext.jsx'

export default function App(){
  const { theme } = useTheme()
  const contentRef = useRef(null)

  // Smooth scroll for internal links targeting sections within content
  useEffect(() => {
    const content = contentRef.current
    if (!content) return
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      if (!id) return
      const target = content.querySelector(`#${id}`)
      if (!target) return
      e.preventDefault()
      const contentTop = content.getBoundingClientRect().top
      const targetTop = target.getBoundingClientRect().top
      const offset = targetTop - contentTop + content.scrollTop
      content.scrollTo({ top: offset, behavior: 'smooth' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div data-theme={theme}>
      <Header />
      <div className="main-container">
        <Sidebar />
        <Content ref={contentRef} />
      </div>
      <Footer />
    </div>
  )
}
