// Définition de la variable animaux
const animaux = [
  { question: "Quel est le mot japonais pour 'chat' ?", options: ["Neko", "Inu", "Usagi"], correct: "Neko" },
  { question: "Comment dit-on 'chien' ?", options: ["Inu", "Usagi", "Kitsune"], correct: "Inu" },
  { question: "Quel animal est 'Tori' ?", options: ["Oiseau", "Lapin", "Poisson"], correct: "Oiseau" },
  { question: "Comment dit-on 'cheval' ?", options: ["Uma", "Hebi", "Buta"], correct: "Uma" },
  { question: "Quel animal est 'Sakana' ?", options: ["Poisson", "Tortue", "Chat"], correct: "Poisson" },
  { question: "Quel est le mot japonais pour 'lapin' ?", options: ["Usagi", "Kame", "Tori"], correct: "Usagi" },
  { question: "Comment dit-on 'tortue' ?", options: ["Kame", "Tori", "Usagi"], correct: "Kame" },
  { question: "Quel est le mot pour 'serpent' ?", options: ["Hebi", "Uma", "Saru"], correct: "Hebi" },
  { question: "Comment dit-on 'souris' ?", options: ["Nezumi", "Inu", "Tori"], correct: "Nezumi" },
  { question: "Quel animal est 'Kitsune' ?", options: ["Renard", "Chat", "Loup"], correct: "Renard" },
  { question: "Quel est le mot japonais pour 'vache' ?", options: ["Ushi", "Uma", "Saru"], correct: "Ushi" },
  { question: "Comment dit-on 'singe' ?", options: ["Saru", "Kuma", "Raion"], correct: "Saru" },
  { question: "Quel animal est 'Kuma' ?", options: ["Ours", "Renard", "Lion"], correct: "Ours" },
  { question: "Quel est le mot japonais pour 'canard' ?", options: ["Ahiru", "Uma", "Nezumi"], correct: "Ahiru" },
  { question: "Comment dit-on 'loup' ?", options: ["Ōkami", "Kitsune", "Raion"], correct: "Ōkami" },
  { question: "Quel est le mot pour 'oiseau' ?", options: ["Tori", "Usagi", "Sakana"], correct: "Tori" },
  { question: "Comment dit-on 'papillon' ?", options: ["Chō", "Uma", "Hebi"], correct: "Chō" },
  { question: "Quel animal est 'Kaeru' ?", options: ["Grenouille", "Tortue", "Poisson"], correct: "Grenouille" },
  { question: "Comment dit-on 'cochon' ?", options: ["Buta", "Kame", "Saru"], correct: "Buta" },
  { question: "Comment dit-on 'panda' ?", options: ["Panda", "Uma", "Tori"], correct: "Panda" },
  { question: "Quel est le mot japonais pour 'lion' ?", options: ["Raion", "Uma", "Tori"], correct: "Raion" },
  { question: "Comment dit-on 'poisson rouge' ?", options: ["Kingyo", "Sakana", "Tori"], correct: "Kingyo" },
];

// Fonction pour mélanger les options de manière aléatoire
function shuffleOptions(question) {
  for (let i = question.options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
  }
}

// Mélanger les options de chaque question
animaux.forEach(question => shuffleOptions(question));

// // Afficher les questions et options dans la console pour vérifier
// animaux.forEach(question => {
//   console.log(question.question);
//   console.log("Options:", question.options);
//   console.log("Réponse correcte:", question.correct);
// });

let totalQuestions = 0;
let correctAnswers = 0;

function generateQuestions(section, id) {
  let html = "";
  animaux[section].forEach((q, index) => {
    html += `
        <p>${index + 1}. ${q.question}</p>
        <button class="btn btn-outline-primary" onclick="checkAnswer('${q.correct}', '${id + index}', '${section}')">${
      q.options[0]
    }</button>
        <button class="btn btn-outline-primary" onclick="checkAnswer('${q.correct}', '${id + index}', '${section}')">${
      q.options[1]
    }</button>
        <div id="result-${id + index}" class="mt-3"></div>
      `;
  });
  return html;
}

function loadQuizzes() {
  document.getElementById("quiz-animaux").innerHTML = generateQuestions("animaux", "animaux");
}

function checkAnswer(correct, id, section) {
  const resultDiv = document.getElementById(`result-${id}`);
  if (!resultDiv.dataset.answered) {
    totalQuestions++;
    if (correct === event.target.innerText) {
      correctAnswers++;
      resultDiv.innerHTML = '<span class="text-success">✅ Correct !</span>';
    } else {
      resultDiv.innerHTML = '<span class="text-danger">❌ Mauvaise réponse.</span>';
    }
    resultDiv.dataset.answered = "true";
    updateScore();
  }
}

function updateScore() {
  const score = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  document.getElementById(
    "score"
  ).innerText = `Tu as répondu correctement à ${correctAnswers}/${totalQuestions} questions (${score}%).`;
}
window.onload = loadQuizzes;
