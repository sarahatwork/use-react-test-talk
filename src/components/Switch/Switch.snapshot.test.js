import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch test with Jest snapshot', () => {
  it('switches from off to on on user click', () => {
    const { asFragment, getByRole } = render(<Switch />);

    // save original output
    const firstRender = asFragment();

    // click button
    fireEvent.click(getByRole('button'));

    // compare to new output
    expect(firstRender).toMatchDiffSnapshot(asFragment());
  });
});
