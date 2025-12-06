import { test, expect } from '@playwright/test';

test('Verify Client Work page', async ({ page }) => {
  // Navigate to the Epam website
  await page.goto('https://www.epam.com/');

  // Click on "Services" in the header menu
  const servicesMenu = await page.getByRole('link', { name: 'Services' });
  await servicesMenu.click();

  // Click on "Explore Our Client Work" link
  const clientWorkLink = await page.getByRole('link', { name: 'Explore Our Client Work' });
  await clientWorkLink.click();

  // Verify that "Client Work" text is visible on the page
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});