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
                { className: [this.props.className, 'dibsvg-svg dibsvg-note'].join(' '), 'data-tn': 'note', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M86.4260448,77.9792746 C86.8453559,77.9865545 87.2207922,78.3020392 87.3804606,78.7812844 C87.540129,79.2605295 87.4532894,79.811269 87.1597013,80.1813472 L73.9748461,96.4896373 C73.6750002,96.8632901 73.2220445,96.9755983 72.8287892,96.7737966 C72.4355339,96.5719949 72.1801518,96.0961983 72.1826281,95.5699482 L72.1826281,81.865285 C72.1826281,79.7191007 73.5903532,77.9792746 75.3268702,77.9792746 L86.4260448,77.9792746 Z M85.8076772,0 C88.1230331,0 90,2.31976814 90,5.18134715 L90,67.6165803 C90,69.0473698 89.0615166,70.2072539 87.9038386,70.2072539 L75.3268702,70.2072539 C70.1173193,70.2072539 65.8941438,75.4267322 65.8941438,81.865285 L65.8941438,97.4093264 C65.8941438,98.8401159 64.9556604,100 63.7979824,100 L14.1923228,100 C11.8769669,100 10,97.6802319 10,94.8186528 L10,5.18134715 C10,2.31976814 11.8769669,0 14.1923228,0 L85.8076772,0 Z M18.1750295,8.41968912 L18.1750295,91.5803109 L57.7191144,91.5803109 L57.7191144,81.865285 C57.7191144,71.081612 65.2390981,61.7875648 75.3268702,61.7875648 L81.8249705,61.7875648 L81.8249705,8.41968912 L18.1750295,8.41968912 Z M73.53373,26.5673575 L25.2216032,26.5673575 C23.5989364,26.5673575 22.2835051,24.8275314 22.2835051,22.6813472 C22.2835051,20.5351629 23.5989364,18.7953368 25.2216032,18.7953368 L73.53373,18.7953368 C75.1563968,18.7953368 76.4718281,20.5351629 76.4718281,22.6813472 C76.4718281,24.8275314 75.1563968,26.5673575 73.53373,26.5673575 Z M73.53373,45.1554369 L25.2216032,45.1554369 C23.5989364,45.1554369 22.2835051,43.4156108 22.2835051,41.2694265 C22.2835051,39.1232423 23.5989364,37.3834162 25.2216032,37.3834162 L73.53373,37.3834162 C75.1563968,37.3834162 76.4718281,39.1232423 76.4718281,41.2694265 C76.4718281,43.4156108 75.1563968,45.1554369 73.53373,45.1554369 Z M53.9464092,62.5 L25.2216032,62.5 C23.5989364,62.5 22.2835051,60.7601739 22.2835051,58.6139896 C22.2835051,56.4678054 23.5989364,54.7279793 25.2216032,54.7279793 L53.9464092,54.7279793 C55.5690759,54.7279793 56.8845073,56.4678054 56.8845073,58.6139896 C56.8845073,60.7601739 55.5690759,62.5 53.9464092,62.5 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;