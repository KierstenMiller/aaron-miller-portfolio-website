// NOTE: CAN ONLY RUN THESE LOCALLY. GITHUB ACTIONS RUNS VIA LINUX AND MY LAPTOP IS DARWIN. https://github.com/microsoft/playwright/issues/14218
import { expect, test } from '@playwright/test';

test('visual check home page desktop', async ({ page }) => {
  await page.goto('https://aaronmillerdesign.com/');
  await expect(page).toHaveScreenshot();
});

test('visual check sleep number page desktop', async ({ page }) => {
  await page.goto('https://aaronmillerdesign.com/work/sleep-number');
  await expect(page).toHaveScreenshot();
});

test('visual check medtronic page desktop', async ({ page }) => {
  await page.goto('https://aaronmillerdesign.com/work/medtronic-project');
  await expect(page).toHaveScreenshot();
});

// can't take screenshot - playwright takes 2 screenshots in quick succession and the gifs play on page load. Playwright get 2 matching screenshots.
// test('visual check space150 page desktop', async ({ page }) => {
//   await page.goto('https://aaronmillerdesign.com/work/space150');
//   await expect(page).toHaveScreenshot({timeout: 1200000});
// });