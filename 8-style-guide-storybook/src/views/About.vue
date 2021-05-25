<template>
  <div class="about">
    <h1>This is an about page</h1>

    <MyButton id="111"> 버튼 </MyButton>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MyButton from "@/components/myButton/MyButton.vue";

@Component({
  components: {
    MyButton,
  },
})
export default class About extends Vue {
  //
}
</script>
