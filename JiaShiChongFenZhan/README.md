# 嘉实宠粉站

## 入口
威信公众号：嘉实基金-我嘉福利-猜涨跌赢红包

## 抓取
链接： https://jiashijijin.01lb.com.cn/api/user/showUserInfo
获取headers中的token

## 青龙使用
拉取jscfz.js 以及 jscfzCOOKIE.js  
修改jscfzCOOKIE中的 datas->jscfzheader 的 val = "抓取的token
### 拉取脚本
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JiaShiChongFenZhan/jscfz.js
```
### 定时 
```
0 10-15/1 * * *
```

## 来源
https://gitee.com/tom210120/tom/tree/master/JSCFZ
