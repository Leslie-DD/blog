<template><h1 id="计算机中的float是怎么存储的" tabindex="-1"><a class="header-anchor" href="#计算机中的float是怎么存储的" aria-hidden="true">#</a> 计算机中的Float是怎么存储的</h1>
<h2 id="组成" tabindex="-1"><a class="header-anchor" href="#组成" aria-hidden="true">#</a> 组成</h2>
<p>单精度float占32位，这32位分成三部分：</p>
<ul>
<li>符号位S占1位</li>
<li>指数E占8位</li>
<li>尾数M占23位</li>
</ul>
<h2 id="举个🌰" tabindex="-1"><a class="header-anchor" href="#举个🌰" aria-hidden="true">#</a> 举个🌰</h2>
<p>这里不写表达式，直接举个🌰来理解</p>
<h3 id="_1、-十进制转二进制" tabindex="-1"><a class="header-anchor" href="#_1、-十进制转二进制" aria-hidden="true">#</a> 1、 十进制转二进制</h3>
<p>比如25.125，转化成二进制为<code>11001.001</code></p>
<h3 id="_2-取尾数" tabindex="-1"><a class="header-anchor" href="#_2-取尾数" aria-hidden="true">#</a> 2. 取尾数</h3>
<p>这里用到了移位处理</p>
<p>将<code>11001.001</code>左移四位变为<code>x.xxxxxxx</code>的格式，即<code>1.1001001</code></p>
<p>抛弃1（所有的float的尾数前面默认都有一个1不写，省了一位，提高了精度</p>
<p>所以得出位数是<code>1001001</code></p>
<h3 id="_3-求指数" tabindex="-1"><a class="header-anchor" href="#_3-求指数" aria-hidden="true">#</a> 3. 求指数</h3>
<p>因为左移了四位，所以<code>11001.001</code> = <code>1.1001001 * 2^4</code>，这样便求出指数是4.</p>
<p>但这时候并不能直接将4二进制化为100之后存入E。因为考虑到指数可以是负的，所以规定在存入 E 时在它原本的值加上一个中间数 127。这个127怎么来的呢？因为单精度float中，E占了8位，2^8=256，取值范围是0～225，所以规定在存入 E 时在它原本的值加上一个中间数 127，这样 E 的取值范围为 -127～128。表示 double 时，一共占 11 bit，存入 E 时加上中间数 1023，这样取值范围为 -1023～1024。</p>
<p>所以最后的出来的指数 E = 4 + 127，转化为二进制 <code>10000011</code></p>
<h3 id="_4-拼凑" tabindex="-1"><a class="header-anchor" href="#_4-拼凑" aria-hidden="true">#</a> 4. 拼凑</h3>
<p>最后将三部分拼凑起来，并且用0将尾数补齐</p>
<p><code>0 10000011 10010010000000000000000</code></p>
<h2 id="单精度-双精度" tabindex="-1"><a class="header-anchor" href="#单精度-双精度" aria-hidden="true">#</a> 单精度 &amp; 双精度</h2>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:right">单精度</th>
<th style="text-align:center">双精度</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">符号位S</td>
<td style="text-align:right">1</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:left">指数位E</td>
<td style="text-align:right">8</td>
<td style="text-align:center">11</td>
</tr>
<tr>
<td style="text-align:left">尾数位E</td>
<td style="text-align:right">23</td>
<td style="text-align:center">52</td>
</tr>
</tbody>
</table>
</template>
