# 🎬 GifsApp – React + Vite

Aplicación teórico–práctica desarrollada con React y Vite para aprender a consumir APIs externas, específicamente la API de Giphy.

La aplicación permite buscar GIFs dinámicamente mediante peticiones HTTP y renderizarlos en pantalla usando componentes funcionales y hooks.

---

## 🚀 Tecnologías utilizadas

- React (Hooks: useState, useEffect)
- Vite
- Fetch API
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

- Consumo de APIs REST

- Manejo de estados con useState

- Efectos secundarios con useEffect

- Renderizado dinámico de listas

- Manejo de props entre componentes

- Separación de lógica en custom hooks (si aplica)