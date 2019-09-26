import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Messenger extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div className="search-header">
        <div className="search-box">
          <input type="text" name="name" defaultValue="" />
          <div className="icon-section">
            <div className="noti">
              <i className="fa fa-bell"/>
              <div className="noti-number active">
                9+
              </div>
            </div>
            <div className="comments">
              <i className="fa fa-comment"/>
              <div className="noti-number active">
                3
              </div>
            </div>
            <div className="user">
              <i className="fa fa-user"/>
              <div className="noti-number active">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
