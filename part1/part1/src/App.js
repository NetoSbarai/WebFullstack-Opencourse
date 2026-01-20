const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Olá {props.nome}, você tem {props.idade} anos
      </p>
    </div>
  )
}


const Footer = () => {
  return (
    <div>
      Aplicação de Saudações criado por <a href='https://github.com/NetoSbarai'>Neto Sbarai</a>
    </div>
  )
}

const App = () => {
  const nome = 'Peter'
  const idade = 10

  return (
    <>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10} />
      <Hello nome={nome} idade={idade} />
      <Footer />
    </>
  )
}

export default App