async function quantidadeUsuarios() {
    const url = 'https//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)  
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
           x : nomeDasRedes,
           y : quantidadeUsuarios,
           type:'bar',
           marker: {
            color: getComputedStyle(document.body). getPropertyValue('--prymary-color')
           }
        }
    ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    plotly.newplot(grafico, data)
  }

  quantidadeUsuarios()