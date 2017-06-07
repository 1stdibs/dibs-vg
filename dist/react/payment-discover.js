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
                { className: [this.props.className, 'dibsvg-svg dibsvg-discover'].join(' '), 'data-tn': 'payment-discover', viewBox: '0 0 500 312' },
                React.createElement('rect', { className: 'dibsvg-color-holder', width: '500', height: '312', fill: '#F8F8F8' }),
                React.createElement('path', { className: 'dibsvg-color-triangle', fill: '#F6821F', d: 'M500,311.122244 L500,178.565464 C466.599866,199.440548 341.349365,271.459586 136.773547,311.122244 L500,311.122244 L500,311.122244 Z' }),
                React.createElement('path', { className: 'dibsvg-color-circle', fill: '#F6821F', d: 'M0,31.3126253 C0,48.0126921 12.5250501,60.5377422 28.1813627,60.5377422 C43.8376754,60.5377422 56.3627255,48.0126921 56.3627255,31.3126253 C56.3627255,15.6563126 43.8376754,3.13126253 28.1813627,3.13126253 C12.5250501,3.13126253 0,15.6563126 0,31.3126253 L0,31.3126253 Z', transform: 'translate(228.624 112.809)' }),
                React.createElement(
                    'g',
                    { className: 'dibsvg-color-letters', fill: '#202020', transform: 'translate(81.162 115.23)' },
                    React.createElement('path', { d: 'M332.206079 2.79726119C330.11857 2.79726119 328.031062 4.88476954 328.031062 6.97227789 328.031062 9.05978624 330.11857 11.1472946 332.206079 11.1472946 334.293587 11.1472946 336.381096 9.05978624 336.381096 6.97227789 336.381096 4.88476954 334.293587 2.79726119 332.206079 2.79726119L332.206079 2.79726119 332.206079 2.79726119zM332.206079 10.1035404C330.11857 10.1035404 329.074816 9.05978624 329.074816 6.97227789 329.074816 4.88476954 330.11857 3.84101536 332.206079 3.84101536 334.293587 3.84101536 335.337341 5.92852371 335.337341 6.97227789 335.337341 9.05978624 334.293587 10.1035404 332.206079 10.1035404L332.206079 10.1035404 332.206079 10.1035404zM326.987308 18.4535738C326.987308 8.01603206 319.681029 1.75350701 308.199733 1.75350701L292.54342 1.75350701 292.54342 57.0724783 302.980962 57.0724783 302.980962 35.1536406 304.024716 35.1536406 318.637275 57.0724783 331.162325 57.0724783 314.462258 34.1098864C322.812291 32.0223781 326.987308 26.8036072 326.987308 18.4535738L326.987308 18.4535738 326.987308 18.4535738zM306.112224 27.8473614L302.980962 27.8473614 302.980962 11.1472946 306.112224 11.1472946C312.374749 11.1472946 315.506012 14.2785571 315.506012 19.497328 316.549766 24.7160989 312.374749 27.8473614 306.112224 27.8473614L306.112224 27.8473614 306.112224 27.8473614z' }),
                    React.createElement('path', { d: 'M102.58016 29.9348697C102.58016 46.6349365 115.10521 59.1599866 130.761523 59.1599866 134.93654 59.1599866 139.111556 58.1162325 143.286573 56.0287241L143.286573 43.503674C139.111556 47.6786907 135.980294 49.7661991 130.761523 49.7661991 120.323981 49.7661991 113.017702 41.4161657 113.017702 30.9786239 113.017702 20.5410822 120.323981 12.1910488 130.761523 12.1910488 135.980294 12.1910488 139.111556 14.2785571 143.286573 18.4535738L143.286573 5.92852371C139.111556 3.84101536 134.93654 2.79726119 130.761523 2.79726119 115.10521.709752839 102.58016 13.2348029 102.58016 29.9348697M83.7925852 23.6723447C77.5300601 21.5848363 75.4425518 19.497328 75.4425518 16.3660655 75.4425518 13.2348029 78.5738143 10.1035404 82.748831 10.1035404 85.8800935 10.1035404 87.9676019 11.1472946 91.0988644 14.2785571L96.3176353 6.97227789C92.1426186 2.79726119 86.9238477.709752839 80.6613226.709752839 71.2675351.709752839 63.9612558 6.97227789 63.9612558 16.3660655 63.9612558 23.6723447 67.0925184 27.8473614 76.4863059 30.9786239 80.6613226 32.0223781 82.748831 33.0661323 83.7925852 34.1098864 85.8800935 35.1536406 86.9238477 37.241149 86.9238477 39.3286573 86.9238477 43.503674 83.7925852 46.6349365 78.5738143 46.6349365 73.3550434 46.6349365 70.2237809 44.5474282 67.0925184 39.3286573L60.8299933 45.5911824C66.0487642 52.8974616 71.2675351 56.0287241 79.6175685 56.0287241 90.0551102 56.0287241 97.3613894 48.7224449 97.3613894 38.2849031 99.4488978 32.0223781 95.2738811 27.8473614 83.7925852 23.6723447' }),
                    React.createElement('path', { d: 'M14.9048096,1.75350701 L0.292251169,1.75350701 L0.292251169,57.0724783 L14.9048096,57.0724783 C23.254843,57.0724783 28.4736139,54.9849699 33.6923848,50.8099532 C39.9549098,45.5911824 43.0861723,37.241149 43.0861723,29.9348697 C44.1299265,13.2348029 31.6048764,1.75350701 14.9048096,1.75350701 L14.9048096,1.75350701 L14.9048096,1.75350701 Z M27.4298597,43.503674 C24.2985972,46.6349365 20.1235805,47.6786907 12.8173013,47.6786907 L10.7297929,47.6786907 L10.7297929,11.1472946 L13.8610554,11.1472946 C20.1235805,11.1472946 24.2985972,12.1910488 28.4736139,15.3223113 C31.6048764,18.4535738 33.6923848,23.6723447 33.6923848,28.8911156 C32.6486306,35.1536406 30.5611222,40.3724115 27.4298597,43.503674 L27.4298597,43.503674 L27.4298597,43.503674 Z' }),
                    React.createElement('polyline', { points: '257.056 57.072 286.281 57.072 286.281 47.679 267.493 47.679 267.493 33.066 285.237 33.066 285.237 23.672 267.493 23.672 267.493 11.147 286.281 11.147 286.281 1.754 257.056 1.754 257.056 57.072' }),
                    React.createElement('polyline', { points: '226.787 39.329 212.174 1.754 201.737 1.754 223.656 58.116 228.874 58.116 251.837 1.754 240.356 1.754 226.787 39.329' }),
                    React.createElement('polygon', { points: '48.305 1.754 58.742 1.754 58.742 57.072 48.305 57.072' })
                )
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;