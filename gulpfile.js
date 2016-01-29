// include gulp
var gulp = require('gulp'); 

var istanbul = require('gulp-istanbul');
// We'll use mocha in this example, but any test framework will work 
var mocha = require('gulp-mocha');
var coffee = require('gulp-coffee');

gulp.task('pre-test', function () {
  return gulp.src(['src/**/*.js'])
    // Covering files 
    .pipe(istanbul())
    // Force `require` to return covered files 
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
    return gulp.src('src/test/*.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it {reporter: 'nyan'}
        .pipe(mocha())
        .pipe(istanbul.writeReports());
        // Enforce a coverage of at least 90% 
      //  .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});


gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', function(err) {
        console.error(err);  
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('coffee-test', function () {
    return gulp.src('src/test/*.coffee', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it {reporter: 'nyan'}
        .pipe(mocha())
        .pipe(istanbul.writeReports());
        // Enforce a coverage of at least 90% 
      //  .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});