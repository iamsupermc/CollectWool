# 电视家
### 圈X
#### 抓包
**[rewrite_local]**  
#电视家
```
http://.+/api/v2/device/info url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/dsj.js 
```
**[MITM]**
```

```
**[task_local]**
```
0 0 7,22 * * * https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DianShiJia/dsj.js, tag=电视家, enabled=true
```
### 青龙
TODO
### 抓包
TODO
