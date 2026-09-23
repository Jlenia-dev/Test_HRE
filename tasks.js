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
    scenario: "Hai bisogno di recuperare un documento relativo a <strong>[Nome Cognome]</strong>. Sai che si tratta di un [tipo documento], relativo al [mese/anno o data], associato alla banca [nome banca].",
    activities: [
      "Utilizzando le informazioni a tua disposizione, individua il documento corretto. Verifica tutte le informazioni disponibili per assicurarti che sia quello che stai cercando e, una volta verificato, scaricalo."
    ],
    survey: "https://forms.cloud.microsoft/e/46FhCns6AY"
  },

  2: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "2/5",
    title: "Task 2",
    scenario: "Immagina di voler ricercare documenti specifici.",
    activities: [
      "Visualizza la lista dei documenti relativi alla <strong>matricola 11917</strong>, <strong>Alboni Antonina </strong> e datati <strong>novembre 2022</strong>. Salva in Excel i risultati della ricerca.",
      "Individua il documento <strong>codice H000000026</strong> relativo al <strong>mese di novembre</strong>. Assicurati infine che la modifica sia stata registrata correttamente e, una volta verificato, scarica il documento."
    ],
    survey: "https://forms.cloud.microsoft/e/i8eAnHBmTg"
  },

  3: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "3/5",
    title: "Task 3",
    scenario: "Immagina di aver ricevuto un nuovo documento che deve essere inserito nel sistema.",
    activities: [
      "Il documento: proviene dalla banca [banca mittente - 03599]; è datato [10/10/2026]; è associato all’azienda [03599]; si tratta di un documento relativo a [CEDOLINO PAGA]; è riferito a [ANTONINA ALBONI]; il file da utilizzare bè [3599 CEDO 2026 Settembre.pdf]. È inoltre necessario indicare che [3599 CEDO 2026 Settembre]. Inserisci il documento nel sistema utilizzando le informazioni che ti sono state fornite e assicurati che l’operazione venga completata correttamente."
    ],
    survey: "https://forms.cloud.microsoft/e/30K5b4qWCP"
  },

  4: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "4/5",
    title: "Task 4",
    scenario: "Sai che oggi un determinato utente ha eseguito una specifica operazione e vuoi controllare che l’attività sia stata registrata correttamente e capire se sono disponibili ulteriori informazioni al riguardo.",
    activities: [
      "Individua l’ultima operazione effettuata il 09/09/2026 dall’utente [Codice utente CC9020] relativa a [Download multiplo documenti]. Una volta trovata, consulta tutte le informazioni disponibili che ritieni utili per comprenderne il dettaglio.",
    ],
    survey: "https://forms.cloud.microsoft/e/pdeR53xbKp"
  },

  5: {
    url: "https://collaudo.ourbank.it/pwm-hrmanagement-hre/DocumentSearch",
    counter: "5/5",
    title: "Task 5",
    scenario: "Immagina di voler verificare le informazioni associate a più documenti.",
    activities: [
      "Visualizza il dettaglio di tutti i documenti di tipo ACCORDI SINDACALI da gennaio 2026 ad oggi."
    ],
    survey: "https://forms.cloud.microsoft/e/1sAWSLnxJN"
  }
};

/* QUESTIONARIO — fallback se un task non ha la voce survey.
   Si apre in una scheda accanto quando si apre un task.
   Stringa vuota per non aprire nessun questionario. */
const QUESTIONARIO_URL = "";

/* PROVA — sostituisce l'indirizzo di tutti i task.
   Rimetti la stringa vuota prima del test con i partecipanti. */
const OVERRIDE_URL = "";
