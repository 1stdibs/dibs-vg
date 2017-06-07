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
                { className: [this.props.className, 'dibsvg-svg dibsvg-listing-views'].join(' '), 'data-tn': 'listing-views', viewBox: '0 0 100 100' },
                React.createElement('path', { d: 'M59.1024307,40.4680903 C56.2568596,39.3481954 53.3335604,38.7243948 50.6173033,38.7243948 C47.3929029,38.7243948 44.071347,39.3695288 40.9094986,40.5987077 C40.2739392,41.9713574 39.9398837,43.4760057 39.9398837,45.0333954 C39.9398837,50.7518361 44.4607139,55.3872129 50.0371351,55.3872129 C55.6132683,55.3872129 60.1331759,50.7521314 60.1331759,45.0333954 C60.1331759,43.4249997 59.7772885,41.8726481 59.1024307,40.4680903 Z M63.5745044,42.6811576 C63.7008802,43.4520588 63.7652807,44.2383049 63.7652807,45.0333954 C63.7652807,52.8089993 57.6192815,59.1116077 50.0371351,59.1116077 C42.4548149,59.1116077 36.3077788,52.808821 36.3077788,45.0333954 C36.3077788,44.2696505 36.3672507,43.5141243 36.484078,42.7723814 C32.9529762,44.9006294 29.8281912,47.8242928 27.5508562,51.4384577 C27.7820603,51.6530265 28.0322272,51.8786879 28.3008702,52.1137826 C29.7584147,53.3893083 31.4413245,54.6677179 33.322518,55.8606336 C38.6678727,59.2502678 44.5004005,61.2756052 50.6173033,61.2756052 C56.7193006,61.2756052 62.3148521,59.2613489 67.2862347,55.8910519 C69.0336245,54.7064272 70.5750859,53.4371856 71.8924526,52.1714024 C72.1474558,51.9263843 72.3831562,51.6918138 72.59918,51.4696197 C70.5273208,47.9504038 67.2701847,44.9092916 63.5745044,42.6811576 Z M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,96 C75.4050985,96 96,75.4050985 96,50 C96,24.5949015 75.4050985,4 50,4 C24.5949015,4 4,24.5949015 4,50 C4,75.4050985 24.5949015,96 50,96 Z M76.4465535,50.899862 L77,52.0040867 L76.2187976,52.9526087 C75.8820009,53.3615414 75.2631706,54.0366302 74.3759409,54.889119 C72.9157879,56.2920975 71.2161065,57.6916175 69.2893574,58.997837 C63.7632003,62.7442377 57.4967514,65 50.6173033,65 C43.7538201,65 37.28963,62.7553187 31.4121592,59.0282553 C29.3653636,57.7303268 27.5350917,56.3399747 25.9430396,54.9467388 C24.9774779,54.1017568 24.2975608,53.4342709 23.9261797,53.0330234 L23,52.0323603 L23.6637702,50.8323535 C29.2452454,40.7418009 40.3154352,35 50.6173033,35 C60.2423001,35 71.7718609,41.5730153 76.4465535,50.899862 Z', id: 'Combined-Shape' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;