import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Chart from '../index'
import Tip from 'd3-tipy'
import offset from 'offset'
import * as d3 from 'd3'

const gen = n => {
  const data = []

  for (var i = n; i; i--) {
    data.push({
      bin: new Date(Date.now() - (i * 3600000)),
      value: Math.max(250, Math.random() * 3000 | 0)
    })
  }

  return data
}

class App extends Component {
  componentDidMount() {
    const tip = new Tip({
      format: d => d3.format(',')(d.value)
    })

    this.a = new Chart({
      target: this.refs.a,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.b = new Chart({
      target: this.refs.b,
      width: 220,
      height: 120,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.c = new Chart({
      target: this.refs.c,
      axisPadding: 5,
      barPadding: 15,
      tickSize: 3,
      mouseover: tip.show,
      mouseout: tip.hide,
      ease: 'easeElastic',
      color: ['RGB(0, 177, 240)', 'rgb(243, 43, 101)']
    })

    this.d = new Chart({
      target: this.refs.d,
      mouseover: tip.show,
      mouseout: tip.hide,
      yDomain: [0, 10000],
      barPadding: 5,
      type: 'rect',
      axis: false
    })

    this.a.render(gen(24))
    this.b.render(gen(10))
    this.c.render(gen(24))
    this.d.render(gen(24))
  }

  componentDidUpdate() {
    this.changeData()
  }

  changeData = _ => {
    const n = Math.max(15, Math.random() * 30 | 0)
    this.a.update(gen(n))
    this.b.update(gen(10), { animate: false })
    this.c.update(gen(24))
    this.d.update(gen(24))
  }

  render() {
    return <div>
      <div id="actions">
        <button onClick={this.changeData}>Animate</button>
      </div>

      <section>
        <h3>Defaults</h3>
        <p>Chart default settings.</p>
        <svg ref="a" className="chart"></svg>
      </section>

      <section>
        <h3>Small</h3>
        <p>Chart with a smaller size.</p>
        <svg ref="b" className="chart"></svg>
      </section>

      <section>
        <h3>Kitchen Sink</h3>
        <p>Chart with most settings configured.</p>
        <svg ref="c" className="chart"></svg>
      </section>

      <section>
        <h3>Histogram</h3>
        <p>Chart with rect type and colors.</p>
        <svg ref="d" className="chart"></svg>
      </section>

      <section>
        <h3>Reference</h3>
        <p>Chart reference image.</p>
        <img src="chart.png" width={500} />
      </section>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#release_nb'))
