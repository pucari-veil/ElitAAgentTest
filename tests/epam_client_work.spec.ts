import { test, expect } from '@playwright/test';

test('Verify Client Work text visibility', async ({ page }) => {
  // Navigate to the Epam website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.locator('header').getByRole('link', { name: 'Services' }).click();

  // Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});