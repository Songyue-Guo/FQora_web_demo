import React, { useState } from 'react';
import { Grid,Stack, Card,Button, CardMedia, CardContent, Typography,IconButton, TextField, Container,Divider} from '@mui/material';
import MainCard from 'components/MainCard';

import gic1 from 'assets/images/products/pathology/0.png'
import gic2 from "assets/images/products/pathology/1.png"
import gic3 from "assets/images/products/pathology/2.png"
import gic4 from "assets/images/products/pathology/3.png"
import gic5 from "assets/images/products/pathology/5.png"
import gic6 from "assets/images/products/pathology/6.png"
import gic7 from "assets/images/products/pathology/7.png"
import gic8 from "assets/images/products/pathology/9.png"

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import SelectableMediaCard from 'components/cards/SelectedMediaCard';
import { DollarOutlined } from '@ant-design/icons';
import ListItemCard from 'components/cards/ListItemCard';
import DatasetIcon from '@mui/icons-material/Dataset';
import NumbersIcon from '@mui/icons-material/Numbers';
import LaunchIcon from '@mui/icons-material/Launch';
import FilterIcon from '@mui/icons-material/Filter';

// 模拟产品数据
const productData = [
  { id: 1, name: 'Peritoneum, Day 4 These two biopsies (1 & 2) were taken from the same patient. What is your DailyDx of each of these peritoneal biopsies? What other finding is most likely to be present in this patient? Answers & quick facts tomorrow! UMichPath SurgPath', image: gic1,clipScore:0.728, quantity: 1/8, diversity: 1/8+0.1, cost:24  },
  { id: 2, name: 'Teenager with a large hemispheric tumor."PNET"-like morphology, with Olig2 negative and ATRX loss. What is the most likely diagnosis?PathTwitter neuropath neurotwitter', image: gic2, clipScore:0.6772, quantity: 1/8, diversity: 1/8-0.04, cost:12  },
  { id: 3, name: 'Nephrogenic systemic fibrosis is a fibrotic disorder with deep involvement that goes down to the fascia.', image: gic3,clipScore: 0.8096, quantity: 1/8, diversity: 1/8 , cost:20},
  { id: 4, name: 'The breast tissue shows hyperplasia, which is a normal finding in pregnancy.', image: gic4,clipScore:0.795, quantity: 1/8, diversity: 1/8   , cost:23},
  { id: 5, name: '(1/6) MF in large cell transformation IHC stains show positivity for CD3 (top right), CD4 (bottom left) and CD5 (bottom right) in the large neoplastic cellshemepath lymsm PathTwitter hemepathMDA', image: gic5,clipScore:0.803, quantity: 1/8, diversity: 1/8-0.02  , cost:16 },
  { id: 6, name: 'Nondescript cells with hyperchromatic nuclei and pleomorphic nuclear features.', image: gic6,clipScore:0.4995, quantity: 1/8, diversity: 1/8, cost:27},
  { id: 7, name: 'No real architecture to the cells.', image: gic7,clipScore:0.4236, quantity: 1/8, diversity: 1/8+0.04, cost:18 },
  { id: 8, name: 'Orthokeratosis, parakeratosis, and neutrophils are seen in psoriasis.', image: gic8,clipScore:0.6074, quantity: 1/8, diversity: 1/8, cost:20},
  // 
];

const informationItems = [
  {icon:<DatasetIcon/>, text: {label:"Dataset Name:", value: "Pathology Dataset"}, color : 'primary' },
  {icon:<NumbersIcon/>, text: {label: "Dataset Size:", value : "8"}, color: "primary" },
  {icon:<LaunchIcon />, text: {label: "Dataset Field:", value : "Medical"} , color: "primary"},
  {icon:<FilterIcon />, text: {label: "Data Type:", value : "Image-Caption Pairs" }, color: "primary"},
]

const qualityItems = [
  {icon:<NumbersIcon/>, text: {label:"Quantity Score:", value: "Pathology Dataset"}, color : 'primary' },
  {icon: <FilterIcon />,text: {label: "CLIP Score", value : "8"}, color: "primary" },
  {icon:<LaunchIcon />, text: {label: "Diversity Score:", value : "Medical"} , color: "primary"}
]

function PathologyProduct() {
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
<MainCard title="Pathology Dataset (Multimodal Dataset)" spacing={2} >  
<Grid container spacing={4}>
<Grid item  xs={12} sm={6} md={6} lg={6}>
        <></>
        <ListItemCard title={'Dataset Information'} items={informationItems}/>
    </Grid>
    <Grid item  xs={12} sm={6} md={6} lg={6}>
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

export default PathologyProduct;