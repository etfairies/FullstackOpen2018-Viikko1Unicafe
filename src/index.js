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
        <div>
            <Statistic nimi="hyvä" arvo={props.hyva}/>
            <Statistic nimi="neutraali" arvo={props.neutraali}/>
            <Statistic nimi="huono" arvo={props.huono}/>
            <Statistic nimi="keskiarvo" arvo={keskiarvo}/>
            <Statistic nimi="positiivisia" arvo={positiivisia}/>
        </div>
    )
}

const Statistic = (props) => {
    if (props.nimi === "positiivisia") {
        return (
            <div>
                <p>{props.nimi} {props.arvo} %</p>
            </div>
        )
    }
    return (
        <div>
            <p>{props.nimi} {props.arvo}</p>
        </div>
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