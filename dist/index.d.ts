import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { HTMLAttributes, ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type Size$6 = 'sm' | 'md' | 'lg' | 'xl';
interface AvatarProps$1 extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    src?: string;
    alt?: string;
    size?: Size$6;
    fallback?: string;
    className?: string;
}

declare function Avatar({ src, alt, size, fallback, className, ...props }: AvatarProps$1): react_jsx_runtime.JSX.Element;

type Size$5 = 'sm' | 'md' | 'lg' | 'xl';
type Variant$1 = 'primary' | 'ghost' | 'concave' | 'gradient';
interface ButtonProps$1 extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    children?: ReactNode;
    variant?: Variant$1;
    size?: Size$5;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}

declare function Button({ children, variant, size, disabled, onClick, type, className, ...props }: ButtonProps$1): react_jsx_runtime.JSX.Element;

type Size$4 = 'sm' | 'md' | 'lg' | 'xl';
interface CardProps$1 extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    variant?: 'default' | 'outlined';
    padding?: Size$4;
    rounded?: boolean;
    className?: string;
}

declare function Card({ children, variant, padding, rounded, className, ...props }: CardProps$1): react_jsx_runtime.JSX.Element;

type Size$3 = 'sm' | 'md' | 'lg' | 'xl';
interface InputProps$1 extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    children?: ReactNode;
    onChange?: ((value: string) => void) | ((event: React.ChangeEvent<HTMLInputElement>) => void);
    error?: boolean;
    size?: Size$3;
    rounded?: boolean;
    neumorphic?: boolean;
    className?: string;
}

declare const Input: React$1.ForwardRefExoticComponent<InputProps$1 & React$1.RefAttributes<HTMLInputElement>>;

interface ModalProps$1 extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

declare function Modal({ children, isOpen, onClose, title, size, className, ...props }: ModalProps$1): react_jsx_runtime.JSX.Element | null;

interface NavbarProps$1 extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    logo?: ReactNode;
    links?: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    actions?: ReactNode;
    className?: string;
}

declare function Navbar({ logo, links, actions, className, ...props }: NavbarProps$1): react_jsx_runtime.JSX.Element;

interface SwitchProps$1 extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children?: ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}

declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps$1 & React$1.RefAttributes<HTMLInputElement>>;

type Size$2 = 'sm' | 'md' | 'lg' | 'xl';
interface CirclePlateProps$1 extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    variant?: 'primary' | 'concave';
    size?: Size$2;
    className?: string;
}

declare function CirclePlate({ children, variant, size, className, ...props }: CirclePlateProps$1): react_jsx_runtime.JSX.Element;

type Size$1 = 'sm' | 'md' | 'lg' | 'xl';
interface TextareaProps$1 extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'size'> {
    children?: ReactNode;
    onChange?: ((value: string) => void) | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void);
    error?: boolean;
    size?: Size$1;
    className?: string;
}

declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps$1 & React$1.RefAttributes<HTMLTextAreaElement>>;

type Color$1 = 'primary' | 'secondary' | 'accent' | 'gray';
interface TypographyProps$1 extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
    color?: Color$1;
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    className?: string;
}

declare function Typography({ children, variant, color, weight, className, ...props }: TypographyProps$1): React__default.DetailedReactHTMLElement<{
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
    autoFocus?: boolean | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: React__default.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: React__default.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    exportparts?: string | undefined;
    part?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: React__default.ClipboardEventHandler<HTMLElement> | undefined;
    onCopyCapture?: React__default.ClipboardEventHandler<HTMLElement> | undefined;
    onCut?: React__default.ClipboardEventHandler<HTMLElement> | undefined;
    onCutCapture?: React__default.ClipboardEventHandler<HTMLElement> | undefined;
    onPaste?: React__default.ClipboardEventHandler<HTMLElement> | undefined;
    onPasteCapture?: React__default.ClipboardEventHandler<HTMLElement> | undefined;
    onCompositionEnd?: React__default.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionEndCapture?: React__default.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStart?: React__default.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionStartCapture?: React__default.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdate?: React__default.CompositionEventHandler<HTMLElement> | undefined;
    onCompositionUpdateCapture?: React__default.CompositionEventHandler<HTMLElement> | undefined;
    onFocus?: React__default.FocusEventHandler<HTMLElement> | undefined;
    onFocusCapture?: React__default.FocusEventHandler<HTMLElement> | undefined;
    onBlur?: React__default.FocusEventHandler<HTMLElement> | undefined;
    onBlurCapture?: React__default.FocusEventHandler<HTMLElement> | undefined;
    onChange?: React__default.FormEventHandler<HTMLElement> | undefined;
    onChangeCapture?: React__default.FormEventHandler<HTMLElement> | undefined;
    onBeforeInput?: React__default.InputEventHandler<HTMLElement> | undefined;
    onBeforeInputCapture?: React__default.FormEventHandler<HTMLElement> | undefined;
    onInput?: React__default.FormEventHandler<HTMLElement> | undefined;
    onInputCapture?: React__default.FormEventHandler<HTMLElement> | undefined;
    onReset?: React__default.FormEventHandler<HTMLElement> | undefined;
    onResetCapture?: React__default.FormEventHandler<HTMLElement> | undefined;
    onSubmit?: React__default.FormEventHandler<HTMLElement> | undefined;
    onSubmitCapture?: React__default.FormEventHandler<HTMLElement> | undefined;
    onInvalid?: React__default.FormEventHandler<HTMLElement> | undefined;
    onInvalidCapture?: React__default.FormEventHandler<HTMLElement> | undefined;
    onLoad?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onError?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onErrorCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onKeyDown?: React__default.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyDownCapture?: React__default.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPress?: React__default.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyPressCapture?: React__default.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUp?: React__default.KeyboardEventHandler<HTMLElement> | undefined;
    onKeyUpCapture?: React__default.KeyboardEventHandler<HTMLElement> | undefined;
    onAbort?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onAbortCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onCanPlay?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThrough?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onCanPlayThroughCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onDurationChange?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onDurationChangeCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onEmptied?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onEmptiedCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onEncrypted?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onEncryptedCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onEnded?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onEndedCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadedData?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadedDataCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadata?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadedMetadataCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadStart?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onLoadStartCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onPause?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onPauseCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onPlay?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onPlayCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onPlaying?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onPlayingCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onProgress?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onProgressCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onRateChange?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onRateChangeCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSeeked?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSeekedCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSeeking?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSeekingCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onStalled?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onStalledCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSuspend?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSuspendCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdate?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onTimeUpdateCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onVolumeChange?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onVolumeChangeCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onWaiting?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onWaitingCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onAuxClick?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onAuxClickCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onClick?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onClickCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onContextMenuCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onDoubleClick?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onDoubleClickCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onDrag?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragEnd?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragEndCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragEnter?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragEnterCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragExit?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragExitCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragLeave?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragLeaveCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragOver?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragOverCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragStart?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDragStartCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDrop?: React__default.DragEventHandler<HTMLElement> | undefined;
    onDropCapture?: React__default.DragEventHandler<HTMLElement> | undefined;
    onMouseDown?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseDownCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseEnter?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseLeave?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseMove?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseMoveCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseOut?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseOutCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseOver?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseOverCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseUp?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onMouseUpCapture?: React__default.MouseEventHandler<HTMLElement> | undefined;
    onSelect?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onSelectCapture?: React__default.ReactEventHandler<HTMLElement> | undefined;
    onTouchCancel?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchCancelCapture?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchEnd?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchEndCapture?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchMove?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchMoveCapture?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchStart?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onTouchStartCapture?: React__default.TouchEventHandler<HTMLElement> | undefined;
    onPointerDown?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerDownCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerMove?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerMoveCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerUp?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerUpCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerCancel?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerCancelCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerEnter?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerLeave?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerOver?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerOverCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerOut?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onPointerOutCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onGotPointerCaptureCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onLostPointerCaptureCapture?: React__default.PointerEventHandler<HTMLElement> | undefined;
    onScroll?: React__default.UIEventHandler<HTMLElement> | undefined;
    onScrollCapture?: React__default.UIEventHandler<HTMLElement> | undefined;
    onWheel?: React__default.WheelEventHandler<HTMLElement> | undefined;
    onWheelCapture?: React__default.WheelEventHandler<HTMLElement> | undefined;
    onAnimationStart?: React__default.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationStartCapture?: React__default.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEnd?: React__default.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationEndCapture?: React__default.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIteration?: React__default.AnimationEventHandler<HTMLElement> | undefined;
    onAnimationIterationCapture?: React__default.AnimationEventHandler<HTMLElement> | undefined;
    onTransitionEnd?: React__default.TransitionEventHandler<HTMLElement> | undefined;
    onTransitionEndCapture?: React__default.TransitionEventHandler<HTMLElement> | undefined;
    className: string;
}, HTMLElement>;

interface FormFieldProps$1 {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    htmlFor?: string;
}

declare const FormField: React$1.ForwardRefExoticComponent<FormFieldProps$1 & React$1.RefAttributes<HTMLDivElement>>;

interface NeumorphicProviderProps {
    children: React__default.ReactNode;
}
declare function NeumorphicProvider({ children }: NeumorphicProviderProps): react_jsx_runtime.JSX.Element;

interface ComponentDoc$1 {
    name: string;
    description: string;
    examples: React__default.ReactNode;
    props?: Array<{
        name: string;
        type: string;
        required: boolean;
        defaultValue?: string;
        description: string;
    }>;
}
declare const componentDocs: ComponentDoc$1[];
declare function registerComponent(componentDoc: ComponentDoc$1): void;
declare function getAllComponents(): ComponentDoc$1[];
declare function getComponent(name: string): ComponentDoc$1 | undefined;

interface ComponentDoc {
    name: string;
    description: string;
    examples: React__default.ReactNode;
    props?: Array<{
        name: string;
        type: string;
        required: boolean;
        defaultValue?: string;
        description: string;
    }>;
}
interface DocGeneratorProps {
    components: ComponentDoc[];
    title?: string;
    description?: string;
}
declare function DocGenerator({ components, title, description, }: DocGeneratorProps): react_jsx_runtime.JSX.Element;

interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
}
type Size = 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'primary' | 'ghost' | 'concave' | 'gradient';
type Color = 'primary' | 'secondary' | 'accent' | 'gray';
interface ThemeConfig$1 {
    accentColor: string;
    accentColorLight: string;
    accentColorDark: string;
}
interface ButtonProps extends BaseComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    variant?: Variant;
    size?: Size;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface InputProps extends BaseComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    onChange?: ((value: string) => void) | ((event: React.ChangeEvent<HTMLInputElement>) => void);
    error?: boolean;
    size?: Size;
    rounded?: boolean;
    neumorphic?: boolean;
}
interface TextareaProps extends BaseComponentProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'size'> {
    onChange?: ((value: string) => void) | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void);
    error?: boolean;
    size?: Size;
}
interface CardProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outlined';
    padding?: Size;
    rounded?: boolean;
}
interface AvatarProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: Size;
    fallback?: string;
}
interface TypographyProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
    color?: Color;
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}
interface ModalProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
interface NavbarProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {
    logo?: ReactNode;
    links?: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    actions?: ReactNode;
}
interface SwitchProps extends BaseComponentProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}
interface CirclePlateProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'concave';
    size?: Size;
}
interface FormFieldProps {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    htmlFor?: string;
}

interface ThemeConfig {
    accentColor: string;
    accentColorLight: string;
    accentColorDark: string;
}
declare const defaultTheme: ThemeConfig;
interface ThemeContextType {
    theme: ThemeConfig;
    setTheme: (theme: Partial<ThemeConfig>) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Partial<ThemeConfig>;
}
declare function ThemeProvider({ children, initialTheme }: ThemeProviderProps): react_jsx_runtime.JSX.Element;
declare function useTheme(): ThemeContextType;

export { Avatar, AvatarProps, BaseComponentProps, Button, ButtonProps, Card, CardProps, CirclePlate, CirclePlateProps, Color, ComponentDoc$1 as ComponentDoc, DocGenerator, FormField, FormFieldProps, Input, InputProps, Modal, ModalProps, Navbar, NavbarProps, NeumorphicProvider, Size, Switch, SwitchProps, Textarea, TextareaProps, ThemeConfig$1 as ThemeConfig, ThemeProvider, Typography, TypographyProps, Variant, componentDocs, defaultTheme, getAllComponents, getComponent, registerComponent, useTheme };
