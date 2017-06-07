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
                { className: [this.props.className, 'dibsvg-svg dibsvg-luggage'].join(' '), 'data-tn': 'luggage', viewBox: '0 100 612 612' },
                React.createElement('path', { d: 'M553.2,222.2H376.4v-29.4c0-16.5-12.9-29.4-29.4-29.4h-82c-16.5,0-29.4,12.9-29.4,29.4v29.4H58.8c-33,0-58.8,25.7-58.8,58.8v282.7c0,33,25.7,58.8,58.8,58.8h494.5c33,0,58.8-25.7,58.8-58.8V280.9C612,247.9,586.3,222.2,553.2,222.2z M258.9,192.8c0-3.7,2.4-6.1,6.1-6.1h82.6c3.7,0,6.1,2.4,6.1,6.1v29.4h-94.9V192.8z M58.8,599.2c-20.2,0-35.5-15.3-35.5-35.5V280.9c0-20.2,15.3-35.5,35.5-35.5h70.4v129.7h-23.3v82.6h23.3v141.4L58.8,599.2L58.8,599.2z M129.7,433.9v-35.5H153v35.5H129.7zM153,599.2V457.8h23.3v-82.6H153V246.1h82.6h23.3h94.2h23.3H459v129.7h-23.3v82.6H459v141.4H153V599.2z M459,433.9v-35.5h23.3v35.5H459z M588.7,563.7c0,20.2-15.3,35.5-35.5,35.5h-71V457.8h23.3v-82.6h-23.3V246.1h70.4c20.2,0,35.5,15.3,35.5,35.5v282.1H588.7z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;