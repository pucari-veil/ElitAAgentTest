import { test, expect } from '@playwright/test';

test('EPAM Client Work navigation', async ({ page }) => {
  // Step 1: Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Step 3: Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});