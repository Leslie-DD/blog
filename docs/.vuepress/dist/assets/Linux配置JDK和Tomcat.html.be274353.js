import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as d,c as l,a,b as e,d as s,e as i}from"./app.77695c5d.js";const c={},o=a("h1",{id:"linux\u914D\u7F6Ejdk\u548Ctomcat",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#linux\u914D\u7F6Ejdk\u548Ctomcat","aria-hidden":"true"},"#"),s(" Linux\u914D\u7F6EJDK\u548CTomcat")],-1),p=a("h2",{id:"\u4E00\u3001\u5B89\u88C5jdk",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4E00\u3001\u5B89\u88C5jdk","aria-hidden":"true"},"#"),s(" \u4E00\u3001\u5B89\u88C5JDK")],-1),u={id:"_1-\u4E0B\u8F7Djdk",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#_1-\u4E0B\u8F7Djdk","aria-hidden":"true"},"#",-1),v=s(" 1. "),b={href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u4E0B\u8F7DJDK"),x=i(`<p>\u6839\u636E\u81EA\u5DF1ubuntu\u7CFB\u7EDF\u9009\u62E9jdk-8u271-linux-x64.tar.gz \u6211\u7535\u8111Windows 64\u4F4D\u7CFB\u7EDF\uFF0C\u6211\u4E0B\u8F7D\u5230\u4E86\u672C\u5730</p><h3 id="_2-\u7528scp\u547D\u4EE4\u5728cmd\u4E2D\u4E0A\u4F20\u5230linux\u670D\u52A1\u5668\u7684\u65B0\u5EFA\u7684-usr-java-\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#_2-\u7528scp\u547D\u4EE4\u5728cmd\u4E2D\u4E0A\u4F20\u5230linux\u670D\u52A1\u5668\u7684\u65B0\u5EFA\u7684-usr-java-\u6587\u4EF6\u5939" aria-hidden="true">#</a> 2. \u7528scp\u547D\u4EE4\u5728cmd\u4E2D\u4E0A\u4F20\u5230linux\u670D\u52A1\u5668\u7684\u65B0\u5EFA\u7684/usr/java/\u6587\u4EF6\u5939</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> jdk-8u271-linux-x64.tar.gz xxxxx@xx.xx.xx.xx:/usr/java/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>xxxxx\u662F\u767B\u5F55\u670D\u52A1\u5668\u7684\u7528\u6237\u540D\uFF0Cxx.xx.xx.xx\u662F\u670D\u52A1\u5668\u5730\u5740</p><h3 id="_3-\u8FDB\u5230\u670D\u52A1\u5668-usr-java-\u6587\u4EF6\u5939\u4E0B\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDB\u5230\u670D\u52A1\u5668-usr-java-\u6587\u4EF6\u5939\u4E0B\u89E3\u538B" aria-hidden="true">#</a> 3. \u8FDB\u5230\u670D\u52A1\u5668/usr/java/\u6587\u4EF6\u5939\u4E0B\u89E3\u538B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf jdk-8u181-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7528mv\u547D\u4EE4\u5C06\u89E3\u538B\u597D\u7684jdk\u6587\u4EF6\u5939\u91CD\u547D\u540D\u4E3Ajdk1.8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> jdk1.8.0_271 jdk1.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-\u914D\u7F6E\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E\u73AF\u5883" aria-hidden="true">#</a> 4. \u914D\u7F6E\u73AF\u5883</h3><p>\u6253\u5F00profile\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> gedit /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u672B\u5C3E\u6DFB\u52A0path</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/jdk1.8
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span>/usr/java/jdk1.8/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JRE_HOME</span>/lib:<span class="token variable">$CLASSPATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JRE_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u53D8\u91CF\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-\u67E5\u770Bjava\u7248\u672C\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_5-\u67E5\u770Bjava\u7248\u672C\u4FE1\u606F" aria-hidden="true">#</a> 5. \u67E5\u770Bjava\u7248\u672C\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u5B89\u88C5tomcat7" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B89\u88C5tomcat7" aria-hidden="true">#</a> \u4E8C\u3001\u5B89\u88C5tomcat7</h2>`,18),_={id:"_1-\u4E0B\u8F7Dtomcat7",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#_1-\u4E0B\u8F7Dtomcat7","aria-hidden":"true"},"#",-1),g=s(" 1. "),f={href:"https://tomcat.apache.org/download-70.cgi",target:"_blank",rel:"noopener noreferrer"},j=s("\u4E0B\u8F7Dtomcat7"),A=i(`<p>\u9009\u62E9tar.gz\u4E0B\u8F7D\u5230\u672C\u5730windows\u684C\u9762 \u540C\u6837scp\u4F20\u5230\u81EA\u5DF1\u7684linux\u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> apache-tomcat-7.0.106.tar.gz xxxxx@xx.xx.xx.xx:/usr/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-\u5230linux\u670D\u52A1\u5668usr-java\u6587\u4EF6\u5939\u4E0B\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#_2-\u5230linux\u670D\u52A1\u5668usr-java\u6587\u4EF6\u5939\u4E0B\u89E3\u538B" aria-hidden="true">#</a> 2. \u5230linux\u670D\u52A1\u5668usr/java\u6587\u4EF6\u5939\u4E0B\u89E3\u538B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> -zxvf apache-tomcat-7.0.106.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-\u91CD\u547D\u540D\u4E2A\u7B80\u5355\u7684\u6587\u4EF6\u5939\u540D" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u547D\u540D\u4E2A\u7B80\u5355\u7684\u6587\u4EF6\u5939\u540D" aria-hidden="true">#</a> 3. \u91CD\u547D\u540D\u4E2A\u7B80\u5355\u7684\u6587\u4EF6\u5939\u540D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> apache-tomcat-7.0.106 tomcat7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-\u8D4B\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_4-\u8D4B\u6743\u9650" aria-hidden="true">#</a> 4. \u8D4B\u6743\u9650</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">755</span> -R tomcat7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-\u4FEE\u6539\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_5-\u4FEE\u6539\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> 5. \u4FEE\u6539\u542F\u52A8\u811A\u672C</h3><p>\u8FDB\u5165tomcat\u7684bin\u76EE\u5F55\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6700\u540E\u4E00\u884C\u4E4B\u524D\u52A0\u5165\u5982\u4E0B\u4FE1\u606F\uFF08\u6CE8\u610F\u6839\u636E\u81EA\u5DF1\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539JAVA_HOME\u548CTOMCAT_HOME\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#set java environment</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/jdk1.8
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:%<span class="token punctuation">{</span>JAVA_HOME<span class="token punctuation">}</span>/lib:%<span class="token punctuation">{</span>JRE_HOME<span class="token punctuation">}</span>/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment">#tomcat</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">TOMCAT_HOME</span><span class="token operator">=</span>/usr/java/tomcat7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_6-\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> 6. \u542F\u52A8\u670D\u52A1</h3>`,14),E={href:"http://xn--startup-yx7nn24y.sh",target:"_blank",rel:"noopener noreferrer"},H=s("\u6267\u884Cstartup.sh"),J=s("\uFF0C\u63D0\u793ATomcat started\u5C31\u662F\u670D\u52A1\u542F\u52A8\u6B63\u5E38\u4E86"),M=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ./startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-\u5728\u6D4F\u89C8\u5668\u8F93\u5165\u4F60\u7684-\u670D\u52A1\u5668ip\u5730\u5740-\u7AEF\u53E3\u53F7-xx-xx-xx-xx-8080-\u663E\u793Atomcat\u4FE1\u606F\u8BF4\u660E\u542F\u52A8\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_7-\u5728\u6D4F\u89C8\u5668\u8F93\u5165\u4F60\u7684-\u670D\u52A1\u5668ip\u5730\u5740-\u7AEF\u53E3\u53F7-xx-xx-xx-xx-8080-\u663E\u793Atomcat\u4FE1\u606F\u8BF4\u660E\u542F\u52A8\u6210\u529F" aria-hidden="true">#</a> 7. \u5728\u6D4F\u89C8\u5668\u8F93\u5165\u4F60\u7684\uFF08\u670D\u52A1\u5668ip\u5730\u5740:\u7AEF\u53E3\u53F7\uFF09\uFF08xx.xx.xx.xx:8080)\u663E\u793ATomcat\u4FE1\u606F\u8BF4\u660E\u542F\u52A8\u6210\u529F</h3>`,2);function O(T,V){const n=r("ExternalLinkIcon");return d(),l("div",null,[o,p,a("h3",u,[h,v,a("a",b,[m,e(n)])]),x,a("h3",_,[k,g,a("a",f,[j,e(n)])]),A,a("p",null,[a("a",E,[H,e(n)]),J]),M])}var z=t(c,[["render",O],["__file","Linux\u914D\u7F6EJDK\u548CTomcat.html.vue"]]);export{z as default};
