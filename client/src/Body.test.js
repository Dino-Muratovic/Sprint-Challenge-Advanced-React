import React from 'react';
import Body from './Body';
import { render } from '@testing-library/react';




test('if Body renders', () => {
   render(<Body/>);
})


test ('get elements by text', () => {
   //Arrange
   const { getByText } = render(<Body/>)


   //Act
   const pElement1 = getByText(/Name:/i);
   const pElement2 = getByText(/Player ID:/i);
   const pElement3 = getByText(/Country:/i);
   const pElement4 = getByText(/Searches:/i);

   //Assert
   expect(pElement1).toBeInTheDocument();
   expect(pElement2).toBeInTheDocument();
   expect(pElement3).toBeInTheDocument();
   expect(pElement4).toBeInTheDocument();
})


test ('on click Dark Mode', () => {
   const { getByTestId} = render(<Body/>)

   fireEvent.click(getByTestId(/button/i));
})

