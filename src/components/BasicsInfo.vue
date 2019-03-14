<template> 
	<v-layout align-center justify-center row>
		<v-flex md6 ref="profileCard" >
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
		<v-flex md6 >
			<v-card  pa-1 :style="profileCardHeight">
				yolo
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import ProfileDataRow from './utils/ProfileDataRow.vue'
import profileData from '../data/profile-data.js'

export default {
  	name: 'BasicsInfo',
  	components: {
	  	ProfileDataRow
	},
  	data() {
	  	return {
			profileData,
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
