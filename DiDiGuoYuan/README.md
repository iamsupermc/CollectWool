## 弟弟果园
#### 入口：威信-小程序-didichuxing(中文)-5天种水果（中间）

## 抓包
#### ddgyurl
搜索：https://game.xiaojukeji.com/api/game/plant/enter?wsgsig=XXXXX
#### ddgyheader
上面链接**headers**里的**D-Header-T**

## 青龙
拉取ddgyCOOKIE.js 和 ddgy.js
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DiDiGuoYuan/ddgy.js
```
#### 此文件需要指定文件名为：ddgyCOOKIE.js（不可变）
```
https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/DiDiGuoYuan/ddgyCOOKIE.js
```
将抓包内容（**ddgyurl**和**ddgyheader**）填入**ddgyCOOKIE.js** 对应的**val**值里面

### 定时
```
10 8,12,18 * * * 
```

## 来源
https://github.com/xl2101200/-/blob/main/ddgy.js

## 特别鸣谢
**作者：**[xl2101200](https://github.com/xl2101200)
