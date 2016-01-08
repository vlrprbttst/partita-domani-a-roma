module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* ====================================================================================================================================================
         * ====================================================================================================================================================

         Watch

         ====================================================================================================================================================
         ====================================================================================================================================================
         *
         */

        watch: {
            content: {
                files: ['*.html','views/*.html'],
                tasks: ['newer:htmlmin']
            },
            images: {
                files: ['images/**/*.{png,jpg,gif,svg}'],
                tasks: ['newer:imagemin']
            }, // watch images added to src

            deleting: {
                files: ['images/**/*.{png,jpg,gif,svg}'],
                tasks: ['delete_sync']
            }, // end of delete sync

            scripts: {
                files: ['js/libs/*.js', 'js/custom/**/*.js'],
                /*tasks: ['concat', 'uglify'],*/
                tasks: ['copy:build'],
                options: {
                    spawn: false,
                }
            }, //end of watch scripts

            css: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false,
                }
            }, //end of sass watch

            grunt: {
                files: ['gruntfile.js']
            }
        }, //end of watch

        /* ====================================================================================================================================================
         * ====================================================================================================================================================

         Tasks

         ====================================================================================================================================================
         ====================================================================================================================================================
         *
         */

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: './', // Src matches are relative to this path.
                    src: ['*.html'], // Actual pattern(s) to match.
                    dest: '_site', // Destination path prefix.
                    ext: '.html', // Dest filepaths will have this extension.
                    extDot: 'first' // Extensions in filenames begin after the first dot
                }, {
                    expand: true, // Enable dynamic expansion.
                    cwd: './views/', // Src matches are relative to this path.
                    src: ['*.html'], // Actual pattern(s) to match.
                    dest: '_site/views', // Destination path prefix.
                    ext: '.html', // Dest filepaths will have this extension.
                    extDot: 'first' // Extensions in filenames begin after the first dot
                }]
            }
        },

        delete_sync: {
            dist: {
                cwd: '_site/images',
                src: ['**'],
                syncWith: 'images'
            }
        }, // end of delete sync

        imagemin: {
            dynamic: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'images/', // source images (not compressed)
                    src: ['**/*.{png,jpg,gif,svg}'], // Actual patterns to match
                    dest: '_site/images/' // Destination of compressed files
                }]
            }
        }, //end imagemin

        sass: {
            dist: {
                options: {
                    style: 'nested', //no need for config.rb
                    compass: 'true'
                },
                files: {
                    '_site/css/main.css': 'sass/main.scss'
                }
            }
        }, //end of sass

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 version, IE 9'
                    }), // add vendor prefixes. for more: https://github.com/ai/browserslist
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: '_site/css/main.css'
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: ['_site/**']
                },
                options: {
                    server: {
                        baseDir: "_site/",
                        middleware: [
                            function(req, res, next) {
                                var fs = require("fs"),
                                    path = require("path"),
                                    url = require("url");
                                var folder = "_site/";
                                var fileName = url.parse(req.url);
                                fileName = fileName.href.split(fileName.search).join("");
                                var fileExists = fs.existsSync(folder + fileName);
                                if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
                                    req.url = "/index.html";
                                }
                                return next();
                            }
                        ]
                    },
                    ghostMode: false, // don't sync scrolling across devices
                    watchTask: true
                }
            }
        },

        // r.js compile config
        requirejs: {
            dist: {
                options: {
                    dir: '_site/js/',
                    modules: [{
                        name: 'main'
                    }],
                    preserveLicenseComments: false, // remove all comments
                    removeCombined: true,
                    baseUrl: 'js/custom/',
                    mainConfigFile: 'js/custom/main.js',
                    optimize: 'uglify2',
                    uglify2: {
                        mangle: false
                    }
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.',
                    dest: '_site/js/',
                    src: ['bower_components/requirejs/require.js'],
                    flatten: true
                },
                {
                    expand: true,
                    cwd: '.',
                    dest: '_site/',
                    src: ['.htaccess'],
                    flatten: true
                }]
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '.',
                    dest: '_site/js/',
                    src: ['bower_components/requirejs/require.js'],
                    flatten: true
                }, {
                    expand: true,
                    cwd: './js/custom/',
                    dest: '_site/js/',
                    src: ['**/*.js'],
                    flatten: false
                }, {
                    expand: true,
                    cwd: './bower_components/',
                    dest: '_site/bower_components/',
                    src: ['**/*.js'],
                    flatten: false
                }]
            },
        },

        ftpush: {
            build: {
                auth: {
                    host: 'ftp.valeriopierbattista.com',
                    port: 21,
                    authKey: 'key1' //ftp login is in the .ftppass file, remember adding it to the exclusions in .gitignore if you are publishing the repo on github
                },
                src: '_site', //root
                dest: '/www/projects/partita-domani-a-roma', //destination folder
                exclusions: ['**/.DS_Store'],
                // keep : ['blog','cv','projects'], // SUPER IMPORTANT! check what resources should STAY on the server, for example your wordpress installation or other subfolders you use for other projects. else they'll get wiped out
                simple: false,
                useList: false
            }
        },

        clean: ["_site"]
    });


    // default for development: type grunt
    grunt.registerTask('default', ['clean', 'htmlmin', 'sass', 'postcss', 'imagemin', 'copy:build', 'browserSync', 'watch']);
    grunt.registerTask('dist', ['clean', 'htmlmin', 'sass', 'postcss', 'imagemin', "requirejs:dist", "copy:dist", "browserSync", "watch"]);
    grunt.registerTask('ftp', ['clean', 'htmlmin', 'sass', 'postcss', 'imagemin', "requirejs:dist", "copy:dist", 'ftpush']);
};
