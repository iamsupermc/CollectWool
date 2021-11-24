# 电视家
### 圈X
**[rewrite_local]**  
#电视家获取header
```
http://.+/api/v2/device/info url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/dsj.js 
```
#电视家获取url
```
http://api.gaoqingdianshi.com/api/* url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/dsj.js
```
**[MITM]**
```
hostname = api.gaoqingdanshi.com
```
**[task_local]**
```
0 0 7,22 * * * https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DianShiJia/dsj.js, tag=电视家, enabled=true
```
### 青龙
TODO
### 抓包
TODO
