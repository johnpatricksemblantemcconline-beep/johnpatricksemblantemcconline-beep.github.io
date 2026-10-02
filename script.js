/*
function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.style.display = "none";

    });


    document.getElementById(pageName).style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

    const quizzes = {

        noun: {
    
            title: "📘 Noun Quiz",
    
            questions: [
    
                {
                    question: "1. Which word is a noun?",
                    choices: ["Run", "Beautiful", "Teacher", "Quickly"],
                    answer: 2
                },
    
                {
                    question: "2. Which word names a place?",
                    choices: ["School", "Jump", "Happy", "Slowly"],
                    answer: 0
                },
    
                {
                    question: "3. Which word is a noun?",
                    choices: ["Sing", "Book", "Carefully", "Tall"],
                    answer: 1
                },
    
                {
                    question: "4. Which word names a person?",
                    choices: ["Teacher", "Running", "Beautiful", "Quickly"],
                    answer: 0
                },
    
                {
                    question: "5. Which word is a noun?",
                    choices: ["Happiness", "Happy", "Happily", "Smile"],
                    answer: 0
                },
    
                {
                    question: "6. Which word names a thing?",
                    choices: ["Jump", "Chair", "Slowly", "Kind"],
                    answer: 1
                },
    
                {
                    question: "7. Which word is a noun?",
                    choices: ["Mountain", "Climb", "Beautiful", "Quickly"],
                    answer: 0
                },
    
                {
                    question: "8. Which word names an animal?",
                    choices: ["Run", "Dog", "Fast", "Quickly"],
                    answer: 1
                },
    
                {
                    question: "9. Which word is a noun?",
                    choices: ["Sing", "Singer", "Beautiful", "Slowly"],
                    answer: 1
                },
    
                {
                    question: "10. Which word is a noun?",
                    choices: ["Friendship", "Friendly", "Quickly", "Help"],
                    answer: 0
                }
    
            ]
        },
    
    
        verb: {
    
            title: "🏃 Verb Quiz",
    
            questions: [
    
                {
                    question: "1. Which word is a verb?",
                    choices: ["Beautiful", "Run", "Teacher", "School"],
                    answer: 1
                },
    
                {
                    question: "2. Which word shows an action?",
                    choices: ["Jump", "Happy", "Book", "Kind"],
                    answer: 0
                },
    
                {
                    question: "3. Which word is a verb?",
                    choices: ["Sing", "Singer", "Beautiful", "Happiness"],
                    answer: 0
                },
    
                {
                    question: "4. Which word shows an action?",
                    choices: ["Chair", "Write", "Tall", "School"],
                    answer: 1
                },
    
                {
                    question: "5. Which word is a verb?",
                    choices: ["Dance", "Dancer", "Beautiful", "Quickly"],
                    answer: 0
                },
    
                {
                    question: "6. Which word is a verb?",
                    choices: ["Read", "Book", "Interesting", "Student"],
                    answer: 0
                },
    
                {
                    question: "7. Which word shows an action?",
                    choices: ["Blue", "Swim", "Water", "Happy"],
                    answer: 1
                },
    
                {
                    question: "8. Which word is a verb?",
                    choices: ["Laugh", "Funny", "Friend", "Happiness"],
                    answer: 0
                },
    
                {
                    question: "9. Which word shows an action?",
                    choices: ["Think", "Thought", "Smart", "Idea"],
                    answer: 0
                },
    
                {
                    question: "10. Which word is a verb?",
                    choices: ["Beautiful", "Walk", "Teacher", "School"],
                    answer: 1
                }
    
            ]
        },
    
    
        adjective: {
    
            title: "🎨 Adjective Quiz",
    
            questions: [
    
                {
                    question: "1. Which word is an adjective?",
                    choices: ["Run", "Beautiful", "Teacher", "Quickly"],
                    answer: 1
                },
    
                {
                    question: "2. Which word describes a person?",
                    choices: ["Kind", "Run", "School", "Slowly"],
                    answer: 0
                },
    
                {
                    question: "3. Which word is an adjective?",
                    choices: ["Happiness", "Beautiful", "Sing", "Quickly"],
                    answer: 1
                },
    
                {
                    question: "4. Which word describes a thing?",
                    choices: ["Jump", "Red", "Teacher", "Slowly"],
                    answer: 1
                },
    
                {
                    question: "5. Which word is an adjective?",
                    choices: ["Tall", "Run", "School", "Quickly"],
                    answer: 0
                },
    
                {
                    question: "6. Which word describes something?",
                    choices: ["Dance", "Amazing", "Teacher", "Slowly"],
                    answer: 1
                },
    
                {
                    question: "7. Which word is an adjective?",
                    choices: ["Happily", "Happy", "Happiness", "Laugh"],
                    answer: 1
                },
    
                {
                    question: "8. Which word describes a flower?",
                    choices: ["Beautiful", "Run", "Garden", "Quickly"],
                    answer: 0
                },
    
                {
                    question: "9. Which word is an adjective?",
                    choices: ["Slowly", "Slow", "Run", "Runner"],
                    answer: 1
                },
    
                {
                    question: "10. Which word describes a very large object?",
                    choices: ["Tiny", "Small", "Huge", "Quickly"],
                    answer: 2
                }
    
            ]
        }
    
    };
    
    
    let currentQuiz = "";

    function openQuiz(topic) {

        currentQuiz = topic;
    
        const quiz = quizzes[topic];
    
        document.getElementById("quizArea").style.display = "block";
    
        document.getElementById("quizTitle").innerText = quiz.title;
    
        const quizForm = document.getElementById("topicQuiz");
    
        quizForm.innerHTML = "";
    
        quiz.questions.forEach((item, index) => {
    
            const questionDiv = document.createElement("div");
    
            questionDiv.className = "question";
    
            let choicesHTML = "";
    
            item.choices.forEach((choice, choiceIndex) => {
    
                choicesHTML += `
                    <label>
                        <input 
                            type="radio" 
                            name="question${index}" 
                            value="${choiceIndex}"
                        >
                        ${String.fromCharCode(65 + choiceIndex)}. ${choice}
                    </label>
                `;
    
            });
    
            questionDiv.innerHTML = `
                <p><strong>${item.question}</strong></p>
                ${choicesHTML}
            `;
    
            quizForm.appendChild(questionDiv);
    
        });
    
        document.getElementById("topicResult").innerText = "";
    
        document.getElementById("quizArea").scrollIntoView({
            behavior: "smooth"
        });
    }
    
    
    function submitTopicQuiz() {
    
        const quiz = quizzes[currentQuiz];
    
        let score = 0;
    
        quiz.questions.forEach((item, index) => {
    
            const selected = document.querySelector(
                `input[name="question${index}"]:checked`
            );
    
            if (selected && Number(selected.value) === item.answer) {
                score++;
            }
    
        });
    
    
        const result = document.getElementById("topicResult");
    
        result.innerHTML = `
            🎉 You got <strong>${score} out of 10</strong>!
        `;
    
        if (score === 10) {
    
            result.innerHTML += `
                <br>🌟 Perfect Score! Excellent work!
            `;
    
        } else if (score >= 8) {
    
            result.innerHTML += `
                <br>👏 Great job! Keep it up!
            `;
    
        } else if (score >= 5) {
    
            result.innerHTML += `
                <br>👍 Good effort! Keep practicing!
            `;
    
        } else {
    
            result.innerHTML += `
                <br>📚 Keep studying and try again!
            `;
    
        }
    
    }

    function showTopic(topic) {

        const topics = document.querySelectorAll(".topic-content");
    
        topics.forEach(function(item) {
    
            item.style.display = "none";
    
        });
    
    
        if (topic === "noun") {
    
            document.getElementById("nounTopic").style.display = "block";
    
        }
    
        if (topic === "verb") {
    
            document.getElementById("verbTopic").style.display = "block";
    
        }
    
        if (topic === "adjective") {
    
            document.getElementById("adjectiveTopic").style.display = "block";
    
        }
    
    }
// Show Home page when website opens

showPage("home");
*/

function showPage(pageName, clickedButton = null) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    // Show selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    // Remove active state from navigation buttons
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {

        button.classList.remove("active");

    });


    // Find the correct navigation button
    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        navButtons.forEach(button => {

            const buttonText =
                button.textContent.trim().toLowerCase();

            if (buttonText === pageName.toLowerCase()) {

                button.classList.add("active");

            }

        });

    }


    // Scroll to top
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* ================= QUIZ DATA ================= */

const quizzes = {

    noun: [

        {
            question: "Which word is a noun?",
            choices: ["Run", "Teacher", "Beautiful", "Quickly"],
            answer: 1
        },

        {
            question: "Which word names a place?",
            choices: ["School", "Jump", "Happy", "Slowly"],
            answer: 0
        },

        {
            question: "Which word is a noun?",
            choices: ["Sing", "Red", "Book", "Quickly"],
            answer: 2
        },

        {
            question: "Which word names an animal?",
            choices: ["Dog", "Run", "Beautiful", "Loudly"],
            answer: 0
        },

        {
            question: "Which word is an idea or feeling?",
            choices: ["Chair", "Happiness", "Jump", "Blue"],
            answer: 1
        },

        {
            question: "Which word is a noun?",
            choices: ["Teacher", "Write", "Tall", "Quickly"],
            answer: 0
        },

        {
            question: "Which word names a thing?",
            choices: ["Book", "Run", "Happy", "Slowly"],
            answer: 0
        },

        {
            question: "Which word is a noun?",
            choices: ["Beautiful", "School", "Jump", "Quickly"],
            answer: 1
        },

        {
            question: "Which word names a person?",
            choices: ["Teacher", "Sing", "Red", "Slowly"],
            answer: 0
        },

        {
            question: "Which word is a noun?",
            choices: ["Happiness", "Run", "Beautiful", "Quickly"],
            answer: 0
        }

    ],



    verb: [

        {
            question: "Which word is a verb?",
            choices: ["Run", "Teacher", "Beautiful", "School"],
            answer: 0
        },

        {
            question: "Which word shows an action?",
            choices: ["Book", "Jump", "Red", "Teacher"],
            answer: 1
        },

        {
            question: "Which word is a verb?",
            choices: ["School", "Write", "Beautiful", "Dog"],
            answer: 1
        },

        {
            question: "Which word shows an action?",
            choices: ["Sing", "Blue", "Chair", "Happy"],
            answer: 0
        },

        {
            question: "Which word is a verb?",
            choices: ["Read", "Teacher", "Beautiful", "School"],
            answer: 0
        },

        {
            question: "Which word shows an action?",
            choices: ["Jump", "Book", "Red", "Happiness"],
            answer: 0
        },

        {
            question: "Which word is a verb?",
            choices: ["Write", "School", "Tall", "Dog"],
            answer: 0
        },

        {
            question: "Which word shows an action?",
            choices: ["Run", "Teacher", "Beautiful", "Book"],
            answer: 0
        },

        {
            question: "Which word is a verb?",
            choices: ["Sing", "School", "Happy", "Red"],
            answer: 0
        },

        {
            question: "Which word shows an action?",
            choices: ["Read", "Teacher", "Blue", "Book"],
            answer: 0
        }

    ],



    adjective: [

        {
            question: "Which word is an adjective?",
            choices: ["Run", "Beautiful", "Teacher", "School"],
            answer: 1
        },

        {
            question: "Which word describes a noun?",
            choices: ["Tall", "Jump", "Book", "Sing"],
            answer: 0
        },

        {
            question: "Which word is an adjective?",
            choices: ["Happy", "Run", "Teacher", "School"],
            answer: 0
        },

        {
            question: "Which word describes something?",
            choices: ["Red", "Jump", "Book", "Read"],
            answer: 0
        },

        {
            question: "Which word is an adjective?",
            choices: ["Intelligent", "Run", "Teacher", "Sing"],
            answer: 0
        },

        {
            question: "Which word describes a noun?",
            choices: ["Beautiful", "Jump", "Book", "Write"],
            answer: 0
        },

        {
            question: "Which word is an adjective?",
            choices: ["Tall", "Run", "School", "Read"],
            answer: 0
        },

        {
            question: "Which word describes a noun?",
            choices: ["Happy", "Sing", "Teacher", "Jump"],
            answer: 0
        },

        {
            question: "Which word is an adjective?",
            choices: ["Red", "Run", "Book", "Write"],
            answer: 0
        },

        {
            question: "Which word describes a noun?",
            choices: ["Intelligent", "Jump", "School", "Read"],
            answer: 0
        }

    ]

};




/* ================= STUDENT NAME & QUIZ RECORD ================= */

let currentStudentName = "";
let currentQuizTopic = "";



/* ================= START QUIZ FUNCTIONS ================= */

// Noun Quiz
function startNounQuiz() {
    prepareQuiz("noun");
}

// Verb Quiz
function startVerbQuiz() {
    prepareQuiz("verb");
}

// Adjective Quiz
function startAdjectiveQuiz() {
    prepareQuiz("adjective");
}


/* ================= PREPARE QUIZ ================= */

function prepareQuiz(topic) {

    currentQuizTopic = topic;

    // Hide quiz selection
    document.getElementById("quizSelection").style.display = "none";

    // Show name entry
    document.getElementById("studentEntry").style.display = "block";

    // Clear previous name
    document.getElementById("studentName").value = "";

    // Clear error
    document.getElementById("nameError").textContent = "";

    // Focus on name input
    document.getElementById("studentName").focus();

}


/* ================= CONTINUE TO QUIZ ================= */

function continueToQuiz() {

    const nameInput = document
        .getElementById("studentName")
        .value
        .trim();

    const errorMessage =
        document.getElementById("nameError");

    // Check if name is empty
    if (nameInput === "") {

        errorMessage.textContent =
            "Please enter your name before continuing.";

        return;
    }

    // Save student name
    currentStudentName = nameInput;

    // Hide name entry
    document.getElementById("studentEntry").style.display = "none";

    // Open selected quiz
    openQuiz(currentQuizTopic);
}

function openQuiz(topic) {

    const quiz = quizzes[topic];

    if (!quiz) {

        return;

    }


    const quizSelection =
        document.getElementById("quizSelection");

    const quizArea =
        document.getElementById("quizArea");

    const quizTitle =
        document.getElementById("quizTitle");

    const topicQuiz =
        document.getElementById("topicQuiz");

    const topicResult =
        document.getElementById("topicResult");


    // Hide topic selection
    quizSelection.style.display = "none";


    // Show quiz
    quizArea.style.display = "block";


    // Clear old questions
    topicQuiz.innerHTML = "";


    // Clear previous result
    topicResult.innerHTML = "";

    topicResult.className = "quiz-result";


    // Set title
    quizTitle.textContent =
        topic.charAt(0).toUpperCase() +
        topic.slice(1) +
        " Quiz";


    // Create questions
    quiz.forEach((item, index) => {

        const questionDiv =
            document.createElement("div");

        questionDiv.className = "question";


        let choicesHTML = "";


        item.choices.forEach((choice, choiceIndex) => {

            choicesHTML += `

                <label>

                    <input
                        type="radio"
                        name="question${index}"
                        value="${choiceIndex}"
                    >

                    ${choice}

                </label>

            `;

        });


        questionDiv.innerHTML = `

            <h4>
                ${index + 1}. ${item.question}
            </h4>

            ${choicesHTML}

        `;


        topicQuiz.appendChild(questionDiv);

    });


    // Scroll to quiz
    quizArea.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}



/* ================= CLOSE QUIZ ================= */

function closeQuiz() {

    const quizSelection =
        document.getElementById("quizSelection");

    const quizArea =
        document.getElementById("quizArea");

    const topicResult =
        document.getElementById("topicResult");


    quizArea.style.display = "none";

    quizSelection.style.display = "grid";

    topicResult.innerHTML = "";

    topicResult.className = "quiz-result";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* ================= SUBMIT QUIZ ================= */

function submitTopicQuiz() {

    const title =
        document.getElementById("quizTitle").textContent;


    const topic =
        title.replace(" Quiz", "").toLowerCase();


    const quiz =
        quizzes[topic];


    if (!quiz) {

        return;

    }


    let score = 0;

    


    quiz.forEach((item, index) => {

        const selected =
            document.querySelector(
                `input[name="question${index}"]:checked`
            );


        if (selected) {

            if (
                parseInt(selected.value) === item.answer
            ) {

                score++;

            }

        }

    });

    // Save student's result
saveQuizRecord(
    currentStudentName,
    topic,
    score
);


    const result =
        document.getElementById("topicResult");


    let message = "";


    if (score === 10) {

        message =
            `🎉 Perfect Score! You got ${score}/10. Excellent work!`;

        result.className =
            "quiz-result success";

    }

    else if (score >= 8) {

        message =
            `👏 Great job! You got ${score}/10. Keep it up!`;

        result.className =
            "quiz-result success";

    }

    else if (score >= 5) {

        message =
            `👍 Good effort! You got ${score}/10. Keep practicing!`;

        result.className =
            "quiz-result average";

    }

    else {

        message =
            `📚 You got ${score}/10. Keep studying and try again!`;

        result.className =
            "quiz-result retry";

    }


    result.textContent = message;


    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}
/* ================= SAVE QUIZ RECORD ================= */

function saveQuizRecord(studentName, topic, score) {

    // Get existing records
    let records =
        JSON.parse(localStorage.getItem("quizRecords")) || [];

    // Create new record
    const newRecord = {

        name: studentName,

        quiz:
            topic.charAt(0).toUpperCase() +
            topic.slice(1) +
            " Quiz",

        score: score + "/10",

        date: new Date().toLocaleDateString()

    };

    // Add new record
    records.push(newRecord);

    // Save records
    localStorage.setItem(
        "quizRecords",
        JSON.stringify(records)
    );

    // Display records
    displayQuizRecords();
}

/* ================= DISPLAY QUIZ RECORDS ================= */

function displayQuizRecords() {

    const container =
        document.getElementById("recordsContainer");

    if (!container) {
        return;
    }

    const records =
        JSON.parse(localStorage.getItem("quizRecords")) || [];

    // No records yet
    if (records.length === 0) {

        container.innerHTML =
            "<p>No quiz records yet.</p>";

        return;
    }

    let tableHTML = `

        <table class="records-table">

            <thead>

                <tr>
                    <th>Name</th>
                    <th>Quiz</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>

            </thead>

            <tbody>
    `;

    records.forEach(record => {

        tableHTML += `

            <tr>

                <td>${record.name}</td>

                <td>${record.quiz}</td>

                <td>${record.score}</td>

                <td>${record.date}</td>

            </tr>

        `;

    });

    tableHTML += `

            </tbody>

        </table>

    `;

    container.innerHTML = tableHTML;
}





/* ================= VOCABULARY ================= */

function showTopic(topic, clickedButton = null) {

    const topics =
        document.querySelectorAll(".topic-content");


    topics.forEach(item => {

        item.classList.remove("active-topic");

    });


    const selectedTopic =
        document.getElementById(topic);


    if (selectedTopic) {

        selectedTopic.classList.add("active-topic");

    }


    // Update topic buttons
    const topicButtons =
        document.querySelectorAll(".topic-btn");


    topicButtons.forEach(button => {

        button.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }

}



/* ================= INITIAL PAGE ================= */

document.addEventListener("DOMContentLoaded", function () {

    showPage("home");
    
    displayQuizRecords();

});

/* =========================================
   MOBILE BACKGROUND VIDEO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const heroVideo = document.querySelector(".hero-bg-video");

    if (heroVideo) {

        heroVideo.muted = true;
        heroVideo.setAttribute("muted", "");
        heroVideo.setAttribute("playsinline", "");
        heroVideo.setAttribute("webkit-playsinline", "");

        const playVideo = () => {
            const playPromise = heroVideo.play();

            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    console.log("Background video autoplay was blocked.");
                });
            }
        };

        playVideo();

        document.addEventListener("touchstart", playVideo, {
            once: true
        });

    }

});





