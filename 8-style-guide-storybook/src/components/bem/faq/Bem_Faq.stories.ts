import Bem_Faq from "./Bem_Faq.vue";
import "../../../assets/css/style.scss";

import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

const actionsData = {
  //
};

export default {
  title: "Bem Components/FAQ",
  component: Bem_Faq,
  argTypes: {
    title: {
      description: "제목",
      table: {
        type: {
          summary: "string",
          detail: "제목 입니다",
        },
      },
    },

    content: {
      description: "컨텐츠",
      table: {
        type: {
          summary: "string",
          detail: "컨텐츠 입니다",
        },
      },
    },

    href: {
      description: "링크 주소",
      table: {
        type: {
          summary: "string",
          detail: "링크 주소 입니다",
        },
      },
    },

    linkContent: {
      description: "링크 컨텐츠",
      table: {
        type: {
          summary: "string",
          detail: "링크 컨텐츠 입니다",
        },
      },
    },
  },
} as Meta;

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Bem_Faq },
  template: `
    <Bem_Faq v-bind="$props"></Bem_Faq>
  `,
});

export const Default_Bem_Faq = Template.bind({});
Default_Bem_Faq.args = {
  //
};
