(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{588:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-github-actions-自动部署博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-actions-自动部署博客"}},[t._v("#")]),t._v(" 使用 GitHub Actions 自动部署博客")]),t._v(" "),a("p",[t._v("本篇以  Github Pages 为例，并且假设你已经掌握了 GitHub Pages 的使用。")]),t._v(" "),a("p",[t._v("假设你的文章和静态文件在同一个仓库，使用 "),a("code",[t._v("master")]),t._v(" 分支管理文章和代码，使用 "),a("code",[t._v("gh-pages")]),t._v(" 分支存放生成的静态文件")]),t._v(" "),a("p",[t._v("一般部署博客的流程是：")]),t._v(" "),a("ol",[a("li",[t._v("写一篇文章")]),t._v(" "),a("li",[t._v("生成静态文件："),a("code",[t._v("npm run build")])]),t._v(" "),a("li",[t._v("切换 "),a("code",[t._v("gh-pages")]),t._v(" 分支")]),t._v(" "),a("li",[t._v("复制静态文件到 "),a("code",[t._v("gh-pages")]),t._v(" 分支")]),t._v(" "),a("li",[t._v("访问网址验证是否成功")])]),t._v(" "),a("p",[t._v("博客就是用来写文章的，每次写篇文章还要搞那么多操作。")]),t._v(" "),a("p",[t._v("当你使用了 GitHub Actions 之后，流程可以简化为：")]),t._v(" "),a("ol",[a("li",[t._v("写一篇文章")]),t._v(" "),a("li",[t._v("提交到 GitHub")])]),t._v(" "),a("p",[t._v("结束了，是不是很方便？")]),t._v(" "),a("p",[t._v("从机械的流程中解脱，专注于写作。")]),t._v(" "),a("p",[t._v("那么开始打造我们的 GitHub Actions 吧。")]),t._v(" "),a("p",[t._v("我创建了一个"),a("a",{attrs:{href:"https://github.com/LasyIsLazy/gh-pages-Actions-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例项目"),a("OutboundLink")],1),t._v("在我的 GitHub 仓库，用的是 VuePress（一个 Vue 官方的静态站点生成器）。")]),t._v(" "),a("h2",{attrs:{id:"设置-secrets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-secrets"}},[t._v("#")]),t._v(" 设置 Secrets")]),t._v(" "),a("p",[t._v("后面部署的 Action 需要有操作你的仓库的权限，因此提前设置好 GitHub personal access（个人访问令牌）。")]),t._v(" "),a("p",[t._v("生成教程可以看 GitHub 官方的帮助文档："),a("a",{attrs:{href:"https://help.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建用于命令行的个人访问令牌"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("授予权限的时候只给 "),a("code",[t._v("repo")]),t._v(" 权限即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1W3GRA.png",alt:"1W3GRA.png"}})]),t._v(" "),a("p",[t._v("令牌名字一定要叫："),a("code",[t._v("ACCESS_TOKEN")]),t._v("，这是后面的 Action 需要用的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1W35i4.png",alt:"1W35i4.png"}})]),t._v(" "),a("h2",{attrs:{id:"编写-workflow-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-workflow-文件"}},[t._v("#")]),t._v(" 编写 workflow 文件")]),t._v(" "),a("blockquote",[a("p",[t._v("持续集成一次运行的过程，就是一个 workflow（工作流程）。")])]),t._v(" "),a("p",[t._v("项目结构如图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/07/123CDO.png",alt:"123CDO.png"}})]),t._v(" "),a("p",[t._v("创建"),a("code",[t._v(".github/workflows/main.yml")]),t._v("文件（可以到我的"),a("a",{attrs:{href:"https://github.com/LasyIsLazy/gh-pages-action-demo/blob/master/.github/workflows/main.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例仓库"),a("OutboundLink")],1),t._v("中查看），内容如下：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy GitHub Pages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发条件：在 push 到 master 分支后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器环境：最新版 Ubuntu")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@releases/v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACCESS_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n\n")])])]),a("p",[t._v("这里我就不对语法作讲解了，需要了解 workflow 的基本语法可以查看"),a("a",{attrs:{href:"https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方帮助"),a("OutboundLink")],1),t._v("，也可以参考"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰老师的 GitHub Actions 入门教程"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("这里我写了三步：")]),t._v(" "),a("ol",[a("li",[t._v("拉取代码。用到了一个 GitHub 官方 action："),a("code",[t._v("actions/checkout")]),t._v(" 。")]),t._v(" "),a("li",[t._v("生成静态文件。直接运行脚本，如果你不是用的 VuePress 或者脚本不一样，要修改成你自己的。")]),t._v(" "),a("li",[t._v("部署到 GitHub Pages。使用了第三方作者的 action："),a("code",[t._v("JamesIves/github-pages-deploy-action@releases/v3")]),t._v("。我详细介绍下这个 action：")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("with")]),t._v(" 参数向环境中传入了三个环境变量：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("ACCESS_TOKEN")]),t._v("：读取 GitHub 仓库 secrets 的 "),a("code",[t._v("ACCESS_TOKEN")]),t._v(" 变量，也就是我们前面设置的")]),t._v(" "),a("li",[a("code",[t._v("BRANCH")]),t._v("：部署分支 "),a("code",[t._v("gh-pages")]),t._v("（GitHub Pages 读取的分支）")]),t._v(" "),a("li",[a("code",[t._v("FOLDER")]),t._v("：需要部署的文件在 "),a("code",[t._v("docs/.vuepress/dist")]),t._v(" 路径，也就是我们使用 "),a("code",[t._v("npm run docs:build")]),t._v(" 生成的静态文件的位置")])]),t._v(" "),a("blockquote",[a("p",[t._v("这里有一点需要注意：我使用的是 "),a("code",[t._v("v3")]),t._v(" 版本，需要使用 "),a("code",[t._v("with")]),t._v(" 参数传入环境变量，且需要自行构建；网上常见的教程使用的是 "),a("code",[t._v("v2")]),t._v(" 版本，使用 "),a("code",[t._v("env")]),t._v(" 参数传入环境变量，不需要自行构建，可使用 "),a("code",[t._v("BUILD_SCRIPT")]),t._v(" 环境变量传入构建脚本")])]),t._v(" "),a("p",[t._v("至此，配置工作均已完成。提交你的代码，就会开启自动构建。")]),t._v(" "),a("p",[t._v("以后，你每次有代码 push 到 "),a("code",[t._v("master")]),t._v(" 分支时，GitHub 都会开始自动构建。")]),t._v(" "),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),a("h3",{attrs:{id:"部署失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署失败"}},[t._v("#")]),t._v(" 部署失败")]),t._v(" "),a("p",[t._v("按照教程是不会失败的，但是建议你了解下失败的情况。")]),t._v(" "),a("p",[t._v("如果部署失败你会收到一封部署失败的邮件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1WR8YQ.png",alt:"1WR8YQ.png"}})]),t._v(" "),a("p",[t._v("点击可以跳转到仓库的 Action 页面查看日志")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1WRclR.png",alt:"1WRclR.png"}})]),t._v(" "),a("p",[t._v("展开错误的部署 job 查看日志")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1WRX0f.png",alt:"1WRX0f.png"}})]),t._v(" "),a("p",[t._v("可以看到有这么一个错误日志："),a("code",[t._v("No such file or directory")]),t._v("，经排查，是没有生成静态文件，因此导致路径不存在。")]),t._v(" "),a("blockquote",[a("p",[t._v("我这个错误是由于参考了网上常见的教程导致的。网上大部分教程（包括前面提到的阮一峰老师的教程）使用的是："),a("code",[t._v("JamesIves/github-pages-deploy-action")]),t._v(" 的 "),a("code",[t._v("v2")]),t._v(" 版本，然而引用的时候写的都是："),a("code",[t._v("JamesIves/github-pages-deploy-action@master")]),t._v("，引用的 "),a("code",[t._v("master")]),t._v(" 分支。在作者写的时候可能当时这个 action 最新的就是 "),a("code",[t._v("v2")]),t._v(" 版本，所以没有什么问题。然而现在 "),a("code",[t._v("master")]),t._v(" 分支已经是 "),a("code",[t._v("v3")]),t._v(" 版本了，语法有变化，完全按照教程就会出错。如果继续使用他的教程可以改成"),a("code",[t._v("JamesIves/github-pages-deploy-action@releases/v2")]),t._v("。")])]),t._v(" "),a("p",[t._v("修复后重新提交，GitHub 会再次部署。")]),t._v(" "),a("h3",{attrs:{id:"部署成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署成功"}},[t._v("#")]),t._v(" 部署成功")]),t._v(" "),a("p",[t._v("点击仓库的 Actions，查看部署情况。")]),t._v(" "),a("p",[t._v("如果正在部署中，应该是图中标出的这个样子。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1WWL8J.png",alt:"1WWL8J.png"}})]),t._v(" "),a("p",[t._v("这里显示所有的部署（应该叫做 "),a("em",[t._v("Workflow")]),t._v("，便于理解，就叫 "),a("em",[t._v("部署")]),t._v(" 了）记录。图中有三种状态，分别是：部署中（黄色动态图标）、部署完成（绿色对号图标）、部署失败（红色错号图标）。")]),t._v(" "),a("p",[t._v("点击进入查看部署情况。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/10/147bLD.png",alt:"147bLD.png"}})]),t._v(" "),a("p",[t._v("部署成功，全是绿色~")]),t._v(" "),a("p",[t._v("接下来访问网站验证一下："),a("a",{attrs:{href:"https://lasyislazy.github.io/gh-pages-action-demo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lasyislazy.github.io/gh-pages-action-demo/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/02/08/1W4BuR.png",alt:"1W4BuR.png"}})]),t._v(" "),a("p",[t._v("完美结束，享受 GitHub Actions 带来的愉快体验吧~")]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("p",[t._v("鉴于还是有很多人不是用的 GitHub Pages，我这里再提供一下其他方式的思路，其实都是一样的，大概分成三步：")]),t._v(" "),a("ol",[a("li",[t._v("拉取代码")]),t._v(" "),a("li",[t._v("生成静态文件")]),t._v(" "),a("li",[t._v("部署到服务器")])]),t._v(" "),a("p",[t._v("前两步都是一样的，不同的方式区别也就在于第三步。")]),t._v(" "),a("p",[t._v("使用 GitHub Pages 的话可以使用 "),a("code",[t._v("JamesIves/github-pages-deploy-action")]),t._v(" 这个 action，使用其他的方式其实也可以找到对应的 action。")]),t._v(" "),a("p",[t._v("例如，我的网站是部署在虚拟主机空间上的，平时部署是用 FTP 的方式替换主机空间上的静态文件，因此找到了一个可以部署到 FTP 上的 acton "),a("code",[t._v("SamKirkland/FTP-Deploy-Action")]),t._v("，然后第三步就变为了：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FTP Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SamKirkland/FTP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Action@2.0.0\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FTP_SERVER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxx.xxx.com\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FTP_USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxx\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FTP_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.BLOG_FTP_PASSWORD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("LOCAL_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("REMOTE_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /htdocs\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ARGS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("transfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("all "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exclude=logreport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("verbose\n")])])]),a("p",[t._v("一般都是传一些环境变量进去就可以了，需要哪些环境变量去这个 action 的 GitHub 上看下介绍就好了。")]),t._v(" "),a("p",[t._v("最后再说一下怎么找 action，以下是几个常用的网址：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/actions"),a("OutboundLink")],1),t._v("：GitHub 官方的 action")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/marketplace?type=actions"),a("OutboundLink")],1),t._v("：GitHub 官方市场中的 action")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sdras/awesome-actions"),a("OutboundLink")],1),t._v("：第三方收集的有用的 action")])]),t._v(" "),a("p",[t._v("然后就是要利用好搜索引擎了。")]),t._v(" "),a("p",[t._v("实在找不到就得自己写 action 了，本篇就不讨论了。")]),t._v(" "),a("p",[t._v("以上便是本篇教程全部内容，本篇首发于我的个人博客："),a("a",{attrs:{href:"https://www.lasy.site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.lasy.site/"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("本文作者 "),a("a",{attrs:{href:"https://github.com/LasyIsLazy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lasy"),a("OutboundLink")],1),t._v("，博客 "),a("a",{attrs:{href:"https://www.lasy.site",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lasy"),a("OutboundLink")],1),t._v("。")])]),a("p",[t._v("参考链接：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/github/working-with-github-pages/about-github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://help.github.com/en/github/working-with-github-pages/about-github-pages"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);