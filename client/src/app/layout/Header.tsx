import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]
const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]
const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}
interface Props {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean
}
export default function Header({ setDarkMode, darkMode }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(event.target.checked);
    };
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography component={NavLink} to='/' sx={navStyles} variant='h6'>
                        RE-STORE
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleChange}
                    />
                </Box>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent='4' color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
