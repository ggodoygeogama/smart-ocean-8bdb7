// import Link from 'next/link'
import NewsletterForm from './newsletter-form'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-black ph3 pv4 white">
      <div className="mw7 center pt3">
        <div className="measure-narrow center mb4">
          <img className="db w4 center mb4 br0" src="/img/logo.svg" alt="Kaldi logo" />
          <p className="f3 lh-title light-gray b tc mb2">Suscripción a nuestras actualizaciones</p>
          <p>Reciba noticias increíbles de nosotros en su bandeja de entrada cada dos semanas. Sea el primero en conocer nuevos productos.</p>
          <NewsletterForm />
        </div>
        <div className="flex-ns justify-between">
          <div>
            <h3 className="f4 b lh-title mb1 primary">Kaldi</h3>
            <ul className="mb3">
              <li><a href="/" className="link">Home</a></li>
              <li><a href="/products" className="link">Nuestros productos</a></li>
              <li><a href="/values" className="link">Acerca de Nosotros</a></li>
              <li><a href="/post" className="link">Blog</a></li>
              <li><a href="/contact" className="link">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb1 primary">Saber más</h3>
            <ul className="mb3">
              <li><a href="/post/jamaica-blue/" className="link">Últimas ofertas</a></li>
              <li><a href="/contact" className="link">Programa y cita</a></li>
            </ul>
          </div>
          <div>
            <h3 className="f4 b lh-title mb2 primary">Redes sociales</h3>
            <ul className="mhn2">
              <SocialIcon link="#" iconPath="/img/icons-facebook.svg" />
              <SocialIcon link="#" iconPath="/img/icons-twitter.svg" />
              <SocialIcon link="#" iconPath="/img/icons-instagram.svg" />
              <SocialIcon link="#" iconPath="/img/icons-vimeo.svg" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
