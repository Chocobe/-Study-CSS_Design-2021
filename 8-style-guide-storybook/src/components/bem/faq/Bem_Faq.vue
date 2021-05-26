<template>
  <div class="faq">
    <h2 class="faq__title">
      {{ title }}
    </h2>
    <!-- /.faq__title -->

    <p class="faq__content">
      {{ content }}
    </p>
    <!-- /.faq__content -->

    <a :href="href" class="faq__link">
      {{ linkContent }}
    </a>
    <!-- /.faq__link -->
  </div>
  <!-- /.faq -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Bem_Faq extends Vue {
  @Prop({ required: false, default: "편하게 문의해주세요" })
  title!: string;

  @Prop({
    required: false,
    default: "제품에 관련하여 궁금한 사항은 편하게 문의해주세요",
  })
  content!: string;

  @Prop({ required: false, default: "#" })
  href!: string;

  @Prop({ required: false, default: "문의하기" })
  linkContent!: string;
}
</script>

<style lang="scss">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";

@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";

.faq {
  padding: 30px;

  text-align: center;

  border: 1px solid #e25c00;
  background-color: rgba(221, 166, 44, 0.16);

  & > *:last-child {
    margin-bottom: 0;
  }

  &__title {
    margin-top: -6px;
    margin-bottom: 30px;

    padding-bottom: 10px;

    // Storybook 스타일 Override
    display: block;

    font-size: 1.25rem;
    font-weight: 900;

    border-bottom: 1px solid #e25c00;
  }

  &__content {
    margin-bottom: 10px;
  }

  &__link {
    display: inline-block;

    padding-right: 1.35rem;
    padding-left: 0.75rem;

    position: relative;

    text-decoration: none;

    &::before {
      @extend %fa-icon;
      @extend .fas;

      content: fa-content($fa-var-arrow-circle-right);

      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
