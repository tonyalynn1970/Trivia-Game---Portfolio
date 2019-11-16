

// $("#yellow").click(function () {
//     alert("Correct");
// });
// $("#red").click(function () {
//     alert("Correct");
// });
// $("#blue").click(function () {
//     alert("Correct");
// });
// $("#white").click(function () {
//     alert("Correct");
// });


$(document).ready(function () {
    var options = [
        {
            question: "What color is a school bus?",
            choice: ["Yellow", "Orange", "Blue", "Red"],
            answer: 0,
        },

        {
            question: "What animals are going extint (endangered in 2019?",
            choice: ["Gorilla", "Tasmaniam Tiger", "Monkeys", "Amur Leopard"],
            answer: 1,
        },

        {
            question: "What foods are fruits?",
            choice: ["Onion", "Broccoli", "Avoados", "Corn"],
            answer: 2,
        },

        {
            question: "When did Martin Luther King Jr died?",
            choice: ["April 4', 'April 10', 'February 2', 'March 4"],
            answer: 0,
        },

        {
            question: "Whats the fast car in 2019?",
            choice: ["Lamborghini", "Porsche", "Bugatti", "Ferrari"],
            answer: 3,
        },

        {
            question: "What date is the start of Hanukkah?",
            choice: ["December 30", "December 22", "December 21", 'December 25"],
                answer: 1,
            },

        {
            question: "When was the first cell phone invented?",
            choice: ["April 3 1971", "December 13 1970", "April 3 1973", "July 4 1973"],
            answer: 2,
        },
    ]

    var trivia = {

        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timer: 20,
        timerOn: false,
        timerId: '',

        startGame: function () {
            //  results
            trivia.currentSet = 0;
            trivia.correct = 0;
            trivia.incorrect = 0;
            trivia.unanswered = 0;
            clearInterval(trivia.timerId);

            // Game Select
            $('#game').show();

            //  Empty 
            $('#results').html();
        }
    }
});






