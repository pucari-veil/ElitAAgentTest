import { test, expect } from '@playwright/test';

test('Search for cat on Google', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept cookies if the prompt appears
  const acceptCookiesButton = await page.locator('button:has-text("Accept all")');
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  // Type 'cat' into the search box and press Enter
  await page.fill('input[name="q"]', 'cat');
  await page.press('input[name="q"]', 'Enter');

  // Wait for search results to load
  await page.waitForSelector('#search');

  // Verify that the search results contain the word 'cat'
  const searchResults = await page.locator('#search').innerText();
  expect(searchResults).toContain('cat');
});