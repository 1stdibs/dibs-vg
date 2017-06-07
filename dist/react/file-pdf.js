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
                { className: [this.props.className, 'dibsvg-svg dibsvg-file-pdf'].join(' '), 'data-tn': 'file-pdf', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M148.2,0H30v250h189V73.7L148.2,0z M148,12.8L203,70h-55V12.8z M210,241H39V9h100v70h71V241z' }),
                React.createElement('path', { d: 'M123.4,124c0,0,4.3-24.2,3.1-32.4c-0.2-1.1-0.3-1.4-0.6-2.3l-0.4-0.9c-1.2-2.7-3.4-5.5-7-5.3l-2.1-0.1l-0.1,0c-4,0-7.2,2-8.1,5.1c-2.6,9.5,0.1,23.8,4.9,42.2l-1.2,3c-3.5,8.4-7.8,16.9-11.6,24.4l-0.5,1c-4,7.9-7.7,14.5-11,20.2l-3.4,1.8c-0.2,0.1-6.1,3.2-7.5,4.1c-11.6,7-19.4,14.8-20.6,21.1c-0.4,2-0.1,4.6,2,5.7l3.3,1.7c1.4,0.7,2.9,1.1,4.5,1.1c8.3,0,17.9-10.3,31.2-33.5c15.3-5,32.7-9.1,48-11.4c11.6,6.6,26,11.1,35,11.1c1.6,0,3-0.2,4.1-0.5c1.7-0.5,3.2-1.4,4.1-2.8c1.8-2.6,2.1-6.3,1.6-10c-0.1-1.1-1-2.5-2-3.4c-2.7-2.6-8.6-4-17.7-4.2c-6.1-0.1-13.5,0.5-21.3,1.6c-3.5-2-7.1-4.2-9.9-6.8c-7.6-7.1-13.9-16.9-17.8-27.6C123,125.7,123.2,124.9,123.4,124z M65.5,207.9c1.5-4.1,7.5-12.3,16.3-19.6c0.6-0.5,1.9-1.7,3.2-2.9C75.8,200.2,69.6,206.1,65.5,207.9z M171.7,167.1c4.9,0,6.3,0,11.1,1.2c4.8,1.2,4.8,3.7,4,4.2c-0.8,0.5-3.2,0.8-4.7,0.8c-4.9,0-10.9-2.2-19.3-5.8C166.1,167.2,169,167.1,171.7,167.1z M117.9,87.2c2.7,0,4.2,6.7,4.3,13c0.1,6.3-1.3,10.7-3.2,14c-1.5-4.8-2.2-12.5-2.2-17.5C116.8,96.7,116.7,87.2,117.9,87.2z M134.9,161.3c0.8,0.7,1.7,1.4,2.6,2.1c-13.4,2.7-25,5.9-35.2,9.8c1.9-3.3,3.8-6.8,5.8-10.5c4.8-9.1,7.9-16.2,10.1-22.1C122.7,148.8,128.3,155.8,134.9,161.3z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;