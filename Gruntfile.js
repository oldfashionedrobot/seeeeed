module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'app/js/src/**/*.js',
        dest: 'app/js/build/**/*.min.js'
      }
    },
    sass: {
      dist: {
        files: {
          'app/css/build/**/*.css': 'app/css/src/**/*.scss'
        }
      }
    },
    wiredep: {
      task: {
        src: ['app/views/*.html']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-wiredep');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'wiredep']);
};