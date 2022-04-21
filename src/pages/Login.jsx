import Helmet from "../components/Helmet";
import Grid from "../components/Grid"
import { Button,  Paper, Typography } from "@material-ui/core";
import iconlogon from "../components/icons/login.jpg"
import TextField from '@material-ui/core/TextField';

import { Box } from "@material-ui/core";
import { Link } from 'react-router-dom';


// const styles = {
//       paperContainer: {
//           backgroundImage: `url(${ttu_main})`,
            
//       },

      
//   };



const Login = (props) => {
      return (
           
            <Paper  className="container-fluid homepage-bgimage" style={{height: "720px"}} >
                  <Helmet title="Login page">
                        
                        <div style={{margin: "0%"}}>

                              <Grid col={1} gap={20}> 
                                    <div style={{textAlign: "center"}}>
                                    <Typography style={{marginTop: "7%", fontSize:"40px", marginBottom:"1%", color: "white", fontWeight: "bold"}} >IOT SMART PARKING</Typography>
                                    <Typography style={{marginTop: "1%", fontSize:"10px", marginBottom:"5%", color: "white"}} >____________________________________________________________________________________</Typography>
                                    </div>
                              </Grid>

            
                              <Box style={{justifyContent: "center", display: "flex"}}>
                                    <Paper  style={{backgroundColor: "white", height: "370px", width: "22%", borderRadius: "10px"}}> 
                                          <div>                       
                                                      <Typography style={{textAlign: "center", marginTop: "15%", fontSize:"30px", marginBottom:"1%", color: "black",fontWeight: "bold"}} >Login</Typography>
                                                      <Typography style={{textAlign: "center", marginTop: "1%", fontSize:"10px", marginBottom:"5%", color: "black"}} >_________________________________________________</Typography>                                         
                                          </div>

                                          <div style={{textAlign: "center"}} >

                                                <TextField  id="email"
                                                      label="Email"
                                                      // defaultValue="Hello World"
                                                      // helperText="Incorrect entry." 
                                                      placeholder="Typing Your Email"
                                                      
                                                      style={{width:"260px", marginTop: "5%", }}
                                                      variant="outlined"
                                                
                                                      type="password" 
                                                ></TextField>
                                                      
                                                <TextField
                                                      label="Password"
                                                      type="password"     
                                                      // defaultValue="Hello World"
                                                      // helperText="Incorrect entry." 
                                                      placeholder="Typing Your Password"
                                                      variant = "outlined"   
                                                      style={{ width: "260px",  marginTop: "5%"}}
                                                ></TextField>

                                          
                                                <div style={{marginTop: "5%"}}>
                                                      <form  onsubmit="console.log('You clicked submit.'); return false">
                                                      <button style={{width: "260px", fontSize:"16px", backgroundColor: "#629CF4", color: "black", borderColor: "white", fontFamily: "monospace"}} type="submit" >SIGN IN</button>
                                                      </form>
                                                </div>
                                          
                                                <div style={{marginTop: "12%"}}>
                                                           <Link to = "/Register"><h3 style={{fontFamily: "cursive", cursor: "pointer", color: "black", textDecoration: "underline"}}>Don't have an account</h3></Link> 
                                                </div>

                                                <div style={{marginTop: "5%"}}>
                                                           <Link to = "/Dashboard"><h3 style={{fontFamily: "cursive", cursor: "pointer", color: "black", textDecoration: "underline"}}></h3></Link> 
                                                </div>
                                                                        
                                          </div>

                                    
                        
                                    </Paper>    
                              </Box>
                        

                        </div>
            
                  </Helmet>
            </Paper>   
            );
    };

export default Login; 