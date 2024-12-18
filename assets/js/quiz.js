const quizData = {
  animaux: [
    { question: "Quel est le mot japonais pour 'chat' ?", options: ["Neko", "Inu"], correct: "Neko" },
    { question: "Comment dit-on 'chien' ?", options: ["Inu", "Usagi"], correct: "Inu" },
    { question: "Quel animal est 'Tori' ?", options: ["Oiseau", "Lapin"], correct: "Oiseau" },
    { question: "Comment dit-on 'cheval' ?", options: ["Uma", "Hebi"], correct: "Uma" },
    { question: "Quel animal est 'Sakana' ?", options: ["Poisson", "Tortue"], correct: "Poisson" },
    { question: "Quel est le mot japonais pour 'lapin' ?", options: ["Usagi", "Kame"], correct: "Usagi" },
    { question: "Comment dit-on 'tortue' ?", options: ["Kame", "Tori"], correct: "Kame" },
    { question: "Quel est le mot pour 'serpent' ?", options: ["Hebi", "Uma"], correct: "Hebi" },
    { question: "Comment dit-on 'souris' ?", options: ["Nezumi", "Inu"], correct: "Nezumi" },
    { question: "Quel animal est 'Kitsune' ?", options: ["Renard", "Chat"], correct: "Renard" },
    { question: "Quel est le mot japonais pour 'vache' ?", options: ["Ushi", "Uma"], correct: "Ushi" },
    { question: "Comment dit-on 'singe' ?", options: ["Saru", "Kuma"], correct: "Saru" },
    { question: "Quel animal est 'Kuma' ?", options: ["Ours", "Renard"], correct: "Ours" },
    { question: "Quel est le mot japonais pour 'canard' ?", options: ["Ahiru", "Uma"], correct: "Ahiru" },
    { question: "Comment dit-on 'loup' ?", options: ["Ōkami", "Kitsune"], correct: "Ōkami" },
    { question: "Quel est le mot pour 'oiseau' ?", options: ["Tori", "Usagi"], correct: "Tori" },
    { question: "Comment dit-on 'papillon' ?", options: ["Chō", "Uma"], correct: "Chō" },
    { question: "Quel animal est 'Kaeru' ?", options: ["Grenouille", "Tortue"], correct: "Grenouille" },
    { question: "Comment dit-on 'cochon' ?", options: ["Buta", "Kame"], correct: "Buta" },
    { question: "Comment dit-on 'panda' ?", options: ['Panda', 'Uma'], correct: 'Panda' },

    { question: "Quel est le mot japonais pour 'lion' ?", options: ["Raion", "Uma"], correct: "Raion" },
    { question: "Comment dit-on 'poisson rouge' ?", options: ["Kingyo", "Sakana"], correct: "Kingyo" },
  ],

  couleurs: [
    { question: "Quel est le mot japonais pour 'rouge' ?", options: ["Aka", "Ao"], correct: "Aka" },
    { question: "Comment dit-on 'bleu' ?", options: ["Ao", "Shiro"], correct: "Ao" },
    { question: "Quel est le mot pour 'jaune' ?", options: ["Kiiro", "Midori"], correct: "Kiiro" },
    { question: "Quel est le mot pour 'vert' ?", options: ["Midori", "Ao"], correct: "Midori" },
    { question: "Comment dit-on 'noir' ?", options: ["Kuro", "Shiro"], correct: "Kuro" },
    { question: "Quel est le mot japonais pour 'blanc' ?", options: ["Shiro", "Aka"], correct: "Shiro" },
    { question: "Quel est le mot pour 'rose' ?", options: ["Pinku", "Ao"], correct: "Pinku" },
    { question: "Comment dit-on 'marron' ?", options: ["Chairo", "Kiiro"], correct: "Chairo" },
    { question: "Quel est le mot pour 'violet' ?", options: ["Murasaki", "Midori"], correct: "Murasaki" },
    { question: "Quel est le mot japonais pour 'gris' ?", options: ["Haiiro", "Kuro"], correct: "Haiiro" },
    { question: "Comment dit-on 'or' ?", options: ["Kin", "Gin"], correct: "Kin" },
    { question: "Quel est le mot pour 'argent' ?", options: ["Gin", "Kin"], correct: "Gin" },
    { question: "Quel est le mot japonais pour 'turquoise' ?", options: ["Tākōizu", "Ao"], correct: "Tākōizu" },
    { question: "Comment dit-on 'beige' ?", options: ["Beijyu", "Shiro"], correct: "Beijyu" },
    { question: "Quel est le mot pour 'rouge clair' ?", options: ["Usuaka", "Aka"], correct: "Usuaka" },
    { question: "Comment dit-on 'bleu foncé' ?", options: ["Kon", "Ao"], correct: "Kon" },
    {
      question: "Quel est le mot japonais pour 'vert clair' ?",
      options: ["Usumidori", "Midori"],
      correct: "Usumidori",
    },
    { question: "Quel est le mot pour 'blanc cassé' ?", options: ["Shirocha", "Shiro"], correct: "Shirocha" },
    { question: "Comment dit-on 'rose clair' ?", options: ["Usupinku", "Pinku"], correct: "Usupinku" },
    { question: "Quel est le mot pour 'gris foncé' ?", options: ["Kurogane", "Haiiro"], correct: "Kurogane" },
  ],

  nourriture: [
    { question: "Quel est le mot japonais pour 'riz' ?", options: ["Gohan", "Niku"], correct: "Gohan" },
    { question: "Comment dit-on 'viande' ?", options: ["Niku", "Sakana"], correct: "Niku" },
    { question: "Quel mot signifie 'poisson' ?", options: ["Sakana", "Niku"], correct: "Sakana" },
    { question: "Quel est le mot pour 'nouilles' ?", options: ["Men", "Sakana"], correct: "Men" },
    { question: "Comment dit-on 'thé vert' ?", options: ["Ocha", "Sake"], correct: "Ocha" },
    // 15 questions supplémentaires similaires...
  ],

  politesse: [
    { question: "Que signifie 'Arigatou' ?", options: ["Merci", "Bonjour"], correct: "Merci" },
    { question: "Comment dit-on 'bonjour' le matin ?", options: ["Ohayou", "Konnichiwa"], correct: "Ohayou" },
    { question: "Que signifie 'Sumimasen' ?", options: ["Excusez-moi", "Au revoir"], correct: "Excusez-moi" },
    // 17 questions supplémentaires similaires...
  ],

  familles: [
    { question: "Comment dit-on 'mère' en japonais ?", options: ["Okaasan", "Chichi"], correct: "Okaasan" },
    { question: "Quel est le mot pour 'père' ?", options: ["Otousan", "Ani"], correct: "Otousan" },
    { question: "Quel mot signifie 'frère aîné' ?", options: ["Oneesan", "Imouto"], correct: "Oneesan" },
    // 17 questions supplémentaires similaires...
  ],
};

let totalQuestions = 0;
let correctAnswers = 0;

function generateQuestions(section, id) {
  let html = "";
  quizData[section].forEach((q, index) => {
    html += `
        <p>${index + 1}. ${q.question}</p>
        <button class="btn btn-outline-primary" onclick="checkAnswer('${q.correct}', '${id + index}', '${section}')">${
      q.options[0]
    }</button>
        <button class="btn btn-outline-primary" onclick="checkAnswer('${q.correct}', '${id + index}', '${section}')">${
      q.options[1]
    }</button>
        <div id="result-${id + index}" class="mt-2"></div>
      `;
  });
  return html;
}

function loadQuizzes() {
  document.getElementById("quiz-animaux").innerHTML = generateQuestions("animaux", "animaux");
  document.getElementById("quiz-couleurs").innerHTML = generateQuestions("couleurs", "couleurs");
  document.getElementById("quiz-nourriture").innerHTML = generateQuestions("nourriture", "nourriture");
  document.getElementById("quiz-politesse").innerHTML = generateQuestions("politesse", "politesse");
  document.getElementById("quiz-familles").innerHTML = generateQuestions("familles", "familles");
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
