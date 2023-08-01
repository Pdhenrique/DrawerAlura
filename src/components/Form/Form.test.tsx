import React from 'react'
import Form  from './index'
import { render, screen } from '@testing-library/react'

test('should not add when the form is empty', () => {
    
    render(<Form/>)

    const input = screen.getByPlaceholderText('Enter participant names')
    const btn = screen.getByRole('button')


    expect(input).toBeInTheDocument()
    expect(btn).toBeDisabled()

})