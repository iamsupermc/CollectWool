# 爱妻查
青龙拉取命令(源库)：
```
ql raw https://github.com/WindFgg/QuantumultX_Conf/blob/main/Scripts/aiqicha.js
```
本库：
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/AiQiCha/aiqicha.js
```

# 抓包
alook浏览器访问：https://passport.baidu.com/v2/?login
登陆后获取Cookie
才cookie中找到：BDUSS=xxxxx;;

青龙配置：
export aqcCookies="BDUSS=xxxxx;"

# 其他说明：
 定时每天早上8点执行一次 8点半执行一次 账号多的请加大延迟 可能有一些任务跑不完 如:高级搜索 浏览监控日报 属正常现象 (百度抽风)
 多账号请用@分割Cookie  格式:ck1@ck2@ck2 青龙变量aqcCookies qx和v2p不可用
 批量查询任务暂时无法完成 
 感谢[Wenmoux](https://github.com/Wenmoux/checkbox)的爱妻查任务脚本，作者仅完善和修改。

# 来源
https://github.com/Wenmoux/checkbox
