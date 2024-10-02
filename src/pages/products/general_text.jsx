import React, { useState } from 'react';
import { Grid,Stack, Card,Button, CardMedia, CardContent, Typography,IconButton, TextField, Container,Divider} from '@mui/material';
import MainCard from 'components/MainCard';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import SelectableTextCard from 'components/cards/SelectedTextCard';
import { DollarOutlined } from '@ant-design/icons';


const data = [
    {name: "I rented I AM CURIOUS-YELLOW from my video store because of all the controversy that surrounded it when it was first released in 1967. I also heard that at first it was seized by U.S. customs if it ever tried to enter this country, therefore being a fan of films considered 'controversial' I really had to see this for myself.<br /><br />The plot is centered around a young Swedish drama student named Lena who wants to learn everything she can about life. In particular she wants to focus her attentions to making some sort of documentary on what the average Swede thought about certain political issues such as the Vietnam War and race issues in the United States. In between asking politicians and ordinary denizens of Stockholm about their opinions on politics, she has sex with her drama teacher, classmates, and married men.<br /><br />What kills me about I AM CURIOUS-YELLOW is that 40 years ago, this was considered pornographic. Really, the sex and nudity scenes are few and far between, even then it's not shot like some cheaply made porno. While my countrymen mind find it shocking, in reality sex and nudity are a major staple in Swedish cinema. Even Ingmar Bergman, arguably their answer to good old boy John Ford, had sex scenes in his films.<br /><br />I do commend the filmmakers for the fact that any sex shown in the film is shown for artistic purposes rather than just to shock people and make money to be shown in pornographic theaters in America. I AM CURIOUS-YELLOW is a good film for anyone wanting to study the meat and potatoes (no pun intended) of Swedish cinema. But really, this film doesn't have much of a plot.",id: 1}, 
    {name: "Zentropa has much in common with The Third Man, another noir-like film set among the rubble of postwar Europe. Like TTM, there is much inventive camera work. There is an innocent American who gets emotionally involved with a woman he doesn't really understand, and whose naivety is all the more striking in contrast with the natives.<br /><br />But I'd have to say that The Third Man has a more well-crafted storyline. Zentropa is a bit disjointed in this respect. Perhaps this is intentional: it is presented as a dream/nightmare, and making it too coherent would spoil the effect. <br /><br />This movie is unrelentingly grim--'noir' in more than one sense; one never sees the sun shine. Grim, but intriguing, and frightening.",id: 2},
    {name: "'I Am Curious: Yellow' is a risible and pretentious steaming pile. It doesn't matter what one's political views are because this film can hardly be taken seriously on any level. As for the claim that frontal male nudity is an automatic NC-17, that isn't true. I've seen R-rated films with male nudity. Granted, they only offer some fleeting views, but where are the R-rated films with gaping vulvas and flapping labia? Nowhere, because they don't exist. The same goes for those crappy cable shows: schlongs swinging in the breeze but not a clitoris in sight. And those pretentious indie movies like The Brown Bunny, in which we're treated to the site of Vincent Gallo's throbbing johnson, but not a trace of pink visible on Chloe Sevigny. Before crying (or implying) 'double-standard' in matters of nudity, the mentally obtuse should take into account one unavoidably obvious anatomical difference between men and women: there are no genitals on display when actresses appears nude, and the same cannot be said for a man. In fact, you generally won't see female genitals in an American film in anything short of porn or explicit erotica. This alleged double-standard is less a double standard than an admittedly depressing ability to come to terms culturally with the insides of women's bodies.", id: 3}, 
    {name: " Zentropa is the most original movie I've seen in years. If you like unique thrillers that are influenced by film noir, then this is just the right cure for all of those Hollywood summer blockbusters clogging the theaters these days. Von Trier's follow-ups like Breaking the Waves have gotten more acclaim, but this is really his best work. It is flashy without being distracting and offers the perfect combination of suspense and dark humor. It's too bad he decided handheld cameras were the wave of the future. It's hard to say who talked him away from the style he exhibits here, but it's everyone's loss that he went into his heavily theoretical dogma direction instead.", id:4 }, 
    {name: "If only to avoid making this type of film in the future. This film is interesting as an experiment but tells no cogent story.<br /><br />One might feel virtuous for sitting thru it because it touches on so many IMPORTANT issues but it does so without any discernable motive. The viewer comes away with no new perspectives (unless one comes up with one while one's mind wanders, as it will invariably do during this pointless film).<br /><br />One might better spend one's time staring out a window at a tree growing.<br /><br />", id:5},
    {name: "Lars Von Trier is never backward in trying out new techniques. Some of them are very original while others are best forgotten.<br /><br />He depicts postwar Germany as a nightmarish train journey. With so many cities lying in ruins, Leo Kessler a young American of German descent feels obliged to help in their restoration. It is not a simple task as he quickly finds out.<br /><br />His uncle finds him a job as a night conductor on the Zentropa Railway Line. His job is to attend to the needs of the passengers. When the shoes are polished a chalk mark is made on the soles. A terrible argument ensues when a passenger's shoes are not chalked despite the fact they have been polished. There are many allusions to the German fanaticism of adherence to such stupid details.<br /><br />The railway journey is like an allegory representing man's procession through life with all its trials and tribulations. In one sequence Leo dashes through the back carriages to discover them filled with half-starved bodies appearing to have just escaped from Auschwitz . These images, horrible as they are, are fleeting as in a dream, each with its own terrible impact yet unconnected.<br /><br />At a station called Urmitz Leo jumps from the train with a parceled bomb. In view of many by-standers he connects the bomb to the underside of a carriage. He returns to his cabin and makes a connection to a time clock. Later he jumps from the train (at high speed) and lies in the cool grass on a river bank. Looking at the stars above he decides that his job is to build and not destroy. Subsequently as he sees the train approaching a giant bridge he runs at breakneck speed to board the train and stop the clock. If you care to analyse the situation it is a completely impossible task. Quite ridiculous in fact. It could only happen in a dream.<br /><br />It's strange how one remembers little details such as a row of cups hanging on hooks and rattling away with the swaying of the train.<br /><br />Despite the fact that this film is widely acclaimed, I prefer Lars Von Trier's later films (Breaking the Waves and The Idiots). The bomb scene described above really put me off. Perhaps I'm a realist.", id:6},
    {name: "This film was probably inspired by Godard's Masculin, féminin and I urge you to see that film instead.<br /><br />The film has two strong elements and those are, (1) the realistic acting (2) the impressive, undeservedly good, photo. Apart from that, what strikes me most is the endless stream of silliness. Lena Nyman has to be most annoying actress in the world. She acts so stupid and with all the nudity in this film,...it's unattractive. Comparing to Godard's film, intellectuality has been replaced with stupidity. Without going too far on this subject, I would say that follows from the difference in ideals between the French and the Swedish society.<br /><br />A movie of its time, and place. 2/10.", id:7},
    {name: "*Contains spoilers due to me having to describe some film techniques, so read at your own risk!*<br /><br />I loved this film. The use of tinting in some of the scenes makes it seem like an old photograph come to life. I also enjoyed the projection of people on a back screen. For instance, in one scene, Leopold calls his wife and she is projected behind him rather than in a typical split screen. Her face is huge in the back and Leo's is in the foreground.<br /><br />One of the best uses of this is when the young boys kill the Ravensteins on the train, a scene shot in an almost political poster style, with facial close ups. It reminded me of Battleship Potemkin, that intense constant style coupled with the spray of red to convey tons of horror without much gore. Same with the scene when Katharina finds her father dead in the bathtub...you can only see the red water on the side. It is one of the things I love about Von Trier, his understatement of horror, which ends up making it all the more creepy.<br /><br />The use of text in the film was unique, like when Leo's character is pushed by the word, 'Werewolf.' I have never seen anything like that in a film.<br /><br />The use of black comedy in this film was well done. Ernst-Hugo Järegård is great as Leo's uncle. It brings up the snickers I got from his role in the Kingdom (Riget.) This humor makes the plotline of absurd anal retentiveness of train conductors against the terrible backdrop of WW2 and all the chaos, easier to take. It reminds me of Riget in the way the hospital administrator is trying to maintain a normalcy at the end of part one when everything is going crazy. It shows that some people are truly oblivious to the awful things happening around them. Yet some people, like Leo, are tuned in, but do nothing positive about it.<br /><br />The voice over, done expertly well by Max von Sydow, is amusing too. It draws you into the story and makes you jump into Leo's head, which at times is a scary place to be.<br /><br />The movie brings up the point that one is a coward if they don't choose a side. I see the same idea used in Dancer in the Dark, where Bjork's character doesn't speak up for herself and ends up being her own destruction. Actually, at one time, Von Trier seemed anti-woman to me, by making Breaking the Waves and Dancer, but now I know his male characters don't fare well either! I found myself at the same place during the end of Dancer, when you seriously want the main character to rethink their actions, but of course, they never do!", id:8}

]; 

const informationItems = [
  {icon:'', text: {Label:"Dataset Name:", value: "IMDB Dataset"}, color : '#00796b' },
  {icon:'', text: {Label: "Dataset Size:", value : "8"}, color: "#00796b" },
  {icon:'', text: {label: "Dataset Field:", value : "Senmatice Analyize"} , color: "#00796b"},
  {icon:'', text: {label: "Data Type:", value : "Text" }, color: "#00796b"},
]

function GeneralTextProduct() {
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
<MainCard title="IMDB Dataset" spacing={2} >  
<Grid container spacing={4}>
<Grid item spacing={0} xs={12} sm={6} md={6} lg={6}>
        <></>
        <Typography variant='h5'>Dataset Information</Typography>
    </Grid>
    <Grid item spacing={2} xs={12} sm={6} md={6} lg={6}>
        <Typography variant='h5'>Dataset Quality</Typography>
    </Grid>
    </Grid>
      <Container>
      {/* 产品展示网格 */}
        <Grid container spacing={4}>
        {data.map((data,index) => (

          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SelectableTextCard product={data} onSelect={handleSelect} isSelected={selectedProducts.includes(data.id)} width={250} height={150}/>
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

export default GeneralTextProduct;