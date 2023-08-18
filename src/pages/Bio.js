const Bio = () => {
  return (
    <div className='bio-container'>
        <img
            src="https://opomboapi.vercel.app/logo-square.png"
            style={{width: '8rem'}}
            alt="logo"
        />
        <h1>O Pombo Jornal</h1>
        <p>O verdadeiro jornal do Colégio Integral.</p>
        <div className='bio-line'></div>
        <a className='bio-btn' href="/">Postagens</a>
        <a className='bio-btn' href="/sobre">Sobre nós</a>
        <a className='bio-btn' href="/autores">Autores</a>
        <a className='bio-btn' href="https://instagram.com/opombo.jornal" target='_blank'>Instagram</a>
    </div>
  )
}

export default Bio