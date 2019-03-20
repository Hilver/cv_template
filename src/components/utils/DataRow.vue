<template>
<div>
    <v-layout row align-center justify-start py-2>
        <v-flex v-bind="{[`xs${flex}`]: true}">
            <v-icon v-if="icon" medium>{{ icon }}</v-icon>
			<v-avatar v-else size="100px">
				<img :src="avatar">
			</v-avatar>
		</v-flex>
		<v-flex align-self-center>
			<span :class="[icon ? textClass : 'display-2']">{{ text }}</span>
		</v-flex>
    </v-layout>
	<v-divider v-if="divider"></v-divider>
</div>
</template>
<script>

export default {
    name: 'DataRow',
    props: {
		avatar: {
			type: String,
			required: false
		},
		divider: {
			type: Boolean,
			default: false
		},
		flex: {
			type: Number,
			default: 1
		},
        icon: {
            type: String,
            default: null
        },
        text: {
            type: String,
            default: ''
		},
		textClass: {
			type: Array,
			default: () => ['title']
		}
	}
}
</script>
