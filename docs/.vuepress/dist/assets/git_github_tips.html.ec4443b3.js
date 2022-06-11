import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as n,c as r,a as e,b as t,e as d,d as l}from"./app.13761e01.js";const c={},h=d(`<h1 id="git-github" tabindex="-1"><a class="header-anchor" href="#git-github" aria-hidden="true">#</a> Git &amp; GitHub</h1><h2 id="\u4E00\u3001\u65B0\u5EFA\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u65B0\u5EFA\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u4E00\u3001\u65B0\u5EFA\u8FDC\u7A0B\u5206\u652F</h2><p>\u5148\u5728\u672C\u5730\u65B0\u5EFA\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b alpha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A\u672C\u5730\u5206\u652Fpush\u5230\u8FDC\u7A0B\u4ED3\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin alpha:alpha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u65B0\u5EFA\u672C\u5730\u5206\u652F\u5E76\u8DDF\u968F\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u65B0\u5EFA\u672C\u5730\u5206\u652F\u5E76\u8DDF\u968F\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u4E8C\u3001\u65B0\u5EFA\u672C\u5730\u5206\u652F\u5E76\u8DDF\u968F\u8FDC\u7A0B\u5206\u652F</h2><p>\u65B0\u5EFA\u672C\u5730\u5206\u652Ftest</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u672C\u5730\u5206\u652Ftest\u8DDF\u968F\u8FDC\u7A0B\u5206\u652Forigin/alpha</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch --set-upstream-to remotes/origin/alpha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u5220\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5220\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u4E09\u3001\u5220\u9664\u8FDC\u7A0B\u5206\u652F</h2><p>\u63A8\u9001\u4E00\u4E2A\u7A7A\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F\uFF0C\u5176\u5B9E\u5C31\u76F8\u5F53\u4E8E\u5220\u9664\u8FDC\u7A0B\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin :dbg_lichen_star
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin --delete dbg_lichen_star
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u56DB\u3001\u53D6\u6D88\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u8DDF\u968F" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u53D6\u6D88\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u8DDF\u968F" aria-hidden="true">#</a> \u56DB\u3001\u53D6\u6D88\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u8DDF\u968F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch --unset-upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E94\u3001git-pull-\u6BCF\u6B21\u90FD\u8981\u8F93\u5165\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001git-pull-\u6BCF\u6B21\u90FD\u8981\u8F93\u5165\u5BC6\u7801" aria-hidden="true">#</a> \u4E94\u3001git pull \u6BCF\u6B21\u90FD\u8981\u8F93\u5165\u5BC6\u7801</h2><p>\u5176\u5B9E\u6709\u4E24\u79CD\u65B9\u5F0F</p><h4 id="_1\u3001ssh\u65B9\u5F0Fclone\u9879\u76EE-\u5E76\u628A\u672C\u673Atoken\u6258\u7BA1\u5230github-ssh-keys" tabindex="-1"><a class="header-anchor" href="#_1\u3001ssh\u65B9\u5F0Fclone\u9879\u76EE-\u5E76\u628A\u672C\u673Atoken\u6258\u7BA1\u5230github-ssh-keys" aria-hidden="true">#</a> 1\u3001ssh\u65B9\u5F0Fclone\u9879\u76EE\uFF0C\u5E76\u628A\u672C\u673Atoken\u6258\u7BA1\u5230github ssh keys</h4><h4 id="_2\u3001\u4FDD\u5B58username\u548Cpersonal-access-tokens" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4FDD\u5B58username\u548Cpersonal-access-tokens" aria-hidden="true">#</a> 2\u3001\u4FDD\u5B58Username\u548Cpersonal access tokens</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --local credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u6B21pull\u7684\u65F6\u5019\u8F93\u4E00\u6B21\u5BC6\u7801\u4EE5\u540E\u5C31\u4E0D\u7528\u8F93\u4E86</p><h2 id="\u516D\u3001\u672C\u5730\u5220\u9664\u8FDC\u7A0B\u5DF2\u5220\u9664\u7684\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u672C\u5730\u5220\u9664\u8FDC\u7A0B\u5DF2\u5220\u9664\u7684\u5206\u652F" aria-hidden="true">#</a> \u516D\u3001\u672C\u5730\u5220\u9664\u8FDC\u7A0B\u5DF2\u5220\u9664\u7684\u5206\u652F</h2><blockquote><p>\u6BCF\u6B21\u5C06\u4E00\u4E2A\u5206\u652F\u5728gitlab\u4E0Amerge\u5230\u5F00\u53D1\u5206\u652F\uFF0C\u9ED8\u8BA4\u90FD\u4F1A\u662F\u5220\u9664\uFF0C\u4F46\u662F\u6709\u6B21<code>git branch -r</code>\u53D1\u73B0\u5BF9\u5E94\u7684\u5206\u652F\u8FD8\u6709\u3002</p><p>\u539F\u56E0\u662F\u672C\u5730\u548C\u8FDC\u7AEF\u6CA1\u6709\u540C\u6B65\u3002</p></blockquote><h4 id="_1-\u67E5\u770B\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770B\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> 1. \u67E5\u770B\u8FDC\u7A0B\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote show origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u5206\u652F\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8FDC\u7A0B\u4ED3\u5E93\u5DF2\u7ECF\u4E0D\u5B58\u5728\u7684\u5206\u652F\u4F1A\u63D0\u793A<code>(stale (use &#39;git remote prune&#39; to remove))</code></p><h4 id="_2-\u6839\u636E\u63D0\u793A\u5220\u9664\u6216\u8005\u8BF4\u540C\u6B65\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_2-\u6839\u636E\u63D0\u793A\u5220\u9664\u6216\u8005\u8BF4\u540C\u6B65\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> 2. \u6839\u636E\u63D0\u793A\u5220\u9664\u6216\u8005\u8BF4\u540C\u6B65\u672C\u5730\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote prune origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u547D\u4EE4\u4F1A\u5C55\u793A\u54EA\u4E9B\u5206\u652F\u5DF2\u7ECF\u4ECE\u672C\u5730\u5220\u9664</p><h2 id="\u4E03\u3001pull\u8FDC\u7A0B\u5206\u652F\u5E76\u89E3\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001pull\u8FDC\u7A0B\u5206\u652F\u5E76\u89E3\u51B2\u7A81" aria-hidden="true">#</a> \u4E03\u3001pull\u8FDC\u7A0B\u5206\u652F\u5E76\u89E3\u51B2\u7A81</h2><blockquote><p>\u5982\u679C\u5728master\u5206\u652F\u4E0B\u9762\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5F00\u53D1\u7684\u540C\u65F6\uFF0Cmaster\u53C8\u65B0\u589E\u4E86\u4E00\u4E0B\u4EE3\u7801\uFF0C\u9700\u8981\u5728\u65B0\u7684master\u4E0A\u9762\u7EE7\u7EED\u5F00\u53D1</p></blockquote><ol><li><p>\u5148\u628A\u81EA\u5DF1\u5199\u7684\u4EE3\u7801\uFF0C\u4FDD\u5B58\u5230\u672C\u5730\u5E93\uFF0C\u7136\u540E\u63A8\u9001\u5230\u6765\u8FDC\u7A0B\u5E93\uFF08\u81F3\u5173\u91CD\u8981\uFF09\uFF0C\u7136\u540E\u62C9\u4E0B\u6765\u8FDC\u7A0B\u5E93\uFF0C\u4E5F\u5F88\u91CD\u8981</p></li><li><p>\u5207\u6362\u5230\u672C\u5730master\u5206\u652F\uFF0Cpull\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u6700\u65B0\u7684master\u4EE3\u7801</p></li><li><p>\u5207\u6362\u5230\u4F60\u73B0\u5728\u5F00\u53D1\u7684\u5206\u652F\uFF0C\u5728git\u547D\u4EE4\u4E2D\u8F93\u5165\uFF1Agit rebase origin/MASTER</p></li><li><p>\u8FD9\u6837\u5C31\u4F1A\u628A\u4F60\u73B0\u5728\u6B63\u5728\u5F00\u53D1\u7684\u5206\u652F\u4E2D\u5DF2\u7ECF\u5199\u597D\u7684\u4EE3\u7801\u4E0E\u6700\u65B0\u7684Master\u5206\u652F\u7684\u4EE3\u7801\u878D\u5408\u5728\u4E00\u8D77</p></li><li><p>\u8F93\u5165 git status \u663E\u793A\u51B2\u7A81\u7684\u6587\u4EF6\uFF0C\u7136\u540E\u627E\u5230\u4E00\u4E2A\u6587\u4EF6\u89E3\u51B3\u51B2\u7A81\uFF0Cgit add \u6587\u4EF6\u540D \u8FD9\u6837\u624D\u7B97\u89E3\u51B3\u4E00\u4E2A\u51B2\u7A81\u3002\u8F93\u5165 git rebase --continue \uFF0C\u7EE7\u7EEDgit status ....... \u76F4\u5230\u6240\u6709\u7684\u51B2\u7A81\u5168\u90E8\u89E3\u51B3\uFF08git status\u5982\u679C\u4E0D\u663E\u793A\u51B2\u7A81\u6587\u4EF6\uFF0C\u4F46\u53C8\u5904\u4E8Erebase\u72B6\u6001\uFF0C\u8F93\u5165git rebase --skip)\u3002\u5982\u679C\u4E0D\u60F3\u89E3\u51B3\u51B2\u7A81\u4E86\uFF0C\u8F93\u5165 git rebase --abort \uFF0C\u56DE\u5230\u6700\u521D\u7684\u72B6\u6001\uFF0C\u524D\u9762\u89E3\u51B3\u7684\u6240\u6709\u51B2\u7A81\u90FD\u4F1A\u6062\u590D\u5230\u4EE5\u524D\u7684\u72B6\u6001</p></li><li><p>\u89E3\u51B3\u5B8C\u51B2\u7A81\u540E\uFF0C\u63A8\u9001\u5230\u8FDC\u7A0B\u5E93\u3002</p></li><li><p>\u5B8C\u6210</p></li></ol><p>\u5982\u4F55\u67E5\u770Brebase\u5B8C\u6210\u4E86\u5462\uFF1Fgit branch\u770B\u770B\u81EA\u5DF1\u662F\u5426\u5728\u5F53\u524D\u7684\u5206\u652F\uFF0C\u5982\u679C\u56DE\u5230\u5F53\u524D\u5206\u652F\uFF0C\u5C31\u662Frebase\u5B8C\u6210\u3002</p><p>\u5982\u679Crebase\u6CA1\u6709\u5B8C\u6210\uFF0Cgit branch\u4E0D\u4F1A\u5728\u5F53\u524D\u5206\u652F\uFF0C\u4F1A\u5728rebase\u65B0\u5F00\u7684\u5206\u652F\u91CC\u9762\u3002\uFF08\u4E00\u4E2A\u4E34\u65F6\u7684\u5206\u652F\uFF09</p><p>git branch -vv \u67E5\u770B\u81EA\u5DF1\u7684\u5206\u652F\uFF0C\u4EE5\u53CA\u81EA\u5DF1\u7684\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u843D\u540E\u591A\u5C11\u4E2A\u6587\u4EF6\uFF0C\u5982\u679C\u843D\u540E\u4E86\u5C31git pull\uFF0C\u89E3\u51B3\u51B2\u7A81</p><p>git push\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u672C\u5730\u8FD9\u4E2A\u5206\u652F\u6709\u4E00\u4E9B\u6587\u4EF6\u843D\u540E\u8FDC\u7A0B\u5206\u652F\uFF0C\u9700\u8981git pull</p><p><strong>\u53C2\u8003</strong></p>`,40),o={href:"https://www.huaweicloud.com/articles/3987ec9dfbd9f650e70ceb9eebe05287.html",target:"_blank",rel:"noopener noreferrer"},p=l("https://www.huaweicloud.com/articles/3987ec9dfbd9f650e70ceb9eebe05287.html");function u(b,g){const a=i("ExternalLinkIcon");return n(),r("div",null,[h,e("p",null,[e("a",o,[p,t(a)])])])}var f=s(c,[["render",u],["__file","git_github_tips.html.vue"]]);export{f as default};