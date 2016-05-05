![](https://cdn.rawgit.com/1stdibs/dibs-vg/master/src/logo-no-reg.svg)

# dibs-vg 
1stdibs's in-house vector graphics.

## Description

Dibs VG are broken up into individual SVG files so you can require them to be inlined in your HTML, or required directly in your client side JS for easy use. Instructions on how to do the latter follow.

We also provide some basic styling and wrapper modules for React and Backbone. 


## Versioning : 

New icons added to the set will be considered a minor version bump. Changes to existing icons will be a major version.  

## Customize it, style it, resize it : 

Inline SVGs are great, not only because they're more performant, but they're also easier for developers to manipulate. Of course you can scale them infinitely in either direction just by changing some CSS, but having different paths inside of your SVG files also allows you to apply colors or other transformations to individual parts of the SVG. Check out this example : 

<div style="float:left; width:100px; height:100px; margin-right:20px;">
    <svg version="1.1" class="dibsvg-svg dibsvg-do-not-edit" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
        <g>
            <rect x="67.9" y="97.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -44.1474 128.0603)" class="do-not-edit-pencil" width="129.1" height="40.1"/>
            <polygon class="do-not-edit-pencil" points="79.8,170.1 92.6,182.9 75.1,187.6 57.5,192.3 62.2,174.8 66.9,157.2"/>
        </g>
        <g>
            <path class="do-not-edit-circle" d="M124.9,249.8C56,249.8,0,193.8,0,124.9S56,0,124.9,0s124.9,56,124.9,124.9S193.8,249.8,124.9,249.8z M42.7,52
                c-17.3,19.4-27.8,45-27.8,73c0,60.6,49.3,109.9,109.9,109.9c28,0,53.5-10.5,73-27.8L42.7,52z M53.4,41.5l155,155
                c16.5-19.2,26.5-44.2,26.5-71.5C234.9,64.3,185.5,15,124.9,15C97.6,15,72.6,25,53.4,41.5z"/>
        </g>
    </svg>
</div>

<div style="float:left; width:100px; height:100px; margin-right:20px;">
    <svg version="1.1" class="dibsvg-svg dibsvg-do-not-edit" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;fill:#b19b57;" xml:space="preserve">
        <g>
            <rect x="67.9" y="97.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -44.1474 128.0603)" class="do-not-edit-pencil" width="129.1" height="40.1"/>
            <polygon class="do-not-edit-pencil" points="79.8,170.1 92.6,182.9 75.1,187.6 57.5,192.3 62.2,174.8 66.9,157.2"/>
        </g>
        <g>
            <path class="do-not-edit-circle" d="M124.9,249.8C56,249.8,0,193.8,0,124.9S56,0,124.9,0s124.9,56,124.9,124.9S193.8,249.8,124.9,249.8z M42.7,52
                c-17.3,19.4-27.8,45-27.8,73c0,60.6,49.3,109.9,109.9,109.9c28,0,53.5-10.5,73-27.8L42.7,52z M53.4,41.5l155,155
                c16.5-19.2,26.5-44.2,26.5-71.5C234.9,64.3,185.5,15,124.9,15C97.6,15,72.6,25,53.4,41.5z"/>
        </g>
    </svg>
</div>


<div style="float:left; width:100px; height:100px; fill=gold;">
    <svg version="1.1" class="dibsvg-svg dibsvg-do-not-edit" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
        <g>
            <rect x="67.9" y="97.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -44.1474 128.0603)" class="do-not-edit-pencil" width="129.1" height="40.1"/>
            <polygon class="do-not-edit-pencil" points="79.8,170.1 92.6,182.9 75.1,187.6 57.5,192.3 62.2,174.8 66.9,157.2"/>
        </g>
        <g style="fill:red;">
            <path class="do-not-edit-circle" d="M124.9,249.8C56,249.8,0,193.8,0,124.9S56,0,124.9,0s124.9,56,124.9,124.9S193.8,249.8,124.9,249.8z M42.7,52
                c-17.3,19.4-27.8,45-27.8,73c0,60.6,49.3,109.9,109.9,109.9c28,0,53.5-10.5,73-27.8L42.7,52z M53.4,41.5l155,155
                c16.5-19.2,26.5-44.2,26.5-71.5C234.9,64.3,185.5,15,124.9,15C97.6,15,72.6,25,53.4,41.5z"/>
        </g>
    </svg>
</div>
<div style="clear:both"></div>
<br />

## With React / JSX : 

If you are using Webpack, and want to render your SVG with React we recomment [svg-react-loader](https://github.com/jhamlet/svg-react-loader) which will allow you to require your SVG files direclty in your JS as React components. 

Configuration for svg-react-loader looks like this (see gotcha below, [via their documentation](https://github.com/jhamlet/svg-react-loader)) : 

```javascript
module.exports = {
    loaders: [
        { test: /\.svg$/, loader: 'babel!svg-react' }
    ],
    resolve: {
        alias: {
            react-dom: __dirname + '/node_modules/react'
        }
    }
}
```

One gotcha I ran into while implementing is that svg-react-loader requires that you also use babel loader, so this line : 

```javascript
{ test: /\.svg$/, loader: 'babel!svg-react' }
```

will not work if you already have babel configured as a loader in your config. To solve, add ".svg" to the list of extensions to match against, and remove it from that line to end up with something like :

```javascript
module.exports = {
    loaders: [
        { test: /\.(js|jsx|svg)$/, loader: 'babel' },
        { test: /\.svg$/, loader: 'svg-react' }
    ],
    resolve: {
        alias: {
            react-dom: __dirname + '/node_modules/react'
        }
    }
}
```

Now that that's out of the way, require your icon and the icon wrapper then let it rip : 

```javascript
const IconWrapper = require('dibs-vg/js/SvgComponent');
const Icon = require('dibs-vg/src/bell');
// ...
<IconWrapper className="icon-spin" size={25} title={"Weeee! Weeeeeeeee!"}>
    <Icon />
</IconWrapper>
```

## In Backbone : 

If you are using Webpack and want to render your SVG with Backbone we recomment using the [html loader](https://www.npmjs.com/package/html-loader) which returns the SVG file as a string, or the [webpack compile templates loader](https://www.npmjs.com/package/webpack-compile-templates) which will transform the SVG file to an underscore template.

```javascript
var SvgWrapper = require('dibs-vg/js/SvgWrapper.es.js');
const icon = require('!html!dibs-vg/src/bell.svg');

$('.place').append(new SvgWrapper({
    icon : icon,
    className : 'some-thing',
    size : '25',
    title : 'Flerg! I did it!'
}).render().el);
```
