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
                { className: [this.props.className, 'dibsvg-svg dibsvg-service-person'].join(' '), 'data-tn': 'service-person', viewBox: '0 0 518 518' },
                React.createElement('path', { d: 'M-30.3,45' }),
                React.createElement('path', { d: 'M454,498.6c-2.5-41.3-12.8-77.3-30.5-107.2c-14.3-24-33.3-44.1-56.6-59.6c-1.1-0.7-2.2-1.5-3.4-2.2c32.3-22.8,45-45.5,46.9-49.1c42.3-64.5,23.5-134.5,22.7-137.4c-19.7-70.4-63.9-103.9-97.5-119.5c-35.3-16.5-66-17.2-69-17.2c-76.6-4-126.4,44.9-130.4,48.9C93.8,93.4,84,144.1,82.3,154.9c-1,2.8-1.7,6.1-2,10.1L79,216.3c0,0-0.7,13.3,14.3,14.7h46.4c0,0-0.3-1-0.8-2.8c12.5,34.8,39.7,62.7,74.2,76.2c-27.2,5-51.3,15.7-72,32.1c-21.4,16.9-39.1,39.7-52.5,67.8c-22.8,47.4-25.6,93.1-25.8,95l-0.4,7.4l392.2-0.7L454,498.6z M99.9,140.9c5.5-19.2,18.2-50.6,45.8-75.4l0.4-0.3c0.5-0.5,48-48.7,119.9-44.9l0.3,0c0.3,0,29.7,0.3,63.3,15.9c19.7,9.2,36.9,21.8,51,37.5c17.8,19.6,30.9,44.3,38.9,73.2c0.2,0.7,17.9,67.1-21.1,126.3l-0.4,0.7c-0.2,0.3-12.7,24.6-48.1,47.9c-17.5-9.2-33.6-14.4-45.1-17.2c48.1-18.4,82.4-65.1,82.4-119.6c0-70.6-57.4-128-128-128c-55.1,0-102.2,35-120.2,84h-37.6C101.5,141,100.9,140.9,99.9,140.9zM145.3,185c0-62.9,51.1-114,114-114s114,51.1,114,114s-51.1,114-114,114S145.3,247.9,145.3,185z M77.4,492.7c1.7-14.5,7.3-48.3,23.7-82.4c12.6-26.2,28.9-47.3,48.6-62.9c24.5-19.4,54.5-30.2,89.1-32.1l0.8-0.1c0.1,0,10-1.7,23.6-1.7c8,0,15.7,0.6,22.8,1.7l0.4,0.1c0.3,0,22.3,2.4,49.5,15.1c-7.4,4.1-15.7,8.1-24.8,11.8V337c0-2.2-1.8-4-4-4h-60.7c-2.2,0-4,1.8-4,4v34c0,2.2,1.8,4,4,4H307c2.2,0,4-1.8,4-4v-13.8c15.2-5.8,28.3-12.3,39.5-19.1c3,1.8,6.1,3.7,9.1,5.7c21.4,14.3,39,32.9,52,55c15.4,26.1,24.7,57.4,27.8,93.1L77.4,492.7z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;