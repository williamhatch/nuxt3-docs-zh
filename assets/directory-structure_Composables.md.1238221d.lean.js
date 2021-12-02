import{_ as s,c as a,o as n,d as t}from"./app.b94706c5.js";const h='{"title":"\u53EF\u590D\u7528\u7EC4\u5408\u903B\u8F91\u76EE\u5F55(Composables directory )","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"},{"level":3,"title":"\u547D\u540D\u5BFC\u51FA","slug":"\u547D\u540D\u5BFC\u51FA"},{"level":3,"title":"\u9ED8\u8BA4\u5BFC\u51FA","slug":"\u9ED8\u8BA4\u5BFC\u51FA"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"directory-structure/Composables.md","lastUpdated":1638435340236}',p={},o=t(`__VP_STATIC_START__<h1 id="\u53EF\u590D\u7528\u7EC4\u5408\u903B\u8F91\u76EE\u5F55-composables-directory" tabindex="-1"><a href="https://v3.nuxtjs.org/docs/directory-structure/composables" target="_blank" rel="noopener noreferrer">\u53EF\u590D\u7528\u7EC4\u5408\u903B\u8F91\u76EE\u5F55(Composables directory )</a> <a class="header-anchor" href="#\u53EF\u590D\u7528\u7EC4\u5408\u903B\u8F91\u76EE\u5F55-composables-directory" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E\uFF1A</p><p>\u5728 Nuxt3 \u7684\u7EA6\u5B9A\u4E0B\uFF0C\u7528\u6237\u5728<code>composables</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u7684\u7EC4\u5408\u903B\u8F91\u6587\u4EF6\u5C06\u4F1A\u88AB\u7CFB\u7EDF\u81EA\u52A8\u8BC6\u522B\u5BFC\u5165\u5230\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4EE5\u4F9B\u5168\u5C40\u4F7F\u7528\u3002</p></div><h2 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u64CD\u4F5C\uFF1A</p><p>\u5728 composables \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA<code>useFoo.ts</code>\u6587\u4EF6,\u7F16\u5199\u7EC4\u5408\u903B\u8F91\u4EE3\u7801\u3002</p></div><h3 id="\u547D\u540D\u5BFC\u51FA" tabindex="-1">\u547D\u540D\u5BFC\u51FA <a class="header-anchor" href="#\u547D\u540D\u5BFC\u51FA" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useFoo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u9ED8\u8BA4\u5BFC\u51FA" tabindex="-1">\u9ED8\u8BA4\u5BFC\u51FA <a class="header-anchor" href="#\u9ED8\u8BA4\u5BFC\u51FA" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//\u4F7F\u7528: useFoo()</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="danger custom-block"><p class="custom-block-title">\u6CE8\u610F\uFF1A</p><p>\u9ED8\u8BA4\u5BFC\u51FA\u4EE5\u6587\u4EF6\u540D\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u9ED8\u8BA4\u5BFC\u51FA\u4F7F\u7528,\u6587\u4EF6\u540D\u5FC5\u987B\u9075\u5FAA <code>pascalCase</code>\u3001<code>camelCase</code> \u89C4\u8303</p></div><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u7F16\u5199\u597D\u7EC4\u5408\u903B\u8F91\u6587\u4EF6\u540E,Nuxt 3 \u5C31\u4F1A\u81EA\u52A8\u7684\u5BFC\u5165\uFF0C\u60A8\u53EF\u4EE5\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5B83\u800C\u65E0\u9700\u624B\u52A8\u5BFC\u5165\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ foo }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">useFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,12),e=[o];function c(l,u,i,r,k,d){return n(),a("div",null,e)}var m=s(p,[["render",c]]);export{h as __pageData,m as default};
