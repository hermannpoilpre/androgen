/**
 * Compile Jade files.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-jade
 *
 */
module.exports = function(grunt) {

  grunt.config.set('jade', {

    dev: {
      options: {
        data: {
          debug: false
        }
      },
      files: [{
        expand: true,
        cwd: 'assets',
        src: '**/*.jade',
        dest: '.tmp/public',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

};

