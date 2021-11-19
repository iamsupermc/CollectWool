## 晶彩看点
#### 下载地址
应用宝：https://a.app.qq.com/o/simple.jsp?pkgname=com.ldzs.zhangxin&g_f=1000047

#### elecV2p订阅(源库)：
```
重写：https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jccx.json
任务：https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jc_cron.json
```
#### 本库：
```
重写：https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JingCaiKanDian/jckd-rewrite.json
任务：https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/JingCaiKanDian/jckd-cron.json
```

## 抓包
#### elecV2p
1.阅读文章，看视频jcwz.js：进入app点击文章、视频获取body（200条左右别太多，建议点击文章后下拉最后切换第二条）（wzbody）
                           需要抓取一次文章时长（jc_timebody），获取一次文章界面金币即可
2.签到jcqd.js：进入app点击签到，显示增加金币，则获取body成功（qdbody）
3.看看赚jckkz.js：点击看看赚某一任务获取body（lookStartbody）
4.任务宝箱领取jcbox.js：app下方点击赚钱图标，在每日任务中点击所有可领取的奖励，获取body，明天再跑一次脚本试试(jcboxbody)
5.每天收益jc_today_score.js：有重写就行(jc_cookie)
6.火爆转发jc_share.js：有重写就行(jc_cookie)
7.好友签到红包jc_friendSign.js：好友签到红包位置：打开app → 下方左起第三个选项（赚钱图标） → 中间好友红包（在看看赚的左边）
8.提现jc_withdraw:无需抓包，属于个人设置（填写示例：jc_cash="0.3"或jc_cash="30"）

#### 青龙配置：
晶彩看点青龙填写config.sh的示例：
1.文章,视频：wzbody（填写示例：export wzbody="p=xxx&p=xxx"）
   对应url：https://ant.xunsl.com/v5/article/info.json，https://ant.xunsl.com/v5/article/detail.json
2.看看赚：lookStartbody（填写示例：export lookStartbody="p=xxx&p=xxx"）
   对应url：https://ant.xunsl.com/v5/nameless/adlickstart.json
3.每日任务奖励领取：jcboxbody（填写示例：export jcboxbody="p=xxx&p=xxx"）
    对应url：https://ant.xunsl.com/v5/CommonReward/toGetReward.json（注意看响应是否为任务奖励）
4.签到：qdbody（填写示例：export qdbody="p=xxx&p=xxx"）
    对应url：https://ant.xunsl.com/v5/CommonReward/toGetReward.json（注意看响应是否为签到奖励）
5.文章时长：jc_timebody（填写示例：export jc_timebody="p=xxx&p=xxx"）
   对应url：https://ant.xunsl.com/v5/user/stay.json
6.提现：jc_withdraw（填写示例：export jc_withdraw="p=xxx@p=xxx"）
    对应url：https://ant.xunsl.com/v5/wechat/withdraw2.json
              jc_cash(无需抓包，属于个人设置)（填写示例：export jc_cash="0.3"或export jc_cash="30"）
7. 晶彩cookie：jc_cookie （填写示例：export jc_cookie="zqkey=xxx&zqkey_id=xxx&uid=xxx@zqkey=xxx&zqkey_id=xxx&uid=xxx"）
    对应url：https://ant.xunsl.com/v17/NewTask/getTaskList.json

## 其他说明：
 

## 来源
https://github.com/shaolin-kongfu/js_scripts
