document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quizForm');
  const contenedorResultado = document.getElementById('resultadoQuiz');
  const nombreResultado = document.getElementById('nombreResultado');
  const imagenResultado = document.getElementById('imagenResultado');
  const descripcionResultado = document.getElementById('descripcionResultado');
  const btnReintentar = document.getElementById('btnReintentar');

  const personajesInfo = {
    capitan: {
      nombre: "Capitán América (Steve Rogers)",
      imagen: "media/captian_america.webp",
      descripcion: "¡Eres un verdadero líder, leal, valiente y firme en tus principios! Siempre das el ejemplo y nunca te rindes ante las adversidades."
    },
    thor: {
      nombre: "Thor Odinson",
      imagen: "media/thor.webp",
      descripcion: "¡Noble, poderoso y con un corazón gigantesco! Proteges a los tuyos con valor y no le temes a ningún desafío por difícil que parezca."
    },
    captain_marvel: {
      nombre: "Captain Marvel (Carol Danvers)",
      imagen: "media/Captain_Marvel.webp",
      descripcion: "¡Posees una confianza inquebrantable y un poder descomunal! Eres independiente, decidida y siempre llegas más lejos, más alto y más rápido."
    },
    spiderman: {
      nombre: "Spider-Man (Peter Parker)",
      imagen: "media/spider_man.webp",
      descripcion: "¡Eres humilde, alegre y muy inteligente! Afrontas los momentos difíciles con buen humor y tienes bien claro el sentido de la responsabilidad."
    },
    ironman: {
      nombre: "Iron Man (Tony Stark)",
      imagen: "media/iron_man.webp",
      descripcion: "¡Un genio carismático e innovador! Confías plenamente en tu intelecto y tienes la habilidad de resolver cualquier problema con estilo."
    },
    wanda: {
      nombre: "Scarlet Witch (Wanda Maximoff)",
      imagen: "media/Scarlet_Witch.webp",
      descripcion: "¡Tienes una pasión y fuerza interior imparables! Defiendes lo que amas con una intensidad capaz de cambiar las cosas a tu alrededor."
    },
    doom: {
      nombre: "Doctor Doom (Victor von Doom)",
      imagen: "media/Doctor_Doom.webp",
      descripcion: "¡Estratégico, ambicioso y perfeccionista! Tienes alma de gobernante y buscas siempre el dominio total y la excelencia en todo lo que haces."
    },
    fantastico: {
      nombre: "Sr. Fantástico (Reed Richards)",
      imagen: "media/señor_fantastico.webp",
      descripcion: "¡Analítico y curioso por naturaleza! Tu mente siempre va un paso adelante buscando explicaciones lógicas y científicas."
    },
    loki: {
      nombre: "Loki Laufeyson",
      imagen: "media/Loki.webp",
      descripcion: "¡Astuto, encantador e impredecible! Tienes un ingenio brillante y siempre encuentras una salida creativa a tu favor."
    },
    thanos: {
      nombre: "Thanos",
      imagen: "media/Thanos.webp",
      descripcion: "¡Determinado y de convicciones de hierro! Cuando te pones una meta no hay nada ni nadie que te haga dudar o detenerte."
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const r1 = document.querySelector('#pregunta1 input[type="radio"]:checked')?.value;
    const r2 = document.querySelector('#pregunta2 input[type="radio"]:checked')?.value;
    const r3 = document.querySelector('#pregunta3 input[type="radio"]:checked')?.value;
    const r4 = document.querySelector('#pregunta4 input[type="radio"]:checked')?.value;
    const r5 = document.querySelector('#pregunta5 input[type="radio"]:checked')?.value;

    const respuestas = [r1, r2, r3, r4, r5];

    const puntos = {
      capitan: 0, thor: 0, captain_marvel: 0, spiderman: 0, ironman: 0,
      wanda: 0, doom: 0, fantastico: 0, loki: 0, thanos: 0
    };

    respuestas.forEach(res => {
      if (res && puntos[res] !== undefined) {
        puntos[res]++;
      }
    });

    let ganador = 'spiderman';
    let maxPuntos = -1;

    for (const personaje in puntos) {
      if (puntos[personaje] > maxPuntos) {
        maxPuntos = puntos[personaje];
        ganador = personaje;
      }
    }

    const info = personajesInfo[ganador];
    nombreResultado.textContent = info.nombre;
    imagenResultado.src = info.imagen;
    descripcionResultado.textContent = info.descripcion;

    form.classList.add('d-none');
    contenedorResultado.classList.remove('d-none');
  });

  btnReintentar.addEventListener('click', () => {
    form.reset();
    form.classList.remove('d-none');
    contenedorResultado.classList.add('d-none');
  });
});

function toggleMusica() {
  var audio = document.getElementById("musicaFondo");
  var btn = document.getElementById("btnMusica");

  if (audio.paused) {
    audio.play();
    btn.innerHTML = "on";
    btn.style.backgroundColor = "#28a745";
  } else {
    audio.pause();
    btn.innerHTML = "off";
    btn.style.backgroundColor = "#e62429";
  }
}