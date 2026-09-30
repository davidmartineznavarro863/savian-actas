'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const screens = ['game-screen', 'birthday-screen', 'box-screen', 'envelope-screen', 'note-screen', 'reveal-screen'];
  let taps = 0, busy = false, sound = false, audio;
  let noteReturn = false;
  function chime(notes = [523.25], duration = .16) {
    if (!sound) return;
    try {
      audio ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      notes.forEach((freq, i) => {
        const osc = audio.createOscillator(), gain = audio.createGain();
        const start = audio.currentTime + i * .11;
        osc.type = 'sine'; osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(.055, start + .015);
        gain.gain.exponentialRampToValueAtTime(.001, start + duration);
        osc.connect(gain); gain.connect(audio.destination);
        osc.start(start); osc.stop(start + duration);
      });
    } catch (_) { sound = false; updateSound(); }
  }
  function updateSound() {
    $('sound').textContent = `Sonido: ${sound ? 'sí' : 'no'}`;
    $('sound').setAttribute('aria-pressed', String(sound));
  }
  $('sound').addEventListener('click', () => { sound = !sound; updateSound(); chime([659.25, 783.99], .25); });
  function show(id, step, heading) {
    screens.forEach(s => { $(s).hidden = s !== id; });
    document.body.classList.toggle('revealed', id === 'reveal-screen');
    document.body.classList.toggle('prelude', id === 'game-screen' || id === 'birthday-screen');
    [1, 2, 3].forEach(n => {
      const el = $('step-' + n); el.classList.toggle('current', n === step);
      if (n === step) el.setAttribute('aria-current', 'step'); else el.removeAttribute('aria-current');
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (heading) $(heading).focus({ preventScroll: true });
  }
  function burst() {
    if (reduced) return;
    for (let i = 0; i < 44; i++) {
      const piece = document.createElement('span'); piece.className = 'particle';
      piece.textContent = i % 4 ? '✦' : '♡';
      piece.style.cssText = `--x:${Math.random()*100}%;--c:${['#ddbd8c','#e9c4b6','#a95c77'][i%3]};--s:${8+Math.random()*15}px;--d:${2.5+Math.random()*2}s;animation-delay:${Math.random()*.5}s`;
      $('confetti').append(piece); setTimeout(() => piece.remove(), 5200);
    }
  }
  $('gift').addEventListener('click', () => {
    if (busy || taps >= 18) return;
    taps++;
    $('count').textContent = taps;
    $('progress-fill').style.width = `${taps / 18 * 100}%`;
    document.querySelector('.progress-track').setAttribute('aria-valuenow', taps);
    $('gift').setAttribute('aria-label', `Toca la caja para abrir tu regalo. Faltan ${18-taps} toques.`);
    const messages = ['Los regalos buenos se abren con ganas.', 'Creo que la caja se está haciendo la interesante…', 'Eso es. Un poquito más de amor.', '¡Ya casi! El lazo se está rindiendo…', 'Vale, vale… ¡es tuyo!'];
    $('tap-message').textContent = messages[taps === 18 ? 4 : Math.floor(taps / 5)];
    $('gift').classList.remove('bump'); void $('gift').offsetWidth; $('gift').classList.add('bump');
    if (!reduced) {
      const heart = document.createElement('span'); heart.className = 'tap-heart'; heart.textContent = '♡';
      heart.style.cssText = `--x:${25+Math.random()*50}%;--y:${20+Math.random()*35}%`;
      document.querySelector('.gift-area').append(heart); setTimeout(() => heart.remove(), 850);
    }
    chime([440 + taps * 22], .12);
    if (taps === 18) {
      busy = true; $('gift').disabled = true; $('gift').classList.remove('bump'); $('gift').classList.add('opening');
      chime([523.25, 659.25, 783.99], .5); burst();
      setTimeout(() => { show('envelope-screen', 2, 'envelope-title'); busy = false; }, reduced ? 60 : 800);
    }
  });
  $('envelope').addEventListener('click', () => {
    if (busy) return; busy = true; $('envelope').classList.add('open'); chime([659.25, 880], .35);
    setTimeout(() => { show('note-screen', 2, 'note-title'); busy = false; }, reduced ? 50 : 650);
  });
  $('reveal').addEventListener('click', () => {
    if (busy) return; busy = true; $('note-screen').classList.add('leaving');
    setTimeout(() => {
      show('reveal-screen', 3, 'reveal-title'); $('note-screen').classList.remove('leaving'); busy = false;
      if (!noteReturn) { burst(); chime([523.25, 659.25, 783.99, 1046.5], .75); }
      noteReturn = false;
    }, reduced ? 50 : 650);
  });
  $('read-note').addEventListener('click', () => {
    noteReturn = true; $('reveal').textContent = 'Volver a ver mi regalo'; show('note-screen', 2, 'note-title');
  });
  $('restart').addEventListener('click', () => {
    taps = 0; busy = false; noteReturn = false;
    $('count').textContent = '0'; $('progress-fill').style.width = '0%';
    document.querySelector('.progress-track').setAttribute('aria-valuenow', '0');
    $('tap-message').textContent = 'Los regalos buenos se abren con ganas.';
    $('gift').disabled = false; $('gift').classList.remove('bump', 'opening');
    $('gift').setAttribute('aria-label', 'Toca la caja para abrir tu regalo. Faltan 18 toques.');
    $('envelope').classList.remove('open'); $('reveal').textContent = 'Quitar la nota y descubrirlo';
    startGame(); show('game-screen', 0, 'game-title');
  });
  let selected = [], matched = 0, locked = false, gameTimer, birthdayTimer;
  function startGame() {
    clearTimeout(gameTimer); clearTimeout(birthdayTimer); selected = []; matched = 0; locked = false; $('cards').replaceChildren();
    $('game-status').textContent = 'Quedan 3 parejas por descubrir.';
    const deck = [{icon:'♡',name:'corazón'},{icon:'✦',name:'estrella'},{icon:'☾',name:'luna'}].flatMap(x => [x,x]);
    for (let i = deck.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [deck[i],deck[j]] = [deck[j],deck[i]]; }
    deck.forEach((item, i) => {
      const card = document.createElement('button'); card.type = 'button'; card.className = 'card'; card.textContent = '✧';
      card.setAttribute('aria-label', `Carta ${i+1}, boca abajo`);
      card.addEventListener('click', () => {
        if (locked || card.disabled || selected.some(x => x.card === card)) return;
        card.textContent = item.icon; card.classList.add('flipped'); card.setAttribute('aria-label', `Carta ${i+1}: ${item.name}`);
        selected.push({card, item, index:i}); chime([523.25], .14);
        if (selected.length !== 2) return;
        if (selected[0].item.icon === selected[1].item.icon) {
          selected.forEach(x => { x.card.classList.add('matched'); x.card.disabled = true; x.card.setAttribute('aria-label', `${x.item.name}, pareja encontrada`); });
          matched++; selected = []; chime([659.25, 880], .25);
          $('game-status').textContent = matched === 3 ? 'Todas las parejas encontradas. Mi favorita: tú y yo. ♡' : `Quedan ${3-matched} ${matched===2?'pareja':'parejas'} por descubrir.`;
          if (matched === 3) {
            locked = true; burst();
            birthdayTimer = setTimeout(() => { show('birthday-screen', 0, 'birthday-title'); chime([523.25,659.25,783.99,1046.5], .6); }, reduced ? 700 : 1400);
          }
        } else {
          locked = true;
          gameTimer = setTimeout(() => { selected.forEach(x => { x.card.textContent='✧'; x.card.classList.remove('flipped'); x.card.setAttribute('aria-label', `Carta ${x.index+1}, boca abajo`); }); selected=[]; locked=false; }, 950);
        }
      });
      $('cards').append(card);
    });
  }
  $('little-gift').addEventListener('click', () => { chime([659.25,783.99], .3); show('box-screen', 1, 'intro-title'); });
  startGame();
})();
