<template>
	<v-layout row wrap>
		<v-flex xs12>
		<card-section title="Experience" icon="fa-wrench">
			<Experience />
		</card-section>
		</v-flex>
		<v-flex xs6 pr-1>
		<card-section title="Achievements" icon="fa-thumbs-up" ref="achievementCard">
			<Achievement />
		</card-section>
		</v-flex>
		<v-flex xs6 pl-1>
			<card-section title="Interests" icon="fa-heartbeat" :style="achievementCardHeight">
				<Passion />
			</card-section>
		</v-flex>
	</v-layout>
</template>
<script>
import CardSection from './utils/CardSection.vue'
import Experience from './Sections/ExperienceSection'
import Achievement from './Sections/AchievementSection'
import Passion from './Sections/PassionSection'
import {getClientHeight} from './utils//methods//get-client-height'

export default {
	components: {
		CardSection,
		Experience,
		Achievement,
		Passion
	},
	data() {
		return {
			achievementCardHeight: ''
		}
	},
	mounted() {
		this.achievementCardHeight = getClientHeight(this.$refs.achievementCard)
	}

}
</script>