import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"博客主页","icon":"home","type":"home","readingTime":{"minutes":0.17,"words":50},"excerpt":"这是一个博客主页。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。"},["/index.html","/README.md"]],
  ["v-79fdd481","/home.html",{"title":"项目主页","icon":"home","type":"home","readingTime":{"minutes":0.23,"words":68},"excerpt":"这是普通主页的案例。你可以在这里放置你的主体内容。 想要使用此布局，你需要在页面 front matter 中设置 home: true。 配置项的相关说明详见 项目主页配置。"},["/home","/home.md"]],
  ["v-0e503981","/slide.html",{"title":"幻灯片页","icon":"slides","type":"slide","readingTime":{"minutes":4.47,"words":1342},"excerpt":"@slidestart 幻灯片演示 一个简单的幻灯片演示与各种小贴士。 \" 作者 Mr.Hope. 请滚动鼠标滚轮进入下一页\" --- 标注幻灯片 👇 -- 标注幻灯片 使用 --- 标注水平幻灯片 在水平幻灯片中使用 -- 分割垂直幻灯片 使用 `` 在幻灯片上添加属性 使用 `` 在前一个 HTML 元素上添加属性 --- Markdown 你可以在幻"},["/slide","/slide.md"]],
  ["v-74bc627b","/about/",{"title":"🦆 About Leslie","type":"article","readingTime":{"minutes":1.17,"words":350},"excerpt":"🦆 About Leslie This is Mr Dk. (@mrdrivingduck). I love ducks. 🦆 🍺 Hobby 💪 Workout; 🚘 Driving; 🏸 Badminton; 💻 Technology; 📚 Publications ICSME, 2021: Revisiting Test Cases t"},["/about/index.html","/about/README.md"]],
  ["v-5a468348","/about/blog.html",{"title":"🗒️ About Blog","type":"article","readingTime":{"minutes":0.48,"words":145},"excerpt":"🗒️ About Blog Page Author 🦆 Mr Dk. @mrdrivingduck Version 🛠️ Build version: 1.2022.03 Branch Status Branch Status ----------------- ---------------------------------------------"},["/about/blog","/about/blog.md"]],
  ["v-350ba17b","/about/links.html",{"title":"🔗 Links","type":"article","readingTime":{"minutes":0.2,"words":60},"excerpt":"🔗 Links 🐶 Friends Triple-Z; Lewis-Lu; zonghuaxiansheng; 🐺 Teams NUAA WatchDog; 🌊 Social Network GitHub; GitLab; Telegram; Instagram; Twitter; Weibo; 🎷 Channel Subscribe my Tel"},["/about/links","/about/links.md"]],
  ["v-064c41a2","/about/techstack.html",{"title":"⛏️ Technology Stack","type":"article","readingTime":{"minutes":1.07,"words":322},"excerpt":"⛏️ Technology Stack C 🐻 PolarDB for PostgreSQL: PolarDB for PostgreSQL DBMS kernel.; 🔏 ELF SV Module: Kernel module for signature verification of ELF files.; ✒️ Linux ELF Binary "},["/about/techstack","/about/techstack.md"]],
  ["v-7d9c8328","/homepage/",{"title":"这是HomePage页面","type":"article","readingTime":{"minutes":0.02,"words":5},"excerpt":"这是HomePage页面"},["/homepage/index.html","/homepage/README.md"]],
  ["v-145ac574","/blog/",{"title":"","type":"article","readingTime":{"minutes":0.01,"words":4},"excerpt":"\" 技术文档\""},["/blog/index.html","/blog/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"主要功能与配置演示","icon":"creative","type":"article","readingTime":{"minutes":0.09,"words":28},"excerpt":"主要功能与配置演示 页面展示; Markdown 展示; 禁用展示; 加密展示;","category":["使用指南"]},["/guide/index.html","/guide/README.md"]],
  ["v-4c863446","/guide/disable.html",{"title":"组件禁用","icon":"config","type":"article","readingTime":{"minutes":0.25,"words":74},"excerpt":"<p>你可以通过设置页面的 Frontmatter，在页面禁用一些功能。</p>\n","category":["使用指南"],"tag":["禁用"]},["/guide/disable","/guide/disable.md"]],
  ["v-bf720700","/guide/encrypt.html",{"title":"密码加密的文章","icon":"lock","type":"article","readingTime":{"minutes":0.48,"words":144},"excerpt":"密码加密的文章 实际的文章内容。 段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。 段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字","category":["使用指南"],"tag":["文章加密"],"isEncrypted":true},["/guide/encrypt","/guide/encrypt.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":"Markdown 增强","icon":"markdown","type":"article","readingTime":{"minutes":2.92,"words":875},"excerpt":"<p>VuePress 的每个文档页面都是由 Markdown 渲染而成。所以你需要通过在相应路径创建编写 Markdown 建立你的文档或博客页面。</p>\n","category":["使用指南"],"tag":["markdown"]},["/guide/markdown","/guide/markdown.md"]],
  ["v-4eaf9f84","/guide/page.html",{"title":"页面配置","icon":"page","type":"article","readingTime":{"minutes":0.65,"words":194},"excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true},["/guide/page","/guide/page.md"]],
  ["v-e8b6c472","/notes/",{"title":"","type":"article","readingTime":{"minutes":0.05,"words":14},"excerpt":"\" 自己的读书笔记，希望自己多看书\""},["/notes/index.html","/notes/README.md"]],
  ["v-43c7d01c","/notes/%E4%B8%89%E5%9B%BD%E9%9A%8F%E7%AC%94.html",{"title":"三国演义","type":"article","readingTime":{"minutes":2.18,"words":655},"excerpt":"三国演义 何进，犹豫不决，处事不周，还迷之自信。 立太子辩即皇位的时候，袁绍就让他彻底解决中官结党的问题，他却听了何太后（何太后此前已被十常侍说服）的话，就这么放过了张让。 何进杀了董太后之后，袁绍第二次建议他诛阉官。此前张让又通过何进弟弟何苗向何太后求情，何进听妹子的话还是不杀十常侍。 袁绍第三次劝他诛阉官，这次换了方式，“曲线救国”，“召四方英雄之士，勒"},["/notes/三国随笔.html","/notes/%E4%B8%89%E5%9B%BD%E9%9A%8F%E7%AC%94","/notes/三国随笔.md","/notes/%E4%B8%89%E5%9B%BD%E9%9A%8F%E7%AC%94.md"]],
  ["v-32634b15","/notes/%E5%BC%A0%E5%9B%BD%E8%8D%A3%E4%B8%8E%E7%A8%8B%E8%9D%B6%E8%A1%A3.html",{"title":"张国荣与程蝶衣","type":"article","readingTime":{"minutes":3.38,"words":1013},"excerpt":"张国荣与程蝶衣 &emsp;&emsp;说起张国荣，首先浮现脑海的是众人对他的爱称“哥哥”，其次是他那清秀俊俏又带有一丝桀骜的脸庞，最后是他所饰演的《霸王别姬》。 &emsp;&emsp;张国荣是上世纪香港乐坛的天王，曾因一举获得音乐比赛亚军而为世人所知，也曾因在电视台不被欣赏而默默无闻，一生沉浮不知多少次，终于忍受不了众多压力而选在在2003年愚人节给世人"},["/notes/张国荣与程蝶衣.html","/notes/%E5%BC%A0%E5%9B%BD%E8%8D%A3%E4%B8%8E%E7%A8%8B%E8%9D%B6%E8%A1%A3","/notes/张国荣与程蝶衣.md","/notes/%E5%BC%A0%E5%9B%BD%E8%8D%A3%E4%B8%8E%E7%A8%8B%E8%9D%B6%E8%A1%A3.md"]],
  ["v-d440f426","/tools/",{"title":"","type":"article","readingTime":{"minutes":0.02,"words":7},"excerpt":"\" 环境配置等文档\""},["/tools/index.html","/tools/README.md"]],
  ["v-5b1e857f","/tools/git_github_tips.html",{"title":"Git & GitHub","type":"article","readingTime":{"minutes":2.27,"words":680},"excerpt":"Git & GitHub 一、新建远程分支 先在本地新建分支 把本地分支push到远程仓库 二、新建本地分支并跟随远程分支 新建本地分支test 将本地分支test跟随远程分支origin/alpha 三、删除远程分支 推送一个空分支到远程分支，其实就相当于删除远程分支： 也可以使用： 四、取消本地分支与远程分支的跟随 五、git pull 每次都要输入密码"},["/tools/git_github_tips","/tools/git_github_tips.md"]],
  ["v-74979d6a","/blog/databases/",{"title":"","type":"article","readingTime":{"minutes":0.03,"words":9},"excerpt":"\" 数据库相关技术博客\""},["/blog/databases/index.html","/blog/databases/README.md"]],
  ["v-426b45c1","/blog/databases/%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%EF%BC%8C%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E6%96%87%E6%A1%A3%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93.html",{"title":"","type":"article","readingTime":{"minutes":8.17,"words":2452},"excerpt":"转载自关系型数据，非关系型数据库和文档型数据库 一、关系型数据和文档型数据库有什么区别？ 关系数据库（Relational Database）是建立在关系模型基础上的数据库，借助于几何代数等数学概念和方法来处理数据库中的数据。所谓关系模型是一对一、一对多或者多对多等关系，支持事务和持久化，关系型数据库都会支持的 ACID 特性，也就是原子性（Atomicit"},["/blog/databases/关系型数据，非关系型数据库，文档型数据库.html","/blog/databases/%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%EF%BC%8C%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E6%96%87%E6%A1%A3%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93","/blog/databases/关系型数据，非关系型数据库，文档型数据库.md","/blog/databases/%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%EF%BC%8C%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%8C%E6%96%87%E6%A1%A3%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93.md"]],
  ["v-f4844a42","/blog/python/",{"title":"","type":"article","readingTime":{"minutes":0.02,"words":7},"excerpt":"\" Python相关技术博客\""},["/blog/python/index.html","/blog/python/README.md"]],
  ["v-5a8198ab","/blog/python/python%E6%93%8D%E4%BD%9Cexcel%E6%95%B0%E6%8D%AE.html",{"title":"","type":"article","readingTime":{"minutes":1.91,"words":574},"excerpt":"\" 这两天晚上帮学经济的同学从两个excel表中提取了些数据供他做数据分析。\" \"\" \" 第一次用python操作excel表，记录一下。\" \" \" \" 单纯读取写入excel数据不难，关键是对数据又进一步提取了有效值。\" 调研数据.xlsx 预测信息1.xlsx 预测信息2.xlsx 预测信息3.xlsx lzs.py"},["/blog/python/python操作excel数据.html","/blog/python/python%E6%93%8D%E4%BD%9Cexcel%E6%95%B0%E6%8D%AE","/blog/python/python操作excel数据.md","/blog/python/python%E6%93%8D%E4%BD%9Cexcel%E6%95%B0%E6%8D%AE.md"]],
  ["v-cff3b8f4","/blog/server/Mybatis%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.html",{"title":"","type":"article","readingTime":{"minutes":3.15,"words":946},"excerpt":"Mybatis 事务 一个使用 MyBatis-Spring 的其中一个主要原因是它允许 MyBatis 参与到 Spring 的事务管理中。而不是给 MyBatis 创建一个新的专用事务管理器，MyBatis-Spring 借助了 Spring 中的 DataSourceTransactionManager 来实现事务管理。 一旦配置好了 Spring 的"},["/blog/server/Mybatis事务管理.html","/blog/server/Mybatis%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86","/blog/server/Mybatis事务管理.md","/blog/server/Mybatis%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.md"]],
  ["v-0239a958","/blog/server/",{"title":"","type":"article","readingTime":{"minutes":0.02,"words":6},"excerpt":"\" 后端技术文档\""},["/blog/server/index.html","/blog/server/README.md"]],
  ["v-5678923c","/tools/Linux/Linux%E9%85%8D%E7%BD%AEJDK%E5%92%8CTomcat.html",{"title":"Linux配置JDK和Tomcat","type":"article","readingTime":{"minutes":1.48,"words":444},"excerpt":"[[toc]] Linux配置JDK和Tomcat 一、安装JDK 1. 下载JDK 根据自己ubuntu系统选择jdk-8u271-linux-x64.tar.gz 我电脑Windows 64位系统，我下载到了本地 2. 用scp命令在cmd中上传到linux服务器的新建的/usr/java/文件夹 xxxxx是登录服务器的用户名，xx.xx.xx.xx是"},["/tools/Linux/Linux配置JDK和Tomcat.html","/tools/Linux/Linux%E9%85%8D%E7%BD%AEJDK%E5%92%8CTomcat","/tools/Linux/Linux配置JDK和Tomcat.md","/tools/Linux/Linux%E9%85%8D%E7%BD%AEJDK%E5%92%8CTomcat.md"]],
  ["v-df8f4bf0","/tools/Linux/",{"title":"","type":"article","readingTime":{"minutes":0.02,"words":5},"excerpt":"\" Linux 相关文档\""},["/tools/Linux/index.html","/tools/Linux/README.md"]],
  ["v-27eab426","/tools/Linux/Ubuntu%E4%B8%BB%E9%A2%98%E7%BE%8E%E5%8C%96%E5%92%8C%E9%94%AE%E7%9B%98Mac%E5%8C%96.html",{"title":"","type":"article","readingTime":{"minutes":0.25,"words":76},"excerpt":"系统主题美化 mac os键盘规则 caps切换输入法 设置好上面的之后 设置键盘快捷键“关闭窗口”为command + q"},["/tools/Linux/Ubuntu主题美化和键盘Mac化.html","/tools/Linux/Ubuntu%E4%B8%BB%E9%A2%98%E7%BE%8E%E5%8C%96%E5%92%8C%E9%94%AE%E7%9B%98Mac%E5%8C%96","/tools/Linux/Ubuntu主题美化和键盘Mac化.md","/tools/Linux/Ubuntu%E4%B8%BB%E9%A2%98%E7%BE%8E%E5%8C%96%E5%92%8C%E9%94%AE%E7%9B%98Mac%E5%8C%96.md"]],
  ["v-3ffeb8ec","/tools/Linux/Ubuntu%E5%88%B7%E6%9C%BA%E6%8A%A5%E9%94%99.html",{"title":"Ubuntu刷机报错","type":"article","readingTime":{"minutes":0.25,"words":74},"excerpt":"Ubuntu刷机报错 \" 执行时报错；并且。\" 执行下面两个命令 或者参见这篇文章"},["/tools/Linux/Ubuntu刷机报错.html","/tools/Linux/Ubuntu%E5%88%B7%E6%9C%BA%E6%8A%A5%E9%94%99","/tools/Linux/Ubuntu刷机报错.md","/tools/Linux/Ubuntu%E5%88%B7%E6%9C%BA%E6%8A%A5%E9%94%99.md"]],
  ["v-563bdebe","/tools/Linux/Ubuntu%E5%92%8CCentos8%E5%AE%89%E8%A3%85MySQL8.html",{"title":"Ubuntu和Centos8安装MySQL8","type":"article","readingTime":{"minutes":3.22,"words":965},"excerpt":"Ubuntu和Centos8安装MySQL8 一、Ubuntu 18.04 下载deb包 1 、登入 mysql 官网，在官网中下载 deb 包，点击该链接，即可下载。 下载deb包 2、下载该 deb 文件后，FTP上传到对应文件夹后 进入该文件夹，执行： sudo dpkg -i 该deb文件名 3、方向键选mysql-8.0 并按enter键 再次方向"},["/tools/Linux/Ubuntu和Centos8安装MySQL8.html","/tools/Linux/Ubuntu%E5%92%8CCentos8%E5%AE%89%E8%A3%85MySQL8","/tools/Linux/Ubuntu和Centos8安装MySQL8.md","/tools/Linux/Ubuntu%E5%92%8CCentos8%E5%AE%89%E8%A3%85MySQL8.md"]],
  ["v-1fe2733f","/projects/reading/",{"title":"Reading 英语学习软件","type":"article","readingTime":{"minutes":2.66,"words":798},"excerpt":"Reading 英语学习软件 项目背景 \" 2019年末，2020年初，大三寒假，疫情爆发。\" \"\" \" 大三下学期（2020年上半年）在家上网课，课程项目要做Email系统，需要客户端Android实现。\" \"\" \" 在小组里我负责Android客户端的工作，其余还有后端、Email协议的同学。\" \"\" \" 一半手写一半百度做完Android前端和整个Em"},["/projects/reading/index.html","/projects/reading/README.md"]],
  ["v-434f8f34","/projects/reading/%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90.html",{"title":"模块解析","type":"article","readingTime":{"minutes":1.79,"words":536},"excerpt":"模块解析 Created time: January 19, 2022 2:02 PM Status: In Progress 新闻模块 news 新闻从中国日报网用python脚本获取。 Technology - Chinadaily.com.cn 现在包含7个模块，科技、艺术、金融、篮球、美国、欧洲、社会。 前端使用7个Fragment展示，具体页面展示"},["/projects/reading/模块解析.html","/projects/reading/%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90","/projects/reading/模块解析.md","/projects/reading/%E6%A8%A1%E5%9D%97%E8%A7%A3%E6%9E%90.md"]],
  ["v-ae080bf2","/projects/reading/%E9%A1%B9%E7%9B%AE%E8%84%9A%E6%9C%AC%E3%80%81%E5%B7%A5%E5%85%B7.html",{"title":"项目脚本、工具","type":"article","readingTime":{"minutes":0.78,"words":233},"excerpt":"项目脚本、工具 Created time: January 19, 2022 10:39 PM Status: In Progress 新闻脚本 从中国日报网获取新闻，存到mysql数据库表articals中。 Technology - Chinadaily.com.cn python脚本： CollectArticals.py 运行脚本前先安装几个第三方库"},["/projects/reading/项目脚本、工具.html","/projects/reading/%E9%A1%B9%E7%9B%AE%E8%84%9A%E6%9C%AC%E3%80%81%E5%B7%A5%E5%85%B7","/projects/reading/项目脚本、工具.md","/projects/reading/%E9%A1%B9%E7%9B%AE%E8%84%9A%E6%9C%AC%E3%80%81%E5%B7%A5%E5%85%B7.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"文章","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"加密","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"幻灯片","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"收藏","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"时间轴","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-03d57386","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{"title":"使用指南 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/使用指南/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
  ["v-83e1f92e","/tag/%E7%A6%81%E7%94%A8/",{"title":"禁用 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/禁用/","/tag/%E7%A6%81%E7%94%A8/index.html"]],
  ["v-1e447d61","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",{"title":"文章加密 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/文章加密/","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/index.html"]],
  ["v-484552dc","/tag/markdown/",{"title":"markdown 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/markdown/index.html"]],
  ["v-a378ad66","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{"title":"页面配置 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/页面配置/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/index.html"]],
  ["v-7b167472","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{"title":"使用指南 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/使用指南/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
