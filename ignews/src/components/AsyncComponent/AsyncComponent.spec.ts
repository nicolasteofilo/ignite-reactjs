import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { AsyncComponent } from '.';

test('it renders correctly', async () => {
  render(<AsyncComponent />)
  
  expect(screen.getByyyarnText('Hello World')).toBeInTheDocument()

  await waitForElementToBeRemoved(screen.queryByText('Button'))
});