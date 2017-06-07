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
                { className: [this.props.className, 'dibsvg-svg dibsvg-exclamation-triangle'].join(' '), 'data-tn': 'exclamation-triangle', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M247.1,218.8c0,0-113.7-199.6-116.2-203c-4.3-5.7-11.3-6.3-16.3,0C108.4,23.6,2.1,218.4,2.1,218.4c-5,12.8,3.2,20.3,10.9,20.3h226C246.8,238.6,252.9,228.2,247.1,218.8z M122.9,77c7.2,0,12.9,6.3,12.9,14.4c0,2.6-0.9,9.7-2.2,20.4c-2,16.1-4.6,39.3-5.8,58.3l-0.2,2.7l-9.8-0.1l-0.1-2.6c-0.8-19.8-3.8-44.2-5.7-59.9c-1.2-9.4-1.9-15.9-1.9-18.4C110,83.5,115.7,77,122.9,77z M122.7,213.2c-7.7,0-13.8-6.1-13.8-13.8c0-7.7,6.2-14,13.8-14c7.7,0,14,6.3,14,14C136.7,207,130.4,213.2,122.7,213.2z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;