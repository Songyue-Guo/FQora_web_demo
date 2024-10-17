// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

// assets
import logo from 'assets/images/logo.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
      <Stack alignItems="center" spacing={2.5}>
        <CardMedia component="img" image={logo} sx={{ width: 112 }} />
        <Stack alignItems="center">
            <Typography variant="h5"></Typography>
          {/* <Typography variant="h5">HKUSTGZ MDI LAB</Typography> */}
        </Stack>
        <AnimateButton>
        <Button component={Link} target="_blank" href="" variant="contained" color="success" size="small">
          {/* <Button component={Link} target="_blank" href="https://mdi.hkust-gz.edu.cn/" variant="contained" color="success" size="small"> */}
            Lab Website
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
}
