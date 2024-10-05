import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // 示例图标

const ListItemCard = ({ title, items }) => {
  return (
    <Card sx={{ maxWidth: 700, margin: '16px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item.icon && (
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText
                primary={
                  <Typography>
                    {item.text.label}{' '}
                    <Box
                      component="span"
                      sx={{
                
                        borderRadius: '8px',
                        padding: '2px 8px',
                        color: item.color,
                      }}
                    >
                      {item.text.value}
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ListItemCard;