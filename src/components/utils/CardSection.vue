<template>
	<v-layout>
		<v-flex xs12 pt-2>
			<v-card>
				<v-card-title>
					<v-icon left large>{{ icon }}</v-icon>
					<span class="headline font-weight-bold">{{ title }}</span>
				</v-card-title>
				<v-card-text>
					<slot></slot>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>

export default {
	props: {
		icon: {
			type: String,
			default: null
		},
		title: {
			type: String,
			default: ''
		}
	}

}
</script>