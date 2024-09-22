import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react'
 
function App() {
 
  const [x,setx] = useState(0);
  const [y,sety] = useState(0);
  const [z,setz] = useState(0);
  const [Add,setAdd] = useState("");
 
  const calcSum = (e) => {
    e.preventDefault()
    console.log(e);
 
    if(x===0 || y===0 || z===0)
      {
        alert("please enter a valid weight and height")
      }
       
      else
      {
        let Add = parseInt(x)*parseInt(y)*parseInt(z)/100;
        console.log(typeof(Add));
        setAdd(parseInt(Add))
      }
 
  }
 
  const handleClick = (e) => {
    setAdd(0);
    window.location.reload();
 
  }
 
  return (
    <>
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
 
    
     
    <div className="app">
       
      <div className='container  bg-yellow-300'>
        <div className='heading_text'>
          <h1 className='heading_one' >Simple Calculator</h1>
          <h2 className='heading_two'>Calculate your simple interest Easily</h2>
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>₹ {Add}</h3>
          <p className='total_amount_para'>Total simple interest</p>
          </div>
        </div>
        <form onSubmit={calcSum}>
 
        <div className='input_area'>
            <div className='input_field'>
            <TextField type="number" value={x || ""} onChange={(e) => setx(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField type="number" value={y || ""} onChange={(e) => sety(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField  type="number" value={z || ""} onChange={(e) => setz(e.target.value)} id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
            </div>
        </div>
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
          <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
          <Button className='btn_one'  onClick={handleClick}  variant="outlined">Reset</Button>
          </Stack>
        </div>
        </form>
 
      </div>      
    </div>
    </>
  );
}
 
export default App;