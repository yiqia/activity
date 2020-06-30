# activity
基于vue+element-ui的SSM校园活动信息平台


## 安装教程
这个是前端代码部署教程
### 提前准备
  软件：HBuilderX
  环境：node.js
我使用的软件 HBuilderX 所以就用这个软件讲一讲如果部署前端  
首先你需要先把代码下载下来或者用git克隆下来  
进入到项目根目录运行  
`npm install`  
安装好了之后可以进行配置修改  
config/index.js里修改接口地址   
```
'/api': {  
			 target: 'http://47.100.179.136:8080',  //服务器地址  
			 changeOrigin: true,  //是否跨域  
			 pathRewrite: {  
				'^/api': '/ssm'   ,//重写接口  
				}  
		  },  
    	'/bdapi': {  
    		 target: 'http://localhost:8080/',  //本地地址  
    		 changeOrigin: true,  //是否跨域  
    		 pathRewrite: {  
    			'^/bdapi': '/static/json'   ,//重写接口  
    			}  
    	  }  
    }, 
```
一个是请求服务器接口，一个是请求本地的json，程序一开始是前端自己构建的json进行请求，后期更换的服务器接口对接，部署好后端之后修改请求地址重新运行就行  

修改完成之后，就可以直接在HBuilderX工具栏-运行-运行到浏览器 进行查看效果了

有什么不懂的可以联系我  后端部署教程和代码等会在发
