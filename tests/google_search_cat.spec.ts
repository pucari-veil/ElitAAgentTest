import { test, expect } from '@playwright/test';

test('Search for the word cat on Google', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept cookies if prompted
  const acceptCookiesButton = await page.$('text=Accept all');
  if (acceptCookiesButton) {
    await acceptCookiesButton.click();
  }

  // Type 'cat' into the search bar and press Enter
  await page.fill('input[name="q"]', 'cat');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForSelector('#search');

  // Verify that search results contain the word 'cat'
  const searchResults = await page.textContent('#search');
  expect(searchResults).toContain('cat');
});