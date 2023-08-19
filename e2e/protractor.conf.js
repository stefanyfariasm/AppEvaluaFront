// protractor.conf.js


exports.config = {
  allScriptsTimeout: 110000,
  specs: [
    './src/features/*.feature'    
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  // baseUrl: 'https://frontevalua.onrender.com/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/features/test.steps.ts'],
    format: ['json:./e2e/reports/json/cucumber_report.json'],
  },
  // onPrepare() {
  //   require('ts-node').register({
  //     project: require('path').join(__dirname, './tsconfig.e2e.json')
  //   });
    //jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  // }
 };
