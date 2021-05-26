import Bem_Button from "./Bem_Button.vue";

import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

const actionsData = {
  //
};

export default {
  title: "Bem Components/Button",
  component: Bem_Button,
  argTypes: {
    href: {
      description: "링크 주소",
      table: {
        type: {
          summary: "string",
          detail: "링크 주소",
        },
      },
    },
  },
} as Meta;

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Bem_Button },
  template: `
    <Bem_Button :useArrowRight="useArrowRight">label</Bem_Button>
  `,
});

export const Default_Button = Template.bind({});
Default_Button.args = {
  //
};
Default_Button.storyName = "기본형";

export const ArrowRight_Button = Template.bind({});
ArrowRight_Button.args = {
  useArrowRight: true,
};
ArrowRight_Button.storyName = "화살표 버튼";
