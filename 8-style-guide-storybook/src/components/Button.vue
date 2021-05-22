<template>
	<button :id="id" class="btn" @click="onClick">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class Button extends Vue {
	@Prop({ required: true })
	id!: string;

	@Emit("click")
	onClick(): void {
		return;
	}
}
</script>

<style lang="scss">
.btn {
	width: 300px;
	max-width: 100%;

	padding: 20px 10px;

	color: #fff;
	font-size: 1.125rem;
	font-weight: 900;

	background-color: #e25c00;
}
</style>
