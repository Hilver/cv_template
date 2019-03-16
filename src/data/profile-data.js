export const profileData = {
	nameSurname: {
		avatar: process.env.VUE_APP_AVATAR_LINK,
		text: process.env.VUE_APP_NAME,
		flex: '3'
	},
	phoneNumber: {
		icon: 'fa-phone',
		text: process.env.VUE_APP_PHONE,
		underline: true
	},
	emailAdress: {
		icon: 'fa-envelope',
		text: process.env.VUE_APP_EMAIL,
		underline: true
	},
	residence: {
		icon: 'fa-map-marker-alt',
		text: process.env.VUE_APP_ADDRESS,
		underline: true
	}
}

export const aboutMe = {
	icon: 'fa-user-edit',
	msg: process.env.VUE_APP_ABOUT_ME
}

