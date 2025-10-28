

import React, { useState, useEffect } from 'react';
import { Box, TextField, MenuItem, Autocomplete, Grid, Button, Collapse, Switch, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDebounce } from '../../hooks';

const FilterInput = ({ filter, value, onChange }) => {
    const [inputValue, setInputValue] = useState(value || '');
    const debouncedInputValue = useDebounce(inputValue, 500);

    useEffect(() => {
        if (filter.type === 'text' || filter.type === 'number' || filter.type === 'search') {
            onChange(filter.name, debouncedInputValue);
        }
    }, [debouncedInputValue, filter.type, filter.name, onChange]);

    const handleImmediateChange = (newValue) => {
        if (filter.type !== 'text' && filter.type !== 'number' && filter.type !== 'search') {
            onChange(filter.name, newValue);
        }
    };

    switch (filter.type) {
        case 'text':
        case 'number':
            return (
                <TextField
                    label={filter.label}
                    type={filter.type}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
            );
        case 'search':
            return (
                <TextField
                    label={filter.label}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    variant="outlined"
                    fullWidth
                    InputProps={{ endAdornment: <SearchIcon color="action" /> }}
                />
            );
        case 'date':
            return (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label={filter.label}
                        value={value || null}
                        onChange={handleImmediateChange}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                </LocalizationProvider>
            );
        case 'select':
            return (
                <TextField
                    select
                    label={filter.label}
                    value={value || ''}
                    onChange={(e) => handleImmediateChange(e.target.value)}
                    variant="outlined"
                    fullWidth
                >
                    {filter.options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            );
        case 'autocomplete':
            return (
                <Autocomplete
                    options={filter.options || []}
                    getOptionLabel={(option) => option.label || ''}
                    value={value || null}
                    onChange={(event, newValue) => handleImmediateChange(newValue)}
                    renderInput={(params) => <TextField {...params} label={filter.label} />}
                    // Add fetchOptions logic here if needed
                />
            );
        case 'switch':
            return (
                <FormControlLabel
                    control={<Switch checked={value || false} onChange={(e) => handleImmediateChange(e.target.checked)} name={filter.name} />}
                    label={filter.label}
                />
            );
        default:
            return null;
    }
};

export const FilterBar = ({ filterOptions, filters, onFilterChange }) => {
    const [showFilters, setShowFilters] = useState(true);

    return (
        <Box sx={{ mb: 3 }}>
            <Button onClick={() => setShowFilters(!showFilters)} sx={{ mb: 2 }}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <Collapse in={showFilters}>
                <Grid container spacing={2} alignItems="center">
                    {filterOptions.map((filter) => (
                        <Grid size={{ xs:12, sm:6, md:4, lg:3, }} key={filter.name}>
                            <FilterInput
                                filter={filter}
                                value={filters[filter.name]}
                                onChange={onFilterChange}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </Box>
    );
};

