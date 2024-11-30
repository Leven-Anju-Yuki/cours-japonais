// Vérifier si le navigateur supporte l'API Web Speech
if ('speechSynthesis' in window) {
  // Fonction pour vérifier si le son est actif
  function checkAudioContext() {
    return new Promise((resolve) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start(0);
      oscillator.stop(0.1);

      gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.1);

      audioContext.resume().then(() => {
        const state = audioContext.state; // Vérifie l'état de l'AudioContext
        audioContext.close();
        resolve(state === 'running');
      });
    });
  }

  // Fonction pour lire un texte en japonais
  function speak(text) {
    checkAudioContext().then((isAudioActive) => {
      if (!isAudioActive) {
        alert('Le son de votre appareil semble désactivé. Veuillez vérifier vos paramètres audio.');
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP'; // Définit la langue à Japonais

      // Vérifier si des voix sont disponibles
      const availableVoices = window.speechSynthesis.getVoices();
      const japaneseVoice = availableVoices.find(voice => voice.lang === 'ja-JP');

      if (japaneseVoice) {
        utterance.voice = japaneseVoice; // Utiliser une voix japonaise si disponible
      } else {
        console.warn('Voix japonaise non disponible, lecture avec une voix par défaut.');
      }

      // Lecture de la voix
      window.speechSynthesis.speak(utterance);
    });
  }

  // Ajouter des événements d'écoute à chaque bouton
  document.querySelectorAll('.btn-listen').forEach(button => {
    button.addEventListener('click', function () {
      const pronunciation = this.getAttribute('data-pronunciation');
      speak(pronunciation);
    });
  });

  // Vérifier si les voix sont chargées
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      console.log('Voix chargé');
    };
  }
} else {
  alert('Votre navigateur ne supporte pas la lecture vocale.');
}
// Vérifier si le navigateur supporte les Service Workers
if ("serviceWorker" in navigator) {
  // Enregistrer le Service Worker
  navigator.serviceWorker.register("/sw.js").then(
    function (registration) {
      console.log("Service Worker registration successful with scope: ", registration.scope);
    },
    function (error) {
      console.log("Service Worker registration failed: ", error);
    }
  );
}
//========================POUR INSTALLER=================================
// Variable pour stocker l'événement beforeinstallprompt
let deferredPrompt;
// Sélectionner le bouton d'installation
const installButton = document.getElementById("installButton");

// Écouter l'événement beforeinstallprompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Empêcher l'affichage automatique de l'invite d'installation
  deferredPrompt = e; // Stocker l'événement
  installButton.style.display = "block"; // Afficher le bouton d'installation
});

// Écouter le clic sur le bouton d'installation
installButton.addEventListener("click", () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Afficher l'invite d'installation
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt"); // L'utilisateur a accepté l'installation
      } else {
        console.log("User dismissed the A2HS prompt"); // L'utilisateur a refusé l'installation
      }
      deferredPrompt = null; // Réinitialiser l'événement
      installButton.style.display = "none"; // Masquer le bouton d'installation
    });
  }
});

// Écouter l'événement appinstalled
window.addEventListener("appinstalled", () => {
  console.log("PWA was installed"); // La PWA a été installée
});
