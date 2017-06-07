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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-dollar'].join(' '), 'data-tn': 'circle-dollar', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.4,0C56.3,0,0.2,56.1,0.2,125.2c0,69.1,56.2,125.2,125.2,125.2c69.1,0,125.2-56.1,125.2-125.1C250.6,56.2,194.5,0,125.4,0z M125.4,241.4c-64.1,0-116.2-52.1-116.2-116.2C9.2,61.1,61.3,9,125.4,9s116.2,52.2,116.2,116.3C241.6,189.3,189.5,241.4,125.4,241.4z' }),
                React.createElement('path', { d: 'M148.2,123.9c-3.7-2.3-7.7-4.2-12.1-5.8c-4.3-1.6-8.3-3.1-12.1-4.6s-6.8-3-9.3-4.7c-2.5-1.6-3.7-3.7-3.7-6.2c0-3.3,1.3-5.8,3.9-7.7c2.6-1.9,6.2-2.8,10.7-2.8c5,0,9.3,0.8,12.7,2.3c3.4,1.5,7.1,3.7,10.9,6.6l9.5-11c-3.4-3.4-7.1-6.2-11.2-8.5c-4.1-2.3-9-3.8-14.8-4.4V55.7h-13.1v21.5c-8.2,1.1-14.7,3.9-19.5,8.4c-4.8,4.5-7.2,10.3-7.2,17.4c0,4.9,1.2,9,3.7,12.2c2.5,3.2,5.5,6,9.3,8.3s7.7,4.2,12,5.8c4.3,1.6,8.3,3.2,12,4.8c3.7,1.6,6.8,3.3,9.3,5.2c2.5,1.9,3.7,4.2,3.7,7.1c0,3.3-1.3,5.9-4,7.9c-2.7,2-6.6,3-11.9,3c-5.7,0-10.9-1-15.7-3c-4.8-2-9.6-4.5-14.3-7.7l-8.5,13c4,3.4,8.9,6.3,14.4,8.6c5.6,2.4,11.2,3.8,16.9,4.3v23.8h13.1V172c9-1.3,15.9-4.4,20.9-9.3c5-4.9,7.5-10.8,7.5-17.8c0-5-1.2-9.2-3.7-12.5C155,129,151.9,126.2,148.2,123.9z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;