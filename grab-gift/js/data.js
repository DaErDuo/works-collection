var active_key = 1;   //活动专区
var program_key = 1; //节目盛宴
var talk_key = 1;       //边看边聊
var redpack_key = 1; //整点抢红包
var isover_key = 1;   //是否结束 0预热1开始 2结束
var programlist_key= 1;
var startTime = 1483187400000;
var endTime = 1483187410000;
var currTime = 1483187395000;
var nextTime = 1483187420000;
var canHit = false;
// 活动专区
var listParty = [ {
    "id" : 151,
    "contentType" : 1,
    "contentId" : 824,
    "titleImage" : "http://images.9zhiad.com/4000ce4d-c2ec-4a77-a130-0d574203b075.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/praise/index?code=YLXX_ONE"
}, {
    "id" : 166,
    "contentType" : 1,
    "contentId" : 843,
    "titleImage" : "http://images.9zhiad.com/cebed110-9bbd-488b-89c7-35dcf1eb0ee6.jpg",
    "contentUrl" : "http://192.168.1.204/h5/interaction/partyStar/single_vote_list?tvId=2"
}, {
    "id" : 108,
    "contentType" : 1,
    "contentId" : 829,
    "titleImage" : "http://images.9zhiad.com/091e8c7d-3283-4a4f-8ac1-199df22ad48a.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interactcaichi/detail"
}, {
    "id" : 109,
    "contentType" : 1,
    "contentId" : 830,
    "titleImage" : "http://images.9zhiad.com/c839a9cd-f290-44e3-bab3-ad84959fdb72.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/detail"
}, {
    "id" : 104,
    "contentType" : 1,
    "contentId" : 828,
    "titleImage" : "http://images.9zhiad.com/fcb3d04c-3d34-4476-ab1b-63182c7ae5ab.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/detail"
}, {
    "id" : 100,
    "contentType" : 1,
    "contentId" : 825,
    "titleImage" : "http://images.9zhiad.com/262a74ca-d3b4-446a-b110-09de02ad7f92.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/putong/detail"
}, {
    "id" : 146,
    "contentType" : 1,
    "contentId" : 789,
    "titleImage" : "http://images.9zhiad.com/678bf311-e8a5-4b83-99df-21c38d1446fe.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/detail"
}, {
    "id" : 147,
    "contentType" : 1,
    "contentId" : 790,
    "titleImage" : "http://images.9zhiad.com/e7555538-7fce-4ebe-8948-1d58c22ff840.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/detail"
}, {
    "id" : 112,
    "contentType" : 3,
    "title" : "验证问题",
    "contentId" : 63,
    "titleImage" : "http://images.9zhiad.com/aa87cb8f-cd21-43b3-800f-83b7be5d1a69.jpg"
}, {
    "id" : 160,
    "contentType" : 1,
    "contentId" : 814,
    "titleImage" : "http://images.9zhiad.com/f0104ed5-c4b3-4b44-9031-ab7fe19c8524.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/detail"
}, {
    "id" : 102,
    "contentType" : 1,
    "contentId" : 826,
    "titleImage" : "http://images.9zhiad.com/81413334-fc7e-47ec-9d50-5c5c901bc8b0.jpg",
    "contentUrl" : "http://192.168.1.204/h5/yaya/interact/detail"
} ];

// 节目盛宴
var tvList= [ {
    "id" : 1,
    "tvName" : "湖南卫视",
    "praiseNum" : 890
}, {
    "id" : 2,
    "tvName" : "浙江卫视",
    "praiseNum" : 502
} ];

// 整点抢红包列表
var infoList= [ {
    "id" : 16,
    "partyCode" : "RED_PACKET",
    "partyStartTime" : 1481637600000,
    "partyEndTime" : 1481641200000,
    "praiseCode" : "RED_PACKET2016121501",
    "state" : 1,
    "partyType" : 0,
    "currentDate" : 1481639436059,
    "hasNextParty" : 0
}, {
    "id" : 17,
    "partyCode" : "RED_PACKET",
    "partyStartTime" : 1481641200000,
    "partyEndTime" : 1481643000000,
    "praiseCode" : "RED_PACKET2016121501",
    "state" : 1,
    "partyType" : 0,
    "currentDate" : 1481639436059,
    "hasNextParty" : 0
}, {
    "id" : 18,
    "partyCode" : "RED_PACKET",
    "partyStartTime" : 1481644800000,
    "partyEndTime" : 1481646600000,
    "praiseCode" : "RED_PACKET2016121501",
    "state" : 1,
    "partyType" : 0,
    "currentDate" : 1481639436059,
    "hasNextParty" : 0
}, {
    "id" : 19,
    "partyCode" : "RED_PACKET",
    "partyStartTime" : 1481679000000,
    "partyEndTime" : 1481680800000,
    "praiseCode" : "RED_PACKET2016121501",
    "state" : 1,
    "partyType" : 0,
    "currentDate" : 1481639436059,
    "hasNextParty" : 0
} ];
//节目列表
var programList= [ {
    "id" : 1,
    "tvId" : 1,
    "programName" : "歌舞秀",
    "startTime" : 1483182000000,
    "sysStarIds" : "000001,000002",
    "sysStarNames" : "张天爱,刘宪华",
    "starNames" : "",
    "pariseNum" : 113
}, {
    "id" : 4,
    "tvId" : 2,
    "programName" : "《超级英雄》",
    "startTime" : 1483182005000,
    "sysStarIds" : "100001,100002,100003,100004,100005,100006,100007",
    "sysStarNames" : "邓超,Angelababy,李晨,郑凯,陈赫,王祖蓝,鹿晗",
    "starNames" : "",
    "pariseNum" : 142
}, {
    "id" : 5,
    "tvId" : 2,
    "programName" : "《私奔》、《灰姑娘》",
    "startTime" : 1483182009000,
    "sysStarIds" : "100008",
    "sysStarNames" : "郑钧",
    "starNames" : "",
    "pariseNum" : 74
}, {
    "id" : 6,
    "tvId" : 1,
    "programName" : "《人间精品起来嗨》、《逛吃逛吃》",
    "startTime" : 1483182005000,
    "sysStarIds" : "000003",
    "sysStarNames" : "大张伟",
    "pariseNum" : 55
}, {
    "id" : 8,
    "tvId" : 1,
    "programName" : "《跨年合伙人》",
    "startTime" : 1483182012000,
    "sysStarIds" : "000004,000005,000018",
    "sysStarNames" : "杜海涛,钱枫,黄晓明",
    "starNames" : "",
    "pariseNum" : 0
}, {
    "id" : 9,
    "tvId" : 2,
    "programName" : "《小苹果》、《老男孩》",
    "startTime" : 1483182014000,
    "sysStarIds" : "100009,100010",
    "sysStarNames" : "筷子兄弟,陈赫",
    "pariseNum" : 0
}, {
    "id" : 10,
    "tvId" : 1,
    "programName" : "《新年这一刻》",
    "startTime" : 1483185049000,
    "sysStarIds" : "000006",
    "sysStarNames" : "SNH48",
    "pariseNum" : 0
}, {
    "id" : 11,
    "tvId" : 2,
    "programName" : "《相见不如怀念+默+白天不懂夜的黑+征服》",
    "startTime" : 1483183849000,
    "sysStarIds" : "100011",
    "sysStarNames" : "那英",
    "pariseNum" : 0
}, {
    "id" : 12,
    "tvId" : 1,
    "programName" : "《旧换如梦》、《现代爱情故事》、《滚滚红尘》、《诺言》大串烧",
    "startTime" : 1483188649000,
    "sysStarIds" : "000007",
    "sysStarNames" : "杨钰莹",
    "pariseNum" : 0
}, {
    "id" : 13,
    "tvId" : 2,
    "programName" : "第10个节目",
    "startTime" : 1483188649000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 14,
    "tvId" : 1,
    "programName" : "第11个节目",
    "startTime" : 1483192249000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 15,
    "tvId" : 2,
    "programName" : "第12个节目",
    "startTime" : 1483192249000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 16,
    "tvId" : 1,
    "programName" : "第13个节目",
    "startTime" : 1483192549000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 17,
    "tvId" : 2,
    "programName" : "第14个节目",
    "startTime" : 1483192549000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 18,
    "tvId" : 1,
    "programName" : "第16个节目",
    "startTime" : 1483194649000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 2
}, {
    "id" : 19,
    "tvId" : 2,
    "programName" : "第17个节目",
    "startTime" : 1483194649000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 20,
    "tvId" : 1,
    "programName" : "第18个节目",
    "startTime" : 1483196149000,
    "sysStarIds" : "210066,210063",
    "pariseNum" : 0
}, {
    "id" : 21,
    "tvId" : 2,
    "programName" : "第19个节目",
    "startTime" : 1483196149000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 22,
    "tvId" : 1,
    "programName" : "第20个节目",
    "startTime" : 1483199749000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
}, {
    "id" : 23,
    "tvId" : 2,
    "programName" : "第21个节目",
    "startTime" : 1483199749000,
    "sysStarIds" : "210066,210063",
    "sysStarNames" : "",
    "pariseNum" : 0
} ];

// 排名 结束后 出现
var programRanking= [ {
    "id" : 1,
    "tvId" : 1,
    "programName" : "歌舞秀",
    "startTime" : 1483182000000,
    "sysStarIds" : "000001,000002",
    "sysStarNames" : "张天爱,刘宪华",
    "pariseNum" : 1030
}, {
    "id" : 8,
    "tvId" : 1,
    "programName" : "《人间精品起来嗨》、《逛吃逛吃》",
    "startTime" : 1483183207000,
    "sysStarIds" : "000003",
    "sysStarNames" : "大张伟",
    "pariseNum" : 220
}, {
    "id" : 5,
    "tvId" : 2,
    "programName" : "《超级英雄》",
    "startTime" : 1483182649000,
    "sysStarIds" : "100001,100002,100003,100004,100005,100006,100007",
    "sysStarNames" : "邓超,Angelababy,李晨,郑凯,陈赫,王祖蓝,鹿晗",
    "pariseNum" : 74
}, {
    "id" : 20,
    "tvId" : 2,
    "programName" : "《小苹果》、《老男孩》",
    "startTime" : 1483182014000,
    "sysStarIds" : "100009,100010",
    "sysStarNames" : "筷子兄弟,陈赫",
    "pariseNum" : 22
}, {
    "id" : 6,
    "tvId" : 1,
    "programName" : "《新年这一刻》",
    "startTime" : 1483185049000,
    "sysStarIds" : "000006",
    "sysStarNames" : "SNH48",
    "pariseNum" : 3
} ];

// 动态
var listInfoParty= [ {
    "id" : 24873,
    "title" : "世界上最漂亮的小孩长这样",
    "titleImage" : "http://7xlid5.com3.z0.glb.qiniucdn.com/8404c5bc-9f99-4d61-8816-1b14fbceed5d.jpg",
    "infoType" : 1,
    "titleLayout" : 5,
    "contentType" : 0
}, {
    "id" : 24876,
    "title" : "当不成总统转而捞钱？特朗普拟成立电视台将选民支持变",
    "titleImage" : "http://7xlid5.com3.z0.glb.qiniucdn.com/b67797d1-682b-4fae-87bb-eed7aa50a87e.jpg",
    "infoType" : 1,
    "titleLayout" : 1,
    "contentType" : 0
}, {
    "id" : 1000707,
    "title" : "跨年专区的视频",
    "titleImage" : "http://images.9zhiad.com/1fe9e929-45ea-4ffb-8a14-02ffe3664eb4.jpg",
    "infoType" : 0,
    "titleLayout" : 5,
    "videoImage" : "http://images.9zhiad.com/1fe9e929-45ea-4ffb-8a14-02ffe3664eb4.jpg",
    "videoUrl" : "http://video.9zhiad.com/578e3d6f-4952-4c9f-8599-5236860d28ad.mp4",
    "contentType" : 1
}, {
    "id" : 1000565,
    "title" : "跨年专区的上文下图",
    "titleImage" : "http://images.9zhiad.com/c98e2178-c006-4575-b56b-fd37e0cae9ed.jpg",
    "infoType" : 1,
    "titleLayout" : 5,
    "contentType" : 0
}, {
    "id" : 1000576,
    "title" : "跨年专区的专题",
    "titleImage" : "http://images.9zhiad.com/316a5ec3-5042-46b5-8c3b-decef6d2d88a.jpg",
    "infoType" : 3,
    "titleLayout" : 5,
    "contentType" : 0
}, {
    "id" : 1000570,
    "title" : "跨年专区的左图右文带视频",
    "titleImage" : "http://images.9zhiad.com/f9929347-fd48-4fb8-adc2-eadda8b50a2e.jpg",
    "infoType" : 1,
    "titleLayout" : 1,
    "videoImage" : "http://images.9zhiad.com/77bd7dea-8209-4175-a4c1-ed616d1c4c6a.jpg",
    "videoUrl" : "http://video.9zhiad.com/578e3d6f-4952-4c9f-8599-5236860d28ad.mp4",
    "contentType" : 0
} ];