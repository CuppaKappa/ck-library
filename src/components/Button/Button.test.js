import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Button } from './Button';

afterEach(cleanup);

describe('ButtonComponent', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toBeTruthy();
  });

  it('renders correctly with label', () => {
    const { getByText } = render(<Button label='test' />);
    expect(getByText(/test/i)).toBeTruthy();
  });

  it('renders correctly with disabled and cannot be used', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} disabled />);
    userEvent.click(getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders correctly with type', () => {
    const { getByRole } = render(<Button type='submit' />);
    expect(getByRole('button').getAttribute('type')).toBe('submit');
  });

  it('renders correctly with className', () => {
    const { getByRole } = render(<Button className='test' />);
    expect(getByRole('button').className).toBe('test');
  });

  it('renders correctly with style', () => {
    const { getByRole } = render(<Button style={{ color: 'red' }} />);
    const root = getByRole('button');
    expect(window.getComputedStyle(root).color).toBe('red');
  });

  it('renders correctly with children', () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText(/test/i)).toBeTruthy();
  });
});

describe('ButtonComponent variants', () => {
  it('renders variant alt', () => {
    const tree = renderer.create(<Button variant='alt' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders variant linearBlack', () => {
    const tree = renderer.create(<Button variant='linearBlack' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders variant linearWhite', () => {
    const tree = renderer.create(<Button variant='linearWhite' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders variant large', () => {
    const tree = renderer.create(<Button variant='large' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders variant jumbo', () => {
    const tree = renderer.create(<Button variant='jumbo' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
