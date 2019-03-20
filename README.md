# :point_right: Fancy Vue CV template :heartbeat:
This project was created for those people who want to make a beautfiful and effective CV in an fast and simple way.
![CV example](https://i.ibb.co/KWJx0JF/example.png)

Just look at this elegant design and imagine how your profile data would look like on this!
If you want to not have time to write off to your potential employers, create this beautiful CV and start sending it as soon as possible.

## Getting started
To get started, open console and type:

```bash
$ git clone https://github.com/Hilver/cv_template.git
$ cd cv_template
$ npm install
```
To run project:

```
$ npm run serve
```

## Template setup
This project consists of 5 particular sections:
+ Profile
+ Experience
+ Achievement
+ Passion
+ Footer

You can edit each of this section in `src/data` project folder.

### `profile-data.js`
Enter your profile data, such as profile photo, name and surname, contact details and short info about yourself.

#### <a name="profileData">profileData</a>

#### `avatar`
##### Type: `link`
##### Default: `''`
Link to your profile photo.

#### `flex`
##### Type: `Number`
##### Default: `1`
Size of the left part of profile data row. You can set value from *1-12*, where *1* is the smallest.


#### `icon`
##### Type: `string`
##### Default: `''`
Instead of avatar you can set here icon of a given section. Use **_font awesome icons_**, which you can find [here.](https://fontawesome.com/icons?d=gallery)

#### `text`
##### Type: `string`
##### Default `''`
Data for each row section.

#### `textClass`
##### Type: `string`
##### Default: `display-2`
Here you can set class for a given section. Use **_Vuetify typography_**, which you can find [here.](https://vuetifyjs.com/en/framework/typography)

#### `underline`
##### Type: `boolean`
##### Default: `false`
Show or not underline under a given section.

####  aboutMe
#### `icon`
##### Type: `string`
##### Default: `fa-user-edit`
Icon of **About me** section.

#### `msg`
##### Type: `string`
##### Default: `''`
Write some short info about yourself.

#### `textClass`
##### Type: `string`
##### Default: `headline`
Set class for about me information.

### `experience-data.js`
Enter informations about your experience.

#### `date`
##### Type: `String`
##### Default: `''`
The period of working time at a given employer.

#### `duties`
##### Type: `array of strings`
##### Default: `['']`
Self explanatory.

#### `icon`
##### Type: `string`
##### Default: `''`
Icon of job title which is based in the middle of section.

#### `title`
##### Type: `String`
##### Default: `''`
Title of a given place section. Recommended for job position or the company name.

#### `skills`
##### Type: `array of objects`
##### Default: `[{}]`
Enter stack data that you used at work. This will create a chip at the bottom of section, which is based on two component data:
```object
{
	stack: String,
	icon: URL
}
```

#### `stack`
##### Type: `boolean`
##### Default: `false`
Whether your job required some special skills.

#### `summary`
##### Type: `String`
##### Default: `''`
Summary of a given place section. Recommended for job position or the company name.


### `achievement-data.js`
Enter informations about your achievements.
<br>*There is the same schema as in [profileData](#profileData).*

### `passion-data.js`
Enter informations about your interests, likes, dislikes, etc.
<br>*There is the same schema as in [profileData](#profileData).*

### `footer-data.js`
Enter footer text.

#### `text`
##### Type: `string`
##### Default: `''`
Self explanatory.

#### `textClass`
##### Default: `body-1`
Self explanatory.

## Author

<img src="https://avatars1.githubusercontent.com/u/12917005" width="100"> |
------ |
[Hilver](https://github.com/Hilver) |

*If you have any questions do not hesitate to contact me.*

## License

MIT
