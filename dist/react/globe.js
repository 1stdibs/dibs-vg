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
                { className: [this.props.className, 'dibsvg-svg dibsvg-globe'].join(' '), 'data-tn': 'globe', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125,0C56.3,0,0.3,55.9,0.3,124.7c0,68.7,55.9,124.7,124.7,124.7s124.7-55.9,124.7-124.7C249.7,55.9,193.7,0,125,0zM8.3,124.7C8.3,60.3,60.7,8,125,8s116.7,52.3,116.7,116.7c0,23.1-6.7,44.6-18.4,62.8c-4-9-16.6-12.7-24.8-14.4c-0.1-0.3-11.3-1.6-24-1.5c-9,0.1-9.6,0.9-19,1.5c-1.9,0.1-6.9-1.6-16.3-2c-2.5-0.1-6.6-4.2-6.6-4.2s-2.6-2.8-5.2-6.1c-2.6-3.3-5.2-2.5-5.2-5.7s-3.5-7.4-7.8-9c-4.3-1.6-6.1,4.9-13,4.9c-6.9,0-5.1-10.2-1.7-19.6c2.6-7.4,14.7-2.5,14.7-2.5c3.7,1.4,6.1,3.3,10.4,2.5c5.7-1.1,6.9,5.7,6.9,5.7c6.1,16.4,8.7-2.5,8.7-2.5l0.9-11.4c0,0,0.9-4.9,2.6-9s2.6-4.1,6.9-9s2.6-5.7,6.1-10.6s14.7-4.9,14.7-4.9c13-1.6,2.6-13.1,2.6-13.1c-4.3-4.1-18.2-9.8-18.2-9.8C144.8,65,147.4,56,147.4,56c0-5.7,12.1,0.8,12.1,0.8c18.2,0.8,7.8-10.6,7.8-10.6c-5.5-4.1-12-6.5-16.4-7.7c-3.1-0.9-9-2.8-10.6-3.2c-8.9-2.3-12,1.9-12,1.9c-9.2,6.7-21.7,7.4-21.7,7.4c-5.2,0-20,1.6-20,1.6c-9.5,0-15.6,10.6-16.5,17.2s-6.9,27-6.9,27c-6.1,10.6-3.5,13.1-1.7,19.6c1.7,6.5,2.6,9,3.5,17.2c0.4,4.1,3.5,7.8,6.4,10.4c2.9,2.7,5.8,8.6,6.3,10.5c2.3,7.3,9.5,11.2,9.5,11.2l6.6,2.8c20.6,4.4,21.4,9.3,21.5,9.2c4.3,7.4,17.8,9.6,17.8,9.6c9.4,2.8,6.4,7.6,6.4,7.6c-6.6,11.6-8.5,16.7-4.6,28.1c4.5,13,7.7,20,9.3,23.2c-6.3,1-12.7,1.6-19.3,1.6C60.7,241.3,8.3,189,8.3,124.7z M135.2,65c3.5,9.8,3.5,12.3,3.5,12.3s-6.1-1.6-19.1-2.5c-13-0.8-9.5-7.4-9.5-7.4l5.2-4.1c0,0,7.8-4.9,16.5-8.2C140.4,51.9,131.8,55.2,135.2,65z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;