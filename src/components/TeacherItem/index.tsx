import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://observatoriodatv.uol.com.br/wp-content/uploads/2017/08/escolinha.jpg" alt="Raimundo Notato"/>
        <div>
          <strong>Raimundo Nonato</strong>
          <span>Língua Portuguesa</span>
        </div>
      </header>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis.
        <br/> <br/>
        Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Manduma pindureta quium dia nois paga.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;