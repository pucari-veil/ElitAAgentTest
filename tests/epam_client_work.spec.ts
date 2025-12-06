import { test, expect } from '@playwright/test';

test('Verify Client Work text visibility', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.locator('header').getByText('Services').click();

  // Click the "Explore Our Client Work" link
  await page.getByText('Explore Our Client Work').click();

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});