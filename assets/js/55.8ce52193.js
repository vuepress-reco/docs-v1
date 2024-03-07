(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{511:function(t,s,e){"use strict";e.r(s);var n=e(3),a=function(t){t.options.__data__block__={flowchart_64a57028:"cond=>condition: Process?\nprocess=>operation: Process\ne=>end: End\n\ncond(yes)->process->e\ncond(no)->e"}},r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"original-markdown-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#original-markdown-syntax"}},[t._v("#")]),t._v(" Original Markdown Syntax")]),t._v(" "),s("p",[t._v("Of course you could use the original Markdown syntax, but if there is something not easily realized in Markdown, you could also write HTML.")]),t._v(" "),s("h2",{attrs:{id:"default-markdown-extensions-in-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-markdown-extensions-in-vuepress"}},[t._v("#")]),t._v(" Default Markdown Extensions in VuePress")]),t._v(" "),s("p",[t._v("VuePress has some easy built-in grammar so that you could write posts more easily. In the following I will briefly list supported Markdown extensions. For more details, please see "),s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress Markdown extensions"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("Table in the style of GitHub")]),t._v(" "),s("li",[t._v("Table of Contents")]),t._v(" "),s("li",[t._v("Emoji")]),t._v(" "),s("li",[t._v("Code block\n"),s("ul",[s("li",[t._v("syntax highlighting")]),t._v(" "),s("li",[t._v("specific line highlighting")]),t._v(" "),s("li",[t._v("display line numbers")]),t._v(" "),s("li",[t._v("import code snippets")])])])]),t._v(" "),s("h2",{attrs:{id:"use-markdown-it-s-markdown-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-markdown-it-s-markdown-extensions"}},[t._v("#")]),t._v(" Use "),s("code",[t._v("markdown-it")]),t._v("'s Markdown extensions")]),t._v(" "),s("p",[t._v("You could use "),s("code",[t._v("markdown-it")]),t._v(" plugins for Markdown extensions.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("markdown")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options for markdown-it-anchor")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("anchor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("permalink")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options for markdown-it-toc")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("toc")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("includeLevel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extendMarkdown")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("md")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use more markdown-it plugins!")]),t._v("\n      md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"use-vue-in-markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-vue-in-markdown"}},[t._v("#")]),t._v(" Use Vue in Markdown")]),t._v(" "),s("p",[t._v("You can even use Vue or Vue components in Markdown directly, just like the built-in badge in this theme"),s("Badge",{attrs:{text:"Badge"}}),t._v(". For more examples please refer to official documentation of VuePress: "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Vue in Markdown"),s("OutboundLink")],1)],1),t._v(" "),s("h2",{attrs:{id:"use-plugins-grammar-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-plugins-grammar-extensions"}},[t._v("#")]),t._v(" Use Plugins' Grammar Extensions")]),t._v(" "),s("p",[t._v("There are some VuePress plugins to extend Markdown grammar，please refer to "),s("RouterLink",{attrs:{to:"/en/views/plugins/#how-to-use-a-plugin"}},[t._v("how to use a plugin")]),t._v(" to add a desired plugin.")],1),t._v(" "),s("p",[t._v("The following introduces two useful plugins.")]),t._v(" "),s("h3",{attrs:{id:"container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[t._v("#")]),t._v(" Container")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vuepress.github.io/en/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-container"),s("OutboundLink")],1),t._v(" allows you to customize a container. VuePress uses the plugin to produce three built-in containers and here are the examples:")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[t._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n\n::: theorem Newton's first law\nIf the net force (the vector sum of all forces acting on an object) is zero, then the velocity of the object is constant.\n\n::: right\nFrom "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Wikipedia")]),t._v("]("),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion")]),t._v(")")]),t._v("\n:::\n\n::: details\nThis is a details block and doesn't take effect in IE / Edge.\n:::\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("This is a tip")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("This is a warning")])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"title"}),s("p",[t._v("This is a dangerous warning")])]),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("Newton's first law")]),s("p",[t._v("If the net force (the vector sum of all forces acting on an object) is zero, then the velocity of the object is constant.")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("From "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wikipedia"),s("OutboundLink")],1)])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("See More")]),t._v(" "),s("p",[t._v("This is a details block and doesn't take effect in IE / Edge.")])]),t._v(" "),s("h3",{attrs:{id:"flowchart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flowchart"}},[t._v("#")]),t._v(" Flowchart")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://flowchart.vuepress.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-flowchart"),s("OutboundLink")],1),t._v(" enables you to draw a flowchart in Markdown like this:")]),t._v(" "),s("p",[s("strong",[t._v("Input")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@flowstart\ncond=>condition: Process?\nprocess=>operation: Process\ne=>end: End\n\ncond(yes)->process->e\ncond(no)->e\n@flowend\n")])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_64a57028",code:t.$dataBlock.flowchart_64a57028,preset:"vue"}})],1)}),[],!1,null,null,null);"function"==typeof a&&a(r);s.default=r.exports}}]);