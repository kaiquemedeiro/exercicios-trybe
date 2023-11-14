import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest';
import App from '../App';

describe('Testando a página App e o botão', () => {
 
 it('ao renderizar a página, uma piada é renderizada', async () => {
 
 const MOCK_JOKE = {
  id: '7h3oGtrOfxc',
  joke: 'Thanks for explaining the word "many" to me. It means a lot.',
 };

 const mockFetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(MOCK_JOKE),
  } as Response)
 );

 global.fetch = mockFetch;

 render(<App />);

 const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');

 expect(renderedJoke).toBeInTheDocument();
 expect(mockFetch).toHaveBeenCalledTimes(1);
 expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

   const MOCK_JOKE_2 = {
    id: '8s5bGtrOfxc',
    joke: 'Whats red and bad for your teeth? A Brick.',
  }

    const MOCK_RESPONSE_2 = {
    ok: true,
    status: 200,
    json: () => Promise.resolve(MOCK_JOKE_2),
  }

  const secondMockFetch = vi.fn(() =>
  Promise.resolve( MOCK_RESPONSE_2 as Response));

  global.fetch = secondMockFetch;

 const newButtonJoke = screen.getByRole('button', { name: 'New joke' });

 await userEvent.click(newButtonJoke);

 const secondRenderedJoke = await screen.findByText('Whats red and bad for your teeth? A Brick.');
 expect(secondRenderedJoke).toBeInTheDocument();
 expect(secondMockFetch).toHaveBeenCalledTimes(1);

 });

 // it('a função fetch foi chamada uma vez', async () => {

 // });

 // it('ao clicar no botão “New joke”, a piada é alterada', async () => {

 // });

 // it('a nova piada é exibida na tela', async () => {

 // });

});

afterEach(() => {
 vi.restoreAllMocks();
});
