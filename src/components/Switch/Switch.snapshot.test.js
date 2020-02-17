import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch test with Jest snapshot', () => {
  it('is off by default', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <span
          class="text"
          data-testid="label"
        >
          The toggle is: 
          Off
        </span>
        <button>
          Toggle
        </button>
      </div>
    `);
  });

  it('switches from off to on on user click', () => {
    const { container, getByRole } = render(<Switch />);
    fireEvent.click(getByRole('button'));
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <span
          class="text"
          data-testid="label"
        >
          The toggle is: 
          On
        </span>
        <button>
          Toggle
        </button>
      </div>
    `);
  });
});
