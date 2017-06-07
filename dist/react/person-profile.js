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
                { className: [this.props.className, 'dibsvg-svg dibsvg-person-profile'].join(' '), 'data-tn': 'person-profile', viewBox: '0 0 500 500' },
                React.createElement('path', { d: 'M28.1,475v-48.4c0-15.9,25.7-29.1,34.9-32.6c4.6-1.5,60.5-19.6,105.3-36.5c19-7.2,32.1-18.7,39-34.1 c10.5-23.3,2.3-46.1,1.4-48.7l-0.8-2.1l-1.4-1.8c-10.8-13.2-25.3-34.2-27.3-37.1c-25.7-43.2-10.6-99.2-10.4-99.8l0.2-0.8l0.1-0.8 c5.8-36.4,21.4-60.7,46.3-72.3c19-8.8,36.9-7,37-6.9l0.7,0.1l0.7,0c30.3,0.7,53.3,14.5,68.2,41c11.9,21.1,14.3,42.6,14.3,42.7l0.1,1 l0.2,0.9c11.9,49-5.4,84.3-5.6,84.6l-0.4,0.8c-7,15.9-25.8,38.7-32.5,46.1l-1.2,1.3l-0.8,1.6c-10.1,19.5-9.4,39.2,1.9,55.6 c8.1,11.7,18.8,17.7,20,18.4l0.9,0.5L426,387.2l0.6,0.2c42.3,13.4,45.2,34.9,45.4,36.8V475H500v-51.1c0-2.1-0.4-13-9.3-26.2 c-10.9-16.3-29.5-28.7-55.3-36.9l-104.7-38.5c-1.6-1-6.2-4.3-9.6-9.2c-5.2-7.5-5.5-15.6-0.8-25.4c5.6-6.3,26.8-31.2,35.9-51.8 c2.5-5.1,21.3-46.2,7.8-102.7c-0.7-5.2-4.2-28.3-17.1-51.7c-19.7-35.6-51.5-55-92-56.1c-4.5-0.4-26.4-1.7-50,8.8 c-42.9,19.1-58.2,61.1-63.5,93.2c-2.2,8.3-16.9,70.2,13.8,121.3l0.4,0.7c0.6,0.9,15.2,22.2,27.2,37.2c1.1,4.2,3.3,15.3-1.3,25.5 c-3.8,8.4-11.6,14.9-23.4,19.4c-45.8,17.4-103.6,35.9-104.2,36.1l-0.5,0.2c-5.5,2-53.6,20.6-53.6,59V475H28.1z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;