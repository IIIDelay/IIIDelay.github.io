import{_ as e,W as o,X as i,a1 as a}from"./framework-b5ea9e64.js";const l="/assets/image-20230409234246803-517788e2.png",r="/assets/image-20230409234319063-e30967a8.png",u="/assets/image-20230325202613012-dda075b6.png",t="/assets/image-20230325203807607-1b040430.png",c="/assets/image-20230326100120529-ebbc7e0d.png",s="/assets/image-20230409224027977-440d9503.png",n="/assets/image-20230409224618986-9fc512dd.png",d="/assets/image-20230409224734587-a890f0b3.png",p={},m=a('<h1 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h1><h2 id="mq作用" tabindex="-1"><a class="header-anchor" href="#mq作用" aria-hidden="true">#</a> MQ作用</h2><blockquote><p>限流削峰</p><ul><li><p>MQ可以将系统的超量请求暂存其中, 以便系统后期可以慢慢进行处理, 从而避免了请求的丢失或系统被压垮。</p><img src="'+l+'" alt="image-20230409234246803" style="zoom:50%;"></li></ul><p>异步解耦</p><ul><li><p>上游系统对下游系统的调用若为同步调用, 则会大大降低系统的吞吐量与并发度, 且系统耦合度太高。而异步调用则会解决这些问题。所以两层之间若要实现由同步到异步的转化, 一般性做法就是, 在这两层间添加一个MQ层。</p><img src="'+r+'" alt="image-20230409234319063" style="zoom:50%;"></li></ul><p>数据收集</p><ul><li>分布式系统会产生海量级数据流, 如:业务日志、监控数据、用户行为等。针对这些数据流进行实时或批量采集汇总, 然后对这些数据流进行大数据分析, 这是当前互联网平台的必备技术。通过MQ完成此类数据收集是最好的选择</li></ul></blockquote><h2 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计" aria-hidden="true">#</a> 架构设计</h2><h4 id="_1-核心组件" tabindex="-1"><a class="header-anchor" href="#_1-核心组件" aria-hidden="true">#</a> 1. 核心组件</h4><ul><li>RocketMQ主要由NameServer、Broker、Producer以及Consumer组成</li></ul><figure><img src="'+u+'" alt="image-20230325202613012" tabindex="0" loading="lazy"><figcaption>image-20230325202613012</figcaption></figure><blockquote><p>1、NameServer是一个功能齐全的服务器，其角色类似于Zookeeper，但是NameServer比Zookeeper更加轻量。主要是NameServer节点之间相互独立，没有任何信息交互。</p><p>2、Producer是消息生产者，负责产生消息，一般由业务系统负责产生消息</p><ul><li>Producer由用户进行分布式部署，消息由Producer通过负载均衡模式发送到Broker集群，发送低延时，支持快速失败</li></ul><p>3、Broker是消息中转角色，负责存储消息，转发消息</p><ul><li>Broker是具体提供业务的服务器，单个Broker节点于NameServer节点保持长连接及心跳，并会定时将Topic信息注册到NameServer，底层的通信和连接时基于Netty实现的</li><li>Broker负责消息存储，以Topic为纬度支持轻量级的队列，单机可以支撑上万队列规模，支持消息推拉模型</li><li>官网显示：具有上亿级消息堆积能力，同时可以保证消息的有序性</li></ul><p>4、Consuemr是消息消费者，负责消息消息，一般是后台系统负责异步消费</p><ul><li>Consumer也由用户部署，支持push与pull两种消费模式，支持集群消费与广播消费，提供实时消息订阅机制。</li></ul></blockquote><blockquote><p>大致流程：</p><ul><li>Broker在启动的时候会去向NameServer注册并且定时发送心跳，Producer在启动的时候会到NameServer上去拉Topic所属的Broker具体地址，然后向具体的Broker发送消息</li></ul><figure><img src="'+t+'" alt="image-20230325203807607" tabindex="0" loading="lazy"><figcaption>image-20230325203807607</figcaption></figure></blockquote><h4 id="_2-rocketmq的消息领域模型" tabindex="-1"><a class="header-anchor" href="#_2-rocketmq的消息领域模型" aria-hidden="true">#</a> 2. RocketMQ的消息领域模型</h4><ul><li>主要分为Message、topic、queue、offset及group。</li></ul><figure><img src="'+c+'" alt="image-20230326100120529" tabindex="0" loading="lazy"><figcaption>image-20230326100120529</figcaption></figure><blockquote><p>1、Topic：表示消息的第一级类型，比如一个电商系统可以分为：交易消息、物流消息等。一个消息必须有一个Topic</p><ul><li>最细粒度的订阅单位，一个Group可以订阅多个Topic的消息</li></ul><p>2、Tag： 表示消息的第二级类型，比如交易消息又分为：交易创建消息、交易完成消息等。RocketMQ提供2级消息分类，方便灵活控制。</p><p>3、Group: 组，一个组可以订阅多个Topic</p><p>4、Message queue：消息的物理管理单位。一个Topic可以由多个queue，queue引入使得消息的存储可以分布式集群化，具有水平扩展能力</p><ul><li>在RocketMQ中，所有消息队列都是持久化，长度无线的数据结构，所谓长度无限是指队列的没有存储单元是定长，访问其中存储单元使用Offset来访问，offset是java long类型，64位，理论上是不会溢出，所以认为长度无限</li><li>也可以认为Message queue是一个长度无限的数据，offset就是下标</li></ul></blockquote><h2 id="顺序消息" tabindex="-1"><a class="header-anchor" href="#顺序消息" aria-hidden="true">#</a> 顺序消息</h2><blockquote><p>顺序消息: 是指消息的消费顺序和产生顺序相同，在有些业务逻辑下，必须保证顺序。比如订单的生成、付款、发货，这3个消息必须按顺序处理才行</p></blockquote><blockquote><p>顺序消息分为全局顺序消息和部分顺序消息：</p><ol><li>全局顺序消息指某个Topic下的所有消息都要保证顺序；</li><li>部分顺序消息只要保证每一组消息被顺序消费即可，比如上面订单消息的例子，只要保证同一个订单ID的三个消息能按顺序消费即可</li></ol><p>Tip: 在多数的业务场景中实际上只需要局部有序就可以了</p></blockquote><blockquote><p>RocketMQ在默认情况下不保证顺序，比如创建一个Topic，默认八个写队列，八个读队列。</p><p>这时候一条消息可能被写入任意一个队列里；在数据的读取过程中，可能有多个Consumer，每个Consumer也可能启动多个线程并行处理，所以消息被哪个Consumer消费，被消费的顺序和写入的顺 序是否一致是不确定的</p></blockquote><blockquote><p><strong>保证全局顺序消息</strong>: 需要先把Topic的读写队列数设置为一，然后Producer和Consumer的并发设置也要是一。简单来说，为了保证整个Topic的全局消息有序，只能消除所有的并发处理，各部分都设置成单线程处理</p></blockquote><figure><img src="'+s+`" alt="image-20230409224027977" tabindex="0" loading="lazy"><figcaption>image-20230409224027977</figcaption></figure><blockquote><p>原理如上图所示： 要<strong>保证部分消息有序</strong>: 需要发送端和消费端配合处理。在发送端，要做到把同一业务ID的消息发送到同一个Message Queue；在消费过程中，要做到从同一个Message Queue读取的消息不被并发处理，这样才能达到部分有序。消费端通过使用<code>MessageListenerOrderly</code>类来解决单Message Queue的消息被并发处理的问题。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Consumer使用MessageListenerOrderly的时候，下面四个Consumer的设置依旧可以使用:
1. setConsumeThreadMin
2. setConsumeThreadMax
3. setPullBatchSize
4. setConsumeMessageBatchMaxSize
说明: 前两个参数设置Consumer的线程数
	 PullBatchSize指的是一次从Broker的一个Message Queue获取消息的最大数量，默认值是32；
	 ConsumeMessageBatchMaxSize指的是这个Consumer的Executor（也就是调用MessageListener处理的地方）一次传入的消息数（List&lt;MessageExt&gt;msgs这个链表的最大长度），默认值是1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上述四个参数可以使用，说明MessageListenerOrderly并不是简单地禁止并发处理。在MessageListenerOrderly的实现中，为每个Consumer Queue加个锁，消费每个消息前，需要先获得这个消息对应的Consumer Queue所对应的锁，这样保证了同一时间，同一个Consumer Queue的消息不被并发消费，但不同Consumer Queue的消息可以并发处理</p></blockquote><figure><img src="`+n+'" alt="image-20230409224618986" tabindex="0" loading="lazy"><figcaption>image-20230409224618986</figcaption></figure><figure><img src="'+d+'" alt="image-20230409224734587" tabindex="0" loading="lazy"><figcaption>image-20230409224734587</figcaption></figure><h2 id="消费幂等" tabindex="-1"><a class="header-anchor" href="#消费幂等" aria-hidden="true">#</a> 消费幂等</h2><h4 id="_1-消费幂等是什么" tabindex="-1"><a class="header-anchor" href="#_1-消费幂等是什么" aria-hidden="true">#</a> 1. 消费幂等是什么?</h4><blockquote><p>当出现消费者对某条消息重复消费的情况时, 重复消费的结果与消费一次的结果是相同的, 并且多次消费并未对业务系统产生任何负面影响, 那么这个消费过程就是消费幂等的</p></blockquote><blockquote><p><strong>幂等:</strong> 若某操作执行多次与执行一次对系统产生的影响是相同的, 则称该操作是幂等的</p></blockquote><blockquote><p>在互联网应用中, 尤其在网络不稳定的情况下, 消息很有可能会出现重复发送或重复消费</p><p>如果重复的消息可能会影响业务处理, 那么就应该对消息做幂等处理</p></blockquote><h4 id="_2-消息重复的场景分析" tabindex="-1"><a class="header-anchor" href="#_2-消息重复的场景分析" aria-hidden="true">#</a> 2. 消息重复的场景分析</h4><blockquote><ol><li><p>发送时消息重复:</p><p>当一条消息已被成功发送到Broker并完成持久化, 此时出现了网络闪断, 从而导致Broker对Producer应答失败。 如果此时Producer意识到消息发送失败并尝试再次发送消息, 此时Broker中就可能会出现两条内容相同并且Message ID也相同的消息, 那么后续Consumer就一定会消费两次该消息</p></li><li><p><strong>消费时消息重复:</strong></p><p>消息已投递到Consumer并完成业务处理, 当Consumer给Broker反馈应答时网络闪断, Broker没有接收到消费成功响应。为了保证消息<code>至少被消费一次</code>的原则, Broker将在网络恢复后再次尝试投递之前已被处理过的消息。此时消费者就会收到与之前处理过的内容相同、Message ID也相同的消息</p></li><li><p>Rebalance时消息重复:</p><p>当Consumer Group中的Consumer数量发生变化时, 或其订阅的Topic的Queue数量发生变化时, 会触发Rebalance, 此时Consumer可能会收到曾经被消费过的消息</p></li></ol></blockquote><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4><blockquote><p>对于常见的系统, 幂等性操作的通用性解决方案是:</p><ol><li><p>首先通过缓存去重。在缓存中如果已经存在了某幂等令牌, 则说明本次操作是重复性操作; 若缓存没有命中, 则进入下一步</p></li><li><p>在唯一性处理之前, 先在数据库中查询幂等令牌作为索引的数据是否存在。若存在, 则说明本次操作为重复性操作; 若不存在, 则进入下一步</p></li><li><p>在同一事务中完成三项操作: 唯一性处理后, 将幂等令牌写入到缓存, 并将幂等令牌作为唯一索引的数据写入到DB中</p></li></ol></blockquote><blockquote><p>第 1 步已经判断过是否是重复性操作了, 为什么第 2 步还要再次判断？</p><ul><li>能够进入第 2 步, 说明已经不是重复操作了, 第 2 次判断是否重复？</li></ul><p>当然不重复。一般缓存中的数据是具有有效期的。缓存中数据的有效期一旦过期, 就是发生缓存穿透, 使请求直接就到达了DBMS。</p></blockquote><h4 id="rocketmq消费幂等的实现" tabindex="-1"><a class="header-anchor" href="#rocketmq消费幂等的实现" aria-hidden="true">#</a> RocketMQ消费幂等的实现</h4><blockquote><p>消费幂等的解决方案很简单: 为消息指定不会重复的唯一标识。因为Message ID有可能出现重复的情况</p><ul><li>真正安全的幂等处理, <u>不建议以Message ID作为处理依据</u>。</li><li><u>最好的方式是以业务唯一标识</u>作为幂等处理的关键依据, 而业务的唯一标识可以通过消息Key设置 <ul><li>productConfigurationModelId</li></ul></li></ul></blockquote><blockquote><p>小结: RocketMQ能够保证消息不丢失, 但不能保证消息不重复。</p><ul><li>消息重复问题, 由业务处理和保证</li></ul></blockquote><h2 id="消费堆积与消费延迟" tabindex="-1"><a class="header-anchor" href="#消费堆积与消费延迟" aria-hidden="true">#</a> 消费堆积与消费延迟</h2><blockquote><p>消息处理流程中, 如果Consumer的消费速度跟不上Producer的发送速度, MQ中未处理的消息会越来越多(进的多出的少), 这部分消息就被称为<code>堆积消息</code></p><p>消息出现堆积进而会造成消息的<code>消费延迟</code></p></blockquote><blockquote><p>以下场景需要重点关注消息堆积和消费延迟问题:</p><ul><li>业务系统上下游能力不匹配造成的持续堆积, 且<u>无法自行恢复</u>。</li><li>业务系统对消息的消费<u>实时性要求较高</u>, 即使是短暂的堆积造成的消费延迟也无法接受。</li></ul></blockquote><blockquote><p>小结:</p><ul><li>消息堆积的主要瓶颈在于客户端的消费能力, 而消费能力由<code>消费耗时</code>和<code>消费并发度</code>决定</li></ul><p><strong>注意:</strong> <u>消费耗时的优先级要高于消费并发度</u>。即在保证了消费耗时的合理性前提下, 再考虑消费并发度问题</p></blockquote><h4 id="如何避免" tabindex="-1"><a class="header-anchor" href="#如何避免" aria-hidden="true">#</a> 如何避免</h4><blockquote><p>为了避免在业务使用时出现非预期的消息堆积和消费延迟问题, 需要在前期设计阶段对整个业务逻辑进行完善的排查和梳理。其中最重要的就是<code>梳理消息的消费耗时</code>和<code>设置消息消费的并发度</code></p></blockquote><h2 id="消息的清理" tabindex="-1"><a class="header-anchor" href="#消息的清理" aria-hidden="true">#</a> 消息的清理</h2><blockquote><p>消息被消费过后会被清理掉吗？不会的</p><ul><li>消息是被顺序存储在commitlog文件的, 且消息大小不定长, 所以消息的清理是不可能以消息为单位进行清理的, 而是以commitlog文件为单位进行清理的。否则会急剧下降清理效率, 并实现逻辑复杂</li></ul></blockquote><blockquote><p>commitlog文件存在一个<u>过期时间, 默认为 72 小时</u>, 即三天。</p><p>除了用户手动清理外, 在以下情况下也会被自动清理, 无论文件中的消息是否被消费过:</p><ul><li>文件过期, 且到达清理时间点(默认为凌晨 4 点)后, 自动清理过期文件</li><li>文件过期, 且磁盘空间占用率已达过期清理警戒线(默认75%)后, 无论是否达到清理时间点, 都会自动清理过期文件</li><li>磁盘占用率达到清理警戒线(默认85%)后, 开始按照设定好的规则清理文件, 无论是否过期。默认会从最老的文件开始清理</li><li>磁盘占用率达到系统危险警戒线(默认90%)后, Broker将拒绝消息写入</li></ul></blockquote><blockquote><p>注意:</p><ul><li>对于RocketMQ系统来说, 删除一个1G大小的文件, 是一个压力巨大的IO操作。在删除过程中, 系统性能会骤然下降。所以, 其默认清理时间点为凌晨 4 点, 访问量最小的时间。也正因如果, 我们要保障磁盘空间的空闲率, 不要使系统出现在其它时间点删除commitlog文件的情况</li></ul></blockquote><h2 id="消息重试" tabindex="-1"><a class="header-anchor" href="#消息重试" aria-hidden="true">#</a> 消息重试</h2><h2 id="死信队列" tabindex="-1"><a class="header-anchor" href="#死信队列" aria-hidden="true">#</a> 死信队列</h2><blockquote><p>当一条消息初次消费失败, 消息队列会自动进行消费重试</p><p>达到最大重试次数后, 若消费依然失败, 则表明消费者在正常情况下无法正确地消费该消息,</p><p>此时, 消息队列不会立刻将消息丢弃, 而是将其发送到该消费者对应的特殊队列中。</p><p>这个队列就是死信队列</p></blockquote><h4 id="死信队列的特征" tabindex="-1"><a class="header-anchor" href="#死信队列的特征" aria-hidden="true">#</a> 死信队列的特征</h4><blockquote><ul><li>死信队列中的消息不会再被消费者正常消费, 即DLQ对于消费者是不可见的</li><li>死信存储有效期与正常消息相同, 均为 3 天(commitlog文件的过期时间), 3 天后会被自动删除</li><li>死信队列就是一个特殊的Topic, 名称为%DLQ%consumerGroup@consumerGroup, 即每个消费者组都有一个死信队列</li><li>如果一个消费者组未产生死信消息, 则不会为其创建相应的死信队列</li></ul></blockquote><h4 id="死信消息的处理" tabindex="-1"><a class="header-anchor" href="#死信消息的处理" aria-hidden="true">#</a> 死信消息的处理</h4><blockquote><p>一条消息进入死信队列, 就意味着系统中某些地方出现了问题, 从而导致消费者无法正常消费该消息, 比如代码中原本就存在Bug</p><ul><li>对于死信消息, 通常需要开发人员进行特殊处理。最关键的步骤是要排查可疑因素, 解决代码中可能存在的Bug, 然后再将原来的死信消息再次进行投递消费。</li></ul></blockquote><h2 id="延迟消息" tabindex="-1"><a class="header-anchor" href="#延迟消息" aria-hidden="true">#</a> 延迟消息</h2><blockquote><p>定时消息（延迟队列）是指消息发送到broker后，不会立即被消费，等待特定时间投递给真正的topic。</p><p>broker有配置项messageDelayLevel，默认值为“1<u>s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m</u><u>8m 9m 10m 20m 30m 1h 2h</u>”，18个level。可以配置自定义messageDelayLevel。</p></blockquote><blockquote><p>定时消息会暂存在名为<code>SCHEDULE_TOPIC_XXXX</code>的topic中，并根据delayTimeLevel存入特定的 queue，queueId = delayTimeLevel – 1，即一个queue只存相同延迟的消息，保证具有相同发送延迟的消息能够顺序消费。broker会调度地消费<code>SCHEDULE_TOPIC_XXXX</code>，将消息写入真实的topic。</p></blockquote>',57),h=[m];function g(b,k){return o(),i("div",null,h)}const f=e(p,[["render",g],["__file","rocketmq.html.vue"]]);export{f as default};
