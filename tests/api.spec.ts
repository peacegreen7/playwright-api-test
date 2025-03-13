import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

const TAGS_URL_PATTERN = '**/api/tags';
const ARTICLES_URL_PATTERN = '**/api/articles*';
const BASE_URL = 'https://conduit.bondaracademy.com/';
const NEW_TITLE = 'This is new title articles';
const NEW_DESCRIPTION = 'This is new description articles';

test.beforeEach(async ({ page }) => {

  await page.route(TAGS_URL_PATTERN, async route => {
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })

  await page.route(ARTICLES_URL_PATTERN, async route => {
    try {
      const response = await route.fetch()
      const responseBody = await response.json()
      responseBody.articles[0].title = NEW_TITLE
      responseBody.articles[0].description = NEW_DESCRIPTION

      await route.fulfill({
        body: JSON.stringify(responseBody)
      })
    } catch (error) {
      console.log('Error handling articles route: ' + error)
      await route.abort()
    }

  })

  await page.goto(BASE_URL)

})

test('has title', async ({ page }) => {

  await expect(page.locator('.navbar-brand')).toHaveText('conduit')
  await expect(page.locator('app-article-list h1').first()).toContainText(NEW_TITLE)
  await expect(page.locator('app-article-list p').first()).toContainText(NEW_DESCRIPTION)

  await page.pause()

})