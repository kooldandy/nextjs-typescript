import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  beforeEach(() =>{
    render(<Home />);
  })
  
  afterEach(() => {
    cleanup();
  });

  it('renders the heading H1', () =>{
    const h1 = screen.getByText('SAURABH GHOSH');
    expect(h1).toBeInTheDocument()
  })

  it('renders the heading H2', () =>{
    const h2 = screen.getByText("I'm");

    expect(h2).toBeInTheDocument()
  })
})