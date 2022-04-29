<template><h1 id="ubuntu和centos8安装mysql8" tabindex="-1"><a class="header-anchor" href="#ubuntu和centos8安装mysql8" aria-hidden="true">#</a> Ubuntu和Centos8安装MySQL8</h1>
<h2 id="一、ubuntu-18-04" tabindex="-1"><a class="header-anchor" href="#一、ubuntu-18-04" aria-hidden="true">#</a> 一、Ubuntu 18.04</h2>
<h3 id="下载deb包" tabindex="-1"><a class="header-anchor" href="#下载deb包" aria-hidden="true">#</a> 下载deb包</h3>
<p>1 、登入 mysql 官网，在官网中下载 deb 包，点击该链接，即可下载。
<a href="https://dev.mysql.com/downloads/repo/apt/" target="_blank" rel="noopener noreferrer">下载deb包<ExternalLinkIcon/></a>
2、下载该 deb 文件后，FTP上传到对应文件夹后 进入该文件夹，执行：
sudo dpkg -i 该deb文件名</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> dpkg -i mysql-apt-config_0.8.13-1_all.deb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3、方向键选mysql-8.0 并按enter键
再次方向键选择mysql-8.0 并按enter键
方向键选择ok 并按enter键</p>
<h3 id="安装mysql-8" tabindex="-1"><a class="header-anchor" href="#安装mysql-8" aria-hidden="true">#</a> 安装MySQL 8</h3>
<p>1、更新apt源</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、正式安装MySQL 8.0</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3、安装完后，会出现一个图形界面，会让你设置root密码，输入后按enter键，并再次确认。
4、MySQL8.0 采用了新的加密方式，与 Ubuntu18.04 有兼容问题，故选择下面的旧版本5.x的加密方式。</p>
<h3 id="登录mysql" tabindex="-1"><a class="header-anchor" href="#登录mysql" aria-hidden="true">#</a> 登录MySQL</h3>
<p>1.登录MySQL，查看当前的用户</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql -u root -p密码
mysql<span class="token operator">></span> use mysql<span class="token punctuation">;</span>
mysql<span class="token operator">></span> <span class="token keyword">select</span> host, user, authentication_string, plugin from user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2">
<li>设置远程连接</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> update user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">'%'</span> where user <span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>修改密码，注意密码格式，mysql8.0以上密码策略限制必须要大小写加数字特殊符号</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql<span class="token operator">></span> alter user<span class="token string">'root'</span>@<span class="token string">'%'</span> IDENTIFIED BY <span class="token string">'KJHKdfsdf@98798'</span><span class="token punctuation">;</span>
mysql<span class="token operator">></span> flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样就可以远程连接了</p>
<h2 id="二、centos-8" tabindex="-1"><a class="header-anchor" href="#二、centos-8" aria-hidden="true">#</a> 二、CentOS 8</h2>
<p>转载自<a href="https://www.cnblogs.com/kasnti/p/11929030.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/kasnti/p/11929030.html<ExternalLinkIcon/></a></p>
<h3 id="使用最新的包管理器安装mysql" tabindex="-1"><a class="header-anchor" href="#使用最新的包管理器安装mysql" aria-hidden="true">#</a> 使用最新的包管理器安装MySQL</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> dnf <span class="token function">install</span> @mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h3>
<p>安装完成后，运行以下命令来启动MySQL服务并使它在启动时自动启动：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> --now mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>要检查MySQL服务器是否正在运行，请输入：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="添加密码及安全设置" tabindex="-1"><a class="header-anchor" href="#添加密码及安全设置" aria-hidden="true">#</a> 添加密码及安全设置</h3>
<p>运行mysql_secure_installation脚本，该脚本执行一些与安全性相关的操作并设置MySQL根密码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>步骤如下：</p>
<ol>
<li>
<p>要求你配置VALIDATE PASSWORD component（验证密码组件）： 输入y ，回车进入该配置</p>
<p>选择密码验证策略等级， 我这里选择0 （low），回车
输入新密码两次
确认是否继续使用提供的密码？输入y ，回车
移除匿名用户？ 输入y ，回车
不允许root远程登陆？ 我这里需要远程登陆，所以输入n ，回车</p>
</li>
<li>
<p>移除test数据库？ 输入y ，回车</p>
</li>
<li>
<p>重新载入权限表？ 输入y ，回车</p>
</li>
</ol>
<h3 id="配置远程登陆" tabindex="-1"><a class="header-anchor" href="#配置远程登陆" aria-hidden="true">#</a> 配置远程登陆</h3>
<p>如果需要设置root账户远程登陆，上一步骤中，不允许root远程登陆？这一步需要设为n。
接下来本机登录MySQL，将root用户的host字段设为'%'，意为接受root所有IP地址的登录请求：
本机登录MySQL:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql -uroot -p<span class="token operator">&lt;</span>上面步骤中设置的密码<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>回车后即可登录，接下来终端变成了 <code>mysql&gt;</code> 开头</p>
<p>接着继续执行mysql语句，将将root用户的host字段设为'%'：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>use mysql<span class="token punctuation">;</span>
update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">'%'</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>设置完成后输入exit退出mysql，回到终端shell界面，接着开启系统防火墙的3306端口：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> firewall-cmd --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp --permanent
<span class="token function">sudo</span> firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="关闭mysql主机查询dns" tabindex="-1"><a class="header-anchor" href="#关闭mysql主机查询dns" aria-hidden="true">#</a> 关闭MySQL主机查询dns</h3>
<p>MySQL会反向解析远程连接地址的dns记录，如果MySQL主机无法连接外网，则dns可能无法解析成功，导致第一次连接MySQL速度很慢，所以在配置中可以关闭该功能。
参考文档
打开/etc/my.cnf文件，添加以下配置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
skip-name-resolve
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="重启服务" tabindex="-1"><a class="header-anchor" href="#重启服务" aria-hidden="true">#</a> 重启服务</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>本机测试安装后，MySQL8.0默认已经是utf8mb4字符集，所以字符集不再修改</p>
<h3 id="新建用户时密码过于简单提示错误" tabindex="-1"><a class="header-anchor" href="#新建用户时密码过于简单提示错误" aria-hidden="true">#</a> 新建用户时密码过于简单提示错误</h3>
<p>ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
登录MySQL</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>SHOW VARIABLES LIKE <span class="token string">'validate_password%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改密码策略</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span>LOW<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改密码最小长度</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改密码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">'root'</span>@<span class="token string">'localhost'</span> IDENTIFIED BY <span class="token string">'123456'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
