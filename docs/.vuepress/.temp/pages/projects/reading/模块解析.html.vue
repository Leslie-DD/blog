<template><h1 id="模块解析" tabindex="-1"><a class="header-anchor" href="#模块解析" aria-hidden="true">#</a> 模块解析</h1>
<p>Created time: January 19, 2022 2:02 PM
Status: In Progress</p>
<h1 id="新闻模块-news" tabindex="-1"><a class="header-anchor" href="#新闻模块-news" aria-hidden="true">#</a> 新闻模块 news</h1>
<p>新闻从中国日报网用python脚本获取。</p>
<p><a href="http://www.chinadaily.com.cn/business/tech" target="_blank" rel="noopener noreferrer">Technology - Chinadaily.com.cn<ExternalLinkIcon/></a></p>
<p>现在包含7个模块，科技、艺术、金融、篮球、美国、欧洲、社会。</p>
<p>前端使用7个Fragment展示，具体页面展示新闻详情。</p>
<p>具体页面有单词释义预览功能。通过自定义手势和view，可长按选择单词，并进行查询释义、收藏、复制等操作。</p>
<p>新闻详情页有“筛选陌生单词功能”。可以筛选该文章中你可能不认识的单词，前提是要登陆，并且设置了个人英语水平。比如英语水平是高中，那么会排除文章中的高中词汇（通过查询高中词汇数据库表words_graduate），同时也会用户添加到单词本中的单词也会从文章中筛除。</p>
<h1 id="考研真题模块" tabindex="-1"><a class="header-anchor" href="#考研真题模块" aria-hidden="true">#</a> 考研真题模块</h1>
<p>该模块类似于新闻模块。</p>
<p>主页由两层RecyclerView嵌套展示。第一层是年份，第二层是当前所有真题。</p>
<p>具体题目页面类似于新闻详情页面，展示原文和对应题目。与新闻模块一样，具有单词释义预览功能。</p>
<h1 id="单词模块" tabindex="-1"><a class="header-anchor" href="#单词模块" aria-hidden="true">#</a> 单词模块</h1>
<p>单词模块有两个分类，“收藏”和“单词本”。</p>
<p>收藏本意是重点标注的单词。</p>
<p>单词本本意是标记已经认识的单词。（新闻和真题模块的“筛选陌生单词功能”用到该模块）</p>
<h1 id="背单词模块" tabindex="-1"><a class="header-anchor" href="#背单词模块" aria-hidden="true">#</a> 背单词模块</h1>
<p>用户可以选择小初高大学四六级以及考研单词六个分类，目前该模块功能不算完善。</p>
<h1 id="个人模块" tabindex="-1"><a class="header-anchor" href="#个人模块" aria-hidden="true">#</a> 个人模块</h1>
<p>用户可短信注册登陆。</p>
<p>通过id或者手机号唯一识别用户。用户可修改个人信息（用户名、年龄、性别、格言、简介、真实姓名、生日、地区、邮箱等，头像功能尚未开发）</p>
<p>附注</p>
<h1 id="附注" tabindex="-1"><a class="header-anchor" href="#附注" aria-hidden="true">#</a> 附注：</h1>
<p>除上述五个主要模块外，目前还有<strong>单词连连看游戏功能</strong>，随机给出指定个数单词，用户选择中英配对消除单词。</p>
</template>
