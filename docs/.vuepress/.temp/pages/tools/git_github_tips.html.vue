<template><h1 id="git-github" tabindex="-1"><a class="header-anchor" href="#git-github" aria-hidden="true">#</a> Git &amp; GitHub</h1>
<h2 id="一、新建远程分支" tabindex="-1"><a class="header-anchor" href="#一、新建远程分支" aria-hidden="true">#</a> 一、新建远程分支</h2>
<p>先在本地新建分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b alpha
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>把本地分支push到远程仓库</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin alpha:alpha
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二、新建本地分支并跟随远程分支" tabindex="-1"><a class="header-anchor" href="#二、新建本地分支并跟随远程分支" aria-hidden="true">#</a> 二、新建本地分支并跟随远程分支</h2>
<p>新建本地分支test</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将本地分支test跟随远程分支origin/alpha</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch --set-upstream-to remotes/origin/alpha
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="三、删除远程分支" tabindex="-1"><a class="header-anchor" href="#三、删除远程分支" aria-hidden="true">#</a> 三、删除远程分支</h2>
<p>推送一个空分支到远程分支，其实就相当于删除远程分支：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin :dbg_lichen_star
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>也可以使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin --delete dbg_lichen_star
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="四、取消本地分支与远程分支的跟随" tabindex="-1"><a class="header-anchor" href="#四、取消本地分支与远程分支的跟随" aria-hidden="true">#</a> 四、取消本地分支与远程分支的跟随</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch --unset-upstream
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="五、git-pull-每次都要输入密码" tabindex="-1"><a class="header-anchor" href="#五、git-pull-每次都要输入密码" aria-hidden="true">#</a> 五、git pull 每次都要输入密码</h2>
<p>其实有两种方式</p>
<h4 id="_1、ssh方式clone项目-并把本机token托管到github-ssh-keys" tabindex="-1"><a class="header-anchor" href="#_1、ssh方式clone项目-并把本机token托管到github-ssh-keys" aria-hidden="true">#</a> 1、ssh方式clone项目，并把本机token托管到github ssh keys</h4>
<h4 id="_2、保存username和personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#_2、保存username和personal-access-tokens" aria-hidden="true">#</a> 2、保存Username和personal access tokens</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --local credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下次pull的时候输一次密码以后就不用输了</p>
<h2 id="六、pull远程分支并解冲突" tabindex="-1"><a class="header-anchor" href="#六、pull远程分支并解冲突" aria-hidden="true">#</a> 六、pull远程分支并解冲突</h2>
<blockquote>
<p>如果在master分支下面新建一个分支，开发的同时，master又新增了一下代码，需要在新的master上面继续开发</p>
</blockquote>
<ol>
<li>
<p>先把自己写的代码，保存到本地库，然后推送到来远程库（至关重要），然后拉下来远程库，也很重要</p>
</li>
<li>
<p>切换到本地master分支，pull取远程仓库中最新的master代码</p>
</li>
<li>
<p>切换到你现在开发的分支，在git命令中输入：git rebase origin/MASTER</p>
</li>
<li>
<p>这样就会把你现在正在开发的分支中已经写好的代码与最新的Master分支的代码融合在一起</p>
</li>
<li>
<p>输入 git status 显示冲突的文件，然后找到一个文件解决冲突，git add 文件名
这样才算解决一个冲突。输入 git rebase --continue ，继续git status ....... 直到所有的冲突全部解决（git status如果不显示冲突文件，但又处于rebase状态，输入git rebase --skip)。如果不想解决冲突了，输入 git rebase --abort ，回到最初的状态，前面解决的所有冲突都会恢复到以前的状态</p>
</li>
<li>
<p>解决完冲突后，推送到远程库。</p>
</li>
<li>
<p>完成</p>
</li>
</ol>
<p>如何查看rebase完成了呢？git branch看看自己是否在当前的分支，如果回到当前分支，就是rebase完成。</p>
<p>如果rebase没有完成，git branch不会在当前分支，会在rebase新开的分支里面。（一个临时的分支）</p>
<p>git branch -vv 查看自己的分支，以及自己的分支与远程分支落后多少个文件，如果落后了就git pull，解决冲突</p>
<p>git push失败，可能是本地这个分支有一些文件落后远程分支，需要git pull</p>
<p><strong>参考</strong></p>
<p>https://www.huaweicloud.com/articles/3987ec9dfbd9f650e70ceb9eebe05287.html</p>
</template>
