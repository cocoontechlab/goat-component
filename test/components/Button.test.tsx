import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SCButton as Button } from '../../stories/Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    // render the button and get the getByRole method
    const { getByRole } = render(<Button text="test" />);

    // getByRole as its name gets a selector by its role.
    // in this case we're looking for a `button`.
    // then we make sure it's in the document
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call the onClick method when a user clicks on the button', () => {
    // mock out our OnClick function
    const mockClick = jest.fn();

    const { getByRole } = render(<Button text="test" onClick={mockClick} />);

    // we store a variable with the button element
    const buttonElement = getByRole('button', { name: 'test' });

    // Simulate a user clicking on the button
    fireEvent.click(buttonElement);

    // check that the function was called once;
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});