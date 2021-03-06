export default function ContactForm() {
  return (
    <div className="mb4">
      <h4 className="f3 b lh-title mb3 tc">Para cualquier información dejenos su mensaje</h4>
      <form action="">
        <div className="flex-l mhn1-l">
          <div className="ph1-l w-50-l">
            <fieldset>
              <input type="text" id="name" name="name" placeholder="Nombre" className="w-100 mb2" />
              <label htmlFor="name">Name</label>
            </fieldset>
          </div>
          <div className="ph1-l w-50-l">
            <fieldset>
              <input type="email" id="email" name="email" placeholder="Email" className="w-100 mb2" />
              <label htmlFor="email">Correo</label>
            </fieldset>
          </div>
        </div>
        <fieldset>
          <textarea 
            id="message" name="message" 
            placeholder="Mensaje" 
            rows="8" cols="80" 
            className="w-100" 
          />
          <label htmlFor="message">Su mensaje</label>
        </fieldset>
        <div className="tc">
          <button type="submit" className="btn w-100 w-auto-ns raise">Enviar</button>
        </div>
      </form>
    </div>
  )
}