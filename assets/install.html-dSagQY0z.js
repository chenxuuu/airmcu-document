import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as l,a as n,b as a,d as e,e as t}from"./app-L4q_l0Kg.js";const p={},c={href:"https://github.com/Air-duino/AirISP/releases/latest",target:"_blank",rel:"noopener noreferrer"},d={class:"hint-container details"},u=n("summary",null,"Arch包管理安装",-1),v={href:"https://aur.archlinux.org/packages/airisp-git",target:"_blank",rel:"noopener noreferrer"},m=t(`<p><strong>注：命令行名称按 Arch Linux 规范应该是小写，安装后命令行为：<code>airisp</code>。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-Syu</span> airisp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),b=t(`<blockquote><p><code>AiISP</code>工具内置了<code>.NET</code>运行时，所以无需手动安装额外的依赖。</p></blockquote><p>解压后可以得到<code>AirISP.exe</code>（其他系统上可能为<code>AirISP</code>）</p><p>此时我们就可以直接使用这个工具了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>AirISP.exe <span class="token parameter variable">-h</span>
Description:
  AirISP 是一个flash烧录工具

Usage:
  AirISP <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Options:
  -c, <span class="token parameter variable">--chip</span> <span class="token operator">&lt;</span>chip<span class="token operator">&gt;</span>                      目标芯片型号，auto/air001
  -p, <span class="token parameter variable">--port</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>                      串口名称
  -b, <span class="token parameter variable">--baud</span> <span class="token operator">&lt;</span>baud<span class="token operator">&gt;</span>                      串口波特率
  -t, <span class="token parameter variable">--trace</span>                            启用trace日志输出 <span class="token punctuation">[</span>default: False<span class="token punctuation">]</span>
  --connect-attempts <span class="token operator">&lt;</span>connect-attempts<span class="token operator">&gt;</span>  最大重试次数，小于等于0表示无限次，默认为10次 <span class="token punctuation">[</span>default: <span class="token number">10</span><span class="token punctuation">]</span>
  <span class="token parameter variable">--before</span> <span class="token operator">&lt;</span>before<span class="token operator">&gt;</span>                      下载前要执行的操作 <span class="token punctuation">[</span>default: default_reset<span class="token punctuation">]</span>
  <span class="token parameter variable">--after</span> <span class="token operator">&lt;</span>after<span class="token operator">&gt;</span>                        下载后要执行的操作 <span class="token punctuation">[</span>default: hard_reset<span class="token punctuation">]</span>
  <span class="token parameter variable">--version</span>                              Show version information
  -?, -h, <span class="token parameter variable">--help</span>                         Show <span class="token builtin class-name">help</span> and usage information

Commands:
  chip_id                           获取芯片ID
  get                               获取ISP版本和支持的命令列表
  get_version                       获取ISP版本和芯片读保护状态
  write_flash <span class="token operator">&lt;</span>address<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>  向flash刷入固件
  read_unprotect                    关闭读保护
  read_protect                      开启读保护
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(h,_){const s=i("ExternalLinkIcon");return o(),l("div",null,[n("p",null,[a("我们可以前往"),n("a",c,[a("GitHub Release页面"),e(s)]),a("下载最新版本的AirISP工具。")]),n("details",d,[u,n("p",null,[a("Arch Linux 及其衍生版可以安装 "),n("a",v,[a("AUR airisp-git"),e(s)]),a("。")]),m]),b])}const S=r(p,[["render",k],["__file","install.html.vue"]]);export{S as default};
