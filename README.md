# Star Wars Armada Game
Play the game: [Star Wars Armada Game](https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada/app/src/StarWarsArmadaApp.html)

## Built With
* [QUnit](https://qunitjs.com/) - JavaScript unit testing.
* [Ramda](https://ramdajs.com) - A practical functional library for JavaScript programmers.
* [React](http://facebook.github.io/react/) - A JavaScript library for building user interfaces.
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
* [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable) - Immutable JS data structures which are backwards-compatible with normal Arrays and Objects.
* [star-wars-armada-data](https://github.com/jmthompson2015/star-wars-armada-data/) - An easy-to-use collection of data and images from Star Wars Armada by Fantasy Flight Games.
* [Tachyons](http://tachyons.io) - An atomic CSS library.

## Architecture
![Web Application Diagram](doc/WebApplicationDiagram.png)

#### Artifact
Contains game data implemented as constant enumerations. (e.g. ShipCard, SquadronCard, UpgradeCard, etc.)

#### State
Provides a serializable game state using Redux.

#### Model
Provides the game rules and processes.

#### View
Provides the GUI components using React.

#### App
Provides integration between the model and the view. Data changes are propagated to the view components, and user actions are transmitted to the model.

#### Accessory
Contains accessory applications.

## License
Star Wars Armada Game is released under the terms of the [MIT License](https://github.com/jmthompson2015/star-wars-armada/blob/master/LICENSE).

***
Star Wars, Star Wars Armada and all related properties, images and text are owned by Fantasy Flight Games, Lucasfilm Ltd., and/or Disney.
