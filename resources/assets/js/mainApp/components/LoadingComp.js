import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class LoadingComp extends Component {
  constructor () {
    super()
    this.state = {
      dropdown: false
    }
  }


  render () {
    return (
      <section id="loading-comp" className={(this.props.initialData == 'loading') ? 'active' : ''}>
        <div className="loading-icon">
          <div className="lds-css ng-scope">
          <div style={{width: '100%', height: '100%'}} className="lds-ripple">
          <div>
          </div>
          <div>
          </div>
          </div>
          </div>
        </div>

        <div className="loading-text">
          Loading!
        </div>
      </section>
    )
  }
}
