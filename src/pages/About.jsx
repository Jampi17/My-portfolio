import React from 'react'
import '../about.css'

function Icon({ children, label }) {
    return (
        <span className="icon" aria-hidden="true" title={label}>{children}</span>
    )
}

export default function About() {
    return (
        <div className="about-page">
            <header className="hero fade-in">
                <div className="hero-inner">
                    <div>
                        <h1 className="name">Sobre mí</h1>
                        <p className="role">Odoo Developer & Frontend Developer</p>
                        <p className="meta"><Icon>📍</Icon> Perú · <Icon>💼</Icon> ERP, Integración y Sistemas Escalables</p>
                    </div>
                </div>
            </header>

            <main>
                {/* Sección 1: Información personal */}
                <section className="profile-section slide-up" aria-labelledby="profile-heading">
                    <h2 id="profile-heading">Perfil profesional</h2>
                    <p className="lead">
                        Soy Jeampierre Pacori, desarrollador especializado en Odoo y frontend. Desarrollé soluciones
                        para empresas que requieren automatización, integración y escalabilidad, combinando experiencia
                        en Python, PostgreSQL y React para entregar productos robustos y mantenibles.
                    </p>
                    <ul className="highlights">
                        <li><strong>Áreas clave:</strong> personalización de ERP, integraciones con pasarelas de pago, migraciones y optimización de procesos.</li>
                        <li><strong>Enfoque:</strong> diseño de soluciones que reducen trabajo manual, mejoran trazabilidad y permiten decisiones basadas en datos.</li>
                        <li><strong>Metodologías:</strong> desarrollo iterativo, revisiones de código, pruebas unitarias y despliegues controlados.</li>
                    </ul>
                </section>

                {/* Sección 2: Dos columnas — Experiencia y Formación */}
                <section className="two-col-section" aria-labelledby="two-col-heading">
                    <h2 id="two-col-heading">Experiencia y formación</h2>
                    <div className="two-col">
                        <div className="col">
                            <h3>Experiencia</h3>
                            <ol className="timeline">
                                <li className="timeline-item">
                                    <div className="timeline-marker" />
                                    <div className="timeline-content">
                                        <time>2022 — Actualidad</time>
                                        <h4>Senior Odoo Developer — Consultora ERP</h4>
                                        <p>Gestión de migraciones, desarrollo de módulos y coordinación de integraciones.</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-marker" />
                                    <div className="timeline-content">
                                        <time>2019 — 2022</time>
                                        <h4>Full Stack Developer — Empresa de software</h4>
                                        <p>Desarrollo de APIs y frontends, con foco en rendimiento y escalabilidad.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className="col">
                            <h3>Formación</h3>
                            <ul className="education">
                                <li>
                                    <strong>Ingeniería de Sistemas</strong>
                                    <span> — Universidad (título/licenciatura)</span>
                                </li>
                                <li>
                                    <strong>Certificaciones Odoo</strong>
                                    <span> — Cursos y proyectos prácticos en personalización y despliegue</span>
                                </li>
                                <li>
                                    <strong>Capacitaciones en Cloud y DevOps</strong>
                                    <span> — Despliegue, CI/CD y control de versiones</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Sección 3: Otra información */}
                <section className="additional" aria-labelledby="additional-heading">
                    <h2 id="additional-heading">Información relevante</h2>
                    <ul className="info-list">
                        <li><strong>Áreas de impacto:</strong> ERP, automatización de ventas, contabilidad y logística.</li>
                        <li><strong>Método de trabajo:</strong> análisis de requisitos, prototipado rápido y entregas iterativas.</li>
                        <li><strong>Comunicación:</strong> documentación técnica, transferencia de conocimiento y soporte post-despliegue.</li>
                        <li><strong>Herramientas y stack:</strong> Odoo (v11–v18), Python, JavaScript, React, PostgreSQL, Git, REST APIs, Docker (opcional).</li>
                        <li><strong>Idiomas:</strong> Español nativo, inglés técnico para documentación y APIs.</li>
                    </ul>
                </section>

                {/* Sección 4: CTA */}
                <section className="cta fade-in" aria-labelledby="cta-heading">
                    <h2 id="cta-heading">¿Listo para avanzar?</h2>
                    <p>Contacta para una evaluación técnica y una propuesta ajustada a tus procesos.</p>
                    <div className="cta-actions">
                        <a className="btn primary" href="mailto:jeampier.dev@gmail.com">Contactar por email</a>
                        <a className="btn" href="https://wa.me/51991330017" target="_blank" rel="noopener noreferrer">Enviar WhatsApp</a>
                    </div>
                </section>
            </main>

            <footer className="about-footer">
                <p>Jeampierre Pacori — Soluciones empresariales · Perú</p>
            </footer>
        </div>
    )
}
