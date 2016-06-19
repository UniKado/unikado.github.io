'use strict';

module.exports = function (grunt) {
   // load all grunt tasks
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-copy');

   grunt.initConfig( {

      less :
      {
         development:
         {
            options:
            {
               paths: [ "less" ]
            },
            files:
            {
               'css/uk-github-io.css' : 'less/uk-github-io.less'
            }
         }
      },

      cssmin :
      {
         build :
         {
            files :
            {
               '../css/uk-github-io.min.css' : [ 'css/uk-github-io.css' ]
            }
         }
      }//,

      /** /uglify:
      {
         options:
         {
            mangle: true,
            mangleProperties: false,
            sourceMap: true,
         },
         my_target:
         {
            files:
            {
               'dist/js/yfVehicleDd.jquery.min.js': [
                  'src/js/yfVehicleDd.jquery.js'
               ]
            }
         }
      },/**/


      /** /copy:
      {
         main:
         {
            files:
               [
                  {
                     src: [ 'dist/css/yfVehicleDd.jquery.min.css' ],
                     dest: 'example/css/yfVehicleDd.jquery.min.css'
                  },

                  {
                     src: [ 'dist/js/yfVehicleDd.jquery.min.js' ],
                     dest: 'example/js/yfVehicleDd.jquery.min.js'
                  }
               ]
         }
      }/**/

   } );

   grunt.registerTask( 'default', [ 'less', 'cssmin', 'uglify', 'copy' ] );
   grunt.registerTask( 'build-css', [ 'less', 'cssmin', 'copy' ] );
   grunt.registerTask( 'build-js', [ 'uglify', 'copy' ] );
};
