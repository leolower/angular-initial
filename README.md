# angular-initial

Simple AngularJS seed project to bootstrap your angular project using:
* Gulp
* Browser Sync
* Bower
* Less


## Directory Structure
```
angular-initial/
  |- src/
  |  |- app/
  |  |  |- common/
  |  |  |  |- styles/
  |  |  |  |  |- something.less
  |  |  |  |- partials/
  |  |  |  |  |- index.html
  |  |  |  |- controllers.js
  |  |  |  |- common.spec.js
  |  |  |  |- modules.js
  |  |  |  `- services.js
  |  |  |- module*/
  |  |  |  |- styles/
  |  |  |  |  |- something.less
  |  |  |  |- partials/
  |  |  |  |  |- index.html
  |  |  |  |- controllers.js
  |  |  |  |- modules.js
  |  |  |  |- module1.specs.js
  |  |  |  `- services.js
  |  |- img/
  |  `- index.html
  |- vendor/
  |- .bowerrc
  |- bower.json
  |- gulp.conf.json
  |- gulpfile.js
  `- package.json
```

## Usage
```
npm install
bower install

gulp help
```

## Testing
Angular initial uses Karma + Jasmine to test its modules.
Running
```
gulp
```
will launch the dev server and karma in watch mode.

If you want to run the tests only once execute:
```
gulp test
```
