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
                { className: [this.props.className, 'dibsvg-svg dibsvg-circle-contact-info'].join(' '), 'data-tn': 'circle-contact-info', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M124.7-0.3C55.8-0.3-0.2,55.8-0.2,124.6s56,124.9,124.9,124.9c68.9,0,124.9-56,124.9-124.8C249.6,55.8,193.5-0.3,124.7-0.3z M124.7,240.5c-63.9,0-115.9-52-115.9-115.9S60.8,8.7,124.7,8.7c63.9,0,115.9,52,115.9,116C240.6,188.6,188.6,240.5,124.7,240.5z' }),
                React.createElement('path', { d: 'M129.4,154.8c-1.3-8.2-6.9-12.4-10-13.6l-11.2-4.5l-7.6-3.4c-1.8-0.8-2.4-1.9-2.5-2.3l0-0.1l0,0c0,0,0.1-0.1,0.1-0.1c0.2-0.2,0.4-0.4,0.6-0.6c6.2-7.5,7.5-16.4,7.6-17.4c3.1-22-8.4-28.5-10.5-29.5c-3.9-2-8.1-3-12.3-3c-7.2,0-12.3,2.8-12.9,3.2c-13,7.9-10.2,27.4-10,29c1.4,10.2,7.4,17.4,7.7,17.7l0.1,0.1c0.2,0.2,0.4,0.4,0.5,0.5c0,0,0,0,0,0c-0.4,1.4-1.5,2.1-1.8,2.2l-6,2.6l-13.9,5.6c-5.5,2-7.7,6.8-8.1,7.9c-1.8,4-2.4,12.9-2.6,15.6l-0.3,4.8l4.8,0c15.9,0.1,31.9,0.1,47.4,0.1c23,0,37.2-0.1,37.4-0.1l4.8,0l-1.1-14.4L129.4,154.8z M88.3,160.8c-13.9,0-28.2,0-42.5-0.1c0.4-3.4,0.9-6.7,1.4-7.8l0.1-0.3c0,0,0.9-2.1,2.9-2.8l14.2-5.7l5.9-2.6c1.1-0.4,5.9-2.7,7.3-8.8l0.1-0.3c0.1-0.9,0.3-3.2-0.6-5.1c-0.7-1.3-1-1.7-2-2.9c-0.4-0.5-4.6-5.8-5.5-13l0-0.1c0-0.1-2.2-15.1,5.7-19.9c0.4-0.2,3.7-1.9,8.3-1.9c2.9,0,5.7,0.7,8.3,2l0.4,0.2c0.1,0,7.5,3.7,5.2,20l0,0.1c0,0.1-0.9,7.1-5.6,12.7c-0.1,0.1-0.1,0.2-0.2,0.2c-0.5,0.6-1.4,1.5-2,2.7l-0.2,0.4c-0.2,0.6-0.9,2.7-0.1,5.3c0.4,1.4,1.9,5.9,7.6,8.4l7.6,3.5l11.5,4.6c0,0,3.5,1.5,4.3,6.5l0.3,4.6C114.8,160.7,103.5,160.8,88.3,160.8z' }),
                React.createElement('rect', { x: '144.3', y: '97.9', width: '66.7', height: '9' }),
                React.createElement('rect', { x: '144.3', y: '121.6', width: '66.7', height: '9' }),
                React.createElement('rect', { x: '144.3', y: '145.3', width: '66.7', height: '9' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;