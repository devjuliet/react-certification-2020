import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeVisible();
  });
});