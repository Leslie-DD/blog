<template><h1 id="ubuntu刷机报错" tabindex="-1"><a class="header-anchor" href="#ubuntu刷机报错" aria-hidden="true">#</a> Ubuntu刷机报错</h1>
<blockquote>
<p>执行<code>sudo sh flash_all.sh</code>时报错<code>Missmatching image and device</code>；并且<code>fastboot: command not found</code>。</p>
</blockquote>
<p>执行下面两个命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">ln</span> -s /home/username/Android/Sdk/platform-tools/fastboot /usr/local/sbin/fastboot
$ <span class="token function">sudo</span> <span class="token function">ln</span> -s /home/username/Android/Sdk/platform-tools/adb /usr/local/sbin/adb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="https://www.cnblogs.com/zhangwei-qianqian/p/11446392.html" target="_blank" rel="noopener noreferrer">或者参见这篇文章<ExternalLinkIcon/></a></p>
</template>
