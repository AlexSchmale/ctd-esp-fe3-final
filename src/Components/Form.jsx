import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [thanks, setThanks] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (name.length >5 &&  validEmail.test(email) ) {
      setError(false)
      setThanks(true)
      setNameMessage(name)
      setName('')
      setEmail('')

    }else{
      setError(true)
      setThanks(false)
      console.log('invalido');
    }
  }


  return (
    <div className="form-container">
      
      <form className="form" onSubmit={handleSubmit}>
        <h4>Newsletter</h4>
        <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>

      {error && <p>❌ Por favor verifique su información nuevamente </p>}
      {thanks&& <p>✅ Gracias {nameMessage}, te contactaremos cuando antes vía mail </p>}
    </div>
  );
};

export default Form;
