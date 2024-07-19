import { findAllByTestId, fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import App from './App'


test('il componente welcome è montato correttamente test1', ()=>{
    render(<App />)

    const welcomeComponent = screen.getByText(/welcome/i);

    expect(welcomeComponent).toBeInTheDocument();
})

test ('all the books contiene 150 libri test2', () =>{
    render (<App />);

    const bookCards = screen.getAllByTestId("card-img");

    expect(bookCards).toHaveLength(150);
})

test ('verifica che CommentArea sia renderizzato correttamente test3', ()=>{
    render(<App />);

    const bookCards = screen.getAllByTestId("card-img");

    fireEvent.click(bookCards[0]);

    const rate = screen.getByPlaceholderText(/rate/i);

    expect(rate).toBeInTheDocument();

})

describe('filtraggio tramite navbar test4', ()=>{
    test('cerca1', ()=>{
        render (<App />);

        const filterInput = screen.getByPlaceholderText(/Search your book/i);

        fireEvent.change(filterInput, {target:{value:'conan'}})

        const bookCards = screen.getAllByTestId("card-img");

        expect(bookCards).toHaveLength(2);
    })

    test ('cerca2', () => {
        render (<App />);

        const filterInput = screen.getByPlaceholderText(/Search your book/i);

        fireEvent.change(filterInput, {target:{value:'sword'}})

        const bookCards = screen.getAllByTestId("card-img");

        expect(bookCards).toHaveLength(9);
    })

    test ('cerca3', () => {
        render (<App />);

        const filterInput = screen.getByPlaceholderText(/Search your book/i);

        fireEvent.change(filterInput, {target:{value:'patrizia'}})

        const bookCards = screen.queryAllByTestId("card-img");

        expect(bookCards).toHaveLength(0);
    })
})

test('cliccando sull immagine del libro il bordo diventa rosso test5', ()=>{
    render(<App />);

    const bookCards = screen.getAllByTestId("card-img");

    fireEvent.click(bookCards[0]);

    expect(bookCards[0]).toHaveClass('redBorder')
})

test('cliccando su un secondo libro dopo il primo, il primo perde il bordo rosso test6', () =>{
    render(<App />);

    const bookCards = screen.getAllByTestId("card-img");

    fireEvent.click(bookCards[0]);
    expect(bookCards[0]).toHaveClass('redBorder')

    fireEvent.click(bookCards[1]);
    expect(bookCards[0]).not.toHaveClass('redBorder')

})

test ('non renderizza single comment test7', ()=>{
    render(<App />);

    const singleComment = screen.queryAllByTestId('single-comment')

    expect(singleComment).not.toBeInTheDocument;
    //oppure expect(singleComment).toHaveLength(0);
})

test ('verifica che cliccando su libro ci siano le recensioni test8', async ()=>{
    render (<App />);

    const bookCards = screen.getAllByTestId('card-img')

    fireEvent.click(bookCards[0]);

    const singleComment = await screen.findAllByTestId('single-comment')

    expect(singleComment).not.toHaveLength(0)
})