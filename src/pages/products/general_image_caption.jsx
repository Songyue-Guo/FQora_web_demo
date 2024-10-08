import React, { useState } from 'react';
import { Grid,Stack, Card,Button, CardMedia, CardContent, Typography,IconButton, TextField, Container,Divider} from '@mui/material';
import MainCard from 'components/MainCard';
import gic1 from 'assets/images/products/general_image_caption/0.png'
import gic2 from "assets/images/products/general_image_caption/1.png"
import gic3 from "assets/images/products/general_image_caption/2.png"
import gic4 from "assets/images/products/general_image_caption/3.png"
import gic5 from "assets/images/products/general_image_caption/4.png"
import gic6 from "assets/images/products/general_image_caption/5.png"
import gic7 from "assets/images/products/general_image_caption/6.png"
import gic8 from "assets/images/products/general_image_caption/7.png"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import SelectableMediaCard from 'components/cards/SelectedMediaCard';
import { DollarOutlined } from '@ant-design/icons';
import ListItemCard from 'components/cards/ListItemCard';

// 模拟产品数据
const productData = [
  { id: 1, name: 'a very typical bus station', image: gic1 },
  { id: 2, name: '# of the sports team skates against sports team during their game .', image: gic2 },
  { id: 3, name: 'funny animals of the week , animal pictures', image: gic3 },
  { id: 4, name: 'celebrities start decorating for the christmas season lifestyle', image: gic4},
  { id: 5, name: 'heavy snow falls over a snow lined river .', image: gic5 },
  { id: 6, name: 'american football player looks downfield during the second half of a football game against sports team', image: gic6},
  { id: 7, name: 'functions of government : 1 . form a more perfect union', image: gic7},
  { id: 8, name: 'dunes lay the blueprint for the back nine .', image: gic8},
  
  // 
];

const informationItems = [
  {icon:'', text: {Label:"Dataset Name:", value: "General Image Caption Dataset"}, color : '#00796b' },
  {icon:'', text: {Label: "Dataset Size:", value : "8"}, color: "#00796b" },
  {icon:'', text: {label: "Dataset Field:", value : "General"} , color: "#00796b"},
  {icon:'', text: {label: "Data Type:", value : "Image-Caption Pairs" }, color: "#00796b"},
]

const qualityItems = [
  {icon:'', text: {Label:"Quantity Score:", value: "General Image Caption Dataset"}, color : '#00796b' },
  {icon:'', text: {Label: "CLIP Score:", value : "8"}, color: "#00796b" },
  {icon:'', text: {label: "Diversity Score:", value : "General"} , color: "#00796b"},
]


function GeneralImageCaptionProduct() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // 筛选产品
//   const filteredProducts = productData.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

const [selectedProducts, setSelectedProducts] = useState([]);

// 切换选中状态
const handleSelect = (id) => {
  setSelectedProducts((prevSelected) =>
    prevSelected.includes(id)
      ? prevSelected.filter((productId) => productId !== id)
      : [...prevSelected, id]
  );
  console.log(selectedIds);
};

const selectedIds = selectedProducts.join(',');

  return (
    <>
<MainCard title="General Dataset (Multimodal Dataset)" spacing={2} >  
<Grid container spacing={4}>
<Grid item spacing={0} xs={12} sm={6} md={6} lg={6}>
        <></>
        <ListItemCard title={'Dataset Information'} items={informationItems} />
    </Grid>
    <Grid item spacing={2} xs={12} sm={6} md={6} lg={6}>
        <Typography variant='h5'>Dataset Quality</Typography>
    </Grid>
    </Grid>
      <Container>
      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {productData.map((product) => (

          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <SelectableMediaCard product={product} onSelect={handleSelect} isSelected={selectedProducts.includes(product.id)} width={250} height={250}/>
          </Grid>
        ))}
        </Grid>

      </Container>
      
    </MainCard>   
    <Stack alignItems="center" spacing={4}>
        <AnimateButton>
          <Button component={Link} to={`price?selected_id=${selectedIds}`} variant="contained" color="primary" size="medium" startIcon={<DollarOutlined/>} >
            Compute Data Price
          </Button>
        </AnimateButton>
        </Stack>    
    </> 
  );
}

export default GeneralImageCaptionProduct;