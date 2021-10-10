function changeLangHome(type) {
    changeLangNav(type);
    const intro1 = document.querySelector('#intro1');
    const intro2 = document.querySelector('#intro2');
    const intro3 = document.querySelector('#intro3');
    const contact = document.querySelector('#contact');
    const name = document.querySelector('#name');
    var toolTip = document.getElementsByClassName('tooltip');

    for (i = 0; i < toolTip.length; i++) {
        toolTip[i].textContent = contacts[type][i];
    }

    intro1.textContent = data[type].intro1;
    intro2.textContent = data[type].intro2;
    intro3.textContent = data[type].intro3;
    contact.textContent = data[type].contact;
    about.textContent = data[type].about;
    blog.textContent = data[type].blog;
    name.textContent = data[type].name;

    document.documentElement.lang = type;
    console.log(document.documentElement.lang);
    lang = type;
    console.log(lang);

}

var contacts = {
    'en': ["Github", "LinkedIn", "YouTube", "Wechat"],
    'zh': ["Github", "领英", "YouTube", "微信"]
}

function changeLangNav(type) {
    console.log(type);
    const about = document.querySelector('#about');
    const blog = document.querySelector('#blog');
    const project = document.querySelector('#project');
    about.textContent = data[type].about;
    blog.textContent = data[type].blog;
    project.textContent = data[type].project;
}

function changeLangTitles(type) {
    const int = document.querySelector('#blog-int-t');
    const mot = document.querySelector('#blog-mot-t');
    const body = document.querySelector('#blog-body-t');
    int.textContent = sections[type].int;
    mot.textContent = sections[type].mot;
    body.textContent = sections[type].body;
}

function getLang() {
    return  document.documentElement.lang;
}

var sections = {
    "en": {
        "int": "Introduction",
        "mot": "Motivations",
        "body": "Body"
    }, 
    "zh": {
        "int": "简介",
        "mot": "动机",
        "body": "主体"
    }
};


var data = {
    "en":
    {
        "intro1":
            "Hi! I am a candidate for Bachelor of Computer Science at the Univeristy of Waterloo (2020-2025).",
        "intro2":
            "I've been a huge sports fan my entire life. Soccer, Football, Basketball, Hockey, swimming, tennis, pingpong are some of my favorites.",
        "intro3":
            "In my free time, I enjoy playing go (a kind of chess) mostly online. I also use AI to help me improve my game and it has led to me interest in AI.",
        "contact":
            "Contact",
        "about": "About",
        "blog": "Blog",
        "project": "Project",
        "name": "Rongqi(Richard) Fan"
    },
    "zh":
    {
        "intro1":
            "欢迎来到我的网站！我目前就读于滑铁卢大学计算机科学本科（2020-2025）",
        "intro2":
            "我一直是个体育迷。足球，美式足球，篮球，冰球，游泳，网球，乒乓球都是我的最爱。",
        "intro3":
            "在课余时间中，我喜欢下围棋（大多数在线上）。同时，我也运用人工智能来帮我提升棋力并且它激发了我对人工智能的兴趣。",
        "contact":
            "联系方式",
        "about": "介绍",
        "blog": "博客",
        "project": "项目",
        "name": "范荣琦"
    }
};


function redirect(section) {
    console.log(section);
    
    console.log('hi');
    var url = window.location.href.replace(/\d+$/, "");
    console.log(url);
    url = url.replace("/", "");
    url = url.replace("/blog", "");
    console.log(url);
    console.log(url);
    console.log("{% url 'blog' %}");
    console.log(window.location.href);
    console.log(document.documentElement.lang);
    console.log(section);
}

function changeLangProject(type) {
    changeLangNav(type);
    var names = document.getElementsByClassName('projectNames');
    for (i = 0; i < names.length; i++) {
        names[i].textContent = project_names[type][i];
    }
}

var project_names_font = {
    "en": '2vw',
    "zh": '2vw'
}

var project_names = {
    "en": [
        "Personal Website", "Constructor", "Fitness App", "Conway's Game of Life", 
        "Testing Tools", "Creature Classifier", "Algorithm (Leetcode)"
    ] ,
    "zh": [
        "个人网站", "建造者", "健身软件", "生命游戏", 
        "测试工具", "生物鉴别器", "算法（Leetcode)"
    ]
}


function changeLangProjSec(type) {
    var project_titles = document.getElementsByClassName("proj_titles");

    for (i = 0; i < project_titles.length; i++) {
        project_titles[i].textContent = proj_sec[type][i];
    }
}

var proj_sec = {
    "en": ["Outline", "Demo", "Implementation"],
    "zh": ["概述", "演示", "实现"]
}

function changeLangBlogSec(type) {
    var blog_titles = document.getElementsByClassName("blog_titles");

    for (i = 0; i < blog_titles.length; i++) {
        blog_titles[i].textContent = blog_sec[type][i];
    }
}

var blog_sec = {
    "en": ["Introduction", "Motivation", "Body"],
    "zh": ["简介", "动机", "主体"]
}