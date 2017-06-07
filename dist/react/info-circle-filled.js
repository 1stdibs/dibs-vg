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
                { className: [this.props.className, 'dibsvg-svg dibsvg-info-circle-filled'].join(' '), 'data-tn': 'info-circle-filled', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M125.7,0.5 C57.1,0.5 1.20000005,56.4 1.20000005,125 C1.20000005,193.6 57.1,249.5 125.7,249.5 C194.3,249.5 250.2,193.6 250.2,125 C250.2,56.4 194.4,0.5 125.7,0.5 L125.7,0.5 L125.7,0.5 Z M139.7,51.2 C136.4,51.2 133.6,52.5 131.3,55.1 C128.9,57.7 127.7,60.8 127.7,64.3 C127.7,67.6 128.9,70.6 131.3,73.2 C133.7,75.8 136.5,77.1 139.7,77.1 C143.2,77.1 146.2,75.7 148.5,73 C150.9,70.3 152.1,67.1 152.1,63.4 C152.1,60.1 150.9,57.3 148.6,54.8 C146.3,52.5 143.3,51.2 139.7,51.2 L139.7,51.2 L139.7,51.2 Z M134.8,187.9 C131.2,187.9 128.5,187.2 126.9,185.9 C125.3,184.6 124.5,182.1 124.5,178.4 C124.5,176.9 124.7,174.9 125.2,172.5 C125.7,170.1 126.2,167.6 126.9,165.1 L137.1,124.3 C137.6,122.3 138,120.3 138.3,118.3 C138.6,116.3 138.7,114.7 138.7,113.6 C138.7,109.4 137.5,106 135.1,103.5 C132.7,101 128.9,99.8 123.7,99.8 C121.4,99.8 118.3,100.3 114.3,101.4 C110.3,102.5 105.9,104.2 100.9,106.4 L99.5,112.5 C100.7,112.2 102.5,111.8 104.8,111.3 C107.1,110.9 109,110.6 110.4,110.6 C114,110.6 116.5,111.2 117.6,112.4 C118.8,113.6 119.4,116 119.4,119.6 C119.4,121.4 119.2,123.6 118.7,126.1 C118.2,128.7 117.7,131.1 117.2,133.3 L107.1,174.1 C106.5,176.5 106.1,178.6 105.9,180.2 C105.6,181.8 105.5,183.3 105.5,184.8 C105.5,188.7 106.8,192 109.3,194.6 C111.9,197.3 115.7,198.6 120.8,198.6 C123.3,198.6 126.3,198.1 129.8,197.2 C133.3,196.3 138,194.6 143.9,192.3 L145.3,186.2 C144.1,186.6 142.3,187 140.1,187.4 C137.8,187.8 136,187.9 134.8,187.9 L134.8,187.9 L134.8,187.9 Z', fillRule: 'evenodd' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;