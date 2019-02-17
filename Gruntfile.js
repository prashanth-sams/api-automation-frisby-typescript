module.exports = function(grunt) {
  grunt.initConfig({
    clean : {
      output: ['./build/*', './reports/*']
    },
    ts: {
      default : {
        tsconfig: './tsconfig.json'
      }
    },
    run: {
    commands: {
      exec: 'npm test',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['clean', 'ts', 'run']);
};
