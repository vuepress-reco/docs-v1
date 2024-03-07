(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{534:function(t,e,s){"use strict";s.r(e);var a=s(3),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"project-encryption"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-encryption"}},[t._v("#")]),t._v(" Project Encryption")]),t._v(" "),e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("If the project is private and does not want to be made public, the content page can only be accessed after the key is logged in (the login will no longer be effective after closing the browser tab). You can set multiple passwords by setting "),e("code",[t._v("keys")]),t._v(" in the format of the array. The value of the array must be a string.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// secret key")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("keyPage")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("keys")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'32-bit md5 secret key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// should set to md5 secret key after version 1.3.0")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#42b983'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The color of the login page animation ball")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineColor")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#42b983'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The color of the login page animation line")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"set-secret-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-secret-key"}},[t._v("#")]),t._v(" Set Secret Key "),e("Badge",{attrs:{text:"1.3.0+"}})],1),t._v(" "),e("p",[t._v("If you password is "),e("code",[t._v("123456")]),t._v(", then set the "),e("code",[t._v("keys")]),t._v(" field to its 32-bit md5 secret key: "),e("code",[t._v("e10adc3949ba59abbe56e057f20f883e")]),t._v(". After the blog is published, input the password "),e("code",[t._v("123456")]),t._v(" to enter. Others will not know your password through your secret key, but you have to remember it.")]),t._v(" "),e("p",[t._v("Please input password in the following textbox to obtain the corresponding 32-bit md5 secret key:\n"),e("md5")],1),t._v(" "),e("h3",{attrs:{id:"absolute-encryption"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#absolute-encryption"}},[t._v("#")]),t._v(" Absolute encryption "),e("Badge",{attrs:{text:"1.1.2+"}})],1),t._v(" "),e("p",[t._v("The default encryption method for the project is to locate the encrypted page above the actual content, so this encryption function itself has no real effect.")]),t._v(" "),e("p",[t._v("If you need absolute encryption, you need to set "),e("code",[t._v("absoluteEncryption: true")]),t._v(", but this will affect two things:")]),t._v(" "),e("ol",[e("li",[t._v("SSR rendering of the page;")]),t._v(" "),e("li",[t._v("The jump of the anchor point.")])]),t._v(" "),e("h2",{attrs:{id:"article-encryption"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#article-encryption"}},[t._v("#")]),t._v(" Article Encryption")]),t._v(" "),e("p",[t._v("If the project is public and some articles may need to be encrypted, you need to set "),e("code",[t._v("keys")]),t._v(" in "),e("code",[t._v("frontmatter")]),t._v(" in an array format. You can set multiple passwords. The value of the array must be a string.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vuepress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("theme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("reco\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2019-04-09")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reco_luan\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keys")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'32-bit md5 secret key'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("Legacy issues with encrypted pages:")]),t._v("\nEncryption cannot be hidden when entering a separate article from a single encrypted article (such as the navigation bar)")])])])}),[],!1,null,null,null);e.default=n.exports}}]);