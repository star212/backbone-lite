## 综述

backbone-lite是。

* 版本：1.0
* 作者：quxing
* 标签：mvc
* demo：[http://gallery.kissyui.com/backbone-lite/1.0/demo/index.html](http://gallery.kissyui.com/backbone-lite/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/backbone-lite/1.0/index', function (S, Backbone) {
         var $ = Backbone.$,   //同kissy的node.All
             _ = Backbone._;   //同underscore的用法，部分方法依赖kissy lang
    })

## API说明

同backbone原有的api，去掉了Router和history的所有api。

model的fetch方法支持mtop时，使用方法如下：

	model.fetch({
		v: "1.0",
		api: 'com.etao.mobile.jifenbao',
		data: {
			src : "h5"
		},
		success: function(json){},
		error: function(error){}
	})