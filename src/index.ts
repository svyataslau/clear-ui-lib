// Components
export { Avatar } from './components/Avatar';
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Input } from './components/Input';
export { Modal } from './components/Modal';
export { Navbar } from './components/Navbar';
export { Switch } from './components/Switch';
export { CirclePlate } from './components/CirclePlate';
export { Textarea } from './components/Textarea';
export { Typography } from './components/Typography';


export type { ComponentDoc } from './docs';
// Documentation
export {
  componentDocs,
  DocGenerator,
  getAllComponents,
  getComponent,
  registerComponent,
} from './docs';
// Types
export type {
  AvatarProps,
  BaseComponentProps,
  ButtonProps,
  CardProps,
  CirclePlateProps,
  Color,
  InputProps,
  ModalProps,
  NavbarProps,
  Size,
  SwitchProps,
  TextareaProps,
  TypographyProps,
  Variant,
  ThemeConfig,
} from './types';
// Utils
export { cn } from './utils/classNames';
export { ThemeProvider, useTheme, defaultTheme } from './context/ThemeContext';


