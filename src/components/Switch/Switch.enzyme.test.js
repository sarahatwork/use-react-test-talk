import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Switch from './Switch';
import fetchUrl from '../../fetchUtil';

jest.mock('../../fetchUtil');

describe('Switch test with Enzyme', () => {
  let wrapper;

  beforeAll(() => {
    fetchUrl.mockResolvedValueOnce({
      message: 'http://image1.jpg'
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('is off by default', () => {
    wrapper = shallow(<Switch />);
    expect(wrapper.find('[data-testid="label"]').text()).toContain('Off');
  });

  it('turns on, on click', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('[data-testid="label"]').text()).toContain('On');
  });

  it('displays loading text', () => {
    expect(wrapper.text()).toContain('Loading...');
  });

  it('loads image', () => {
    wrapper.update();
    console.log(wrapper.html());
    expect(wrapper.find('img').prop('src')).toContain('Loading...');
  });

  it.skip('fetches an image on click', async () => {
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
