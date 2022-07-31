import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Kontakt() {
  return (

    <Container>
        <h1 className='pageTitle'>Kontakt</h1>
        <p>
            Aitäh, et tunned huvi minu tööde kohta!
        </p>
        <p>
            Kui soovid küsida päringute, kirjuta mulle otse <a href="mailto:info@anneliisvoore.ee">info@anneliisvoore.ee</a>.
            Vastan 24h jooksul.
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33580.428285156566!2d26.753178749358415!3d58.26217836252866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb3aebfdfc7aa9%3A0xa91e5f4ce7187c82!2sVana-Kuuste%2C%20Tartu%20County%2C%20Estonia!5e0!3m2!1sen!2snz!4v1659306804205!5m2!1sen!2snz" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
  )
}
