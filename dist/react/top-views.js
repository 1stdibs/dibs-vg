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
                { className: [this.props.className, 'dibsvg-svg dibsvg-top-views'].join(' '), 'data-tn': 'top-views', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M68.8139721,32.4404096 C62.9136312,29.9073461 56.808455,28.4832031 51.1694907,28.4832031 C44.4814226,28.4832031 37.5780754,29.9427292 31.0546578,32.7108551 C29.754831,35.4481648 29.0719048,38.4454766 29.0719048,41.5445091 C29.0719048,53.0052035 38.4381631,62.3026909 50.0004762,62.3026909 C61.5622572,62.3026909 70.9266667,53.0057336 70.9266667,41.5445091 C70.9266667,38.3404453 70.1974567,35.2446439 68.8139721,32.4404096 Z M75.2564131,35.6981206 C75.6993367,37.5960345 75.9266667,39.5548834 75.9266667,41.5445091 C75.9266667,55.7752809 64.315622,67.3026909 50.0004762,67.3026909 C35.6849541,67.3026909 24.0719048,55.7749093 24.0719048,41.5445091 C24.0719048,39.6254421 24.2835792,37.7351967 24.6965744,35.8998718 C17.5701343,40.0591488 11.2058344,45.878338 6.5053606,53.1288002 C6.65756936,53.2690303 6.81311841,53.4111227 6.9719809,53.5549847 C9.8610021,56.1712128 13.2002466,58.7961254 16.933574,61.245921 C27.5292357,68.1987549 39.0785907,72.3488281 51.1694907,72.3488281 C63.2198418,72.3488281 74.2774941,68.2298239 84.109759,61.33216 C87.5674703,58.9064593 90.6166414,56.3083891 93.2190789,53.7208293 C93.3876322,53.5532395 93.5518332,53.3881212 93.7116522,53.2256267 C89.3686048,46.1423875 82.7058725,40.0598514 75.2564131,35.6981206 Z M100,54.1653674 C100,54.1653674 81.0879437,78 51.1694907,78 C21.2534792,78 0,54.1653674 0,54.1653674 C11.9122027,31.8119537 34.9992675,23 51.1694907,23 C67.3421554,23 90.46096,34.4105835 100,54.1653674 Z', id: 'Combined-Shape' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;