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
	msg: 'Gdybym miał zabrać trzy rzeczy na bezludną wyspę wybrałbym piłkę do siatkówki, pompkę i jacht Delhpia 47 z pełnym wyposażeniem.<br>Tak. Informacje o tym jachcie wyszukałem przed chwilą w internecie. Jestem uzależniony od zdobywania informacji. Lubię testować, sprawdzać, analizować i zadawać pytania.' +
		' W pracy czuję się dobrze wśród pasjonatów, dużej ilości kawy i przy dwóch monitorach.<br>Po pracy chętnie zagram w siatkówkę, szachy, porozmawiam o obecnej sytuacji na świecie lub poczytam randomową dokumentację :)',
	textClass: 'subheading'
}

