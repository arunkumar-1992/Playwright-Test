import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import {  } from "@cucumber/gherkin";

import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


let page: Page;
let browser: Browser;
let context:BrowserContext;

setDefaultTimeout(2 * 1000 * 1000);

Before(async () => {

  try {
    //browser = await chromium.launch({ headless: false, slowMo: 50 });
    browser = await chromium.launch({ headless: false, slowMo: 50, channel: "chrome" });
    context = await browser.newContext({ ignoreHTTPSErrors: true });
    await context.clearCookies();
    page = await context.newPage();
    await page.setViewportSize({width: 1700, height: 1300 });
  } catch (error) {
    console.log("page navigation is due to following ${error}");
  }
  return page;
});

After(async () => {
  //await page.screenshot({ path: 'screenshot.png', fullPage: true });
  //await this.page.screenshot({ path: 'screenshots/findFilter.png', fullPage: true });
  await context.close();
  await browser.close();
  

  
});

export { page, browser, context };
