<template>
<div>
   <DataRow 
   v-for="(passion, index) in passionData" 
   :key="index"
   :text="passion.text"
   :icon="passion.icon"
   :textClass="passion.textClass"
   />
</div>
</template>
<script>
import DataRow from '../utils/DataRow'
import passionData from '../../data/passion-data'

export default {
    name: 'PassionSection',
    components: {
        DataRow
    },
    data() {
        return {
            passionData
        }
    }
}
</script>
