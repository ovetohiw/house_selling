import { expect, test } from "@playwright/test";

async function completeJourney(page: import("@playwright/test").Page) {
  await page.goto("/");
  await expect(page.getByText("Каменный двор").first()).toBeVisible();
  await page.getByRole("link", { name: "Смотреть дома" }).click();

  await expect(page.getByRole("heading", { name: "Жилые комплексы" })).toBeVisible();
  await page.getByRole("link", { name: /Северный камень/ }).click();

  await expect(page.getByRole("heading", { name: "Северный камень" })).toBeVisible();
  await page.getByRole("link", { name: /Студия с нишей|Двушка у парка|Семейная/ }).first().click();

  await page.getByRole("link", { name: "Смотреть льготы" }).click();
  await expect(page.getByRole("heading", { name: "Льготные предложения" })).toBeVisible();
  await expect(page.getByText("Семейная ипотека")).toBeVisible();

  await page.getByRole("link", { name: "К оценке маршрута" }).click();
  await expect(page.getByText("Оценка, не вызов такси")).toBeVisible();

  await page.getByRole("link", { name: "Записаться на просмотр" }).click();
  await expect(page.getByRole("heading", { name: "Запись на просмотр" })).toBeVisible();

  await page.getByRole("link", { name: "2026-10-26" }).click();
  await page.getByRole("link", { name: "Подтвердить дату" }).click();
  await page.getByLabel("Имя").fill("Тест Е2Е");
  await page.getByLabel("Телефон").fill("+74951234567");
  await page.getByRole("button", { name: "Отправить заявку" }).click();

  await expect(page.getByText(/Заявка сохранена/)).toBeVisible();
}

test.describe("сквозной путь до заявки", () => {
  test("проходит на текущей ширине проекта", async ({ page }) => {
    await completeJourney(page);
  });

  test("reduced-motion не ломает дорожку", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const animated = page.locator(".step-enter");
    await expect(animated).toBeVisible();
    const duration = await animated.evaluate((el) =>
      getComputedStyle(el).animationDuration,
    );
    expect(duration === "0s" || duration === "0ms").toBeTruthy();
    await completeJourney(page);
  });
});
