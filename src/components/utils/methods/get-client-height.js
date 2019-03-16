// As input get this.$ref.refName
// As output returns string with height property
export const getClientHeight = ref => {
	const heightString = ref.$el.clientHeight + 'px'
	return 'height:' + heightString
}
