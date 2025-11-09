import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,e as a}from"./app-L4q_l0Kg.js";const i={},c=a(`<p>AirISP支持烧录<code>HEX</code>或<code>BIN</code>格式的文件到芯片的 FLASH 中。</p><p>我们可以使用<code>write_flash</code>命令来执行烧录操作，像下面这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>AirISP.exe <span class="token parameter variable">-c</span> air001 <span class="token parameter variable">-p</span> COM21 <span class="token parameter variable">-b</span> <span class="token number">115200</span> write_flash <span class="token parameter variable">-e</span> 0x08000000 gpio.hex
AirISP v1.2.4.0
串口 COM21
连接中<span class="token punctuation">..</span>.
Chip PID is: 0x04 0x40
擦除flash中（请耐心等待）<span class="token punctuation">..</span>.
擦除成功，耗时 <span class="token number">39.5811</span> ms.
Writing at <span class="token number">134219264</span><span class="token punctuation">..</span>. <span class="token number">100.00</span>%
Write <span class="token number">1536</span> bytes at 0x08000000 <span class="token keyword">in</span> <span class="token number">274.0526</span> ms

Leaving<span class="token punctuation">..</span>.
通过RTS硬件复位<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-flash-命令参数" tabindex="-1"><a class="header-anchor" href="#write-flash-命令参数" aria-hidden="true">#</a> write_flash 命令参数</h2><p><code>write_flash</code>命令有如下参数：</p><ol><li><code>--erase-all</code>或者<code>-e</code>，作用是在烧录的时候擦除全部flash，建议添加。</li><li><code>--no-progress</code>或者<code>-p</code>，作用是在下载的时候禁止显示进度条。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若MCU中已刷入过其他固件，烧录新固件时请务必加上<code>-e</code>擦除参数。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如若使用不带外置晶振的USB转串口芯片导致通信失败，可能需要降低波特率再试，比如<code>9600</code>。</p></div>`,8),l=[c];function t(o,r){return s(),n("div",null,l)}const u=e(i,[["render",t],["__file","flash.html.vue"]]);export{u as default};
