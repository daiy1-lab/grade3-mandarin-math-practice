const STORAGE_KEYS = {
  vocab: "grade3_vocab_items",
  students: "grade3_students",
  attempts: "grade3_attempts",
};
const AUDIO_DB_NAME = "grade3_vocab_audio";
const AUDIO_STORE_NAME = "recordings";
const TEACHER_PASSWORD = "660266";

const MODES = [
  { id: "meaning", icon: "意", name: "看词语，选意思" },
  { id: "pinyin", icon: "音", name: "看词语，选拼音" },
  { id: "dictation", icon: "听", name: "听声音，写词语" },
  { id: "collocation", icon: "配", name: "选对的用法" },
];

const MATH_OPERATIONS = [
  { id: "add", icon: "+", name: "加法" },
  { id: "subtract", icon: "-", name: "减法" },
  { id: "multiply", icon: "×", name: "乘法" },
  { id: "divide", icon: "÷", name: "除法" },
];

const MATH_TOPICS = {
  add: [
    { id: "add-2-2", name: "两位数加两位数", digits: [2, 2] },
    { id: "add-2-3", name: "两位数加三位数", digits: [2, 3] },
    { id: "add-3-3", name: "三位数加三位数", digits: [3, 3] },
  ],
  subtract: [
    { id: "subtract-2-2", name: "两位数减两位数", digits: [2, 2] },
    { id: "subtract-3-2", name: "三位数减两位数", digits: [3, 2] },
    { id: "subtract-3-3", name: "三位数减三位数", digits: [3, 3] },
  ],
  multiply: [
    ...Array.from({ length: 9 }, (_, index) => {
      const factor = index + 2;
      return { id: `multiply-${factor}`, name: `${factor} 的乘法`, factors: [factor] };
    }),
    { id: "multiply-2-5", name: "2、3、4、5 一起练", factors: [2, 3, 4, 5] },
    { id: "multiply-6-9", name: "6、7、8、9 一起练", factors: [6, 7, 8, 9] },
    { id: "multiply-2-10", name: "2 到 10 一起练", factors: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
  ],
  divide: [
    ...Array.from({ length: 9 }, (_, index) => {
      const divisor = index + 2;
      return { id: `divide-${divisor}`, name: `${divisor} 的除法`, factors: [divisor] };
    }),
    { id: "divide-2-5", name: "2、3、4、5 一起练", factors: [2, 3, 4, 5] },
    { id: "divide-6-9", name: "6、7、8、9 一起练", factors: [6, 7, 8, 9] },
    { id: "divide-2-10", name: "2 到 10 一起练", factors: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
  ],
};

const DEFAULT_STUDENTS = Array.from({ length: 22 }, (_, index) => String(index + 1).padStart(2, "0"));
const PART_OF_SPEECH_WORDS = ["名词", "动词", "形容词", "副词", "量词", "代词", "数词", "连词", "介词", "助词", "叹词", "拟声词"];
const MEANING_BACKUPS = ["声音很大", "颜色很暗", "动作很快", "心里高兴", "地方很远", "天气很冷"];
const PINYIN_BACKUPS = ["mǎ ma", "xiǎo niǎo", "huā duǒ", "xué xiào", "kāi xīn", "péng yǒu"];
const COLLOCATION_BACKUPS = ["认真学习", "慢慢走路", "快乐生活", "仔细观察", "大声朗读", "安静等待"];
const QUESTIONS_PER_PRACTICE = 10;
const PINYIN_HINTS = {
  丑: "chǒu",
  其他洲: "qí tā zhōu",
  黑暗: "hēi àn",
  这个: "zhè ge",
  白色: "bái sè",
  胖胖的: "pàng pàng de",
  不太: "bù tài",
  难看: "nán kàn",
  泥土: "ní tǔ",
  软土: "ruǎn tǔ",
  慢慢: "màn màn",
  渐渐: "jiàn jiàn",
  屋里: "wū lǐ",
  室内: "shì nèi",
  放开: "fàng kāi",
  松手: "sōng shǒu",
  上学: "shàng xué",
  上课: "shàng kè",
  站起: "zhàn qǐ",
  离开: "lí kāi",
  只有: "zhǐ yǒu",
  不包括: "bù bāo kuò",
  别人: "bié ren",
  大家: "dà jiā",
  合上: "hé shàng",
  闭上: "bì shàng",
  没写: "méi xiě",
  空着: "kōng zhe",
  擦掉: "cā diào",
  不写: "bù xiě",
  上车: "shàng chē",
  开车: "kāi chē",
  倒茶: "dào chá",
  不喝: "bù hē",
  看见: "kàn jiàn",
  听到: "tīng dào",
  单独: "dān dú",
  各自: "gè zì",
  分别: "fēn bié",
  单个: "dān gè",
  下班: "xià bān",
  休息: "xiū xi",
  臭味: "chòu wèi",
  难闻: "nán wén",
  手心: "shǒu xīn",
  掌心: "zhǎng xīn",
  放下: "fàng xià",
  拿掉: "ná diào",
  直直的: "zhí zhí de",
  笔直的: "bǐ zhí de",
  站直: "zhàn zhí",
  挺直: "tǐng zhí",
  慢点儿: "màn diǎn er",
  别急: "bié jí",
  少糖: "shǎo táng",
  不加糖: "bù jiā táng",
  放弃: "fàng qì",
  不找: "bù zhǎo",
  挡住: "dǎng zhù",
  失败: "shī bài",
  绕开: "rào kāi",
  避开: "bì kāi",
  不适应: "bù shì yìng",
  难受: "nán shòu",
  出现: "chū xiàn",
  来到: "lái dào",
  死亡: "sǐ wáng",
  灭亡: "miè wáng",
  马虎: "mǎ hu",
  粗心: "cū xīn",
  反对: "fǎn duì",
  阻止: "zǔ zhǐ",
  脏: "zāng",
  肮脏: "āng zāng",
  保护: "bǎo hù",
  修好: "xiū hǎo",
  好人: "hǎo rén",
  善人: "shàn rén",
  出发: "chū fā",
  回来: "huí lái",
  伤心: "shāng xīn",
  难过: "nán guò",
  昂贵: "áng guì",
  贵: "guì",
  麻烦: "má fan",
  不便: "bù biàn",
  停止: "tíng zhǐ",
  中断: "zhōng duàn",
  简单: "jiǎn dān",
  容易: "róng yì",
  复杂: "fù zá",
  远离: "yuǎn lí",
  推开: "tuī kāi",
  推走: "tuī zǒu",
  出来: "chū lái",
  地面: "dì miàn",
  地球: "dì qiú",
  西南部: "xī nán bù",
  南边: "nán biān",
  隐瞒: "yǐn mán",
  不说: "bù shuō",
  表扬: "biǎo yáng",
  称赞: "chēng zàn",
  拼音: "pīn yīn",
  字母: "zì mǔ",
  否认: "fǒu rèn",
  怀疑: "huái yí",
  分开: "fēn kāi",
  扶起: "fú qǐ",
  合作: "hé zuò",
  和好: "hé hǎo",
};

const SAMPLE_TEXT = `第一单元,美丽,měi lì,很好看,丑,形容词,美丽的花
第一单元,亚洲,yà zhōu,一个大洲，中国在这里,其他洲,名词,亚洲国家
第一单元,北美洲,běi měi zhōu,一个大洲，美国在这里,其他洲,名词,北美洲国家
第一单元,阳光,yáng guāng,太阳照出来的光,黑暗,名词,温暖的阳光
第一单元,其他,qí tā,别的，不是这个,这个,代词,其他的同学
第一单元,黑色,hēi sè,像黑板一样的颜色,白色,名词,黑色的乌鸦
第一单元,瘦瘦的,shòu shòu de,身体不胖,胖胖的,形容词,瘦瘦的人
第一单元,非洲,fēi zhōu,一个很大的洲,其他洲,名词,非洲的大象
第一单元,非常,fēi cháng,很，特别,不太,副词,非常开心
第一单元,漂亮,piào liang,很好看,难看,形容词,漂亮的衣服
第二单元,石头,shí tou,硬硬的小块东西,泥土|软土,名词,一块石头|捡石头
第二单元,突然,tū rán,一下子发生,慢慢|渐渐,副词,突然下雨|突然出现
第二单元,院子,yuàn zi,房子外面的空地,屋里|室内,名词,小院子|打扫院子
第二单元,把手,bǎ shǒu,用手拿住,放开|松手,动词,把手放好|把手伸出来
第二单元,放学,fàng xué,学校一天的课结束了,上学|上课,动词,放学回家|放学以后
第二单元,坐在,zuò zài,坐在一个地方,站起|离开,动词,坐在椅子上|坐在地上
第二单元,连...也,lián ... yě,这个也包括在里面,只有|不包括,连词,连老师也笑了|连小狗也来了
第二单元,自己,zì jǐ,不是别人，是本人,别人|大家,代词,照顾自己|自己完成
第三单元,一张纸,yì zhāng zhǐ,一片可以写字的纸,很多纸|一堆纸,名词,一张纸|拿出一张纸
第三单元,张开,zhāng kāi,把合着的东西打开,合上|闭上,动词,张开嘴巴|张开双手
第三单元,写道,xiě dào,文章里这样写,没写|空着,动词,书上写道|信里写道
第三单元,写字,xiě zì,用笔写出字,擦掉|不写,动词,认真写字|练习写字
第三单元,亚洲,yà zhōu,一个大洲，中国在这里,欧洲|非洲,名词,亚洲国家|亚洲地图
第三单元,等车,děng chē,等车来,上车|开车,动词,在车站等车|安静等车
第三单元,喝茶,hē chá,喝茶水,倒茶|不喝,动词,慢慢喝茶|坐下喝茶
第三单元,茶包,chá bāo,装茶叶的小包,空杯|水杯,名词,一个茶包|放入茶包
第三单元,英国,yīng guó,欧洲的一个国家,中国|美国,名词,英国学校|去英国
第三单元,闻到,wén dào,用鼻子知道味道,看见|听到,动词,闻到花香|闻到茶香
第三单元,共同,gòng tóng,大家一起,单独|各自,形容词,共同努力|共同完成
第三单元,一共,gòng,全部加起来,分别|单个,副词,一共有十人|一共三本书
第四单元,上班,shàng bān,大人去工作,下班|休息,动词,爸爸上班|早上上班
第四单元,茶香,chá xiāng,茶的好闻味道,臭味|难闻,名词,淡淡的茶香|闻到茶香
第四单元,手背,shǒu bèi,手外面的那一面,手心|掌心,名词,手背受伤|看看手背
第四单元,背书包,bēi shū bāo,把书包放在背上,放下|拿掉,动词,背书包上学|背好书包
第四单元,弯弯的,wān wān de,不是直的,直直的|笔直的,形容词,弯弯的小路|弯弯的月亮
第四单元,弯腰,wān yāo,把腰弯下来,站直|挺直,动词,弯腰捡东西|弯腰系鞋带
第四单元,身体,shēn tǐ,人的全身,东西|物品,名词,保护身体|身体健康
第四单元,体育课,tǐ yù kè,在学校运动的课,语文课|数学课,名词,上体育课|喜欢体育课
第四单元,快点儿,kuài diǎn er,再快一些,慢点儿|别急,副词,快点儿走|快点儿写
第四单元,加糖,jiā táng,把糖放进去,少糖|不加糖,动词,给茶加糖|加一点糖
第五单元,公民,gōng mín,属于一个国家的人,外人|外国人,名词,中国公民|好公民
第五单元,移民,yí mín,搬到别的国家生活的人,本地人|原住民,名词,一位移民|移民家庭
第五单元,由于,yóu yú,因为,所以|结果,介词,由于下雨|由于生病
第五单元,于是,yú shì,然后，就,但是|可是,连词,于是出发|于是回家
第五单元,生产,shēng chǎn,做出东西,消费|使用,动词,生产食品|工厂生产
第五单元,困难,kùn nan,不容易做,容易|简单,形容词,遇到困难|克服困难
第五单元,一代人,yí dài rén,同一段时间长大的人,个人|一个人,名词,新一代人|老一代人
第五单元,生病,shēng bìng,身体不舒服,健康|好了,动词,生病请假|妈妈生病
第五单元,病倒,bìng dǎo,病得不能起来,康复|站起,动词,累得病倒|突然病倒
第五单元,终于,zhōng yú,等了很久以后,开始|起初,副词,终于到了|终于完成
第六单元,相信,xiāng xìn,觉得是真的,怀疑|不信,动词,相信朋友|相信自己
第六单元,写信,xiě xìn,写一封信给别人,收信|读信,动词,给妈妈写信|认真写信
第六单元,温和,wēn hé,说话或天气让人舒服,凶狠|严厉,形容词,温和地说|温和的老师
第六单元,勇敢,yǒng gǎn,不害怕,胆小|害怕,形容词,勇敢的孩子|勇敢面对
第六单元,勇气,yǒng qì,敢去做的心,害怕|胆怯,名词,有勇气|鼓起勇气
第六单元,球队,qiú duì,一起打球的队,个人|一个人,名词,加入球队|学校球队
第六单元,战场,zhàn chǎng,打仗的地方,和平地方|家里,名词,古代战场|走上战场
第六单元,公司,gōng sī,大人工作的地方,家庭|学校,名词,一家公司|爸爸的公司
第六单元,代表,dài biǎo,替大家说话的人,个人|自己,名词,学生代表|班级代表
第七单元,讨论,tǎo lùn,大家一起说想法,沉默|不说,动词,小组讨论|认真讨论
第七单元,甚至,shèn zhì,连这个也有,只是|仅仅,副词,甚至忘了吃饭|甚至哭了
第七单元,至少,zhì shǎo,最少有这么多,最多|不超过,副词,至少三个人|至少读两遍
第七单元,关门,guān mén,把门合上,开门|打开,动词,轻轻关门|关门睡觉
第七单元,注意,zhù yì,认真看或认真听,忽略|不管,动词,注意安全|注意听讲
第七单元,保护,bǎo hù,不让人或东西受伤,伤害|破坏,动词,保护环境|保护眼睛
第七单元,护士,hù shi,在医院照顾病人的人,病人|学生,名词,一位护士|护士照顾病人
第七单元,老树,lǎo shù,长了很多年的树,小树|新树,名词,一棵老树|保护老树
第八单元,希望,xī wàng,心里想要做到,失望|灰心,名词,新的希望|充满希望
第八单元,看望,kàn wàng,去看看别人,离开|不理,动词,看望奶奶|看望朋友
第八单元,天空,tiān kōng,我们头上的天,地面|地下,名词,蓝蓝的天空|望着天空
第八单元,太空,tài kōng,地球外面很远的地方,地球|地面,名词,进入太空|探索太空
第八单元,省水,shěng shuǐ,少用水，不浪费,浪费水|多用水,动词,我们要省水|省水的方法
第八单元,省钱,shěng qián,少花钱，不浪费,花钱|浪费钱,动词,学会省钱|省钱买书
第八单元,告诉,gào su,说给别人听,隐瞒|不说,动词,告诉老师|告诉妈妈
第八单元,投诉,tóu sù,不满意时说出问题,表扬|称赞,动词,向公司投诉|投诉服务
第八单元,东北部,dōng běi bù,东北方向的那一边,西南部|南边,名词,城市东北部|美国东北部
第八单元,部首,bù shǒu,查汉字用的一部分,整字|全文,名词,查部首|学习部首
第八单元,看见,kàn jiàn,用眼睛看到,看不见|没看见,动词,看见朋友|看见小鸟
第八单元,见面,jiàn miàn,两个人碰到一起,分开|告别,动词,和老师见面|第一次见面
第九单元,感觉,gǎn jué,心里或身体知道了,不知道|没感觉,名词,舒服的感觉|我的感觉
第九单元,感恩节,gǎn ēn jié,美国感谢家人的节日,普通日子|工作日,名词,过感恩节|感恩节晚餐
第九单元,吸引,xī yǐn,让人想看或想靠近,推开|赶走,动词,吸引大家|吸引目光
第九单元,吸过来,xī guò lái,把东西拉到这边来,推走|吹走,动词,把纸吸过来|被磁铁吸过来
第九单元,靠在,kào zài,贴着一个东西,离开|站直,动词,靠在墙上|靠在椅子上
第九单元,靠近,kào jìn,离得更近,远离|离开,动词,靠近门口|慢慢靠近
第九单元,进入,jìn rù,从外面到里面,出来|离开,动词,进入教室|进入太空
第九单元,大气层,dà qì céng,包着地球的空气,太空深处|地面,名词,穿过大气层|保护大气层
第九单元,到达,dào dá,到了要去的地方,出发|离开,动词,到达学校|安全到达
第九单元,现象,xiàn xiàng,看到的事情或样子,原因|想法,名词,自然现象|奇怪的现象
第十单元,梦想,mèng xiǎng,很想实现的事,现实|失望,名词,我的梦想|实现梦想
第十单元,等待,děng dài,停下来等,离开|走开,动词,耐心等待|等待朋友
第十单元,约会,yuē huì,约好时间见面,分开|告别,名词,一次约会|参加约会
第十单元,光秃秃,guāng tū tū,上面什么也没有,茂密|满满的,形容词,光秃秃的树|光秃秃的山
第十单元,浅色,qiǎn sè,比较淡的颜色,深色|浓色,名词,浅色衣服|穿浅色
第十单元,愿望,yuàn wàng,心里想要的事,失望|不想,名词,美好的愿望|许下愿望
第十单元,伤心,shāng xīn,心里难过,开心|高兴,形容词,伤心地哭|感到伤心
第十单元,水滴,shuǐ dī,一小滴水,大水流|干地,名词,一颗水滴|小小的水滴
第十一单元,神奇,shén qí,很特别，像魔法一样,普通|平常,形容词,神奇的故事|神奇的力量
第十一单元,奇怪,qí guài,和平常不一样,正常|平常,形容词,奇怪的声音|觉得奇怪
第十一单元,老师,lǎo shī,教学生的人,学生|孩子,名词,我的老师|尊敬老师
第十一单元,请教,qǐng jiào,问别人，请别人教,回答|教别人,动词,请教老师|虚心请教
第十一单元,由于,yóu yú,因为,所以|结果,介词,由于下雨|由于生病
第十一单元,一闪一闪,yì shǎn yì shǎn,亮一下，暗一下,一直黑|不亮,形容词,一闪一闪的星星|灯光一闪一闪
第十一单元,白云,bái yún,天上白色的云,乌云|黑云,名词,一朵白云|天上的白云
第十一单元,红的,hóng de,颜色是红色的,绿的|黑的,形容词,红的花|红的衣服
第十一单元,红色,hóng sè,像红旗一样的颜色,绿色|蓝色,名词,红色书包|喜欢红色
第十二单元,传统,chuán tǒng,很久以前传下来的做法,新式|现代,名词,中国传统|传统节日
第十二单元,农历,nóng lì,中国传统日历,公历|阳历,名词,农历新年|看农历
第十二单元,庆祝,qìng zhù,因为高兴一起活动,哀悼|难过,动词,庆祝生日|庆祝节日
第十二单元,往前,wǎng qián,向前走,往后|后退,动词,往前走|往前看
第十二单元,别人,bié ren,不是自己的人,自己|本人,代词,帮助别人|听别人说
第十二单元,衣服,yī fu,穿在身上的东西,鞋子|帽子,名词,漂亮的衣服|穿衣服
第十二单元,绿色,lǜ sè,像草一样的颜色,红色|黑色,名词,绿色叶子|绿色书包
第十二单元,历史,lì shǐ,以前发生的事,现在|未来,名词,学习历史|中国历史
第十三单元,人权,rén quán,每个人应该有的权利,没有权利|伤害,名词,保护人权|人人有人权
第十三单元,逃走,táo zǒu,跑开离开危险,留下|回来,动词,赶快逃走|从家里逃走
第十三单元,意见,yì jiàn,自己的想法,同意|没有想法,名词,提出意见|听取意见
第十三单元,换来,huàn lái,得到一个结果,失去|送走,动词,换来成功|努力换来进步
第十三单元,意义,yì yì,重要的意思,没有用|无意义,名词,重要意义|学习的意义
第十三单元,电影,diàn yǐng,在屏幕上看的故事,书本|音乐,名词,看电影|一部电影
第十三单元,影响,yǐng xiǎng,让人或事情有变化,没有关系|不影响,名词,很大的影响|受到影响
第十三单元,献出,xiàn chū,把自己的东西给别人,收回|拿走,动词,献出爱心|献出生命
第十四单元,位于,wèi yú,在一个地方,离开|不在,动词,位于城市中心|位于北边
第十四单元,资源,zī yuán,可以用的东西,废物|没用的东西,名词,自然资源|节约资源
第十四单元,源头,yuán tóu,开始的地方,终点|末尾,名词,河流源头|找到源头
第十四单元,大片,dà piàn,很大一片,小片|一点点,形容词,大片森林|大片草地
第十四单元,环境,huán jìng,我们周围的地方,个人|自己,名词,保护环境|好的环境
第十四单元,原来,yuán lái,以前是这样，或现在知道了,现在|后来,副词,原来如此|原来是你
第十四单元,接走,jiē zǒu,来把人带走,送来|留下,动词,接走孩子|妈妈接走我
第十四单元,耳环,ěr huán,戴在耳朵上的东西,帽子|手套,名词,一副耳环|漂亮的耳环
第十五单元,政府,zhèng fǔ,管理城市或国家的人和地方,个人|家庭,名词,地方政府|政府工作
第十五单元,首府,shǒu fǔ,一个地区最重要的城市,小镇|乡村,名词,州的首府|首府城市
第十五单元,华人,huá rén,有中国文化背景的人,外国人|外族人,名词,海外华人|华人社区
第十五单元,华语,huá yǔ,中文,英语|外语,名词,学习华语|华语学校
第十五单元,语言,yǔ yán,人们说的话,沉默|不说话,名词,学习语言|不同语言
第十五单元,方言,fāng yán,一个地方的人说的话,普通话|标准语,名词,家乡方言|说方言
第十五单元,教育,jiào yù,教人学习,不教|放任,名词,学校教育|重视教育
第十五单元,解决,jiě jué,把问题做好,制造|留下,动词,解决问题|想办法解决
第十五单元,决定,jué dìng,想好了要怎么做,犹豫|改变,动词,做出决定|决定参加
第十六单元,通过,tōng guò,从这里到那里，或被同意,挡住|失败,动词,通过马路|通过考试
第十六单元,寻求,xún qiú,努力去找,放弃|不找,动词,寻求帮助|寻求答案
第十六单元,数量,shù liàng,有多少,质量|样子,名词,数量很多|计算数量
第十六单元,经过,jīng guò,从旁边走过，或做了一段时间,绕开|避开,动词,经过学校|经过努力
第十六单元,适应,shì yìng,慢慢习惯,不适应|难受,动词,适应环境|适应学校
第十六单元,消失,xiāo shī,不见了,出现|来到,动词,慢慢消失|声音消失
第十六单元,生存,shēng cún,活下来,死亡|灭亡,动词,努力生存|动物生存
第十六单元,很久,hěn jiǔ,很长时间,一会儿|很快,副词,等了很久|很久以前
第十七单元,立起,lì qǐ,竖起来,倒下|放平,动词,把牌子立起|慢慢立起
第十七单元,饼干,bǐng gān,脆脆的小点心,饭菜|水果,名词,一块饼干|吃饼干
第十七单元,仔细,zǐ xì,认真，不马虎,马虎|粗心,形容词,仔细检查|仔细观察
第十七单元,支持,zhī chí,同意并帮助,反对|阻止,动词,支持朋友|支持决定
第十七单元,木制品,mù zhì pǐn,木头做的东西,金属品|塑料品,名词,木制品家具|一个木制品
第十七单元,干净,gān jìng,没有脏东西,脏|肮脏,形容词,干净的教室|洗得干净
第十七单元,破坏,pò huài,把东西弄坏,保护|修好,动词,破坏环境|不能破坏
第十七单元,坏人,huài rén,做坏事的人,好人|善人,名词,一个坏人|抓住坏人
第十八单元,抽地下水,chōu dì xià shuǐ,把地下的水抽出来,存水|放水,动词,抽地下水|不要乱抽地下水
第十八单元,经济,jīng jì,和钱、工作、买卖有关的事,浪费|贫困,名词,发展经济|地方经济
第十八单元,支撑,zhī chēng,撑住，不让倒,倒下|放开,动词,支撑房子|支撑身体
第十八单元,陷下去,xiàn xià qù,往下面沉,升起来|浮上来,动词,地面陷下去|慢慢陷下去
第十八单元,下陷,xià xiàn,向下沉,升高|抬起,动词,地面下陷|房子下陷
第十八单元,使用,shǐ yòng,拿来用,不用|闲置,动词,使用工具|正确使用
第十八单元,赚钱,zhuàn qián,工作后得到钱,花钱|赔钱,动词,努力赚钱|赚钱养家
第十八单元,无论,wú lùn,不管怎样,只有|除非,连词,无论如何|无论是谁
第十八单元,两大类,liǎng dà lèi,两个大的种类,一类|很多小类,名词,分成两大类|两大类动物
第十九单元,戴眼镜,dài yǎn jìng,把眼镜戴上,摘眼镜|拿下眼镜,动词,戴眼镜看书|需要戴眼镜
第十九单元,录像,lù xiàng,把画面录下来,播放|看录像,动词,给表演录像|录像记录
第十九单元,录下来,lù xià lái,把声音或画面保存下来,删掉|忘记,动词,把声音录下来|录下来看看
第十九单元,年级,nián jí,学校里的学习级别,年龄|年纪,名词,三年级|同一个年级
第十九单元,年纪,nián jì,年龄,年级|班级,名词,年纪很小|问年纪
第十九单元,整理,zhěng lǐ,把东西放整齐,弄乱|打乱,动词,整理书包|整理房间
第十九单元,帮助,bāng zhù,帮别人做事,伤害|阻碍,动词,帮助同学|互相帮助
第十九单元,差不多,chà bu duō,很接近,相差很远|完全不同,形容词,差不多一样|差不多完成
第十九单元,健康,jiàn kāng,身体好,生病|虚弱,形容词,身体健康|健康生活
第十九单元,康复,kāng fù,病好了,生病|恶化,动词,慢慢康复|早日康复
第二十单元,裂开,liè kāi,破出一条缝,合上|完整,动词,地面裂开|杯子裂开
第二十单元,父母,fù mǔ,爸爸和妈妈,孩子|子女,名词,我的父母|尊敬父母
第二十单元,母亲节,mǔ qīn jié,感谢妈妈的节日,普通日子|工作日,名词,庆祝母亲节|母亲节礼物
第二十单元,勇敢,yǒng gǎn,不害怕,胆小|害怕,形容词,勇敢的孩子|勇敢面对
第二十单元,对错,duì cuò,正确和错误,一样|相同,名词,分清对错|判断对错
第二十单元,便宜,pián yi,价钱低,贵|昂贵,形容词,便宜的书|很便宜
第二十单元,方便,fāng biàn,容易做，不麻烦,麻烦|不便,形容词,很方便|方便使用
第二十单元,快乐,kuài lè,心里高兴,难过|伤心,形容词,快乐生活|感到快乐
第二十单元,音乐,yīn yuè,好听的声音或歌曲,噪音|安静,名词,听音乐|喜欢音乐
第二十单元,继续,jì xù,接着做,停止|中断,动词,继续学习|继续前进
第二十单元,连续,lián xù,一个接一个不停,间断|停止,形容词,连续三天|连续下雨
第二十一单元,简单,jiǎn dān,容易，不难,复杂|困难,形容词,简单问题|很简单
第二十一单元,发展,fā zhǎn,慢慢变好或变大,后退|停下,动词,科技发展|快速发展
第二十一单元,科技,kē jì,科学和新技术,旧办法|传统,名词,现代科技|学习科技
第二十一单元,技术,jì shù,做事情的方法和本领,不会|笨拙,名词,学习技术|新技术
第二十一单元,信息,xìn xī,让人知道事情的消息,秘密|空白,名词,重要信息|发送信息
第二十一单元,复习,fù xí,再学一遍学过的东西,预习|新学,动词,复习功课|认真复习
第二十一单元,复杂,fù zá,不容易懂,简单|容易,形容词,复杂问题|情况复杂
第二十一单元,沟通,gōu tōng,互相说清楚,不说|隔开,动词,互相沟通|和老师沟通
第二十一单元,上线,shàng xiàn,开始在网上使用,下线|离线,动词,上线学习|网站上线
第二十二单元,打球,dǎ qiú,玩球类运动,休息|不动,动词,一起打球|放学打球
第二十二单元,认识,rèn shi,知道是谁或是什么,陌生|不认识,动词,认识朋友|认识汉字
第二十二单元,特别,tè bié,不一样,普通|一般,形容词,特别的日子|特别喜欢
第二十二单元,全身,quán shēn,整个身体,一部分|局部,名词,全身湿了|全身运动
第二十二单元,基本,jī běn,最重要，最基础,特别|高级,形容词,基本方法|基本要求
第二十二单元,露营,lù yíng,在外面住帐篷,住家|回家,动词,去露营|周末露营
第二十二单元,夏令营,xià lìng yíng,暑假参加的活动营,上课日|普通学校,名词,参加夏令营|中文夏令营
第二十二单元,营养,yíng yǎng,食物里让身体长好的东西,垃圾食品|没营养,名词,丰富营养|补充营养
第二十二单元,食品,shí pǐn,可以吃的东西,玩具|用品,名词,健康食品|购买食品
第二十二单元,技术,jì shù,做事情的方法和本领,不会|笨拙,名词,学习技术|电脑技术
第二十三单元,建筑,jiàn zhù,建好的房子或大楼,拆除|破坏,名词,古老建筑|高大建筑
第二十三单元,汉字,hàn zì,中文的字,拼音|字母,名词,学习汉字|写汉字
第二十三单元,证实,zhèng shí,说明是真的,否认|怀疑,动词,证实消息|证实想法
第二十三单元,深海鱼,shēn hǎi yú,住在很深海里的鱼,浅水鱼|小河鱼,名词,一种深海鱼|研究深海鱼
第二十三单元,漂移,piāo yí,慢慢移动,固定|停住,动词,木头漂移|大陆漂移
第二十三单元,曾经,céng jīng,以前有过,现在|从未,副词,曾经去过|曾经学过
第二十三单元,证明,zhèng míng,说明是真的,否认|反驳,动词,证明自己|证明答案
第二十三单元,碰撞,pèng zhuàng,两个东西撞在一起,分开|避开,动词,发生碰撞|汽车碰撞
第二十三单元,撞倒,zhuàng dǎo,撞了以后倒下,扶起|站好,动词,把杯子撞倒|被撞倒
第二十四单元,品德,pǐn dé,一个人的好行为,坏习惯|恶行,名词,良好品德|培养品德
第二十四单元,部落,bù luò,一群住在一起的人,个人|一家人,名词,古老部落|一个部落
第二十四单元,打斗,dǎ dòu,打架,和好|合作,动词,不要打斗|发生打斗
第二十四单元,害怕,hài pà,心里怕,勇敢|安心,形容词,感到害怕|害怕黑夜
第二十四单元,留下,liú xià,没有走，或放在那里,离开|带走,动词,留下脚印|留下礼物
第二十四单元,三天三夜,sān tiān sān yè,三天和三个晚上,一会儿|一天,名词,等了三天三夜|走了三天三夜
第二十四单元,玩具,wán jù,孩子玩的东西,工具|书本,名词,一个玩具|收拾玩具
第二十四单元,高兴,gāo xìng,心里开心,伤心|难过,形容词,高兴地笑|非常高兴
第二十四单元,庆祝,qìng zhù,因为高兴一起活动,难过|哀悼,动词,庆祝生日|庆祝节日`;

let vocab = loadJson(STORAGE_KEYS.vocab, parseVocab(SAMPLE_TEXT));
let students = loadJson(STORAGE_KEYS.students, DEFAULT_STUDENTS);
let attempts = loadJson(STORAGE_KEYS.attempts, []);
let selectedMode = MODES[0].id;
let quiz = { items: [], index: 0, current: null, locked: false, selected: "", finished: false };
let apiAvailable = false;
let selectedMathOperation = "add";
let selectedMathTopic = MATH_TOPICS.add[0];
let mathQuiz = { current: null, count: 0, locked: false, wrongTries: 0 };
let activeRecorder = null;
let activeRecordingKey = "";
let activeRecordingChunks = [];
const GOOGLE_SHEET_WEB_APP_URL = String(window.GOOGLE_SHEET_WEB_APP_URL || "").trim();

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function splitList(value) {
  return String(value || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizePinyin(value) {
  return String(value || "").trim().toLowerCase();
}

function parseVocab(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      return normalizeVocabItem(fieldsToVocabItem(parseCsvLine(line)));
    })
    .filter((item) => item.unit && item.word && item.pinyin && item.meaning);
}

function fieldsToVocabItem(fields) {
  const [unit, word, pinyin, meaning] = fields;

  if (fields.length === 6) {
    const [, , , , opposite, collocations] = fields;
    return { unit, word, pinyin, meaning, near: [], opposite: splitList(opposite), type: "", collocations: splitList(collocations) };
  }

  if (fields.length === 7) {
    const [, , , , opposite, type, collocations] = fields;
    return { unit, word, pinyin, meaning, near: [], opposite: splitList(opposite), type, collocations: splitList(collocations) };
  }

  const [, , , , near, opposite, type, collocations] = fields;
  return { unit, word, pinyin, meaning, near: splitList(near), opposite: splitList(opposite), type, collocations: splitList(collocations) };
}

function normalizeVocabItem(item) {
  const normalized = {
    ...item,
    pinyin: normalizePinyin(item.pinyin),
    near: Array.isArray(item.near) ? item.near : splitList(item.near),
    opposite: Array.isArray(item.opposite) ? item.opposite : splitList(item.opposite),
    collocations: Array.isArray(item.collocations) ? item.collocations : splitList(item.collocations),
  };

  const likelyCollocations = normalized.opposite.filter((choice) => looksLikeCollocation(choice, normalized.word));
  if (!normalized.collocations.length && likelyCollocations.length) {
    normalized.collocations = likelyCollocations;
    normalized.opposite = unique([...normalized.near, ...normalized.opposite.filter((choice) => !likelyCollocations.includes(choice))]);
    normalized.near = [];
  }

  return normalized;
}

function looksLikeCollocation(value, word) {
  const text = String(value || "").trim();
  return text.length > word.length && text.includes(word);
}

function serializeVocab(items) {
  return items
    .map((item) => [item.unit, item.word, item.pinyin, item.meaning, item.opposite.join("|"), item.type, item.collocations.join("|")].map(csvCellForVocab).join(","))
    .join("\n");
}

function parseCsvLine(line) {
  const cells = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      cells.push(cell.trim());
      cell = "";
    } else {
      cell += char;
    }
  }

  cells.push(cell.trim());
  return cells;
}

function csvCellForVocab(value) {
  const text = String(value || "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function shuffle(values) {
  return [...values].sort(() => Math.random() - 0.5);
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, "").trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function removePartOfSpeechChoices(values) {
  return values.filter((value) => !PART_OF_SPEECH_WORDS.includes(String(value || "").trim()));
}

function cleanMeaningChoices(values, answer) {
  return removePartOfSpeechChoices(unique(values)).filter((value) => normalizeText(value) !== normalizeText(answer));
}

function buildFourChoices(answer, distractors, backups = [], finalBackups = []) {
  const cleanDistractors = removePartOfSpeechChoices(unique([...distractors, ...backups, ...finalBackups])).filter((value) => normalizeText(value) !== normalizeText(answer));
  return shuffle(unique([answer, ...cleanDistractors]).slice(0, 4));
}

function choiceValue(choice) {
  return typeof choice === "object" ? choice.value : choice;
}

function choiceText(choice) {
  return typeof choice === "object" ? choice.text : choice;
}

function choicePinyin(choice) {
  return typeof choice === "object" ? choice.pinyin : "";
}

function meaningChoice(value) {
  const text = String(value || "");
  return { value: text, text, kind: "meaning" };
}

function pinyinForMeaningChoice(value, fallback = "") {
  const text = String(value || "").trim();
  const vocabByWord = vocab.find((item) => item.word === text);
  if (vocabByWord) return vocabByWord.pinyin;
  const vocabByMeaning = vocab.find((item) => normalizeText(item.meaning) === normalizeText(text));
  if (vocabByMeaning) return vocabByMeaning.pinyin;
  return PINYIN_HINTS[text] || fallback || "";
}

function uniqueMeaningChoices(choices) {
  const seen = new Set();
  return choices.filter((choice) => {
    const key = normalizeText(choice.value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function annotatedMeaningHtml(text) {
  const source = String(text || "");
  const converter = window.pinyinPro && window.pinyinPro.pinyin;
  if (!converter) return escapeHtml(source);

  try {
    const parts = converter(source, { type: "all", toneType: "symbol" });
    if (!Array.isArray(parts)) return escapeHtml(source);
    return parts
      .map((part) => {
        const char = part.origin || "";
        if (/[\u4e00-\u9fff]/.test(char) && part.pinyin) {
          return `<ruby class="hanzi-ruby"><span class="ruby-char">${escapeHtml(char)}</span><rt>${escapeHtml(part.pinyin)}</rt></ruby>`;
        }
        return `<span class="meaning-punctuation">${escapeHtml(char)}</span>`;
      })
      .join("");
  } catch {
    return escapeHtml(source);
  }
}

function buildCollocationDistractors(item, correct) {
  const word = item.word;
  const type = item.type || "";
  const patterns = {
    名词: [`正在${word}`, `很${word}`, `我${word}你`, `${word}地跑`, `把${word}一下`],
    动词: [`一个${word}`, `很${word}`, `${word}的颜色`, `这本${word}`, `我的${word}`],
    形容词: [`正在${word}`, `一个${word}`, `我${word}你`, `把${word}一下`, `${word}地东西`],
    代词: [`正在${word}`, `很${word}`, `一个${word}`, `${word}的颜色`, `${word}地跑`],
  };
  const generic = type === "形容词"
    ? [`正在${word}`, `一个${word}`, `我${word}你`, `把${word}一下`, `${word}地东西`]
    : [`正在${word}`, `很${word}`, `一个${word}`, `我${word}你`, `${word}的颜色`, `${word}地跑`];
  return removePartOfSpeechChoices(unique([...(patterns[type] || generic), ...generic])).filter((choice) => normalizeText(choice) !== normalizeText(correct));
}

async function init() {
  vocab = vocab.map(normalizeVocabItem);
  saveJson(STORAGE_KEYS.vocab, vocab);
  await loadServerState();
  students = normalizeStudentList(students).length ? normalizeStudentList(students) : DEFAULT_STUDENTS;
  renderTabs();
  renderModes();
  renderMathOperations();
  renderMathTopics();
  renderSelectors();
  renderTeacher();
  bindEvents();
  renderDashboard();
}

function renderTabs() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      showView(tab.dataset.view);
    });
  });

  $$("[data-home-view]").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.homeView);
    });
  });
}

function showView(view) {
  if (view === "teacher" && !isTeacherUnlocked()) {
    openTeacherPasswordModal();
    return;
  }

  $$(".tab").forEach((item) => item.classList.remove("active"));
  $$(".view").forEach((item) => item.classList.remove("active"));

  $(`#${view}-view`).classList.add("active");
  const isVocabView = ["practice", "teacher", "dashboard"].includes(view);
  $("#vocab-tabs").classList.toggle("hidden", !isVocabView);

  const subject = view === "math" ? "math" : view === "profile" ? "profile" : isVocabView ? "vocab" : "home";
  const subjectTab = $(`[data-subject="${subject}"]`);
  if (subjectTab) subjectTab.classList.add("active");

  const vocabTab = $(`[data-vocab-tab="${view}"]`);
  if (vocabTab) vocabTab.classList.add("active");

  if (view === "dashboard") renderDashboard();
  if (view === "profile") renderProfile();
}

function isTeacherUnlocked() {
  return sessionStorage.getItem("grade3_teacher_unlocked") === "yes";
}

function openTeacherPasswordModal() {
  $("#teacher-password-modal").classList.remove("hidden");
  $("#teacher-password-input").value = "";
  $("#teacher-password-message").textContent = "";
  setTimeout(() => $("#teacher-password-input").focus(), 0);
}

function closeTeacherPasswordModal() {
  $("#teacher-password-modal").classList.add("hidden");
}

function submitTeacherPassword() {
  if ($("#teacher-password-input").value === TEACHER_PASSWORD) {
    sessionStorage.setItem("grade3_teacher_unlocked", "yes");
    closeTeacherPasswordModal();
    showView("teacher");
    return;
  }
  $("#teacher-password-message").textContent = "密码不对。";
  $("#teacher-password-input").select();
}

function renderModes() {
  const grid = $("#mode-grid");
  grid.innerHTML = "";
  MODES.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `mode-option ${mode.id === selectedMode ? "active" : ""}`;
    button.innerHTML = `<span class="mode-icon">${mode.icon}</span><strong>${mode.name}</strong>`;
    button.addEventListener("click", () => {
      selectedMode = mode.id;
      renderModes();
      startQuiz();
    });
    grid.appendChild(button);
  });
}

function renderMathOperations() {
  const grid = $("#math-operation-grid");
  grid.innerHTML = "";
  MATH_OPERATIONS.forEach((operation) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `operation-option ${operation.id === selectedMathOperation ? "active" : ""}`;
    button.innerHTML = `<span class="operation-icon">${operation.icon}</span><strong>${operation.name}</strong>`;
    button.addEventListener("click", () => {
      selectedMathOperation = operation.id;
      selectedMathTopic = MATH_TOPICS[operation.id][0];
      renderMathOperations();
      renderMathTopics();
      resetMathQuestion();
    });
    grid.appendChild(button);
  });
}

function renderMathTopics() {
  const grid = $("#math-topic-grid");
  grid.innerHTML = "";
  MATH_TOPICS[selectedMathOperation].forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `topic-option ${topic.id === selectedMathTopic.id ? "active" : ""}`;
    button.textContent = topic.name;
    button.addEventListener("click", () => {
      selectedMathTopic = topic;
      renderMathTopics();
      startMathQuestion();
    });
    grid.appendChild(button);
  });
}

function renderSelectors() {
  const savedStudent = localStorage.getItem("grade3_current_student") || "";
  $("#student-id-input").value = savedStudent;
  $("#math-student-id-input").value = savedStudent;
  $("#profile-student-input").value = savedStudent;
  const units = unique(vocab.map((item) => item.unit));
  $("#unit-select").innerHTML = `<option value="">请选择单元</option>${units.map((unit) => `<option>${escapeHtml(unit)}</option>`).join("")}`;
}

function renderTeacher() {
  $("#vocab-input").value = serializeVocab(vocab);
  $("#student-input").value = students.join("\n");
  renderRecordingUnitFilter();
  renderRecordingList();
}

function renderRecordingUnitFilter() {
  const filter = $("#recording-unit-filter");
  const current = filter.value || "全部单元";
  const units = unique(vocab.map((item) => item.unit));
  filter.innerHTML = [`<option>全部单元</option>`, ...units.map((unit) => `<option>${escapeHtml(unit)}</option>`)].join("");
  filter.value = units.includes(current) ? current : "全部单元";
}

async function renderRecordingList() {
  const list = $("#recording-list");
  if (!list) return;
  if (!window.indexedDB) {
    list.innerHTML = `<p class="help">这个浏览器不能保存录音。请用 Chrome 或 Safari。</p>`;
    return;
  }
  const unit = $("#recording-unit-filter").value || "全部单元";
  const rows = vocab.filter((item) => unit === "全部单元" || item.unit === unit);
  if (!rows.length) {
    list.innerHTML = `<p class="help">还没有词语。请先导入词语。</p>`;
    return;
  }

  let savedKeys = new Set();
  try {
    savedKeys = new Set(await listAudioKeys());
  } catch {
    list.innerHTML = `<p class="help">录音保存区打不开。请刷新网页再试。</p>`;
    return;
  }
  list.innerHTML = rows
    .map((item) => {
      const key = audioKey(item);
      const saved = savedKeys.has(key);
      return `
        <div class="recording-row" data-audio-key="${escapeHtml(key)}">
          <div class="recording-word">${escapeHtml(item.word)}<span>${escapeHtml(item.pinyin)} · ${escapeHtml(item.unit)}</span></div>
          <div class="recording-status ${saved ? "done" : ""}">${saved ? "已录音" : "还没录音"}</div>
          <div class="recording-actions">
            <button class="secondary-btn" data-record-action="record">录音</button>
            <button class="secondary-btn hidden" data-record-action="stop">停止</button>
            <button class="secondary-btn" data-record-action="play" ${saved ? "" : "disabled"}>试听</button>
            <button class="danger-btn" data-record-action="delete" ${saved ? "" : "disabled"}>删除</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function bindEvents() {
  $("#check-btn").addEventListener("click", checkAnswer);
  $("#next-btn").addEventListener("click", nextQuestion);
  $("#speak-btn").addEventListener("click", () => playWordAudio(quiz.current?.item));
  $("#import-btn").addEventListener("click", importVocab);
  $("#sample-btn").addEventListener("click", () => {
    $("#vocab-input").value = SAMPLE_TEXT;
  });
  $("#save-students-btn").addEventListener("click", saveStudents);
  $("#download-vocab-btn").addEventListener("click", () => downloadFile("三年级词库.csv", serializeVocab(vocab)));
  $("#recording-unit-filter").addEventListener("change", renderRecordingList);
  $("#recording-list").addEventListener("click", handleRecordingClick);
  $("#export-csv-btn").addEventListener("click", exportAttempts);
  $("#reset-data-btn").addEventListener("click", resetAttempts);
  $("#math-check-btn").addEventListener("click", checkMathAnswer);
  $("#math-next-btn").addEventListener("click", startMathQuestion);
  $("#math-answer").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !$("#math-check-btn").disabled) checkMathAnswer();
  });
  $("#teacher-password-submit").addEventListener("click", submitTeacherPassword);
  $("#teacher-password-cancel").addEventListener("click", closeTeacherPasswordModal);
  $("#teacher-password-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitTeacherPassword();
  });
  $("#student-id-input").addEventListener("input", syncStudentInputs);
  $("#math-student-id-input").addEventListener("input", syncStudentInputs);
  $("#profile-student-input").addEventListener("input", syncStudentInputs);
  $("#profile-refresh-btn").addEventListener("click", renderProfile);
  $("#unit-select").addEventListener("change", clearSetupWarning);
}

function syncStudentInputs(event) {
  const value = formatStudentNumber(event.target.value);
  $("#student-id-input").value = value;
  $("#math-student-id-input").value = value;
  $("#profile-student-input").value = value;
  localStorage.setItem("grade3_current_student", value);
  clearSetupWarning();
}

async function handleRecordingClick(event) {
  const button = event.target.closest("[data-record-action]");
  if (!button) return;
  const row = button.closest(".recording-row");
  const key = row?.dataset.audioKey;
  if (!key) return;
  const action = button.dataset.recordAction;

  if (action === "record") await startRecording(row, key);
  if (action === "stop") stopRecording();
  if (action === "play") await playSavedAudio(key);
  if (action === "delete") await deleteRecording(key);
}

async function startRecording(row, key) {
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    setRecordingMessage("这个浏览器不能录音。请用 Chrome 或 Safari。");
    return;
  }
  if (activeRecorder) {
    setRecordingMessage("请先点“停止”，再录下一个词。");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    activeRecordingKey = key;
    activeRecordingChunks = [];
    activeRecorder = new MediaRecorder(stream);
    activeRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) activeRecordingChunks.push(event.data);
    });
    activeRecorder.addEventListener("stop", async () => {
      const blob = new Blob(activeRecordingChunks, { type: activeRecorder.mimeType || "audio/webm" });
      stream.getTracks().forEach((track) => track.stop());
      await saveAudioBlob(activeRecordingKey, blob);
      activeRecorder = null;
      activeRecordingKey = "";
      activeRecordingChunks = [];
      setRecordingMessage("录音已保存。");
      renderRecordingList();
    });
    activeRecorder.start();
    row.querySelector(".recording-status").textContent = "正在录音";
    row.querySelector(".recording-status").className = "recording-status active";
    row.querySelector('[data-record-action="record"]').classList.add("hidden");
    row.querySelector('[data-record-action="stop"]').classList.remove("hidden");
    setRecordingMessage("正在录音，请清楚读这个词。");
  } catch {
    setRecordingMessage("没有打开麦克风权限，所以不能录音。");
  }
}

function stopRecording() {
  if (activeRecorder && activeRecorder.state !== "inactive") activeRecorder.stop();
}

async function deleteRecording(key) {
  await deleteAudioBlob(key);
  setRecordingMessage("录音已删除。");
  renderRecordingList();
}

function setRecordingMessage(message) {
  $("#recording-message").textContent = message;
}

function clearSetupWarning() {
  $("#setup-warning").textContent = "";
}

function formatStudentNumber(value) {
  return String(value || "")
    .replace(/\D/g, "")
    .slice(0, 2);
}

function normalizeStudentList(values) {
  return unique(
    values
      .map((value) => formatStudentNumber(value))
      .filter(Boolean)
      .map((value) => value.padStart(2, "0")),
  );
}

function getStudentNumber() {
  const raw = formatStudentNumber($("#student-id-input").value || $("#math-student-id-input").value || $("#profile-student-input").value);
  return raw.length === 1 ? raw.padStart(2, "0") : raw;
}

function requireStudentNumber(feedbackSelector) {
  const student = getStudentNumber();
  if (!student) {
    $(feedbackSelector).textContent = "请先填写学生号码，比如 1 号写 01，11 号写 11。";
    $(feedbackSelector).className = "feedback no";
    return "";
  }
  $("#student-id-input").value = student;
  $("#math-student-id-input").value = student;
  localStorage.setItem("grade3_current_student", student);
  return student;
}

function startQuiz() {
  const student = getStudentNumber();
  const unit = $("#unit-select").value;
  if (!student || !unit) {
    $("#setup-warning").textContent = "请写学号和选单元！";
    return;
  }
  requireStudentNumber("#feedback");
  clearSetupWarning();
  const pool = vocab.filter((item) => item.unit === unit && (selectedMode !== "collocation" || item.collocations.length));
  if (!pool.length) {
    $("#feedback").textContent = selectedMode === "collocation" ? "这个单元还没有合适的词语，请先在教师词语表里填写。" : "这个单元还没有词语。";
    $("#feedback").className = "feedback no";
    return;
  }
  quiz = { items: buildPracticeItems(pool), index: 0, current: null, locked: false, selected: "", finished: false };
  $("#next-btn").textContent = "下一题";
  nextQuestion();
}

function buildPracticeItems(pool) {
  const shuffled = shuffle(pool);
  return Array.from({ length: QUESTIONS_PER_PRACTICE }, (_, index) => shuffled[index % shuffled.length]);
}

function nextQuestion() {
  if (quiz.finished) {
    finishVocabPractice();
    return;
  }
  if (!quiz.items.length) return;
  quiz.locked = false;
  quiz.selected = "";
  $("#feedback").textContent = "";
  $("#feedback").className = "feedback";
  $("#check-btn").disabled = false;
  $("#next-btn").textContent = "下一题";
  $("#next-btn").disabled = true;
  $("#next-btn").classList.add("hidden");
  quiz.current = buildQuestion(quiz.items[quiz.index], selectedMode);
  renderQuestion();
}

function finishVocabPractice() {
  quiz.finished = true;
  quiz.current = null;
  $("#quiz-progress").textContent = `${QUESTIONS_PER_PRACTICE} / ${QUESTIONS_PER_PRACTICE}`;
  $("#feedback").textContent = "恭喜你完成本练习！请你选择下一个！";
  $("#feedback").className = "feedback ok";
  $("#question-label").textContent = "练习完成";
  $("#question-text").textContent = "请在左边选择下一个练习";
  $("#tone-song").classList.add("hidden");
  $("#answer-area").innerHTML = "";
  $("#check-btn").disabled = true;
  $("#next-btn").textContent = "下一题";
  $("#next-btn").disabled = true;
  $("#next-btn").classList.add("hidden");
  $("#speak-btn").classList.add("hidden");
}

function buildQuestion(item, mode) {
  if (mode === "meaning") {
    const oppositeChoice = shuffle(cleanMeaningChoices(item.opposite, item.meaning))[0];
    const sameUnitItems = shuffle(vocab.filter((v) => v.unit === item.unit && v.word !== item.word));
    const otherItems = shuffle(vocab.filter((v) => v.unit !== item.unit && v.word !== item.word));
    const choices = uniqueMeaningChoices([
      meaningChoice(item.meaning),
      meaningChoice(oppositeChoice),
      ...sameUnitItems.map((v) => meaningChoice(v.meaning)),
      ...otherItems.map((v) => meaningChoice(v.meaning)),
      ...MEANING_BACKUPS.map((meaning) => meaningChoice(meaning)),
    ]).filter((choice, index) => index === 0 || normalizeText(choice.value) !== normalizeText(item.meaning));
    return { item, mode, prompt: item.word, label: "选出这个词的意思", answer: item.meaning, choices: shuffle([choices[0], ...choices.slice(1, 4)]) };
  }

  if (mode === "pinyin") {
    const generated = buildPinyinDistractors(item.pinyin);
    const answer = normalizePinyin(item.pinyin);
    const other = vocab.filter((v) => v.word !== item.word).map((v) => normalizePinyin(v.pinyin));
    return { item, mode, prompt: item.word, label: "选出这个词的拼音", answer, choices: buildFourChoices(answer, generated, other, PINYIN_BACKUPS) };
  }

  if (mode === "dictation") {
    return { item, mode, prompt: "听声音，写出词语", label: "听写词语", answer: item.word, choices: [] };
  }

  const correct = item.collocations[0];
  const distractors = buildCollocationDistractors(item, correct).slice(0, 3);
  return { item, mode, prompt: item.word, label: "选对的用法", answer: correct, choices: buildFourChoices(correct, distractors, buildCollocationDistractors(item, correct), COLLOCATION_BACKUPS) };
}

function buildPinyinDistractors(pinyin) {
  pinyin = normalizePinyin(pinyin);
  const toneMap = { ā: "á", á: "ǎ", ǎ: "à", à: "ā", ē: "é", é: "ě", ě: "è", è: "ē", ī: "í", í: "ǐ", ǐ: "ì", ì: "ī", ō: "ó", ó: "ǒ", ǒ: "ò", ò: "ō", ū: "ú", ú: "ǔ", ǔ: "ù", ù: "ū", ǖ: "ǘ", ǘ: "ǚ", ǚ: "ǜ", ǜ: "ǖ" };
  const initialPairs = [["zh", "z"], ["ch", "c"], ["sh", "s"], ["l", "n"], ["f", "h"], ["q", "x"], ["j", "q"]];
  const finals = [["an", "ang"], ["en", "eng"], ["in", "ing"], ["ian", "iang"], ["uan", "uang"]];
  const changeTonePosition = moveToneToWrongVowel(pinyin);
  const changeTone = pinyin.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/, (m) => toneMap[m] || m);
  const changeInitial = replacePair(pinyin, initialPairs);
  const changeFinal = replacePair(pinyin, finals);
  return unique([changeTonePosition, changeTone, changeInitial, changeFinal]);
}

function moveToneToWrongVowel(pinyin) {
  const toneInfo = {
    ā: ["a", 1], á: ["a", 2], ǎ: ["a", 3], à: ["a", 4],
    ē: ["e", 1], é: ["e", 2], ě: ["e", 3], è: ["e", 4],
    ī: ["i", 1], í: ["i", 2], ǐ: ["i", 3], ì: ["i", 4],
    ō: ["o", 1], ó: ["o", 2], ǒ: ["o", 3], ò: ["o", 4],
    ū: ["u", 1], ú: ["u", 2], ǔ: ["u", 3], ù: ["u", 4],
    ǖ: ["ü", 1], ǘ: ["ü", 2], ǚ: ["ü", 3], ǜ: ["ü", 4],
  };
  const toneMark = {
    a: ["", "ā", "á", "ǎ", "à"],
    e: ["", "ē", "é", "ě", "è"],
    i: ["", "ī", "í", "ǐ", "ì"],
    o: ["", "ō", "ó", "ǒ", "ò"],
    u: ["", "ū", "ú", "ǔ", "ù"],
    ü: ["", "ǖ", "ǘ", "ǚ", "ǜ"],
  };
  const vowels = "aeiouü";
  const parts = pinyin.split(/(\s+)/);

  for (let partIndex = 0; partIndex < parts.length; partIndex += 1) {
    const syllable = parts[partIndex];
    const chars = [...syllable];
    const toneIndex = chars.findIndex((char) => toneInfo[char]);
    if (toneIndex === -1) continue;

    const [base, tone] = toneInfo[chars[toneIndex]];
    const targetIndex = chars.findIndex((char, index) => index !== toneIndex && vowels.includes(char));
    if (targetIndex === -1) continue;

    chars[toneIndex] = base;
    chars[targetIndex] = toneMark[chars[targetIndex]][tone];
    parts[partIndex] = chars.join("");
    return parts.join("");
  }

  return "";
}

function replacePair(value, pairs) {
  for (const [from, to] of pairs) {
    const pattern = new RegExp(`\\b${from}`);
    if (pattern.test(value)) return value.replace(pattern, to);
    const reverse = new RegExp(`\\b${to}`);
    if (reverse.test(value)) return value.replace(reverse, from);
  }
  return "";
}

function digitRange(digits) {
  return {
    min: digits === 2 ? 10 : 100,
    max: digits === 2 ? 99 : 999,
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom(values) {
  return values[randomInt(0, values.length - 1)];
}

function startMathQuestion() {
  if (!requireStudentNumber("#math-feedback")) return;
  if (mathQuiz.count >= QUESTIONS_PER_PRACTICE) {
    finishMathPractice();
    return;
  }
  const question = buildMathQuestion(selectedMathOperation, selectedMathTopic);
  mathQuiz = { current: question, count: mathQuiz.count + 1, locked: false, wrongTries: 0 };
  $("#math-mode").textContent = `${operationName(selectedMathOperation)} · ${selectedMathTopic.name}`;
  $("#math-progress").textContent = `${mathQuiz.count} / ${QUESTIONS_PER_PRACTICE}`;
  $("#math-question-label").textContent = selectedMathTopic.name;
  $("#math-question-text").textContent = question.text;
  $("#math-answer").value = "";
  $("#math-answer").disabled = false;
  $("#math-feedback").textContent = "";
  $("#math-feedback").className = "feedback";
  $("#math-check-btn").disabled = false;
  $("#math-next-btn").disabled = true;
  $("#math-next-btn").classList.add("hidden");
  $("#math-answer").focus();
}

function finishMathPractice() {
  mathQuiz = { current: null, count: QUESTIONS_PER_PRACTICE, locked: true, wrongTries: 0 };
  $("#math-progress").textContent = `${QUESTIONS_PER_PRACTICE} / ${QUESTIONS_PER_PRACTICE}`;
  $("#math-feedback").textContent = "恭喜你完成本练习！请你选择下一个！";
  $("#math-feedback").className = "feedback ok";
  $("#math-question-label").textContent = "练习完成";
  $("#math-question-text").textContent = "请在左边选择下一个练习";
  $("#math-answer").value = "";
  $("#math-answer").disabled = true;
  $("#math-check-btn").disabled = true;
  $("#math-next-btn").disabled = true;
  $("#math-next-btn").classList.add("hidden");
}

function resetMathQuestion() {
  mathQuiz = { current: null, count: 0, locked: false, wrongTries: 0 };
  $("#math-mode").textContent = `${operationName(selectedMathOperation)} · 请选择一个练习`;
  $("#math-progress").textContent = "0 / 0";
  $("#math-question-label").textContent = "先选择一个练习。";
  $("#math-question-text").textContent = "数学练习";
  $("#math-answer").value = "";
  $("#math-answer").disabled = false;
  $("#math-feedback").textContent = "";
  $("#math-feedback").className = "feedback";
  $("#math-check-btn").disabled = true;
  $("#math-next-btn").disabled = true;
  $("#math-next-btn").classList.add("hidden");
}

function buildMathQuestion(operation, topic) {
  if (operation === "add") {
    const [leftDigits, rightDigits] = topic.digits;
    const leftRange = digitRange(leftDigits);
    const rightRange = digitRange(rightDigits);
    const left = randomInt(leftRange.min, leftRange.max);
    const right = randomInt(rightRange.min, rightRange.max);
    return { operation, left, right, text: `${left} + ${right} =`, answer: left + right };
  }

  if (operation === "subtract") {
    const [leftDigits, rightDigits] = topic.digits;
    const leftRange = digitRange(leftDigits);
    const rightRange = digitRange(rightDigits);
    let left = randomInt(leftRange.min, leftRange.max);
    let right = randomInt(rightRange.min, rightRange.max);
    if (right > left) [left, right] = [right, left];
    return { operation, left, right, text: `${left} - ${right} =`, answer: left - right };
  }

  if (operation === "multiply") {
    const left = randomFrom(topic.factors);
    const right = randomInt(1, 10);
    return { operation, left, right, text: `${left} × ${right} =`, answer: left * right };
  }

  const divisor = randomFrom(topic.factors);
  const quotient = randomInt(1, 10);
  return { operation, left: divisor * quotient, right: divisor, quotient, text: `${divisor * quotient} ÷ ${divisor} =`, answer: quotient };
}

function checkMathAnswer() {
  if (!mathQuiz.current || mathQuiz.locked) return;
  const student = requireStudentNumber("#math-feedback");
  if (!student) return;
  const answerText = $("#math-answer").value.trim();
  const value = Number(answerText);
  const correct = Number.isFinite(value) && value === mathQuiz.current.answer;
  const finalWrong = !correct && mathQuiz.wrongTries >= 1;
  if (!correct) mathQuiz.wrongTries += 1;

  $("#math-feedback").className = `feedback ${correct ? "ok" : "no"}`;
  if (correct) {
    mathQuiz.locked = true;
    $("#math-feedback").textContent = "你真棒！";
    $("#math-answer").disabled = true;
    $("#math-check-btn").disabled = true;
    $("#math-next-btn").disabled = true;
    $("#math-next-btn").classList.add("hidden");
  } else if (finalWrong) {
    mathQuiz.locked = true;
    $("#math-feedback").innerHTML = buildMathSolutionHtml(mathQuiz.current);
    $("#math-answer").disabled = true;
    $("#math-check-btn").disabled = true;
    $("#math-next-btn").disabled = false;
    $("#math-next-btn").classList.remove("hidden");
  } else {
    $("#math-feedback").textContent = "加油加油啊！再来一次！";
    $("#math-answer").value = "";
    $("#math-answer").disabled = false;
    $("#math-check-btn").disabled = false;
    $("#math-next-btn").disabled = true;
    $("#math-next-btn").classList.add("hidden");
    $("#math-answer").focus();
  }

  const attempt = {
    subject: "math",
    time: new Date().toISOString(),
    student,
    operation: selectedMathOperation,
    topic: selectedMathTopic.name,
    problem: mathQuiz.current.text,
    answer: answerText,
    correctAnswer: mathQuiz.current.answer,
    correct,
    tryNumber: correct ? mathQuiz.wrongTries + 1 : mathQuiz.wrongTries,
  };
  attempts.push(attempt);
  saveJson(STORAGE_KEYS.attempts, attempts);
  postServerAttempt(attempt);

  if (correct) {
    setTimeout(startMathQuestion, 800);
  }
}

function buildMathSolutionHtml(question) {
  const header = `<strong>加油加油啊！正确答案：${question.answer}</strong>`;
  if (question.operation === "add") return `${header}${buildVerticalAddHtml(question.left, question.right)}`;
  if (question.operation === "subtract") return `${header}${buildVerticalSubtractHtml(question.left, question.right)}`;
  if (question.operation === "multiply") return `${header}${buildMultiplyStepsHtml(question.left, question.right)}`;
  return `${header}${buildDivideStepsHtml(question.left, question.right, question.answer)}`;
}

function buildVerticalAddHtml(left, right) {
  const answer = left + right;
  const width = Math.max(String(left).length, String(right).length, String(answer).length) + 2;
  const steps = additionSteps(left, right);
  const makeTen = additionMakeWholeStep(left, right);
  return `
    <div class="math-steps">
      ${makeTen ? `<p>${makeTen}</p>` : ""}
      <pre>${String(left).padStart(width)}
+ ${String(right).padStart(width - 2)}
${"-".repeat(width)}
${String(answer).padStart(width)}</pre>
      <p>${steps.join(" ")}</p>
    </div>
  `;
}

function buildVerticalSubtractHtml(left, right) {
  const answer = left - right;
  const width = Math.max(String(left).length, String(right).length, String(answer).length) + 2;
  const steps = subtractionSteps(left, right);
  return `
    <div class="math-steps">
      <pre>${String(left).padStart(width)}
- ${String(right).padStart(width - 2)}
${"-".repeat(width)}
${String(answer).padStart(width)}</pre>
      <p>${steps.join(" ")}</p>
    </div>
  `;
}

function additionMakeWholeStep(left, right) {
  const leftNext = nextWholeNumber(left);
  const rightNext = nextWholeNumber(right);
  if (!leftNext || !rightNext) return "";
  const leftAdd = leftNext - left;
  const rightAdd = rightNext - right;
  const wholeSum = leftNext + rightNext;
  const answer = left + right;
  return `也可以用凑整法：(${left} + ${leftAdd}) + (${right} + ${rightAdd}) - ${leftAdd + rightAdd} = ${wholeSum} - ${leftAdd + rightAdd} = ${answer}`;
}

function nextWholeNumber(value) {
  const base = value >= 90 ? 100 : 10;
  const remainder = value % base;
  if (!remainder) return 0;
  const add = base - remainder;
  return add <= 2 ? value + add : 0;
}

function additionSteps(left, right) {
  const places = ["个位", "十位", "百位"];
  const leftDigits = String(left).split("").reverse().map(Number);
  const rightDigits = String(right).split("").reverse().map(Number);
  const maxLength = Math.max(leftDigits.length, rightDigits.length);
  const steps = [];
  let carry = 0;

  for (let index = 0; index < maxLength; index += 1) {
    const a = leftDigits[index] || 0;
    const b = rightDigits[index] || 0;
    const sum = a + b + carry;
    const place = places[index] || "这一位";
    if (sum >= 10) {
      steps.push(`${place}：${a} + ${b}${carry ? ` + ${carry}` : ""} = ${sum}，写 ${sum % 10}，向前一位进 1。`);
      carry = 1;
    } else {
      steps.push(`${place}：${a} + ${b}${carry ? ` + ${carry}` : ""} = ${sum}，写 ${sum % 10}。`);
      carry = 0;
    }
  }

  if (carry) steps.push(`${places[maxLength] || "前一位"}写 1。`);

  return steps;
}

function subtractionSteps(left, right) {
  const places = ["个位", "十位", "百位"];
  const top = String(left).split("").reverse().map(Number);
  const bottom = String(right).split("").reverse().map(Number);
  const maxLength = Math.max(top.length, bottom.length);
  const steps = [];

  for (let index = 0; index < maxLength; index += 1) {
    let a = top[index] || 0;
    const b = bottom[index] || 0;
    const place = places[index] || "这一位";
    if (a < b) {
      top[index + 1] = (top[index + 1] || 0) - 1;
      a += 10;
      steps.push(`${place}不够减，向前一位借 1，变成 ${a} - ${b} = ${a - b}。`);
    } else {
      steps.push(`${place}：${a} - ${b} = ${a - b}。`);
    }
  }

  return steps;
}

function buildMultiplyStepsHtml(left, right) {
  const split = right > 5 ? [5, right - 5] : [right, 0];
  const detail = split[1]
    ? `${left} × ${right} = ${left} × ${split[0]} + ${left} × ${split[1]} = ${left * split[0]} + ${left * split[1]} = ${left * right}`
    : `${left} 行，每行 ${right} 个，一共有 ${left} × ${right} = ${left * right} 个。`;
  return `
    <div class="math-steps">
      <p>可以想成阵列图：${left} 行，每行 ${right} 个。</p>
      <p>${detail}</p>
    </div>
  `;
}

function buildDivideStepsHtml(dividend, divisor, quotient) {
  return `
    <div class="math-steps">
      <p>可以想成分组：把 ${dividend} 个东西，每 ${divisor} 个分一组。</p>
      <p>因为 ${divisor} × ${quotient} = ${dividend}，所以 ${dividend} ÷ ${divisor} = ${quotient}。</p>
    </div>
  `;
}

function operationName(id) {
  return MATH_OPERATIONS.find((operation) => operation.id === id)?.name || "";
}

function renderQuestion() {
  const question = quiz.current;
  const mode = MODES.find((item) => item.id === question.mode);
  $("#quiz-mode").textContent = mode.name;
  $("#quiz-progress").textContent = `${quiz.index + 1} / ${quiz.items.length}`;
  $("#question-label").textContent = question.label;
  $("#question-text").textContent = question.prompt;
  $("#tone-song").classList.toggle("hidden", question.mode !== "pinyin");
  $("#speak-btn").classList.toggle("hidden", question.mode !== "dictation");

  const area = $("#answer-area");
  area.innerHTML = "";
  if (question.mode === "dictation") {
    const input = document.createElement("input");
    input.className = "text-answer";
    input.placeholder = "请输入听到的词语";
    input.autocomplete = "off";
    input.addEventListener("input", () => {
      quiz.selected = input.value;
    });
    area.appendChild(input);
    setTimeout(() => playWordAudio(question.item), 350);
    input.focus();
    return;
  }

  const choices = document.createElement("div");
  choices.className = "choices";
  question.choices.forEach((choice) => {
    const button = $("#choice-template").content.firstElementChild.cloneNode(true);
    const pinyin = choicePinyin(choice);
    if (question.mode === "meaning") {
      button.classList.add("meaning-choice-btn");
      button.innerHTML = annotatedMeaningHtml(choiceText(choice));
    } else {
      button.innerHTML = pinyin ? `<span class="choice-main">${escapeHtml(choiceText(choice))}</span><span class="choice-pinyin">${escapeHtml(pinyin)}</span>` : escapeHtml(choiceText(choice));
    }
    button.dataset.value = choiceValue(choice);
    button.addEventListener("click", () => {
      if (quiz.locked) return;
      quiz.selected = choiceValue(choice);
      $$(".choice-btn").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
    choices.appendChild(button);
  });
  area.appendChild(choices);
}

function checkAnswer() {
  if (quiz.locked || !quiz.current) return;
  const student = requireStudentNumber("#feedback");
  if (!student) return;
  const answer = quiz.current.answer;
  const correct = normalizeText(quiz.selected) === normalizeText(answer);
  quiz.locked = true;
  $("#feedback").textContent = correct ? "你真棒！" : wrongFeedbackText(quiz.current, answer);
  $("#feedback").classList.add(correct ? "ok" : "no");
  $("#check-btn").disabled = true;
  $("#next-btn").disabled = correct;
  $("#next-btn").classList.toggle("hidden", correct);

  if (quiz.current.mode !== "dictation") {
    $$(".choice-btn").forEach((button) => {
      if (normalizeText(button.dataset.value || button.textContent) === normalizeText(answer)) button.classList.add("correct");
      if (button.classList.contains("selected") && !correct) button.classList.add("wrong");
    });
  }

  const attempt = {
    subject: "vocab",
    time: new Date().toISOString(),
    student,
    unit: quiz.current.item.unit,
    word: quiz.current.item.word,
    mode: quiz.current.mode,
    answer: quiz.selected,
    correctAnswer: answer,
    correct,
  };
  attempts.push(attempt);
  saveJson(STORAGE_KEYS.attempts, attempts);
  postServerAttempt(attempt);

  if (quiz.index < quiz.items.length - 1) {
    quiz.index += 1;
    if (correct) {
      setTimeout(nextQuestion, 800);
    }
  } else {
    quiz.finished = true;
    if (correct) {
      setTimeout(finishVocabPractice, 800);
    } else {
      $("#next-btn").textContent = "下一题";
      $("#next-btn").disabled = false;
      $("#next-btn").classList.remove("hidden");
    }
  }
}

function wrongFeedbackText(question, answer) {
  if (question.mode === "dictation") {
    return `加油加油啊！正确词语：${answer}`;
  }
  return "加油加油啊！";
}

function audioKey(item) {
  return `${item.unit}::${item.word}`;
}

function openAudioDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(AUDIO_DB_NAME, 1);
    request.addEventListener("upgradeneeded", () => {
      request.result.createObjectStore(AUDIO_STORE_NAME, { keyPath: "key" });
    });
    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function audioTransaction(mode, callback) {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(AUDIO_STORE_NAME, mode);
    const store = transaction.objectStore(AUDIO_STORE_NAME);
    const result = callback(store);
    transaction.addEventListener("complete", () => {
      db.close();
      resolve(result);
    });
    transaction.addEventListener("error", () => {
      db.close();
      reject(transaction.error);
    });
  });
}

async function saveAudioBlob(key, blob) {
  await audioTransaction("readwrite", (store) => {
    store.put({ key, blob, updatedAt: new Date().toISOString() });
  });
}

async function getAudioBlob(key) {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(AUDIO_STORE_NAME, "readonly");
    const request = transaction.objectStore(AUDIO_STORE_NAME).get(key);
    request.addEventListener("success", () => resolve(request.result?.blob || null));
    request.addEventListener("error", () => reject(request.error));
    transaction.addEventListener("complete", () => db.close());
  });
}

async function deleteAudioBlob(key) {
  await audioTransaction("readwrite", (store) => {
    store.delete(key);
  });
}

async function listAudioKeys() {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(AUDIO_STORE_NAME, "readonly");
    const request = transaction.objectStore(AUDIO_STORE_NAME).getAllKeys();
    request.addEventListener("success", () => resolve(request.result || []));
    request.addEventListener("error", () => reject(request.error));
    transaction.addEventListener("complete", () => db.close());
  });
}

async function playSavedAudio(key) {
  const blob = await getAudioBlob(key);
  if (!blob) return false;
  const url = URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.addEventListener("ended", () => URL.revokeObjectURL(url), { once: true });
  audio.addEventListener("error", () => URL.revokeObjectURL(url), { once: true });
  await audio.play();
  return true;
}

async function playWordAudio(item) {
  try {
    if (item && (await playSavedAudio(audioKey(item)))) return;
  } catch {
    // If a saved recording cannot play, fall back to browser speech.
  }
  speak(item?.word || "");
}

function speak(text) {
  if (!text || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function importVocab() {
  const parsed = parseVocab($("#vocab-input").value);
  if (!parsed.length) {
    alert("没有读到有效词汇，请检查格式。");
    return;
  }
  vocab = parsed;
  saveJson(STORAGE_KEYS.vocab, vocab);
  saveServerSection("/api/vocab", { vocab });
  renderSelectors();
  renderTeacher();
  alert(`已导入 ${vocab.length} 个词语。`);
}

function saveStudents() {
  const names = normalizeStudentList($("#student-input").value.split(/\n+/).map((name) => name.trim()));
  students = names.length ? names : DEFAULT_STUDENTS;
  saveJson(STORAGE_KEYS.students, students);
  saveServerSection("/api/students", { students });
  renderSelectors();
  alert(`已保存 ${students.length} 名学生。`);
}

function renderDashboard() {
  const vocabAttempts = attempts.filter((item) => item.subject !== "math");
  $("#total-attempts").textContent = vocabAttempts.length;
  const correctCount = vocabAttempts.filter((item) => item.correct).length;
  $("#overall-accuracy").textContent = vocabAttempts.length ? `${Math.round((correctCount / vocabAttempts.length) * 100)}%` : "0%";

  const wordRows = groupBy(vocabAttempts.filter((item) => !item.correct), (item) => item.word);
  $("#needs-review").textContent = Object.keys(wordRows).length;

  $("#student-stats").innerHTML = students
    .map((student) => {
      const rows = vocabAttempts.filter((item) => item.student === student);
      const right = rows.filter((item) => item.correct).length;
      const wrong = rows.length - right;
      const rate = rows.length ? `${Math.round((right / rows.length) * 100)}%` : "-";
      return `<tr><td>${escapeHtml(student)}</td><td>${rows.length}</td><td>${right}</td><td>${wrong}</td><td>${rate}</td></tr>`;
    })
    .join("");

  const ranked = Object.entries(wordRows)
    .map(([word, rows]) => ({ word, unit: rows[0]?.unit || "", wrong: rows.length, mode: topMode(rows) }))
    .sort((a, b) => b.wrong - a.wrong)
    .slice(0, 12);
  $("#word-stats").innerHTML = ranked.length
    ? ranked.map((row) => `<tr><td>${escapeHtml(row.word)}</td><td>${escapeHtml(row.unit)}</td><td>${row.wrong}</td><td>${modeName(row.mode)}</td></tr>`).join("")
    : `<tr><td colspan="4">还没有错误记录。</td></tr>`;
}

function renderProfile() {
  const student = getStudentNumber();
  $("#profile-student-input").value = student;
  if (!student) {
    $("#profile-message").textContent = "请先填写学生号码。";
    renderEmptyProfile();
    return;
  }

  $("#profile-message").textContent = "";
  const rows = attempts.filter((item) => item.student === student);
  const correct = rows.filter((item) => item.correct).length;
  const accuracy = rows.length ? Math.round((correct / rows.length) * 100) : 0;

  $("#profile-total").textContent = rows.length;
  $("#profile-accuracy").textContent = rows.length ? `${accuracy}%` : "0%";
  $("#profile-rank").textContent = profilePercentileText(student);
  renderNeedLists(rows);
}

function renderEmptyProfile() {
  $("#profile-total").textContent = "0";
  $("#profile-accuracy").textContent = "0%";
  $("#profile-rank").textContent = "-";
  $("#profile-vocab-list").innerHTML = `<div class="need-item">还没有记录<span>做完练习后，这里会显示要多练的词语。</span></div>`;
  $("#profile-math-list").innerHTML = `<div class="need-item">还没有记录<span>做完数学题后，这里会显示要多练的题型。</span></div>`;
  $("#profile-recent-list").innerHTML = `<div class="need-item">还没有错题<span>继续练习，系统会帮你整理。</span></div>`;
}

function renderNeedLists(rows) {
  const wrongRows = rows.filter((item) => !item.correct);
  const vocabWrong = wrongRows.filter((item) => item.subject !== "math");
  const mathWrong = wrongRows.filter((item) => item.subject === "math");
  const vocabItems = rankWrongItems(vocabWrong, (item) => `${item.word}｜${modeName(item.mode)}`).slice(0, 5);
  const mathItems = rankWrongItems(mathWrong, (item) => item.topic || operationName(item.operation)).slice(0, 5);
  const recentItems = wrongRows.slice(-5).reverse();

  $("#profile-vocab-list").innerHTML = vocabItems.length
    ? vocabItems.map((item) => `<div class="need-item">${escapeHtml(item.name)}<span>错了 ${item.count} 次</span></div>`).join("")
    : `<div class="need-item">中文很稳定<span>现在没有明显需要多练的中文词语。</span></div>`;

  $("#profile-math-list").innerHTML = mathItems.length
    ? mathItems.map((item) => `<div class="need-item">${escapeHtml(item.name)}<span>错了 ${item.count} 次</span></div>`).join("")
    : `<div class="need-item">数学很稳定<span>现在没有明显需要多练的数学题型。</span></div>`;

  $("#profile-recent-list").innerHTML = recentItems.length
    ? recentItems.map((item) => recentWrongHtml(item)).join("")
    : `<div class="need-item">还没有错题<span>保持下去。</span></div>`;
}

function rankWrongItems(rows, getName) {
  return Object.entries(groupBy(rows, getName))
    .map(([name, items]) => ({ name, count: items.length }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "zh-Hans"));
}

function recentWrongHtml(item) {
  if (item.subject === "math") {
    return `<div class="need-item">${escapeHtml(item.topic || operationName(item.operation))}<span>${escapeHtml(item.problem || "")} 你的答案：${escapeHtml(item.answer)}，正确答案：${escapeHtml(item.correctAnswer)}</span></div>`;
  }
  return `<div class="need-item">${escapeHtml(item.word)}｜${escapeHtml(modeName(item.mode))}<span>你的答案：${escapeHtml(item.answer)}，正确答案：${escapeHtml(item.correctAnswer)}</span></div>`;
}

function profilePercentileText(student) {
  const scores = students
    .map((id) => {
      const rows = attempts.filter((item) => item.student === id);
      const correct = rows.filter((item) => item.correct).length;
      return { id, total: rows.length, accuracy: rows.length ? correct / rows.length : 0 };
    })
    .filter((item) => item.total >= 5);
  const mine = scores.find((item) => item.id === student);
  if (!mine) return "做满5题后显示";
  const classmates = scores.filter((item) => item.id !== student);
  if (!classmates.length) return "还没有比较";
  const lower = classmates.filter((item) => mine.accuracy > item.accuracy).length;
  return `${Math.round((lower / classmates.length) * 100)}%`;
}

function groupBy(rows, getKey) {
  return rows.reduce((result, row) => {
    const key = getKey(row);
    result[key] = result[key] || [];
    result[key].push(row);
    return result;
  }, {});
}

function topMode(rows) {
  const grouped = groupBy(rows, (item) => item.mode);
  return Object.entries(grouped).sort((a, b) => b[1].length - a[1].length)[0]?.[0] || "";
}

function modeName(id) {
  return MODES.find((item) => item.id === id)?.name || id;
}

function exportAttempts() {
  const header = ["时间", "学生", "单元", "词语", "题型", "学生答案", "正确答案", "是否正确"];
  const rows = attempts.map((item) => [item.time, item.student, item.unit, item.word, modeName(item.mode), item.answer, item.correctAnswer, item.correct ? "正确" : "错误"]);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  downloadFile("三年级词汇练习记录.csv", csv);
}

function resetAttempts() {
  if (!confirm("确定清空所有答题记录吗？")) return;
  attempts = [];
  saveJson(STORAGE_KEYS.attempts, attempts);
  clearServerAttempts();
  renderDashboard();
}

async function loadServerState() {
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) return;
    const state = await response.json();
    apiAvailable = true;
    if (Array.isArray(state.vocab) && state.vocab.length) vocab = state.vocab.map(normalizeVocabItem);
    if (Array.isArray(state.students) && state.students.length) students = normalizeStudentList(state.students);
    if (Array.isArray(state.attempts)) attempts = state.attempts;
    saveJson(STORAGE_KEYS.vocab, vocab);
    saveJson(STORAGE_KEYS.students, students);
    saveJson(STORAGE_KEYS.attempts, attempts);
  } catch {
    apiAvailable = false;
  }
}

async function saveServerSection(url, payload) {
  if (!apiAvailable) return;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    apiAvailable = response.ok;
  } catch {
    apiAvailable = false;
  }
}

async function postServerAttempt(attempt) {
  if (apiAvailable) {
    try {
      const response = await fetch("/api/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attempt }),
      });
      apiAvailable = response.ok;
    } catch {
      apiAvailable = false;
    }
  }
  postGoogleSheetAttempt(attempt);
}

async function postGoogleSheetAttempt(attempt) {
  if (!GOOGLE_SHEET_WEB_APP_URL) return;
  try {
    await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ attempt }),
    });
  } catch {
    console.warn("Google Sheet logging failed.");
  }
}

async function clearServerAttempts() {
  if (!apiAvailable) return;
  try {
    const response = await fetch("/api/attempts", { method: "DELETE" });
    apiAvailable = response.ok;
  } catch {
    apiAvailable = false;
  }
}

function downloadFile(filename, content) {
  const blob = new Blob(["\ufeff", content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value || "").replace(/"/g, '""')}"`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

init();
