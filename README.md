# 🎬 GifsApp – React + Vite

Aplicación teórico–práctica desarrollada con React y Vite para aprender a consumir APIs externas, específicamente la API de Giphy.

La aplicación permite buscar GIFs dinámicamente mediante peticiones HTTP y renderizarlos en pantalla usando componentes funcionales y hooks.

---

## 🚀 Tecnologías utilizadas

- React (Hooks: useState, useEffect, useRef)
- Vite
- Axios
- JavaScript ES6+
- CSS

---

## 📦 Instalación y uso

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local.

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
```

### 2️⃣ Entrar al directorio del proyecto

```bash
cd NOMBRE-DEL-REPO
```

### 3️⃣ Instalar dependencias

```bash
npm install
```

### 4️⃣ Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Luego abre en tu navegador:

```bash
http://localhost:5173
```

---

## 🔑 Configuración de la API Key

Para que la aplicación funcione correctamente, necesitas una API Key de Giphy.

Pasos:

1. Crear una cuenta en Giphy Developers.

2. Generar una API Key.

3. Colocar la API Key en el archivo correspondiente.

> [!TIP] ⚠️ Recomendación profesional: usar variables de entorno en lugar de exponer la clave directamente en el código.

## Configurando las dependencias para el Testing

1. Vitest

```bash
npm install --save-dev vitest jsdom@21 
```

2. React Testing Library

```bash
npm install --save-dev @testing-library/react @testing-library/dom
```

3. Todo en un sólo comando

```bash
npm install --save-dev @testing-library/react @testing-library/dom vitest jsdom@21
```

4. Crear estos scripts en el `package.json`

```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "coverage": "vitest run --coverage"
}
```

5. Configurar `vite.config.ts`

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
```

### Usando variables de entorno con Vite

Crear un archivo `.env` en la raíz del proyecto:

```typescript
VITE_GIPHY_API_KEY=tu_api_key_aqui
```

Y usarla en el código:

```typescript
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
```

## 🧠 Conceptos prácticos aplicados

Este proyecto refuerza:

- Peticiones basicas con Axios

- Manejo de estados con useState

- Efectos secundarios con useEffect

- Renderizado dinámico de listas

- Manejo de props entre componentes

- Separación de lógica en custom hooks (si aplica)