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
                { className: [this.props.className, 'dibsvg-svg dibsvg-mastercard'].join(' '), 'data-tn': 'payment-mastercard', viewBox: '0 0 500 312' },
                React.createElement('rect', { className: 'dibsvg-color-holder', width: '500', height: '312', fill: '#F8F8F8' }),
                React.createElement('rect', { className: 'dibsvg-color-middle', fill: '#FF5F00', width: '102.882', height: '167.813', x: '198.707', y: '45.126' }),
                React.createElement('path', { className: 'dibsvg-color-letter', fill: '#000000', d: 'M139.705882,289.433112 L139.705882,271.643738 C139.705882,264.824478 135.555028,260.377135 128.735769,260.377135 C125.177894,260.377135 121.323529,261.563093 118.655123,265.417457 C116.579696,262.156072 113.614801,260.377135 109.167457,260.377135 C106.202562,260.377135 102.941176,261.266603 100.56926,264.527989 L100.56926,260.970114 L94.9359583,260.970114 L94.9359583,289.433112 L100.56926,289.433112 L100.56926,273.126186 C100.56926,268.085863 103.534156,265.713947 107.685009,265.713947 C111.835863,265.713947 114.20778,268.382353 114.20778,273.126186 L114.20778,289.433112 L119.841082,289.433112 L119.841082,273.126186 C119.841082,268.085863 122.805977,265.713947 126.956831,265.713947 C131.107685,265.713947 133.479602,268.382353 133.479602,273.126186 L133.479602,289.433112 L139.705882,289.433112 Z M232.210626,261.266603 L221.833491,261.266603 L221.833491,252.668406 L216.20019,252.668406 L216.20019,261.266603 L210.270398,261.266603 L210.270398,266.306926 L216.20019,266.306926 L216.20019,279.648956 C216.20019,286.171727 218.572106,290.026091 225.687856,290.026091 C228.356262,290.026091 231.321157,289.136622 233.396584,287.950664 L231.617647,282.910342 C229.83871,284.0963 227.763283,284.392789 226.280835,284.392789 C223.315939,284.392789 221.833491,282.613852 221.833491,279.648956 L221.833491,266.010436 L232.210626,266.010436 L232.210626,261.266603 Z M284.985769,260.377135 C281.427894,260.377135 278.759488,262.156072 277.27704,264.527989 L277.27704,260.970114 L271.643738,260.970114 L271.643738,289.433112 L277.27704,289.433112 L277.27704,273.422676 C277.27704,268.678843 279.648956,265.713947 283.503321,265.713947 C284.689279,265.713947 286.171727,266.010436 287.357685,266.306926 L289.136622,260.970114 C287.950664,260.673624 286.171727,260.377135 284.985769,260.377135 L284.985769,260.377135 Z M205.230076,263.34203 C202.26518,261.266603 198.114326,260.377135 193.666983,260.377135 C186.551233,260.377135 182.10389,263.63852 182.10389,269.271822 C182.10389,274.015655 185.365275,276.684061 191.591556,277.573529 L194.556452,277.870019 C197.817837,278.462998 199.893264,279.648956 199.893264,281.131404 C199.893264,283.206831 197.521347,284.689279 193.074004,284.689279 C188.62666,284.689279 185.661765,283.206831 183.586338,281.724383 L180.621442,286.171727 C184.772296,289.136622 189.812619,289.729602 192.777514,289.729602 C201.079222,289.729602 205.526565,285.875237 205.526565,280.538425 C205.526565,275.498102 201.968691,273.126186 195.74241,272.236717 L192.777514,271.940228 C190.109108,271.643738 187.737192,270.754269 187.737192,268.975332 C187.737192,266.899905 190.109108,265.417457 193.370493,265.417457 C196.928368,265.417457 200.486243,266.899905 202.26518,267.789374 L205.230076,263.34203 Z M291.212049,275.201613 C291.212049,283.79981 296.845351,290.026091 306.036528,290.026091 C310.187381,290.026091 313.152277,289.136622 316.117173,286.764706 L313.152277,282.317362 C310.780361,284.0963 308.408444,284.985769 305.740038,284.985769 C300.699715,284.985769 296.845351,281.131404 296.845351,275.498102 C296.845351,269.864801 300.699715,266.010436 305.740038,266.010436 C308.408444,266.010436 310.780361,266.899905 313.152277,268.678843 L316.117173,264.231499 C313.152277,261.859583 310.187381,260.970114 306.036528,260.970114 C297.141841,260.377135 291.212049,266.603416 291.212049,275.201613 L291.212049,275.201613 Z M251.482448,260.377135 C243.18074,260.377135 237.547438,266.306926 237.547438,275.201613 C237.547438,284.0963 243.47723,290.026091 252.075427,290.026091 C256.226281,290.026091 260.377135,288.840133 263.63852,286.171727 L260.673624,282.020873 C258.301708,283.79981 255.336812,284.985769 252.371917,284.985769 C248.517552,284.985769 244.366698,282.613852 243.773719,277.573529 L264.824478,277.573529 L264.824478,275.201613 C264.824478,266.306926 259.487666,260.377135 251.482448,260.377135 L251.482448,260.377135 Z M251.185958,265.713947 C255.336812,265.713947 258.301708,268.382353 258.598197,272.829696 L243.18074,272.829696 C244.070209,268.678843 246.738615,265.713947 251.185958,265.713947 L251.185958,265.713947 Z M174.395161,275.201613 L174.395161,260.970114 L168.76186,260.970114 L168.76186,264.527989 C166.686433,261.859583 163.721537,260.377135 159.570683,260.377135 C151.565465,260.377135 145.635674,266.603416 145.635674,275.201613 C145.635674,283.79981 151.565465,290.026091 159.570683,290.026091 C163.721537,290.026091 166.686433,288.543643 168.76186,285.875237 L168.76186,289.433112 L174.395161,289.433112 L174.395161,275.201613 Z M151.565465,275.201613 C151.565465,269.864801 154.82685,265.713947 160.460152,265.713947 C165.796964,265.713947 169.058349,269.864801 169.058349,275.201613 C169.058349,280.834915 165.500474,284.689279 160.460152,284.689279 C154.82685,284.985769 151.565465,280.538425 151.565465,275.201613 L151.565465,275.201613 Z M370.671252,260.377135 C367.113378,260.377135 364.444972,262.156072 362.962524,264.527989 L362.962524,260.970114 L357.329222,260.970114 L357.329222,289.433112 L362.962524,289.433112 L362.962524,273.422676 C362.962524,268.678843 365.33444,265.713947 369.188805,265.713947 C370.374763,265.713947 371.857211,266.010436 373.043169,266.306926 L374.822106,260.970114 C373.636148,260.673624 371.857211,260.377135 370.671252,260.377135 L370.671252,260.377135 Z M348.731025,275.201613 L348.731025,260.970114 L343.097723,260.970114 L343.097723,264.527989 C341.022296,261.859583 338.0574,260.377135 333.906546,260.377135 C325.901328,260.377135 319.971537,266.603416 319.971537,275.201613 C319.971537,283.79981 325.901328,290.026091 333.906546,290.026091 C338.0574,290.026091 341.022296,288.543643 343.097723,285.875237 L343.097723,289.433112 L348.731025,289.433112 L348.731025,275.201613 Z M325.901328,275.201613 C325.901328,269.864801 329.162713,265.713947 334.796015,265.713947 C340.132827,265.713947 343.394213,269.864801 343.394213,275.201613 C343.394213,280.834915 339.836338,284.689279 334.796015,284.689279 C329.162713,284.985769 325.901328,280.538425 325.901328,275.201613 L325.901328,275.201613 Z M405.95351,275.201613 L405.95351,249.70351 L400.320209,249.70351 L400.320209,264.527989 C398.244782,261.859583 395.279886,260.377135 391.129032,260.377135 C383.123814,260.377135 377.194023,266.603416 377.194023,275.201613 C377.194023,283.79981 383.123814,290.026091 391.129032,290.026091 C395.279886,290.026091 398.244782,288.543643 400.320209,285.875237 L400.320209,289.433112 L405.95351,289.433112 L405.95351,275.201613 Z M383.123814,275.201613 C383.123814,269.864801 386.385199,265.713947 392.018501,265.713947 C397.355313,265.713947 400.616698,269.864801 400.616698,275.201613 C400.616698,280.834915 397.058824,284.689279 392.018501,284.689279 C386.385199,284.985769 383.123814,280.538425 383.123814,275.201613 Z' }),
                React.createElement('path', { className: 'dibsvg-color-left', fill: '#EB001B', d: 'M209.08444,129.032258 C209.08444,94.9359583 225.094877,64.6940228 249.70351,45.1257116 C231.617647,30.8942125 208.787951,22.2960152 183.882827,22.2960152 C124.881404,22.2960152 77.1465844,70.0308349 77.1465844,129.032258 C77.1465844,188.033681 124.881404,235.768501 183.882827,235.768501 C208.787951,235.768501 231.617647,227.170304 249.70351,212.938805 C225.094877,193.370493 209.08444,163.128558 209.08444,129.032258 Z' }),
                React.createElement('path', { className: 'dibsvg-color-right', fill: '#F79E1B', d: 'M422.556926,129.032258 C422.556926,188.033681 374.822106,235.768501 315.820683,235.768501 C290.91556,235.768501 268.085863,227.170304 250,212.938805 C274.905123,193.370493 290.61907,163.128558 290.61907,129.032258 C290.61907,94.9359583 274.608634,64.6940228 250,45.1257116 C268.085863,30.8942125 290.91556,22.2960152 315.820683,22.2960152 C374.822106,22.2960152 422.556926,70.0308349 422.556926,129.032258 Z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;