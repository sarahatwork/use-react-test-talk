import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Switch from './Switch';
import fetchUrl from '../../fetchUtil';

jest.mock('../../fetchUtil');

describe('Switch test with React Testing Library', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('fetches an image on click', async () => {
    fetchUrl.mockResolvedValueOnce({
      message: 'http://image1.jpg'
    });

    const { getByTestId, getByRole, getByText, getByAltText } = render(
      <Switch />
    );

    expect(getByTestId('label')).toHaveTextContent('Off');

    fireEvent.click(getByRole('button'));
    expect(getByTestId('label')).toHaveTextContent('On');

    const loadingText = await getByText('Loading...');
    expect(loadingText).toBeInTheDocument();

    const image = await waitForElement(() => getByAltText('Chihuahua'));
    expect(image.src).toContain('http://image1.jpg');

    fireEvent.click(getByRole('button'));
    expect(getByTestId('label')).toHaveTextContent('Off');

    fetchUrl.mockResolvedValueOnce({
      message: 'http://image2.jpg'
    });

    fireEvent.click(getByRole('button'));

    const loadingText2 = await getByText('Loading...');
    expect(loadingText2).toBeInTheDocument();

    const image2 = await waitForElement(() => getByAltText('Chihuahua'));
    expect(image2.src).toContain('http://image2.jpg');
  });
});
