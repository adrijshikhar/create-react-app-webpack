// eslint-disable-next-line no-undef
module.exports = function (grunt) {
  grunt.initConfig({
    dir: {
      src: ".",
      public: "public",
    },
    watch: {
      scripts: {
        files: "*",
        tasks: ["copy:publish"],
        options: {
          cwd: "<%= dir.src %>/template/",
          debounceDelay: 250,
          interval: 500,
        },
      },
    },
    copy: {
      publish: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "<%= dir.src %>",
            dest: "<%= dir.public %>",
            src: ["README.md", "LICENSE", "CHANGELOG.md", "template/**/*"],
          },
        ],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("build", ["copy"]);
  grunt.registerTask("default", ["watch"]);
};
