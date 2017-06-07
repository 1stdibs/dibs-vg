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
                { className: [this.props.className, 'dibsvg-svg dibsvg-benefits-egg'].join(' '), 'data-tn': 'benefits-egg', viewBox: '-10 35 440 440' },
                React.createElement('path', { d: 'M310,193.9c-28.1-48.3-63-74.8-98.7-74.8s-70.6,26.5-98.7,74.8c-23.1,39.5-37.8,88.2-37.8,124.7c0,37.8,16,72.2,41.2,96.6c-14.7,5.5-23.1,12.6-23.1,19.7c0,18.5,52.9,33.6,118.4,33.6s118.4-15.1,118.4-33.6c0-7.6-8.8-14.3-23.1-19.7c25.2-24.4,41.2-58.8,41.2-96.6C347.8,282.1,333.1,233.4,310,193.9z M211.7,443.4c-65.9,0-121.8-63-121.8-124.7c0-77.3,57.1-186.5,120.1-186.5c64.3,0,122.2,115.9,122.2,186.5C332.2,387.9,278.5,443.4,211.7,443.4z M216.7,283.8c-7.6-3.4-13-6.3-15.5-8.8c-2.5-2.9-4.2-6.3-4.2-10.9c0-5,1.3-8.8,3.8-11.8c2.5-2.9,6.7-4.6,12.2-4.6s9.7,1.7,12.6,5.5c2.9,3.4,4.6,8.4,4.6,15.1h26v-0.4c0-11.3-2.9-20.2-9.2-27.3c-6.3-7.1-14.7-11.3-25.6-12.6v-19.7h-14.3v19.3c-11.3,1.3-20.2,5-26.9,11.3c-6.7,6.3-10.1,14.7-10.1,24.8c0,10.9,3.4,19.7,10.1,25.6c6.7,5.9,16.8,11.3,30.7,16c7.1,2.9,12.2,5.5,15.1,8.4c2.9,2.9,4.2,7.1,4.2,11.8c0,5-1.7,8.8-4.6,11.8c-2.9,2.9-7.6,4.2-13.4,4.2s-10.9-1.7-14.7-5c-3.8-3.4-5.9-8.8-5.9-16.4h-26l-0.4,0.4c-0.4,13,3.4,22.7,10.9,29.4s17.2,10.5,28.6,11.3v17.6h14.3v-17.6c11.3-1.3,20.6-5,26.9-11.3c6.7-6.3,9.7-14.7,9.7-25.2c0-10.9-3.4-19.7-10.1-26C240.2,293.4,230.2,288,216.7,283.8z' }),
                React.createElement('path', { d: 'M415.8,309.8h-42.4c-2.5,0-4.2-1.7-4.2-4.2v-10.1c0-2.1,1.7-4.2,4.2-4.2h42.4c2.5,0,4.2,2.1,4.2,4.2v10.1C420,308.1,418.3,309.8,415.8,309.8z' }),
                React.createElement('path', { d: 'M217.6,53.2v42c0,2.1-1.7,4.2-4.2,4.2h-10.1c-2.1,0-4.2-1.7-4.2-4.2v-42c0-2.1,2.1-4.2,4.2-4.2h10.1C215.9,49,217.6,50.7,217.6,53.2z' }),
                React.createElement('path', { d: 'M46.6,309.8H4.2c-2.1,0-4.2-1.7-4.2-4.2v-10.1c0-2.1,1.7-4.2,4.2-4.2h42.4c2.1,0,4.2,2.1,4.2,4.2v10.1C50.8,308.1,48.7,309.8,46.6,309.8z' }),
                React.createElement('path', { d: 'M94.5,169.5l-29.8-29.4c-1.7-1.7-1.7-4.2,0-5.9l7.1-7.1c1.7-1.7,4.2-1.7,5.9,0l29.8,29.4c1.7,1.7,1.7,4.2,0,5.9l-6.7,7.1C99.1,171.2,96.2,171.2,94.5,169.5z' }),
                React.createElement('path', { d: 'M323.8,169.5l29.8-29.4c1.7-1.7,1.7-4.2,0-5.9l-7.1-7.1c-1.7-1.7-4.2-1.7-5.9,0l-29.8,29.4c-1.7,1.7-1.7,4.2,0,5.9l7.1,7.1C319.6,171.2,322.1,171.2,323.8,169.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;