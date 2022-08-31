import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';



it('renders correctly', () => {

    render(<Login />)

    const headingElement = screen.getByRole("button", { name: 'Login', exact: false })
    expect(headingElement).toBeInTheDocument();
});