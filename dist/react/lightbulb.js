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
                { className: [this.props.className, 'dibsvg-svg dibsvg-lightbulb'].join(' '), 'data-tn': 'lightbulb', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M166.3,45.8c-14.1-9.9-27.9-12.1-29.2-12.3c-6.3-1.1-11.1-1.1-13.1-1.1v0c0,0-8.1,0-14.2,1.1c-1.3,0.2-15.1,2.5-28.9,12.4C67.7,55.2,52,73.5,51.7,107.2c-0.2,2.6-0.9,22.8,18.4,48c0.4,0.6,1.2,1.4,2.7,3c1.1,1.1,2.2,2.4,3.2,3.5c11.4,13.1,13.2,22.4,12.8,28l0,9c-0.1,1.3-0.1,7.1,3.8,11.3c0.5,0.6,1.2,1.1,2,1.7c-0.3,2-0.3,5.6,1.7,8.9c-0.6,3-1.5,9.5,1.8,14c1.1,1.4,3,3.1,6.1,3.8c0.3,2.4,1,5.3,3,7.5c1.8,2,4.4,3.1,7.3,3.1h18c0,0,0,0,0.1,0c0.8,0,4.1-0.2,6.7-3c1.7-1.9,2.6-4.4,2.8-7.5c1.7-0.4,4.1-1.3,6.1-3.6c2.7-3.1,3.6-7.6,2.8-13.4c1.3-1.8,2.6-4.7,1.9-9.2c0.8-0.5,1.7-1.1,2.4-1.8c4.3-4.3,4.6-11.1,4.6-11.8V190l-0.2-0.4c-0.9-10.9,7.3-22.2,12.3-28c1.9-2.2,4.6-5.5,5.4-6.5c19.3-25.2,18.6-45.4,18.4-48C195.7,73.5,179.7,55.2,166.3,45.8zM132.8,242.8l-18.2,0c-1.6,0-2.3-0.5-2.7-0.9c-0.7-0.8-1.1-1.9-1.3-2.9h25.6c-0.2,1-0.5,2.2-1.1,2.9C134,242.9,132.7,242.8,132.8,242.8z M140.3,233h-32.8c-3.1,0-4.1-1.5-4.4-1.9c-1.1-1.4-1.3-3.8-1.2-5.8c1.5,0.6,3.3,0.8,5.3,0.9l33.1-0.2c0,0,0,0,0.1,0c0.5,0,2.6,0.1,4.9-0.6c0,2.3-0.5,4.4-1.5,5.6C142.4,232.6,140.4,233,140.3,233z M146.1,217.9c-1.5,1.8-4.7,2.1-5.8,2.1h-32.7c-2.8,0-4.8-1-5.8-2.5c-0.8-1.2-1.1-2.6-1.1-3.7c0.7,0.1,1.5,0.2,2.3,0.2h20.8h1h21.9c0.1,0,0.2,0,0.4,0C147.2,215.6,146.9,216.9,146.1,217.9z M185.3,119.8c-1.7,6.8-5.7,17.6-15.1,29.8c-0.6,0.7-3.3,3.7-5.3,6.1c-7.2,8.4-15.9,21.1-14.9,34.6v8.6c0,0.9-0.2,4-1.5,5.4c-0.4,0.4-0.7,0.8-1.9,0.8h-21.9h-1H103c-2.4,0-3.2-0.9-3.5-1.2c-1.3-1.3-1.4-3.9-1.4-4.6l0-8.9c0.8-10.5-4.3-22.2-15-34.6c-1-1.2-2.3-2.6-3.4-3.7c-0.8-0.9-1.9-2-2.1-2.4c-9.4-12.2-13.4-22.9-15.1-29.8c-1.9-7.4-1.5-12-1.5-12l0-0.4c0.3-56.7,48-64.5,50-64.8l0.1,0c3.7-0.6,8.3-0.9,10.7-0.9c0.4,0,0.8,0,1.3,0c2,0,6.3,0,12.3,1l0.1,0c2.1,0.3,50.9,8,51.2,64.7l0,0.4C186.7,107.8,187.1,112.4,185.3,119.8z' }),
                React.createElement('path', { d: 'M122.7,25C122.7,25,122.7,25,122.7,25c1.4,0,2.6-0.9,2.6-2.4l-0.1-20.1c0-1.4-1.2-2.5-2.6-2.5c0,0,0,0,0,0c-1.4,0-2.6,1.1-2.6,2.5l0.1,19.9C120.2,23.8,121.3,25,122.7,25z' }),
                React.createElement('path', { d: 'M228.6,79.9c-0.5-1.3-2-1.9-3.3-1.4l-19.3,7.9c-1.3,0.5-1.9,2-1.4,3.3c0.4,1,1.4,1.6,2.4,1.6c0.3,0,0.7-0.1,1-0.2l19.3-7.9C228.5,82.7,229.1,81.2,228.6,79.9z' }),
                React.createElement('path', { d: 'M42.1,90.3c1,0,2-0.6,2.4-1.6c0.5-1.3-0.1-2.8-1.4-3.3l-19.5-7.7c-1.3-0.5-2.8,0.1-3.3,1.4c-0.5,1.3,0.1,2.8,1.4,3.3l19.5,7.7C41.4,90.3,41.8,90.3,42.1,90.3z' }),
                React.createElement('path', { d: 'M193.1,24.2l-14.8,15.6c-1,1-0.9,2.7,0.1,3.6c0.5,0.5,1.1,0.7,1.8,0.7c0.7,0,1.4-0.3,1.9-0.8l14.8-15.6c1-1,0.9-2.7-0.1-3.6C195.7,23.1,194.1,23.1,193.1,24.2z' }),
                React.createElement('path', { d: 'M220.2,146.2l-18.7-8.5c-1.3-0.6-2.8,0-3.4,1.3c-0.6,1.3,0,2.8,1.3,3.4l18.7,8.5c0.3,0.2,0.7,0.2,1.1,0.2c1,0,1.9-0.6,2.3-1.5C222,148.3,221.5,146.8,220.2,146.2z' }),
                React.createElement('path', { d: 'M46.4,138.6l-20.5,6.8c-1.3,0.4-2.1,1.9-1.6,3.2c0.4,1.1,1.4,1.8,2.4,1.8c0.3,0,0.5,0,0.8-0.1l20.5-6.8c1.3-0.4,2.1-1.9,1.6-3.2C49.2,138.9,47.7,138.2,46.4,138.6z' }),
                React.createElement('path', { d: 'M67.6,43.7c0.6,0,1.3-0.2,1.8-0.7c1-1,1.1-2.6,0.1-3.6L54.7,24.1c-1-1-2.6-1.1-3.6-0.1c-1,1-1.1,2.6-0.1,3.6l14.7,15.3C66.2,43.5,66.9,43.7,67.6,43.7z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;