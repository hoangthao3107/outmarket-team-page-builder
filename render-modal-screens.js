const { chromium } = require('/Users/lenguyenhoangthao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const path = require('path');
const html = 'file://' + path.resolve('/Users/lenguyenhoangthao/Documents/Outmarket Vibe Code/Team page/index.html');
const out = name => path.resolve('/Users/lenguyenhoangthao/Documents/Outmarket Vibe Code/Team page/exports', `${name}.png`);

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1024 } });
  const reset = async () => { await page.goto(html, { waitUntil: 'domcontentloaded' }); await page.waitForTimeout(150); };
  await reset(); await page.locator('[data-member="placeholder"]').hover(); await page.click('[data-member-menu="placeholder"]'); await page.click('[data-remove="placeholder"]'); await page.screenshot({ path: out('04-builder-team-save-prompt') });
  await reset(); await page.click('#open-template'); await page.screenshot({ path: out('05-template-modal-clean') });
  await page.screenshot({ path: out('06-template-modal-clean') });
  await page.selectOption('#modal-team-select', 'Executive Team'); await page.screenshot({ path: out('07-confirm-team-change') });
  await browser.close();
})();
