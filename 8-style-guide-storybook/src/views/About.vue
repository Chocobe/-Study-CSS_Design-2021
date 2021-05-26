<template>
  <div class="about">
    <h1 class="about__title">This is an about page</h1>

    <!-- README.md 예시 컴포넌트 -->
    <!--    <MyButton id="111"> 버튼 </MyButton>-->

    <!-- 01. Bem_Button -->
    <!-- <Bem_Button :useArrowRight="true">Bem_버튼</Bem_Button>-->

    <!-- 02. Bem_Faq -->
    <Bem_Faq></Bem_Faq>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MyButton from "@/components/myButton/MyButton.vue";
import Bem_Button from "@/components/bem/button/Bem_Button.vue";
import Bem_Faq from "@/components/bem/faq/Bem_Faq.vue";

@Component({
  components: {
    Bem_Faq,
    Bem_Button,
    MyButton,
  },
})
export default class About extends Vue {
  //
}
</script>

<style lang="scss">
.about {
  &__title {
    font-size: 1.5rem;
    font-weight: 900;

    margin-bottom: 20px;
  }
}
</style>
