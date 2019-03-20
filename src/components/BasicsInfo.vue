<template>
	<v-layout align-center justify-center row wrap>
		<v-flex md6 xs12>
			<v-card pa-1 ref="profileCard">
				<v-container>
					<DataRow
						v-for="(profile, index) in profileData"
						:key="Object.keys(profile)[index]"
						:avatar="profile.avatar"
						:divider="profile.underline"
						:flex="profile.flex"
						:icon="profile.icon"
						:text="profile.text"
					/>
				</v-container>
			</v-card>
		</v-flex>
		<v-flex md6 xs12>
			<v-card pa-1 :style="profileCardHeight">
				<v-card-title>
					<v-icon large left>{{ aboutMe.icon ? aboutMe.icon : 'fa-user-edit'}}</v-icon>
					<span class="headline font-weight-bold">About me:</span>
				</v-card-title>
				<v-card-text :class="[aboutMe.textClass ? aboutMe.textClass : 'headline']">
					<span v-html="aboutMe.msg">{{ aboutMe.msg }}</span>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import DataRow from './utils/DataRow.vue'
import {profileData, aboutMe} from '../data/profile-data.js'
import {getClientHeight} from './utils//methods/get-client-height'

export default {
	name: 'BasicsInfo',
	components: {
		DataRow
	},
	data() {
		return {
			profileData,
			aboutMe,
			profileCardHeight: ''
		}
	},
	mounted() {
		this.profileCardHeight = getClientHeight(this.$refs.profileCard)
	}
}
</script>
