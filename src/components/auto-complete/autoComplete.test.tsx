import React from 'react'
import { config } from 'react-transition-group'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import AutoComplete, { IAutoCompleteProps } from './AutoComplete'

// npm test -- -t "auto"

// 透過這個設置能讓測試不被動畫效果干擾
config.disabled = true

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 }
]

const testProps: IAutoCompleteProps = {
  fetchSuggestions: (query) => {
    return testArray.filter((item) => item.value.includes(query))
  },
  onSelect: jest.fn(),
  placeholder: 'auto-complete'
}

let wrapper: RenderResult, inputNode: HTMLInputElement
describe('test auto complete component', () => {
  beforeEach(() => {
    wrapper = render(<AutoComplete {...testProps}></AutoComplete>)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
  })
  it('test basic AutoComplete behavior', () => {})
  it('should provide keyboard support', () => {})
  it('click outside should hide the dropdown', () => {})
  it('renderOption should generator template', () => {})
  it('async fetchSeggestions should work fine', () => {})
})
