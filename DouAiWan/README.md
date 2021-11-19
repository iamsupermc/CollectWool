软件名称:都爱玩 

签到，转盘抽奖获得积分，转盘游戏，看广告获得分红币,分红模式,不需要实名 ---目前提现秒到

脚本下载：https://ghproxy.com/https://github.com/LubooC/Script/blob/main/daw.js
//萝卜
青龙必要变量: 
dawck 
#抓包时的请求头上的token 
 
多个号用 @ 或 换行 隔开 
 
重写配置如下: 
[rewrite_local]
#都爱玩
https://v3.sdk.haowusong.com/api/box/wallet/info 重写地址 https://ghproxy.com/https://github.com/LubooC/Script/blob/main/daw.js
[MITM]
hostname = v3.sdk.haowusong.com
 

cron 3 0,9,17 * * *
