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
                { className: [this.props.className, 'dibsvg-svg dibsvg-logo-1st'].join(' '), 'data-tn': 'logo-1st', viewBox: '0 0 517 323' },
                React.createElement('path', { d: 'M120.4,297.7 C117.6,293.8 116.2,290 116.2,286.3 C116.2,282.6 118.2,274 122.2,260.3 L199.7,0 L190,0 L72.4,28.1 L74.4,36.7 C85.7,35.5 93.3,34.9 97.2,34.9 C105,34.9 111,36.9 115.2,40.9 C119.4,44.9 121.5,50.3 121.5,57.1 C121.5,60.6 121,64.3 120.1,68.3 C119.8,69.7 116,82.1 108.8,105.6 L63.2,260.3 C58.3,277 53.9,288 50,293.2 C46.1,298.4 41.1,302.2 35,304.5 C28.9,306.8 18.1,308.1 2.5,308.4 L0,316.6 L156.7,316.6 L159.2,308.4 C142.7,307.5 132.8,306.4 129.5,305.3 C126.3,304.1 123.2,301.6 120.4,297.7 L120.4,297.7 Z' }),
                React.createElement('path', { d: 'M340.2,112.2 C336.1,112.2 330.6,111.3 323.7,109.6 C309.9,106.1 298.3,104.4 288.8,104.4 C267.1,104.4 250.2,109.9 238.2,120.9 C226.2,131.9 220.2,145.7 220.2,162.3 C220.2,172.1 222.2,180.8 226.2,188.5 C231.9,199.1 243.6,214 261.5,233.4 C274.5,247.6 282.8,258 286.3,264.7 C289.9,271.4 291.7,278.3 291.7,285.5 C291.7,292.8 289,299.1 283.5,304.4 C278,309.7 271.1,312.3 262.7,312.3 C255.5,312.3 248,310 240.3,305.3 C232.5,300.6 226.3,294.3 221.6,286.4 C216.9,278.5 211.9,265.2 206.6,246.7 L199.2,246.7 L187.9,322.9 L196.5,322.9 C199.1,319.4 201.5,317.1 203.6,316 C205.7,314.9 208.7,314.4 212.5,314.4 C216.8,314.4 223.2,315.6 231.8,317.9 C244.8,321.3 255.7,323 264.6,323 C277.7,323 290.4,319.8 302.6,313.3 C314.8,306.8 323.9,298.3 330,287.6 C336.1,276.9 339.2,265.5 339.2,253.5 C339.2,242.4 336.6,232 331.4,222.3 C326.2,212.6 311.5,194.8 287.4,168.8 C280.5,161.5 276.1,155.7 274.1,151.4 C272.1,147.1 271.1,142.6 271.1,137.7 C271.1,131.9 273.4,127 278,122.8 C282.6,118.7 288.4,116.6 295.4,116.6 C306.8,116.6 317.5,121.8 327.5,132.3 C337.5,142.8 343.1,157.1 344.3,175.2 L352.9,175.2 L363.1,104.5 L354.9,104.5 C350.9,109.6 346.1,112.2 340.2,112.2 L340.2,112.2 Z' }),
                React.createElement('path', { d: 'M482.9,136.8 L508.9,136.8 L516.9,110.6 L491.3,110.6 L510.5,48.5 L498.1,48.5 C478.7,69.8 462.2,85.2 448.5,94.8 C434.8,104.4 418.6,112.8 400,119.9 L395.7,136.8 L425,136.8 L386,260.9 C381.7,274.8 379.6,286.2 379.6,295.1 C379.6,303.1 382.5,309.8 388.2,315 C393.9,320.2 402,322.9 412.4,322.9 C424.6,322.9 437.1,318.6 449.8,310.1 C462.5,301.5 474.1,288.1 484.6,269.7 L476.4,264.7 C467.1,278 459,287.3 451.9,292.7 C449.2,294.8 446.5,295.9 443.9,295.9 C442.2,295.9 440.7,295.4 439.3,294.3 C437.9,293.2 437.2,292 437.2,290.5 C437.2,286.2 438.5,279.8 441.2,271.5 L482.9,136.8 L482.9,136.8 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;