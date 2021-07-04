import { Input } from "./index";
import { InputProps } from './Input';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'SMPX/Forms/Input',
  component: Input,
  parameters: {
    componentSubtitle: 'The Forms/Input',
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};
