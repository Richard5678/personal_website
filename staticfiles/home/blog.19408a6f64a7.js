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
            "title": "???????????????",
            "intro": "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "motivation": ["?????????:"],

            "body": ["????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                + "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                + "????????????????????????????????????????????????????????????????????????????????????"
                + "<ol>"
                + "     <li>????????????</li>"
                + "     <li>????????????</li>"
                + "     <li>?????????????????????????????????????????????...)</li>"
                + "</ol>"
                + "<span class='paragraph'> "
                + "</span>"
                + "????????????????????????????????????????????????????????????"
                + "??????????????????????????????????????????????????????????????????????????????????????????????????????"
                + "<span class='paragraph'></span>"
                + "<h1 class='margin_top'>????????????</h1>"
                + "<hr>"
                + "<p>???????????????????????????????????????????????????????????????????????????</p>"
                + "<p>???????????????????????? <a href='https://www.youtube.com/watch?v=Nn7EX3zkGUo&list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu'>CS50's Web Programming with Python and Javascript.</a>"
                + "?????? Brian Yu ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>"
                + "<p>?????????????????????????????????stack overflow ??????????????????????????????????????????????????????????????????????????????????????????????????????</p>"
                
                + "<p style='padding-top: 30px; font-size: 25px;'>???????????????</p>"]
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
                    + "<h3 style=\"margin-top:30px\">Cross Validation</h3>"
                    + "<hr>"
                    + "After implementating gradient descent to fit a model, the next thing we need to do is test how good the model is."
                    + "A common method for testing ML models is called cross validation. The idea behind is training the model with a fraction of the data and test it with the data that was left out during training."
                    + "A more advanced way of using this is called k-fold cross validation which divides the dataset into k subsets. Then train the model with every (k - 1) subsets and test it with the 1 subset that was left out."
                    + "Finally, take the average of those testing results. Here is an implementation:"
                    + "<div style=\"text-align:center;\">"
                    + "     <img src=\"/static/home/grad10.png\" style=\" width: 70%; height = 50%; margin: 20px\">"
                    + "</div>"
                    + "<h3 style=\"margin-top:30px\">Projects</h3>"
                    + "<hr>"
                    + "To give a broader overview of the real-world application of gradient descent, I have implemented two projects - one for <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/housing%20-%20linReg.ipynb\">housing price predictor using linear regression</a>"
                    + " and one fore <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/heart%20problem%20-%20logReg.ipynb\">heart disease predictor using logisitic regression</a>. "
                    + "I have also used various methods including sklearn models and the normal equation to test the output of my gradient descent implementation. As you can see on github, we get the same output."]
        },
        "zh": {
            "title": "??????????????????????????????",
            "intro": "?????????????????????????????????(Gradient Descent) ???????????????????????????????????????????????????????????????(Feature Scaling),  ????????????(Cross Validation) ??????????????????????????????????????????"
                    + "????????????????????????????????????<a href=\"https://github.com/maxim5/cs229-2018-autumn/blob/main/notes/cs229-notes1.pdf\">Andrew Ng???????????????</a>",
            "motivation": ["??????????????????????????????????????????????????????????????????????????????????????????????????????????????? "
            + "???????????????????????????????????????"
            + "????????????????????????????????????????????????, ????????????????????????"
            + "??????????????????????????????????????????????????????????????????????????????????????????"],

            "body": ["<h3>????????????</h3>"
            + "<hr>"
            + "<p>??????????????????????????????????????????&Theta;???????????????J(&Theta;) ?????????????????????????????????</p>"
            + "?????????????????????:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad1.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "&alpha; ????????????????????????????????????????????????????????????"
            + "<p style=\"margin-top: 20px;\"> ???????????? J(&Theta;) ??????????????????????????????????????????????????????????????????????????????????????????: </p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad2.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "??????????????????2???????????????????????????????????????????????????????????????????????????J(&Theta;)????????????."
            + "<p>J(&Theta;) ???????????????:</p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad3.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "??????????????????????????????:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad4.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "<p style=\"margin-top: 30px\"> ????????????????????????????????????????????????$Theta; ?????????????????????????????????????????????????????????????????????"
            + "???????????????????????????????????????????????????????????????&Theta; ??????????????????????????????????????????X??????: </p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad5.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "??????????????????????????????"
            + "<p style=\"margin-top: 30px\">????????????:</p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad6.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "?????????????????????????????????????????????????????????????????????????????????"
            + "<h3 style=\"margin-top: 40px\">????????????</h3>"
            + "<hr>"
            + "?????????????????????????????????????????????????????????:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad7.png\" style=\" width: 70%; margin: 20px\">"
            + "</div>"
            + "????????????????????????????????????????????????n_epoche) ?????????????????????&Theta; ????????????????????????0.00001????????????"
            + "<p>???????????????????????????????????????????????????????????????????????????</p>"
            + "<p>????????????????????????X???????????????????????????????????????????????????: </p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad8.png\" style=\" width: 50%; height = 50%; margin: 20px\">"
            + "</div>"
            + "x ?????????????????????????????????????????????sigma??????????????????????????????"
            + "<p>?????????????????????????????????????????????X?????????????????????????????????0 ??????????????????</p>"
            + "?????????????????????????????????????????????(????????????)???????????????????????????????????????????????? x<sub>j</sub>???x<sub>j</sub>?????????X????????????????????????"
            + "?????????????????????, ??????X???????????????????????????????????????????????? "
            + "????????????????????????????????????????????????????????????2000?????? ?????????????????????????????????0???1)???????????????????????????????????????????????????"
            + "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????(????????????????????????????????????????????????)???"
            + "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
            + "</p>"
            + "??????????????????????????????????????????????????????????????????????????????????????? (??????????????????X??????????????????????????????)???"
            + "<p>??????????????????????????????sklearn library ???????????????????????????????????????:</p>"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad9.png\" style=\" width: 70%; height = 50%; margin: 20px\">"
            + "</div>"
            + "<h3 style=\"margin-top:30px\">????????????</h3>"
            + "<hr>"
            + "??????????????????????????????????????????, ?????????????????????????????????????????????????????????????????????"
            + "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
            + "??????????????????????????????k???????????????????????????????????????????????? k ????????? ???????????????(k-1)??????????????????????????????????????????????????????????????????????????????"
            + "?????????????????????????????????????????????????????????????????????????????????????????????:"
            + "<div style=\"text-align:center;\">"
            + "     <img src=\"/static/home/grad10.png\" style=\" width: 70%; height = 50%; margin: 20px\">"
            + "</div>"
            + "<h3 style=\"margin-top:30px\">??????</h3>"
            + "<hr>"
            + "????????????????????????????????????????????????????????????????????????????????? - ????????? <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/housing%20-%20linReg.ipynb\">???????????????????????????????????????</a>"
            + " ???????????? <a href=\"https://github.com/Richard5678/Machine-Learning/blob/main/heart%20problem%20-%20logReg.ipynb\">????????????????????????????????????</a>. "
            + "?????????????????????sklearn ?????? ??? ????????????(normal equation) ???????????????????????????????????????????????????????????????github???????????????????????????????????????????????????"]
        }
    },
    "randomForest": {
        "en": {
            "title": "Implementing Random Forest from scratch in Python",
            "intro": "This article is a walk-through of an implementation of random forest classifier without using any implementations from existing libraries.",
            "motivation": ["I am recently studying different kinds of machine learining algorithms. The most effective way of learning different kinds of algorithms is actually implement them concretely."
                            + "With is in mind, I have previously implemented linear and logistic regressions which are relatively simple modles."
                            + "My next target is some type of decision tree algorithms. After some research, it has became apprant that random forest and gradiented boosting trees are the two most popular and effective tree based algorithms."
                            + "Unlike many other types of algorithms like convolutional neural networks, there is actually really limited amount of information about how the two algorithms above are implemented using \"easy of understand\" code."
                            + "So after implenting my own version of random forest following weeks of struggling, I want to share my implementation and the lessons I have learned."],
            "body": ["<h3 class='margin_top'>What is Random Forest?</h3>"
                + "The simple answer is: Random Forest is a type of decision tree that uses bagging (train multiple trees). "
                + "A decision tree simply asks a question at each node and split the data at the current node into two children nodes (one with all examples that responds yes to the splitting question and the other responds no)."
                + "The next question would be how do we select such split. Well, the intuitive goal of a split is to groups examples with similar labels together."
                + "For example, in a regression problem, we want to groups similar target values together. Similarly, we want to groups same labels together in classification tasks."
                + "So we will need to define some type of loss function and quantifies how good is a split."
                + "A typical choice for regression tasks is MSE where the predicted value is the mean of training examples at that node."
                + "For classification tasks, a common choice of loss function is the Gini index which is what we are going to use in the example below."
                + "A Random Forest consists of multiple decision trees where each is trained on a subset of features as well as a subset of training examples. "
                + "At test time, a Random Forest algorithm will take the majority class predicted by all trees in classification tasks."
                + "<h3 class='margin_top'>Implementation</h3>"
                + "Let us start off by formalizing the steps a Random Forest classifier will take to train a single tree:"
                + "<ol>"
                + "     <li>Randomly sample features and training examples.</li>"
                + "     <li>Find optimal split by calculatiing the loss for each possible value of the given feature.</li>"
                + "     <li>Split the data at the current node based on the optimal split point found above.</li>"
                + "     <li>Recursively build up the left and right sub-tree until the max-depth has been reached</li>"
                + "</ol>"]
        },
        "zh": {
            "title": "???Python????????????????????????????????????",
            "intro": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "motivation": ["?????????:"],

            "body": ["????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                + "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
                + "????????????????????????????????????????????????????????????????????????????????????"
                + "<ol>"
                + "     <li>????????????</li>"
                + "     <li>????????????</li>"
                + "     <li>?????????????????????????????????????????????...)</li>"
                + "</ol>"
                + "<span class='paragraph'> "
                + "</span>"
                + "????????????????????????????????????????????????????????????"
                + "??????????????????????????????????????????????????????????????????????????????????????????????????????"
                + "<span class='paragraph'></span>"
                + "<h1 class='margin_top'>????????????</h1>"
                + "<hr>"
                + "<p>???????????????????????????????????????????????????????????????????????????</p>"
                + "<p>???????????????????????? <a href='https://www.youtube.com/watch?v=Nn7EX3zkGUo&list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu'>CS50's Web Programming with Python and Javascript.</a>"
                + "?????? Brian Yu ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>"
                + "<p>?????????????????????????????????stack overflow ??????????????????????????????????????????????????????????????????????????????????????????????????????</p>"
                
                + "<p style='padding-top: 30px; font-size: 25px;'>???????????????</p>"]
        }
    }
}