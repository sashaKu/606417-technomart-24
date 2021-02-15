"use strict";

var gulp = require("gulp");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/css/styles.css")
    // .pipe(postcss([
    //   autoprefixer()
    // ]))
    // .pipe(gulp.dest("source/css"))
    // .pipe(server.stream())
    // .pipe(csso())
    // .pipe(rename("styles.min.css"))
    // .pipe(gulp.dest("source/css"))
    // .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "./",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("css/styles.css", gulp.series("css"));
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function () {
  return gulp.src("source/index.html")
    .pipe(posthtml([
        include()
    ]))
    .pipe(gulp.dest("source"));
});
