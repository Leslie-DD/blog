<template><h1 id="项目脚本、工具" tabindex="-1"><a class="header-anchor" href="#项目脚本、工具" aria-hidden="true">#</a> 项目脚本、工具</h1>
<p>Created time: January 19, 2022 10:39 PM
Status: In Progress</p>
<h1 id="新闻脚本" tabindex="-1"><a class="header-anchor" href="#新闻脚本" aria-hidden="true">#</a> 新闻脚本</h1>
<p>从中国日报网获取新闻，存到mysql数据库表articals中。</p>
<p><a href="http://www.chinadaily.com.cn/business/tech" target="_blank" rel="noopener noreferrer">Technology - Chinadaily.com.cn<ExternalLinkIcon/></a></p>
<p>python脚本：</p>
<p><a href="/scripts/CollectArticals.py" target="_blank" rel="noopener noreferrer">CollectArticals.py<ExternalLinkIcon/></a></p>
<p>运行脚本前先安装几个第三方库</p>
<ul>
<li>pip3 install pymysql</li>
<li>pip3 install requests</li>
<li>pip3 install fake_useragent</li>
<li>pip3 install lxml</li>
</ul>
<p>安装成功后 python3 CollertArticals.py</p>
<h1 id="单词工具" tabindex="-1"><a class="header-anchor" href="#单词工具" aria-hidden="true">#</a> 单词工具</h1>
<p>数据库单词从bing翻译获取。</p>
<p>首先获取大概100,000个单词，通过python脚本去重；将单词存入数据库，通过python脚本循环这100,000个单词从bing获取翻译信息，存入数据库。</p>
<p>单词对应数据库表主要有音标表phonetics、翻译表translations、高级英汉翻译表advancedecs、英汉翻译表ecs、搭配表colls、近义词表synonyms、反义词表antonyms、时态表tenses、例句examples表。还有phoandtrans表存单词的音标和翻译。具体数据库设计见<a href="https://www.notion.so/9c8e6786f752450eab6360eea7e83225" target="_blank" rel="noopener noreferrer">数据字典<ExternalLinkIcon/></a></p>
</template>
