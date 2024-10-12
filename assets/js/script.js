  // Vérifier si le navigateur supporte l'API Web Speech
      if ('speechSynthesis' in window) {
        // Fonction pour lire le son
        function speak(text) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'ja-JP'; // Japonais
          window.speechSynthesis.speak(utterance);

        }

        // Ajouter des événements d'écoute à chaque bouton
        document.querySelectorAll('.btn-listen').forEach(button => {
          button.addEventListener('click', function () {
            const pronunciation = this.getAttribute('data-pronunciation');
            speak(pronunciation);
          });
        });
      } else {
        alert('Votre navigateur ne supporte pas la lecture vocale.');
      }

      // Vérifier si le navigateur supporte les Service Workers
    if ("serviceWorker" in navigator) {
      // Enregistrer le Service Worker
      navigator.serviceWorker.register("/sw.js").then(
          function(registration) {
              console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function(error) {
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
