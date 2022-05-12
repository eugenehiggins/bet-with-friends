import './App.scss';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Main from './component/main';
import {Button, CssBaseline, Grid} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <CssBaseline />
            <Router>
            <Header />
            <Grid container
                  spacing={2}
                  sx={{
                      marginTop: 0,
                      marginLeft: 0,
                  }}
            >
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Main />
                </Grid>
            </Grid>
            <div className='general-content'>
                {/*<Button variant="contained">"hello world</Button>*/}


            </div>
            </Router>
        </div>
        </ThemeProvider>
     );
}

export default App;
