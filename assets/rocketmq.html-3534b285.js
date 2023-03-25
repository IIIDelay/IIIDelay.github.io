const e=JSON.parse('{"key":"v-97a04d70","path":"/en/distributed/mqs/rocketmq.html","title":"RocketMQ的架构设计","lang":"en-US","frontmatter":{"icon":"edit","category":["MQS","Async"],"tag":["current","alibaba","open source"],"description":"RocketMQ的架构设计 RocketMQ主要由NameServer、Broker、Producer以及Consumer组成 image-20230325202613012 1、NameServer是一个功能齐全的服务器，其角色类似于Zookeeper，但是NameServer比Zookeeper更加轻量。主要是NameServer节点之间相互独立，没有任何信息交互。 2、Producer是消息生产者，负责产生消息，一般由业务系统负责产生消息 Producer由用户进行分布式部署，消息由Producer通过负载均衡模式发送到Broker集群，发送低延时，支持快速失败 3、Broker是消息中转角色，负责存储消息，转发消息 Broker是具体提供业务的服务器，单个Broker节点于NameServer节点保持长连接及心跳，并会定时将Topic信息注册到NameServer，底层的通信和连接时基于Netty实现的 Broker负责消息存储，以Topic为纬度支持轻量级的队列，单机可以支撑上万队列规模，支持消息推拉模型 官网显示：具有上亿级消息堆积能力，同时可以保证消息的有序性 4、Consuemr是消息消费者，负责消息消息，一般是后台系统负责异步消费 Consumer也由用户部署，支持push与pull两种消费模式，支持集群消费与广播消费，提供实时消息订阅机制。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/en/distributed/mqs/rocketmq.html"}],["meta",{"property":"og:site_name","content":"IIIDelay的 Blog"}],["meta",{"property":"og:title","content":"RocketMQ的架构设计"}],["meta",{"property":"og:description","content":"RocketMQ的架构设计 RocketMQ主要由NameServer、Broker、Producer以及Consumer组成 image-20230325202613012 1、NameServer是一个功能齐全的服务器，其角色类似于Zookeeper，但是NameServer比Zookeeper更加轻量。主要是NameServer节点之间相互独立，没有任何信息交互。 2、Producer是消息生产者，负责产生消息，一般由业务系统负责产生消息 Producer由用户进行分布式部署，消息由Producer通过负载均衡模式发送到Broker集群，发送低延时，支持快速失败 3、Broker是消息中转角色，负责存储消息，转发消息 Broker是具体提供业务的服务器，单个Broker节点于NameServer节点保持长连接及心跳，并会定时将Topic信息注册到NameServer，底层的通信和连接时基于Netty实现的 Broker负责消息存储，以Topic为纬度支持轻量级的队列，单机可以支撑上万队列规模，支持消息推拉模型 官网显示：具有上亿级消息堆积能力，同时可以保证消息的有序性 4、Consuemr是消息消费者，负责消息消息，一般是后台系统负责异步消费 Consumer也由用户部署，支持push与pull两种消费模式，支持集群消费与广播消费，提供实时消息订阅机制。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"RocketMQ的架构设计"}],["meta",{"property":"article:author","content":"Mr.IIIDelay"}],["meta",{"property":"article:tag","content":"current"}],["meta",{"property":"article:tag","content":"alibaba"}],["meta",{"property":"article:tag","content":"open source"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ的架构设计\\",\\"image\\":[\\"https://mister-hope.github.io/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.IIIDelay\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.41,"words":422},"filePathRelative":"en/distributed/mqs/rocketmq.md","excerpt":"<h1> RocketMQ的架构设计</h1>\\n<ul>\\n<li>RocketMQ主要由NameServer、Broker、Producer以及Consumer组成</li>\\n</ul>\\n<figure><figcaption>image-20230325202613012</figcaption></figure>\\n<blockquote>\\n<p>1、NameServer是一个功能齐全的服务器，其角色类似于Zookeeper，但是NameServer比Zookeeper更加轻量。主要是NameServer节点之间相互独立，没有任何信息交互。</p>\\n<p>2、Producer是消息生产者，负责产生消息，一般由业务系统负责产生消息</p>\\n<ul>\\n<li>Producer由用户进行分布式部署，消息由Producer通过负载均衡模式发送到Broker集群，发送低延时，支持快速失败</li>\\n</ul>\\n<p>3、Broker是消息中转角色，负责存储消息，转发消息</p>\\n<ul>\\n<li>Broker是具体提供业务的服务器，单个Broker节点于NameServer节点保持长连接及心跳，并会定时将Topic信息注册到NameServer，底层的通信和连接时基于Netty实现的</li>\\n<li>Broker负责消息存储，以Topic为纬度支持轻量级的队列，单机可以支撑上万队列规模，支持消息推拉模型</li>\\n<li>官网显示：具有上亿级消息堆积能力，同时可以保证消息的有序性</li>\\n</ul>\\n<p>4、Consuemr是消息消费者，负责消息消息，一般是后台系统负责异步消费</p>\\n<ul>\\n<li>Consumer也由用户部署，支持push与pull两种消费模式，支持集群消费与广播消费，提供实时消息订阅机制。</li>\\n</ul>\\n</blockquote>","copyright":{"author":"Mr.IIIDelay"},"autoDesc":true}');export{e as data};
