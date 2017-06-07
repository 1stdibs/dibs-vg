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
                { className: [this.props.className, 'dibsvg-svg dibsvg-bookmark'].join(' '), 'data-tn': 'bookmark', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M52.3,8c41.8,0,83.7,0,125.5,0c5.8,0,11.7,0,17.5,0c-1.7-1.7-3.3-3.3-5-5c0,27.3,0,54.6,0,81.8c0,43.5,0,87,0,130.4c0,10,0,20,0,30c2.8-1.2,5.7-2.4,8.5-3.5c-20.9-23.2-41.7-46.4-62.6-69.7c-3-3.3-5.9-6.6-8.9-9.9c-1.7-1.9-5.3-1.9-7.1,0c-20.9,23.2-41.7,46.4-62.6,69.7c-3,3.3-5.9,6.6-8.9,9.9c2.8,1.2,5.7,2.4,8.5,3.5c0-27.3,0-54.6,0-81.8c0-43.5,0-87,0-130.4c0-10,0-20,0-30c0-6.4-10-6.4-10,0c0,27.3,0,54.6,0,81.8c0,43.5,0,87,0,130.4c0,10,0,20,0,30c0,4.2,5.6,6.8,8.5,3.5c20.9-23.2,41.7-46.4,62.6-69.7c3-3.3,5.9-6.6,8.9-9.9c-2.4,0-4.7,0-7.1,0c20.9,23.2,41.7,46.4,62.6,69.7c3,3.3,5.9,6.6,8.9,9.9c3,3.3,8.5,0.6,8.5-3.5c0-27.3,0-54.6,0-81.8c0-43.5,0-87,0-130.4c0-10,0-20,0-30c0-2.7-2.3-5-5-5c-41.8,0-83.7,0-125.5,0C64-2,58.1-2,52.3-2C45.8-2,45.8,8,52.3,8z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;