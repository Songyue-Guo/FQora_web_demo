// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

// assets
import hkust from 'assets/images/users/UST_logo.svg';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
      <Stack alignItems="center" spacing={2.5}>
        <CardMedia component="img" image={hkust} sx={{ width: 112 }} />
        <Stack alignItems="center">
          <Typography variant="h5">HKUSTGZ MDI LAB</Typography>
        </Stack>
        <AnimateButton>
          <Button component={Link} target="_blank" href="https://mdi.hkust-gz.edu.cn/" variant="contained" color="success" size="small">
            Lab Website
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
}
