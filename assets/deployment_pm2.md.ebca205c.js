import{_ as n,c as s,o as a,d as e}from"./app.b94706c5.js";const _='{"title":"PM2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BBE\u7F6E","slug":"\u8BBE\u7F6E"},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72"},{"level":2,"title":"\u66F4\u591A","slug":"\u66F4\u591A"}],"relativePath":"deployment/pm2.md","lastUpdated":1638435340236}',t={},p=e(`<h1 id="pm2" tabindex="-1">PM2 <a class="header-anchor" href="#pm2" aria-hidden="true">#</a></h1><p>\u5982\u4F55\u4F7F\u7528 PM2 \u5C06 Nuxt \u90E8\u7F72\u5230 Node.js \u670D\u52A1\u4E0A\u3002</p><ul><li>\u652F\u6301\u6781\u5C11\u7684 SSR \u6784\u5EFA</li><li>\u96F6\u6BEB\u79D2\u51B7\u542F\u52A8</li><li>\u53EF\u8FDB\u884C\u66F4\u591A\u7684\u914D\u7F6E</li></ul><h2 id="\u8BBE\u7F6E" tabindex="-1">\u8BBE\u7F6E <a class="header-anchor" href="#\u8BBE\u7F6E" aria-hidden="true">#</a></h2><p>\u786E\u4FDD\u6CA1\u6709\u5728\u5176\u5B83\u5730\u65B9\u914D\u7F6E <code>nuxt.config</code> \u6587\u4EF6\u3002</p><div class="language-js [nuxt.config.js|ts]"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  nitro<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u7684\u914D\u7F6E\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5FFD\u7565\u5B83</span>
    <span class="token comment">// preset: &#39;server&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u8FD0\u884C <code>yarn build</code>\uFF0C \u6253\u5305\u540E\u7684\u6240\u6709\u6587\u4EF6\u90FD\u5728 <code>.output</code> \u6587\u4EF6\u5939\u4E2D\u3002 \u9759\u6001\u8D44\u6E90\u5728 <code>public</code> \u5B50\u76EE\u5F55\u4E2D\uFF0C \u670D\u52A1\u53CA\u5176\u4F9D\u8D56\u5728 <code>server</code> \u5B50\u76EE\u5F55\u4E2D\u3002</p><p>\u8FD9\u4E2A <code>.output</code> \u6587\u4EF6\u5939\u53EF\u4EE5\u90E8\u7F72\u5230\u4F60\u7684 Node.js \u670D\u52A1\u4E0A \uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u7528 <a href="https://pm2.keymetrics.io/docs/" target="_blank" rel="noopener noreferrer"><code>pm2</code></a>\u3002</p><p>\u8981\u4EE5\u751F\u4EA7\u6A21\u5F0F\u542F\u52A8\u670D\u52A1\uFF0C\u8BF7\u8FD0\u884C\uFF1A</p><div class="language-bash"><pre><code>node .output/server/index.mjs
</code></pre></div><p>\u4F7F\u7528 <code>pm2</code> \u7684\u914D\u7F6E\uFF1A</p><div class="language-js [ecosystem.config.js]"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  apps<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;NuxtAppName&#39;</span><span class="token punctuation">,</span>
      exec_mode<span class="token operator">:</span> <span class="token string">&#39;cluster&#39;</span><span class="token punctuation">,</span>
      instances<span class="token operator">:</span> <span class="token string">&#39;max&#39;</span><span class="token punctuation">,</span>
      script<span class="token operator">:</span> <span class="token string">&#39;./.output/server/index.mjs&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u66F4\u591A" tabindex="-1">\u66F4\u591A <a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u6709\u5173 <a href="https://v3.nuxtjs.org/docs/deployment/presets/server" target="_blank" rel="noopener noreferrer"><code>\u670D\u52A1\u5668\u914D\u7F6E</code></a>\u7684\u66F4\u591A\u4FE1\u606F\u3002</p>`,15),o=[p];function c(r,d,l,i,u,k){return a(),s("div",null,o)}var m=n(t,[["render",c]]);export{_ as __pageData,m as default};
