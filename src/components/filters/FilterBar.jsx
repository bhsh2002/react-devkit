

import React, { useState, useEffect } from 'react';
import { Box, TextField, MenuItem, Autocomplete, Grid, Button, Collapse, Switch, FormControlLabel, IconButton } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
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
                <TextField
                    label={filter.label}
                    type="date"
                    value={value || ''}
                    onChange={(e) => handleImmediateChange(e.target.value)}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
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
                    InputProps={{
                        endAdornment: value ? (
                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImmediateChange('');
                                }}
                                sx={{ mr: 2, visibility: 'visible' }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        ) : null
                    }}
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
                    loading={filter.loading || false}
                    loadingText={filter.loadingText || 'جاري التحميل...'}
                    noOptionsText={filter.noOptionsText || 'لا توجد خيارات'}
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

export const FilterBar = ({ filterOptions, filters, onFilterChange, defaultShowFilters = false }) => {
    const [showFilters, setShowFilters] = useState(defaultShowFilters);

    return (
        <Box sx={{ mb: 3 }}>
            <Button onClick={() => setShowFilters(!showFilters)} sx={{ mb: showFilters ? 0 : 2 }}>
                {showFilters ? 'إخفاء الفلاتر' : 'إظهار الفلاتر'}
            </Button>
            <Collapse in={showFilters}>
                <Grid container spacing={2} alignItems="center">
                    {filterOptions.map((filter) => {
                        const size =
                            filter.type === 'search'
                                ? { xs: 12, sm: 12, md: 6, lg: 6 }
                                : { xs: 12, sm: 6, md: 3, lg: 3 };

                        return (
                            <Grid size={size} key={filter.name}>
                                <FilterInput
                                    filter={filter}
                                    value={filters[filter.name]}
                                    onChange={onFilterChange}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Collapse>
        </Box>
    );
};

