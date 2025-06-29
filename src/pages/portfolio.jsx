import { useState, useEffect, useRef } from 'react';
import './portfolio.css';
import profilePic from '../assets/me.jpg';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';
import p8 from '../assets/8.png';
import p9 from '../assets/9.png';



function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      sections.current.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
        
        // Check visibility for animation
        const rect = section.getBoundingClientRect();
        const isCurrentlyVisible = 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0;
        
        setIsVisible(prev => ({
          ...prev,
          [section.id]: isCurrentlyVisible
        }));
      });
    };
    
    sections.current = document.querySelectorAll('section');
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="portfolio">
      <header>
        <div className="logo">
          <span>Abdelkahar</span>
          <div className="animated-dot"></div>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <a onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <a onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className={`hero ${isVisible['home'] ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="greeting">Hello, I'm</span>
              <span className="name">AbdelKahar</span>
              <span className="title">MERN Stack Developer</span>
            </h1>
            <p>Building impactful digital solutions with creative code</p>
            <div className="cta-buttons">
              <button className="primary-btn" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
              <button className="secondary-btn" onClick={() => scrollToSection('projects')}>
                View Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={profilePic} alt="Profile" />
              <div className="geometric-bg"></div>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <div className="circle c1"></div>
          <div className="circle c2"></div>
          <div className="circle c3"></div>
          <div className="lines"></div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll Down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className={`about ${isVisible['about'] ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="About Me" />
            <div className="image-decoration"></div>
          </div>
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
               I'm a skilled web and mobile developer with 3 years of experience building dynamic, user-centric applications. 
               Specializing in modern frameworks and technologies, I create responsive, 
               high-performance solutions with clean code and engaging designs. 
            </p>
            <h3>What I Do</h3>
            <div className="about-cards">
              <div className="about-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 4H4v16h16V4z" />
                    <path d="M4 8h16" />
                    <path d="M8 4v16" />
                  </svg>
                </div>
                <h4>Apps Development</h4>
                <p>Building responsive websites with modern frameworks and clean code</p>
              </div>
              <div className="about-card">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h4>Apps Design</h4>
                <p>Designing user-friendly interfaces for web and mobile platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className={`skills ${isVisible['skills'] ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-content">
          <div className="skills-text">
            <p>
              I continuously enhance my skill set to stay current with the latest technologies
              and development practices. Here are some of my core technical abilities:
            </p>
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-name">React</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Tailwind</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">CSS</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                 <div className="skill-item">
                  <div className="skill-name">HTML5</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Express</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">MongoDB</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Php</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">RestAPI</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>








              
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className={`projects ${isVisible['projects'] ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects-content">
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                  <img src={p3} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>InnoDev Club</h3>
                <p>Our developer club's website showcases innovative projects, collaboration, and tech ideas.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>API</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                 <img src={p5} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Bibliotheque National Alger</h3>
                <p>WebSite of Bibliotheque National Alger with all infos and all categories</p>
                <div className="project-tags">
                  <span>WordPress</span>
                  <span>Php</span>
                  <span>Plugins</span>
                </div>
              </div>
              
            </div>
            




<div className="project-card">
              <div className="project-image">
                 <img src={p7} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Data Process</h3>
                <p>App for *** Company , about big Data process and commercial performance monitoring</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Express</span>
                  <span>Node</span>
                  <span>MongoDB</span>
                  <span>Restful Api</span>
                </div>
              </div>
            </div>









            <div className="project-card">
              <div className="project-image">
                 <img src={p4} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>CBG</h3>
                <p>Explore car brands, get personalized recommendations to choose wisely.</p>
                <div className="project-tags">
                  <span>Javascript</span>
                  <span>Css</span>
                  <span>Html</span>
                </div>
              </div>
            </div>
                   <div className="project-card">
              <div className="project-image">
                 <img src={p2} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Roles & Permissions </h3>
                <p>Dashboard for Roles & Permissions: Manage user access with secure, intuitive controls.</p>
                <div className="project-tags">
                  <span>Laravel</span>
                  <span>Bootstrap</span>
                  <span>MySql</span>
                </div>
              </div>
            </div>
                   <div className="project-card">
              <div className="project-image">
                 <img src={p1} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Ministère de l'enseignement supérieur</h3>
                <p>Ministry of higher education <br/>and scientific research Website</p>
                <div className="project-tags">
                  <span>Wordpress</span>
                  <span>Plugins</span>

                </div>
              </div>
            </div>
                   <div className="project-card">
              <div className="project-image">
                 <img src={p6} alt="Project 1" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Animal Store</h3>
                <p>Web App of Animal Store App: Browse, order, and add new pets with ease.</p>
                <div className="project-tags">
                  <span>Javascript</span>
                  <span>Php</span>
                  <span>MySql</span>
                  <span>Css</span>
                </div>
              </div>
              
            </div>
            <div className="project-card">
              <div className="project-image">
                 <img src={p8} alt="Project 8" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Tourism DZ</h3>
                <p>Tourism Website of algeria with most visited states in country</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Css</span>
                  <span>Api</span>
                  <span>Vite</span>

                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                 <img src={p9} alt="Project 9" />
                <div className="project-overlay">
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>Store App</h3>
                <p>full store modern app with admin dashboard and Product&Category management and more of functionalities</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express Js</span>
                  <span>MongoDB</span>
                  <span>Restful Api</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="projects-bg">
          <div className="grid-lines"></div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={`contact ${isVisible['contact'] ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div className="method-info">
          
                  <p>+213-657605130</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="method-info">
                  
                  <p>Abdelkahar.dev@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="method-info">
                  <p>Algeria, Tipaza</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/abdelkahar-benkhelif-387368275/" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/abdelkaharBen" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/abdou_piratee/" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
            </div>
          </div>
          <div className="contact-form">
            <h3>Send A Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="primary-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contact-bg">
          <div className="particles"></div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Abdelkahar</p>
          <div className="back-to-top" onClick={() => scrollToSection('home')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;