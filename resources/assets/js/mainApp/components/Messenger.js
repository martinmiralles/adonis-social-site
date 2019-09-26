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
      <section id="messenger">
        <div className="messenger-header">
          <div className="messenger-icon">
            <i className="fa fa-comments"/>
          </div>
          <div className="title">
            Messenger
          </div>
          <div className="options-icon">
            <i className="fa fa-ellipsis-v"/>
          </div>
        </div>
        <div className="users">
          <div className="users-container">
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user active">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user active">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user active">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user active">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
            <div className="user">
              <div className="user-img" style={{
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}></div>
              <div className="user-name">John Doe</div>
              <div className="conversation">
                <i className="fa fa-comment"/>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input type="text" name="name" defaultValue="" placeholder="Search"/>
        </div>
      </section>
    )
  }
}
