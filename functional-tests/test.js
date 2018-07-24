import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `https://alchemy-web.cfapps.io`;
  //.page `http://localhost:3000`;

test('my first test', async t => {
  const button = Selector('#hello-world');
  const dialog =  Selector('#dialog');
  await t
    .expect(button.exists).ok()
    .expect(dialog.exists).notOk()
    .click(button)
    .expect(dialog.exists).ok();
});
