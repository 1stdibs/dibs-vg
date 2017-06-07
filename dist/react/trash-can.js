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
                { className: [this.props.className, 'dibsvg-svg dibsvg-trash-can'].join(' '), 'data-tn': 'trash-can', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M85.2711396,13.0885776 L68.0392956,13.0885776 L68.0392956,3.06284968 C68.0392956,1.37011475 66.8167661,0 65.3104352,0 L35.6877456,0 C34.1795954,0 32.9588852,1.37011475 32.9588852,3.06284968 L32.9588852,13.0885776 L15.7288604,13.0885776 C14.2207102,13.0885776 13,14.4586924 13,16.1514273 L13,29.2400049 C13,30.9327398 14.2207102,32.3028546 15.7288604,32.3028546 L18.14845,32.3028546 L18.14845,96.9371503 C18.14845,98.6278433 19.3691602,100 20.8773104,100 L80.1226896,100 C81.6290205,100 82.85155,98.6278433 82.85155,96.9371503 L82.85155,32.3028546 L85.2711396,32.3028546 C86.7774705,32.3028546 88,30.9327398 88,29.2400049 L88,16.1514273 C88,14.4607343 86.7774705,13.0885776 85.2711396,13.0885776 Z M38.416606,6.12569935 L62.5815747,6.12569935 L62.5815747,13.0885776 L38.416606,13.0885776 L38.416606,6.12569935 Z M18.4577209,19.214277 L82.5422791,19.214277 L82.5422791,26.1771552 L18.4577209,26.1771552 L18.4577209,19.214277 Z M77.3938291,93.8743006 L23.6061709,93.8743006 L23.6061709,32.3028546 L32.9588852,32.3028546 L32.9588852,73.4675542 C32.9588852,75.1582472 34.1795954,76.5304039 35.6877456,76.5304039 C37.1958958,76.5304039 38.416606,75.1582472 38.416606,73.4675542 L38.416606,32.3028546 L47.7711396,32.3028546 L47.7711396,73.4675542 C47.7711396,75.1582472 48.9918498,76.5304039 50.5,76.5304039 C52.006331,76.5304039 53.2288604,75.1582472 53.2288604,73.4675542 L53.2288604,32.3028546 L62.583394,32.3028546 L62.583394,73.4675542 C62.583394,75.1582472 63.8059234,76.5304039 65.3122544,76.5304039 C66.8185854,76.5304039 68.0411148,75.1582472 68.0411148,73.4675542 L68.0411148,32.3028546 L77.3956484,32.3028546 L77.3956484,93.8743006 L77.3938291,93.8743006 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;