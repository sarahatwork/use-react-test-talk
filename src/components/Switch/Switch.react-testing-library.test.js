import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch test with React Testing Library', () => {
  it('is off by default', () => {
    const { getByText } = render(<Switch />);
    expect(getByText('Off')).toBeInTheDocument();
  });

  it('switches from off to on on user click', () => {
    const { getByText, getByRole } = render(<Switch />);
    fireEvent.click(getByRole('button'));
    expect(getByText('On')).toBeInTheDocument();
  });
});
