import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import mochawesomeReporter from "cypress-mochawesome-reporter/plugin";
import { allureCypress } from "allure-cypress/reporter";
import dotenv from 'dotenv';

dotenv.config();
const environment = process.env.ENV;

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      mochawesomeReporter(on);
      allureCypress(on, config);

      return config;
    },
    animationDistanceThreshold: 5,
    baseUrl: null,
    chromeWebSecurity: true,
    defaultCommandTimeout: 4000,
    downloadsFolder: "cypress/downloads",
    excludeSpecPattern: "*.skipped.feature",
    execTimeout: 60000,
    fileServerFolder: "",
    fixturesFolder: "cypress/fixtures",
    includeShadowDom: false,
    modifyObstructiveCode: true,
    numTestsKeptInMemory: 50,
    pageLoadTimeout: 30000,
    port: null,
    projectId: null,
    redirectionLimit: 20,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "cypress-mochawesome-reporter",
      cypressMochawesomeReporterReporterOptions: {
        reportDir: "cypress/reports",
        charts: true,
        reportPageTitle: "e2e-cypress",
        embeddedScreenshots: true,
        inlineAssets: true
      }
    },
    requestTimeout: 5000,
    resolvedNodePath: '',
    resolvedNodeVersion: '',
    responseTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    scrollBehavior: "top",
    slowTestThreshold: 10000,
    specPattern: "cypress/e2e/features/e2e-saucedemo.feature",
    supportFile: "cypress/support/e2e.{js,ts}",
    supportFolder: '',
    taskTimeout: 60000,
    testIsolation: true,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
    viewportHeight: 768,
    viewportWidth: 1366,
    waitForAnimations: true,
    watchForFileChanges: false,
    env: {
      omitFiltered: true,
      filterSpecs: true,
      ENV: environment
    }
  },
});
