// Dados simulados

const resultadosFutebol = [
  { timeA: "Barcelona", golsA: 2, timeB: "Real Madrid", golsB: 3 },
  { timeA: "Manchester City", golsA: 1, timeB: "Arsenal", golsB: 1 },
  { timeA: "Bayern", golsA: 4, timeB: "Dortmund", golsB: 2 }
];

const classificacao = [
  { time: "Barcelona", pts: 45, vit: 14, emp: 3, der: 2, sg: 25 },
  { time: "Real Madrid", pts: 43, vit: 13, emp: 4, der: 2, sg: 21 },
  { time: "Atlético Madrid", pts: 38, vit: 11, emp: 5, der: 3, sg: 15 }
];

const corridasF1 = [
  { nome: "GP de Mônaco", data: "26/05/2025" },
  { nome: "GP do Canadá", data: "09/06/2025" },
  { nome: "GP da Inglaterra", data: "14/07/2025" }
];

// Funções para renderizar dados

function renderizarResultados() {
  const ul = document.getElementById("futebol-resultados");
  resultadosFutebol.forEach(jogo => {
    const li = document.createElement("li");
    li.textContent = `${jogo.timeA} ${jogo.golsA} x ${jogo.golsB} ${jogo.timeB}`;
    ul.appendChild(li);
  });
}

function renderizarTabela() {
  const tbody = document.getElementById("tabela-futebol");
  classificacao.forEach(time => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${time.time}</td>
      <td>${time.pts}</td>
      <td>${time.vit}</td>
      <td>${time.emp}</td>
      <td>${time.der}</td>
      <td>${time.sg}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderizarF1() {
  const ul = document.getElementById("f1-proximas");
  corridasF1.forEach(corrida => {
    const li = document.createElement("li");
    li.textContent = `${corrida.nome} - ${corrida.data}`;
    ul.appendChild(li);
  });
}

// Inicializar
renderizarResultados();
renderizarTabela();
renderizarF1();
