import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Posts extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }

  showLatestPost() {
    if(this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.map((post, index) => {
        return (<div className="update-container" key={index}>
          <div className="author-info">
            <a href="#" className="user-img" style={{
              backgroundImage: `url('${post.profile_img}')`
            }}/>
            <div className="info">
              <a href="/profile">{`${post.first_name} ${post.last_name}`}</a>
              shared a
              <a href="#">
                {(post.type == 'text') ? 'story' : 'image'}</a>
            </div>
            <div className="time-stamp">
              1 hour ago
            </div>
          </div>
          <div className="media">
            <div className={`${(post.type == 'text') ? 'story' : 'image'}`} style={{
                background: 'url("https://nc3t.com/wp-content/uploads/2015/03/Inspiration-words.jpg")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}></div>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer?</h3>
                <p>
                  {post.content}
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fa fa-thumbs-up"/>
                  </div>
                </div>
                <div className="other-users">
                  Alberta Severin and 6 others liked update
                </div>
                <div className="comment-stats">4 comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={80} defaultValue={""}/>
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fa fa-share"/>
                  </div>
                  <div className="like-btn">
                    <i className="fa fa-thumbs-up"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      })
    }

  }
  render() {
    return (<section id="posts">
      {this.showLatestPost()}
    </section>)
  }
}
