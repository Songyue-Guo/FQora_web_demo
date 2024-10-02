import React, { useState,useEffect } from 'react';
import { Grid,Stack,Button,CircularProgress,Typography, Container,Divider} from '@mui/material';
import MainCard from 'components/MainCard';
import gic1 from 'assets/images/products/general_image/0.png'
import gic2 from "assets/images/products/general_image/1.png"
import gic3 from "assets/images/products/general_image/2.png"
import gic4 from "assets/images/products/general_image/3.png"
import gic5 from "assets/images/products/general_image/4.png"
import gic6 from "assets/images/products/general_image/5.png"
import gic7 from "assets/images/products/general_image/6.png"
import gic8 from "assets/images/products/general_image/7.png"

import { Progress,Card, Col, Row, Statistic } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import SelectableMediaCard from 'components/cards/SelectedMediaCard';
import { DollarOutlined, ArrowUpOutlined,RubyOutlined,DollarCircleFilled } from '@ant-design/icons';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

// 模拟产品数据
const productData = [
  { id: 1, image: gic1,hogScore:0.3308, quantity: 1/8, diversity: 1/8+0.1, cost:12 },
  { id: 2, image: gic2,hogScore:0.167, quantity: 1/8, diversity: 1/8-0.04, cost:6  },
  { id: 3, image: gic3,hogScore: 0.2683, quantity: 1/8, diversity: 1/8, cost:10  },
  { id: 4, image: gic4,hogScore:0.314, quantity: 1/8, diversity: 1/8, cost:12 },
  { id: 5, image: gic5,hogScore:0.2338, quantity: 1/8, diversity: 1/8-0.02, cost:8  },
  { id: 6, image: gic6,hogScore:0.4219, quantity: 1/8, diversity: 1/8, cost:13 },
  { id: 7, image: gic7,hogScore:0.292, quantity: 1/8, diversity: 1/8+0.04, cost:9 },
  { id: 8, image: gic8,hogScore:0.3027, quantity: 1/8, diversity: 1/8, cost:10 },
  // 
];
// Radar chart data structure
const defaultRadarData = [
    { subject: 'Buyers', A: 33, B: 33, fullMark: 100 },
    { subject: 'Sellers', A: 33, B: 33, fullMark: 100 },
    { subject: 'Platform', A: 33, B: 33, fullMark: 100 },
  ];
 
const totalCost = 80 ;
const totalHogScore = 2.3305 ;
const ratio = 0.1 ;
const weight = [0.5,0.3,0.2]

function GeneralImageProduct() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // 筛选产品
//   const filteredProducts = productData.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

const [selectedProducts, setSelectedProducts] = useState([]);
const [searchParams] = useSearchParams();
const [filterSelectedProducts, setFilterSelectedProducts] = useState([]);
const [qualityRatings, setQualityRatings] = useState({
    quantity: 0,
    hogScore: 0,
    diversity: 0,
    price: 0,
  });
  const [radarData, setRadarData] = useState(defaultRadarData);
  const [priceProduct, setPriceProduct] = useState(0);

useEffect(() => {
  const selectedIdStr = searchParams.get('selected_id');
  const selectedId = selectedIdStr ? selectedIdStr.split(',').map(id => parseInt(id, 10)) : [];

  const filteredProducts = productData.filter(product => selectedId.includes(product.id));
  setFilterSelectedProducts(filteredProducts);
  setSelectedProducts(filteredProducts.map(product =>product.id));

  // Dynamically update ratings based on selected products
  if (filteredProducts.length > 0) {
    const totalQuantity = filteredProducts.reduce((acc, cur) => acc + cur.quantity, 0);
    const totalhogScore = filteredProducts.reduce((acc, cur) => acc + cur.hogScore, 0);
    const totalDiversity = filteredProducts.reduce((acc, cur) => acc + cur.diversity, 0);
    const totalPrice = filteredProducts.reduce((acc, cur) => acc + cur.price, 0);
    const totalCost = filteredProducts.reduce((acc, cur) => acc + cur.cost, 0);

    setQualityRatings({
      quantity: (totalQuantity * 100).toFixed(2),
      hogScore: (totalhogScore * 100 / totalHogScore).toFixed(2) ,
      diversity: (totalDiversity * 100).toFixed(2),
      price: totalPrice, // Could calculate an average or total price
    });
    const scoreList = [(totalQuantity * 100).toFixed(2),(totalhogScore *100).toFixed(2)/totalHogScore,(totalDiversity *100).toFixed(2)];
    const weightedScore = weight.reduce((acc,num,index) => acc + num * scoreList[index], 0);
    const price = totalCost * (2+ratio) + ratio * weightedScore;
    const productUtility =  (totalCost + weightedScore) * 2;
    const buyerUtility = productUtility - price;
    const arbiterUtility =  totalCost;
    const sellerUtility = price - totalCost;
    setPriceProduct(price);
    // Update radar chart data for benefit distribution
    setRadarData([
        { subject: 'Buyer', A: buyerUtility, fullMark: (totalCost + weightedScore) * 3 },
        { subject: 'Seller', A: sellerUtility, fullMark: (totalCost + weightedScore) * 3 },
        { subject: 'Platform/', A: arbiterUtility, fullMark: (totalCost + weightedScore) * 3 },
      ]);
}

}, [searchParams]);

useEffect(() => {
    const filteredProducts = productData.filter(product => selectedProducts.includes(product.id));
    setFilterSelectedProducts((preFilterProduct) => filteredProducts? filteredProducts:preFilterProduct);
    console.log(filteredProducts)
    // Dynamically update ratings based on selected products
    if (filteredProducts.length > 0) {
      const totalQuantity = filteredProducts.reduce((acc, cur) => acc + cur.quantity, 0);
      const totalhogScore = filteredProducts.reduce((acc, cur) => acc + cur.hogScore, 0);
      const totalDiversity = filteredProducts.reduce((acc, cur) => acc + cur.diversity, 0);
      const totalPrice = filteredProducts.reduce((acc, cur) => acc + cur.cost, 0);
      const totalCost = filteredProducts.reduce((acc, cur) => acc + cur.cost, 0);

      setQualityRatings({
        quantity: (totalQuantity * 100).toFixed(2),
        hogScore: (totalhogScore * 100 / totalHogScore).toFixed(2) ,
        diversity: (totalDiversity * 100).toFixed(2),
        price: totalPrice, // Could calculate an average or total price
      });
      const scoreList = [(totalQuantity * 100).toFixed(2),(totalhogScore *100).toFixed(2)/totalHogScore,(totalDiversity *100).toFixed(2)];
      const weightedScore = weight.reduce((acc,num,index) => acc + num * scoreList[index], 0);
      const price = totalCost * (2+ratio) + ratio * weightedScore;
      const productUtility =  (totalCost + weightedScore) * 1.5;
      const buyerUtility = productUtility - price;
      const arbiterUtility =  totalCost;
      const sellerUtility = price - totalCost;
      setPriceProduct(price);

      // Update radar chart data for benefit distribution
      setRadarData([
        { subject: 'Buyer', A: buyerUtility, fullMark: (totalCost + weightedScore) * 3 },
        { subject: 'Seller', A: sellerUtility, fullMark: (totalCost + weightedScore) * 3 },
        { subject: 'Platform/', A: arbiterUtility, fullMark: (totalCost + weightedScore) * 3 },
      ]);

  }
  if (filteredProducts.length == 0){
    setQualityRatings({
        quantity: 0,
        hogScore: 0,
        diversity: 0,
    });
    setPriceProduct(0);
    setRadarData([
        { subject: 'Buyer', A:0, fullMark: 100 },
        { subject: 'Seller', A: 0, fullMark: 100 },
        { subject: 'Platform/', A: 0, fullMark: 100},
      ]);
  }
  }, [selectedProducts]);



// 切换选中状态
const handleSelect = (id) => {
  setSelectedProducts((prevSelected) =>
    prevSelected.includes(id)
      ? prevSelected.filter((productId) => productId !== id)
      : [...prevSelected, id]
  );
};

  return (
    <>
<MainCard title="Pricing of General Image Caption Dataset" spacing={2} >  
<Grid container spacing={4}>
<Divider/> 
<Grid item  xs={12} sm={6} md={6} lg={6}>
        <></>
        
    </Grid>

    </Grid>
      <Container>
      <Grid container spacing={2}>
            
              <Typography variant="h4">Quality Metrics:</Typography>

              <Grid item xs={12} sm={6} md={2} lg={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h6">Quantity Score</Typography>
                <Progress type="circle" percent={qualityRatings.quantity } strokeColor={"#91d5ff"} format={(percent)=> `${percent}`} />
                {/* <CircularWithPath size={80} variant="determinate" value={(qualityRatings.quantity) * 100} /> */}
                {/* <Typography>{qualityRatings.quantity.toFixed(1)}/100</Typography> */}
            
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>HOG Score</Typography>
                <Progress type="circle" percent={qualityRatings.hogScore} strokeColor={"#52c41a"} format={(percent)=> `${percent}`}/>
                {/* <CircularWithPath size={80} showLabel variant="determinate" value={(qualityRatings.hogScore) * 100} /> */}
                {/* <Typography>{qualityRatings.hogScore.toFixed(1)}/100</Typography> */}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>Diversity Score</Typography>
                <Progress type="circle" percent={qualityRatings.diversity} strokeColor={"#ffd666"} format={(percent)=> `${percent}`}/>
                {/* <CircularProgress size={80} variant="determinate" value={(qualityRatings.diversity) * 100} /> */}
                {/* <Typography>{qualityRatings.diversity.toFixed(1)}/100</Typography> */}
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            {/* Price Section */}
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <Typography variant="h4">Price:</Typography>
              <Row gutter={16}>
                <Col span={16}>
                    <Card bordered={false}   style={{ 
          height: 250,  // Adjust height
          display: 'flex',            // Use flexbox to center content
          justifyContent: 'center',   // Center horizontally
          alignItems: 'center',       // Center vertically
          padding: '16px' 
        }} >
                        <Statistic
                        title=""
                        value={priceProduct}
                        precision={2}
                        valueStyle={{
                            color: '#3f8600',
                            fontSize: "32pt"
                        }}
                        prefix={<RubyOutlined />}
                        suffix=""
                        />
                        
                            <Stack alignItems="center" spacing={4}>
        <AnimateButton>
          <Button component={Link} to='/product/general/image_caption/price' variant="contained" color="success" size="medium" startIcon={<DollarOutlined/>} >
            Buy 
          </Button>
        </AnimateButton>
        </Stack>    
                    </Card>
                    </Col>
                    </Row>
              </Grid>
              {/* Radar Chart for Benefits */}
              <Grid item xs={12} sm={6} md={6} lg={3} >
              <Typography variant="h4">Utility Allocation:</Typography>
              <RadarChart cx={200} cy={200} outerRadius={150} width={500} height={300} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Utility" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
              </Grid>
          </Grid>
          <Typography variant='h5'>Selected Data of General Image Caption</Typography>
      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {productData.map((product) => (

          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <SelectableMediaCard product={product} onSelect={handleSelect} isSelected={selectedProducts.includes(product.id)} />
          </Grid>
        ))}
        </Grid>

      </Container>
      
    </MainCard>   
    <Stack alignItems="center" spacing={4}>
        <AnimateButton>
          <Button component={Link} to='/product/general/image_caption/price' variant="contained" color="primary" size="medium" startIcon={<DollarOutlined/>} >
            Compute Data Price
          </Button>
        </AnimateButton>
        </Stack>    
    </> 
  );
}

export default GeneralImageProduct;