import { Page, Locator } from '@playwright/test';

export class ErrorPage {
  private page: Page;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.locator('#error');
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }
}
