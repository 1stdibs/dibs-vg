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
                { className: [this.props.className, 'dibsvg-svg dibsvg-iphone'].join(' '), 'data-tn': 'iphone', viewBox: '-110 0 425 425' },
                React.createElement('path', { d: 'M176.7-0.5h-150C11.9-0.5,0,10.9,0,24.9v369.6c0,14,11.9,25.4,26.6,25.4h150c14.7,0,26.6-11.4,26.6-25.4V24.9C203.3,10.9,191.4-0.5,176.7-0.5z M101.5,17.8c3.3,0,5.9,2.6,5.9,5.9s-2.6,5.9-5.9,5.9c-3.3,0-5.9-2.6-5.9-5.9S98.3,17.8,101.5,17.8z M80.6,41.3h41.8c1.9,0,3.5,1.9,3.5,4.2c0,2.3-1.6,4.2-3.5,4.2H80.6c-1.9,0-3.5-1.9-3.5-4.2C77.1,43.2,78.7,41.3,80.6,41.3zM100.5,399.9c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5c11.3,0,20.5,9.2,20.5,20.5C121,390.7,111.9,399.9,100.5,399.9zM180.7,339.2H22.1v-271h158.6V339.2z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;