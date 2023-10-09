import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

(async () => {
  let pathToExtension = '/Users/lujiaqi/Documents/HaveYouDocumentTheMakingOf/extension-path'
  try {
    const browser = await puppeteer.launch({
      ignoreDefaultArgs: ['--enable-automation'],
      executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
      headless: false,
      defaultViewport: null,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
      ]
    });

    await (await browser.pages())[0].close();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 3840
    });
    const recorder = new PuppeteerScreenRecorder(page,
      {
        fps: 60,
        videoFrame: {
          width: 1080,
          height: 3840,
        },
      }
    );
    await recorder.start('./video/ock.mp4');

    // 1
    await page.goto('https://archive.aec.at/prix/', { timeout: 0 });

    await page.waitForTimeout(3000);
    let y;
    await page.evaluate(() => {
      let element = document.querySelector('body > div > div.footer-down-body > div:nth-child(5) > div.row.filter-row > div');
      y = element.getBoundingClientRect().top + 1;
      window.document.body.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(15000);

    // 2
    await page.goto('http://archive.rhizome.org/artbase/55583/www.vvork.com/index.html@tag=cat', { timeout: 0 });

    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-17302');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-6869');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-6369');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-5728');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-2583');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-3204');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-3177');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-2831');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-1707');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-1033');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-592');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-477');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    });
    await page.waitForTimeout(6000);

    await page.goto('http://archive.rhizome.org/artbase/55583/www.vvork.com/index.html@tag=dog', { timeout: 0 });

    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-13087');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-7568');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-5517');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-5490');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-5317');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-4846');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-4176');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-3958');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-3844');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-3841');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-2815');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-2683');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-2367');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    });
    await page.waitForTimeout(6000);

    await page.goto('http://archive.rhizome.org/artbase/55583/www.vvork.com/index.html@tag=car', { timeout: 0 });

    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-22860');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-22016');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-21517');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-21125');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-21118');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-21101');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-20822');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-20569');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-20349');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-20160');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-19883');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-19236');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-18471');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-16965');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    });
    await page.waitForTimeout(6000);

    await page.goto('http://archive.rhizome.org/artbase/55583/www.vvork.com/index.html@tag=car&paged=2', { timeout: 0 });

    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-13067');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-13065');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-12596');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-12275');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-12348');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-12315');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-12311');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-12243');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-11923');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-7950');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-7443');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-7383');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post-7330');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    });
    await page.waitForTimeout(6000);

    await page.goto('http://archive.rhizome.org/artbase/55583/www.vvork.com/index.html@tag=shit', { timeout: 0 });

    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    });
    await page.waitForTimeout(6000);

    // 3
    await page.goto('https://www.telegraph.co.uk/culture/culturepicturegalleries/8216563/Is-it-art.html?image=8', { timeout: 0 });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('body > main > article > div.grid-col.grid-col-12.tpl-article__layout.tpl-article__layout--content.martech-paywall__full-width > div > figure:nth-child(7) > figcaption');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('body > main > article > div.grid-col.grid-col-12.tpl-article__layout.tpl-article__layout--content.martech-paywall__full-width > div > figure:nth-child(8) > figcaption');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('body > main > article > div.grid-col.grid-col-12.tpl-article__layout.tpl-article__layout--content.martech-paywall__full-width > div > figure:nth-child(9) > figcaption');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(3000);

    // 4
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=3', { timeout: 0 });
    await page.click('#onetrust-accept-btn-handler');
    await page.waitForTimeout(10000);
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=4', { timeout: 0 });
    await page.waitForTimeout(10000);
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=5', { timeout: 0 });
    await page.waitForTimeout(10000);
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=6', { timeout: 0 });
    await page.waitForTimeout(10000);
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=7', { timeout: 0 });
    await page.waitForTimeout(10000);
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=8', { timeout: 0 });
    await page.waitForTimeout(10000);
    await page.goto('https://www.tate.org.uk/search?ka=1&q=conceptual%20art&type=artwork&page=9', { timeout: 0 });
    await page.waitForTimeout(10000);

    // 5
    await page.goto('https://untitled.cwandt.com/', { timeout: 0 });

    await page.waitForTimeout(15000);
    await page.evaluate(() => {
      window.scrollTo(0, 16625);
    });
    await page.waitForTimeout(12000);
    await page.evaluate(() => {
      window.scrollTo(0, 31105);
    });
    await page.waitForTimeout(12000);

    // 6
    await page.goto('https://eyeondesign.aiga.org/category/design-plus/art/#4', { timeout: 0 });

    await page.waitForTimeout(12000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_71969');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_72989');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_73036');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_70099');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_68549');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_67541');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_64882');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_63556');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_62593');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      let elem = document.querySelector('#post_53991');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(7000);

    // 7
    await page.goto('https://www.para-site.art/exhibitions/', { timeout: 0 });

    await page.waitForTimeout(12000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(9000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(9000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(9000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(9000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(9000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(9000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(12000);
    await page.goto('https://www.para-site.art/exhibitions/the-problem-of-asia/', { timeout: 0 });
    await page.waitForTimeout(12000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(10000);

    // 8
    await page.goto('https://kadist.org/region/latin-america/?post_type=work', { timeout: 0 });

    await page.waitForTimeout(6000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      window.scrollBy(0, -5);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(7000);

    // 9
    await page.goto('https://www.mori.art.museum/en/collection/artists/index.html', { timeout: 0 });
    let a;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(2) > div > h2');
      a = elem.getBoundingClientRect().top - 60;
      window.scrollTo({
        top: a,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(6000);
    let b;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(3) > div > h2');
      b = elem.getBoundingClientRect().top + a - 60;
      window.scrollTo({
        top: b,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let c;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(4) > div > h2');
      c = elem.getBoundingClientRect().top + b - 60;
      window.scrollTo({
        top: c,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(5000);
    let d;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(5) > div > h2');
      d = elem.getBoundingClientRect().top + c - 60;
      window.scrollTo({
        top: d,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let e;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(6) > div > h2');
      e = elem.getBoundingClientRect().top + d - 60;
      window.scrollTo({
        top: e,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let f;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(7) > div > h2');
      f = elem.getBoundingClientRect().top + e - 60;
      window.scrollTo({
        top: f,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let g;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(8) > div > h2');
      g = elem.getBoundingClientRect().top + f - 60;
      window.scrollTo({
        top: g,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let h;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(9) > div > h2');
      h = elem.getBoundingClientRect().top + g - 60;
      window.scrollTo({
        top: h,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(6000);
    let i;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(10) > div > h2');
      i = elem.getBoundingClientRect().top + h - 60;
      window.scrollTo({
        top: i,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let j;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(11) > div > h2');
      j = elem.getBoundingClientRect().top + i - 60;
      window.scrollTo({
        top: j,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let k;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(12) > div > h2');
      k = elem.getBoundingClientRect().top + j - 60;
      window.scrollTo({
        top: k,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(9000);
    let l;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(13) > div > h2');
      l = elem.getBoundingClientRect().top + k - 60;
      window.scrollTo({
        top: l,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(6000);
    let m;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(14) > div > h2');
      m = elem.getBoundingClientRect().top + l - 60;
      window.scrollTo({
        top: m,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(9000);
    let n;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(15) > div > h2');
      n = elem.getBoundingClientRect().top + m - 60;
      window.scrollTo({
        top: n,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(6000);
    let o;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(16) > div > h2');
      o = elem.getBoundingClientRect().top + n - 60;
      window.scrollTo({
        top: o,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(6000);
    let p;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(17) > div > h2');
      p = elem.getBoundingClientRect().top + o - 60;
      window.scrollTo({
        top: p,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let r;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(19) > div > h2');
      r = elem.getBoundingClientRect().top + p - 60;
      window.scrollTo({
        top: r,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(3000);
    let s;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(20) > div > h2');
      s = elem.getBoundingClientRect().top + r - 60;
      window.scrollTo({
        top: s,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(9000);
    let t;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(21) > div > h2');
      t = elem.getBoundingClientRect().top + s - 60;
      window.scrollTo({
        top: t,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(9000);
    let u;
    await page.evaluate(() => {
      let elem = document.querySelector('body > div > section.global-contents > div.collectionArtistsBody > section:nth-child(22) > div > h2');
      u = elem.getBoundingClientRect().top + t - 60;
      window.scrollTo({
        top: u,
        behavior: 'smooth'
      });
    });
    await page.waitForTimeout(9000);

    // 10
    await page.goto('https://artreview.com/power-100/', { timeout: 0 });
    await page.click('#gatsby-focus-wrapper > footer > div.CookieNotice__Wrapper-sc-1mbny7t-0.hrsUkh > button');
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-17');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-18');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-19');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-20');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-21');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-22');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-23');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-24');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-25');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-26');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-27');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-28');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-29');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-30');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-31');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-32');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-33');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-34');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-35');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-36');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-37');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-38');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-39');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-40');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-41');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-42');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-43');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-44');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-45');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-46');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-47');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-48');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-49');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(700);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-50');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-51');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-52');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-53');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-54');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-55');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-56');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-57');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-58');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-59');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-60');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-61');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-62');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-63');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-64');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-65');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-66');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-67');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-68');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-69');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-70');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-71');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-72');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-73');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-74');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-75');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-76');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-77');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-78');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-79');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-80');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-81');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-82');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-83');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-84');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-85');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-86');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-87');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-88');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-89');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-90');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-91');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-92');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-93');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-94');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-95');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-96');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-97');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-98');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-99');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      let elem = document.querySelector('#artist-100');
      elem.scrollIntoView({
        block: "end"
      });
    });
    await page.waitForTimeout(500);
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    });
    await page.waitForTimeout(3000);

    await recorder.stop();
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
