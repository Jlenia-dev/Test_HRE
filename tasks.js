/* CONTENUTI DEI TASK — è l'unico file da modificare.
   Lo legge task-tabs.html.
   url / counter / title / scenario / activities / survey.

   Nel testo si può usare:
   <strong>…</strong>            grassetto
   <span class="caps">…</span>   maiuscolo (per le voci che sul sito
                                 compaiono in maiuscolo: Password, Utente…)

   activities accetta una sola attività o un elenco: con una sola
   l'etichetta resta "ATTIVITÀ", con due o più vengono numerate. */

const TASKS = {
  1: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "1/5",
    title: "Task 1",
    scenario: "Immagina di voler accedere alla funzione che consente di visualizzare su Ourbank i documenti relativi a ...",
    activities: [
      "Accedi al portale con <strong>UTENTE</strong> e <strong>PASSWORD</strong>.",
      "<strong> Cerca la funzionalità </strong> all'interno di Ourbank che ti consenta di visualizzare i documenti relativi a ..."
    ],
    survey: "https://forms.cloud.microsoft/e/46FhCns6AY"
  },

  2: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "2/5",
    title: "Task 2",
    scenario: "Immagina di aver bisogno di ricercare alcuni documenti specifici.",
    activities: [
      "<strong>Salva in formato excel</strong> la lista dei documenti relativi alla <strong>matricola 11917</strong>, <strong>Alboni Antonina </strong> e datati <strong>novembre 2022</strong>.",
      "Individua nella lista il documento <strong>codice H000000026</strong> e aggiorna il mese a <strong>Novembre</strong>. <br> Verifica che <strong>la modifica sia stata registrata correttamente</strong>, poi <strong>scarica il documento</strong>."
    ],
    survey: "https://forms.cloud.microsoft/e/i8eAnHBmTg"
  },

  3: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "3/5",
    title: "Task 3",
    scenario: "Immagina di aver ricevuto un nuovo documento che deve essere inserito nel sistema.",
    activities: [
      "<p><strong>Inserisci nel sistema un documento</strong> con le seguenti caratteristiche:</p><ul><li>Banca mittente: <strong>03599</strong></li><li>Data: <strong>10/10/2026</strong></li><li>Azienda: <strong>03599</strong></li><li>Tipologia: <strong>Cedolino paga</strong></li><li>Riferito a: <strong>Antonina Alboni, matricola INPS</strong></li><li>File: <strong>3599 CEDO 2026 Settembre.pdf</strong></li></ul><br><p>Assicurati poi che l'<strong>operazione venga completata correttamente</strong>.</p>"
    ],
    survey: "https://forms.cloud.microsoft/e/30K5b4qWCP"
  },

  4: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "4/5",
    title: "Task 4",
    scenario: "Immagina di dover controllare che l'operazione di un utente sia stata registrata correttamente.",
    activities: [
      "Verifica che sia stata registrata correttamente l'operazione <strong>'Ricerca documenti'</strong> eseguita il <strong>09/09/2026</strong> dall'<strong>utente con codice CC9020</strong>."
    ],
    survey: "https://forms.cloud.microsoft/e/pdeR53xbKp"
  },

  5: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "5/5",
    title: "Task 5",
    scenario: "Immagina di voler verificare le informazioni associate a più documenti.",
    activities: [
      "Visualizza il dettaglio di tutti i documenti di <strong>tipo 'Accordi sindacali'</strong> da <strong>gennaio 2026</strong> ad oggi."
    ],
    survey: "https://forms.cloud.microsoft/e/1sAWSLnxJN"
  }
};

/* QUESTIONARIO — fallback se un task non ha la voce survey.
   Si apre in una scheda accanto quando si apre un task.
   Stringa vuota per non aprire nessun questionario. */
const QUESTIONARIO_URL = "";

/* PROVA — sostituisce l’indirizzo di tutti i task.
   Rimetti la stringa vuota prima del test con i partecipanti. */
const OVERRIDE_URL = "";
