webpackJsonp([0],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(339);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(136);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(135);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(103);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposeSection = function (_Component) {
  (0, _inherits3.default)(ComposeSection, _Component);

  function ComposeSection() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ComposeSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.submitForm = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.post('/api/post', {
                content: _this.state.post_content,
                user_id: _this.props.initialData.userInfo.id,
                type: 'text'
              });

            case 3:
              post = _context.sent;

              console.log(post);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    }));

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ComposeSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'compose-section' },
        _react2.default.createElement('textarea', { name: 'post_content', rows: 8, cols: 80, defaultValue: "", onChange: this.handleChange, value: this.state.post_content }),
        _react2.default.createElement('div', { className: 'user-img' }),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(
            'div',
            { className: 'button photo-btn' },
            _react2.default.createElement('i', { className: 'fa fa-camera' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button video-btn' },
            _react2.default.createElement('i', { className: 'fa fa-play-circle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button send-btn', onClick: this.submitForm },
            _react2.default.createElement('i', { className: 'fa fa-paper-plane' })
          )
        )
      );
    }
  }]);
  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = function (_Component) {
  (0, _inherits3.default)(Posts, _Component);

  function Posts() {
    (0, _classCallCheck3.default)(this, Posts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Posts, [{
    key: 'showLatestPost',
    value: function showLatestPost() {
      if (this.props.initialData.latestPosts != undefined) {
        return this.props.initialData.latestPosts.map(function (post, index) {
          return _react2.default.createElement(
            'div',
            { className: 'update-container', key: index },
            _react2.default.createElement(
              'div',
              { className: 'author-info' },
              _react2.default.createElement('a', { href: '#', className: 'user-img', style: {
                  backgroundImage: 'url(\'' + post.profile_img + '\')'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'info' },
                _react2.default.createElement(
                  'a',
                  { href: '/profile' },
                  post.first_name + ' ' + post.last_name
                ),
                'shared a',
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  post.type == 'text' ? 'story' : 'image'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'time-stamp' },
                '1 hour ago'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'media' },
              _react2.default.createElement('div', { className: '' + (post.type == 'text' ? 'story' : 'image'), style: {
                  background: 'url("https://nc3t.com/wp-content/uploads/2015/03/Inspiration-words.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'padding-container' },
              _react2.default.createElement(
                'div',
                { className: 'grey-container' },
                _react2.default.createElement(
                  'div',
                  { className: 'update-info' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    'How to become a developer?'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    post.content
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'update-stats' },
                  _react2.default.createElement(
                    'div',
                    { className: 'icon-section' },
                    _react2.default.createElement(
                      'div',
                      { className: 'like-circle' },
                      _react2.default.createElement('i', { className: 'fa fa-thumbs-up' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'other-users' },
                    'Alberta Severin and 6 others liked update'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'comment-stats' },
                    '4 comments'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'compose-comment' },
                  _react2.default.createElement('textarea', { name: 'name', rows: 8, cols: 80, defaultValue: "" }),
                  _react2.default.createElement(
                    'div',
                    { className: 'buttons' },
                    _react2.default.createElement(
                      'div',
                      { className: 'repost-btn' },
                      _react2.default.createElement('i', { className: 'fa fa-share' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'like-btn' },
                      _react2.default.createElement('i', { className: 'fa fa-thumbs-up' })
                    )
                  )
                )
              )
            )
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'posts' },
        this.showLatestPost()
      );
    }
  }]);
  return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(137);

var _axios = __webpack_require__(103);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(133);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(134);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        initialData: this.props.initialData
      }, function () {
        console.log(_this2.props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'content-area' },
        _react2.default.createElement(_ComposeSection2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
        _react2.default.createElement(_Posts2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData })
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftMenu = function (_Component) {
  (0, _inherits3.default)(LeftMenu, _Component);

  function LeftMenu() {
    (0, _classCallCheck3.default)(this, LeftMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LeftMenu, [{
    key: 'render',
    value: function render() {
      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      } else {
        var _props$initialData$us = this.props.initialData.userInfo,
            first_name = _props$initialData$us.first_name,
            last_name = _props$initialData$us.last_name;

        return _react2.default.createElement(
          'section',
          { id: 'left-menu' },
          _react2.default.createElement(
            'div',
            { className: 'account-dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              _react2.default.createElement('i', { className: 'fa fa-angellist' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'name', onClick: this.clickedDropdown },
              first_name + ' ' + last_name
            ),
            _react2.default.createElement(
              'div',
              { className: 'icon', onClick: this.clickedDropdown },
              _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'dropdown ' + (this.state.dropdown ? 'active' : '') },
              _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/account' },
                  'account'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '/logout' },
                  'logout'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'groups' },
            _react2.default.createElement(
              'div',
              { className: 'group' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Title'
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/logout' },
                    'Logout'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Link'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Link'
                )
              )
            )
          )
        );
      }
    }
  }]);
  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingComp = function (_Component) {
  (0, _inherits3.default)(LoadingComp, _Component);

  function LoadingComp() {
    (0, _classCallCheck3.default)(this, LoadingComp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingComp.__proto__ || Object.getPrototypeOf(LoadingComp)).call(this));

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LoadingComp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'loading-comp', className: this.props.initialData == 'loading' ? 'active' : '' },
        _react2.default.createElement(
          'div',
          { className: 'loading-icon' },
          _react2.default.createElement(
            'div',
            { className: 'lds-css ng-scope' },
            _react2.default.createElement(
              'div',
              { style: { width: '100%', height: '100%' }, className: 'lds-ripple' },
              _react2.default.createElement('div', null),
              _react2.default.createElement('div', null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'loading-text' },
          'Loading!'
        )
      );
    }
  }]);
  return LoadingComp;
}(_react.Component);

exports.default = LoadingComp;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'messenger' },
        _react2.default.createElement(
          'div',
          { className: 'messenger-header' },
          _react2.default.createElement(
            'div',
            { className: 'messenger-icon' },
            _react2.default.createElement('i', { className: 'fa fa-comments' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'Messenger'
          ),
          _react2.default.createElement(
            'div',
            { className: 'options-icon' },
            _react2.default.createElement('i', { className: 'fa fa-ellipsis-v' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'users' },
          _react2.default.createElement(
            'div',
            { className: 'users-container' },
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('div', { className: 'user-img', style: {
                  background: 'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg")',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'John Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                _react2.default.createElement('i', { className: 'fa fa-comment' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: '', placeholder: 'Search' })
        )
      );
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(136);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(135);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(137);

var _axios = __webpack_require__(103);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(133);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(134);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Profile);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.followUser = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$props$routeProp, match, location, history, self, userProfile, _userProfile;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props$routeProp = _this.props.routeProps, match = _this$props$routeProp.match, location = _this$props$routeProp.location, history = _this$props$routeProp.history;
              self = _this;

              if (!_this.state.following) {
                _context.next = 16;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return _axios2.default.get('/api/user/' + match.params.id + '/unfollow');

            case 6:
              userProfile = _context.sent;

              self.setState({
                following: !self.state.following
              });
              console.log(userProfile.data);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](3);

              console.log(_context.t0);

            case 14:
              _context.next = 27;
              break;

            case 16:
              _context.prev = 16;
              _context.next = 19;
              return _axios2.default.get('/api/user/' + match.params.id + '/follow');

            case 19:
              _userProfile = _context.sent;

              self.setState({
                following: !self.state.following
              });
              console.log(_userProfile.data);
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t1 = _context['catch'](16);

              console.log(_context.t1);

            case 27:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[3, 11], [16, 24]]);
    }));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // console.log(this.props)
      var _props$routeProps = this.props.routeProps,
          match = _props$routeProps.match,
          location = _props$routeProps.location,
          history = _props$routeProps.history;

      var self = this;
      var getUser = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var userProfile;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _axios2.default.get('/api/user/' + match.params.id);

                case 3:
                  userProfile = _context2.sent;

                  console.log(userProfile);
                  self.setState({
                    initialData: self.props.initialData,
                    userProfile: userProfile.data.user[0],
                    following: userProfile.data.following
                  }, function () {
                    console.log(self.state);
                  });
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2['catch'](0);

                  console.log(_context2.t0);

                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 8]]);
        }));

        return function getUser() {
          return _ref2.apply(this, arguments);
        };
      }();
      getUser();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.userProfile !== undefined) {
        var _state$userProfile = this.state.userProfile,
            first_name = _state$userProfile.first_name,
            last_name = _state$userProfile.last_name,
            profile_img = _state$userProfile.profile_img;

        return _react2.default.createElement(
          'div',
          { className: 'content-area profile-page' },
          _react2.default.createElement(
            'div',
            { className: 'user-img' },
            _react2.default.createElement('img', { src: '' + profile_img })
          ),
          _react2.default.createElement(
            'div',
            { className: 'info' },
            _react2.default.createElement(
              'h1',
              null,
              first_name + ' ' + last_name
            ),
            _react2.default.createElement(
              'div',
              { className: 'follow-btn', onClick: this.followUser },
              this.state.following ? 'Unfollow' : 'Follow'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'content-area profile-page' },
          'Loading'
        );
      }
    }
  }]);
  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search-header' },
        _react2.default.createElement(
          'div',
          { className: 'search-box' },
          _react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: '' }),
          _react2.default.createElement(
            'div',
            { className: 'icon-section' },
            _react2.default.createElement(
              'div',
              { className: 'noti' },
              _react2.default.createElement('i', { className: 'fa fa-bell' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '9+'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'comments' },
              _react2.default.createElement('i', { className: 'fa fa-comment' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '3'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('i', { className: 'fa fa-user' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '1'
              )
            )
          )
        )
      );
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(136);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(135);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(137);

var _axios = __webpack_require__(103);

var _axios2 = _interopRequireDefault(_axios);

var _Home = __webpack_require__(305);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(309);

var _Profile2 = _interopRequireDefault(_Profile);

var _LeftMenu = __webpack_require__(306);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _Messenger = __webpack_require__(308);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _SearchHeader = __webpack_require__(310);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _ComposeSection = __webpack_require__(133);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(134);

var _Posts2 = _interopRequireDefault(_Posts);

var _LoadingComp = __webpack_require__(307);

var _LoadingComp2 = _interopRequireDefault(_LoadingComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'

    };
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      var getInitialData = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var initialData;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get('/api/initialApp');

                case 3:
                  initialData = _context.sent;


                  self.setState({
                    initialData: initialData.data
                  }, function () {
                    console.log(self.state);
                  });
                  // return initialData.data
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        return function getInitialData() {
          return _ref.apply(this, arguments);
        };
      }();
      getInitialData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'app-container home-page' },
          _react2.default.createElement(_LoadingComp2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(_LeftMenu2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(
            'section',
            { id: 'content-container' },
            _react2.default.createElement(_SearchHeader2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component(props) {
                return _react2.default.createElement(_Home2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/profile/:id', component: function component(props) {
                return _react2.default.createElement(_Profile2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } })
          ),
          _react2.default.createElement(_Messenger2.default, null)
        )
      );
    }
  }]);
  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[332]);