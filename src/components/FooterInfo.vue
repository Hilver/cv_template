<template>    
    <span 
        :class="[footerData.textClass ? footerData.textClass : 'body-1']">
        {{ footerData.text }} 
    </span>    
</template>
<script>
import footerData from '../data/footer-data'
export default {
    name: 'FooterSection',
    data() {
        return {
            footerData
        }
    }
}
</script>
<style scoped>
span {
    padding: 5px
}    
</style>
