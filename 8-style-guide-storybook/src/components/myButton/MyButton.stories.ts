import MyButton from "./MyButton.vue";
import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

const actionsData = {
  storyCallback: action("myClickEvent 발생"),
};

// MyButton 컴포넌트에 대한 정의
export default {
  title: "MyButton.vue",
  component: MyButton,
  argTypes: {
    // "id" Props에 대한 Docs 정의
    id: {
      // 설명
      description: "HTML id속성",
      // Control 기능 설정
      control: "number",
      // "id" Props의 타입에 대한 Docs 작성
      table: {
        type: {
          summary: "number",
          detail: "자연수만 입력해 주세요",
        },
      },
    },

    label: {
      description: "``<slot>``에 사용할 라벨",
      control: "text",
      table: {
        type: {
          summary: "string",
          detail: "버튼 라벨 입니다",
        },
      },
    },

    backgroundColor: {
      description: "버튼 배경색",
      control: "color",
    },

    disabled: {
      description: "버튼 사용불가 상태값",
      control: "boolean",
      table: {
        type: {
          summary: "버튼 사용불가 상태값",
          detail: "true: 사용불가 상태\nfalse: 사용가능 상태",
        },
      },
    },

    myClickEvent: {
      description: "클릭 Event",
      table: {
        type: {
          summary: "@returns { void }",
        },
      },
    },
  },
} as Meta;

// MyButton.vue 의 Template 객체
const Template: Story = (args, { argTypes }) => ({
  // MyButton.vue 의 모든 Props 지정
  props: Object.keys(argTypes),
  // 사용할 Component 등록
  components: { MyButton },
  template: `
    <MyButton :id="id" :disabled="disabled" :backgroundColor="backgroundColor" @myClickEvent="storyCallback">
      {{ label }}
    </MyButton>
  `,
});

// 기본 상태의 MyButton 이야기
export const Default = Template.bind({});
Default.args = {
  ...actionsData,
  id: 1,
  label: "버튼명",
};
