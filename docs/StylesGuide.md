# Стили @clear/ui

Библиотека `@clear/ui` включает полный набор стилей для neumorphic дизайна.

## Импорт стилей

```tsx
import '@clear/ui/styles';
```

## Доступные стили

### Tailwind CSS директивы
- `@tailwind base`
- `@tailwind components` 
- `@tailwind utilities`

### Font Family
По умолчанию используется `'Courier New', Courier, monospace` для всех элементов.

### Neumorphic Background Colors

```css
.bg-neumorphism-background  /* rgb(236 240 243) */
.bg-neumorphism-classic     /* #f0f0f3 */
```

### Neumorphic Shadow Styles

```css
.shadow-neumorphism         /* Основная тень */
.shadow-neumorphism-inset   /* Внутренняя тень */
.shadow-neumorphism-pressed /* Тень при нажатии */
.shadow-neumorphism-card    /* Тень для карточек */
.shadow-neumorphism-input   /* Тень для инпутов */
.shadow-neumorphism-convex  /* Выпуклая тень */
.shadow-neumorphism-concave /* Вогнутая тень */
```

### Custom Component Styles

#### Input Styles
```css
.input {
  max-width: 200px;
  min-height: 40px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  background: rgb(236 240 243);
  box-shadow: 6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff;
  border: none;
  border-radius: 10px;
  transition: all 0.5s;
}
```

#### Card Styles
```css
.card {
  width: 190px;
  height: 254px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 6px 6px 5px #bebebe, -6px -6px 5px #ffffff;
}
```

#### Switch Component Styles
Полный набор стилей для Switch компонента включая:
- `.switch-container`
- `.toggle-checkbox`
- `.switch`
- `.toggle`
- `.led`
- Состояния `:checked` и `:hover`

#### Gradient Button Styles
```css
.cssbuttons-io {
  /* Градиентная кнопка с анимацией */
}
```

## Использование в проекте

### 1. Установка
```bash
npm install @clear/ui
```

### 2. Импорт стилей в главном файле
```tsx
// App.tsx или main.tsx
import '@clear/ui/styles';
import { Input, Button, Card } from '@clear/ui';

function App() {
  return (
    <div className="bg-neumorphism-background min-h-screen p-8">
      <Card className="shadow-neumorphism-card">
        <Input className="shadow-neumorphism-input" />
        <Button className="cssbuttons-io">Click me</Button>
      </Card>
    </div>
  );
}
```

### 3. Настройка Tailwind CSS (если нужно)

Если вы хотите использовать только стили без Tailwind, убедитесь что у вас настроен PostCSS:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Кастомизация

Все стили можно переопределить в вашем проекте:

```css
/* Ваши кастомные стили */
.bg-neumorphism-background {
  background: #your-custom-color;
}

.shadow-neumorphism {
  box-shadow: your-custom-shadow;
}
```

## Совместимость

- ✅ React 16+
- ✅ TypeScript
- ✅ Tailwind CSS 3.x
- ✅ PostCSS
- ✅ Vite
- ✅ Webpack
- ✅ Create React App
