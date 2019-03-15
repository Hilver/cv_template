<template>
	<v-app>
		<v-container>
			<v-layout row wrap align-center justify-center>
				<v-flex xs12 md8>
					<BasicsInfo />
					<ExperienceSection />
				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
import BasicsInfo from './components/BasicsInfo'
import ExperienceSection from './components/ExperienceSection'

export default {
  name: 'App',
  components: {
		BasicsInfo,
		ExperienceSection
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped lang="sass">

.schema
	max-width: 1024px
	display: flex
	justify-content: center
	align-items: center

</style>
