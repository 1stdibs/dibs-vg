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
                { className: [this.props.className, 'dibsvg-svg dibsvg-orange'].join(' '), 'data-tn': 'orange', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M99.9,7.3L99.9,7.3c-0.1-0.2-0.1-0.4-0.2-0.5c-0.2-0.3-0.4-0.5-0.7-0.6c0,0-0.1,0-0.1-0.1c-1.1-0.5-28.2-11.2-42.1-3c-4,2.4-6.6,6.1-7.6,11.1c-4.2,2.1-7.1,4.2-9,5.7c-1.7-8.6-8.5-11.1-8.6-11.1c-0.9-0.3-1.9,0.2-2.2,1.1c-0.1,0.5-0.1,0.9,0.1,1.4c0.2,0.4,0.6,0.7,1,0.9c0.1,0,8.8,3.3,6,17.1C16,30,0,45.5,0,64.6C0,84.1,17,100,37.9,100s37.9-15.9,37.9-35.4c0-18.8-15.7-34.2-35.8-35.3c0.3-1.8,0.5-3.5,0.5-5.1c1.2-1.1,4.3-3.8,9.9-6.6c4.7,3.7,21.1,13.4,48.8-8.4c0.2-0.2,0.4-0.3,0.5-0.6c0.1-0.1,0.1-0.3,0.2-0.4C100,7.9,100,7.6,99.9,7.3z M53.4,12.3c1-2.6,2.7-4.6,5.2-6.1c2.9-1.7,6.9-2.6,11.8-2.6c4.5,0,9.8,0.8,15.6,2.2C73.7,6.1,62.8,8.3,53.4,12.3z M93.2,9.3c-20.8,14.6-33.8,9.8-39,6.6C65.2,11.1,78.3,8.9,93.2,9.3z M72.4,64.6c0,17.5-15.5,31.8-34.5,31.8c-19,0-34.5-14.3-34.5-31.8c0-17.5,15.5-31.8,34.5-31.8C56.9,32.8,72.4,47.1,72.4,64.6z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;