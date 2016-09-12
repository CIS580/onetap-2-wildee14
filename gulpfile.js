// including plugins
var gulp = require('gulp')
, babel = require("gulp-babel");

// Compile the source file to es6 using Babel
gulp.task('default', function () {
    gulp.src('./src/onetap.js')
        .pipe(babel())
    .pipe(gulp.dest('./onetap.js'));
});
