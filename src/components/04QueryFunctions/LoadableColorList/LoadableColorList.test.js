
import { render, screen } from '@testing-library/react';
import { LoadableColorList } from './LoadableColorList'

const setup = () => render(<LoadableColorList />);


it('favor findBy or findAllBy when data fetching', async () => {
  setup();
  const elements = await screen.findAllByRole('listitem');

  expect(elements).toHaveLength(3);
});

