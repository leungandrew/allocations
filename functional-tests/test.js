import { Selector } from 'testcafe';

fixture `Getting Started`
//.page `https://alchemy-web.cfapps.io`;
  .page `http://localhost:3000`;

test('home page loads', async t => {
  const container = Selector('#container');
  await t
    .expect(container.exists).ok()
});
