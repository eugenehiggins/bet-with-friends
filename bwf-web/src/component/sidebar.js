// import '../App.scss';

import {Button, Grid, TextField} from '@mui/material';
import {AccountCircle, Password} from '@mui/icons-material';
import {useState} from 'react';
import {auth} from '../services/user-services';
import {useAuth} from '../hooks/use-auth';

const Sidebar = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const { authData, setAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await auth({username, password})
        setAuth(data)
    }

    const logout = () => {
        console.log("logout")

        setAuth(null);
    }

    return (
      <div className="sidebar">
          {!authData ?
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item xs={1}>
                        <AccountCircle />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField id="username" label="Username" variant="standard"
                                   onChange={e => setUsername(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item xs={1}>
                        <Password />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField id="password" label="Paassword" variant="standard" type="password"
                                   onChange={e => setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>


                <Button color="primary" variant="contained" type="submit">Login</Button>
            </form>
          :
            <div>
                <p>{authData.user.username}</p>
                <Button color="primary" variant="contained"
                        type="submit"
                        onClick={() => logout()}
                >
                    Logout
                </Button>

            </div>
          }
      </div>
    )
}

export default Sidebar;