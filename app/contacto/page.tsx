const ContactoPage = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <section>
        <h2>Información de Contacto</h2>
        <p>WhatsApp: +52 56 2020 2210</p>
        {/* Other contact information can be added here */}
      </section>
      <section>
        <h2>Consulta Personalizada</h2>
        <p>Para obtener una consulta personalizada, por favor contacta a través de WhatsApp.</p>
        <a
          href="https://wa.me/5256202022210?text=Hola,%20me%20interesa%20una%20consulta%20personalizada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Agendar Consulta</button>
        </a>
        {/* Other consultation buttons can be added here */}
      </section>
    </div>
  )
}

export default ContactoPage
