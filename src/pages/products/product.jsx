import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, TextField, Container } from '@mui/material';
import MainCard from 'components/MainCard';
import pathology from 'assets/images/products/pathology/1.png'
import general_image_cover from 'assets/images/products/general_image/cover.png'
import general_image_caption_cover from 'assets/images/products/general_image_caption/cover.png'
import general_text_cover from 'assets/images/products/general_text/cover.jpg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// 模拟产品数据
const productData = [
  { id: 1, name: 'Pathology Multi-modal Dataset', image: pathology, type:'pathology' },
  { id: 2, name: 'General Image Dataset', image: general_image_cover, type:'general_image' },
  { id: 3, name: 'General Image-Caption Dataset', image: general_image_caption_cover ,type:'general_image_caption'},
  { id: 4, name: 'Genenral Text Dataset ', image: general_text_cover,type:'general_text' },
  // 
];

function ProductGallery() {
  const [searchTerm, setSearchTerm] = useState('');

  // 筛选产品
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<>
<Container>
  <MainCard title="Popular Data Product" sx={{ marginBottom: 4 }}>
      
      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {productData.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
      
    </MainCard>   
</Container>

<Container>
    <MainCard title="All Data Product">
     

      {/* 筛选输入框 */}
        <TextField
        label="search product"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
              <Link to={product.type} style={{ textDecoration: 'none' }}>
                <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                </CardContent>
                </Link>
              </Card>
          </Grid>
        ))}
        </Grid>
      
    </MainCard>  
    </Container>  
    </> 
  );
}

export default ProductGallery;