const profileData = {
	nameSurname: {
		avatar: process.env.VUE_APP_AVATAR_LINK,
		text: process.env.VUE_APP_NAME,
		flex: '3'
	},
	phoneNumber: {
		icon: 'phone',
		text: process.env.VUE_APP_PHONE,
		underline: true
	},
	emailAdress: {
		icon: 'mail',
		text: process.env.VUE_APP_EMAIL,
		underline: true
	},
	residence: {
		icon: 'place',
		text: process.env.VUE_APP_ADDRESS,
		underline: true
	}
}

export default profileData
