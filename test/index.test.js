const assert = require('assert');
const path = require('path');
const fs = require('fs');
const compiler = require('./compiler');

describe('webpack-css-utils', function () {
  const fixturesPath = path.join(__dirname, './fixtures');

  // Data provider to test the HTML
  const htmlFixtures = [
    {
      fileName: 'sample-1',
      options: {}
    },
    {
      fileName: 'sample-1',
      options: { setImportant: false }
    },
    {
      fileName: 'sample-2',
      options: { setImportant: true }
    }
  ];

  htmlFixtures.forEach(fixture => {
    it(`can generate CSS from the HTML files – Fixture - ${fixture.fileName}`, function (done) {
      compiler(`${fixturesPath}/${fixture.fileName}.html`, fixture.options)
        .then(output => {
          // Read the actually generated index.html from Memory FS used by compiler
          const actualHtmlPath = path.join(__dirname, './index.html');
          const actualHtmlContent = output.fs.readFileSync(actualHtmlPath, 'utf8');
          // Read the expected output fixture from fixtures directory
          const expectedHtmlPath = `${fixturesPath}/${fixture.fileName}.output.html`;
          const expectedHtmlContent = fs.readFileSync(expectedHtmlPath, 'utf8');

          assert.equal(actualHtmlContent, expectedHtmlContent);
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});
