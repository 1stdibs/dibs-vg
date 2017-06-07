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
                { className: [this.props.className, 'dibsvg-svg dibsvg-info-circle'].join(' '), 'data-tn': 'info-circle', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.7,0.5C57.1,0.5,1.2,56.4,1.2,125s55.9,124.5,124.5,124.5S250.2,193.6,250.2,125S194.4,0.5,125.7,0.5z M125.7,239.5 c-63.1,0-114.5-51.4-114.5-114.5S62.6,10.5,125.7,10.5S240.2,61.9,240.2,125S188.8,239.5,125.7,239.5z' }),
                React.createElement('path', { d: 'M134.8,187.9c-3.6,0-6.3-0.7-7.9-2c-1.6-1.3-2.4-3.8-2.4-7.5c0-1.5,0.2-3.5,0.7-5.9c0.5-2.4,1-4.9,1.7-7.4l10.2-40.8 c0.5-2,0.9-4,1.2-6s0.4-3.6,0.4-4.7c0-4.2-1.2-7.6-3.6-10.1c-2.4-2.5-6.2-3.7-11.4-3.7c-2.3,0-5.4,0.5-9.4,1.6 c-4,1.1-8.4,2.8-13.4,5l-1.4,6.1c1.2-0.3,3-0.7,5.3-1.2c2.3-0.4,4.2-0.7,5.6-0.7c3.6,0,6.1,0.6,7.2,1.8c1.2,1.2,1.8,3.6,1.8,7.2 c0,1.8-0.2,4-0.7,6.5c-0.5,2.6-1,5-1.5,7.2l-10.1,40.8c-0.6,2.4-1,4.5-1.2,6.1c-0.3,1.6-0.4,3.1-0.4,4.6c0,3.9,1.3,7.2,3.8,9.8 c2.6,2.7,6.4,4,11.5,4c2.5,0,5.5-0.5,9-1.4c3.5-0.9,8.2-2.6,14.1-4.9l1.4-6.1c-1.2,0.4-3,0.8-5.2,1.2 C137.8,187.8,136,187.9,134.8,187.9z' }),
                React.createElement('path', { d: 'M139.7,51.2c-3.3,0-6.1,1.3-8.4,3.9c-2.4,2.6-3.6,5.7-3.6,9.2c0,3.3,1.2,6.3,3.6,8.9c2.4,2.6,5.2,3.9,8.4,3.9 c3.5,0,6.5-1.4,8.8-4.1c2.4-2.7,3.6-5.9,3.6-9.6c0-3.3-1.2-6.1-3.5-8.6C146.3,52.5,143.3,51.2,139.7,51.2z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;