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
                { className: [this.props.className, 'dibsvg-svg dibsvg-sales'].join(' '), 'data-tn': 'sales', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,96 C75.4050985,96 96,75.4050985 96,50 C96,24.5949015 75.4050985,4 50,4 C24.5949015,4 4,24.5949015 4,50 C4,75.4050985 24.5949015,96 50,96 Z M52.5246691,68.23875 L52.5246691,72.955 C52.5246691,74.035 51.503297,75 50.2223729,75 C48.8797175,75 47.8555394,74.035 47.8555394,72.955 L47.8555394,68.29625 C45.1056914,68.0675 42.2281719,67.27375 39.6045924,66.25 C37.3668335,65.39875 35,64.0925 35,62.27375 C35,60.96625 35.9582379,60.22875 37.1114904,60.22875 C38.7740261,60.22875 39.9244727,61.25125 41.3316653,61.87625 C44.0183791,63.12625 46.6419586,63.8075 50.3514474,63.8075 C56.2369639,63.8075 59.3066922,61.76125 59.3066922,58.75 C59.3066922,55.56875 56.3632325,54.14875 49.008792,51.9325 C38.5804143,48.80875 35.5106861,45.96875 35.5106861,40.73875 C35.5106861,35.22875 40.501099,32.33 48.1108825,31.705 L48.1108825,27.04625 C48.1108825,25.96875 49.0733293,25 50.4159847,25 C51.75864,25 52.7828181,25.96875 52.7828181,27.04625 L52.7828181,31.7625 C55.0205771,31.875 57.259739,32.445 59.3066922,33.06875 C61.6735257,33.86625 63.8467474,34.775 63.8467474,36.4225 C63.8467474,37.5575 63.1438526,38.4675 61.5444512,38.4675 C60.9706309,38.4675 60.3926016,38.2975 59.9464528,38.125 C56.74765,36.87625 54.0609363,36.025 50.4159847,36.025 C44.9794229,36.025 41.2699341,37.5025 41.2699341,40.73875 C41.2699341,44.035 43.6970958,45.0575 51.246551,47.44375 C59.752841,50.115 65,52.33 65,58.41 C65,63.75125 60.7770191,67.27375 52.5246691,68.23875 Z', id: 'Combined-Shape' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;