<template>
	<div id="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<h1 class="global_h1">Vue를 사용한 CSS 설계 정리</h1>
		<h3 class="global_h3">with <span class="accent"> Storybook </span></h3>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
	//
}
</script>

<style lang="scss">
#home {
	& .accent {
		color: #ff1493;
		font-size: 1.5rem;
	}
}
</style>
