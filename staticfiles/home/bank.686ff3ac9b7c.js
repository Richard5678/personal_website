function changeLangBank(type) {
    changeLangNav(type);
    changeLangTitles(type);
    console.log(type);
    
    const heading = document.querySelector('#bank-heading');
    const date = document.querySelector('#bank-date');
    const intro = document.querySelector('#bank-intro');
    const motivation = document.querySelector('#bank-motivation');

    heading.textContent = bank[type].heading;
    date.textContent = bank[type].date;
    intro.textContent = bank[type].introduction;
    motivation.textContent = bank[type].motivation;

    for (let i = 1; i <= 17; i++) {
        const id = "body" + i.toString();
        var div = document.querySelector('#' + id);
        div.textContent = body[type][id];
    }
}

var bank = {
    "en": {
        "heading": "Central Bank vs. Department of Treasury",
        "date": "09/12/2021",
        "introduction": "This article is more of a opinion column on the topic of two most powerful financial institutions in a country.",
        "motivation": "I first got my hands onto Macro Economics in Grade 12. It was such a fascinating subject to me and I spent lots of time reading about related news and articles on the topic of Macro Economics." 
            + "I also felt extremely lucky to have learned some Macro Economics during this special period. While the whole world's economy has been greatly affected, lots of Macro Economics tools have been put into practice"
            + "by both the Department of Treasury and the Central Bank."
    },
    "zh": {
        "heading": "央行 vs. 财政部",
        "date": "09/12/2021",
        "introduction": "这篇文章更偏向于是我个人对于一个国家内最重要的两大金融机构的简介。",
        "motivation": "我在12年级第一个接触宏观经济。对我来说，它是梦幻的学科。从那以后我就开始阅读许多关于它的新闻与文章。" 
            + "同时，我也感到很幸运能够在这个特殊的时期学习宏观经济。正当全球的经济都遭到重创，许多宏观经济工具也被央行及财政部投入使用。"
    }
}

var body = {
    "en": {
        "body1": "Let us start by talking about the differences bewteen the central bank "
            + "and the department of treasury. Simply put, the Department of Treasury is responsible for "
            + "Fiscal Policy while the Central bank takes cares of Monetary Policy.",
        "body2": "Well you may then ask what are those two kinds of Economics Policies?",
        "body3": "Fiscal Policy: There are two kinds of fiscal policies:",
        "body4": "Change goverment spending",
        "body5": "Change taxes",
        "body6": "In addition, incrase in government spending or decrease in taxes will boost the economy and thus we call them expansionary fiscal policies. "
            + "On the other hand, decrease in government or increase in taxes are called contractionary fiscal policies since they push GDP down.",
        "body7": "Monetary Policy: There are mainly three kinds:",
        "body8": "Adjust Reverse Ratio/Requirement",
        "body9": "Adjust Interest Rate",
        "body10": "Open Market Operations",
        "body11": "Reserve Raio is the percentage of saving that commercial banks are not allowed to load out. "
            + "It will have a direct effect on the money multiler. To be specific, when reserve requirement is low, "
            + "more money will be loaded out and thus boost the economy and vice versa.",
        "body12": "Changing interest reate is straightforward. Low interest rate encourages lending and thus boost GDP and vice versa.",
        "body13": "The last one is Open market Operations which is actually the most commenlly used tool by the Central Bank. "
            + "It is essentially the action of buying/selling bonds into/out of the market. When the Central Bank buys bonds from the market, money flows into the market and hence boost the economy. "
            + "In contrast, selling bonds into the market decreases money supply and thus decrease the GDP.",
        "body14": "The three methods discussed above are the three main tools in the Central Bank's tool box. Normally, they are more than enough for an economy's normal operations. "
            + "However, during special times like the pandenmic, the Central Bank could also use tools like forward guidence to maintain confidence in the market. "
            + "Forward guidence is the method of telling the market in advance what the policy will be in advance which decreases the uncertainty and thus boost confidence.",
        "body15": "Now, we can start to compare their importance. While many textbooks says that the two institutions are responsible for two aspects of an economy and thus are incomparable, "
            + "I would argue that the Department of Treasury plays a more important role, espicially during crisis.",
        "body16": "During our daily life, the Central Bank may have played a more present role in terms of exposure. This is mainly because, its decision on interest rate and reserve requirement will direct affect the rate of returns on investment such that stocks. "
            + "However, they are more of a minor adjust to the economy. During crisis such as Covid and the 2008 great recession, all Central Bank can do is pull both the requirement and interest rate to 0 and buy as much bonds from the market as possible. "
            + "In fact, those tools are really limited espicially in a low-interest environment in the past decade. On the other hand, the department of treasury can step in at any time and inject unlimited amount capital into the market. "
            + "This is exactly what the U.S. Department of Treasury did in 2008.",
        "body17": "During day to day operation, the Department of Treasury plays more of a back stage role. One of its most important task is to budget for the entire government. For countries like the U.S. it also needs to manage trade policies and sanctions around the world. So it will have a greater impact from a macro level. ",
    },
    "zh": {
        "body1": "我想先讨论一下央行与财政部的区别。简单的来讲，财政部负责财政政策，而央行制定货币政策。",
        "body2": "接下来你可能会问什么是财政政策与货币政策？",
        "body3": "财政政策: 主要有两种手段:",
        "body4": "调整政府支出",
        "body5": "调整税额",
        "body6": "除此之外减税或增加政府支出会刺激经济增长所以我们称它们为扩张性财政政策。"
            + "相反, 政府支出的减少或税率的升高被称为收缩性财政政策因为它们使GDP下降。",
        "body7": "货币政策：主要有三种：",
        "body8": "调整存款准备金率",
        "body9": "调整利率",
        "body10": "公开市场操作",
        "body11": "存款准备金率是存款之中商业银行可以借贷出去的百分比。"
            + "它将会直接影响货币乘数进而影响GDP。确切的说, 当准备金率低时, "
            + "更多的钱会被借贷出去进而刺激经济，反之亦然。",
        "body12": "调整利率则更加直接。低利率鼓励借贷从而刺激经济，反之亦然。",
        "body13": "最后一个是公开市场操作，实际上它是央行最常使用的手段。"
            + "从根本上讲，它是债券买入与卖出市场的运作。当央行从市场中购买债券，资金将会流入市场并且刺激经济。"
            + "相反, 向市场中卖出债券减少了资金的供应从而使GDP减少。",
        "body14": "以上三个方法是央行工具箱中最主要的工具。正常情况下，它们足够用于经济体日常的调节。"
            + "然而，在像疫情这样的特殊时期，央行也用前瞻性指引这样的手段来保持市场信心。"
            + "前瞻性指引是指通过提前告知市场未来的政策是什么来减少不确定性从而提升信心。",
        "body15": "现在，我们可以比较一下他们的重要性。很多教科书或政府网站都说它们负责经济体不同的两个方面所以它们是不能相比较的，"
            + "但是我会论证其实财政部比央行要更重要，特别是在危机时刻。",
        "body16": "在日常生活中，央行可能从曝光度来说存在感更高。这主要是因为央行在准备金率和利率上的决策对股价会有相当程度的影响。"
            + "然而，它们更像是经济体中的微调。在像新冠疫情或2008金融危机这种危急关头，央行能做的只有把利率和准备金率降到0并从市场中尽可能的多买债卷。"
            + "事实上，这些工具很受限制，特别是在过去十年这样的低利率环境中。相反，财政部可以随时向市场中注入无限量的资金。"
            + "这正是美国财政部在2008年做的。",
        "body17": "在日常活动中，财政部更像一个幕后角色。其最重要的任务之一就是为整个政府拨款。在美国这样的国家，其财政部同时还要管理贸易协议以及国际经济制裁。",
    }
}