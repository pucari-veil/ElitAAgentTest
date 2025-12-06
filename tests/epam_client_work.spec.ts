import { test, expect } from '@playwright/test';

test('Navigate to Epam and verify Client Work text', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  const servicesMenu = await page.locator('header >> text=Services');
  await servicesMenu.click();

  // Step 3: Click the "Explore Our Client Work" link
  const clientWorkLink = await page.locator('text=Explore Our Client Work');
  await clientWorkLink.click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});