function openSection(sectionId) {
    const title = document.getElementById("section-title");
    const description = document.getElementById("section-description");
    const detailBox = document.getElementById("section-detail");

    if (sectionId === 'section1') {
        title.innerText = "My Experience";
        description.innerText = "From a very early age, I have loved to solve math equations, build puzzles, legos, origami, puppets, and anything else I could get my hands on growing up. However, as I grew up and started to become more serious about what career path I would pursue, I was very unsure. During the year of 2019, my dad offered me an internship at his company doing Project Management. I completed this internship for 3 months. Although it was very fun, I did not feel as passionate about it. However, just a few months later, I began another internship under him doing cybersecurity. I would end up completing this internship for just under 2 years, bouncing around between Cybersecurity and IT Help Desk. After completing my mission, I returned home to complete yet another internship at his new company as a Cyber Defence Engineer and Analyst assisting the Cybersecurity team to fortify systems as a multi-billion dollar company. I am currently a Systems Administrator in the Mechanical Engineering Department. Although it seems I have interned and worked so much, I still feel that there is so much for me to learn! ";

    } else if (sectionId === 'section2') {
        title.innerText = "My Hobbies";
        description.innerText = "In my free time, I love playing soccer, a sport that keeps me active and challenges me both mentally and physically. The teamwork and strategy involved keep me coming back to the field, and it’s a great way to connect with friends and meet new people. Alongside sports, I am passionate about cybersecurity and enjoy exploring the latest developments in the field. Cybersecurity fascinates me because it combines technology, problem-solving, and the responsibility of protecting information—skills that I’m always excited to deepen and expand.Spending quality time with my family is another priority. Whether it’s sharing a meal, taking a walk, or just being together, these moments mean a lot to me. I’m also passionate about learning new things in general, whether it’s a skill, a concept, or something that broadens my perspective. One of my most meaningful pursuits is sharing the gospel with people around me. It’s important to me to spread messages of faith, hope, and love, and I find joy in talking with others about the values that guide my life.";
    } else if (sectionId === 'section3') {
        title.innerText = "My Family";
        description.innerText = "This is the most important part of who I am! My dad immigrated to America when he was 8 years old. His father brought his family to America to live the American dream! My Grandpa is a preacher for his own church, while my grandpa on my mom's side is a strong baptist and great christian man! I was born in Arizona after my parents met in North Carolina in community college. I am the oldest of 2. I am 21 years old while my brother is just 18 months younger than me. My mom grew up in North Carolina and has been a stay at home mother her whole life. My dad has been a CEO for the entire time I have been alive and has taught me much about the world around me. As a family, we have lived in Arizona, Texas, and now North Carolina. We love to eat together as well as travel to many new places. One thing that makes the Tarwasokono family so unique is both the sacrifices and goodness that my family has exemplified. We have some of the biggest hearts in the world and would do anything for anyone.";
    }

    detailBox.style.display = "block";
}

function closeSection() {
    const detailBox = document.getElementById("section-detail");
    detailBox.style.display = "none";
}

function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    };
    dateTimeElement.innerText = now.toLocaleDateString(undefined, options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

const headerText = "See below to learn more about Noah Tarwasokono! I am currently a sophomore in the Cybersecurity Major at BYU with a dream to serve our country, thus making the world a safer place! I hope you enjoy this simple website I created introducing a little more about who I am!";
let headerIndex = 0;

function typeHeader() {
    const headerElement = document.getElementById("dynamic-header");
    if (headerIndex < headerText.length) {
        headerElement.innerHTML += headerText.charAt(headerIndex);
        headerIndex++;
        setTimeout(typeHeader, 30); // Adjust the speed here (in milliseconds) if needed
    }
}

window.onload = typeHeader; // Start typing effect when the page loads

document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatlog = document.getElementById("chatlog");

    // Get the user message
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Display user message
        chatlog.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
        
        // Respond with a fixed message
        chatlog.innerHTML += `<div><strong>Chatbot:</strong> Thanks! You are awesome!</div>`;

        // Clear the input field
        userInput.value = "";

        // Scroll to the bottom of the chatlog
        chatlog.scrollTop = chatlog.scrollHeight;
    }
}

// Function to toggle the chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "block"; // Show chatbot
    } else {
        chatbotContainer.style.display = "none"; // Hide chatbot
    }
}

// Close chatbot if clicking outside
document.addEventListener('click', function(event) {
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatIcon = document.getElementById("chat-icon");

    // Check if the clicked target is outside the chatbot container and the chat icon
    if (!chatbotContainer.contains(event.target) && !chatIcon.contains(event.target)) {
        chatbotContainer.style.display = "none"; // Hide chatbot
    }
});
