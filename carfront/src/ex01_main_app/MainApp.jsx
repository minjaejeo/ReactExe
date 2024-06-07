// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, Typography } from '@mui/matertial';
import '../App.css';

function MainApp(){
    return(
        <div className='App'>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'>
                        Carshop
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainApp;