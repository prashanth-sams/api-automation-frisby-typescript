module.exports = function(grunt) {
  grunt.initConfig({
    clean : {
      output: './build/*'
    },
    ts: {
      default : {
        tsconfig: './tsconfig.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask('default', ['clean', 'ts']);
};
