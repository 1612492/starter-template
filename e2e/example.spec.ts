import { expect, test } from "@playwright/test";

test("landing page renders hero and stack sections", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "A polished TanStack starter for modern apps.",
    }),
  ).toBeVisible();

  // Note: shadcn/Base UI Button with `render={<a href />}` keeps
  // role="button", so locate by button role and assert the href directly.
  const exploreButton = page.getByRole("button", {
    name: /explore the stack/i,
  });
  await expect(exploreButton).toHaveAttribute("href", "#stack");

  await expect(
    page.getByRole("button", { name: /see next steps/i }),
  ).toHaveAttribute("href", "#next-steps");

  // Stack overview section anchored from the hero CTA.
  await exploreButton.click();
  await expect(page.locator("#stack")).toBeVisible();
  await expect(
    page.getByText("TanStack Router", { exact: true }).first(),
  ).toBeVisible();
});
