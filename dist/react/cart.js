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
                { className: [this.props.className, 'dibsvg-svg dibsvg-cart'].join(' '), 'data-tn': 'cart', viewBox: '0 0 250 250' },
                React.createElement('path', { fill: 'none', d: 'M193.6,211.8c-4.7,0-8.6,3.9-8.6,8.7s3.9,8.7,8.6,8.7s8.6-3.9,8.6-8.7S198.3,211.8,193.6,211.8z' }),
                React.createElement('path', { fill: 'none', d: 'M100.4,211.8c-4.7,0-8.6,3.9-8.6,8.7s3.9,8.7,8.6,8.7c4.7,0,8.6-3.9,8.6-8.7S105.1,211.8,100.4,211.8z' }),
                React.createElement('path', { d: 'M61.6,53L50.8,7H0v11h42.2l9.5,40.4L74.1,181h149.5l25.1-128H61.6z M214.7,170H83.1L63.7,64h171.7L214.7,170z' }),
                React.createElement('path', { d: 'M100.4,199.8c-11.3,0-20.4,9.3-20.4,20.7s9.2,20.7,20.4,20.7s20.4-9.3,20.4-20.7S111.7,199.8,100.4,199.8z M100.4,229.1c-4.7,0-8.6-3.9-8.6-8.7s3.9-8.7,8.6-8.7c4.7,0,8.6,3.9,8.6,8.7S105.1,229.1,100.4,229.1z' }),
                React.createElement('path', { d: 'M193.6,199.8c-11.3,0-20.4,9.3-20.4,20.7s9.2,20.7,20.4,20.7s20.4-9.3,20.4-20.7S204.9,199.8,193.6,199.8z M193.6,229.1c-4.7,0-8.6-3.9-8.6-8.7s3.9-8.7,8.6-8.7s8.6,3.9,8.6,8.7S198.3,229.1,193.6,229.1z' }),
                React.createElement('polygon', { fill: 'none', points: '63.7,64 83.1,170 214.7,170 235.5,64' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;