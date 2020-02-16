import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch test with React Testing Library', () => {
  it('is off by default', () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId('label')).toHaveTextContent('Off');
  });

  it('switches from off to on on user click', () => {
    const { getByTestId, getByRole } = render(<Switch />);
    fireEvent.click(getByRole('button'));
    expect(getByTestId('label')).toHaveTextContent('On');
  });
});
