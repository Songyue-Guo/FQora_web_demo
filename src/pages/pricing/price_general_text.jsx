import React, { useState,useEffect } from 'react';
import { Grid,Stack,Button,CircularProgress,Typography, Container,Divider} from '@mui/material';
import MainCard from 'components/MainCard';
import gic1 from 'assets/images/products/general_image_caption/0.png'
import gic2 from "assets/images/products/general_image_caption/1.png"
import gic3 from "assets/images/products/general_image_caption/2.png"
import gic4 from "assets/images/products/general_image_caption/3.png"
import gic5 from "assets/images/products/general_image_caption/4.png"
import gic6 from "assets/images/products/general_image_caption/5.png"
import gic7 from "assets/images/products/general_image_caption/6.png"
import gic8 from "assets/images/products/general_image_caption/7.png"

import { Progress,Card, Col, Row, Statistic } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import SelectableTextCard from 'components/cards/SelectedTextCard';
import { DollarOutlined, ArrowUpOutlined,RubyOutlined,DollarCircleFilled } from '@ant-design/icons';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';


const data = [
  { id: 1, name: 'a very typical bus station', image: gic1,textScore:0.3308, quantity: 1/8, diversity: 1/8+0.1 },
  { id: 2, name: '# of the sports team skates against sports team during their game .', image: gic2, textScore:0.167, quantity: 1/8, diversity: 1/8-0.04 },
  { id: 3, name: 'funny animals of the week , animal pictures', image: gic3,textScore:   0.2683, quantity: 1/8, diversity: 1/8 },
  { id: 4, name: 'celebrities start decorating for the christmas season lifestyle', image: gic4,textScore:0.314, quantity: 1/8, diversity: 1/8},
  { id: 5, name: 'heavy snow falls over a snow lined river .', image: gic5,textScore:0.2338, quantity: 1/8, diversity: 1/8-0.02 },
  { id: 6, name: 'american football player looks downfield during the second half of a football game against sports team', image: gic6,textScore:0.4219, quantity: 1/8, diversity: 1/8},
  { id: 7, name: 'functions of government : 1 . form a more perfect union', image: gic7,textScore:0.292, quantity: 1/8, diversity: 1/8+0.04},
  { id: 8, name: 'dunes lay the blueprint for the back nine .', image: gic8,textScore:0.3027, quantity: 1/8, diversity: 1/8, },
  // 
];

const productData = [
    {name: "I rented I AM CURIOUS-YELLOW from my video store because of all the controversy that surrounded it when it was first released in 1967. I also heard that at first it was seized by U.S. customs if it ever tried to enter this country, therefore being a fan of films considered 'controversial' I really had to see this for myself.<br /><br />The plot is centered around a young Swedish drama student named Lena who wants to learn everything she can about life. In particular she wants to focus her attentions to making some sort of documentary on what the average Swede thought about certain political issues such as the Vietnam War and race issues in the United States. In between asking politicians and ordinary denizens of Stockholm about their opinions on politics, she has sex with her drama teacher, classmates, and married men.<br /><br />What kills me about I AM CURIOUS-YELLOW is that 40 years ago, this was considered pornographic. Really, the sex and nudity scenes are few and far between, even then it's not shot like some cheaply made porno. While my countrymen mind find it shocking, in reality sex and nudity are a major staple in Swedish cinema. Even Ingmar Bergman, arguably their answer to good old boy John Ford, had sex scenes in his films.<br /><br />I do commend the filmmakers for the fact that any sex shown in the film is shown for artistic purposes rather than just to shock people and make money to be shown in pornographic theaters in America. I AM CURIOUS-YELLOW is a good film for anyone wanting to study the meat and potatoes (no pun intended) of Swedish cinema. But really, this film doesn't have much of a plot.",
        textScore:0.3308, quantity: 1/8, diversity: 1/8+0.1, id: 1, cost:20}, 
    {name: "Zentropa has much in common with The Third Man, another noir-like film set among the rubble of postwar Europe. Like TTM, there is much inventive camera work. There is an innocent American who gets emotionally involved with a woman he doesn't really understand, and whose naivety is all the more striking in contrast with the natives.<br /><br />But I'd have to say that The Third Man has a more well-crafted storyline. Zentropa is a bit disjointed in this respect. Perhaps this is intentional: it is presented as a dream/nightmare, and making it too coherent would spoil the effect. <br /><br />This movie is unrelentingly grim--'noir' in more than one sense; one never sees the sun shine. Grim, but intriguing, and frightening."
        ,textScore:0.167, quantity: 1/8, diversity: 1/8-0.04 ,id: 2, cost:20},
    {name: "'I Am Curious: Yellow' is a risible and pretentious steaming pile. It doesn't matter what one's political views are because this film can hardly be taken seriously on any level. As for the claim that frontal male nudity is an automatic NC-17, that isn't true. I've seen R-rated films with male nudity. Granted, they only offer some fleeting views, but where are the R-rated films with gaping vulvas and flapping labia? Nowhere, because they don't exist. The same goes for those crappy cable shows: schlongs swinging in the breeze but not a clitoris in sight. And those pretentious indie movies like The Brown Bunny, in which we're treated to the site of Vincent Gallo's throbbing johnson, but not a trace of pink visible on Chloe Sevigny. Before crying (or implying) 'double-standard' in matters of nudity, the mentally obtuse should take into account one unavoidably obvious anatomical difference between men and women: there are no genitals on display when actresses appears nude, and the same cannot be said for a man. In fact, you generally won't see female genitals in an American film in anything short of porn or explicit erotica. This alleged double-standard is less a double standard than an admittedly depressing ability to come to terms culturally with the insides of women's bodies.", 
        textScore:0.3308, quantity: 1/8, diversity: 1/8+0.1, id: 3, cost:20}, 
    {name: " Zentropa is the most original movie I've seen in years. If you like unique thrillers that are influenced by film noir, then this is just the right cure for all of those Hollywood summer blockbusters clogging the theaters these days. Von Trier's follow-ups like Breaking the Waves have gotten more acclaim, but this is really his best work. It is flashy without being distracting and offers the perfect combination of suspense and dark humor. It's too bad he decided handheld cameras were the wave of the future. It's hard to say who talked him away from the style he exhibits here, but it's everyone's loss that he went into his heavily theoretical dogma direction instead."
        , textScore:0.314, quantity: 1/8, diversity: 1/8, id:4 , cost:20}, 
    {name: "If only to avoid making this type of film in the future. This film is interesting as an experiment but tells no cogent story.<br /><br />One might feel virtuous for sitting thru it because it touches on so many IMPORTANT issues but it does so without any discernable motive. The viewer comes away with no new perspectives (unless one comes up with one while one's mind wanders, as it will invariably do during this pointless film).<br /><br />One might better spend one's time staring out a window at a tree growing.<br /><br />"
        , textScore:0.2338, quantity: 1/8, diversity: 1/8-0.02, id:5, cost:20},
    {name: "Lars Von Trier is never backward in trying out new techniques. Some of them are very original while others are best forgotten.<br /><br />He depicts postwar Germany as a nightmarish train journey. With so many cities lying in ruins, Leo Kessler a young American of German descent feels obliged to help in their restoration. It is not a simple task as he quickly finds out.<br /><br />His uncle finds him a job as a night conductor on the Zentropa Railway Line. His job is to attend to the needs of the passengers. When the shoes are polished a chalk mark is made on the soles. A terrible argument ensues when a passenger's shoes are not chalked despite the fact they have been polished. There are many allusions to the German fanaticism of adherence to such stupid details.<br /><br />The railway journey is like an allegory representing man's procession through life with all its trials and tribulations. In one sequence Leo dashes through the back carriages to discover them filled with half-starved bodies appearing to have just escaped from Auschwitz . These images, horrible as they are, are fleeting as in a dream, each with its own terrible impact yet unconnected.<br /><br />At a station called Urmitz Leo jumps from the train with a parceled bomb. In view of many by-standers he connects the bomb to the underside of a carriage. He returns to his cabin and makes a connection to a time clock. Later he jumps from the train (at high speed) and lies in the cool grass on a river bank. Looking at the stars above he decides that his job is to build and not destroy. Subsequently as he sees the train approaching a giant bridge he runs at breakneck speed to board the train and stop the clock. If you care to analyse the situation it is a completely impossible task. Quite ridiculous in fact. It could only happen in a dream.<br /><br />It's strange how one remembers little details such as a row of cups hanging on hooks and rattling away with the swaying of the train.<br /><br />Despite the fact that this film is widely acclaimed, I prefer Lars Von Trier's later films (Breaking the Waves and The Idiots). The bomb scene described above really put me off. Perhaps I'm a realist.",
        textScore:0.4219, quantity: 1/8, diversity: 1/8, id:6, cost:20 },
    {name: "This film was probably inspired by Godard's Masculin, féminin and I urge you to see that film instead.<br /><br />The film has two strong elements and those are, (1) the realistic acting (2) the impressive, undeservedly good, photo. Apart from that, what strikes me most is the endless stream of silliness. Lena Nyman has to be most annoying actress in the world. She acts so stupid and with all the nudity in this film,...it's unattractive. Comparing to Godard's film, intellectuality has been replaced with stupidity. Without going too far on this subject, I would say that follows from the difference in ideals between the French and the Swedish society.<br /><br />A movie of its time, and place. 2/10."
        , textScore:0.292, quantity: 1/8, diversity: 1/8+0.04 ,id:7, cost:20},
    {name: "*Contains spoilers due to me having to describe some film techniques, so read at your own risk!*<br /><br />I loved this film. The use of tinting in some of the scenes makes it seem like an old photograph come to life. I also enjoyed the projection of people on a back screen. For instance, in one scene, Leopold calls his wife and she is projected behind him rather than in a typical split screen. Her face is huge in the back and Leo's is in the foreground.<br /><br />One of the best uses of this is when the young boys kill the Ravensteins on the train, a scene shot in an almost political poster style, with facial close ups. It reminded me of Battleship Potemkin, that intense constant style coupled with the spray of red to convey tons of horror without much gore. Same with the scene when Katharina finds her father dead in the bathtub...you can only see the red water on the side. It is one of the things I love about Von Trier, his understatement of horror, which ends up making it all the more creepy.<br /><br />The use of text in the film was unique, like when Leo's character is pushed by the word, 'Werewolf.' I have never seen anything like that in a film.<br /><br />The use of black comedy in this film was well done. Ernst-Hugo Järegård is great as Leo's uncle. It brings up the snickers I got from his role in the Kingdom (Riget.) This humor makes the plotline of absurd anal retentiveness of train conductors against the terrible backdrop of WW2 and all the chaos, easier to take. It reminds me of Riget in the way the hospital administrator is trying to maintain a normalcy at the end of part one when everything is going crazy. It shows that some people are truly oblivious to the awful things happening around them. Yet some people, like Leo, are tuned in, but do nothing positive about it.<br /><br />The voice over, done expertly well by Max von Sydow, is amusing too. It draws you into the story and makes you jump into Leo's head, which at times is a scary place to be.<br /><br />The movie brings up the point that one is a coward if they don't choose a side. I see the same idea used in Dancer in the Dark, where Bjork's character doesn't speak up for herself and ends up being her own destruction. Actually, at one time, Von Trier seemed anti-woman to me, by making Breaking the Waves and Dancer, but now I know his male characters don't fare well either! I found myself at the same place during the end of Dancer, when you seriously want the main character to rethink their actions, but of course, they never do!"
        , textScore:0.292, quantity: 1/8, diversity: 1/8+0.04 ,id:8, cost:20}

]; // 
// Radar chart data structure
const defaultRadarData = [
    { subject: 'Buyers', A: 33, B: 33, fullMark: 100 },
    { subject: 'Sellers', A: 33, B: 33, fullMark: 100 },
    { subject: 'Platform', A: 33, B: 33, fullMark: 100 },
  ];
 

const totalTextScore = 2.3305 ;
const ratio = 0.1 ;
const weight = [0.5,0.3,0.2]

function GeneralImageCaptionProduct() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // 
//   const filteredProducts = productData.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

const [selectedProducts, setSelectedProducts] = useState([]);
const [searchParams] = useSearchParams();
const [filterSelectedProducts, setFilterSelectedProducts] = useState([]);
const [qualityRatings, setQualityRatings] = useState({
    quantity: 0,
    textScore: 0,
    diversity: 0,
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
    const totaltextScore = filteredProducts.reduce((acc, cur) => acc + cur.textScore, 0);
    const totalDiversity = filteredProducts.reduce((acc, cur) => acc + cur.diversity, 0);
    const totalCost = filteredProducts.reduce((acc, cur) => acc + cur.cost, 0);

    setQualityRatings({
      quantity: totalQuantity ,
      textScore: totaltextScore ,
      diversity: totalDiversity,
      
    });

    // Update radar chart data for benefit distribution
    setRadarData([
      { subject: 'Buyer', A: 31, fullMark: 100 },
      { subject: 'Seller', A: 34, fullMark: 100 },
      { subject: 'Platform', A: 35, fullMark: 100 },
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
      const totaltextScore = filteredProducts.reduce((acc, cur) => acc + cur.textScore, 0);
      const totalDiversity = filteredProducts.reduce((acc, cur) => acc + cur.diversity, 0);
      const totalCost = filteredProducts.reduce((acc, cur) => acc + cur.cost, 0);

      setQualityRatings({
        quantity: (totalQuantity * 100).toFixed(2) ,
        textScore: (totaltextScore *100/totalTextScore).toFixed(2) ,
        diversity: (totalDiversity *100).toFixed(2),
      });
      const scoreList = [(totalQuantity * 100).toFixed(2),(totaltextScore *100).toFixed(2)/totalTextScore,(totalDiversity *100).toFixed(2)];
      const weightedScore = weight.reduce((acc,num,index) => acc + num * scoreList[index], 0);
      const price = totalCost * (2+ratio) + ratio * weightedScore
      const productUtility =  (totalCost + weightedScore) * 2
      const buyerUtility = productUtility - price
      const arbiterUtility =  totalCost
      const sellerUtility = price - totalCost
      setPriceProduct(price)
      // Update radar chart data for utility distribution
      setRadarData([
        { subject: 'Buyer', A: buyerUtility, fullMark: (totalCost + weightedScore) * 3 },
        { subject: 'Seller', A: sellerUtility, fullMark: (totalCost + weightedScore) * 3 },
        { subject: 'Platform/', A: arbiterUtility, fullMark: (totalCost + weightedScore) * 3 },
      ]);
  }
  if (filteredProducts.length == 0){
    setQualityRatings({
        quantity: 0,
        textScore: 0,
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
<MainCard title="Pricing of IMDB Dataset" spacing={2} >  
<Grid container spacing={4}>
<Divider/> 
<Grid item  xs={12} sm={6} md={6} lg={6}>
        <></>
        
    </Grid>

    </Grid>
      <Container>
      <Grid container spacing={2}>
            
              <Typography variant="h4">Quality Metrics:</Typography>

              <Grid item xs={12} sm={6} md={4} lg={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h6">Quantity Score</Typography>
                <Progress type="circle" percent={qualityRatings.quantity } strokeColor={"#91d5ff"} format={(percent)=> `${percent}`} />
                {/* <CircularWithPath size={80} variant="determinate" value={(qualityRatings.quantity) * 100} /> */}
                {/* <Typography>{qualityRatings.quantity.toFixed(1)}/100</Typography> */}
            
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>Text Score</Typography>
                <Progress type="circle" percent={qualityRatings.textScore} strokeColor={"#52c41a"} format={(percent)=> `${percent}`}/>
                {/* <CircularWithPath size={80} showLabel variant="determinate" value={(qualityRatings.textScore) * 100} /> */}
                {/* <Typography>{qualityRatings.textScore.toFixed(1)}/100</Typography> */}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
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
          <Typography variant='h5'>Selected Data of IMDB Dataset </Typography>
      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {productData.map((product) => (

          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <SelectableTextCard product={product} onSelect={handleSelect} isSelected={selectedProducts.includes(product.id)} width={250} height={250}/>
          </Grid>
        ))}
        </Grid>

      </Container>
      
    </MainCard>   
  
    </> 
  );
}

export default GeneralImageCaptionProduct;