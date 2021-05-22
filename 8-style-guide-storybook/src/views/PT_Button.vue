<template>
	<div>
		<h1 class="global_h1 global_mb20">
			<span class="global_h1__accent">Button.vue</span> 테스트 페이지
			<!-- /.global_h1__accent -->
		</h1>
		<!-- /.global_h1 -->

		<Button id="id-button" @click="onClick">버튼</Button>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
	components: {
		Button,
	},
})
export default class PT_Button extends Vue {
	onClick(): void {
		console.log("버튼 이벤트 받음");
	}
}
</script>
