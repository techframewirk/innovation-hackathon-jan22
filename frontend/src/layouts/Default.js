import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';
import Logo from "../logo.png";

import Translation from "../components/Translation";



export default function Default(props) {

    const { t } = useTranslation();
    const { mainActionComponent, mainLeftActionComponent } = props
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => window.location = "/"}
                    >
                        <img src={Logo} width="100" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div style={{
                padding: 10,
                marginBottom: 100
            }}>
                {props.children}
            </div>

            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    {mainLeftActionComponent}
                    {mainActionComponent}
                    <Box sx={{ flexGrow: 1 }} />
                    <Translation />
                </Toolbar>
            </AppBar>
        </Box>
    );
}