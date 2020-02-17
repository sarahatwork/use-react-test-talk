import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch test with Jest snapshot', () => {
  it('is off by default', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('switches from off to on on user click', () => {
    const { container, getByRole } = render(<Switch />);
    fireEvent.click(getByRole('button'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
