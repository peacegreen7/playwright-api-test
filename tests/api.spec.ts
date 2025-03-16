import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

const TAGS_URL_PATTERN = '**/api/tags';
const ARTICLES_URL_PATTERN = '**/api/articles*';
const BASE_URL = 'https://conduit.bondaracademy.com/';
const NEW_TITLE = 'This is new MOCK title articles';
const NEW_DESCRIPTION = 'This is new MOCK description articles';
const LOGIN_URL = 'https://conduit-api.bondaracademy.com/api/users/login';

let token: string;

test.beforeEach(async ({ page, request }) => {

  await page.route(TAGS_URL_PATTERN, async route => {
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })

  // login via API
  const loginData = {
    user: {
      email: 'peace@me.com',
      password: '123456'
    }
  }

  const response = await request.post(LOGIN_URL, {
    data: loginData,
    headers: {
      'content-type': 'application/json'
    }
  })

  const responseBody = await response.json()
  token = responseBody.user.token
  console.log('Token: ' + token)

  await page.goto(BASE_URL)

})

test('has Mock title', async ({ page }) => {

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

  await expect(page.locator('.navbar-brand')).toHaveText('conduit')
  await expect(page.locator('app-article-list h1').first()).toContainText(NEW_TITLE)
  await expect(page.locator('app-article-list p').first()).toContainText(NEW_DESCRIPTION)

  await page.pause()

})

test.only('Create article via API', async ({ page, request }) => {

  const payload = {
    article: {
      title: 'hihi 127',
      description: '124',
      body: 'hihi',
      tagList: ['hihi']
    }
  }

  const respond = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: payload,
    headers: {
      Authorization: `Token ${token}`
    }
  })

  expect(respond.status()).toBe(201)
  const responseBody = await respond.json()
  console.log('Response body: ' + JSON.stringify(responseBody))
  const slug = responseBody.article.slug

  await page.goto(`${BASE_URL}article/${slug}`)
  await page.waitForSelector('app-article-page')

  const responseDelete = await request.delete('https://conduit-api.bondaracademy.com/api/articles/' + slug, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
  expect(responseDelete.status()).toBe(204)
  const responseBodyDelete = await responseDelete.json()
  console.log('Response body delete: ' + JSON.stringify(responseBodyDelete))  
  // await page.pause()
})

