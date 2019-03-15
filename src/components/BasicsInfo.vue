<template>
	<v-layout align-center justify-center row wrap>
		<v-flex md6 xs12 ref="profileCard">
			<v-card pa-1>
				<v-container>
					<ProfileDataRow
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
					<v-icon x-large left>{{ aboutMe.icon }}</v-icon>
					<span class="headline font-weight-bold">About me:</span>
				</v-card-title>
				<v-card-text class="headline">
					{{ aboutMe.msg }}
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import ProfileDataRow from './ProfileDataRow.vue'
import {profileData, aboutMe} from '../data/profile-data.js'


export default {
	name: 'BasicsInfo',
	components: {
		ProfileDataRow
	},
	data() {
		return {
			profileData,
			aboutMe,
			profileCardHeight: ''
		}
	},
	methods: {
		getHeight() {
			// A little trick to align the height of about-me component
			const heightString = this.$refs.profileCard.clientHeight + 'px'
			this.profileCardHeight = 'height:' + heightString
		}
	},
	mounted() {
		this.getHeight()
	}
}
</script>
