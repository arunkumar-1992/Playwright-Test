
import { Browser, BrowserContext, chromium, Page,test, expect } from "@playwright/test";
let page: Page;
//let browser: Browser;
let context:BrowserContext;

test('navigate to Testkube Portal', async ({page}) => {

  //browser = await chromium.launch({ headless: false, slowMo: 50, channel: "chrome" });//
    
  //context = await browser.newContext();
  //await context.clearCookies();
  //context = await browser.newContext({
  //recordHar: { path: 'example.har', urlFilter: '**/oce/**' }});
  //page = await context.newPage();
  await page.goto('https://testkube.io/');
  await page.getByTestId('uc-accept-all-button').click();

  // Expect a title "to contain" a substring.
  console.log("testing testkube only with  Git Commit input ")
  await expect(page).toHaveTitle("Kubernetes-Native Testing Framework | Testkube");
  await page.getByRole('link', { name: 'See all Integrations' }).click();
  await page.getByRole('heading', { name: 'Playwright' }).click();
  await page.locator('#Playwright').getByRole('link', { name: 'Learn more' }).click();
  await page.getByRole('heading', { name: 'Playwright & Testkube Integration' }).click();
});

