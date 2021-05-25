# ``Storybook`` & ``Vue`` 연동

[![Storybook 공식 홈페이지](./readmeAssets/08-01-Vue%20프로젝트%20생성-00.jpg)](https://storybook.js.org/)

## ``Storybook``을 접하게 된 계기

``Storybook``은 ``CDD (Component Driven Development)`` 방식의 UI 개발 방법론 입니다.

각 컴포넌트를 ``Module``로 개발하고, 각 ``Module``을 조합하여 ``복합 모듈``을 만드는 방식을 말합니다.

<br/>

``CDD``에 대한 지식이 없는 상태에서 ``Vue``를 사용하여 ``FontEnd`` 프로젝트를 마무리한 후, 각 컴포넌트의 문서화나 관리가 상당히 어렵고, 기존의 컴포넌트를 확장하는데 설계에 대한 방향이 잡히지 않았습니다.

이러한 문제점을 느끼게 되어 ``CDD``에 대해 공부하던 중, ``Storybook`` 이라는 프레임워크를 접하게 되어 앞으로의 개발 방법론에 깊이를 더할 수 있는 계기가 되었습니다.

<br/>

``Storybook``은 하나의 컴포넌트를 하나의 ``이야기``로써 만듭니다.

만들어진 이야기들은 조합하여 ``큰 이야기 (복합모듈)``가 되고, 만들어진 ``큰 이야기 (복합모듈)``로써 새로운 ``문서화``를 할 수 있습니다.



<br/><hr/><br/>



## ``Storybook`` 설치에 대해..

``Storybook``은 기존의 프로젝트와 독립적으로 동작하는 프레임 워크지만, 대상 프로젝트 위에 설치하게 됩니다.

이유는 기존 프로젝트의 컴포넌트들을 ``Storybook``에서 가져와 해당 스펙을 문서화 하거나 테스트를 하기 떄문입니다.

따라서 ``Storybook`` 프레임워크를 사용하는데 다음과 같은 순서를 가집니다.

1. ``Vue`` 프로젝트 생성
2. ``Vue`` 프로젝트에 ``Storybook`` 프레임워크 설치
3. ``Vue 컴포넌트`` 생성
4. ``Storybook`` 에 ``Vue 컴포넌트`` 등록 - ``Story 생성``
5. ``Storybook`` 빌드 (로컬 서버 실행 또는 빌드)

<br/>

그럼 위의 단계를 하나씩 진행해 보겠습니다.



<br/><hr/><br/>



## 1. ``Vue`` 프로젝트 생성

생성할 ``Vue`` 프로젝트 환경은 다음과 같이 만들겠습니다.

* Vue 2.x
* Vue Router
* Vuex
* Babel
* Typescript
* SCSS (Dart Sass)
* ESLint / Prettier
* Jest

또한 Vue 컴포넌트는 ``Class Type`` 으로 작성하겠습니다.

<br/>

먼저 ``Vue CLI``를 사용하여 프로젝트를 생성 하겠습니다.

``Vue CLI`` 명령은 아래 단계로 생성 합니다.

1. ``Vue CLI`` 프로젝트 생성

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-01.jpg" alt="Vue 프로젝트 생성 01" width="700px"><br/>

2. ``Manual`` 로 생성하기

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-02.jpg" alt="Vue 프로젝트 생성 02" width="700px"><br/>

3. 프로젝트 구성 선택

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-03.jpg" alt="Vue 프로젝트 생성 03" width="700px"><br/>

4. ``Vue 2.x`` 버전으로 생성

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-04.jpg" alt="Vue 프로젝트 생성 04" width="700px"><br/>

5. ``Class Type`` 컴포넌트 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-05.jpg" alt="Vue 프로젝트 생성 05" width="700px"><br/>

6. ``Babel & Typescript`` 함께 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-06.jpg" alt="Vue 프로젝트 생성 06" width="700px"><br/>

7. ``Vue Router History Mode`` 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-07.jpg" alt="Vue 프로젝트 생성 07" width="700px"><br/>

8. ``Dart Sass`` 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-08.jpg" alt="Vue 프로젝트 생성 08" width="700px"><br/>

9. ``ESLint + Prettier`` 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-09.jpg" alt="Vue 프로젝트 생성 09" width="700px"><br/>

10. 저장 시 ``Lint 적용``

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-10.jpg" alt="Vue 프로젝트 생성 10" width="700px"><br/>

11. ``Jest`` 테스트 프레임워크 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-11.jpg" alt="Vue 프로젝트 생성 11" width="700px"><br/>

12. 전용 설정파일 사용

    <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-12.jpg" alt="Vue 프로젝트 생성 12" width="700px"><br/>

<br/>

생성된 프로젝트에서 ``.eslintrc.js`` 를 확인해 봅니다.

만약 ``plugins`` 와 ``parseOptions`` 에 ``@typescript-eslint`` 가 설정되지 않았다면, 추가해 줍니다.

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
```

<br/>

터미널에서 ``lint 명령어``를 실행하여 Vue 프로젝트를 정리해 줍니다.

```bash
$ npm run lint
```

<br/>

생성된 Vue 프로젝트가 정상적으로 생성 되었는지, 로컬 서버를 실행해 봅니다.

```bash
$ npm run serve
```

Vue 프로젝트가 정상적으로 설치 되었다면, 다음과 같이 로컬서버가 실행 됩니다.

  <img src="./readmeAssets/08-01-Vue%20프로젝트%20생성-13.jpg" alt="Vue 프로젝트 생성 13" width="700px"><br/>

<br/>

이것으로 ``Vue 프로젝트 생성`` 이 완료 되었습니다.



<br/><hr/><br/>



## 2. ``Vue`` 프로젝트에 ``Storybook`` 프레임워크 설치

``Storybook`` 프레임워크를 설치하는 것은 아주 간단합니다.

터미널에 다음 명령을 실행하면, 관련 라이브러리가 모두 설치 됩니다.

다만, ``SCSS``를 사용할 경우에는 ``@storybook/preset-scss`` 페키지 설치가 필요 합니다.

<br/>

먼저 터미널을 통해서 ``Storybook`` 프레임워크를 설치하겠습니다.

```bash
$ npx sb init
```

<img src="./readmeAssets/08-02-Storybook%20설치-01.jpg" alt="Storybook 설치 01" width="700px"><br/>

(``Storybook``은 자동으로 기반 프레임워크를 감지하고 (Vue), 해당되는 라이브러리와 설정을 해줍니다)

<br/>

설치가 완료되면, 터미널을 사용하여 ``Storybook`` 프레임워크를 로컬 서버로 실행 합니다.

```bash
$ npm run storybook
```

<img src="./readmeAssets/08-02-Storybook%20설치-02.jpg" alt="Storybook 설치 02" width="700px"><br/>

정상적으로 설치가 되었다면, 샘플 컴포넌트가 등록된 ``Storybook``을 확인할 수 있습니다.

<img src="./readmeAssets/08-02-Storybook%20설치-03.jpg" alt="Storybook 설치 03" width="700px"><br/>

<img src="./readmeAssets/08-02-Storybook%20설치-04.jpg" alt="Storybook 설치 04" width="700px"><br/>



<br/><hr/><br/>



## 3. ``Vue 컴포넌트`` 생성

``Storybook``에 등록할 간단한 버튼 컴포넌트를 만들어 보겠습니다.

``src/components/myButton`` 경로에 ``MyButton.vue`` 컴포넌트를 작성해 보겠습니다.

<img src="./readmeAssets/08-03-Vue컴포넌트%20생성-01.jpg" alt="Vue 컴포넌트 생성 01" width="300px"><br/>

```html
<!-- @/components/myButton/MyButton.vue -->
<template>
  <button
    :id="id"
    class="myButton"
    :style="getStyle"
    :disabled="disabled"
    @click="onMyClick"
  >
    <slot>버튼</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop({ required: true, default: -9999 })
  id!: number;

  @Prop({ required: false, default: "#e25c00" })
  backgroundColor!: string;

  get getStyle(): {
    backgroundColor: string;
  } {
    return {
      backgroundColor: this.backgroundColor,
    };
  }

  @Prop({ required: false, default: false })
  disabled!: boolean;

  onMyClick(): void {
    this.$emit("myClickEvent");
  }
}
</script>

<style lang="scss">
.myButton {
  width: 300px;
  max-width: 100%;

  padding: 15px 10px;

  color: #fff;
  font-size: 1.125rem;
  font-weight: 900;

  border-radius: 5px;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  transition: all 0.25s;

  &:hover {
    color: #e25c00;

    border-color: currentColor;
    background-color: #fff !important;
  }

  &:disabled {
    pointer-events: none;
    background-color: #333 !important;
  }
}
</style>
```

<br/>

<img src="./readmeAssets/08-03-Vue컴포넌트%20생성-02.jpg" alt="Vue 컴포넌트 생성 02" width="300px"><br/>



<br/><hr/><br/>



## 4. ``Storybook`` 에 ``Vue 컴포넌트`` 등록 - ``Story 생성``

현재 ``MyButton.vue`` 컴포넌트의 ``<style>``은 ``SCSS``를 사용하였습니다.

``Storybook``의 기본 설정은 ``CSS`` 이므로, ``@storybook/preset-scss`` 를 설치해야 컴파일 할 수 있습니다.

터미널을 사용하여 ``@storybook/preset-scss`` 페키지를 설치해 보겠습니다.

```bash
$ npm i -D @storybook/preset-scss
```

<img src="./readmeAssets/08-04-Story%20생성-01.jpg" alt="Story 생성 01" width="700px"><br/>

설치한 ``@storybook/preset-scss`` 페키지는 ``Storybook`` 의 ``main.js`` 파일에 ``addons`` 로 등록해 주어야 합니다.

<img src="./readmeAssets/08-04-Story%20생성-02.jpg" alt="Story 생성 02" width="300px"><br/>

```javascript
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",

    // 추가한 페키지
    "@storybook/preset-scss"
  ]
}
```

<br/>

그리고, ``Storybook``의 ``Event`` 처리는 ``on``으로 시작하는 경우에만 동작하도록 되어있는데, 자유로운 커스텀을 위해, 해당 조건은 해제 하겠습니다.

``Storybook``의 ``preview.js`` 파일에서 ``actions`` 속성을 주석처리 합니다.

```javascript
export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
```

<br/>

이제 ``Storybook`` 에 컴포넌트를 등록할 준비 되었습니다.

``MyButton.vue`` 를 작성한 폴더에 ``MyButton.stories.ts`` 파일을 생성 합니다.

<img src="./readmeAssets/08-04-Story%20생성-03.jpg" alt="Story 생성 03" width="300px"><br/>

<br/>

``MyButton.stories.ts``를 작성하기 전, 작성할 코드 구성에 대해 알아보겠습니다.

``*.stories.ts`` 파일은 ``Storybook``에서 컴포넌트 하나에 대한 이야기들을 작성하는 공간 입니다.

이야기란 다음과 같은 경우를 말합니다.

1. 컴포넌트의 ``기본`` 상태
2. 컴포넌트의 특정 ``Props`` 마다 가지는 스타일 및 이벤트에 대한 상태

즉, 하나의 컴포넌트가 취할 수 있는 상태값에 따라 변하는 컴포넌트의 상태값과 외관을 한눈에 볼 수 있도록 합니다.

그러므로, 우리가 작성해야할 이야기는 다음과 같습니다.

1. 컴포넌트 자체에 대한 이야기
     * ``default export {} as Meta``: 컴포넌트 몇, Props, Event 등
     * ``actionsData``: Event에 의해 호출할 ``Callback 함수들``
2. 컴포넌트의 상태별 이야기
     * 각 상태값이 설정된 ``Story`` 타입 객체

<br/>

아래의 코드는 ``MyButton.stories.ts`` 입니다.

자세한 설명은 주석을 참조해 주세요.

```typescript
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
```

``MyButton``에 대한 이야기가 작성 되었습니다.

이제 ``Storybook``의 로컬 서버를 실행하면 다음과 같은 결과를 확인할 수 있습니다.



<br/><hr/><br/>



## 5. ``Storybook`` 빌드 (로컬 서버 실행 또는 빌드)

터미널을 사용하여 ``Storybook``을 실행하면, 지금까지 작성한 컴포넌트에 대한 문서와 함께 컴포넌트 상태까지 확인할 수 있습니다.

(각 버튼을 변경하면, 즉시 반영되어 컴포넌트의 상태를 확인할 수 있습니다)

```bash
$ npm run storybook
```

<img src="./readmeAssets/08-05-Story%20결과-01.gif" alt="Storybook 결과" width="700px"><br/>