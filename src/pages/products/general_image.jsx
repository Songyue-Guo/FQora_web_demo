import React, { useState } from 'react';
import { Grid,Stack, Card,Button, CardMedia, CardContent, Typography,IconButton, TextField, Container,Divider} from '@mui/material';
import MainCard from 'components/MainCard';
import gic1 from 'assets/images/products/general_image/0.png'
import gic2 from "assets/images/products/general_image/1.png"
import gic3 from "assets/images/products/general_image/2.png"
import gic4 from "assets/images/products/general_image/3.png"
import gic5 from "assets/images/products/general_image/4.png"
import gic6 from "assets/images/products/general_image/5.png"
import gic7 from "assets/images/products/general_image/6.png"
import gic8 from "assets/images/products/general_image/7.png"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import SelectableMediaCard from 'components/cards/SelectedMediaCard';
import { DollarOutlined} from '@ant-design/icons';
import LaunchIcon from '@mui/icons-material/Launch';
import FilterIcon from '@mui/icons-material/Filter';
import  NumbersIcon from '@mui/icons-material/Numbers';
import ListItemCard from 'components/cards/ListItemCard';


// 模拟产品数据
const productData = [
  { id: 1, name: '', image: gic1 },
  { id: 2, name: '', image: gic2 },
  { id: 3, name: '', image: gic3 },
  { id: 4, name: '', image: gic4},
  { id: 5, name: '', image: gic5 },
  { id: 6, name: '', image: gic6},
  { id: 7, name: '', image: gic7 },
  { id: 8, name: '', image: gic8},
  // 
];

const informationItems = [
  {icon:'', text: {label: "Dataset Size:", value : "8"}, color: "#00796b" },
  {icon:'', text: {label: "Dataset Field:", value : "General"} , color: "#00796b"},
  {icon:'', text: {label: "Data Type:", value : "Image" }, color: "#00796b"},
]

const qualityItems = [
  {icon:<NumbersIcon/>, text: {label:"Quantity Score:", value: "Based on the number of the selected data samples"}, color : '#91d5ff' },
  {icon: <FilterIcon />,text: {label: "HOG Score: ", value : "Based on the overall CLIP Score of the selected data samples "}, color: "#52c41a" },
  {icon:<LaunchIcon />, text: {label: "Diversity Score: ", value : "Based on the overal label distribution of the selected data samples"} , color: "#ffd666"}
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
};
const selectedIds = selectedProducts.join(',');

  return (
    <>
  <Grid container spacing={2}>
<Grid item  xs={12} sm={4} md={4} lg={4}> 
        <ListItemCard title={'Dataset Information'} items={informationItems}/>
    </Grid>
    <Grid item  xs={12} sm={8} md={8} lg={8}> 
        <ListItemCard title={'Dataset Quality'} items={qualityItems}/>
    </Grid>
    </Grid>
<MainCard title="General Image Dataset" spacing={2} >  
      <Container>
      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {productData.map((product) => (

          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <SelectableMediaCard product={product} onSelect={handleSelect} isSelected={selectedProducts.includes(product.id)}/>
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