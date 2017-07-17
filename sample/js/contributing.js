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
<ol>
<li>Save an Illustrator copy (.ai extension)</li>
<li>&quot;Save As...&quot; -&gt; &quot;SVG&quot; dropdown</li>
<li>A &quot;SVG Options&quot; window should pop up. The following are the SVG export settings (if a checkbox is not mentioned, leave unchecked)<ul>
<li>SVG Profiles: 1.1<ul>
<li>Type: SVG</li>
<li>Subsetting: Only Glyphs Used</li>
</ul>
</li>
<li>Image Location: Link</li>
<li>&quot;More Options&quot; button<ul>
<li>CSS Properties: Style Elements</li>
<li>Decimal Places: 1 (This reduces SVG number output from a decimal number like 47.644043 down to just 47.6 which will obviously reduce the SVG size)</li>
<li>Encoding: Unicode (UTF-8)</li>
<li>Checkbox:<ul>
<li>Output fewer <tspan> elements</li>
<li>Use <textPath> element for Text on Path</li>
<li>TODO: look into new &quot;responsive&quot; option</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ol>
</li>
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
<li><p>Clean up the SVG file by removing other unnecessary, auto-generated attributes:</p>
<ul>
<li><code>&lt;svg /&gt;</code> element<ul>
<li>The only allowed attributes on the <code>&lt;svg /&gt;</code> element at this time are : <code>class</code>, <code>viewBox</code>, <code>xmlns</code>, <code>xmlns:xlink</code>, and <code>version</code>.<ul>
<li>The <code>xmlns</code> and <code>xmlns:xlink</code> attributes are for XML name spacing and aren&#39;t strictly necessary, but they are useful for displaying SVGs outside of the context of HTML documents, so we like to include them. <a href="http://stackoverflow.com/a/18468348/4002508">Reference</a>, <a href="https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course">Explanation</a></li>
<li><code>version</code> is not required, and is ignored by browsers but we currently don&#39;t force developers to delete it.</li>
</ul>
</li>
</ul>
</li>
<li>interior elements (e.g. <code>&lt;path /&gt;</code>, <code>&lt;polygon /&gt;</code>, etc.)<ul>
<li>remove the <code>fill</code> attribute if the element&#39;s fill color is intended to be black (e.g. <code>#000000</code>, <code>#010101</code>). The default value for <code>fill</code> is black (<code>#000000</code>) so this attribute is unnecessary in these cases.</li>
<li>remove <code>&lt;g /&gt;</code> elements that have no attributes and aren&#39;t actually being used for grouping separate parts of the SVG.<ul>
<li>SVGs generated from illustrator sometimes look like this:<pre><code>  &lt;svg ... &gt;
      &lt;g&gt;
          &lt;path ... /&gt;
          &lt;polygon ... /&gt;
          etc....
      &lt;/g&gt;
  &lt;/svg&gt;
</code></pre>  the <code>&lt;g&gt;</code> tags are unnecessary and can be removed.</li>
</ul>
</li>
</ul>
</li>
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
