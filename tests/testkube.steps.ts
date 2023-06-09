import { page } from "./world";

Given('user navigate to swisscompanion portal', async () => {

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

