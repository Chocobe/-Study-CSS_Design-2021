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
