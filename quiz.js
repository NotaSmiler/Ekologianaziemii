const quizzes = {
  nature: [
    { q: "Jakie zwierzę jest symbolem ochrony środowiska?", a: ["Niedźwiedź polarny", "Panda", "Słoń"], c: 1 },
    { q: "Co to jest fotosynteza?", a: ["Proces oddychania", "Proces wytwarzania tlenu przez rośliny", "Proces tworzenia kamieni"], c: 1 },
    { q: "Dlaczego pszczoły są ważne?", a: ["Bo produkują miód", "Bo są częścią łańcucha pokarmowego", "Bo zapylają rośliny"], c: 2 },
    { q: "Które z poniższych nie jest zagrożonym gatunkiem?", a: ["Nosorożec biały", "Gołąb miejski", "Tygrys bengalski"], c: 1 },
    { q: "Które drzewo występuje w Polsce?", a: ["Baobab", "Dąb", "Sekwoja"], c: 1 },
    { q: "Gdzie występują rafy koralowe?", a: ["Na pustyni", "W oceanach", "W górach"], c: 1 },
    { q: "Jakie są podstawowe elementy ekosystemu?", a: ["Zwierzęta i rośliny", "Tylko rośliny", "Ludzie"], c: 0 },
    { q: "Który z parków narodowych znajduje się w Polsce?", a: ["Yellowstone", "Biebrzański", "Banff"], c: 1 },
    { q: "Jakie zwierzęta zimują w Polsce?", a: ["Bociany", "Jeże", "Jaskółki"], c: 1 },
    { q: "Który grzyb jest trujący?", a: ["Borowik szlachetny", "Muchomor czerwony", "Pieczarka"], c: 1 }
  ],
  energy: [
    { q: "Co to jest energia odnawialna?", a: ["Energia, która się kończy", "Energia z paliw kopalnych", "Energia ze źródeł naturalnych"], c: 2 },
    { q: "Które źródło energii nie jest odnawialne?", a: ["Węgiel", "Słońce", "Wiatr"], c: 0 },
    { q: "Co to jest fotowoltaika?", a: ["Magazynowanie wody", "Produkcja prądu z promieni słonecznych", "Zimowanie zwierząt"], c: 1 },
    { q: "Jakie urządzenie zużywa najwięcej energii w domu?", a: ["Lodówka", "Żarówka LED", "Klimatyzator"], c: 2 },
    { q: "Czym można ogrzewać dom ekologicznie?", a: ["Paliwem kopalnym", "Pompą ciepła", "Węglem brunatnym"], c: 1 },
    { q: "Który kraj przoduje w produkcji energii słonecznej?", a: ["Niemcy", "Chiny", "USA"], c: 1 },
    { q: "Czy samochód elektryczny emituje spaliny?", a: ["Tak", "Nie", "Czasami"], c: 1 },
    { q: "Jak możemy zmniejszyć zużycie energii?", a: ["Zostawiając włączone światła", "Używając energooszczędnych urządzeń", "Ogrzewając otwarte okna"], c: 1 },
    { q: "Czy wiatrak może produkować prąd?", a: ["Tak", "Nie", "Tylko w górach"], c: 0 },
    { q: "Które z poniższych jest przykładem energii geotermalnej?", a: ["Elektrownia wiatrowa", "Ciepło z wnętrza ziemi", "Elektrownia wodna"], c: 1 }
  ],
  waste: [
    { q: "Co oznacza recykling?", a: ["Spalanie śmieci", "Przetwarzanie odpadów", "Zbieranie śmieci do lasu"], c: 1 },
    { q: "Do jakiego pojemnika wyrzuca się szkło?", a: ["Zielonego", "Niebieskiego", "Czerwonego"], c: 0 },
    { q: "Czy plastik można przetwarzać?", a: ["Tak", "Nie", "Tylko niektóre rodzaje"], c: 2 },
    { q: "Który materiał rozkłada się najdłużej?", a: ["Papier", "Skórka od banana", "Plastik"], c: 2 },
    { q: "Jak ograniczyć ilość odpadów?", a: ["Kupować więcej produktów", "Używać wielorazowych opakowań", "Wyrzucać wszystko"], c: 1 },
    { q: "Co można kompostować?", a: ["Resztki jedzenia", "Szkło", "Plastik"], c: 0 },
    { q: "Gdzie trafiają odpady zmieszane?", a: ["Do recyklingu", "Na wysypisko", "Do spalania"], c: 1 },
    { q: "Co oznacza zasada 3R?", a: ["Rower, rower, rower", "Redukuj, użyj ponownie, przetwórz", "Recykling, rejestracja, redukcja"], c: 1 },
    { q: "Czy stare ubrania można oddać?", a: ["Nie", "Tak, do kontenerów PCK", "Tylko wyrzucić"], c: 1 },
    { q: "Co oznacza pojęcie zero waste?", a: ["Produkcja śmieci", "Brak odpadów", "Spalanie odpadów"], c: 1 }
  ],
  climate: [
    { q: "Co to jest efekt cieplarniany?", a: ["Zjawisko ocieplenia klimatu", "Zimowanie roślin", "Topnienie metali"], c: 0 },
    { q: "Który gaz jest głównym gazem cieplarnianym?", a: ["Tlen", "Dwutlenek węgla", "Azot"], c: 1 },
    { q: "Jakie skutki mają zmiany klimatyczne?", a: ["Stabilna pogoda", "Wzrost temperatury", "Brak wpływu"], c: 1 },
    { q: "Co powoduje wzrost CO2 w atmosferze?", a: ["Sadzenie drzew", "Spalanie paliw kopalnych", "Deszcz"], c: 1 },
    { q: "Jak możemy przeciwdziałać zmianom klimatycznym?", a: ["Ignorując je", "Ograniczając emisję CO2", "Zwiększając zużycie energii"], c: 1 },
    { q: "Czy globalne ocieplenie jest realnym zagrożeniem?", a: ["Tak", "Nie", "Nie wiadomo"], c: 0 },
    { q: "Jakie są skutki topnienia lodowców?", a: ["Wzrost poziomu mórz", "Więcej śniegu", "Zimniejsze zimy"], c: 0 },
    { q: "Które działanie pomaga klimatowi?", a: ["Spalanie węgla", "Sadzenie drzew", "Wycinanie lasów"], c: 1 },
    { q: "Czym jest ślad węglowy?", a: ["Odcisk buta", "Emisja CO2 związana z działalnością człowieka", "Temperatura powietrza"], c: 1 },
    { q: "Jakie źródło energii ma najmniejszy wpływ na klimat?", a: ["Węgiel", "Gaz", "Energia słoneczna"], c: 2 }
  ]
};

let results = [];
let visitCount = localStorage.getItem("visits") || 0;
visitCount++;
localStorage.setItem("visits", visitCount);
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("visit-count").textContent = visitCount;
});

function showSection(id) {
  document.querySelectorAll("main section").forEach((s) => (s.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

function loadQuiz() {
  const cat = document.getElementById("category").value;
  const questions = quizzes[cat];
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<strong>${i + 1}. ${q.q}</strong><br>`;
    q.a.forEach((ans, j) => {
      const btn = document.createElement("button");
      btn.textContent = ans;
      btn.className = "answer";
      btn.onclick = () => {
        if (j === q.c) btn.style.background = "#81c784";
        else btn.style.background = "#ef9a9a";
        results.push({ category: cat, question: q.q, answer: ans, correct: j === q.c });
      };
      div.appendChild(btn);
    });
    container.appendChild(div);
  });
}

function downloadCSV() {
  let csv = "Kategoria,Pytanie,Odpowiedź,Czy poprawna\n";
  results.forEach(r => {
    csv += `${r.category},"${r.question}","${r.answer}",${r.correct ? "tak" : "nie"}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "wyniki_quizu.csv";
  link.click();
}