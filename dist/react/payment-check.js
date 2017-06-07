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
                { className: [this.props.className, 'dibsvg-svg dibsvg-check'].join(' '), 'data-tn': 'payment-check', viewBox: '0 0 500 312' },
                React.createElement('rect', { className: 'dibsvg-color-holder', width: '500', height: '312', fill: '#F8F8F8' }),
                React.createElement('path', { className: 'dibsvg-color-letters', d: 'M446.339807,190.42907 L420.193555,155.916018 L412.872605,164.282819 L412.872605,190.42907 L399.276554,190.42907 L399.276554,107.806915 L412.872605,107.806915 L412.872605,147.549218 L444.248107,107.806915 L460.981708,107.806915 L429.606206,146.503368 L464.119258,190.42907 L446.339807,190.42907 Z M303.058348,149.640918 C303.058348,124.540516 320.837799,106.761065 344.892351,106.761065 C360.580102,106.761065 371.038602,115.127866 376.267853,125.586366 L364.763502,131.861467 C360.580102,125.586366 353.259151,120.357116 344.892351,120.357116 C329.2046,120.357116 317.700249,132.907317 317.700249,149.640918 C317.700249,166.374519 329.2046,178.92472 344.892351,178.92472 C353.259151,178.92472 360.580102,173.695469 364.763502,167.420369 L376.267853,173.695469 C369.992752,183.10812 360.580102,192.520771 344.892351,192.520771 C320.837799,191.474921 303.058348,174.741319 303.058348,149.640918 Z M226.711293,190.42907 L226.711293,107.806915 L281.095497,107.806915 L281.095497,120.357116 L240.307344,120.357116 L240.307344,142.319967 L280.049647,142.319967 L280.049647,154.870168 L240.307344,154.870168 L240.307344,177.87887 L281.095497,177.87887 L281.095497,190.42907 L226.711293,190.42907 Z M33.2290307,149.640918 C33.2290307,124.540516 51.0084818,106.761065 75.0630334,106.761065 C90.7507844,106.761065 101.209285,115.127866 106.438535,125.586366 L94.9341847,131.861467 C90.7507844,124.540516 83.4298339,119.311266 75.0630334,119.311266 C59.3752824,119.311266 47.8709316,131.861467 47.8709316,148.595068 C47.8709316,165.328669 59.3752824,178.92472 75.0630334,178.92472 C83.4298339,178.92472 90.7507844,173.695469 94.9341847,167.420369 L106.438535,173.695469 C100.163435,183.10812 90.7507844,192.520771 75.0630334,192.520771 C51.0084818,191.474921 33.2290307,174.741319 33.2290307,149.640918 Z M183.83144,190.42907 L183.83144,154.870168 L143.043288,154.870168 L143.043288,190.42907 L129.447237,190.42907 L129.447237,107.806915 L143.043288,107.806915 L143.043288,142.319967 L183.83144,142.319967 L183.83144,107.806915 L198.473341,107.806915 L198.473341,190.42907 L183.83144,190.42907 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;