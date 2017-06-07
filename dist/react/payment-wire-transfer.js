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
                { className: [this.props.className, 'dibsvg-svg dibsvg-wire-transfer'].join(' '), 'data-tn': 'payment-wire-transfer', viewBox: '0 0 500 312' },
                React.createElement('rect', { className: 'dibsvg-color-holder', width: '500', height: '312', fill: '#F8F8F8' }),
                React.createElement(
                    'g',
                    { className: 'dibsvg-color-letters', transform: 'translate(31 68)' },
                    React.createElement('polygon', { points: '146.083 .75 131.5 63.25 114.833 .75 104.417 .75 87.75 63.25 73.167 .75 57.542 .75 79.417 82 94 82 109.625 22.625 125.25 82 139.833 82 161.708 .75' }),
                    React.createElement('polygon', { points: '182.542 82 197.125 82 197.125 .75 182.542 .75' }),
                    React.createElement('polygon', { points: '310.667 82 310.667 .75 364.833 .75 364.833 13.25 325.25 13.25 325.25 35.125 363.792 35.125 363.792 47.625 325.25 47.625 325.25 69.5 364.833 69.5 364.833 82' }),
                    React.createElement('polygon', { points: '15.875 172.625 15.875 127.833 .25 127.833 .25 119.5 40.875 119.5 40.875 127.833 25.25 127.833 25.25 172.625' }),
                    React.createElement('polygon', { points: '209.625 172.625 182.542 135.125 182.542 172.625 173.167 172.625 173.167 119.5 182.542 119.5 208.583 157 208.583 119.5 217.958 119.5 217.958 172.625' }),
                    React.createElement('polygon', { points: '290.875 172.625 290.875 119.5 327.333 119.5 327.333 127.833 300.25 127.833 300.25 141.375 326.292 141.375 326.292 149.708 300.25 149.708 300.25 172.625' }),
                    React.createElement('polygon', { points: '342.958 172.625 342.958 119.5 378.375 119.5 378.375 127.833 352.333 127.833 352.333 141.375 378.375 141.375 378.375 149.708 352.333 149.708 352.333 164.292 378.375 164.292 378.375 172.625' }),
                    React.createElement('path', { d: 'M271.083333,26.7916667 C271.083333,18.4583333 265.875,14.2916667 257.541667,14.2916667 L238.791667,14.2916667 L238.791667,40.3333333 L257.541667,40.3333333 C265.875,39.2916667 271.083333,34.0833333 271.083333,26.7916667 L271.083333,26.7916667 L271.083333,26.7916667 Z M270.041667,82 L252.333333,51.7916667 L238.791667,51.7916667 L238.791667,82 L225.25,82 L225.25,0.75 L259.625,0.75 C275.25,0.75 285.666667,11.1666667 285.666667,25.75 C285.666667,40.3333333 276.291667,47.625 266.916667,49.7083333 L285.666667,80.9583333 L270.041667,82 L270.041667,82 L270.041667,82 Z' }),
                    React.createElement('path', { d: 'M86.7083333 136.166667C86.7083333 130.958333 82.5416667 127.833333 78.375 127.833333L65.875 127.833333 65.875 144.5 78.375 144.5C83.5833333 144.5 86.7083333 141.375 86.7083333 136.166667L86.7083333 136.166667 86.7083333 136.166667zM85.6666667 172.625L74.2083333 152.833333 65.875 152.833333 65.875 172.625 56.5 172.625 56.5 119.5 79.4166667 119.5C89.8333333 119.5 96.0833333 126.791667 96.0833333 136.166667 96.0833333 145.541667 89.8333333 150.75 83.5833333 151.791667L96.0833333 172.625 85.6666667 172.625 85.6666667 172.625zM133.583333 128.875L124.208333 153.875 142.958333 153.875 133.583333 128.875 133.583333 128.875zM149.208333 172.625L145.041667 162.208333 121.083333 162.208333 116.916667 172.625 106.5 172.625 127.333333 119.5 138.791667 119.5 159.625 172.625 149.208333 172.625 149.208333 172.625z' }),
                    React.createElement('path', { d: 'M233.583333,165.333333 L238.791667,158.041667 C241.916667,162.208333 248.166667,165.333333 255.458333,165.333333 C262.75,165.333333 265.875,161.166667 265.875,158.041667 C265.875,146.583333 235.666667,153.875 235.666667,134.083333 C235.666667,124.708333 242.958333,118.458333 254.416667,118.458333 C262.75,118.458333 269,121.583333 274.208333,125.75 L269,133.041667 C264.833333,128.875 259.625,126.791667 254.416667,126.791667 C249.208333,126.791667 246.083333,129.916667 246.083333,133.041667 C246.083333,143.458333 276.291667,137.208333 276.291667,157 C276.291667,166.375 270.041667,173.666667 256.5,173.666667 C245.041667,173.666667 238.791667,170.541667 233.583333,165.333333' }),
                    React.createElement('path', { d: 'M426.291667,136.166667 C426.291667,130.958333 422.125,127.833333 417.958333,127.833333 L405.458333,127.833333 L405.458333,144.5 L416.916667,144.5 C422.125,144.5 426.291667,141.375 426.291667,136.166667 L426.291667,136.166667 L426.291667,136.166667 Z M425.25,172.625 L413.791667,152.833333 L404.416667,152.833333 L404.416667,172.625 L396.083333,172.625 L396.083333,119.5 L419,119.5 C429.416667,119.5 435.666667,126.791667 435.666667,136.166667 C435.666667,145.541667 429.416667,150.75 423.166667,151.791667 L435.666667,172.625 L425.25,172.625 L425.25,172.625 Z' })
                )
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;