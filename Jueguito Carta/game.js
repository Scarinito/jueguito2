/**
 * Fuego & Piel - Motor de Juego de Cartas Eróticas
 */

class GameEngine {
  constructor() {
    this.allCards = [];
    this.deck = [];
    this.discardPile = [];
    this.currentCard = null;
    this.isFlipped = false;
    
    // Configuración
    this.gameMode = 'random'; // 'random' | 'progressive'
    this.filterLevel = 'all'; // 'all' | '1' | '2' | '3' | '4'
    this.soundEnabled = true;

    // Temporizador
    this.timerInterval = null;
    this.timerSecondsLeft = 60;
    this.timerTotalSeconds = 60;
    this.isTimerRunning = false;

    // Web Audio Context (se inicializa con la primera interacción del usuario)
    this.audioCtx = null;

    // Inicializar
    this.initDOM();
    this.loadCards();
    this.bindEvents();
    this.updateStats();
  }

  initDOM() {
    // Elementos de la Carta
    this.cardStage = document.getElementById('cardStage');
    this.cardInner = document.getElementById('cardInner');
    this.cardFront = document.getElementById('cardFront');
    this.cardLevelBadge = document.getElementById('cardLevelBadge');
    this.cardIdBadge = document.getElementById('cardIdBadge');
    this.cardTitle = document.getElementById('cardTitle');
    this.cardRole = document.getElementById('cardRole');
    this.cardAction = document.getElementById('cardAction');
    this.cardTip = document.getElementById('cardTip');

    // Temporizador
    this.timerDisplay = document.getElementById('timerDisplay');
    this.timerProgressFill = document.getElementById('timerProgressFill');
    this.timerToggleBtn = document.getElementById('timerToggleBtn');
    this.timerPlayIcon = document.getElementById('timerPlayIcon');
    this.timerStatusText = document.getElementById('timerStatusText');
    this.timerAddBtn = document.getElementById('timerAddBtn');
    this.timerResetBtn = document.getElementById('timerResetBtn');

    // Controles Principales
    this.nextCardBtn = document.getElementById('nextCardBtn');
    this.turnBtn = document.getElementById('turnBtn');
    this.penaltyBtn = document.getElementById('penaltyBtn');
    this.addCustomCardBtn = document.getElementById('addCustomCardBtn');
    this.deckStats = document.getElementById('deckStats');
    this.totalCardsCount = document.getElementById('totalCardsCount');

    // Modos y Filtros
    this.modeRandomBtn = document.getElementById('modeRandomBtn');
    this.modeProgressiveBtn = document.getElementById('modeProgressiveBtn');
    this.levelFilters = document.querySelectorAll('.filter-pill');

    // Modales
    this.penaltyModal = document.getElementById('penaltyModal');
    this.penaltyText = document.getElementById('penaltyText');
    this.closePenaltyModal = document.getElementById('closePenaltyModal');
    this.anotherPenaltyBtn = document.getElementById('anotherPenaltyBtn');

    this.turnModal = document.getElementById('turnModal');
    this.turnResultText = document.getElementById('turnResultText');
    this.closeTurnModal = document.getElementById('closeTurnModal');
    this.spinTurnAgainBtn = document.getElementById('spinTurnAgainBtn');

    this.customCardModal = document.getElementById('customCardModal');
    this.closeCustomModal = document.getElementById('closeCustomModal');
    this.customCardForm = document.getElementById('customCardForm');

    this.rulesModal = document.getElementById('rulesModal');
    this.rulesBtn = document.getElementById('rulesBtn');
    this.closeRulesModal = document.getElementById('closeRulesModal');

    // Header Actions
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.fullscreenBtn = document.getElementById('fullscreenBtn');
    this.toastEl = document.getElementById('toast');
  }

  loadCards() {
    // Cargar cartas por defecto
    const baseCards = typeof DEFAULT_CARDS !== 'undefined' ? [...DEFAULT_CARDS] : [];
    
    // Cargar cartas personalizadas de localStorage
    const savedCustomCards = localStorage.getItem('fuego_piel_custom_cards');
    let customCards = [];
    if (savedCustomCards) {
      try {
        customCards = JSON.parse(savedCustomCards);
      } catch (e) {
        console.error("Error al cargar cartas personalizadas", e);
      }
    }

    this.allCards = [...baseCards, ...customCards];
    this.totalCardsCount.textContent = this.allCards.length;
    this.buildDeck();
  }

  buildDeck() {
    let pool = [...this.allCards];

    // Aplicar filtro si no es "all"
    if (this.filterLevel !== 'all') {
      const lvl = parseInt(this.filterLevel, 10);
      pool = pool.filter(c => c.level === lvl);
    }

    if (this.gameMode === 'progressive') {
      // Ordenar por niveles: primero nivel 1 barajado, luego 2, luego 3, luego 4
      const level1 = this.shuffleArray(pool.filter(c => c.level === 1));
      const level2 = this.shuffleArray(pool.filter(c => c.level === 2));
      const level3 = this.shuffleArray(pool.filter(c => c.level === 3));
      const level4 = this.shuffleArray(pool.filter(c => c.level === 4));
      this.deck = [...level1, ...level2, ...level3, ...level4];
    } else {
      // 100% Aleatorio
      this.deck = this.shuffleArray(pool);
    }

    this.discardPile = [];
    this.updateStats();
  }

  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  drawCard() {
    this.ensureAudioContext();

    // Si la baraja está vacía, reconstruirla con las cartas jugadas
    if (this.deck.length === 0) {
      if (this.discardPile.length === 0) {
        this.showToast("No hay cartas disponibles para este filtro.");
        return;
      }
      this.showToast("¡Barajando de nuevo todas las cartas! 🔥");
      this.buildDeck();
    }

    const card = this.deck.pop();
    this.discardPile.push(card);
    this.currentCard = card;

    // Renderizar datos de la carta
    this.renderCard(card);

    // Si aún no está volteada, voltearla hacia el frente
    if (!this.isFlipped) {
      this.cardStage.classList.add('flipped');
      this.isFlipped = true;
    } else {
      // Efecto suave de cambio de carta si ya estaba volteada
      this.cardInner.style.transform = 'rotateY(180deg) scale(0.96)';
      setTimeout(() => {
        this.cardInner.style.transform = 'rotateY(180deg) scale(1)';
      }, 150);
    }

    // Configurar temporizador según la carta
    this.resetTimer(card.time);
    this.updateStats();

    // Sonido sutil de carta
    this.playTone(400, 'sine', 0.1, 0.05);
  }

  renderCard(card) {
    // Clase de nivel para bordes y brillos
    this.cardFront.className = `card-face card-front level-${card.level}`;
    
    // Badges y textos
    this.cardLevelBadge.textContent = `🔥 ${card.levelName}`;
    this.cardIdBadge.textContent = `#${card.id} / ${this.allCards.length}`;
    this.cardTitle.textContent = card.title;
    this.cardRole.textContent = card.role || "Quien saca la carta realiza la acción";
    this.cardAction.textContent = card.action;
    
    if (card.tip) {
      this.cardTip.textContent = `💡 Tip: ${card.tip}`;
      this.cardTip.style.display = 'block';
    } else {
      this.cardTip.style.display = 'none';
    }
  }

  updateStats() {
    this.deckStats.textContent = `Restantes: ${this.deck.length} / ${this.deck.length + this.discardPile.length}`;
  }

  // ==========================================
  // TEMPORIZADOR
  // ==========================================
  toggleTimer() {
    this.ensureAudioContext();
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timerSecondsLeft <= 0) {
      this.resetTimer(this.currentCard ? this.currentCard.time : 60);
    }
    this.isTimerRunning = true;
    this.timerPlayIcon.textContent = '⏸';
    this.timerStatusText.textContent = 'Pausar';
    this.timerToggleBtn.classList.add('primary');

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timerSecondsLeft--;
      this.updateTimerDisplay();

      if (this.timerSecondsLeft <= 10 && this.timerSecondsLeft > 0) {
        this.timerDisplay.classList.add('warning');
        this.playTone(300, 'triangle', 0.05, 0.04); // Tic suave
      }

      if (this.timerSecondsLeft <= 0) {
        this.onTimerFinished();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    this.timerPlayIcon.textContent = '▶';
    this.timerStatusText.textContent = 'Continuar';
  }

  resetTimer(seconds = null) {
    this.pauseTimer();
    const duration = seconds !== null ? seconds : (this.currentCard ? this.currentCard.time : 60);
    this.timerTotalSeconds = duration;
    this.timerSecondsLeft = duration;
    this.timerStatusText.textContent = 'Iniciar';
    this.timerDisplay.classList.remove('warning', 'finished');
    this.updateTimerDisplay();
  }

  addTime(secondsToAdd = 30) {
    this.timerSecondsLeft += secondsToAdd;
    this.timerTotalSeconds += secondsToAdd;
    this.timerDisplay.classList.remove('finished');
    this.updateTimerDisplay();
    this.showToast(`+${secondsToAdd}s añadidos de placer`);
  }

  updateTimerDisplay() {
    const mins = Math.floor(Math.max(0, this.timerSecondsLeft) / 60);
    const secs = Math.max(0, this.timerSecondsLeft) % 60;
    this.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const percentage = Math.max(0, Math.min(100, (this.timerSecondsLeft / this.timerTotalSeconds) * 100));
    this.timerProgressFill.style.width = `${percentage}%`;
  }

  onTimerFinished() {
    this.pauseTimer();
    this.timerDisplay.classList.remove('warning');
    this.timerDisplay.classList.add('finished');
    this.timerProgressFill.style.width = '0%';
    this.timerStatusText.textContent = '¡Tiempo!';

    // Alerta Sonora y Vibración
    this.playCelebrationSound();
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 400]);
    }
    this.showToast("⏰ ¡Tiempo cumplido! ¿Quieren más o siguiente carta?");
  }

  // ==========================================
  // SONIDOS SINTETIZADOS CON WEB AUDIO API
  // ==========================================
  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.2, volume = 0.1) {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play issue", e);
    }
  }

  playCelebrationSound() {
    if (!this.soundEnabled) return;
    const chords = [523.25, 659.25, 783.99, 1046.50]; // Acorde C Mayor sensual
    chords.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.6, 0.15);
      }, idx * 120);
    });
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.soundToggleBtn.textContent = this.soundEnabled ? '🔊' : '🔇';
    this.showToast(this.soundEnabled ? "Sonido activado" : "Sonido silenciado");
  }

  // ==========================================
  // RUEDA DE DESTINO Y PENITENCIAS
  // ==========================================
  showTurnRoulette() {
    this.turnModal.classList.add('active');
    this.turnResultText.textContent = "Girando la ruleta...";
    
    const outcomes = [
      "🔥 Le toca a quien sacó la carta complacer a su pareja.",
      "💋 Tu pareja debe complacerte a ti con devoción.",
      "💥 ¡Acción mutua! Ambos deben entregarse al mismo tiempo.",
      "👑 Quien tenga menos ropa puesta tiene el control absoluto.",
      "✌️ Jueguen 'Piedra, Papel o Tijera' a una ronda: el perdedor complace al ganador.",
      "😈 ¡El que lo pida con más pasión decide quién empieza!"
    ];

    let counter = 0;
    const interval = setInterval(() => {
      this.turnResultText.textContent = outcomes[Math.floor(Math.random() * outcomes.length)];
      counter++;
      if (counter >= 8) {
        clearInterval(interval);
        const finalPick = outcomes[Math.floor(Math.random() * outcomes.length)];
        this.turnResultText.textContent = finalPick;
        this.playTone(550, 'triangle', 0.3, 0.1);
      }
    }, 80);
  }

  showPenalty() {
    this.penaltyModal.classList.add('active');
    this.showNewPenalty();
  }

  showNewPenalty() {
    const list = typeof PENALTIES !== 'undefined' ? PENALTIES : [
      "Quítate dos prendas de inmediato.",
      "Dale 5 besos apasionados donde tu pareja elija.",
      "Tómate un shot o trago de bebida."
    ];
    const pick = list[Math.floor(Math.random() * list.length)];
    this.penaltyText.textContent = pick;
    this.playTone(480, 'sine', 0.2, 0.1);
  }

  // ==========================================
  // CREACIÓN DE CARTAS PERSONALIZADAS
  // ==========================================
  saveCustomCard(e) {
    e.preventDefault();
    const title = document.getElementById('customTitle').value.trim();
    const level = parseInt(document.getElementById('customLevel').value, 10);
    const role = document.getElementById('customRole').value.trim();
    const action = document.getElementById('customAction').value.trim();
    const time = parseInt(document.getElementById('customTime').value, 10) || 60;
    const tip = document.getElementById('customTip').value.trim();

    if (!title || !action) {
      alert("Por favor completa al menos el título y la acción.");
      return;
    }

    const levelNames = {
      1: "Nivel 1: Calentamiento",
      2: "Nivel 2: Pasión",
      3: "Nivel 3: Oral & Éxtasis",
      4: "Nivel 4: Penetración & Fuego"
    };

    const newCard = {
      id: this.allCards.length + 1,
      level,
      levelName: levelNames[level] || "Nivel Personalizado",
      levelColor: `level-${level}`,
      title,
      action,
      time,
      role: role || "Quien saca la carta realiza la acción",
      tip: tip || null
    };

    // Guardar en array y localStorage
    const savedCustom = localStorage.getItem('fuego_piel_custom_cards');
    let customList = savedCustom ? JSON.parse(savedCustom) : [];
    customList.push(newCard);
    localStorage.setItem('fuego_piel_custom_cards', JSON.stringify(customList));

    this.allCards.push(newCard);
    this.deck.push(newCard);
    this.totalCardsCount.textContent = this.allCards.length;
    this.updateStats();

    this.customCardModal.classList.remove('active');
    this.customCardForm.reset();
    this.showToast("✨ ¡Tu carta secreta ha sido añadida a la baraja!");
  }

  // ==========================================
  // NOTIFICACIONES & PANTALLA COMPLETA
  // ==========================================
  showToast(message) {
    this.toastEl.textContent = message;
    this.toastEl.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, 2800);
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // ==========================================
  // EVENTOS
  // ==========================================
  bindEvents() {
    // Tocar carta o botón para sacar carta
    this.nextCardBtn.addEventListener('click', () => this.drawCard());
    this.cardStage.addEventListener('click', (e) => {
      // Evitar que el clic en los botones del temporizador dispare la vuelta de carta
      if (e.target.closest('.card-timer-area')) return;
      this.drawCard();
    });

    // Temporizador
    this.timerToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleTimer();
    });
    this.timerAddBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.addTime(30);
    });
    this.timerResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.resetTimer();
    });

    // Modos
    this.modeRandomBtn.addEventListener('click', () => {
      this.gameMode = 'random';
      this.modeRandomBtn.classList.add('active');
      this.modeProgressiveBtn.classList.remove('active');
      this.buildDeck();
      this.showToast("🎲 Modo 100% Aleatorio Activado");
    });

    this.modeProgressiveBtn.addEventListener('click', () => {
      this.gameMode = 'progressive';
      this.modeProgressiveBtn.classList.add('active');
      this.modeRandomBtn.classList.remove('active');
      this.buildDeck();
      this.showToast("📈 Modo Progresivo Activado (de menos a más)");
    });

    // Filtros de nivel
    this.levelFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        this.levelFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filterLevel = btn.dataset.level;
        this.buildDeck();
        this.showToast(`Filtro: ${btn.textContent}`);
      });
    });

    // Destino y Penitencias
    this.turnBtn.addEventListener('click', () => this.showTurnRoulette());
    this.closeTurnModal.addEventListener('click', () => this.turnModal.classList.remove('active'));
    this.spinTurnAgainBtn.addEventListener('click', () => this.showTurnRoulette());

    this.penaltyBtn.addEventListener('click', () => this.showPenalty());
    this.closePenaltyModal.addEventListener('click', () => this.penaltyModal.classList.remove('active'));
    this.anotherPenaltyBtn.addEventListener('click', () => this.showNewPenalty());

    // Crear carta
    this.addCustomCardBtn.addEventListener('click', () => this.customCardModal.classList.add('active'));
    this.closeCustomModal.addEventListener('click', () => this.customCardModal.classList.remove('active'));
    this.customCardForm.addEventListener('submit', (e) => this.saveCustomCard(e));

    // Reglas
    this.rulesBtn.addEventListener('click', () => this.rulesModal.classList.add('active'));
    this.closeRulesModal.addEventListener('click', () => this.rulesModal.classList.remove('active'));

    // Cerrar modales con clic fuera
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
      }
    });

    // Header actions
    this.soundToggleBtn.addEventListener('click', () => this.toggleSound());
    this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
  }
}

// Inicializar el juego al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  window.game = new GameEngine();
});
