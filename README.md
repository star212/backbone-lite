backbone-lite
=============

精简backbone的源码，采用kissy做为依赖库，用于嵌入kissy mobile


### changelog

* 去掉了Backbone.history和Backbone.router
* 去掉了underscore的依赖。在Backbone内部构件了一个_  ， 混合了kissy的一些的方法。
* 对比kissy没有的方法

	* once
    * sortIndex
    * invoke
    * uniqueId
    * pick
    * result
    * defaults
    * escape 可用 escapeHTML
    * isEqual
    * has
    * extend
    * template
    * bind
    * mixin

* 重写Backbone.ajax 采用kissy的IO
* 选择器的方法用one替换find。