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
                { className: [this.props.className, 'dibsvg-svg dibsvg-commuter-train'].join(' '), 'data-tn': 'commuter-train', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M67.3,156.8c-1.5,1.5-2.2,3.5-2.2,5.5c0,2,0.7,4,2.2,5.5c1.5,1.5,3.5,2.2,5.5,2.2s4-0.7,5.5-2.2c1.5-1.5,2.2-3.5,2.2-5.5s-0.7-4-2.2-5.5C75.5,153.8,70.3,153.8,67.3,156.8z' }),
                React.createElement('path', { d: 'M172.7,156.8c-1.5,1.5-2.2,3.5-2.2,5.5c0,2,0.7,4,2.5,5.5c1.5,1.5,3.5,2.2,5.5,2.2c2,0,4-0.7,5.5-2.2c1.5-1.5,2.2-3.5,2.2-5.5s-0.7-4-2.2-5.5C180.7,153.8,175.5,153.8,172.7,156.8z' }),
                React.createElement('path', { d: 'M226.9,176.2V46.4c0-22.4-19.1-38.3-36.8-38.3h-49.2c-1-4.5-5-8-9.4-8h-14.9c-4.5,0-8.2,3.5-9.4,8H60.9c-22.4,0-37.5,15.9-37.5,38.3v129.8c0,14.2,12.4,32.3,31.3,35.8l-30.8,30.6c-1,1-1,2.7,0,4l1.5,1.5c1,1,2.7,1,4,0l35.5-35.5h120.3l35.5,35.5c1,1,2.7,1,4,0l1.5-1.5c1-1,1-2.7,0-4l-31.1-30.3C212.8,209.8,226.9,194.8,226.9,176.2z M190.1,204.5h-2.7c-0.7-0.2-1.5-0.2-2.2,0H64.3c-0.7-0.2-1.5-0.2-2.2,0h-1.2c-13.7,0-29.8-14.9-29.8-28.6V46.4c0-19.1,13.4-30.6,29.8-30.6h47c1.5,3.5,5,6,8.7,6h14.9c3.7,0,7.2-2.5,8.7-6h50.2c13.7,0,29.1,16.9,29.1,30.6v129.8C219.2,189.6,203.8,204.5,190.1,204.5z' }),
                React.createElement('path', { d: 'M169.7,35.7H81.5c-16.7,0-30.1,13.4-30.1,30.1v52.9c0,4.2,3.5,7.2,7.7,7.2h132.7c4.2,0,7.7-3,7.7-7.2V65.8C199.8,49.2,186.2,35.7,169.7,35.7z M191.4,117.3H59.9V65.8c0-8,9.9-20.9,17.9-20.9H173c8,0,18.4,12.9,18.4,20.9L191.4,117.3L191.4,117.3z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;