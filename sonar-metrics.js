const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://sonar.siigo.com/',
    options: {
      'sonar.sources': 'src',
      'sonar.inclusions': 'src/**, test/**', // Entry point of your code
      'sonar.exclusions':
        'node_modules/**, dist/**, src/coverage/lcov-report/**, src/**/*module.ts, src/**/domain/**, src/**/*spec*, src/main.ts, src/main.single-spa.ts, src/app/app.component.ts, src/test.ts, src/single-spa/single-spa-props.ts',
      token: '1628136f0a9acd973581c49457302e4d9f373951',
      'sonar.typescript.lcov.reportPaths': 'coverage/report-lcov/lcov.info',
      'sonar.login': '1628136f0a9acd973581c49457302e4d9f373951',
    },
  },
  () => {}
);