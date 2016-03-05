'use strict';

module.exports = function (grunt) {
    // Load tasks from grunt-* dependencies in package.json
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig({
        path: {
            app: 'app',
            dist: 'dist'
        },
        copy: {
            app: {
                expand: true,
                filter: 'isFile',
                cwd: '<%= path.app %>/',
                src: ['**/*.html', '**/*.jpg'],
                dest: '<%= path.dist %>/'
            }
        },
        wiredep: {
            app: {
                src: ['<%= path.dist %>/index.html']
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= path.dist %>/truthmines.css': [
                        '<%= path.app %>/styles/**/*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= path.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= path.dist %>/'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= path.dist %>/truthmines.js': [
                        '<%= path.app %>/scripts/**/*.js'
                    ]
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35728,
                hostname: 'localhost',
                base: '<%= path.dist %>'
            },
            livereload: {
                options: {
                    open: true
                }
            }
        },
        watch: {
            scripts: {
                files: '<%= path.app %>/scripts/**/*.js',
                tasks: ['uglify']
            },
            styles: {
                files: '<%= path.app %>/styles/**/*.css',
                tasks: ['cssmin']
            },
            views: {
                files: '<%= path.app %>/**/*.html',
                tasks: ['copy', 'wiredep', 'htmlmin']
            },
            livereload: {
                files: [
                    '<%= path.dist %>/*.html',
                    '<%= path.dist %>/*.js',
                    '<%= path.dist %>/*.css'
                ],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
        }
    });

    // Project tasks
    grunt.registerTask('test', [
    ]);
    grunt.registerTask('build', [
        'copy',
        'wiredep',
        'cssmin',
        'htmlmin',
        'uglify'
    ]);
    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);
    grunt.registerTask('default', [
        'test',
        'build',
        'serve'
    ]);
};
