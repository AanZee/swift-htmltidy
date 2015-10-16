#swig-htmltidy

Use [htmltidy](https://github.com/vavere/htmltidy) tidy functionality as a [swig](http://paularmstrong.github.io/swig/) tag.

##Install
`npm install --save swig-htmltidy`

##Usage

```javascript
var swigHtmlTidy = require('swig-htmltidy')
  , swig = require('swig')

//Add all lodash functions
swigHtmlTidy.useTag(htmltidy, 'htmltidy')

```

Now you can use the lodash functions as a swig filter.

```swig
{% htmltidy %}<p class="name"></p>{% endhtmltidy %}
```

___

Made with ⚡️ by [@aanzeenl](https://twitter.com/aanzeenl)
