<template>
	<v-layout row wrap>
		<v-flex xs12>
		<card-section title="Doświadczenie zawodowe" icon="work">
			<Experience />
		</card-section>
		</v-flex>
		<v-flex xs6>
		<card-section title="Osiągnięcia" icon="stars">
			<Achievement />
		</card-section>
		</v-flex>
		<v-flex xs6>
			YOLO
		</v-flex>
	</v-layout>
</template>
<script>
import CardSection from './utils/CardSection.vue'
import Experience from './Sections/ExperienceSection'
import Achievement from './Sections/AchievementSection'

export default {
	components: {
		CardSection,
		Experience,
		Achievement
	}

}
</script>