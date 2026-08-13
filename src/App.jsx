import { useEffect, useId, useState } from 'react'
import fireIcon from '../images/icons/fire.svg'
import { testimonials, tours } from './data/tours.js'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'tours', label: 'Tours' },
  { id: 'about', label: 'About us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

function ArrowIcon({ direction = 'down' }) {
  return (
    <svg
      className={`arrow-icon arrow-icon--${direction}`}
      aria-hidden="true"
      viewBox="0 0 48 48"
    >
      <path d="M10 15l14 14 14-14M10 27l14 14 14-14" />
    </svg>
  )
}

function SectionControls({ currentId, onNavigate }) {
  const currentIndex = sections.findIndex((section) => section.id === currentId)
  const previousSection = sections[currentIndex - 1]
  const nextSection = sections[currentIndex + 1]

  return (
    <nav className="section-controls" aria-label="Section navigation">
      {previousSection && (
        <button
          className="section-control section-control--previous"
          type="button"
          onClick={() => onNavigate(previousSection.id)}
          aria-label={`Previous section: ${previousSection.label}`}
        >
          <ArrowIcon direction="up" />
        </button>
      )}
      {nextSection && (
        <button
          className="section-control section-control--next"
          type="button"
          onClick={() => onNavigate(nextSection.id)}
          aria-label={`Next section: ${nextSection.label}`}
        >
          <ArrowIcon />
        </button>
      )}
    </nav>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M6 6l20 20M26 6 6 26" />
    </svg>
  )
}

function Header({ isHome, isIntroPlaying, menuOpen, setMenuOpen, onNavigate }) {
  return (
    <header
      className={`site-header ${isHome ? 'is-home' : ''} ${isIntroPlaying ? 'is-intro-playing' : ''}`}
    >
      <a
        className="brand"
        href="#home"
        aria-label="Tour home"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('home')
        }}
      >
        TOUR<span>.</span>
      </a>

      <button
        className={`menu-trigger ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen(true)}
      >
        <span>Menu</span>
        <span className="menu-trigger__dot" aria-hidden="true" />
      </button>

      <div
        className={`menu-scrim ${menuOpen ? 'is-open' : ''}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <nav
        id="site-navigation"
        className={`site-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="site-nav__topline">
          <span>Explore</span>
          <button
            className="icon-button icon-button--light"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <ul>
          {sections.map((item, index) => (
            <li key={item.id}>
              <span aria-hidden="true">0{index + 1}</span>
              <a
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate(item.id)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="site-nav__note">Go outside. Stay curious.</p>
      </nav>
    </header>
  )
}

function Hero({ isActive, isIntroPlaying, onBook, onNavigate }) {
  return (
    <section
      className={`hero screen-section ${isIntroPlaying ? 'is-intro-playing' : 'is-intro-complete'}`}
      id="home"
      aria-labelledby="hero-title"
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className="hero__background" aria-hidden="true" />
      <div className="hero__shade" />
      <div className="page-shell hero__content">
        <h1 id="hero-title">
          <span className="hero__title-line hero__title-line--one">Feel the</span>
          <span className="hero__title-line hero__title-line--two">Universe</span>
        </h1>
        <button className="primary-button" type="button" onClick={onBook}>
          Order camping tour
        </button>
      </div>
      <SectionControls currentId="home" onNavigate={onNavigate} />
    </section>
  )
}

function Difficulty({ level, showLabel = false }) {
  return (
    <span className="difficulty" aria-label={`Difficulty ${level} out of 3`}>
      {showLabel && <span>Difficulty</span>}
      <span className="difficulty__icons" aria-hidden="true">
        {Array.from({ length: level }, (_, index) => (
          <img src={fireIcon} alt="" key={index} />
        ))}
      </span>
    </span>
  )
}

function TourCard({ tour, onSelect }) {
  return (
    <article className="tour-card">
      <button
        className="tour-card__button"
        type="button"
        onClick={() => onSelect(tour)}
        aria-label={`View ${tour.name} tour details`}
      >
        <span className="tour-card__image-wrap">
          <img src={tour.cardImage} alt={`Landscape on the ${tour.name} tour`} />
        </span>
        <span className="tour-card__body">
          <strong>tour {tour.name}</strong>
          <span className="tour-card__meta">group {tour.groupSize} persons</span>
        </span>
      </button>
    </article>
  )
}

function Tours({ isActive, onNavigate, onSelect }) {
  return (
    <section
      className="tours section-dark screen-section"
      id="tours"
      aria-labelledby="tours-title"
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className="page-shell tours__content">
        <h2 className="visually-hidden" id="tours-title">Choose a camping tour</h2>

        <div className="tour-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onSelect={onSelect} />
          ))}
        </div>

        <blockquote className="camping-quote">
          “camping – because therapy is expensive.”
        </blockquote>
      </div>
      <SectionControls currentId="tours" onNavigate={onNavigate} />
    </section>
  )
}

function About({ isActive, onBook, onNavigate }) {
  return (
    <section
      className="about screen-section"
      id="about"
      aria-labelledby="about-title"
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className="about__shade" />
      <div className="page-shell about__layout">
        <div className="about__intro">
          <p className="eyebrow">About us</p>
          <h2 id="about-title">The best stories start where the road ends.</h2>
        </div>
        <div className="about__panel">
          <p className="about__lead">
            TOUR is a small crew of guides, hikers and campfire cooks. We
            design simple, human adventures with enough challenge to feel
            alive and enough care to feel at home.
          </p>
          <p>
            We travel in small groups, respect every landscape and work with
            local hosts along the route. No rushed checklists — just good
            trails, clear skies and time to look around.
          </p>
          <dl className="about__stats">
            <div>
              <dt>8</dt>
              <dd>years outdoors</dd>
            </div>
            <div>
              <dt>54</dt>
              <dd>routes completed</dd>
            </div>
            <div>
              <dt>4.9</dt>
              <dd>guest rating</dd>
            </div>
          </dl>
          <button className="text-button" type="button" onClick={onBook}>
            Plan a trip <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <SectionControls currentId="about" onNavigate={onNavigate} />
    </section>
  )
}

function Reviews({ isActive, onNavigate }) {
  return (
    <section
      className="reviews screen-section"
      id="reviews"
      aria-labelledby="reviews-title"
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className="reviews__shade" />
      <div className="page-shell reviews__content">
        <div className="section-heading section-heading--light">
          <div>
            <p className="eyebrow">Field notes</p>
            <h2 id="reviews-title">What stays after the trail.</h2>
          </div>
          <p>Real words from people who shared the road with us.</p>
        </div>
        <div className="review-grid">
          {testimonials.map((testimonial, index) => (
            <figure className="review-card" key={testimonial.name}>
              <span className="review-card__number">0{index + 1}</span>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.tour}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <SectionControls currentId="reviews" onNavigate={onNavigate} />
    </section>
  )
}

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="fill-dot" cx="17.5" cy="6.7" r="1" />
      </svg>
    )
  }

  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4c-.4 0-1.7-.2-3-.2-3 0-5 1.8-5 5.2V9H7v4h3v8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 2.7c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.8 4.6a4 4 0 0 0 1.2 5.3c-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.7 3.2 4-.3.1-.7.2-1 .2-.2 0-.5 0-.7-.1a4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2 18.1 11.3 11.3 0 0 0 8.2 20c7.4 0 11.5-6.2 11.5-11.5V8c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  )
}

function Footer({ isActive, onBook, onNavigate }) {
  return (
    <footer
      className="footer screen-section"
      id="contact"
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className="page-shell footer__top">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Meet us under the stars.</h2>
        </div>
        <button className="primary-button primary-button--light" type="button" onClick={onBook}>
          Start your journey <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="page-shell footer__grid">
        <div>
          <a
            className="footer__brand"
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('home')
            }}
          >TOUR<span>.</span></a>
          <p>Camping journeys for curious people.</p>
        </div>
        <div>
          <h3>Contact us</h3>
          <a href="tel:+380123456789">+380 123 456 789</a>
          <a href="mailto:camptour@gmail.com">camptour@gmail.com</a>
        </div>
        <div>
          <h3>Navigate</h3>
          {sections.slice(1, 4).map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(section.id)
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Follow us</h3>
          <div className="social-list">
            {['instagram', 'facebook', 'twitter'].map((network) => (
              <a href="#home" aria-label={network} key={network}>
                <SocialIcon type={network} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="page-shell footer__bottom">
        <span>© {new Date().getFullYear()} TOUR</span>
      </div>
      <SectionControls currentId="contact" onNavigate={onNavigate} />
    </footer>
  )
}

function ModalShell({ children, labelId, onClose, modifier = '' }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className={`modal-backdrop ${modifier}`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={labelId}>
        <button className="icon-button modal__close" type="button" aria-label="Close dialog" onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

function TourModal({ tour, onClose, onReviews }) {
  const titleId = useId()

  return (
    <ModalShell labelId={titleId} onClose={onClose} modifier="tour-modal">
      <div className="tour-modal__image">
        <img src={tour.largeImage} alt={`A moment from the ${tour.name} tour`} />
      </div>
      <div className="tour-modal__content">
        <h2 id={titleId}>tour {tour.name}</h2>
        <dl className="tour-details">
          <div>
            <dt>Duration</dt>
            <dd>{tour.duration}</dd>
          </div>
          <div>
            <dt>Number of people</dt>
            <dd>{tour.groupSize} persons</dd>
          </div>
          <div>
            <dt>Complexity</dt>
            <dd><Difficulty level={tour.difficulty} /></dd>
          </div>
          <div className="tour-details__route">
            <dt>Route</dt>
            <dd>{tour.route}</dd>
          </div>
        </dl>
        <div className="tour-modal__actions">
          <button className="primary-button primary-button--dark" type="button" onClick={onReviews}>
            View reviews
          </button>
        </div>
      </div>
    </ModalShell>
  )
}

function BookingModal({ initialTour, onClose }) {
  const titleId = useId()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
  }

  return (
    <ModalShell labelId={titleId} onClose={onClose} modifier="booking-modal">
      {submitted ? (
        <div className="booking-success">
          <span aria-hidden="true">✓</span>
          <p className="eyebrow">Request received</p>
          <h2 id={titleId}>See you outside.</h2>
          <p>Thank you. We will call you back within one hour to plan the details.</p>
          <button className="primary-button primary-button--dark" type="button" onClick={onClose}>
            Back to the site
          </button>
        </div>
      ) : (
        <div className="booking-form-wrap">
          <div className="booking-form-wrap__intro">
            <p className="eyebrow">Start a journey</p>
            <h2 id={titleId}>Tell us where you want to go.</h2>
            <p>
              Leave your details and our guide will call you back within one hour.
            </p>
          </div>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                <span>First name</span>
                <input name="firstName" type="text" autoComplete="given-name" minLength="2" placeholder="Mark" required autoFocus />
              </label>
              <label>
                <span>Last name</span>
                <input name="lastName" type="text" autoComplete="family-name" minLength="2" placeholder="Taylor" required />
              </label>
            </div>
            <label>
              <span>Phone number</span>
              <input name="phone" type="tel" autoComplete="tel" minLength="9" placeholder="+380 123 456 789" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>Choose a tour</span>
              <select name="tour" defaultValue={initialTour?.id ?? ''}>
                <option value="">Help me choose</option>
                {tours.map((tour) => (
                  <option value={tour.id} key={tour.id}>Tour {tour.name} — {tour.duration}</option>
                ))}
              </select>
            </label>
            <button className="primary-button primary-button--dark" type="submit">
              Send request <span aria-hidden="true">↗</span>
            </button>
            <small>By sending this form, you agree that we may contact you about your trip.</small>
          </form>
        </div>
      )}
    </ModalShell>
  )
}

export default function App() {
  const initialSection = sections.findIndex(
    (section) => section.id === window.location.hash.slice(1),
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null)
  const [bookingTour, setBookingTour] = useState(undefined)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [isIntroPlaying, setIsIntroPlaying] = useState(
    (initialSection < 0 || initialSection === 0) &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [currentSection, setCurrentSection] = useState(
    initialSection >= 0 ? initialSection : 0,
  )

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!isIntroPlaying) return undefined

    const introTimer = window.setTimeout(() => setIsIntroPlaying(false), 2500)
    return () => window.clearTimeout(introTimer)
  }, [isIntroPlaying])

  useEffect(() => {
    const syncSectionFromUrl = () => {
      const sectionIndex = sections.findIndex(
        (section) => section.id === window.location.hash.slice(1),
      )

      if (sectionIndex >= 0) setCurrentSection(sectionIndex)
    }

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home')
    }

    window.addEventListener('popstate', syncSectionFromUrl)
    window.addEventListener('hashchange', syncSectionFromUrl)

    return () => {
      window.removeEventListener('popstate', syncSectionFromUrl)
      window.removeEventListener('hashchange', syncSectionFromUrl)
    }
  }, [])

  function navigateTo(sectionId) {
    const sectionIndex = sections.findIndex((section) => section.id === sectionId)
    if (sectionIndex < 0) return

    setCurrentSection(sectionIndex)
    if (sectionId !== 'home') setIsIntroPlaying(false)
    setMenuOpen(false)

    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  function openBooking(tour) {
    setSelectedTour(null)
    setBookingTour(tour)
    setBookingOpen(true)
  }

  function showReviews() {
    setSelectedTour(null)
    navigateTo('reviews')
  }

  return (
    <>
      <Header
        isHome={currentSection === 0}
        isIntroPlaying={isIntroPlaying}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={navigateTo}
      />
      <main
        className="section-track"
        style={{ '--section-index': currentSection }}
      >
        <Hero
          isActive={currentSection === 0}
          isIntroPlaying={isIntroPlaying}
          onBook={() => openBooking()}
          onNavigate={navigateTo}
        />
        <Tours
          isActive={currentSection === 1}
          onNavigate={navigateTo}
          onSelect={setSelectedTour}
        />
        <About
          isActive={currentSection === 2}
          onBook={() => openBooking()}
          onNavigate={navigateTo}
        />
        <Reviews isActive={currentSection === 3} onNavigate={navigateTo} />
        <Footer
          isActive={currentSection === 4}
          onBook={() => openBooking()}
          onNavigate={navigateTo}
        />
      </main>

      {selectedTour && (
        <TourModal
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
          onReviews={showReviews}
        />
      )}
      {bookingOpen && (
        <BookingModal initialTour={bookingTour} onClose={() => setBookingOpen(false)} />
      )}
    </>
  )
}
