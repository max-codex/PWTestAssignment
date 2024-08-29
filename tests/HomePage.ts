import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  private logoutButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.locator('a[href*="logout"]');
    this.successMessage = page.locator('strong');
  }

  async isLoaded() {
    await this.page.waitForURL(/practicetestautomation\.com\/logged-in-successfully\/?/);
    return this.successMessage.isVisible();
  }

  async getSuccessMessage() {
    return this.successMessage.textContent();
  }

  async isLogoutButtonVisible() {
    return this.logoutButton.isVisible();
  }
}
