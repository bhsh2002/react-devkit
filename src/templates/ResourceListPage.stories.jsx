


import React from 'react';

import { ResourceListPage } from './ResourceListPage';

import { Chip, Box, Button, Card, CardMedia, CardContent, Typography } from '@mui/material';



export default {

  title: 'Templates/ResourceListPage',

  component: ResourceListPage,

  tags: ['autodocs'],

};



// Mock Data & API

const mockColumns = [

  { field: 'id', headerName: 'ID', width: 90 },

  { field: 'name', headerName: 'Name', width: 150, sortable: true },

  { field: 'email', headerName: 'Email', width: 200 },

  {

    field: 'status',

    headerName: 'Status',

    width: 120,

    renderCell: ({ value }) => (

      <Chip label={value} color={value === 'Active' ? 'success' : 'error'} />

    ),

  },

];



const mockRows = [

  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },

  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },

  { id: 3, name: 'Peter Jones', email: 'peter@example.com', status: 'Active' },

  { id: 4, name: 'Susan Williams', email: 'susan@example.com', status: 'Active' },

  { id: 5, name: 'David Brown', email: 'david@example.com', status: 'Inactive' },

];



// A mock API that simulates a network request

const mockApi = {

  list: (params) => {

    console.log('Fetching data with params:', params);

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve({ 

          items: mockRows, 

          pagination: { total: 100 } // Simulate a total of 100 items for pagination

        });

      }, 1500);

    });

  },

};



// A mock API that always returns an error

const mockApiWithError = {

  list: () => {

    return new Promise((_, reject) => {

      setTimeout(() => {

        reject(new Error('Failed to fetch data from the server. Please try again later.'));

      }, 1500);

    });

  },

};





// Stories

export const Default = {

  args: {

    resourceName: 'Users',

    columns: mockColumns,

    api: mockApi,

    createPath: '/users/create',

  },

  name: 'Default (Loading and Success State)',

};



export const CustomCardView = {



  args: {



    ...Default.args,



    defaultView: 'card',



    renderCard: (row) => (



      <Card>



        <CardMedia



          component="img"



          height="140"



          image={`https://i.pravatar.cc/150?u=${row.id}`}



          alt={row.name}



        />



        <CardContent>



          <Typography gutterBottom variant="h5" component="div">



            {row.name}



          </Typography>



          <Typography variant="body2" color="text.secondary">



            {row.email}



          </Typography>



        </CardContent>



      </Card>



    ),



  },



  name: 'Custom Card View',



};



export const ErrorState = {

  args: {

    ...Default.args,

    api: mockApiWithError,

  },

  name: 'Error State',

};


