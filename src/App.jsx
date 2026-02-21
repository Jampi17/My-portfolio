import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Content from './components/Content.jsx'
import About from './pages/About.jsx'
// Footer removed per request
import { useTheme } from './contexts/ThemeContext.jsx'

export default function App(){
  const { theme } = useTheme()
  const contentRef = useRef(null)
  const [page, setPage] = useState('home') // 'home' | 'about'

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
      <Header setActivePage={setPage} />
      <div className="main-container">
        <Sidebar />
        {page === 'home' ? (
          <Content ref={contentRef} />
        ) : (
          <main className="content" id="about" ref={contentRef}>
            <About />
          </main>
        )}
      </div>
    </div>
  )
}
