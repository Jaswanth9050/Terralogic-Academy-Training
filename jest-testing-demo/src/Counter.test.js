import {render,screen,fireEvent} from '@testing-library/react'
import Counter from "./Counter"

test("Count-Value",()=>{
    render(<Counter/>);
    const countText=screen.getByTestId("count-value")
    expect(countText).toHaveTextContent("Count:0")
})
test("Incremet-Count-Value",()=>{
    render(<Counter/>);
    const button=screen.getByTestId('increment-btn')
    fireEvent.click(button)
    const countText=screen.getByTestId("count-value")
    expect(countText).toHaveTextContent("Count:1")
})
test("decrement-Count-Value",()=>{
    render(<Counter/>);
    const button=screen.getByTestId('decrement-btn')
    fireEvent.click(button)
    const countText=screen.getByTestId("count-value")
    expect(countText).toHaveTextContent("Count:-1")
})