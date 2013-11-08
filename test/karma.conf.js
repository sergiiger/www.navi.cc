module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'components/angular/angular.js',
      // 'app/lib/angular/angular-*.js',
      'components/angular-mocks/angular-mocks.js',
      'components/jquery/jquery.js',
      'components/moment/moment.js',
      // 'src/app/**/*.js',
      'test/googlemaps.js',
      'dist/js/www-navi-cc.js',
      'test/unit/ready/**/*.js'
    ],

    exclude : [
      // 'app/lib/angular/angular-loader.js',
      // 'app/lib/angular/*.min.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    // browsers : ['Chrome'],
    browsers : ['PhantomJS', 'Chrome'],


    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            // 'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
