import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Card, CardMedia, CardContent, Typography,IconButton} from '@mui/material';

export default function SelectableTextCard({ product, onSelect, isSelected, width, height}) {

    return (
      <Card
        onClick={() => onSelect(product.id)}
        sx={{
          border: isSelected ? '2px solid #40a9ff' : '2px solid white',
          transition: '0.3s',
          cursor: 'pointer',
          position: 'relative',
          width: width,
        }}
      >
       
        <CardContent style={{ overflowY: 'auto', padding: '16px', height: height}}>
          <Typography variant="h6">{product.name}</Typography>
        </CardContent>
  
        {/* 选中状态图标 */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: isSelected ? '#40a9ff' : 'grey',
          }}
        >
          {isSelected ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        </IconButton>
      </Card>
    );
  }