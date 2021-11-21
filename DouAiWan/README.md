## 软件名称: **都爱玩** 
### 11.21更新说明

**都爱玩脚本更新一下，分开了IOS和安卓任务循环，修复安卓端看广告冷却时间未到问题，现在完整跑一轮任务大概需要23分钟开了会员之后的1元返现会自动提现(但是和分红提现共用次数，优先提现分红)，  
每日积分红包也会自动兑换，不需要自己弄。**

#### 签到，转盘抽奖获得积分，转盘游戏，看广告获得分红币,分红模式,不需要实名 ---目前提现秒到


**脚本下载：**  
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DouAiWan/daw.js
```

#### 青龙必要变量:  
export dawck: 

#### 抓包时的请求头上的token 
多个号用 @ 或 换行 隔开 
 
#### 圈X重写配置如下:  
**[rewrite_local]**  
#都爱玩  
```
https://v3.sdk.haowusong.com/api/box/wallet/info script-request-header https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DouAiWan/daw.js`
```
  
**[MITM]**  
```
hostname = v3.sdk.haowusong.com
```  
  
**[rewrite_local]**  
```
0 * * * * https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DouAiWan/daw.js, tag=都爱玩, enabled=true
```


## 收集来源

https://github.com/LubooC/Script/blob/main/daw.js

## 感谢名单  

[LubooC](https://github.com/LubooC)
