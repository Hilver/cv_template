<template>
<div>
	<DataRow
		v-for="(achievement, index) in achievementData"
		:key="index"
		:text="achievement"
		:textClass="['body-2']"
		:icon="'stars'"
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