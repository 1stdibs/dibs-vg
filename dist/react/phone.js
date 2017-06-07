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
                { className: [this.props.className, 'dibsvg-svg dibsvg-phone'].join(' '), 'data-tn': 'phone', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M199.1,248.7l-0.2,0c-24.3-0.7-51.7-13.1-81.5-36.6c-20.9-16.5-35.2-32.6-37.1-34.7C35.6,137,9.4,87.5,8.3,85.4l-0.1-0.3C-5.9,53.3,11.2,32.7,12,31.9l0.2-0.2l19.6-19.8c4.2-3.6,9.6-8,11.8-8.9C46.7,1.6,49.9,1,53,1c9.8,0,16.5,6.2,16.7,6.4l0.1,0.1l29.9,29.9c6.9,6.4,10.3,13.2,10.2,20.3c-0.2,10-7.6,16.4-8,16.7l-13.7,12c-7.9,5.6-2.6,16.9-1.8,18.5c23.3,35.2,60.1,58.1,60.5,58.4c4,2.5,7.8,3.8,11.5,3.8c3.8,0,6.2-1.4,6.7-1.8l16.6-15.6c4.5-3.4,9.2-5.1,14.2-5.1c10.1,0,17.4,7.3,18.6,8.6l26.9,25.2c10.6,7.9,12.9,20.4,6.2,34.3c-1.1,2.4-4.3,6.3-5.3,7.5l-0.1,0.1l-13.6,15.3C216.3,248.3,200.8,248.7,199.1,248.7z M16.3,81.4c1.5,2.8,27.6,51.1,70.2,89.4l0.4,0.4c0.1,0.2,14.9,17.1,36.2,33.9c19.4,15.3,48.3,33.8,76,34.6l0,0c0.5,0,13.2-0.1,23.1-10.3l13.3-15c1.6-2,3.6-4.7,4.1-5.6c3.3-7,5.4-16.7-3.6-23.3l-0.4-0.4l-27.5-25.8c0,0-5.3-5.8-12-5.8c-2.9,0-5.8,1.1-8.6,3.2l-16.7,15.6c-0.5,0.4-5,3.7-12.3,3.7c-5.4,0-10.8-1.7-16.2-5.2c-1.5-0.9-39-24.3-63.3-61.2l-0.2-0.4c-3.6-6.8-7.3-21.7,4.3-30.1l13.3-11.6c0.1-0.1,4.7-4.2,4.8-10.1c0.1-4.4-2.4-8.9-7.3-13.5l-0.1-0.1L63.6,13.9C63.2,13.6,59,10,53,10c-2,0-4,0.4-5.9,1.2c-1.2,0.6-5.7,4.3-9.3,7.3L18.7,37.8C17.5,39.4,5.1,55.8,16.3,81.4z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;