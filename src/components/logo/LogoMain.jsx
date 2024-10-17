// material-ui
import { useTheme } from '@mui/material/styles';





import logo from 'assets/images/logo.png';
 

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    
     
     
    <img src={logo} alt="FQora" width="100" />
     
     
  );
};

export default Logo;
