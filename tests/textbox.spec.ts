import { test, expect } from "@playwright/test";

test("visit text box site", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
});
