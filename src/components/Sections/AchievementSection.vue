<template>
<div>
	<DataRow
		v-for="(achievement, index) in achievementData"
		:key="index"
		:text="achievement.text"
		:textClass="achievement.textClass"
		:icon="achievement.icon"
	/>
</div>
</template>
<script>
import achievementData from '../../data/achievement-data'
import DataRow from '../utils/DataRow'

export default {
	name: 'AchievementSection',
	components: {
		DataRow
	},
	data() {
		return {
			achievementData
		}
	}
}
</script>