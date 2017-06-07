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
                { className: [this.props.className, 'dibsvg-svg dibsvg-image'].join(' '), 'data-tn': 'image', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M239,34.6H10.5C4.8,34.6,0,39.3,0,45.1v160.4c0,5.8,4.7,10.5,10.5,10.5H239c5.8,0,10.5-4.7,10.5-10.5V45.1C249.5,39.3,244.8,34.6,239,34.6z M10.5,43.6H239c0.8,0,1.5,0.7,1.5,1.5v137.7l-47-35.2c-5.5-4-11.1,0-11.1,0l-45.9,33c-5.8,4-9-1-9-1L77,123.2c-6.6-5.7-12.4-0.1-12.4-0.1L9,182.4V45.1C9,44.3,9.7,43.6,10.5,43.6z' }),
                React.createElement('circle', { cx: '158', cy: '93.5', r: '16.5' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;