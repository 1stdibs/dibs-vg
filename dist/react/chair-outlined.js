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
                { className: [this.props.className, 'dibsvg-svg dibsvg-chair-outlined'].join(' '), 'data-tn': 'chair-outlined', viewBox: '0 0 38 50' },
                React.createElement('path', { d: 'M20.2462,38.6456 C19.6062,38.6456 18.9232,38.6066 18.2442,38.5476 C18.1652,38.5476 9.7122,37.8686 5.1072,30.3186 L5.0672,30.2596 C5.0482,30.2196 2.3232,26.4746 1.7032,14.8216 L1.7032,14.8016 C1.7032,14.7426 1.1412,7.7936 2.5232,3.6276 L2.5432,3.5686 C2.5432,3.5496 3.0652,1.6256 4.2232,1.6256 C4.5452,1.6256 4.9022,1.7666 5.3222,2.0066 C5.3812,2.0456 5.9622,2.4066 7.1052,2.8266 C7.1442,4.2676 7.0462,7.8126 5.4832,11.3976 C5.4442,11.4956 4.4432,13.8596 4.4432,17.1026 C4.4232,17.4046 4.3412,20.2276 5.7232,23.0116 L5.7432,23.0306 C5.8412,23.2116 6.6852,24.7116 8.0042,24.9746 C8.4242,25.0526 9.0642,25.0526 9.7472,24.5156 L9.8262,24.4566 C10.3052,23.9776 11.1882,23.1136 11.5892,22.8736 C11.6672,22.8156 13.5132,21.6526 14.9342,23.3336 C15.0952,23.5926 16.1752,25.2966 17.2392,27.7776 C17.3372,27.9976 19.5632,33.1646 23.7682,34.2246 C24.3882,34.3856 25.9122,34.4446 26.8112,34.4446 L27.2112,34.4446 C28.5542,34.4056 30.7132,34.0636 32.8182,32.6226 C31.2002,34.8996 27.4982,38.6456 20.2462,38.6456 M27.0932,32.8586 C26.2732,32.8776 24.5492,32.7996 24.0902,32.6776 C22.4292,32.2576 21.1062,30.9736 20.1832,29.7336 C25.8292,29.4736 30.9172,29.5916 33.6192,29.7136 C31.4002,32.3206 28.6172,32.8196 27.0932,32.8586 M18.0242,3.6436 L22.5902,2.7206 L22.6292,2.7016 C22.6492,2.7016 23.8502,2.3796 25.2522,2.3796 C26.3322,2.3796 27.7762,2.5796 28.5152,3.5416 L28.5542,3.6006 L28.6322,3.6596 C28.7542,3.7806 29.5942,4.7586 28.1302,7.3226 C27.7692,7.8446 23.7252,13.8906 23.2462,19.1956 C23.1872,19.5176 23.0262,20.8366 23.8462,21.8576 C24.4082,22.5596 25.2872,22.8976 26.4102,22.8976 L26.5082,22.8976 C26.5872,22.8976 27.3882,22.8776 28.9702,22.3946 C28.9902,22.3946 31.0312,21.7546 32.9162,21.7546 C33.8392,21.7546 34.5772,21.9156 35.0402,22.2146 C35.1812,22.3366 36.5632,23.7966 34.9182,28.1626 C32.6762,28.0406 26.2492,27.8016 19.1392,28.1826 C18.7972,27.5816 18.6172,27.1806 18.6172,27.1616 C17.3962,24.3186 16.1942,22.4976 16.1552,22.4346 L16.1162,22.3756 C14.2552,20.1136 11.7102,20.8516 10.6502,21.5746 C10.0302,21.9746 8.9072,23.0976 8.6482,23.3376 C8.4672,23.4786 8.3502,23.4786 8.2672,23.4586 C7.8672,23.3806 7.3252,22.7366 7.1052,22.3166 C5.8842,19.8116 5.9822,17.2126 5.9822,17.1886 L5.9822,17.1496 C5.9822,14.2246 6.8852,12.0656 6.9052,12.0416 C8.4482,8.5156 8.6872,5.1116 8.6872,3.2906 C10.0502,3.6116 11.8522,3.8906 14.0742,3.8906 C15.3422,3.9066 16.6812,3.8236 18.0242,3.6436 M36.0252,20.9466 L36.0252,20.9466 C35.2642,20.4236 34.2432,20.1646 32.9632,20.1646 C30.8192,20.1646 28.6172,20.8636 28.5382,20.8876 C27.1952,21.2876 26.5552,21.3076 26.5362,21.3076 L26.4572,21.3076 C25.8372,21.3076 25.3782,21.1466 25.1342,20.8476 C24.7732,20.4086 24.8122,19.6856 24.8752,19.4466 L24.8952,19.3486 C25.3342,14.3386 29.4772,8.2296 29.5202,8.1706 L29.5592,8.1116 C31.5812,4.6056 30.1792,2.8656 29.7792,2.4656 C28.8562,1.3426 27.3172,0.7416 25.2952,0.7416 C23.7952,0.7416 22.4922,1.0636 22.2922,1.1226 L17.8432,2.0216 C16.5632,2.1826 15.2992,2.2616 14.1172,2.2616 C8.8132,2.2616 6.2292,0.6596 6.1862,0.6396 C5.5072,0.2196 4.8432,-0.0004 4.2232,-0.0004 C2.3232,-0.0004 1.2982,1.9436 1.0002,3.1256 C-0.4368,7.5496 0.0852,14.4566 0.1242,14.8996 C0.7642,26.5336 3.4892,30.6986 3.8072,31.1586 C8.4912,38.8266 16.6022,39.9686 18.0042,40.1096 L18.0042,45.6386 L12.5982,44.0716 L12.1382,45.6146 L15.6012,46.6156 L10.4342,48.2966 L10.9372,49.8196 L18.7272,47.2946 L26.5162,49.8196 L27.0192,48.2966 L21.8522,46.6156 L25.3152,45.6146 L24.8952,44.0716 L19.6262,45.6146 L19.6262,40.2086 C19.8262,40.2086 20.0852,40.2276 20.3282,40.2276 C26.1752,40.2276 29.9012,37.9036 32.0212,35.9636 C34.3212,33.8396 35.2052,31.7196 35.2442,31.6376 L36.4852,28.8336 L36.5042,28.7946 C38.6292,23.0276 36.3042,21.1466 36.0252,20.9466z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;