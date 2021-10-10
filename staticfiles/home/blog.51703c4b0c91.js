function changeLangBlog(blog, type) {
    changeLangNav(type);
    changeLangBlogSec(type);

    var title = document.getElementById('blog_title');
    title.innerHTML = blog_content[blog][type]["title"];

    var intro = document.getElementsByClassName('blog_intro');
    for (i = 0; i < intro.length; i++) {
        intro[i].innerHTML = blog_content[blog][type]["intro"];
    }

    var motivation = document.getElementsByClassName('blog_motivation');
    console.log(blog);
    for (i = 0; i < motivation.length; i++) {
        motivation[i].innerHTML = blog_content[blog][type]["motivation"][i];
    }

    var body = document.getElementsByClassName('blog_body');
    for (i = 0; i < body.length; i++) {
        body[i].innerHTML = blog_content[blog][type]["body"][i];
    }
}

var blog_content = {
    "first": {
        "en": {
            "title": "First Post",
            "intro": "Welcome to my first post! I just want to use the space below to talk about some of the motivations of writing blogs as well as some types of blogs I will be writing about.",
            "motivation": [" Welcome to my first post! I just want to use the space below to "
            + "talk about some of motivations of writing blogs as well as some types of blogs "
            + "I will be writing about."],
            "body": ["While I was setting up my personal website this past week, I had the idea of having a"
                + "section that shares some of personal experiences and understandings on the many issues that we face today."
                + "I think it is a great way to give people who are viewing this website an idea of what my interests are and more importantly where do I spend time on."
                + "As an initial thought, I will be mainly writing on three different topics:"
                + "<ol>"
                + "<li>Travelling Experiences</li>"
                + "   <li>Book Reports</li>"
                + "    <li>Coding Related Topics (Algorithms, Data Structores, etc)</li>"
                + "</ol>"
                + "<span class='paragraph'> "
                + "</span>"
                + "Another moviation for writing blogs is to help myself organize some of my thoughts."
                + "Also, I plan to add support for both Chinese and English which means I get the chance to practice writing in Chinese which I haven't done so for a long time."
                + "<span class='paragraph'></span>"
                + "<h1 class='margin_top'>Special Thanks</h1>"
                + "<hr>"
                + "<p>I want to use this sectioin to thank everything that has helped me build this website.</p>"
                + "<p>Most importantly, I want to thank <a href='https://www.youtube.com/watch?v=Nn7EX3zkGUo&list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu'>CS50's Web Programming with Python and Javascript.</a>"
                + "Instructor Brian Yu is a truly amazing teacher and most of the techniques and concepts I used in developing this website come from this course.</p>"
                + "<p>I also want to thank those who try to answer questions to their best of abilities on stackoverflow. We don't truly appreciate you until we've faced problems that take days to fix.</p>"
                
                + "<p style='padding-top: 30px; font-size: 25px;'>Thanks for reading! Enjoy!</p>"]
        },
        "zh": {
            "title": "第一个博客",
            "intro": "欢迎来到我的第一个博客。我想用以下的空间来谈谈我写博客的动机以及所写博客的种类。",
            "motivation": [""],

            "body": ["这周我在编写个人网站时有了加一个“博客”分区的想法。我想用它来分享我的一些个人经历以及对我们每天面对问题的理解。"
                + "我觉得这是一个很好的方式来分享我的兴趣是什么以及更重要的是我是怎样分配我的时间的。"
                + "作为一个最初的想法，我准备主要写关于以下三个主体的博客："
                + "<ol>"
                + "     <li>旅行经历</li>"
                + "     <li>读书报告</li>"
                + "     <li>编程相关的主体（算法，数据结构...)</li>"
                + "</ol>"
                + "<span class='paragraph'> "
                + "</span>"
                + "写博客的另一个动机是帮助我自己组织思绪。"
                + "除此之外，我准备同时支持中文和英文，这意味着我有机会练习用中文写作。"
                + "<span class='paragraph'></span>"
                + "<h1 class='margin_top'>特别感谢</h1>"
                + "<hr>"
                + "<p>我想用这个区域来感谢所有帮助我开发这个网站的东西。</p>"
                + "<p>首要的是我想感谢 <a href='https://www.youtube.com/watch?v=Nn7EX3zkGUo&list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu'>CS50's Web Programming with Python and Javascript.</a>"
                + "讲师 Brian Yu 是一个真正出色的老师。绝大多数我在发开这个网站中用到的概念和技术都是来自这个课程。</p>"
                + "<p>我还想感谢所有尽全力在stack overflow 上面回答问题的人。我们不会真正感激你们直到遇到需要几天来解决的问题。</p>"
                
                + "<p style='padding-top: 30px; font-size: 25px;'>谢谢阅读！</p>"]
        }
    }
}