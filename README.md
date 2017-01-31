o-header--theme-ic[![Circle CI](https://circleci.com/gh/Financial-Times/o-header--theme-ic/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/o-header--theme-ic/tree/master)
=================

This component is a theme for o-header. It includes o-header and then the required CSS to give the Investors Chronicle branding.


_A table of contents to help people find things_

- [Usage](#usage)
	- [Markup](#markup)
	- [JavaScript](#javascript)
	- [Sass](#sass)
- [Contributing](#contributing)
- [Contact](#contact)
- [Licence](#licence)

## Usage
This component includes on o-header as a dependency, so you only need to explicitly include component in your project.

### Markup

There is a lot of markup for this component, an illustrative version of it can be seen in the [demos](http://registry.origami.com/components/o-header--theme-ic).

### JavaScript
No code will run automatically unless you are using the Build Service.
You must either construct an `oHeader` object or fire the `o.DOMContentLoaded` event, which oComponent listens for.


#### Constructing an oHeader object

```js
const oHeader = require('o-header');

oHeader.init();
```

#### Firing an oDomContentLoaded event

```js
document.addEventListener('DOMContentLoaded', function() {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});
```

### Sass

As with all Origami components, o-header--theme-ic has a [silent mode](http://origami.ft.com/docs/syntax/scss/#silent-styles). To use its compiled CSS (rather than using its mixins with your own Sass) set `$o-o-header--theme-ic-is-silent : false;` in your Sass after you've imported the o-header--theme-ic Sass.

## Contributing
Please [let the Origami team know](#contact) if you'd like push access to this repository.
Building Origami components locally all works in the same way:

1. Clone this repository
1. Install the Origami Build Tools globally: `$ npm install -g origami-build-tools`
1. On the command line, in the o-header--theme-ic directory run:
	1. `$ obt install` // this will install all of this component's dependencies including bower and npm if you don't have them
	1. You may need to add a .bowerrc file to tell bower where to look for Origami dependencies. OBT will let you know if you need to do this and how to do it.
	1. `$ obt build` // this will build all of this component's dependencies
	1. `$ obt demo --runServer --watch` // this will run all of this projects demos, which you'll now be able to see in a browser
1. You can now work on the Sass, JS, or demos of this project and see the results

---

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-header--theme-ic/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
