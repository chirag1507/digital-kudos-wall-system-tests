import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async navigateTo(path: string = "/"): Promise<void> {
    await this.page.goto(path);
    await this.waitForPageLoad();
  }
}
