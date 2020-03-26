import React, { useState } from 'React';
import { mockedProducts } from '../MockedData'

export interface Products {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}