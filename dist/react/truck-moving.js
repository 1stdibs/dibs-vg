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
                { className: [this.props.className, 'dibsvg-svg dibsvg-truck-moving'].join(' '), 'data-tn': 'truck-moving', viewBox: '0 0 518 518' },
                React.createElement('path', { d: 'M467.6,235.5c0.2-1.2,3.5-28.7-23.1-59.3l-2-2.3H390v68h76.8L467.6,235.5z M403.7,227v-38.4h32.8c13.3,16.2,16.7,30.6,17.5,38.4H403.7z' }),
                React.createElement('path', { d: 'M412.8,355.1c-22.6,0-41.1,18.9-41.1,42.2c0,23.3,18.4,42.2,41.1,42.2c22.6,0,41.1-18.9,41.1-42.2C453.8,374,435.4,355.1,412.8,355.1z M412.8,409.3c-6.5,0-11.7-5.4-11.7-12.1c0-6.7,5.3-12.1,11.7-12.1s11.7,5.4,11.7,12.1C424.5,403.9,419.2,409.3,412.8,409.3z' }),
                React.createElement('path', { d: 'M120.8,355.1c-22.6,0-41.1,18.9-41.1,42.2c0,23.3,18.4,42.2,41.1,42.2c22.6,0,41.1-18.9,41.1-42.2C161.8,374,143.4,355.1,120.8,355.1z M120.8,409.3c-6.5,0-11.7-5.4-11.7-12.1c0-6.7,5.3-12.1,11.7-12.1c6.5,0,11.7,5.4,11.7,12.1C132.5,403.9,127.3,409.3,120.8,409.3z' }),
                React.createElement('path', { d: 'M501.9,313.3v-99.8l-15.4-42c-8.6-24.4-31.9-30.2-43.2-29.9h-80.6v14.1h80.7l0.2,0c0.9,0,22.4-0.3,29.7,20.5l14.6,39.8v102.8l2,2c0.1,0.1,9.7,10.4,9.7,23.9v34.2c0,0.1-0.1,6.6-4.5,8.4h-10.4c-1.1-6.4-3.7-16.5-9.6-26.6c-8.8-15.3-26.8-33.6-62.2-33.7c-2.6-0.2-16.2-0.8-31.4,6.1c-24.9,11.4-36.3,34.7-41.5,54.2H193.8c-2.1-6.3-6.5-17.1-14.2-28c-11.8-16.5-27.1-27-44.9-30.8h228V76.6H3.5v251.9h22.3v72.8h36.5l0.9-5.9c8.5-53.4,51.2-54.4,53-54.4l0.2,0c21.1-0.7,38.4,8,51.5,26.1c10.1,14,13.8,28.7,13.8,28.8l1.3,5.4h168.3l1.2-5.5c12.8-58.5,57.5-55,59.4-54.8l0.7,0c55,0,58.8,51.5,58.9,53.7l0.4,6.6h25.1l0.9-0.2c12.4-3.2,15.7-15.9,15.7-22.2v-34.2C513.7,329.7,505.8,318,501.9,313.3zM17.1,90.7H349v223.8H17.1V90.7z M50.4,387.2H39.8v-58.7h64.6c-5.1,1.2-11.4,3.2-18,6.8C73.4,342.5,56.9,357.3,50.4,387.2z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;