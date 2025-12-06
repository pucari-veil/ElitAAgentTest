const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept cookies if prompted
  const acceptCookiesButton = await page.$('text="Accept all"');
  if (acceptCookiesButton) {
    await acceptCookiesButton.click();
  }

  // Search for "cats"
  await page.fill('input[name="q"]', 'cats');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForSelector('text="Images"');

  // Click on the "Images" tab
  await page.click('text="Images"');

  // Wait for images to load
  await page.waitForSelector('img');

  // Take a screenshot of the images section
  await page.screenshot({ path: 'cats_images.png', fullPage: false });

  console.log('Screenshot of cat images saved as cats_images.png');

  await browser.close();
})();