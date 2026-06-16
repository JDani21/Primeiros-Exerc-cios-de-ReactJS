function App4() {
  const numeros = [5, 10, 15];
  const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

  return (
    <>
    <p>Resultado da soma: {soma}</p>
    </>
  )
}

export default App4