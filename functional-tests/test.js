import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `https://alchemy-web.cfapps.io`;
//  .page `http://localhost:3000`;

test('Dashboard Page loads', async t => {
  const container = Selector('#container');
  await t
    .expect(container.exists).ok();
});

test('Dashboard Page loads a project', async t => {
  const project = Selector('#project-id-1');
  await t
    .expect(project.exists).ok();
});
