<template>
  <a :href="href" class="btn" :class="{ btn_arrowRight: useArrowRight }">
    <slot></slot>
  </a>
  <!-- /.btn -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Bem_Button extends Vue {
  @Prop({ required: false, default: "#" })
  href!: string;

  @Prop({ required: false, default: false })
  useArrowRight!: boolean;
}
</script>

<style lang="scss">
@import "src/assets/css/style";

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";

@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid";

.btn {
  width: 300px;
  max-width: 100%;

  padding: 20px 10px;

  display: inline-block;

  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;

  border: 2px solid transparent;
  background-color: #e25c00;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  transition: all 0.25s;

  &:hover,
  &:focus {
    color: #e25c00;

    border-color: currentColor;
    background-color: #fff;
  }

  /* 확장형: 우측 화살표 */
  &.btn_arrowRight {
    padding-right: 2em;
    padding-left: 1.38em;

    position: relative;

    &::before {
      @extend %fa-icon;
      @extend .fas;

      content: fa-content($fa-var-arrow-right);

      position: absolute;
      top: 50%;
      right: 0.83em;
      transform: translateY(-50%);

      font-family: "Font Awesome 5 Free";
      font-weight: 900;
    }
  }
}
</style>
