const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!


*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
