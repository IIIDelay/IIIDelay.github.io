import{_ as n,W as s,X as a,a1 as t}from"./framework-b5ea9e64.js";const e="/assets/image-20230410084956181-de5542f7.png",p="/assets/image-20230410090000208-4deb3213.png",o="/assets/image-20230410090441534-d074ae45.png",l={},i=t('<h2 id="分布式id解决方案" tabindex="-1"><a class="header-anchor" href="#分布式id解决方案" aria-hidden="true">#</a> 分布式ID解决⽅案</h2><blockquote><p>为什么需要分布式ID(分布式集群环境下的全局唯一ID)</p></blockquote><img src="'+e+`" alt="image-20230410084956181" style="zoom:67%;"><blockquote><p>UUID(可以⽤)</p><ul><li>UUID 是指Universally Unique Identifier，翻译为中⽂是通⽤唯⼀识别码</li><li>产⽣重复 UUID 并造成错误的情况⾮常低，是故⼤可不必考虑此问题。</li></ul></blockquote><ul><li>Java中得到⼀个UUID，可以使⽤java.util包提供的⽅法</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>java<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>独⽴数据库的⾃增ID</p><ul><li>⽐如A表分表为A1表和A2表，那么肯定不能让A1表和A2表的ID⾃增，那么ID怎么获取呢？我们可 以单独的创建⼀个Mysql数据库，在这个数据库中创建⼀张表，这张表的ID设置为⾃增，其他地⽅需要全局唯⼀ID的时候，就模拟向这个Mysql数据库的这张表中模拟插⼊⼀条记录，此时ID会⾃增，然后我们可以通过Mysql的select last_insert_id() 获取到刚刚这张表中⾃增⽣成ID</li></ul></blockquote><ul><li>⽐如，我们创建了⼀个数据库实例global_id_generator，在其中创建了⼀个数据表，表结构如下：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>DISTRIBUTE_ID<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>DISTRIBUTE_ID<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span>         <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>createtime<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> utf8<span class="token punctuation">;</span>
  
<span class="token comment">-- 当分布式集群环境中哪个应⽤需要获取⼀个全局唯⼀的分布式ID的时候，就可以使⽤代码连接这个数据库实例，执⾏如下sql语句即可</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> DISTRIBUTE_ID<span class="token punctuation">(</span>createtime<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> LAST_INSERT_ID<span class="token punctuation">(</span><span class="token punctuation">)</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：</p><ol><li>这⾥的createtime字段⽆实际意义，是为了随便插⼊⼀条数据以⾄于能够⾃增id。</li><li>使⽤独⽴的Mysql实例⽣成分布式id，虽然可⾏，但是性能和可靠性都不够好，因为你需要代码连接到数据库才能获取到id，性能⽆法保障，另外mysql数据库实例挂掉了，那么就⽆法获取分布式id了。</li><li>有⼀些开发者⼜针对上述的情况将⽤于⽣成分布式id的mysql数据库设计成了⼀个集群架构，那么其实这种⽅式现在基本不⽤，因为过于麻烦了。</li></ol></blockquote><blockquote><p><strong>SnowFlake 雪花算法</strong>（可以⽤，推荐）</p><ul><li>雪花算法是Twitter推出的⼀个⽤于⽣成分布式ID的策略</li><li>雪花算法是⼀个算法，基于这个算法可以⽣成ID，⽣成的ID是⼀个long型，那么在Java中⼀个long 型是8个字节，算下来是64bit</li><li>互联⽹公司也基于上述的⽅案封装了⼀些分布式ID⽣成器，⽐如滴滴的tinyid（基于数据库实现）、百度的uidgenerator（基于SnowFlake）和美团的leaf（基于数据库和SnowFlake）等</li></ul></blockquote><ul><li>如下是使⽤雪花算法⽣成的⼀个ID的⼆进制形式示意：</li></ul><img src="`+p+'" alt="image-20230410090000208" style="zoom:80%;"><blockquote><p>借助Redis的Incr命令获取全局唯⼀ID（推荐）</p><ul><li><p>Redis Incr 命令将 key 中储存的数字值增⼀。如果 key 不存在，那么 key 的值会先被初始化为 0，然后再执⾏ INCR 操作。</p></li><li><p>&lt;key,value&gt; &lt;id,&gt; .incr(id) 1 2 3 4</p><figure><img src="'+o+'" alt="image-20230410090441534" tabindex="0" loading="lazy"><figcaption>image-20230410090441534</figcaption></figure></li></ul></blockquote>',14),c=[i];function u(k,d){return s(),a("div",null,c)}const m=n(l,[["render",u],["__file","idwork.html.vue"]]);export{m as default};
