module.exports = `<h1 id="contributing">Contributing</h1>
<h2 id="instructions-on-creating-svg-files-via-illustrator">Instructions on creating SVG files via Illustrator</h2>
<ol>
<li><p>Start with a document of 250 X 250 px, and use 9px stroke in your icon.</p>
</li>
<li><p>Make sure the icon is always sized to the edges of the document.</p>
</li>
<li><p>The color should always be #000000 black unless it has to have more than one color.</p>
</li>
<li><p>When you&#39;re done, create outlines, and use pathfinder to merge it into one shape. But, I would urge you to drag a copy of the original stroked icon to the side of the artboard, so that if you need to go back you can edit it!</p>
</li>
<li><p>Save this as an illustrator file. Then open up a new file, also 250 X 250 px.</p>
</li>
<li><p>Copy and paste the outlined/merged icon into the new document, and save that as an SVG. (the reason for copying and pasting it as a new file is because something weird seems to happen with the original document size unless you do this!) </p>
</li>
<li><p>When saving as an SVG, you can follow these settings- but you&#39;ll only have to do this once since Illustrator will default to it next time around.</p>
</li>
</ol>
<p>Inline image 1</p>
<ol>
<li><p>Handing the icon over to dev- Whichever dev you&#39;re working with on the project should be adding the new icon file to the dev icon library. If you aren&#39;t working with a particular dev on the project, then you can always ask Dale or Ron to add it. </p>
</li>
<li><p>Saving the icon into our Designer Library - I&#39;ve created a new place for our icons in Dropbox instead of Google Drive, since we&#39;ve switched over to Dropbox within the last year. 
<a href="https://www.dropbox.com/sh/9k28zalqh2j5xpo/AAA_oVJPDXzqDjryTlV8RRC4a?dl=0">https://www.dropbox.com/sh/9k28zalqh2j5xpo/AAA_oVJPDXzqDjryTlV8RRC4a?dl=0</a>
This folder includes a master illustrator file, and a folder for each icon individually. If you do create a new icon, please add it into both the individual folder, and also into the master illustrator file in alphabetical order. </p>
</li>
</ol>
<h2 id="for-developers">For developers</h2>
<ol>
<li><p>Double check there none of the elemts are using a &quot;stroke&quot; property, and that there aren&#39;t extra elements.</p>
</li>
<li><p>Name your file and add it to the /src directory within dibs-vg : <a href="https://github.com/1stdibs/dibs-vg/tree/master/src">https://github.com/1stdibs/dibs-vg/tree/master/src</a>. By convention file names are all lower case, hyphen delimited. </p>
</li>
<li><p>Add class names to your icon using the format &quot;dibsvg-svg dibsvg-{FILE_NAME}&quot;, where FILE_NAME is the name of the file you created.</p>
</li>
<li><p>Clean up the SVG file by removing other auto generated properties on the SVG element. The only allowed properties at this time are : class, viewBox, xmlns, xmlns:xlink, and version. </p>
<ul>
<li>The xmlns and xmlns:xlink attributes are for XML name spacning and aren&#39;t strictly necessary, but they are useful for displaying SVGs outside of the context of HTML documents, so we like to include them. <a href="http://stackoverflow.com/a/18468348/4002508">Reference</a>, <a href="https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course">Explanation</a></li>
<li>Version is not required, and is ignored by browsers but we currently don&#39;t force developers to delete it. </li>
</ul>
</li>
<li><p>Remove any classes or IDs illustrator added to the SVG elements. For example, sometimes you will see markup that looks like this : </p>
<pre><code>&lt;svg ...&gt;
 &lt;path class=&quot;AUTOMATICALLY-GENERATED-CLASS&quot; d=&quot;...&quot; /&gt;
 &lt;circle id=&quot;LAYER-1&quot; /&gt;
&lt;/svg&gt;
</code></pre></li>
<li>Add any required classes to sub-paths that you want to color differently. For example :<pre><code>&lt;svg ...&gt;
 &lt;path class=&quot;i-will-make-this-green-with-css&quot; d=&quot;...&quot; /&gt;
 &lt;circle class=&quot;i-will-make-this-red-with-css&quot; /&gt;
&lt;/svg&gt;
</code></pre></li>
<li><p>Run the command &quot;yarn build&quot; and create your PR to be merged (don&#39;t worry if you forget, it&#39;s also run as a pre-publish step).</p>
</li>
<li><p>Once your changes are merged new SVGs should be published to the public NPM registry with a minor version. </p>
</li>
<li><p>You can include your new SVG file in the dibs-vg display library by merging your changes to the branch &quot;gh-pages.&quot; Check out that page here : <a href="http://beautifulcode.1stdibs.com/dibs-vg/">http://beautifulcode.1stdibs.com/dibs-vg/</a></p>
</li>
</ol>
`;
