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
                { className: [this.props.className, 'dibsvg-svg dibsvg-visa'].join(' '), 'data-tn': 'payment-visa', viewBox: '0 0 500 312' },
                React.createElement('rect', { className: 'dibsvg-color-holder', width: '500', height: '312', fill: '#F8F8F8' }),
                React.createElement(
                    'g',
                    { className: 'dibsvg-color-letters', fill: '#0066B2', transform: 'translate(53 93)' },
                    React.createElement('path', { d: 'M5.20833333,6.25 C5.20833333,3.125 8.33333333,0 11.4583333,0 C14.5833333,0 17.7083333,3.125 17.7083333,6.25 C17.7083333,9.375 14.5833333,12.5 11.4583333,12.5 C8.33333333,12.5 5.20833333,9.375 5.20833333,6.25 L5.20833333,6.25 L5.20833333,6.25 Z M11.4583333,10.4166667 C14.5833333,10.4166667 16.6666667,8.33333333 16.6666667,5.20833333 C16.6666667,2.08333333 14.5833333,0 11.4583333,0 C8.33333333,0 6.25,2.08333333 6.25,5.20833333 C6.25,8.33333333 8.33333333,10.4166667 11.4583333,10.4166667 L11.4583333,10.4166667 L11.4583333,10.4166667 Z M10.4166667,8.33333333 L9.375,8.33333333 L9.375,3.125 L11.4583333,3.125 L12.5,3.125 L13.5416667,4.16666667 C13.5416667,5.20833333 13.5416667,5.20833333 12.5,5.20833333 L13.5416667,7.29166667 L12.5,7.29166667 L11.4583333,6.25 L10.4166667,6.25 L10.4166667,8.33333333 L10.4166667,8.33333333 L10.4166667,8.33333333 Z M10.4166667,5.20833333 L10.4166667,5.20833333 L11.4583333,5.20833333 C11.4583333,5.20833333 11.4583333,5.20833333 11.4583333,4.16666667 C11.4583333,4.16666667 11.4583333,4.16666667 11.4583333,3.125 L10.4166667,3.125 L10.4166667,3.125 L10.4166667,5.20833333 L10.4166667,5.20833333 L10.4166667,5.20833333 Z', transform: 'translate(384.578 107.562)' }),
                    React.createElement('path', { d: 'M357.458333 120.625L386.625 120.625 361.625 1.875 336.625 1.875C325.166667 1.875 322.041667 10.2083333 322.041667 10.2083333L275.166667 119.583333 308.5 119.583333 314.75 101.875 354.333333 101.875 357.458333 120.625 357.458333 120.625zM323.083333 78.9583333L339.75 35.2083333 349.125 78.9583333 323.083333 78.9583333 323.083333 78.9583333zM277.25 31.0416667L281.416667 6.04166667C281.416667 6.04166667 267.875.833333333 253.291667.833333333 237.666667.833333333 200.166667 7.08333333 200.166667 39.375 200.166667 69.5833333 243.916667 70.625 243.916667 86.25 243.916667 101.875 204.333333 99.7916667 191.833333 89.375L187.666667 115.416667C187.666667 115.416667 201.208333 121.666667 223.083333 121.666667 244.958333 121.666667 277.25 111.25 277.25 81.0416667 277.25 50.8333333 233.5 47.7083333 233.5 34.1666667 232.458333 21.6666667 263.708333 23.75 277.25 31.0416667' }),
                    React.createElement('path', { d: 'M65.7916667,13.3333333 L76.2083333,66.4583333 L76.2083333,66.4583333 L76.2083333,66.4583333 L65.7916667,13.3333333 C65.7916667,13.3333333 64.75,2.91666667 51.2083333,2.91666667 L26.2083333,2.91666667 L61.625,27.9166667 L76.2083333,66.4583333 L76.2083333,66.4583333 L79.3333333,84.1666667 L109.541667,2.91666667 L143.916667,2.91666667 L93.9166667,120.625 L60.5833333,120.625 L33.5,18.5416667 C15.7916667,8.125 0.166666667,5 0.166666667,5 L1.20833333,2.91666667 L26.2083333,2.91666667' }),
                    React.createElement('polyline', { points: '167.875 120.625 136.625 120.625 155.375 1.875 187.667 1.875 167.875 120.625' })
                ),
                React.createElement('path', { className: 'dibsvg-color-letters-top', fill: '#F9A533', d: 'M129.208333,159.458333 L118.791667,106.333333 C118.791667,106.333333 117.75,95.9166667 104.208333,95.9166667 L54.2083333,95.9166667 L53.1666667,96.9583333 C53.1666667,96.9583333 77.125,102.166667 100.041667,119.875 C121.916667,137.583333 129.208333,159.458333 129.208333,159.458333' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;