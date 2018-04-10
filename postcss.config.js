'use strict';

module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'last 2 chrome versions',
                'last 2 firefox versions',
                'safari > 5',
                'ie > 9',
                'ios > 5'
            ]
        })
    ]
};
