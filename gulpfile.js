const gulp = require("gulp");
const prettier = require("gulp-prettier");

// Task
function percantikKode() {
  return gulp.src(["./**/*", "!node_modules/**/*"]).pipe(prettier()).pipe(gulp.dest("."));
}

exports.default = percantikKode;
