import Header from '../../components/Header';

const Sandubas = () => {
  document.title = "Projeto Sandubas - O Pombo";
  return (
    <main>
        <Header/>
        <div className='resp-container'>
            <h1>Projeto Sandubas</h1>
            <p>O Projeto Sandubas é uma parceria entre a ONG Mãos Invisíveis e o Jornal O Pombo, com o objetivo de arrecadar recursos para a realização de ações sociais. Durante os eventos realizados nos finais de semana no Colégio Integral, a equipe do projeto prepara e vende sanduíches artesanais, proporcionando uma opção saborosa aos participantes e incentivando a solidariedade na comunidade.</p>
            <p>Ao adquirir um desses sanduíches, os participantes dos eventos não apenas desfrutam de uma refeição deliciosa, mas também contribuem para a promoção de ações sociais realizadas pela ONG Mãos Invisíveis. O Projeto Sandubas é uma oportunidade de unir um simples lanche à solidariedade, demonstrando que pequenas ações podem ter um impacto significativo na construção de uma sociedade mais justa e engajada.</p>
            <p style={{marginBottom: 20}}>Acompanhe nosso <a href="https://instagram.com/opombo.jornal" target='_blank'>Instagram</a> para não perder nenhum evento e nosso lanche artesanal!</p>
            <a
                href="https://maosinvisiveis.com.br/#secao-ajude-fazendo-uma-doacao"
                target='_blank'
                className='button-large'
            >Apoie o Mãos Invisíveis</a>
        </div>
    </main>
  )
}

export default Sandubas