import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  const { container } = render(<Main />);
  it('Should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
