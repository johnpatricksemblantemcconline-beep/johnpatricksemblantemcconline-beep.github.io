/* ================= SUPABASE CONNECTION ================= */

const SUPABASE_URL = "https://cslowewwwtmxyxxexkhk.supabase.co";

const SUPABASE_KEY = "sb_publishable_1VPycUBAxFakmD6SA4rVHA_25gSF8tb";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

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

    updateTeacherUI();

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

/* ================= TEACHER LOGIN ================= */

function openTeacherLogin() {

    document.getElementById("authTitle").textContent =
        "Teacher Login";

    document.getElementById("authSubtitle").textContent =
        "Log in to manage your learning links.";

    document.getElementById("authMainButton").textContent =
        "🔐 Log In";

    document.getElementById("authMessage").textContent =
        "";

    document.getElementById("teacherAuthModal").style.display =
        "flex";
}


function closeTeacherLogin() {

    document.getElementById("teacherAuthModal").style.display =
        "none";
}


async function teacherLogin() {

    const email =
        document.getElementById("teacherEmail").value.trim();

    const password =
        document.getElementById("teacherPassword").value;

    const message =
        document.getElementById("authMessage");


    if (email === "" || password === "") {

        message.textContent =
            "Please enter your email and password.";

        return;
    }


    message.textContent =
        "Logging in...";


    const {
        data,
        error
    } = await supabaseClient.auth.signInWithPassword({

        email: email,

        password: password

    });


    if (error) {

        console.error("Login error:", error);

        message.textContent =
            "❌ " + error.message;

        return;
    }


    message.textContent =
        "💗 Login successful!";


    setTimeout(() => {

        closeTeacherLogin();

        updateTeacherUI();

    }, 700);
}


function handleTeacherAuth() {

    teacherLogin();

}


async function teacherLogout() {

    const {
        error
    } = await supabaseClient.auth.signOut();


    if (error) {

        console.error(
            "Logout error:",
            error
        );

        return;
    }


    alert("👋 Teacher logged out.");

    updateTeacherUI();

}

/* ================= TEACHER UI ================= */

async function updateTeacherUI() {

    const {
        data: {
            user
        }
    } = await supabaseClient.auth.getUser();


    const loginButton =
        document.getElementById("teacherLoginBtn");

    const addLinkCard =
        document.getElementById("addLinkCard");


    if (user) {

        loginButton.textContent =
            "🚪 Teacher Logout";

        loginButton.onclick =
            teacherLogout;

        addLinkCard.style.display =
            "block";

    } else {

        loginButton.textContent =
            "👩‍🏫 Teacher Login";

        loginButton.onclick =
            openTeacherLogin;

        addLinkCard.style.display =
            "none";
    }


    displayLearningLinks();
}

/* ================= LEARNING LINKS ================= */

async function displayLearningLinks() {

    const container =
        document.getElementById("linksContainer");


    const {
        data: {
            user
        }
    } = await supabaseClient.auth.getUser();


    const isTeacher =
        !!user;


    const {
        data: links,
        error
    } = await supabaseClient
        .from("learning_links")
        .select("*")
        .order("created_at", {
            ascending: false
        });


    if (error) {

        console.error(
            "Error loading links:",
            error
        );

        container.innerHTML = `
            <div class="empty-links">
                ❌ Unable to load learning links.
            </div>
        `;

        return;
    }


    container.innerHTML = "";


    if (!links || links.length === 0) {

        container.innerHTML = `
            <div class="empty-links">
                🌷 No learning links yet.
            </div>
        `;

        return;
    }


    links.forEach(link => {

        const card =
            document.createElement("div");


        card.className =
            "link-card";


        let deleteButton = "";


        if (isTeacher) {

            deleteButton = `
                <button
                    class="delete-link"
                    onclick="deleteLearningLink(${link.id})">
                    ×
                </button>
            `;
        }


        card.innerHTML = `

            ${deleteButton}

            <h3>
                🔗 ${escapeHTML(link.title)}
            </h3>

            <p>
                ${escapeHTML(link.url)}
            </p>

            <a
                href="${escapeHTML(link.url)}"
                target="_blank"
                rel="noopener noreferrer">

                Open Website →

            </a>
        `;


        container.appendChild(card);

    });
}

/* ================= SECURITY HELPER ================= */

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}

/* ================= ADD LEARNING LINK ================= */

async function addLearningLink() {

    const title =
        document.getElementById("linkTitle").value.trim();

    const url =
        document.getElementById("linkURL").value.trim();


    if (title === "" || url === "") {

        alert(
            "Please enter both the website title and URL."
        );

        return;
    }


    const {
        error
    } = await supabaseClient
        .from("learning_links")
        .insert([
            {
                title: title,
                url: url
            }
        ]);


    if (error) {

        console.error(
            "Error adding learning link:",
            error
        );

        alert(
            "❌ Unable to add the learning link."
        );

        return;
    }


    document.getElementById("linkTitle").value =
        "";

    document.getElementById("linkURL").value =
        "";


    alert(
        "🌷 Learning link added successfully!"
    );


    displayLearningLinks();
}

/* ================= DELETE LEARNING LINK ================= */

async function deleteLearningLink(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this learning link?"
        );


    if (!confirmDelete) {
        return;
    }


    const {
        error
    } = await supabaseClient
        .from("learning_links")
        .delete()
        .eq("id", id);


    if (error) {

        console.error(
            "Error deleting learning link:",
            error
        );

        alert(
            "❌ Unable to delete the learning link."
        );

        return;
    }


    displayLearningLinks();
}







