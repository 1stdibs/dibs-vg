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
                { className: [this.props.className, 'dibsvg-svg dibsvg-storefront'].join(' '), 'data-tn': 'storefront', viewBox: '0 0 250 250' },
                React.createElement('rect', { x: '45', y: '23', width: '160', height: '8' }),
                React.createElement('rect', { x: '133.8', y: '135.3', transform: 'matrix(0.7012 -0.713 0.713 0.7012 -55.6632 145.7103)', width: '24.3', height: '8' }),
                React.createElement('rect', { x: '136.4', y: '147.9', transform: 'matrix(0.7058 -0.7084 0.7084 0.7058 -59.9895 159.4118)', width: '51', height: '8' }),
                React.createElement('rect', { x: '172.5', y: '153.8', transform: 'matrix(-0.7033 -0.7109 0.7109 -0.7033 182.7199 407.7907)', width: '8', height: '24' }),
                React.createElement('path', { d: 'M65,175h20v-39H65V175z M73,144h4v23h-4V144z' }),
                React.createElement('path', { d: 'M224,117.5c7.1-1.5,18.7-6.7,20.6-24.5h5.9L215.4,7H35.6L0,93h5.5C7.5,111.6,20,116.5,27,117.7V210H5v32h242v-32h-23V117.5 M105,210v-99.8c4.4,4.6,10.5,8,18.6,8c1.9,0,17.6-0.4,23.8-15.8c4.2,7.8,11.9,15.6,24.2,15.6c0,0,0.1,0,0.1,0 c2.2,0,16.8-0.5,23.2-14.6c4,6.9,10.7,13.6,21.1,14.6v92H105z M59.3,93h36.1c-2.2,17.2-16.1,17.2-17.7,17.2l-0.2,0 c-11.3,0-16.6-9.3-18.8-15C59,94.4,59.2,93.7,59.3,93z M104.1,93h37.4c-2.2,17.2-16.1,17.2-17.7,17.2l-0.2,0 C110.7,110.2,105.7,98,104.1,93z M152.1,93h37.4c-2.2,17.2-16.1,17.2-17.7,17.2l-0.2,0C158.7,110.1,153.7,98.1,152.1,93z M218.8,110.2l-0.2,0c-12.9,0-18-12.1-19.5-17.2h37.4C234.3,110.2,220.4,110.2,218.8,110.2z M41,15h169l28.6,70H12L41,15z M13.6,93 h36.1c0.1,0.7,0.3,1.4,0.6,2.2c-2.2,5.7-7.5,15-18.7,15l-0.2,0C30.7,110.2,15.9,110.6,13.6,93z M35,117.9c9.3-1.2,15.6-7,19.5-13.3 c4.4,7.1,11.8,13.6,23,13.6c1.5,0,12.2-0.2,19.5-8.7V210H35V117.9z M239,234H13v-16h226V234z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;