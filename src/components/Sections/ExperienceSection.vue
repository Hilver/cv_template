<template>
	<v-timeline>
		<v-timeline-item v-for="(experience, index) in experienceData" :key="Object.keys(experienceData)[index]">
			<template v-slot:icon>
				<v-icon small dark>{{ experience.icon }}</v-icon>
			</template>
			<template v-slot:opposite>
				<span class="title">{{ experience.date }}</span>
			</template>
			<v-card>
				<v-card-title class="title font-weight-bold">
					{{ experience.title }}
				</v-card-title>
				<v-card-text class="title font-weight-light">
					{{ experience.summary }}
					<ul class="pt-1">
						<li
						v-for="duty in experience.duties"
						:key="duty"
						class="py-1 body-2"
						>
						{{ duty }}
						</li>
					</ul>
				</v-card-text>
				<v-card-actions v-if="experience.stack">
					<span class="subheading font-weight-bold">Stack:</span>
					<v-chip v-for="skill in experience.skills" :key="skill.stack">
						<v-avatar left>
						<img :src="skill.icon">
						</v-avatar>
						{{ skill.stack }}
					</v-chip>
				</v-card-actions>
			</v-card>
		</v-timeline-item>
	</v-timeline>
</template>
<script>
import {experienceData} from '../../data/experience-data.js'

export default {
	name: 'ExperienceSection',
	data() {
		return {
			experienceData
		}
	}
}
</script>