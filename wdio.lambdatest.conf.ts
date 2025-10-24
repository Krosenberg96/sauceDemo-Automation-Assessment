import type { Options } from '@wdio/types'

export const config = {
     runner: 'local',

    hostname: 'hub.lambdatest.com',
    port: 443, 
    protocol: 'https',

    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,

    specs: ['./features/**/*.feature'],

    maxInstances: 1,

    capabilities: [
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            'LT:Options': {
                platformName: 'Windows 10',
                build: 'SauceDemo Automation Build',
                name: 'Cart Validation',
                project: 'SauceDemo WDIO Automation',
                w3c: true,
                network: true,
                visual: true,
                video: true,
                console: true,
            },
        },
    ],

    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./steps/**/*.ts','./steps/hooks.ts'],
        timeout: 60000,
    },

    services: [],

    logLevel: 'info',
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
}
