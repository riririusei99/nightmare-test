const Nightmare = require('nightmare')
const assert = require('power-assert')

describe('Load a Page', function() {
  this.timeout('20s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('My First Test', () => {
    it('Search riririusei99', done => {
      nightmare.goto('http://teamspirit.hatenablog.com/')
        .type('input[type=text]', 'riririusei99')
        .click('input[type=submit]')
        .evaluate(() => {
          return document.title;
        })
        .end()
        .then((title) => {
          assert.ok(title === 'riririusei99 の検索結果 - TeamSpirit Developer Blog');
          done();
        })
        .catch(done)
    })
  })
})
