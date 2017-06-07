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
                { className: [this.props.className, 'dibsvg-svg dibsvg-baby-bottle'].join(' '), 'data-tn': 'baby-bottle', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M84.9,47.5c3.5,1.5,4.4,2.7,8.4-0.5c4.3-4.3,3.1-8.4,0-12.1c3.7-6.1,4.5-12.8,2.1-19.5c0,0,8.4-7.4,2.5-13.3c-5.9-5.9-13,2.8-13,2.8c-6.8-1.7-13.8-1.8-20.4,1.4c-3.7-3.1-7.2-3.1-11,0c-2,1.6-3,5.7-0.6,9c-3.3,0.3-8.5,1.5-11,4.1L4,56.9c-2.8,2.8-4,3.6-4,7.6c0,3.9,1.8,8,4.5,10.8l20.5,20.7c5.7,5.7,12.9,5.3,18.6-0.4l37.2-37.3C83.3,55.6,84.6,50.9,84.9,47.5zM83.7,8.3c1.3,0.6,2.8,0.4,3.8-0.6l3-3c1.3-1.3,3.5-1.3,4.9,0s1.3,3.5,0,4.9l-3,3c-1,1-1.3,2.5-0.6,3.8c2.3,4.7,0.9,11.5-1.3,16.1L67.6,9.5C72.2,7.4,79,6,83.7,8.3z M28.3,94.4L5.5,71.6c-1.5-1.5-2.4-3.5-2.4-5.7c0-2.1,0.8-4.2,2.4-5.7l38.7-38.7c3.1-3.1,10-4.9,13.2-1.8l22.8,22.8c3.1,3.1,1.3,10-1.8,13.1L39.7,94.4C36.6,97.6,31.5,97.6,28.3,94.4z M86.5,44.1L55,12.6c-0.7-1.5-0.6-2.6,0.9-4.1c1.1-1.1,3.5-1.7,4.6-0.6L92,39.5c1.1,1.1,0.5,3.5-0.6,4.6C90.4,45.2,87.6,45.2,86.5,44.1z M45,31l4.1,4.1c1.3,1.3,2.4,2.3,3.7,1c1.3-1.3,0.3-2.4-1-3.7l-4.1-4.1c-1.3-1.3-2.4-2.3-3.7-1C42.7,28.6,43.7,29.7,45,31z M35.8,35.5c-1.3,1.3-0.4,2.5,0.8,3.8l9,9c1.3,1.3,2.5,2.1,3.8,0.8c1.3-1.3,0.4-2.5-0.9-3.8l-9-9C38.3,35.1,37.1,34.2,35.8,35.5z M31.4,44.5c-1.3-1.3-2.5-2.2-3.8-0.9c-1.3,1.3,0,3.4,1.3,4.7l4.1,4.1c1.3,1.3,2.1,1.3,3.4,0c1.3-1.3,0.4-2.5-0.9-3.8L31.4,44.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;