# Números Claros — Finance Pro

Aplicación web **local-first** premium para control de finanzas personales. Replica y moderniza la lógica del Excel *“Finance Pro – Números Claros”* / *Personal Finance 9.0* como una plataforma tipo SaaS/BI: rápida, visual, multimoneda y 100 % privada (los datos viven en tu navegador, sin backend, sin login, sin APIs externas).

![stack](https://img.shields.io/badge/React-18-149ECA) ![ts](https://img.shields.io/badge/TypeScript-5-3178C6) ![vite](https://img.shields.io/badge/Vite-6-646CFF) ![pwa](https://img.shields.io/badge/PWA-ready-5A0FC8)

---

## ✨ Características

- **Dashboard inteligente**: dinero disponible, patrimonio neto, ingresos/gastos, flujo neto, % de ahorro, consumo de tarjetas, deudas, presupuesto usado, variación vs. mes anterior, gasto/ingreso promedio diario.
- **Termómetro de gastos** con línea al 50 % y alertas moderada/fuerte/crítica (50/80/100 %).
- **Gráficos**: flujo diario (área), ingresos vs. gastos (barras), distribución por categoría (donut) y por cuenta.
- **Registro rápido** con campos dinámicos por tipo de movimiento, validaciones y resumen + proyección de saldo antes de guardar.
- **Carga masiva** estilo hoja de cálculo (hasta 15 filas) con copiar-a-todas, duplicar, limpiar vacías, validación por celda y confirmación.
- **Cuentas y activos** (efectivo, banco, billetera, ahorro, inversión, compartida, etc.) con saldo, entradas/salidas, participación y la regla *ahorro ≠ disponible pero sí patrimonio*.
- **Categorías y subcategorías** jerárquicas, reordenables, con ranking de gasto, promedio diario y variación.
- **Presupuestos** mensuales por categoría con copiar mes anterior y comparativo.
- **Ahorros y metas** con segregación lógica de fondos, progreso circular, top 6 más cercanas, proyección mensual sugerida e historial por meta.
- **Tarjetas de crédito** con compras en cuotas (cronograma automático), consumo de ciclo, línea disponible, pago mínimo y pagos.
- **Préstamos y deudas** (“Me deben” / “Debo”) con cronograma de cobro/pago y movimiento de caja automático.
- **Historial** con búsqueda multi-token (AND), filtros completos, orden, edición/duplicado/eliminación segura y recálculo automático.
- **Reportes** (11 reportes) con vista previa y exportación a **Excel**, **PDF profesional**, **imagen del dashboard**, **JSON** y respaldo completo.
- **Multimoneda** con tipos de cambio manuales y conversión a moneda base.
- **Auditoría local** de creaciones/ediciones/eliminaciones.
- **Tema claro/oscuro/sistema**, responsive *mobile-first*, **PWA instalable**.

---

## 🛠️ Stack

| Capa | Tecnología |
|------|------------|
| UI | React 18 + TypeScript + Vite 6 |
| Estilos | Tailwind CSS (tema de marca: azul profundo, verde financiero, dorado, grafito) |
| Estado | Zustand (datos + UI) |
| Persistencia | IndexedDB vía **Dexie.js** |
| Gráficos | Recharts |
| Animación | Framer Motion |
| Íconos | lucide-react |
| Fechas | date-fns |
| Export | xlsx · jsPDF + autotable · html2canvas (carga diferida) |
| PWA | vite-plugin-pwa (Workbox) |

---

## 🚀 Instalación y ejecución

Requisitos: **Node 18+** (probado en Node 24).

```bash
cd finance-pro
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo  → http://localhost:5173
```

Otros scripts:

```bash
npm run build      # type-check + build de producción (genera /dist)
npm run preview    # sirve el build de producción
npm run lint       # solo type-check (tsc --noEmit)
```

> La app **inicia vacía**. En el primer arranque verás un onboarding (moneda base → primera cuenta → categorías). Para explorar con datos de ejemplo: **Configuración → “Cargar datos demo”**.

---

## 📂 Estructura del proyecto

```
finance-pro/
├─ public/                 # favicon, assets PWA
├─ src/
│  ├─ types/               # modelo de datos tipado (entidades + BackupFile)
│  ├─ db/                  # Dexie (database, repo, demo)
│  ├─ lib/
│  │  ├─ finance/          # ★ cálculos puros (sin UI): balances, networth,
│  │  │                    #   periods, budgets, savings, cards, loans, alerts
│  │  ├─ dates.ts, format.ts, ids.ts, cn.ts
│  │  ├─ constants.ts, validation.ts, nav.ts
│  │  ├─ reportData.ts, reports.ts, export.ts
│  ├─ store/               # Zustand: useDataStore (CRUD + auditoría), useUIStore
│  ├─ hooks/               # useFinance (selectores derivados), useTheme
│  ├─ components/
│  │  ├─ ui/               # primitivos reutilizables (Modal, Form, StatCard…)
│  │  ├─ layout/           # AppLayout, Sidebar, MobileNav, Topbar, PeriodSelector
│  │  └─ finance/          # TransactionForm, AccountForm, Charts, Thermometer…
│  ├─ pages/               # una página por módulo (13 rutas)
│  ├─ App.tsx              # router + gate de onboarding
│  └─ main.tsx
└─ vite.config.ts, tailwind.config.js, tsconfig.json
```

### Principio de arquitectura clave: **saldos derivados**
Los saldos **no se almacenan**. Toda cifra (saldo de cuenta, dinero disponible, patrimonio, consumo de tarjeta, avance de meta/presupuesto) se **deriva del libro mayor de transacciones** mediante funciones puras en `src/lib/finance/`. Por eso, al **editar o eliminar** cualquier movimiento, KPIs, gráficos, presupuestos, ahorros y tarjetas se **recalculan automáticamente** y siempre quedan consistentes.

---

## 🧩 Módulos

| Ruta | Módulo | Resumen |
|------|--------|---------|
| `/dashboard` | Dashboard | KPIs, termómetro, gráficos, alertas, próximos pagos, últimas transacciones |
| `/transactions/new` | Registro rápido | Form dinámico con validación y proyección de saldo |
| `/transactions/bulk` | Carga masiva | Grid tipo hoja de cálculo, validación por fila, resumen |
| `/accounts` | Cuentas | Cards/tabla, actividad, participación, reglas de disponible/patrimonio |
| `/categories` | Categorías | Jerárquico, reorder, ranking, promedio, variación |
| `/budgets` | Presupuesto | Mensual por categoría, copiar mes anterior, termómetro |
| `/savings` | Ahorros y metas | Progreso circular, top 6, proyección, historial por meta |
| `/credit-cards` | Tarjetas | Compras en cuotas, cronograma, ciclo, pagos |
| `/loans` | Préstamos y deudas | “Me deben / Debo”, cronograma, vencimientos |
| `/history` | Historial | Búsqueda multi-token, filtros, edición/duplicado/borrado |
| `/reports` | Reportes | 11 reportes + export Excel/PDF/JSON |
| `/settings` | Configuración | Monedas, tema, parámetros, respaldo, demo, reset |

---

## 💾 Respaldo y multi-dispositivo

Los datos son locales a cada navegador/dispositivo. Para moverlos:

1. **Configuración → Exportar respaldo (JSON)** en el dispositivo origen.
2. **Configuración → Importar respaldo** en el destino → elige **Reemplazar** o **Fusionar**.

La estructura del archivo se valida antes de importar y se advierte antes de reemplazar. Un recordatorio visual aparece si hace más de 7 días que no respaldas.

---

## 🔮 Futuras mejoras

- **Sincronización en la nube** opcional (Supabase/Firebase/backend propio) — la capa de datos (`db/` + `store/`) ya está aislada para enchufar un adaptador remoto.
- Sincronización **cifrada** y soporte **multiusuario**.
- Adjuntar **comprobantes** (imágenes) por transacción usando IndexedDB/Blobs.
- **Code-splitting por ruta** (lazy routes) y tests unitarios sobre `src/lib/finance/*` (Vitest ya está configurado).
- Reglas/automatizaciones (movimientos recurrentes, plantillas).
- Tipos de cambio con histórico por fecha.

---

## 📝 Notas

- Sin login, sin usuarios, sin backend, sin APIs externas ni conexión bancaria.
- La app **arranca vacía**; los datos demo son opcionales y claramente separados.
- Hecho para sentirse como un producto financiero premium: control, claridad y confianza.
