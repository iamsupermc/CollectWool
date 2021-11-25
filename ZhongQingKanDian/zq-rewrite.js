{
  "name": "中青重写订阅",
  "author": "elecV2p",
  "mitmhost": ["kandian.wkandian.com"],
  "rewrite": [
    {
      "match": "https://kandian.wkandian.com/v5/article/info.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqwz.js",
      "enable": true
    },
    {
      "match": "https://kandian.wkandian.com/v5/article/detail.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqwz.js",
      "enable": true
    },
    {
      "match": "https://kandian.wkandian.com/v5/user/stay.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqwz.js",
      "enable": true
    }, 
    {
      "match": "https://kandian.wkandian.com/v5/CommonReward/toGetReward.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqqd.js",
      "enable": true
    },
    {
      "match": "https://kandian.wkandian.com/v17/NewTask/getTaskList.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zq_today_score.js",
      "enable": true
    }
    ,
    {
      "match": "https://kandian.wkandian.com/v5/nameless/adlickstart.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqkkz.js",
      "enable": true
    }
    ,
    {
      "match": "https://kandian.wkandian.com/v5/CommonReward/toGetReward.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqbox.js",
      "enable": true
    }
     ,
    {
      "match": "https://kandian.wkandian.com/v5/wechat/withdraw2.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zq_withdraw.js",
      "enable": true
    } 
    ,
    {
      "match": "https://kandian.wkandian.com/v5/task/browse_start.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqllz.js",
      "enable": true
    }
    ,
    {
      "match": "https://kandian.wkandian.com/v5/Sousuo/playStart.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zqssz.js",
      "enable": true
    },
    {
      "match": "https://kandian.wkandian.com/V17/Ximalaya/setCompleteSec.json",
      "target": "https://raw.githubusercontent.com/CollectWoolTeam/CollectWool/main/ZhongQingKanDian/zq_music.js",
      "enable": true
    }
  ]
}
