const quizData = {
  animaux:[
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

  sushi: [
    { question: "Quel sushi est composé de poisson cru sur une boule de riz ?", options: ['Nigiri', 'Maki'], correct: 'Nigiri' },
    // { question: "Que signifie 'Temaki' ?", options: ['Cornet de sushi', 'Rouleau de riz'], correct: 'Cornet de sushi' },
    { question: "Comment dit-on 'Roulement de riz avec algue' en japonais ?", options: ['Maki', 'Nigiri'], correct: 'Maki' },
    { question: "Quel ingrédient est commun à tous les sushi ?", options: ['Riz vinaigré', 'Algue nori'], correct: 'Riz vinaigré' },
    { question: "Quel sushi est souvent garni d’œufs de poisson ?", options: ['Gunkan', 'Nigiri'], correct: 'Gunkan' },
    { question: "Que signifie 'Sashimi' ?", options: ['Poisson cru sans riz', 'Rouleau de riz'], correct: 'Poisson cru sans riz' },
    { question: "Quel sushi est roulé avec une feuille d'algue ?", options: ['Maki', 'Nigiri'], correct: 'Maki' },
    { question: "Quel poisson est le plus souvent utilisé pour un 'Nigiri' ?", options: ['Saumon', 'Thon'], correct: 'Saumon' },
    { question: "Que contient un 'California roll' ?", options: ['Avocat et crabe', 'Thon et saumon'], correct: 'Avocat et crabe' },
    { question: "Que signifie 'Uramaki' ?", options: ['Sushi avec riz à l’extérieur', 'Sushi en forme de cône'], correct: 'Sushi avec riz à l’extérieur' },
  ],
  maki: [
    { question: "Quel ingrédient est caractéristique d'un maki avocat ?", options: ['Avocat', 'Concombre'], correct: 'Avocat' },
    { question: "Quel type de maki contient du saumon ?", options: ['Maki saumon', 'Maki avocat'], correct: 'Maki saumon' },
    { question: "Quel ingrédient est essentiel dans un maki concombre ?", options: ['Concombre', 'Saumon'], correct: 'Concombre' },
    { question: "Quel type de maki contient du surimi ?", options: ['Maki surimi', 'Maki avocat'], correct: 'Maki surimi' },
    { question: "Quel ingrédient est commun à tous les makis ?", options: ['Riz', 'Algue nori'], correct: 'Riz' },
    { question: "Qu'est-ce qui enveloppe souvent les makis ?", options: ['Algue nori', 'Papier de riz'], correct: 'Algue nori' },
    { question: "Quel type de maki est végétarien ?", options: ['Maki concombre', 'Maki saumon'], correct: 'Maki concombre' },
    { question: "Le mot 'maki' signifie quoi en japonais ?", options: ['Rouler', 'Couper'], correct: 'Rouler' },
    { question: "Comment est préparé un maki ?", options: ['Rouler dans une feuille d’algue', 'Empiler les ingrédients'], correct: 'Rouler dans une feuille d’algue' },
    { question: "Quelle sauce accompagne souvent les makis ?", options: ['Sauce soja', 'Sauce au fromage'], correct: 'Sauce soja' },
  ],
  
  onigiri: [
    { question: "Que signifie 'Onigiri' ?", options: ['Boulettes de riz', 'Rouleau de sushi'], correct: 'Boulettes de riz' },
    { question: "Quel ingrédient est utilisé pour enrober certains 'Onigiri' ?", options: ['Algue nori', 'Sésame noir'], correct: 'Algue nori' },
    { question: "Quel est un ingrédient courant pour garnir un 'Onigiri' ?", options: ['Prune salée', 'Pâte de haricot rouge'], correct: 'Prune salée' },
    { question: "Comment dit-on 'Triangle de riz garni' en japonais ?", options: ['Onigiri', 'Nigiri'], correct: 'Onigiri' },
    { question: "Quel est un autre nom pour un 'Onigiri' ?", options: ['Omusubi', 'Gunkan'], correct: 'Omusubi' },
    { question: "Que contient un 'Onigiri' au thon ?", options: ['Mayonnaise et thon', 'Crème et thon'], correct: 'Mayonnaise et thon' },
  ],
  
  sashimi: [
    { question: "Que signifie 'Sashimi' ?", options: ['Poisson cru coupé finement', 'Sushi au poisson'], correct: 'Poisson cru coupé finement' },
    { question: "Quel poisson est souvent utilisé pour le 'Sashimi' ?", options: ['Saumon', 'Thon'], correct: 'Saumon' },
    { question: "Quel ingrédient accompagne souvent le 'Sashimi' ?", options: ['Wasabi', 'Algue nori'], correct: 'Wasabi' },
    { question: "Comment est servi le 'Sashimi' ?", options: ['En tranches fines', 'En boulettes'], correct: 'En tranches fines' },
  ],
  
  plats: [
    { question: "Que signifie 'Ramen' ?", options: ['Nouilles dans un bouillon', 'Riz sauté'], correct: 'Nouilles dans un bouillon' },
    // { question: "Quel plat est composé de boulettes de viande de poulet ?", options: ['Yakitori', 'Karaage'], correct: 'Yakitori' },
    { question: "Comment dit-on 'Nouilles sautées' en japonais ?", options: ['Yakisoba', 'Ramen'], correct: 'Yakisoba' },
    { question: "Que contient le 'Karaage' ?", options: ['Poulet frit', 'Tempura de légumes'], correct: 'Poulet frit' },
    { question: "Que signifie 'Donburi' ?", options: ['Bol de riz avec garniture', 'Soupe miso'], correct: 'Bol de riz avec garniture' },
    { question: "Quel plat est une soupe à base de soja ?", options: ['Soupe miso', 'Ramen'], correct: 'Soupe miso' },
    { question: "Que signifie 'Okonomiyaki' ?", options: ['Crêpe japonaise', 'Ravioli vapeur'], correct: 'Crêpe japonaise' },
    { question: "Quel plat est surnommé 'pizza japonaise' ?", options: ['Okonomiyaki', 'Yakisoba'], correct: 'Okonomiyaki' },
    { question: "Quel plat est servi avec des nouilles épaisses ?", options: ['Udon', 'Soba'], correct: 'Udon' },
    { question: "Que contient un 'Tonkatsu' ?", options: ['Côtelette de porc panée', 'Poulet frit'], correct: 'Côtelette de porc panée' },
    { question: "Quel plat est souvent servi avec du curry ?", options: ['Katsu curry', 'Donburi'], correct: 'Katsu curry' },
    { question: "Que signifie 'Soba' ?", options: ['Nouilles fines au sarrasin', 'Nouilles épaisses'], correct: 'Nouilles fines au sarrasin' },
    { question: "Quel plat est un bol de riz avec du bœuf ?", options: ['Gyudon', 'Okonomiyaki'], correct: 'Gyudon' },
    { question: "Que contient un 'Takoyaki' ?", options: ['Poulpe', 'Crevettes'], correct: 'Poulpe' },
    { question: "Comment dit-on 'Takoyaki' en français ?", options: ['Boulettes de poulpe', 'Riz sauté'], correct: 'Boulettes de poulpe' },
    { question: "Quel plat est souvent mangé pendant les festivals ?", options: ['Takoyaki', 'Yakitori'], correct: 'Takoyaki' },
  ],

  desserts: [
    { question: "Que signifie 'Matcha' en français ?", options: ['Thé vert', 'Pâte de haricot rouge'], correct: 'Thé vert' },
    { question: "Quel est le dessert fait avec de la pâte de haricot rouge ?", options: ['Dorayaki', 'Taiyaki'], correct: 'Dorayaki' },
    { question: "Que signifie 'Taiyaki' ?", options: ['Gâteau en forme de poisson', 'Glace au thé vert'], correct: 'Gâteau en forme de poisson' },
    { question: "Quel dessert est une 'glace au thé vert' ?", options: ['Glace au matcha', 'Daifuku'], correct: 'Glace au matcha' },
    { question: "Que contient un 'Daifuku' ?", options: ['Pâte de haricot rouge', 'Crème anglaise'], correct: 'Pâte de haricot rouge' },
    { question: "Quel dessert japonais est un gâteau de riz gluant ?", options: ['Mochi', 'Dorayaki'], correct: 'Mochi' },
    { question: "Comment dit-on 'Kakigōri' en français ?", options: ['Glace pilée', 'Crème glacée'], correct: 'Glace pilée' },
    { question: "Quel dessert est souvent dégusté en été au Japon ?", options: ['Kakigōri', 'Taiyaki'], correct: 'Kakigōri' },
    { question: "Que signifie 'Anmitsu' ?", options: ['Gelée sucrée avec des fruits', 'Glace au thé vert'], correct: 'Gelée sucrée avec des fruits' },
    { question: "Comment dit-on 'Manju' en français ?", options: ['Pâte fourrée de haricot rouge', 'Gâteau de riz'], correct: 'Pâte fourrée de haricot rouge' },
    // { question: "Quel dessert est connu pour ses couches fines ?", options: ['Kasutera', 'Dorayaki'], correct: 'Kasutera' },
    { question: "Que signifie 'Dango' ?", options: ['Brochettes de boulettes de riz', 'Gâteau fourré'], correct: 'Brochettes de boulettes de riz' },
    { question: "Quel dessert est populaire pendant les festivals ?", options: ['Dango', 'Mochi'], correct: 'Dango' },
    { question: "Comment dit-on 'Crème glacée au sésame' en japonais ?", options: ['Goma ice', 'Matcha ice'], correct: 'Goma ice' },
    { question: "Que contient un 'Yokan' ?", options: ['Gelée de haricot rouge', 'Thé vert'], correct: 'Gelée de haricot rouge' },
    { question: "Quel dessert est fait à base de gelée et de haricot ?", options: ['Yokan', 'Manju'], correct: 'Yokan' },
    // { question: "Quel dessert est un gâteau éponge importé du Portugal ?", options: ['Kasutera', 'Mochi'], correct: 'Kasutera' },
    { question: "Quel dessert est servi sous forme de brochette ?", options: ['Dango', 'Daifuku'], correct: 'Dango' },
    // { question: "Que signifie 'Kasutera' ?", options: ['Gâteau éponge', 'Gâteau de riz'], correct: 'Gâteau éponge' },
  ],

  politesse: [
    {
      question: "Que signifie 'Arigatou gozaimasu' ?",
      options: ["Merci beaucoup", "Au revoir"],
      correct: "Merci beaucoup",
    },
    { question: "Comment dit-on 'Bonjour' en japonais ?", options: ["Konnichiwa", "Sayōnara"], correct: "Konnichiwa" },
    {
      question: "Que signifie 'Sumimasen' ?",
      options: ["Excusez-moi / Pardon", "De rien"],
      correct: "Excusez-moi / Pardon",
    },
    { question: "Comment dit-on 'Bonsoir' ?", options: ["Konbanwa", "Ohayou gozaimasu"], correct: "Konbanwa" },
    {
      question: "Que signifie 'Ohayou gozaimasu' ?",
      options: ["Bonjour (matin)", "Bonne nuit"],
      correct: "Bonjour (matin)",
    },
    { question: "Que signifie 'Oyasumi nasai' ?", options: ["Bonne nuit", "Au revoir"], correct: "Bonne nuit" },
    {
      question: "Comment dit-on 'Bienvenue' dans un magasin ?",
      options: ["Irasshaimase", "Otsukaresama desu"],
      correct: "Irasshaimase",
    },
    {
      question: "Que signifie 'Otsukaresama desu' ?",
      options: ["Merci pour votre travail", "Bienvenue"],
      correct: "Merci pour votre travail",
    },
    { question: "Comment dit-on 'Au revoir' ?", options: ["Sayōnara", "Arigatou"], correct: "Sayōnara" },
    { question: "Que signifie 'Douitashimashite' ?", options: ["De rien", "Merci"], correct: "De rien" },
    { question: "Comment dit-on 'Merci' en japonais ?", options: ["Arigatou", "Sumimasen"], correct: "Arigatou" },
    { question: "Que signifie 'Itadakimasu' ?", options: ["Je vais manger", "Au revoir"], correct: "Je vais manger" },
    {
      question: "Que signifie 'Gochisousama deshita' ?",
      options: ["Merci pour le repas", "Bonjour"],
      correct: "Merci pour le repas",
    },
    { question: "Comment dit-on 'Je suis désolé(e)' ?", options: ["Gomen nasai", "Sumimasen"], correct: "Gomen nasai" },
    { question: "Que signifie 'Onegaishimasu' ?", options: ["S’il vous plaît", "Merci"], correct: "S’il vous plaît" },
    {
      question: "Comment dit-on 'Bienvenue à la maison' ?",
      options: ["Okaerinasai", "Ittekimasu"],
      correct: "Okaerinasai",
    },
    { question: "Que signifie 'Ittekimasu' ?", options: ["J’y vais", "De rien"], correct: "J’y vais" },
    { question: "Comment répondre à 'Ittekimasu' ?", options: ["Itterasshai", "Okaerinasai"], correct: "Itterasshai" },
    {
      question: "Que signifie 'Itadakimasu' avant de manger ?",
      options: ["Bon appétit", "Merci"],
      correct: "Bon appétit",
    },
    { question: "Comment dit-on 'Je suis fatigué(e)' ?", options: ["Tsukareta", "Sumimasen"], correct: "Tsukareta" },
  ],

  familles: [
    { question: "Comment dit-on 'mère' en japonais ?", options: ["Okaasan", "Okaasa"], correct: "Okaasan" },
    { question: "Que signifie 'Otousan' ?", options: ["Père", "Grand-père"], correct: "Père" },
    { question: "Quel est le mot japonais pour 'frère aîné' ?", options: ["Oniisan", "Otouto"], correct: "Oniisan" },
    { question: "Comment dit-on 'sœur aînée' ?", options: ["Oneesan", "Imouto"], correct: "Oneesan" },
    { question: "Que signifie 'Imouto' ?", options: ["Petite sœur", "Grande sœur"], correct: "Petite sœur" },
    { question: "Quel est le mot japonais pour 'petit frère' ?", options: ["Otouto", "Ani"], correct: "Otouto" },
    { question: "Comment dit-on 'grand-mère' ?", options: ["Obaasan", "Ojisan"], correct: "Obaasan" },
    { question: "Que signifie 'Ojisan' ?", options: ["Oncle", "Grand-père"], correct: "Oncle" },
    { question: "Comment dit-on 'grand-père' ?", options: ["Ojiisan", "Ojisan"], correct: "Ojiisan" },
    { question: "Que signifie 'Obaasan' ?", options: ["Grand-mère", "Tante"], correct: "Grand-mère" },
    { question: "Quel est le mot japonais pour 'oncle' ?", options: ["Ojisan", "Ojiisan"], correct: "Ojisan" },
    { question: "Comment dit-on 'tante' ?", options: ["Obasan", "Obaasan"], correct: "Obasan" },
    { question: "Que signifie 'Kazoku' ?", options: ["Famille", "Mère"], correct: "Famille" },
    { question: "Quel est le mot japonais pour 'cousin' ?", options: ["Itoko", "Ojisan"], correct: "Itoko" },
    { question: "Comment dit-on 'petits-enfants' ?", options: ["Mago", "Kazoku"], correct: "Mago" },
    { question: "Que signifie 'Giri no haha' ?", options: ["Belle-mère", "Grand-mère"], correct: "Belle-mère" },
    {
      question: "Quel est le mot japonais pour 'beau-père' ?",
      options: ["Giri no chichi", "Chichi"],
      correct: "Giri no chichi",
    },
    { question: "Comment dit-on 'neveu' ?", options: ["Oi", "Mei"], correct: "Oi" },
    { question: "Que signifie 'Mei' ?", options: ["Nièce", "Cousine"], correct: "Nièce" },
    { question: "Quel est le mot japonais pour 'fratrie' ?", options: ["Kyoudai", "Kazoku"], correct: "Kyoudai" },
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
        <div id="result-${id + index}" class="mt-3"></div>
      `;
  });
  return html;
}

function loadQuizzes() {
  document.getElementById("quiz-animaux").innerHTML = generateQuestions("animaux", "animaux");
  document.getElementById("quiz-couleurs").innerHTML = generateQuestions("couleurs", "couleurs");
  document.getElementById("quiz-desserts").innerHTML = generateQuestions("desserts", "desserts");
  document.getElementById("quiz-plats").innerHTML = generateQuestions("plats", "plats");
  document.getElementById("quiz-sushi").innerHTML = generateQuestions("sushi", "sushi");
  document.getElementById("quiz-onigiri").innerHTML = generateQuestions("onigiri", "onigiri");
  document.getElementById("quiz-sashimi").innerHTML = generateQuestions("sashimi", "sashimi");
  document.getElementById("quiz-maki").innerHTML = generateQuestions("maki", "maki");
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
// Fonction pour obtenir une question aléatoire avec une option supplémentaire
function getRandomQuestion(category) {
  const categoryData = quizData[category];
  const randomIndex = Math.floor(Math.random() * categoryData.length);
  const randomQuestion = categoryData[randomIndex];

  // Ajouter une option supplémentaire qui est incorrecte
  const incorrectOptions = categoryData
    .filter((question) => question.correct !== randomQuestion.correct)
    .map((question) => question.correct);

  const randomIncorrect = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];

  // Ajouter l'option incorrecte à l'array options
  const extendedOptions = [...randomQuestion.options, randomIncorrect];

  // Mélanger les options pour que l'option incorrecte soit à une position aléatoire
  const shuffledOptions = extendedOptions.sort(() => Math.random() - 0.5);

  return {
    question: randomQuestion.question,
    options: shuffledOptions,
    correct: randomQuestion.correct,
  };
}
window.onload = loadQuizzes;
