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
                { className: [this.props.className, 'dibsvg-svg dibsvg-print'].join(' '), 'data-tn': 'print', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M63,250v-40H35.1c-3,0-12.9-0.7-20.5-7.8C9.2,197,6,189.6,7,180.5v-107c0-1.3,0-13.4,8.6-21.3c4.8-4.6,11.1-6.9,19.1-6.9c0.6,0,1.4,0,2.1,0l12.2,0V32.6l-0.2-0.1c0.5-7.1,6.3-9.7,9.4-10.1l0,0l4.8-0.1V0h124v22.1l5.3,0.1l0.1,0c3.1,0.4,9,3,9.6,10.1l0,0.1V46h10.8c0.6,0,1.3-0.5,1.9-0.5c7.9,0,14.5,2.1,19.3,6.7c8.8,8.3,9,20.6,9,21.1v107.1c0,9.3-2.6,16.5-8.4,21.9c-7.3,7-17.8,7.8-20.8,7.8H187v40H63z M177,239v-57H74v57H177z M34.4,55.2c-5,0-9,1.3-11.8,4c-5.5,5.1-5.6,14-5.6,14.1v80.5c8-8.6,21.5-9.8,27.2-9.8c1.2,0,2-0.1,2.3-0.1h159.1c14.2,0,22.4,4.7,27.4,9.5V73.3c0-0.4-0.3-8.9-5.9-14.1c-2.8-2.7-6.9-4-11.9-4c-0.6,0-1.2,0-1.8,0.1l-177.1,0C35.6,55.3,35,55.2,34.4,55.2z M177,44V10H74v34H177z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;