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
                { className: [this.props.className, 'dibsvg-svg dibsvg-flag'].join(' '), 'data-tn': 'flag', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M219.6,24c-36,25.2-84.2-8.4-84.6-8.7C115.1,0.8,89.4,1.4,86.7,1.5C63.6,0.8,44.1,13.3,33.4,22V0h-9v250h9V147.8c8.9-5.7,24.5-14.7,25.8-15.4c28-14.4,51.7-7.2,63.4-1.6c4.8,2.3,13.5,7.3,15.3,8.6c16.5,11.5,31.9,15.8,32.6,15.9c8.7,2.4,16.2,3.3,22.5,3.3c24.1,0,32.6-13.5,33-14.2l0.7-1.1V19L219.6,24z M217.7,140.6c-2.8,3.3-14.7,14.2-44.8,6c-0.1,0-14.6-4-29.8-14.6c-2.3-1.6-11.4-6.9-16.6-9.4c-13.1-6.3-39.9-14.4-71.5,1.8l-0.2,0.1c-0.6,0.3-12.2,7-21.4,12.7V34c6.7-6.4,28.1-24.4,53.2-23.5l0.2,0l0.2,0c0.2,0,24.7-1.1,42.8,12.1c0.5,0.4,13.5,9.5,31.5,15.3c21.1,6.8,40.5,6,56.5-2.2V140.6z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;