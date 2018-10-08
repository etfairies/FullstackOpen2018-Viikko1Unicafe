import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <div>
        <button onClick={props.toiminto}>{props.nimi}</button>
        </div>
    )
}

const Statistics = (props) => {
    const yhteensa = props.hyva + props.neutraali + props.huono
    let keskiarvo = (props.hyva - props.huono) / yhteensa
    let positiivisia = props.hyva / yhteensa * 100

    if (yhteensa === 0) {
        keskiarvo = 0
        positiivisia = 0
        return (
            <p>ei yhtään palautetta annettu</p> 
        )
    }
    
    return (
        <table>
            <Statistic nimi="hyvä" arvo={props.hyva} merkki=""/>
            <Statistic nimi="neutraali" arvo={props.neutraali} merkki=""/>
            <Statistic nimi="huono" arvo={props.huono} merkki=""/>
            <Statistic nimi="keskiarvo" arvo={keskiarvo.toFixed(1)} merkki=""/>
            <Statistic nimi="positiivisia" arvo={positiivisia.toFixed(1)} merkki="%"/>
        </table>
    )
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.nimi}</td>
            <td>{props.arvo}</td>
            <td>{props.merkki}</td>
        </tr>
    )
}

class App extends React.Component { 
  constructor(props) {
      super(props)
      this.state = {
          hyva: 0,
          neutraali: 0,
          huono: 0
      }
  }

  klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1
    })
  }

  klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1
    })
  }

  klikHuono = () => {
      this.setState({
        huono: this.state.huono + 1
    })
  }


  render() {
    return (
    <div>
        <h1>Anna palautetta</h1>
        <div>
            <Button toiminto={this.klikHyva} nimi="hyva"/>
            <Button toiminto={this.klikNeutraali} nimi="neutraali"/>
            <Button toiminto={this.klikHuono} nimi="huono"/>
        </div>
        <div>
            <h1>Statistiikka</h1>
            <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono}/>
        </div>
    </div>
  )
}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)