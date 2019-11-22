

$(document).ready(function () {
    var triviaOption = [
        {
            question: "What color is a school bus?",
            option: ["Yellow", "Orange", "Blue", "Red"],
            answer: 0,
        },

        {
            question: "What animals are going extint (endangered in 2019?",
            option: ["Gorilla", "Tasmaniam Tiger", "Monkeys", "Amur Leopard"],
            answer: 1,
        },

        {
            question: "What foods are fruits?",
            option: ["Onion", "Broccoli", "Avoados", "Corn"],
            answer: 2,
        },

        {
            question: "When did Martin Luther King Jr died?",
            option: ["April 4", "April 10", "February 2", "March 4"],
            answer: 0,
        },

        {
            question: "Whats the fast car in 2019?",
            option: ["Lamborghini", "Porsche", "Bugatti", "Ferrari"],
            answer: 3,
        },

        {
            question: "What date is the start of Hanukkah?",
            option: ["December 30", "December 22", "December 21", "December 25"],
            answer: 1,
        },

        {
            question: "When was the first cell phone invented?",
            option: ["April 3 1971", "December 13 1970", "April 3 1973", "July 4 1973"],
            answer: 2,
        },
    ]



    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;
    var incorrect = 0;
    var unanswered = 0;

    var timer = 20;
    var userGuess = "";
    var qCount = triviaOption.length;
    var timerOn = false;
    var timerId = "";
    var newArray = [];
    var holder = [];


    $("#reset").hide();
    $("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        // runTimer();
        for (let i = 0; i < pick.option.length; i++) {
            holder.push(pick.option[i]);
            console.log("push");
        }
    })
    //Timer Start
    function runTimer() {
        if (!runs) {
            interval = setInterval(decrement, 1000);
            runs = true;
        }
    }
    //Timer Countdown
    function decrement() {
        $("#timeleft").html("time remaining " + timer); timer--;
        //Stop Timer
        if (timer === 0) {
            unansweredCount++;
            stop();
            $("#anserblock"), html("<p>Game Over: Correct Pick: " + pick.option[pick.answer] + "</p>");
        }
    }


    
    function stop() {
        runs = false;
        clearInterval(interval);
    }

    function displayQuestion() {
        index = Math.floor(Math.random() * triviaOption.length);

        pick = triviaOption[index];
        $("#answerblock").empty()
        $("#questionblock").html(pick.question);
        for (let i = 0; i < pick.option.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.option[i]);
            userChoice.attr("data-value", i);
            userChoice.attr("data-answer", pick.answer);
            $("#answerblock").append(userChoice);
        }
        triviaOption.splice(index, 1)
    }

    $(document).on("click", ".answerchoice", function () {
        userGuess = parseInt($(this).attr("data-value"));
        correctAnswerIndex = parseInt($(this).attr("data-answer"));
        if (userGuess === correctAnswerIndex) {
            // stop();
            correctCount++;
            userGuess = "";
            $("#answerblock").html("<p>Correct</p>");

        } else {
            // stop();
            wrongCount++;
            userGuess = "";
            $("#answerblock").html("<p>Wrong: Correct Answer: " + pick.option[pick.answer] + "</p>");

        }
        setTimeout(function () {
            if ((wrongCount + correctCount + unansweredCount) === qCount) {
                $("#answerblock").empty()
                $("#questionblock").empty();
                $("#questionblock").html("<h3>Game Over! You Did:</h3>");
                $("#questionblock").append("<h4> Correct: " + correctCount + "</h4>");
                $("#questionblock").append("<h4> Incorrect: " + wrongCount + "</h4>");
                $("#questionblock").append("<h4> Unanswered: " + unansweredCount + "</h4");
                $("#reset").show();
                triviaOption = holder
            } else {
                // runTimer();
                displayQuestion();
            }
        }, 2000)

    });

    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for (let i = 0; i < holder.length; i++) {
            option.push(holder[i]);
            runTimer();
            displayQuestion();

        }
    })
})
