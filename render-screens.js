const { chromium } = require('/Users/lenguyenhoangthao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path = require('path');

const htmlPath = 'file://' + path.resolve('/Users/lenguyenhoangthao/Documents/Outmarket Vibe Code/Team page/index.html');
const outDir = path.resolve('/Users/lenguyenhoangthao/Documents/Outmarket Vibe Code/Team page/exports');
const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function capture(page, name) { await page.screenshot({ path: path.join(outDir, `${name}.png`) }); }
async function reset(page) { await page.goto(htmlPath, { waitUntil: 'domcontentloaded' }); await page.waitForTimeout(150); }

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1024 }, deviceScaleFactor: 1 });
  await reset(page); await capture(page, '01-builder-page-settings');
  await reset(page); await page.click('[data-card="olivia"]'); await capture(page, '02-builder-card-template');
  await reset(page); await page.click('[data-member="olivia"]'); await capture(page, '03-builder-member-data');
  await reset(page); await page.locator('[data-member="mia"]').hover(); await page.click('[data-member-menu="mia"]'); await page.click('[data-remove="mia"]'); await capture(page, '04-builder-team-save-prompt');
  await reset(page); await page.click('#open-template'); await capture(page, '05-template-modal-clean');
  await capture(page, '06-template-modal-clean');
  await page.selectOption('#modal-team-select', 'Executive Team'); await capture(page, '07-confirm-team-change');
  await browser.close();
})();
