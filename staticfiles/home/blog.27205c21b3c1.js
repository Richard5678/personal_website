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
            "motivation": ["See below:"],
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
                + "<h3 class='margin_top'>Special Thanks</h3>"
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
            "motivation": ["见以下:"],

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
    },
    "gradDescent": {
        "en": {
            "title": "Gradient Descent in Machine Learning",
            "intro": "This article covers the implementation and theoretical framework of gradient descent. Topics such as feature scaling and cross-validation are also included to improve testing and training."
                    + "Most the theoritical work presented below is based on <a href=\"https://github.com/maxim5/cs229-2018-autumn/blob/main/notes/cs229-notes1.pdf\">Prof. Andrew Ng's notes </a>.",
            "motivation": ["I have been learning about machine learning recently. For simple models like linear regression and logistic regression"
                            + "it is not hard to get an idea of what they mean theoritically."
                            + "However, as I proceded into implementing them with real-world dataset, there were many obstales."
                            + "So I want to use this blog to talk about what problems I faced and how I solved them."],
            "body": ["<h3>Theoritical Framework</h3>"
                    + "<hr>"
                    + "<p>The basic idea of gradient descent is to update the parameter &Theta; toward the steepest direction of cost function J(&Theta;).</p>"
                    + "Its update rule is given by:"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad1.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "where &alpha; is the learning rate which determine how big a step each update takes."
                    + "<p style=\"margin-top: 20px;\"> The loss function J(&Theta;) measures how good our model fits the dataset. A common choice for the loss function the mean squraed error (mse) which is given by: </p>"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad2.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "where the additional 2 on the denominator is just there to make the derivation easier later. Now our task becomes minizing J(&Theta;)."
                    + "<p>Taking the partial derivative of J(&Theta;) gives:</p>"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad3.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "Hence our update rule becomes:"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad4.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "<p style=\"margin-top: 30px\"> The update rule we've obtained above updates entries in $Theta; one at a time which makes it look messy in the implementaion."
                    + "Let us see how we can perform the update rule simultaneously for all entries of &Theta; using matrix multiplication. We start off by defining the design matrix X to be: </p>"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad5.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "where each row is a training example."
                    + "<p style=\"margin-top: 30px\">Observe that:</p>"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad6.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "Hence we've completed all the theoritical background needed to implement the gradient descent algorithm"
                    + "<h3 style=\"margin-top: 40px\">Implementation</h3>"
                    + "<hr>"
                    + "Here is an implementation of gradient descent for linear regression:"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad7.png\" style=\" width: 70%; margin: 20px\">"
                    + "</div>"
                    + "Note that the algorithm stops if the number of iterations sepecified by n_epoch is completed or the updated &Theta; is within 0.00001 of the original &Theta;."
                    + "<p>Having this algorithm at hand, one other thing we need to do is make sure matrix X is properly scaled.</p>"
                    + "<p>By that I mean each element in each column of X is updated as </p>"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad8.png\" style=\" width: 50%; height = 50%; margin: 20px\">"
                    + "</div>"
                    + "where x hat is the mean of the column and sigma is the standard deviation of the column."
                    + "<p>By scaling the features, we have effectively converted all the elements of X to relatively close to 0.</p>"
                    + "Many would then ask why do we need feature scaling. Well, the update rule for gradient descent dependents on x<sub>j</sub> which is a value in the matrix."
                    + "In most occations, the values in each column of X varies dramatically. "
                    + "For example, a column may contain the year of a transaction which is typically greater than 2000. Another columns may contain a binary data (0 or 1) indicating if a house has been selled before."
                    + "Such big difference bewteen columns of the data will make parameter &Theta; converge faster on some entries than others (faster on columns in which its data are big to be specific)."
                    + "In fact, when I was implementing this algorithm for the real estate pricing data. It seems like &Theat; will never converge on columns with small values."
                    + "</p>"
                    + "Therefore, it is essential to do feature scaling before performing gradient descent, espicially when the value of data varies greatly between columns of X."
                    + "<p>For convience, you can use the sklearn library to perform feature scaling as follows</p>"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad9.png\" style=\" width: 70%; height = 50%; margin: 20px\">"
                    + "</div>"
                    + "<h3 style=\"margin-top:30px\">Projects</h3>"
                    + "<hr>"
                    + "To give a broader overview of the real-world application of gradient descent, I have implemented two projects - one for <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/housing%20-%20linReg.ipynb\">housing price predictor using linear regression</a>"
                    + " and one fore <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/heart%20problem%20-%20logReg.ipynb\">heart disease predictor using logisitic regression</a>. "
                    + "I have also used various methods including sklearn models and the normal equation to test the output of my gradient descent implementation. As you can see on github, we get the same output."]
        },
        "zh": {
            "title": "机器学习中的梯度下降",
            "intro": "这篇博客概述了梯度下降(Gradient Descent) 的理论框架及软件实现。文章还包含了特征缩放(Feature Scaling),  交叉验证(Cross Validation) 等主体还提升测试和训练效率。"
                    + "以下大部分理论背景来自于<a href=\"https://github.com/maxim5/cs229-2018-autumn/blob/main/notes/cs229-notes1.pdf\">Andrew Ng教授的笔记</a>",
            "motivation": ["最近我开始学习机器学习基础。对于像线性回归和罗辑回归这样的相对基础的模型， "
            + "它们的理论架构比较好理解。"
            + "然而当我用真实数据应用这些模型时, 遇到了许多困难。"
            + "所以我想用这个博客来谈谈我遇到的困难以及我是怎样解决它们的。"],

            "body": ["<h3>理论背景</h3>"
            + "<hr>"
            + "<p>梯度下降的基本原理源于让参数&Theta;朝成本函数J(&Theta;) 最陡峭的方向前进一步。</p>"
            + "它的更新公式是:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad1.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "&alpha; 是学习进度。它掌控每一步参数前进的大小。"
            + "<p style=\"margin-top: 20px;\"> 成本函数 J(&Theta;) 用来衡量模型对数据的贴合程度。一个常见的成本函数就是均方误差: </p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad2.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "分母上多余的2是用来简化将来的微分运算的。现在我们的任务变成了求J(&Theta;)的最小值."
            + "<p>J(&Theta;) 的偏导数为:</p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad3.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "进而我们的更新公式为:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad4.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "<p style=\"margin-top: 30px\"> 我们以上得到的更新公式每次只更新$Theta; 里的一个数字。这会使其在软件中的运算变得复杂。"
            + "所以让我们来看看怎样运用矩阵乘法来同时更新&Theta; 里的每个数字。我们从定义矩阵X开始: </p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad5.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "每行为一个训练例子。"
            + "<p style=\"margin-top: 30px\">Observe that:</p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad6.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "到此，我们已经概述了所有用软件实现梯度下降的理论背景。"
            + "<h3 style=\"margin-top: 40px\">Implementation</h3>"
            + "<hr>"
            + "以下是个在线性回归中运用梯度下降的算法:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad7.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "要注意的是这个算法会在训练次数（n_epoche) 完成或更新后的&Theta; 和更新前距离小于0.00001是停止。"
            + "<p>有了这个算法，一个我们要注意的东西就是特征的缩放。</p>"
            + "<p>其意思为每个矩阵X中的数字都会根据其所在的列而更新为: </p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad8.png\" style=\" width: 50%; height = 50%; margin: 20px\">"
            + "</div>"
            + "x 横线为这个数字所在列的平均数，sigma为其所在列的标准差。"
            + "<p>通过特征缩放，我们实际上把矩阵X中的所有数字都变为了在0 左右的数字。</p>"
            + "很多人会问我们为什么要缩放特征(训练例子)呢。以上我们能看到梯度下降依赖于 x<sub>j</sub>（x<sub>j</sub>是矩阵X中的一个数字）。"
            + "在大多数情况下, 矩阵X的列与列里数值的大小有很大差别。 "
            + "比如，一列可能是所有交易的年份（大多大于2000）， 而另一列为二进制数字（0，1)用来表示这个房子之前有没有被卖过。"
            + "列与列之间巨大的数数值区别导致在梯度下降的过程中一个列所对应的参数会更快的聚拢。(确切的说，数值更大的列会更快聚拢)。"
            + "事实上，当我在为房屋交易数据编写这个算法时，有些列对应的参数看起来似乎永远不会聚拢到最低点。"
            + "</p>"
            + "所以，在使用梯度下降算法前，特征（训练例子）的缩放十分关键 (特别是在矩阵X列与列见数值差距大时)。"
            + "<p>为了方便起见，可以用sklearn library 来按照以下方法进行特征缩放:</p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad9.png\" style=\" width: 70%; height = 50%; margin: 20px\">"
            + "</div>"
            + "<h3 style=\"margin-top:30px\">项目</h3>"
            + "<hr>"
            + "为了来更全面的展现梯度下降实际的应用，我做了两个小项目 - 一个是 <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/housing%20-%20linReg.ipynb\">房屋价格预测的线性回归</a>"
            + " 另一个是 <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/heart%20problem%20-%20logReg.ipynb\">心脏病预测的逻辑回归</a>. "
            + "我同时还用了像sklearn 模型 和 正规方程(normal equation) 等方法来测试我的梯度下降算法的输出。正如在github上展示的那样，它们的输出是一样的。"]
        }
    }
}