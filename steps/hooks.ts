import { AfterStep } from "@wdio/cucumber-framework";
import {browser} from "@wdio/globals";
import fs from 'fs';
import path from 'path';

//Directory to store screenshots
const screenshotsDir = path.join(process.cwd(), 'screenshots');

//Create a run folder at the start of execution
const runTimestamp = new Date().toISOString().replace(/[:.]/g, '-');
const runFolder = path.join(screenshotsDir, `run_${runTimestamp}`);
if (!fs.existsSync(runFolder)) fs.mkdirSync(runFolder, { recursive: true });

//AfterStep hook for screenshot capture
AfterStep(async function ({ pickle, result }) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const scenarioName = pickle.name.replace(/\s+/g, '_');
    const step = result?.status ?? 'UNKNOWN';

    const filename = `${scenarioName}_${step}_${timestamp}.png`;
    const filePath = path.join(runFolder, filename);

    try {
        await browser.saveScreenshot(filePath);
        console.log(`Screenshot saved: ${filePath}`);
    } catch (error) {
        console.error("Error taking screenshot:", error);
    }
});
