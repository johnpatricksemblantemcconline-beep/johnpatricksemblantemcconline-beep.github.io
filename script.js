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