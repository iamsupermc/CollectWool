## 九张投条

## 抓包
抓取连接： https://api.st615.com/v1/user/info?token=XXXXX
九章链接随便一个链接都有token 
## 青龙使用 
定时corn : */60 * * * * (1小时运行一次)
#### TOM jztt.js
### 拉取：
jztt.js  
jzttCookie.js
### **注意：**  
jzttCookie.js脚本名称不能改变，拉取的需要自行更改名称；也可在青龙面板脚本管理界面右上角点击+号键新增脚本，粘贴次脚本内容，修改名称。

### 柠檬jzread.js
**说明：** 变量为jzreadurl多账号用@隔开  
export jzreadurl='https://api.st615.com/v1/user/info?token=抓包的token'  
自行抓包替换 关键字为**token** 抓包的**token**
提现变量为cashtx

#### 脚本拉取：
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JiuZhangTouTiao/jzread.js
```
#### 变量参数：
```
export jzreadurl='https://api.st615.com/v1/user/info?token=XXX@https://api.st615.com/v1/user/info?token=XXX'
export cashtx=''
```

## 下载 
APP STORE： 九章头条
安卓各大商场自行下载，未测试
## 来源
https://github.com/xl2101200/-/blob/main/jztt.js

微信公众号柠檬玩机交流
