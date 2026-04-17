/* ══════════════════════════════════════════════════
   ⚙️  CONFIGURACIÓN — EDITA ESTOS VALORES
══════════════════════════════════════════════════

   Para activar el envío de correos automático:
   1. Regístrate gratis en https://www.emailjs.com
   2. Conecta tu cuenta de Gmail u otro servicio
   3. Crea una plantilla con estas variables:
      {{to_email}}, {{from_name}}, {{subject}}, {{message}}
   4. Copia aquí el Public Key, Service ID y Template ID

══════════════════════════════════════════════════ */
const CONFIG = {
  web3forms_key: 'b520a556-6737-4dce-91fa-ccf9d32a08a7',
  admin_email: 'davidmartineznavarro863@gmail.com',
  from_name: 'Savian'
};

/* ══════════════════════════════════════════════════
   📋  DATOS DE CLIENTES — Añade el email de cada uno
══════════════════════════════════════════════════ */
const clientData = {
  "Acisan Inversiones": {
    email: 'dmartinez@savian.ai',
    centros: [
      {name:"Acisan 1",lat:36.780912,lon:-2.656789},
      {name:"Global",lat:null,lon:null}
    ]
  },
  "Agroponiente": {
    email: 'dmartinez@savian.ai',
    centros: [
      {name:"FINCA ALBARICOQUES",lat:null,lon:null},{name:"FINCA CAÑABRUSCA",lat:null,lon:null},
      {name:"FINCA CAÑARETE",lat:null,lon:null},{name:"FINCA EL JALI",lat:null,lon:null},
      {name:"FINCA MATALENTISCO",lat:null,lon:null},{name:"FINCA NIJAR",lat:null,lon:null},
      {name:"FINCA PRIMICIAS",lat:null,lon:null},{name:"FINCA SANCHEZ RUANO",lat:null,lon:null},
      {name:"Global",lat:null,lon:null},{name:"Huesca",lat:42.145989,lon:-0.345782},
      {name:"Vega Cañada",lat:36.942000,lon:2.134040}
    ]
  },
  "Brokaw": {
    email: 'dmartinez@savian.ai',
    centros: [
      {name:"Alberquilla",lat:null,lon:null},{name:"Alegría",lat:null,lon:null},
      {name:"Algarrobo",lat:null,lon:null},{name:"Almáchar",lat:null,lon:null},
      {name:"Benamocarra",lat:null,lon:null},{name:"Cabrillas",lat:null,lon:null},
      {name:"Cartaya",lat:null,lon:null},{name:"El Rosal",lat:null,lon:null},
      {name:"Larios",lat:null,lon:null},{name:"Otra",lat:null,lon:null},
      {name:"Siguiente",lat:null,lon:null},{name:"Valentín",lat:null,lon:null}
    ]
  },
  "CAJAMAR": {
    email: 'dmartinez@savian.ai',
    centros: [{name:"PALMERILLAS",lat:null,lon:null}]
  },
  "Eurosol": {
    email: 'dmartinez@savian.ai',
    centros: [
      {name:"Central Eurosol",lat:36.791823,lon:-2.655672},{name:"Eurogold",lat:36.827300,lon:-2.150600},
      {name:"Eurosol Nijar",lat:36.827786,lon:-2.153080},{name:"Los Cortezones",lat:36.904461,lon:-2.205572},
      {name:"Los Hornillos",lat:36.830851,lon:-2.139645},{name:"Los Matias",lat:36.829171,lon:-2.160965},
      {name:"Vicar",lat:36.791086,lon:-2.654870}
    ]
  },
  "Juan Antonio Manzano": {
    email: 'dmartinez@savian.ai',
    centros: [{name:"Global",lat:null,lon:null},{name:"La Canal",lat:36.780798,lon:-2.665817}]
  },
  "JUAN JESUS SANCHEZ": {
    email: 'dmartinez@savian.ai',
    centros: [{name:"POZO SAN JOSE",lat:null,lon:null}]
  },
  "Mireya Lopez Conde": {
    email: 'dmartinez@savian.ai',
    centros: [{name:"Mireya Lopez Conde",lat:null,lon:null}]
  },
  "Moyca": {
    email: 'dmartinez@savian.ai',
    centros: [{name:"JURRAMIENTA",lat:37.724539,lon:-1.677743}]
  },
  "Segura y Garcia": {
    email: 'dmartinez@savian.ai',
    centros: [
      {name:"ABLA",lat:37.164497,lon:-2.767769},{name:"ABRUCENA",lat:37.159306,lon:-2.799561},
      {name:"ALBARICOQUES",lat:36.843613,lon:-2.135151},{name:"APERO",lat:36.825485,lon:-2.211817},
      {name:"ARCO 1 (CAZADORES)",lat:36.835726,lon:-2.173179},{name:"CAZADORES",lat:36.835787,lon:-2.181462},
      {name:"CHARCO DEL LOBO",lat:36.961030,lon:-2.067583},{name:"DARRO",lat:37.341162,lon:-3.232001},
      {name:"GALLARDOS",lat:37.174674,lon:-1.912318},{name:"GERGAL",lat:37.123055,lon:-2.603407},
      {name:"GIMENEZ",lat:36.842139,lon:-2.152174},{name:"Global",lat:null,lon:null},
      {name:"JABONERO",lat:36.905756,lon:-2.210585},{name:"MARIA JOSÉ",lat:36.832726,lon:-2.167159},
      {name:"PITA",lat:36.882240,lon:-2.332391},{name:"SALADAR Y LECHE",lat:36.965988,lon:-2.100657},
      {name:"TRISTANES 1",lat:36.967717,lon:-2.142794},{name:"TRISTANES 2",lat:36.965805,lon:-2.141174}
    ]
  }
};

// Lista de trabajadores frecuentes (añade más aquí)
const workersList = [
  'Gonzalo Bascuñana',
  'Daniel Padilla',
  'Luis Fernandez'
];

// Lista de dispositivos frecuentes (añade más aquí)
const devicesList = ['Blackview Pro','Blackview Plus','Bridas','KIT SENSORES','Etiquetas Blancas','Etiquetas Rojas','Roscachapas','Cargadores','Etiquetas Fichaje','Etiquetas 20x20','Etiquetas 50x50','Regletas'];

/* ══════════════════════════════════════════════════
   🚀  INICIALIZACIÓN
══════════════════════════════════════════════════ */

const hoy = new Date().toISOString().split('T')[0];
const fechaInput = document.getElementById('fecha');
if (fechaInput) {
  fechaInput.value = hoy;
}

/* ══════════════════════════════════════════════════
   🔽  SELECT NATIVO — funciones de selección
══════════════════════════════════════════════════ */

/* ── COMBO helpers: cliente y centro ── */

// Cerrar todos los combos al hacer click fuera
document.addEventListener('click', function(e) {
  if (!e.target.closest('.combo-wrap')) cerrarCombos();
});

function cerrarCombos() {
  document.querySelectorAll('.combo-list').forEach(l => l.classList.remove('open'));
}

function abrirCombo(id) {
  const list = document.getElementById('combo-lista-' + id);
  if (!list) return;
  cerrarCombos();
  list.classList.add('open');
}

function toggleCombo(id) {
  const list = document.getElementById('combo-lista-' + id);
  if (!list) return;
  if (list.classList.contains('open')) {
    list.classList.remove('open');
  } else {
    cerrarCombos();
    poblarCombo(id);
    list.classList.add('open');
  }
}

// Filtra la lista mientras el usuario escribe
function onComboInput(id, val) {
  poblarCombo(id, val);
  abrirCombo(id);
  if (id === 'cliente') {
    const cli = val.trim();
    // Solo limpiar centro y loc si el texto no coincide con ningún cliente conocido
    if (!clientData[cli]) {
      document.getElementById('centro').value = '';
      document.getElementById('loc').value = '';
    }
    // Repoblar la lista de centros según el cliente actual
    poblarCombo('centro', '');
  }
}
// Construye las opciones del combo
function poblarCombo(id, filtro) {
  const list = document.getElementById('combo-lista-' + id);
  if (!list) return;
  filtro = (filtro || '').toLowerCase();

  let items = [];
  if (id === 'cliente') {
    items = Object.keys(clientData);
  } else if (id === 'centro') {
    const cli = document.getElementById('cliente').value.trim();
    items = (clientData[cli] || {centros:[]}).centros.map(c => c.name);
  }

  const filtered = filtro ? items.filter(i => i.toLowerCase().includes(filtro)) : items;

  list.innerHTML = filtered.map(i =>
    `<div class="combo-opt" ontouchstart="" onclick="elegirCombo('${id}','${i.replace(/'/g,"\'")}');cerrarCombos();">${i}</div>`
  ).join('');
}

// El usuario elige una opción de la lista
function elegirCombo(id, val) {
  document.getElementById(id).value = val;
  if (id === 'cliente') {
    // Poblar centros del cliente elegido
    poblarCombo('centro', '');
    document.getElementById('centro').value = '';
    document.getElementById('loc').value = '';
  } else if (id === 'centro') {
    // Autorellenar coordenadas
    const cli = document.getElementById('cliente').value.trim();
    const ct  = (clientData[cli] || {centros:[]}).centros.find(c => c.name === val);
    if (ct && ct.lat !== null) {
      document.getElementById('loc').value = ct.lat + ', ' + ct.lon;
    }
  }
}

// Funciones de compatibilidad (por si se usan en otros sitios)
function selectCliente(val) { elegirCombo('cliente', val); }
function selectCentro(name) { elegirCombo('centro', name); }

// Inicializar combos al arrancar
(function initCombos() {
  poblarCombo('cliente', '');
  poblarCombo('centro', '');
})();


/* ══════════════════════════════════════════════════
   📋  COLLAPSIBLE
══════════════════════════════════════════════════ */
function toggleCard(id) { document.getElementById(id).classList.toggle('collapsed'); }

/* ══════════════════════════════════════════════════
   👷  TRABAJADORES
══════════════════════════════════════════════════ */
let wc = 0;

function addWorker() {
  const container = document.getElementById('trabajadores');
  if (!container) {
    console.error('No existe el contenedor #trabajadores');
    return;
  }

  const safeWorkersList = Array.isArray(workersList) ? workersList : [];

  wc++;
  const row = document.createElement('div');
  row.className = 'worker-row';

  const opts = safeWorkersList.map(w => `<option value="${w}">`).join('');

  row.innerHTML = `
    <div class="worker-num-row">Trabajador ${wc}</div>
    <div class="worker-inner">
      <input type="text" list="wlist-${wc}" placeholder="Nombre del técnico"
        class="worker-nombre"
        autocomplete="off" autocorrect="off" autocapitalize="words" spellcheck="false">
      <datalist id="wlist-${wc}">${opts}</datalist>
      <div class="worker-times">
        <div>
          <label style="font-size:10px">Entrada</label>
          <input type="time" style="font-size:16px;padding:10px 8px">
        </div>
        <div>
          <label style="font-size:10px">Salida</label>
          <input type="time" style="font-size:16px;padding:10px 8px">
        </div>
        <div class="btn-del-worker">
          <button type="button" onclick="this.closest('.worker-row').remove()" title="Eliminar"
            style="touch-action:manipulation">✕</button>
        </div>
      </div>
    </div>
  `;

  container.appendChild(row);
}

for (let i = 0; i < 2; i++) addWorker();

/* ══════════════════════════════════════════════════
   📱  DISPOSITIVOS
══════════════════════════════════════════════════ */
let dc = 0;
function addDevice() {
  dc++;
  const opts = devicesList.map(d => `<option value="${d}">`).join('');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${dc}</td>
    <td>
      <input type="text" list="dlist-${dc}" placeholder="Descripción"
        style="width:100%;font-size:16px"
        autocomplete="off" autocorrect="off" autocapitalize="words" spellcheck="false">
      <datalist id="dlist-${dc}">${opts}</datalist>
    </td>
    <td><input type="number" min="0" placeholder="0"
      style="width:100%;font-size:16px" inputmode="numeric"></td>
    <td><div class="check-wrap">
      <label class="chk-label"><span>Ent</span><input type="checkbox"></label>
      <label class="chk-label"><span>Ret</span><input type="checkbox"></label>
    </div></td>
    <td><input type="text" placeholder="Nº serie..."
      style="width:100%;font-size:16px"
      autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false"></td>
    <td style="text-align:center;vertical-align:middle;">
      <button type="button"
        onclick="this.closest('tr').remove()"
        title="Eliminar"
        style="width:44px;height:44px;border:1.5px solid var(--red);border-radius:7px;
               background:white;color:var(--red);font-size:16px;cursor:pointer;
               display:inline-flex;align-items:center;justify-content:center;
               touch-action:manipulation;-webkit-appearance:none;">✕</button>
    </td>
  `;
  document.getElementById('deviceRows').appendChild(tr);
}

/* ══════════════════════════════════════════════════
   ✅  TIPO DE TRABAJO
══════════════════════════════════════════════════ */
let tipoActivo = '';
function setTipo(t) {
  tipoActivo = tipoActivo === t ? '' : t;
  document.getElementById('btn-incidencia').classList.toggle('active', tipoActivo === 'Incidencia');
  document.getElementById('btn-visita').classList.toggle('active', tipoActivo === 'Visita');
  document.getElementById('chk-incidencia').textContent = tipoActivo === 'Incidencia' ? '✓' : '';
  document.getElementById('chk-visita').textContent = tipoActivo === 'Visita' ? '✓' : '';
}

/* ══════════════════════════════════════════════════
   ✍️  FIRMAS — canvas táctil
══════════════════════════════════════════════════ */
const fS = {1:false,2:false};

function activarFirma(id) {
  if (fS[id]) return;
  fS[id] = true;
  const bx = document.getElementById('firmaBox' + id);
  const cv = document.getElementById('firma' + id);
  const ph = bx.querySelector('.firma-placeholder');
  const r  = bx.getBoundingClientRect();
  // Usar devicePixelRatio para resolución retina (iOS/Android)
  const dpr = window.devicePixelRatio || 2;
  cv.width  = r.width  * dpr;
  cv.height = r.height * dpr;
  cv.style.display = 'block';
  if (ph) ph.style.display = 'none';
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.strokeStyle='#111'; ctx.lineWidth=2; ctx.lineCap='round'; ctx.lineJoin='round';
  let dr=false, lx=0, ly=0;
  function pos(e){
    const rc=cv.getBoundingClientRect();
    const sx=cv.width/dpr/rc.width, sy=cv.height/dpr/rc.height;
    if (e.touches && e.touches.length > 0) {
      return [(e.touches[0].clientX-rc.left)*sx, (e.touches[0].clientY-rc.top)*sy];
    }
    return [(e.clientX-rc.left)*sx, (e.clientY-rc.top)*sy];
  }
  cv.addEventListener('mousedown',  e=>{e.preventDefault();dr=true;[lx,ly]=pos(e);});
  cv.addEventListener('touchstart', e=>{e.preventDefault();dr=true;[lx,ly]=pos(e);},{passive:false});
  function draw(e){
    if(!dr)return; e.preventDefault();
    const[x,y]=pos(e);
    ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(x,y);ctx.stroke();[lx,ly]=[x,y];
  }
  cv.addEventListener('mousemove', draw);
  cv.addEventListener('touchmove', draw,{passive:false});
  cv.addEventListener('mouseup',   ()=>dr=false);
  cv.addEventListener('touchend',  ()=>dr=false);
  cv.addEventListener('touchcancel',()=>dr=false);
  cv.addEventListener('mouseleave',()=>dr=false);
}

function limpiarFirma(id) {
  const cv=document.getElementById('firma'+id), bx=document.getElementById('firmaBox'+id), ph=bx.querySelector('.firma-placeholder');
  if(cv.width) cv.getContext('2d').clearRect(0,0,cv.width,cv.height);
  cv.style.display='none'; if(ph)ph.style.display=''; fS[id]=false;
}

/* ══════════════════════════════════════════════════
   📁  NOMBRE DEL ARCHIVO
══════════════════════════════════════════════════ */
function getNombre() {
  const c=(document.getElementById('cliente').value||'Acta').replace(/[\/\\:*?"<>|]/g,'-').replace(/\s+/g,'_');
  const fv=document.getElementById('fecha').value; let fs=fv;
  if(fv){const[y,m,d]=fv.split('-');fs=d+'-'+m+'-'+y;}
  return c+'_'+(fs||'sinFecha');
}

/* ══════════════════════════════════════════════════
   /* 🖨️  GENERACIÓN PDF — Multi-página + Firmas
══════════════════════════════════════════════════ */
async function generarPDF() {
  // Expandir cards colapsadas
  const collapsed = [...document.querySelectorAll('.card.collapsed')];
  collapsed.forEach(c => c.classList.remove('collapsed'));
  await new Promise(r => setTimeout(r, 200));

  const orig = document.getElementById('formApp');
  const clone = orig.cloneNode(true);
  const wrap = document.createElement('div');
  wrap.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: 900px;
    background: #f0f2f5;
    z-index: -1;
    padding: 0;
  `;

  // ── COPIAR FIRMAS: canvas no se copia con cloneNode ──
  [1, 2].forEach(id => {
    const origCv = document.getElementById('firma' + id);
    if (!origCv || origCv.style.display === 'none' || !origCv.width) return;

    const cloneBx = clone.querySelector('#firmaBox' + id);
    if (!cloneBx) return;

    const ph = cloneBx.querySelector('.firma-placeholder');
    if (ph) ph.style.display = 'none';

    const img = document.createElement('img');
    img.src = origCv.toDataURL('image/png');
    img.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    `;

    const cloneCv = cloneBx.querySelector('canvas');
    if (cloneCv) cloneCv.replaceWith(img);
    else cloneBx.appendChild(img);
  });

  // ── Eliminar filas de trabajadores vacías ──
  clone.querySelectorAll('#trabajadores .worker-row').forEach(row => {
    const t = row.querySelector('input[type="text"]');
    if (!t || !t.value.trim()) row.remove();
  });

  // ── Eliminar dispositivos vacíos ──
  clone.querySelectorAll('#deviceRows tr').forEach(tr => {
    const texts = [...tr.querySelectorAll('input[type="text"]')].map(i => i.value.trim()).join('');
    const num = [...tr.querySelectorAll('input[type="number"]')].map(i => i.value).join('');
    const chks = [...tr.querySelectorAll('input[type="checkbox"]')].some(c => c.checked);
    if (!texts && !num && !chks) tr.remove();
  });

  // ── Checkboxes → spans visuales ──
  clone.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    const sp = document.createElement('span');
    sp.style.cssText = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border: 2px solid ${cb.checked ? '#1a8a7a' : '#d1d5db'};
      border-radius: 3px;
      background: ${cb.checked ? '#1a8a7a' : 'white'};
      color: white;
      font-size: 10px;
      font-weight: 900;
      line-height: 1;
    `;
    sp.textContent = cb.checked ? '✓' : '';
    cb.replaceWith(sp);
  });

  // ── Tipo de trabajo como badge ──
  const tipoWrap = clone.querySelector('.tipo-wrap');

if (tipoWrap && tipoActivo) {
  const t = document.createElement('div');

  let bg = '#1a8a7a'; // verde por defecto
  let icon = '✓';

  if (tipoActivo.toLowerCase().includes('incidencia')) {
    bg = '#e53935'; // rojo potente
    icon = '⚠️';
  } else if (tipoActivo.toLowerCase().includes('visita')) {
    bg = '#1a8a7a'; // verde
    icon = '✓';
  } else if (tipoActivo.toLowerCase().includes('instal')) {
    bg = '#1976d2'; // azul opcional
    icon = '🛠️';
  }

  t.style.cssText = `
    font-weight: 700;
    color: white;
    background: ${bg};
    font-size: 13px;
    padding: 6px 14px;
    border-radius: 8px;
    display: inline-block;
    letter-spacing: 0.3px;
  `;

  t.textContent = `${icon} ${tipoActivo}`;

  tipoWrap.replaceWith(t);

} else if (tipoWrap) {
  tipoWrap.remove();
}

  // ── Selects nativos → texto estático ──
  clone.querySelectorAll('select.native-select').forEach(sel => {
    const div = document.createElement('div');
    div.style.cssText = `
      padding: 6px 4px 4px 4px;
      font-size: 12px;
      line-height: 1.35;
      border-bottom: 1px solid #999;
      min-height: 28px;
      color: #1a1f2e;
      box-sizing: border-box;
      white-space: normal;
      overflow: visible;
      word-break: break-word;
    `;
    div.textContent = sel.value || '';
    sel.replaceWith(div);
  });

  // ── Convertir inputs y textareas en texto estático ──
  clone.querySelectorAll('input[type="text"], input[type="date"], input[type="time"], input[type="number"], textarea')
    .forEach(el => {
      const isTextarea = el.tagName.toLowerCase() === 'textarea';
      const div = document.createElement('div');

      const value = (el.value || '').trim();

      div.style.cssText = `
        width: 100%;
        min-height: ${isTextarea ? '70px' : '28px'};
        padding: ${isTextarea ? '8px 10px' : '6px 8px'};
        border: 1px solid #cfcfcf;
        border-radius: 6px;
        background: white;
        font-size: 12px;
        line-height: 1.35;
        color: #1a1f2e;
        box-sizing: border-box;
        white-space: ${isTextarea ? 'pre-wrap' : 'normal'};
        overflow: visible;
        word-break: break-word;
      `;

      div.textContent = value;
      el.replaceWith(div);
    });

  // ── Quitar botones UI ──
  clone.querySelectorAll('.add-btn,.clear-firma,.card-chevron,.firma-hint,.bottom-bar,.dd-menu,.overlay,.toast')
    .forEach(e => e.remove());

  // ── Estilos PDF menos agresivos ──
  const st = document.createElement('style');
  st.textContent = `
    * {
      box-sizing: border-box;
    }

    body, .screen {
      background: #f0f2f5 !important;
    }

    .screen {
      max-width: none !important;
      width: 900px !important;
      padding: 14px !important;
      margin: 0 !important;
    }

    .card {
      margin-bottom: 10px !important;
      box-shadow: none !important;
      border: 1px solid #d8d8d8 !important;
      border-radius: 8px !important;
      overflow: visible !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      background: white !important;
    }

    .card-title {
      padding: 8px 12px !important;
      font-size: 13px !important;
      background: #e8f5f3 !important;
      border-bottom: 1px solid #1a8a7a !important;
      line-height: 1.2 !important;
    }

    .card-body {
      padding: 10px 12px !important;
    }

    .field {
      margin-bottom: 8px !important;
    }

    label {
      font-size: 10px !important;
      margin-bottom: 3px !important;
      line-height: 1.2 !important;
      display: block !important;
    }

    .worker-row {
      margin-bottom: 6px !important;
      padding-bottom: 6px !important;
      gap: 6px !important;
      align-items: end !important;
    }

    .worker-num {
      font-size: 9px !important;
      margin-bottom: 4px !important;
    }

    .grid2 {
      gap: 10px !important;
    }

    table {
      width: 100% !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      min-width: 0 !important;
    }

    th {
      padding: 6px 5px !important;
      font-size: 9px !important;
      line-height: 1.2 !important;
      word-break: break-word !important;
    }

    td {
      padding: 4px 5px !important;
      font-size: 11px !important;
      line-height: 1.3 !important;
      vertical-align: middle !important;
      word-break: break-word !important;
      overflow: visible !important;
    }

    .devices-table {
      overflow: visible !important;
    }

    .firma-box {
      min-height: 85px !important;
      overflow: hidden !important;
      position: relative !important;
      background: #fafafa !important;
    }

    .firma-box img {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
    }

    .firma-wrap {
      gap: 10px !important;
    }

    .condiciones-text {
      font-size: 8px !important;
      padding-top: 8px !important;
      margin-top: 8px !important;
      line-height: 1.4 !important;
    }

    .header {
      padding: 10px 14px !important;
      margin-bottom: 10px !important;
      box-shadow: none !important;
    }

    .logo-wrap img {
      height: 30px !important;
      width: auto !important;
    }

    .doc-title {
      font-size: 8px !important;
      line-height: 1.2 !important;
    }

    .tipo-btn {
      display: none !important;
    }
  `;

  clone.appendChild(st);
  wrap.appendChild(clone);
  document.body.appendChild(wrap);
  await new Promise(r => setTimeout(r, 350));

  try {
    const canvas = await html2canvas(wrap, {
      scale: 2,
      useCORS: true,
      logging: false,
      width: wrap.scrollWidth,
      height: wrap.scrollHeight,
      windowWidth: wrap.scrollWidth,
      windowHeight: wrap.scrollHeight,
      backgroundColor: '#f0f2f5',
      allowTaint: true
    });

    document.body.removeChild(wrap);

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const mg = 8;
    const cW = 210 - mg * 2;
    const cH = 297 - mg * 2;
    const imgW = cW;
    const imgH = (canvas.height * imgW) / canvas.width;

    if (imgH <= cH) {
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', mg, mg, imgW, imgH);
    } else {
      let page = 0;
      let yRendered = 0;

      while (yRendered < imgH) {
        if (page > 0) pdf.addPage();

        const sliceMm = Math.min(cH, imgH - yRendered);
        const srcYpx = Math.round((yRendered / imgH) * canvas.height);
        const srcHpx = Math.round((sliceMm / imgH) * canvas.height);

        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = srcHpx;

        const ctx = pageCanvas.getContext('2d');
        ctx.drawImage(
          canvas,
          0, srcYpx, canvas.width, srcHpx,
          0, 0, canvas.width, srcHpx
        );

        pdf.addImage(
          pageCanvas.toDataURL('image/jpeg', 0.95),
          'JPEG',
          mg,
          mg,
          imgW,
          sliceMm
        );

        yRendered += cH;
        page++;
      }
    }

    collapsed.forEach(c => c.classList.add('collapsed'));
    return pdf;

  } catch (err) {
    if (document.body.contains(wrap)) {
      document.body.removeChild(wrap);
    }
    collapsed.forEach(c => c.classList.add('collapsed'));
    throw err;
  }
}
/* ══════════════════════════════════════════════════
   📧  ENVÍO DE CORREO — sólo al administrador
══════════════════════════════════════════════════ */
async function enviarCorreos(nombre, pdf) {
  const cli      = document.getElementById('cliente').value  || '-';
  const centro   = document.getElementById('centro').value   || '-';
  const trabajos = document.getElementById('trabajos').value || '-';
  const fv       = document.getElementById('fecha').value    || '';
  const partes   = fv.split('-');
  const fecha    = fv ? `${partes[2]}/${partes[1]}/${partes[0]}` : '-';

  const filas    = [...document.querySelectorAll('#trabajadores .worker-nombre')];
  const tecnicos = filas.map(i => i.value?.trim()).filter(Boolean).join(', ') || '-';

  // ── Subir PDF a Google Drive ──
  try {
    const pdfBase64 = pdf.output('datauristring').split(',')[1];
    const res = await fetch('https://savian-drive-uploader-e6fyh7d8fxg4fuah.westeurope-01.azurewebsites.net/api/uploadDrive?code=nJP6ojA7pFbUZjso-UwGDA7_cTFotDOXBc5YSqxP9EOiAzFupYfkDg==', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pdfBase64,
        fileName: nombre + '.pdf'
      })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    showToast('✅ PDF guardado en Drive correctamente', 'success');
  } catch (e) {
    console.error('Error Drive:', e);
    showToast('⚠️ No se pudo guardar en Drive.\n' + e.message, 'warn');
  }

  // ── Notificación por correo (sin adjunto) ──
  const cuerpo = [
    `📋 NUEVA ACTA DE VISITA TÉCNICA`,
    ``,
    `Cliente  : ${cli}`,
    `Centro   : ${centro}`,
    `Fecha    : ${fecha}`,
    `Tipo     : ${tipoActivo || 'Visita'}`,
    `Técnicos : ${tecnicos}`,
    ``,
    `Trabajos realizados:`,
    trabajos,
    ``,
    `📁 PDF disponible en Google Drive: Actas Savian`
  ].join('\n');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: CONFIG.web3forms_key,
        subject:    `[Savian] Acta – ${cli} – ${fecha}`,
        from_name:  CONFIG.from_name,
        to:         CONFIG.admin_email,
        message:    cuerpo
      })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
  } catch (e) {
    console.error('Error correo:', e);
  }
}

/* ══════════════════════════════════════════════════
   📥  GESTIÓN PDF — Overlay con opciones
══════════════════════════════════════════════════ */

// Variables globales para el PDF generado
let _pdfBlobUrl = null;
let _pdfNombre  = null;

function _limpiarBlobUrl() {
  if (_pdfBlobUrl) { URL.revokeObjectURL(_pdfBlobUrl); _pdfBlobUrl = null; }
}

/* Cierra el overlay y libera memoria */
function cerrarOverlayPDF() {
  const ov = document.getElementById('pdf-accion-overlay');
  if (ov) ov.remove();
  _limpiarBlobUrl();
  document.title = 'Acta Visita Técnica – Savian';
}

/* Descarga directa (Android / PC) */
function descargarPDFDirecto() {
  if (!_pdfBlobUrl || !_pdfNombre) return;
  const a = document.createElement('a');
  a.href = _pdfBlobUrl;
  a.download = _pdfNombre + '.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('✅ PDF descargando...', 'success');
}

/* Enviar correo desde el overlay */
async function enviarDesdeOverlay() {
  const btn = document.getElementById('btn-overlay-correo');
  if (btn) { btn.disabled = true; btn.innerHTML = '⏳ Enviando...'; }
  try {
    await enviarCorreos(_pdfNombre || 'Acta');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '📧 Enviar al correo'; }
  }
}

/* Muestra el overlay con opciones según plataforma */
function mostrarOverlayPDF(nombre) {
  const prev = document.getElementById('pdf-accion-overlay');
  if (prev) prev.remove();

  const overlay = document.createElement('div');
  overlay.id = 'pdf-accion-overlay';
  overlay.style.cssText = [
    'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.92)',
    'z-index:99999', 'display:flex', 'flex-direction:column',
    'align-items:center', 'justify-content:center', 'padding:24px'
  ].join(';');

  // ⚠️ iOS fix: el <a download> debe ser un elemento REAL que el usuario toca.
  // No funciona si se crea y se clicka desde código (bloqueado por Safari).
  overlay.innerHTML = `
    <div style="background:#1e1e1e;border-radius:16px;width:100%;max-width:400px;
                overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5);">

      <!-- Cabecera -->
      <div style="background:#1a8a7a;padding:16px 20px;display:flex;
                  align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:24px;">📄</span>
          <div>
            <div style="color:white;font-weight:700;font-size:15px;
                        font-family:'DM Sans',sans-serif;">${nombre}.pdf</div>
            <div style="color:rgba(255,255,255,.7);font-size:12px;
                        font-family:'DM Sans',sans-serif;">PDF generado correctamente</div>
          </div>
        </div>
        <button onclick="cerrarOverlayPDF()"
          style="background:rgba(255,255,255,.15);border:none;color:white;
                 width:32px;height:32px;border-radius:50%;font-size:16px;
                 cursor:pointer;touch-action:manipulation;">✕</button>
      </div>

      <!-- Cuerpo -->
      <div style="padding:20px;font-family:'DM Sans',sans-serif;">

        <!-- Botón descarga: <a> real que el usuario toca → funciona en iOS 13+ -->
        <a id="btn-descarga-pdf" href="${_pdfBlobUrl}" download="${nombre}.pdf"
          style="display:flex;align-items:center;justify-content:center;gap:10px;
                 background:#1a8a7a;color:white;text-decoration:none;
                 padding:16px;border-radius:12px;font-size:16px;font-weight:700;
                 font-family:'DM Sans',sans-serif;margin-bottom:12px;
                 -webkit-user-select:none;touch-action:manipulation;">
          💾 Descargar PDF
        </a>

        <!-- Botón correo -->
        <button id="btn-overlay-correo" onclick="enviarDesdeOverlay()"
          style="display:flex;align-items:center;justify-content:center;gap:10px;
                 background:#059669;color:white;border:none;width:100%;
                 padding:16px;border-radius:12px;font-size:16px;font-weight:700;
                 font-family:'DM Sans',sans-serif;margin-bottom:12px;
                 cursor:pointer;touch-action:manipulation;">
          📧 Enviar al correo
        </button>

        <!-- Cerrar -->
        <button onclick="cerrarOverlayPDF()"
          style="display:flex;align-items:center;justify-content:center;
                 background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);
                 border:none;width:100%;padding:12px;border-radius:12px;
                 font-size:14px;font-family:'DM Sans',sans-serif;
                 cursor:pointer;touch-action:manipulation;">
          Cerrar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

/* ══════════════════════════════════════════════════
   ✅  BOTÓN COMPLETAR: genera PDF y muestra overlay
══════════════════════════════════════════════════ */
async function enviarCorreos(nombre, pdf) {
  const cli      = document.getElementById('cliente').value  || '-';
  const centro   = document.getElementById('centro').value   || '-';
  const trabajos = document.getElementById('trabajos').value || '-';
  const fv       = document.getElementById('fecha').value    || '';
  const partes   = fv.split('-');
  const fecha    = fv ? `${partes[2]}/${partes[1]}/${partes[0]}` : '-';

  const filas    = [...document.querySelectorAll('#trabajadores .worker-nombre')];
  const tecnicos = filas.map(i => i.value?.trim()).filter(Boolean).join(', ') || '-';

  // ── Subir PDF a Google Drive ──
  try {
    const pdfBase64 = btoa(
      new Uint8Array(pdf.output('arraybuffer'))
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );

    const res = await fetch('https://savian-drive-uploader-e6fyh7d8fxg4fuah.westeurope-01.azurewebsites.net/api/uploadDrive?code=nJP6ojA7pFbUZjso-UwGDA7_cTFotDOXBc5YSqxP9EOiAzFupYfkDg==', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pdfBase64,
        fileName: nombre + '.pdf'
      })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    showToast('✅ PDF guardado en Drive correctamente', 'success');
  } catch (e) {
    console.error('Error Drive:', e);
    showToast('⚠️ No se pudo guardar en Drive.\n' + e.message, 'warn');
  }

  // ── Notificación por correo (sin adjunto) ──
  const cuerpo = [
    `📋 NUEVA ACTA DE VISITA TÉCNICA`,
    ``,
    `Cliente  : ${cli}`,
    `Centro   : ${centro}`,
    `Fecha    : ${fecha}`,
    `Tipo     : ${tipoActivo || 'Visita'}`,
    `Técnicos : ${tecnicos}`,
    ``,
    `Trabajos realizados:`,
    trabajos,
    ``,
    `📁 PDF disponible en Google Drive: Actas Savian`
  ].join('\n');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: CONFIG.web3forms_key,
        subject:    `[Savian] Acta – ${cli} – ${fecha}`,
        from_name:  CONFIG.from_name,
        to:         CONFIG.admin_email,
        message:    cuerpo
      })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
  } catch (e) {
    console.error('Error correo:', e);
  }
}


/* ══════════════════════════════════════════════════
   🗑️  RESET
══════════════════════════════════════════════════ */
function confirmarReset() {
  if (!confirm('¿Borrar todos los datos del formulario?\nEsta acción no se puede deshacer.')) return;
  resetForm();
}
function resetForm() {
  // Fecha: hoy
  document.getElementById('fecha').value = hoy;

  // Combo cliente: limpiar valor y reconstruir lista
  const inpCliente = document.getElementById('cliente');
  inpCliente.value = '';
  cerrarCombos();
  poblarCombo('cliente', '');

  // Combo centro: limpiar valor y reconstruir lista
  const inpCentro = document.getElementById('centro');
  inpCentro.value = '';
  poblarCombo('centro', '');

  // Localización
  document.getElementById('loc').value = '';

  // Trabajadores: 2 por defecto
  document.getElementById('trabajadores').innerHTML = '';
  wc = 0;
  for (let i = 0; i < 2; i++) addWorker();

  // Dispositivos: sin filas iniciales (igual que al cargar la página)
  document.getElementById('deviceRows').innerHTML = '';
  dc = 0;

  // Tipo de trabajo
  tipoActivo = '';
  document.getElementById('btn-incidencia').classList.remove('active');
  document.getElementById('btn-visita').classList.remove('active');
  document.getElementById('chk-incidencia').textContent = '';
  document.getElementById('chk-visita').textContent = '';

  // Trabajos realizados
  document.getElementById('trabajos').value = '';

  // Firmas
  limpiarFirma(1);
  limpiarFirma(2);
}
/* ══════════════════════════════════════════════════
   🎨  UI HELPERS
══════════════════════════════════════════════════ */
function setLoading(show, txt='') {
  const el=document.getElementById('overlay');
  document.getElementById('overlay-txt').textContent=txt;
  show ? el.classList.add('show') : el.classList.remove('show');
}
let toastTimer;
function showToast(msg, type='info') {
  const el=document.getElementById('toast');
  el.textContent=msg; el.className=`toast ${type}`; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'), 5000);
}

/* ══════════════════════════════════════════════════
   📱  OPTIMIZACIONES MÓVIL (iOS / Android)
══════════════════════════════════════════════════ */

// Ocultar barra inferior cuando el teclado está visible (iOS Safari)
(function() {
  const bar = document.querySelector('.bottom-bar');
  if (!bar || !window.visualViewport) return;

  let keyboardTimer;
  window.visualViewport.addEventListener('resize', () => {
    clearTimeout(keyboardTimer);
    const vvHeight = window.visualViewport.height;
    const winHeight = window.innerHeight;
    // Si el viewport visual es mucho más pequeño, hay teclado abierto
    if (vvHeight < winHeight * 0.80) {
      bar.style.transform = 'translateY(110%)';
      bar.style.opacity = '0';
      bar.style.pointerEvents = 'none';
    } else {
      keyboardTimer = setTimeout(() => {
        bar.style.transform = '';
        bar.style.opacity = '';
        bar.style.pointerEvents = '';
      }, 80);
    }
  });
})();

// Resetear firmas al cambiar orientación (el canvas pierde sus dimensiones)
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    [1, 2].forEach(id => {
      if (fS[id]) {
        limpiarFirma(id);
        // Notificar al usuario
        const bx = document.getElementById('firmaBox' + id);
        if (bx) {
          const ph = bx.querySelector('.firma-placeholder');
          if (ph) ph.style.display = '';
        }
      }
    });
  }, 300);
});


// Scroll automático para evitar que el campo quede oculto bajo la barra inferior
document.addEventListener('focusin', (e) => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
    setTimeout(() => {
      const el = e.target;
      const rect = el.getBoundingClientRect();
      const barHeight = 80; // altura aproximada de la barra inferior
      const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      if (rect.bottom > viewportHeight - barHeight) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  }
}, { passive: true });
