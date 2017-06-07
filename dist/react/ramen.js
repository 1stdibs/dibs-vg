'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { className: [this.props.className, 'dibsvg-svg dibsvg-ramen'].join(' '), 'data-tn': 'ramen', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M98.2,17l-44,2.4c-0.2-1.4-0.5-2.6-0.9-3.6l42.2-7.3c1-0.2,1.6-1.1,1.4-2c-0.2-1-1.1-1.6-2-1.4l-43.4,7.5c-0.5-0.3-1.1-0.3-1.7,0c-0.2,0.1-0.3,0.2-0.4,0.4l-3.6,0.6c-0.1-0.2-0.2-0.3-0.2-0.3c-0.5-0.8-1.5-1.1-2.4-0.7c-0.6,0.3-0.9,1-0.9,1.6l-2.7,0.5c-0.3-0.8-0.6-1.3-0.7-1.4c-0.5-0.8-1.5-1.1-2.4-0.7c-0.8,0.5-1.1,1.5-0.7,2.4c0,0,0.1,0.1,0.2,0.3l-9.2,1.6c-0.9,0.2-1.6,1.1-1.4,2c0.1,0.9,0.9,1.5,1.7,1.5c0.1,0,0.2,0,0.3,0l9.7-1.7c0.1,0.5,0.2,1.1,0.3,1.7l-3.6,0.2c-1,0.1-1.7,0.9-1.7,1.8c0.1,0.9,0.8,1.7,1.7,1.7c0,0,0.1,0,0.1,0l3.5-0.2c-0.1,1.5-0.5,3.1-1.1,4.8C23.9,29.1,0,30.8,0,37.7c0,0.2,0,0.4,0.1,0.6C0,41.1-0.8,63.7,12.6,77.9c2,2.1,4.2,3.8,6.3,5.3V93c0,1,1.2,2,2.2,2h45.5c1,0,0.9-1,0.9-2V82.6c3-1.9,6.4-4.3,8.9-7.1c12-13.5,11.6-32.7,11.2-37.7c0-0.1-0.1-0.8-0.2-1c0,0-0.2-0.8-0.5-1.3c-4.3-4.7-22.1-6.3-33.4-6.8c0.7-2.1,1-4,1-5.8l44-2.4c1-0.1,1.7-0.9,1.7-1.8C99.9,17.7,99.1,16.9,98.2,17z M49.8,16.4c0.3,0.8,0.6,1.9,0.8,3.2l-3.1,0.2c-0.1-1.1-0.3-2-0.6-2.9L49.8,16.4z M40.7,18l2.9-0.5c0.2,0.7,0.4,1.5,0.5,2.5L41,20.1C40.9,19.4,40.8,18.6,40.7,18z M41.1,23.6l3.1-0.2c-0.1,1.6-0.4,3.3-1.1,5.1c-0.6,0-1.6,0-2.9,0C40.7,26.8,41,25.2,41.1,23.6z M84.2,37.7c-1.3,1.8-12.1,4.7-30.8,5.5c-1-1.1-4-5.1-1.4-11C71.5,32.8,82.8,35.8,84.2,37.7C84.2,37.7,84.2,37.7,84.2,37.7z M49.2,43.3c-0.7,0-1.5,0-2.3,0c-0.7-0.8-4.3-4.9-1.5-11.3c1,0,1.9,0,2.8,0C46.7,36.7,47.7,40.7,49.2,43.3z M40.3,43.4c-0.8-0.8-4.3-4.9-1.5-11.3c0.9,0,1.9,0,2.9,0c-1.6,4.7-0.6,8.7,0.9,11.3C41.8,43.4,41.1,43.4,40.3,43.4z M35,32.2c-1.5,4.6-0.5,8.4,0.9,11.1c-19.7-0.7-31.1-3.7-32.4-5.6C4.8,35.9,15.8,32.9,35,32.2z M64.4,91H21.9v-5.8c6.1,2.6,11.9,4,18.9,4c9,0,18.5-1.6,23.5-4.7V91zM74.1,73.2c-7.3,8.2-18.3,12.4-32.6,12.4c-11,0-19.7-3.4-26.1-10.2C5.4,64.9,3.8,48.9,3.6,41.8c10.2,5.1,38.8,5.1,40.3,5.1c1.5,0,30.4-0.1,40.5-5.2C84.4,48.8,83.1,63,74.1,73.2z M49.7,28.6c-1.1,0-2.1-0.1-2.9-0.1c0.6-1.9,0.9-3.6,0.9-5.3l3.1-0.2C50.8,24.8,50.5,26.6,49.7,28.6z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;