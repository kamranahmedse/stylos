const assert = require('assert');
const path = require('path');
const fs = require('fs');
const { dd } = require('dumper.js');
const compiler = require('./compiler');

describe('webpack-css-utils', function () {
  const fixturesPath = path.join(__dirname, './fixtures');

  // Data provider to test the HTML
  const htmlFixtures = [
    {
      inputFile: 'html-1/index.html',
      outputFile: 'html-1/index.output.html',
      options: {}
    },
    {
      inputFile: 'html-1/index.html',
      outputFile: 'html-1/index.output.html',
      options: { setImportant: false }
    },
    {
      inputFile: 'html-2/index.html',
      outputFile: 'html-2/index.output.html',
      options: { setImportant: true }
    },
    {
      inputFile: 'jsx-1/index.jsx',
      outputFile: 'jsx-1/index.output.html',
      options: {
        setImportant: true,
        htmlTemplate: path.join(__dirname, './fixtures/jsx-template.html')
      }
    },
    {
      inputFile: 'jsx-2/index.jsx',
      outputFile: 'jsx-2/index.output.html',
      options: {
        setImportant: false,
        htmlTemplate: path.join(__dirname, './fixtures/jsx-template.html')
      }
    },
    {
      inputFile: 'jsx-3/index.jsx',
      outputFile: 'jsx-3/index.output.html',
      options: {
        setImportant: false,
        htmlTemplate: path.join(__dirname, './fixtures/jsx-template.html')
      }
    }
  ];

  htmlFixtures.forEach(fixture => {
    it(`can generate CSS from the HTML files: Fixture - ${fixture.inputFile}`, function (done) {
      compiler(`${fixturesPath}/${fixture.inputFile}`, fixture.options)
        .then(output => {
          // Read the actually generated index.html from Memory FS used by compiler
          const actualHtmlPath = path.join(__dirname, './index.html');
          const actualHtmlContent = output.fs.readFileSync(actualHtmlPath, 'utf8');
          // Read the expected output fixture from fixtures directory
          const expectedHtmlPath = `${fixturesPath}/${fixture.outputFile}`;
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
