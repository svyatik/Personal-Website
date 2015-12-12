module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                    ],
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },

        watch: {
            less: {
                files: ['css/*.less'],
                tasks: ['less'],
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
