# Clear UI Library

Современная библиотека React компонентов с neumorphic дизайном, использующая zero-runtime подход к стилям.

## Особенности

- 🎨 **Neumorphic дизайн** - современный стиль с мягкими тенями
- ⚡ **Zero-runtime CSS** - все стили компилируются в CSS файлы
- 🧩 **TypeScript** - полная типизация всех компонентов
- 📱 **Responsive** - адаптивный дизайн
- 🎯 **Accessible** - поддержка доступности
- 🧪 **Tested** - покрытие тестами

## Установка

```bash
npm install @clear/ui
```

## Использование

### Автоматический импорт стилей

Стили импортируются автоматически при использовании библиотеки. Дополнительный импорт CSS не требуется.

### Базовое использование

```tsx
import { Button, Input, Card } from '@clear/ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
      <Card>
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>
    </div>
  );
}
```

## Компоненты

### Button

```tsx
import { Button } from '@clear/ui';

// Размеры
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Варианты
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="concave">Concave</Button>
<Button variant="gradient">Gradient</Button>
```

### Input

```tsx
import { Input } from '@clear/ui';

// Размеры
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
<Input size="xl" placeholder="Extra large input" />

// Стили
<Input rounded placeholder="Rounded input" />
<Input neumorphic placeholder="Neumorphic input" />
<Input error placeholder="Error input" />
```

### Switch

```tsx
import { Switch } from '@clear/ui';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch 
      checked={checked} 
      onChange={setChecked}
      disabled={false}
    />
  );
}
```

### Card

```tsx
import { Card } from '@clear/ui';

// Варианты
<Card variant="default">Default card</Card>
<Card variant="outlined">Outlined card</Card>

// Размеры отступов
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>
<Card padding="xl">Extra large padding</Card>

// Скругленные углы
<Card rounded>Rounded card</Card>
```

### Modal

```tsx
import { Modal } from '@clear/ui';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      title="Modal Title"
      size="md"
    >
      <p>Modal content goes here</p>
    </Modal>
  );
}
```

### Navbar

```tsx
import { Navbar } from '@clear/ui';

const links = [
  { href: '/', label: 'Home', active: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function MyNavbar() {
  return (
    <Navbar
      logo={<h1>Logo</h1>}
      links={links}
      actions={<Button>Login</Button>}
    />
  );
}
```

### Typography

```tsx
import { Typography } from '@clear/ui';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>

// Цвета
<Typography color="primary">Primary text</Typography>
<Typography color="secondary">Secondary text</Typography>
<Typography color="accent">Accent text</Typography>

// Вес
<Typography weight="normal">Normal weight</Typography>
<Typography weight="medium">Medium weight</Typography>
<Typography weight="bold">Bold weight</Typography>
```

### Avatar

```tsx
import { Avatar } from '@clear/ui';

// С изображением
<Avatar src="/path/to/image.jpg" alt="User avatar" />

// С fallback текстом
<Avatar fallback="John Doe" />

// Размеры
<Avatar size="sm" fallback="JD" />
<Avatar size="md" fallback="JD" />
<Avatar size="lg" fallback="JD" />
<Avatar size="xl" fallback="JD" />
```

### CirclePlate

```tsx
import { CirclePlate } from '@clear/ui';

// Варианты
<CirclePlate variant="primary">Primary</CirclePlate>
<CirclePlate variant="concave">Concave</CirclePlate>

// Размеры
<CirclePlate size="sm">Small</CirclePlate>
<CirclePlate size="md">Medium</CirclePlate>
<CirclePlate size="lg">Large</CirclePlate>
<CirclePlate size="xl">Extra Large</CirclePlate>
```

### Textarea

```tsx
import { Textarea } from '@clear/ui';

<Textarea 
  placeholder="Enter your message..."
  rows={4}
  size="md"
  error={false}
/>
```

### FormField

```tsx
import { FormField, Input } from '@clear/ui';

<FormField 
  label="Email" 
  error="Please enter a valid email"
  required
>
  <Input type="email" placeholder="Enter your email" />
</FormField>
```

## Zero-Runtime CSS

Библиотека использует zero-runtime подход к стилям:

- Все стили компилируются в CSS файлы
- Нет runtime overhead от styled-components
- Лучшая производительность
- Меньший размер бандла

### CSS классы

Основные CSS классы для neumorphic стилей:

```css
/* Фоны */
.bg-neumorphism-background
.bg-neumorphism-classic

/* Тени */
.shadow-neumorphism
.shadow-neumorphism-inset
.shadow-neumorphism-card
.shadow-neumorphism-input
.shadow-neumorphism-concave

/* Компоненты */
.input-base
.switch-container
.card
.cssbuttons-io
```

### Ручной импорт CSS (опционально)

Если вам нужно импортировать CSS вручную (например, для кастомизации), вы можете использовать:

```tsx
import '@clear/ui/styles';
```

## Разработка

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

### Сборка

```bash
npm run build
```

### Тесты

```bash
npm test
```

### Demo приложение

```bash
npm run demo
```

## Миграция с styled-components

Если вы мигрируете с styled-components:

1. Удалите импорты styled-components
2. Замените `cn()` на `clsx()` из пакета `clsx`
3. Используйте CSS классы вместо styled-components
4. CSS импортируется автоматически, дополнительный импорт не требуется

## Лицензия

MIT
