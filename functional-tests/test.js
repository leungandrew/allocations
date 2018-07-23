import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `https://alchemy-web.cfapps.io`;
  //.page `http://localhost:3000`;

test('my first test', async t => {
  const button = Selector('#hello-world').exists;
  await t.expect(button).ok();
});
