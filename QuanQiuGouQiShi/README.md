# 全球购骑士特权
#### APP各大应用商店可以下载

定时为每小时一次，务必在0分到5分之间运行，目前只写了每日领勋章和领取存钱罐的任务，大概每天3毛
提现需要关注微信公众号，在公众号里申请提现
请手动点一下签到页面的 **【收零花钱】** 领一次金币，去 **【果园】** 里选择水果种子
只测试了IOS的青龙和V2P，暂不支持多账号

#### 青龙：
**抓包appid地址：** https://market.chuxingyouhui.com/promo-bargain-api/activity/mqq/api/indexTopInfo ，获得 **"appid"**  
**抓包header地址：** https://pyp-api.chuxingyouhui.com/api/app/userCenter/v1/info ，获得其他，然后填在变量：**blackJSON**里面，注意按照JSON格式填写。用青龙面板的环境变量或者外面用
双引号的，字符串内需要用”\“转义  (在线转义工具：https://www.json.cn/json/jsonzip.html)
```
export blackJSON='{"black-token":"", "token":"", "User-Agent":"", "device-value":"", "device-type":"", "phpUserId":"", "appId":""}'
```
**拉取脚本**
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QuanQiuGouQiShi/qishika.js
```
#### V2P、圈X：重写方法 -- 点击右下角【我的】-> 【每日签到赚现金】
**V2p订阅**
重写
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QuanQiuGouQiShi/qishika-rewrite.json
```
任务
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QuanQiuGouQiShi/qishika_cron.json
```

#### **[task_local]**
#全球购骑士特权
```
0 * * * * https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/QuanQiuGouQiShi/qishika.js, tag=全球购骑士特权, enabled=true
```
#### **[rewrite_local]**
```
https://pyp-api.chuxingyouhui.com/api/app/userCenter/v1/info url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/blackUnique.js
```
```
https://market.chuxingyouhui.com/promo-bargain-api/activity/mqq/api/indexTopInfo? url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/blackUnique.js
```
#### **[MITM]**
```
hostname = *.chuxingyouhui.com
```

## 收集来源
https://github.com/leafxcy/JavaScript/blob/main/blackUnique.js
## 感谢名单
[leafxcy](https://github.com/leafxcy)
