const e=JSON.parse('{"key":"v-417772c7","path":"/en/javabase/juc/juc.html","title":"w","lang":"en-US","frontmatter":{"icon":"edit","date":"2023-03-25T00:00:00.000Z","category":["JUC"],"tag":["thread","program","c"],"description":"w Synchronized相关问题 1. Synchronized用过吗？其原理是什么 2. 获取对象的锁，这个锁到底是什么？如何确定对象的锁？ 3. JVM对java的原生锁做了哪些优化? 4. 什么是可重入性，为什么sysnchronized是可重入锁？ 可重入锁： 又名 递归锁: 指在同一个线程的外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁(前提，锁对象是同一个对象)，不会因为之前已经获取过还没有释放而阻塞 Java中ReentrantLock和synchronized都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。 小结：一个线程中的多个流程可以获取同一把锁，持有这把同步锁可以再次进入。自己可以获取自己的内部锁","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/en/javabase/juc/juc.html"}],["meta",{"property":"og:site_name","content":"IIIDelay的 Blog"}],["meta",{"property":"og:title","content":"w"}],["meta",{"property":"og:description","content":"w Synchronized相关问题 1. Synchronized用过吗？其原理是什么 2. 获取对象的锁，这个锁到底是什么？如何确定对象的锁？ 3. JVM对java的原生锁做了哪些优化? 4. 什么是可重入性，为什么sysnchronized是可重入锁？ 可重入锁： 又名 递归锁: 指在同一个线程的外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁(前提，锁对象是同一个对象)，不会因为之前已经获取过还没有释放而阻塞 Java中ReentrantLock和synchronized都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。 小结：一个线程中的多个流程可以获取同一把锁，持有这把同步锁可以再次进入。自己可以获取自己的内部锁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"w"}],["meta",{"property":"article:author","content":"Mr.IIIDelay"}],["meta",{"property":"article:tag","content":"thread"}],["meta",{"property":"article:tag","content":"program"}],["meta",{"property":"article:tag","content":"c"}],["meta",{"property":"article:published_time","content":"2023-03-25T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"w\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"datePublished\\":\\"2023-03-25T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.IIIDelay\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":4.81,"words":1442},"filePathRelative":"en/javabase/juc/juc.md","localizedDate":"March 25, 2023","excerpt":"<h1> w</h1>\\n<h1> Synchronized相关问题</h1>\\n<h4> 1. Synchronized用过吗？其原理是什么</h4>\\n<h4> 2. 获取对象的锁，这个锁到底是什么？如何确定对象的锁？</h4>\\n<h4> 3. JVM对java的原生锁做了哪些优化?</h4>\\n<h4> 4. 什么是可重入性，为什么sysnchronized是可重入锁？</h4>\\n<blockquote>\\n<p><strong>可重入锁</strong>：</p>\\n<ul>\\n<li>又名 递归锁: 指在同一个线程的外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁(前提，锁对象是同一个对象)，不会因为之前已经获取过还没有释放而阻塞</li>\\n<li>Java中ReentrantLock和synchronized都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。</li>\\n</ul>\\n<p>小结：一个线程中的多个流程可以获取同一把锁，持有这把同步锁可以再次进入。自己可以获取自己的内部锁</p>\\n</blockquote>","copyright":{"author":"Mr.IIIDelay"},"autoDesc":true}');export{e as data};
