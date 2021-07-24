import { render, waitFor,fireEvent } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import HeadLinesPage from './HeadLinesPage';
import {mockResponse,filteredValue} from './mockData'

describe('Display List of Headlines',()=>{
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockResponse)
        })
      });
      
      afterEach(() => {
        jest.restoreAllMocks();
      });
    test('list gets rendered', async() => {
        const { getByText } = render(<HeadLinesPage />);
        await waitFor(() =>  expect(getByText(/Brazil vs Germany LIVE: Latest score, goals and updates from 2020 Olympics - The Independent/i)).toBeInTheDocument());
      });
});
describe('Display Error',()=>{
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            request: jest
        .fn()
        .mockRejectedValue(new Error('error'))
        })
      });
      
      afterEach(() => {
        jest.restoreAllMocks();
      });
    test('skeleton gets displayed', async() => {
        const { getAllByTestId } = render(<HeadLinesPage />);
        await waitFor(() =>  expect(getAllByTestId('skeleton').length).toEqual(10));
      });
})
describe('Search News',()=>{
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValueOnce(mockResponse)
          .mockResolvedValueOnce(filteredValue)
        })
      });
      
      afterEach(() => {
        jest.restoreAllMocks();
      });
      
      afterEach(() => {
        jest.restoreAllMocks();
      });
    test('search data get rendered', async() => {
        const { getByTestId,getByText} = render(<HeadLinesPage />);
        await waitFor(() =>  expect(getByText(/Brazil vs Germany LIVE: Latest score, goals and updates from 2020 Olympics - The Independent/i)).toBeInTheDocument());
        fireEvent.change(getByTestId('input-search'), {
            target: { value: 'covid' }
          });
          UserEvent.click(getByTestId('submit'))
       await waitFor(()=> expect(getByText(/Why You Shouldn't Expect a COVID Vaccine Booster Anytime Soon/i)).toBeInTheDocument());
      });
})
