## 太太了
### 入口：微信小程序 太太乐餐饮服务
### 抓包
**token：** 打开微信小程序 太太乐餐饮服务 请求头里面token
或者太太乐APP点我的 登录 logintoken= *** 这条也行
### 拉取脚本
```
ql raw https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/TaiTaiLe/raw_scripts_ttl.js
```
### 时间设定
```
20 0 * * *
```
### 环境变量
```
export ttlhd=''
```
**多账号@隔开:** export ttlhd='XXXXXX@XXXXX'  
如需换话费 下载太太乐餐饮服务APP积分兑换话费
如果没库存了 自己隔天再看

## 脚本来源
http://47.101.146.160/scripts/ttl.js
