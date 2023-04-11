const l=JSON.parse(`{"key":"v-ecffe58a","path":"/en/database/dbms/mysql.html","title":"Mysql数据库要用B+树存储索引？","lang":"en-US","frontmatter":{"icon":"edit","category":["DBMS","SQL"],"tag":["mysql"],"description":"Mysql数据库要用B+树存储索引？ 背景 在面试中, mysql的索引结构应该是高频考点了。 面试官: 你了解mysql的索引吗？ 我: 索引是一种协助快速查询数据的一种数据结构。 面试官: 那你知道mysql中存储索引用的什么数据结构吗？ 我: 一般使用B+数吧。 面试官: B+树的查询时间大概是多少？ 我: 和树的高度有关, log(n) 面试官: mysql的索引结构为什么选用B+树, 而不是选择二叉排序树、平衡二叉树、红黑树以及Hash呢？ 我: ……","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/en/database/dbms/mysql.html"}],["meta",{"property":"og:site_name","content":"IIIDelay's Blog"}],["meta",{"property":"og:title","content":"Mysql数据库要用B+树存储索引？"}],["meta",{"property":"og:description","content":"Mysql数据库要用B+树存储索引？ 背景 在面试中, mysql的索引结构应该是高频考点了。 面试官: 你了解mysql的索引吗？ 我: 索引是一种协助快速查询数据的一种数据结构。 面试官: 那你知道mysql中存储索引用的什么数据结构吗？ 我: 一般使用B+数吧。 面试官: B+树的查询时间大概是多少？ 我: 和树的高度有关, log(n) 面试官: mysql的索引结构为什么选用B+树, 而不是选择二叉排序树、平衡二叉树、红黑树以及Hash呢？ 我: ……"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Mysql数据库要用B+树存储索引？"}],["meta",{"property":"article:author","content":"Mr.IIIDelay"}],["meta",{"property":"article:tag","content":"mysql"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql数据库要用B+树存储索引？\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.IIIDelay\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"Hash 表","slug":"hash-表","link":"#hash-表","children":[]},{"level":2,"title":"二叉查找树(BST)","slug":"二叉查找树-bst","link":"#二叉查找树-bst","children":[]},{"level":2,"title":"红黑树","slug":"红黑树","link":"#红黑树","children":[]},{"level":2,"title":"平衡二叉树(AVL)","slug":"平衡二叉树-avl","link":"#平衡二叉树-avl","children":[]},{"level":2,"title":"B树","slug":"b树","link":"#b树","children":[]},{"level":2,"title":"B+树","slug":"b-树","link":"#b-树","children":[]},{"level":2,"title":"B*树","slug":"b-树-1","link":"#b-树-1","children":[]},{"level":2,"title":"为什么MySQL的索引要使用B+树而不是B树?","slug":"为什么mysql的索引要使用b-树而不是b树","link":"#为什么mysql的索引要使用b-树而不是b树","children":[]},{"level":2,"title":"为什么MySQL的索引要使用B+树而不是Hash索引?","slug":"为什么mysql的索引要使用b-树而不是hash索引","link":"#为什么mysql的索引要使用b-树而不是hash索引","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参看:","slug":"参看","link":"#参看","children":[]},{"level":2,"title":"背景","slug":"背景-1","link":"#背景-1","children":[]},{"level":2,"title":"存储引擎简介","slug":"存储引擎简介","link":"#存储引擎简介","children":[]},{"level":2,"title":"MySQL 中查看存储引擎","slug":"mysql-中查看存储引擎","link":"#mysql-中查看存储引擎","children":[]},{"level":2,"title":"InnoDB存储引擎","slug":"innodb存储引擎","link":"#innodb存储引擎","children":[]},{"level":2,"title":"MyISAM存储引擎","slug":"myisam存储引擎","link":"#myisam存储引擎","children":[]},{"level":2,"title":"MEMORY存储引擎","slug":"memory存储引擎","link":"#memory存储引擎","children":[]},{"level":2,"title":"ARCHIVE存储引擎","slug":"archive存储引擎","link":"#archive存储引擎","children":[]},{"level":2,"title":"四种常用的存储引擎如何选择","slug":"四种常用的存储引擎如何选择","link":"#四种常用的存储引擎如何选择","children":[]},{"level":2,"title":"其他不常用的存储引擎分析(了解即可)","slug":"其他不常用的存储引擎分析-了解即可","link":"#其他不常用的存储引擎分析-了解即可","children":[{"level":3,"title":"CSV存储引擎","slug":"csv存储引擎","link":"#csv存储引擎","children":[]},{"level":3,"title":"BLACKHOLE存储引擎(黑洞引擎)","slug":"blackhole存储引擎-黑洞引擎","link":"#blackhole存储引擎-黑洞引擎","children":[]},{"level":3,"title":"PERFORMANCE_SCHEMA存储引擎","slug":"performance-schema存储引擎","link":"#performance-schema存储引擎","children":[]},{"level":3,"title":"Federated存储引擎","slug":"federated存储引擎","link":"#federated存储引擎","children":[]},{"level":3,"title":"MERGE存储引擎","slug":"merge存储引擎","link":"#merge存储引擎","children":[]}]},{"level":2,"title":"面试题: Mysql 中 MyISAM 和 InnoDB 的区别有哪些？","slug":"面试题-mysql-中-myisam-和-innodb-的区别有哪些","link":"#面试题-mysql-中-myisam-和-innodb-的区别有哪些","children":[]},{"level":2,"title":"面试题: MySQL各种存储引擎的使用场景？","slug":"面试题-mysql各种存储引擎的使用场景","link":"#面试题-mysql各种存储引擎的使用场景","children":[]},{"level":2,"title":"参看","slug":"参看-1","link":"#参看-1","children":[]},{"level":2,"title":"数据库优化","slug":"数据库优化","link":"#数据库优化","children":[{"level":3,"title":"mysql 单表多次查询和多表联合查询，哪个效率高?","slug":"mysql-单表多次查询和多表联合查询-哪个效率高","link":"#mysql-单表多次查询和多表联合查询-哪个效率高","children":[]}]},{"level":2,"title":"慢查询优化","slug":"慢查询优化","link":"#慢查询优化","children":[]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"什么是事务？","slug":"什么是事务","link":"#什么是事务","children":[]},{"level":3,"title":"事务的特性(ACID)","slug":"事务的特性-acid","link":"#事务的特性-acid","children":[]},{"level":3,"title":"什么是Redo/Undo机制？","slug":"什么是redo-undo机制","link":"#什么是redo-undo机制","children":[]},{"level":3,"title":"什么是脏读？幻读？不可重复读？(事务可能导致的问题)","slug":"什么是脏读-幻读-不可重复读-事务可能导致的问题","link":"#什么是脏读-幻读-不可重复读-事务可能导致的问题","children":[]},{"level":3,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[]},{"level":3,"title":"MVCC原理","slug":"mvcc原理","link":"#mvcc原理","children":[]}]},{"level":2,"title":"MySQL加锁的目的是什么？","slug":"mysql加锁的目的是什么","link":"#mysql加锁的目的是什么","children":[]},{"level":2,"title":"MySQL的锁是基于什么实现的？","slug":"mysql的锁是基于什么实现的","link":"#mysql的锁是基于什么实现的","children":[]},{"level":2,"title":"解决并发事务问题的方式","slug":"解决并发事务问题的方式","link":"#解决并发事务问题的方式","children":[{"level":3,"title":"写写情况","slug":"写写情况","link":"#写写情况","children":[]},{"level":3,"title":"读写或写读情况","slug":"读写或写读情况","link":"#读写或写读情况","children":[]},{"level":3,"title":"一致性读","slug":"一致性读","link":"#一致性读","children":[]},{"level":3,"title":"锁定读","slug":"锁定读","link":"#锁定读","children":[]},{"level":3,"title":"写操作","slug":"写操作","link":"#写操作","children":[]}]},{"level":2,"title":"锁的内存结构","slug":"锁的内存结构","link":"#锁的内存结构","children":[{"level":3,"title":"基本介绍","slug":"基本介绍","link":"#基本介绍","children":[]},{"level":3,"title":"锁结构的变化：","slug":"锁结构的变化","link":"#锁结构的变化","children":[]},{"level":3,"title":"哪些记录可以放在一个锁结构中？","slug":"哪些记录可以放在一个锁结构中","link":"#哪些记录可以放在一个锁结构中","children":[]},{"level":3,"title":"锁结构详解","slug":"锁结构详解","link":"#锁结构详解","children":[]}]},{"level":2,"title":"锁的分类","slug":"锁的分类","link":"#锁的分类","children":[]},{"level":2,"title":"共享锁和排它锁(读写锁)","slug":"共享锁和排它锁-读写锁","link":"#共享锁和排它锁-读写锁","children":[{"level":3,"title":"共享锁","slug":"共享锁","link":"#共享锁","children":[]},{"level":3,"title":"排它锁","slug":"排它锁","link":"#排它锁","children":[]}]},{"level":2,"title":"读写意向锁","slug":"读写意向锁","link":"#读写意向锁","children":[]},{"level":2,"title":"表锁","slug":"表锁","link":"#表锁","children":[{"level":3,"title":"什么是表锁？","slug":"什么是表锁","link":"#什么是表锁","children":[]},{"level":3,"title":"显式加表锁","slug":"显式加表锁","link":"#显式加表锁","children":[]},{"level":3,"title":"什么时候释放表锁？","slug":"什么时候释放表锁","link":"#什么时候释放表锁","children":[]},{"level":3,"title":"表级别的S锁、X锁","slug":"表级别的s锁、x锁","link":"#表级别的s锁、x锁","children":[]},{"level":3,"title":"表级别的IS锁、IX锁","slug":"表级别的is锁、ix锁","link":"#表级别的is锁、ix锁","children":[]},{"level":3,"title":"表级别的AUTO-INC锁","slug":"表级别的auto-inc锁","link":"#表级别的auto-inc锁","children":[]}]},{"level":2,"title":"行锁","slug":"行锁","link":"#行锁","children":[{"level":3,"title":"什么是行锁？","slug":"什么是行锁","link":"#什么是行锁","children":[]},{"level":3,"title":"行锁的原理","slug":"行锁的原理","link":"#行锁的原理","children":[]},{"level":3,"title":"行锁的类型","slug":"行锁的类型","link":"#行锁的类型","children":[]},{"level":3,"title":"记录锁(Record Lock)","slug":"记录锁-record-lock","link":"#记录锁-record-lock","children":[]},{"level":3,"title":"间隙锁(Gap Lock)","slug":"间隙锁-gap-lock","link":"#间隙锁-gap-lock","children":[]},{"level":3,"title":"临键锁(Next-Key Lock)","slug":"临键锁-next-key-lock","link":"#临键锁-next-key-lock","children":[]},{"level":3,"title":"插入意向锁(LOCK_INSERT_INTENTION)","slug":"插入意向锁-lock-insert-intention","link":"#插入意向锁-lock-insert-intention","children":[]},{"level":3,"title":"隐式锁","slug":"隐式锁","link":"#隐式锁","children":[]}]},{"level":2,"title":"加锁语句分析","slug":"加锁语句分析","link":"#加锁语句分析","children":[{"level":3,"title":"普通SELECT语句","slug":"普通select语句","link":"#普通select语句","children":[]},{"level":3,"title":"锁定读的语句","slug":"锁定读的语句","link":"#锁定读的语句","children":[]},{"level":3,"title":"半一致性读语句","slug":"半一致性读语句","link":"#半一致性读语句","children":[]},{"level":3,"title":"INSERT语句","slug":"insert语句","link":"#insert语句","children":[]}]},{"level":2,"title":"加锁情况总结","slug":"加锁情况总结","link":"#加锁情况总结","children":[]},{"level":2,"title":"查看事务的加锁情况","slug":"查看事务的加锁情况","link":"#查看事务的加锁情况","children":[{"level":3,"title":"使用 information_schema 数据库中的表获取锁信息","slug":"使用-information-schema-数据库中的表获取锁信息","link":"#使用-information-schema-数据库中的表获取锁信息","children":[]},{"level":3,"title":"使用 SHOW ENINGE INNODB STATUS 获取锁信息","slug":"使用-show-eninge-innodb-status-获取锁信息","link":"#使用-show-eninge-innodb-status-获取锁信息","children":[]}]},{"level":2,"title":"死锁问题","slug":"死锁问题","link":"#死锁问题","children":[]},{"level":2,"title":"参看：","slug":"参看-2","link":"#参看-2","children":[]},{"level":2,"title":"1 索引是什么？","slug":"_1-索引是什么","link":"#_1-索引是什么","children":[]},{"level":2,"title":"2 索引的优缺点？","slug":"_2-索引的优缺点","link":"#_2-索引的优缺点","children":[]},{"level":2,"title":"3 MySQL的索引类型","slug":"_3-mysql的索引类型","link":"#_3-mysql的索引类型","children":[]},{"level":2,"title":"4 Mysql 索引底层数据结构选型(为什么索引结构默认使用B+Tree，而不是B-Tree，Hash，二叉树，红黑树？)","slug":"_4-mysql-索引底层数据结构选型-为什么索引结构默认使用b-tree-而不是b-tree-hash-二叉树-红黑树","link":"#_4-mysql-索引底层数据结构选型-为什么索引结构默认使用b-tree-而不是b-tree-hash-二叉树-红黑树","children":[{"level":3,"title":"哈希表","slug":"哈希表","link":"#哈希表","children":[]},{"level":3,"title":"二叉查找数(BST)","slug":"二叉查找数-bst","link":"#二叉查找数-bst","children":[]},{"level":3,"title":"红黑树","slug":"红黑树-1","link":"#红黑树-1","children":[]},{"level":3,"title":"平衡二叉树(AVL)","slug":"平衡二叉树-avl-1","link":"#平衡二叉树-avl-1","children":[]},{"level":3,"title":"B树(B-树)","slug":"b树-b-树","link":"#b树-b-树","children":[]},{"level":3,"title":"B+树","slug":"b-树-2","link":"#b-树-2","children":[]}]},{"level":2,"title":"5 Innodb 引擎和 Myisam 引擎对索引的实现","slug":"_5-innodb-引擎和-myisam-引擎对索引的实现","link":"#_5-innodb-引擎和-myisam-引擎对索引的实现","children":[]},{"level":2,"title":"6 InnoDB中一棵B+树能存多少行数据？","slug":"_6-innodb中一棵b-树能存多少行数据","link":"#_6-innodb中一棵b-树能存多少行数据","children":[]},{"level":2,"title":"7 聚簇索引和非聚簇索引","slug":"_7-聚簇索引和非聚簇索引","link":"#_7-聚簇索引和非聚簇索引","children":[]},{"level":2,"title":"8 非聚簇索引一定会回表查询吗？(覆盖索引)","slug":"_8-非聚簇索引一定会回表查询吗-覆盖索引","link":"#_8-非聚簇索引一定会回表查询吗-覆盖索引","children":[]},{"level":2,"title":"9 联合索引是什么？为什么需要注意联合索引中的顺序？","slug":"_9-联合索引是什么-为什么需要注意联合索引中的顺序","link":"#_9-联合索引是什么-为什么需要注意联合索引中的顺序","children":[]},{"level":2,"title":"10 MySQL的最左前缀原则?","slug":"_10-mysql的最左前缀原则","link":"#_10-mysql的最左前缀原则","children":[]},{"level":2,"title":"11 前缀索引？","slug":"_11-前缀索引","link":"#_11-前缀索引","children":[]},{"level":2,"title":"12 索引下推？","slug":"_12-索引下推","link":"#_12-索引下推","children":[]},{"level":2,"title":"13 怎么查看MySQL语句有没有用到索引？","slug":"_13-怎么查看mysql语句有没有用到索引","link":"#_13-怎么查看mysql语句有没有用到索引","children":[]},{"level":2,"title":"14 什么情况下不走索引(索引失效)？","slug":"_14-什么情况下不走索引-索引失效","link":"#_14-什么情况下不走索引-索引失效","children":[]},{"level":2,"title":"15 为什么官方建议使用自增长数字主键作为索引？","slug":"_15-为什么官方建议使用自增长数字主键作为索引","link":"#_15-为什么官方建议使用自增长数字主键作为索引","children":[]},{"level":2,"title":"16 如何创建索引？","slug":"_16-如何创建索引","link":"#_16-如何创建索引","children":[]},{"level":2,"title":"17 创建索引时需要注意什么？建索引的原则有哪些？","slug":"_17-创建索引时需要注意什么-建索引的原则有哪些","link":"#_17-创建索引时需要注意什么-建索引的原则有哪些","children":[]},{"level":2,"title":"18 使用索引查询一定能提高查询的性能吗？","slug":"_18-使用索引查询一定能提高查询的性能吗","link":"#_18-使用索引查询一定能提高查询的性能吗","children":[]},{"level":2,"title":"19. mysql索引对Null值如何处理的？","slug":"_19-mysql索引对null值如何处理的","link":"#_19-mysql索引对null值如何处理的","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":2,"title":"参考","slug":"参考-1","link":"#参考-1","children":[]}],"git":{},"readingTime":{"minutes":107.22,"words":32165},"filePathRelative":"en/database/dbms/mysql.md","excerpt":"<h1> Mysql数据库要用B+树存储索引？</h1>\\n<h2> 背景</h2>\\n<p>在面试中, mysql的索引结构应该是高频考点了。</p>\\n<blockquote>\\n<p>面试官: 你了解mysql的索引吗？</p>\\n<p>我: 索引是一种协助快速查询数据的一种数据结构。</p>\\n<p>面试官: 那你知道mysql中存储索引用的什么数据结构吗？</p>\\n<p>我: 一般使用B+数吧。</p>\\n<p>面试官: B+树的查询时间大概是多少？</p>\\n<p>我: 和树的高度有关, log(n)</p>\\n<p>面试官: <strong>mysql的索引结构为什么选用B+树, 而不是选择二叉排序树、平衡二叉树、红黑树以及Hash呢？</strong></p>\\n<p>我: ……</p>\\n</blockquote>","copyright":{"author":"Mr.IIIDelay"},"autoDesc":true}`);export{l as data};
