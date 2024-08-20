import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditCar from '../Pages/EditCar';
import carService from '../Services/CarService';
import Car from '../Types/Car';
import '@testing-library/jest-dom/extend-expect';


jest.mock('../Services/CarService');


describe('EditCar Component', () => {
  const mockCar: Car = { id: '1', brand:'Volkswagen',color:'red',name: 'Polo',type:'hatchback',description:'A 5 Seater Hatchback',price:'75600',year:'2023',image:'xskmx'}

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state initially', () => {
    (carService.getCarById as jest.Mock).mockResolvedValueOnce({ data: mockCar });

    render(
      <Router>
        <EditCar />
      </Router>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('fetches and displays car data', async () => {
    (carService.getCarById as jest.Mock).mockResolvedValueOnce({ data: mockCar });

    render(
      <Router>
        <EditCar />
      </Router>
    );

    await waitFor(() => expect(screen.queryByText(/Loading.../i)).toBeNull());
    expect(screen.getByText(/Edit Car/i)).toBeInTheDocument();
  });

  test('handles save operation and navigates', async () => {
    (carService.getCarById as jest.Mock).mockResolvedValueOnce({ data: mockCar });
    (carService.updateCar as jest.Mock).mockResolvedValueOnce({});

    render(
      <Router>
        <EditCar />
      </Router>
    );

    await waitFor(() => expect(screen.queryByText(/Loading.../i)).toBeNull());

    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);
  });
  });