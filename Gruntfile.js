// eslint-disable-next-line no-undef
module.exports = function (grunt) {
  grunt.initConfig({
    dir: {
      src: ".",
      public: "public",
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
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("default", ["copy"]);
};
