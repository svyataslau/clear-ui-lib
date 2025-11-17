import { ButtonStories } from './stories/ButtonStories';
import { InputStories } from './stories/InputStories';
import { CardStories } from './stories/CardStories';
import { AvatarStories } from './stories/AvatarStories';
import { TypographyStories } from './stories/TypographyStories';
import { ModalStories } from './stories/ModalStories';
import { NavbarStories } from './stories/NavbarStories';
import { SwitchStories } from './stories/SwitchStories';
import { TextareaStories } from './stories/TextareaStories';
import { CirclePlateStories } from './stories/CirclePlateStories';
import { ThemeDemo } from './ThemeDemo';

interface ComponentStoriesProps {
  selectedComponent: string;
}

export function ComponentStories({ selectedComponent }: ComponentStoriesProps) {
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Button':
        return <ButtonStories />;
      case 'Input':
        return <InputStories />;
      case 'Card':
        return <CardStories />;
      case 'Avatar':
        return <AvatarStories />;
      case 'Typography':
        return <TypographyStories />;
      case 'Modal':
        return <ModalStories />;
      case 'Navbar':
        return <NavbarStories />;
      case 'Switch':
        return <SwitchStories />;
      case 'Textarea':
        return <TextareaStories />;
      case 'CirclePlate':
        return <CirclePlateStories />;
      case 'ThemeDemo':
        return <ThemeDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {selectedComponent}
        </h1>
        <p className="text-gray-600">
          Explore different variants and states of the {selectedComponent} component.
        </p>
      </div>
      {renderComponent()}
    </div>
  );
}
