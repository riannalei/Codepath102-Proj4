import './App.css';
import Card from "./components/Card"

const App = () => {

  return (
    <div className="App">
      <img src="https://i.pinimg.com/originals/60/2f/79/602f796e07a8fd3c8173c9602fcb8e6a.jpg" alt="banner" width="1000" height= "auto" />
      <h1>Best Boba in SGV</h1>
      
      <div className="card-container">
        <Card 
          img="https://sugbo.ph/wp-content/uploads/2019/10/A-Little-Tea-Philippines-Cebu-2-1024x1100.jpg"
          name="A Little Tea"
          link="https://www.yelp.com/biz/alittle-tea-san-gabriel"  
          likes="160"
        />
        
        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/nksowdZhK19sAEH2NFkuzg/348s.jpg"
          name="Sunright Tea Studio"
          link="https://www.yelp.com/biz/sunright-tea-studio-san-gabriel-san-gabriel"  
          likes="140"
        />

        <Card 
          img="https://uploads-ssl.webflow.com/5cf04dfa5de32126b13759ff/5d23bcf7059b4b55a7665b91_Omomo_Matcha_menu.jpg"
          name="Omomo Tea Shoppe"
          link="https://www.yelp.com/biz/omomo-tea-shoppe-chino-hills-2"  
          likes="139"
        />

        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/pLHfq-fbKJvkEU0clbxYIQ/348s.jpg"
          name="AU79 Teahouse"
          link="https://www.yelp.com/biz/au79-teahouse-arcadia"  
          likes="120"
        />
        
        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/0pk2FQYrt1Lac61maHBAUg/348s.jpg"
          name="CHICHA San Chen"
          link="https://www.yelp.com/biz/chicha-san-chen-san-gabriel-3"  
          likes="119"
        />

        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/kiikd0Q528i6FpNz7iyXVw/348s.jpg"
          name="Half and Half"
          link="https://www.yelp.com/biz/half-and-half-tea-express-arcadia-2"  
          likes="110"
        />

        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/jptRRNzu5ZfhKH8Ozd_I8A/348s.jpg"
          name="Wushiland Boba"
          link="https://www.yelp.com/biz/wushiland-boba-san-gabriel"  
          likes="104"
        />
        
        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/tvNXHpFV7Ya8nd52XNPbTg/348s.jpg"
          name="R & B TEA"
          link="https://www.yelp.com/biz/r-and-b-tea-rosemead-rosemead"  
          likes="99"
        />

        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/wH0Mh7USEtGLuimBiEcK6g/348s.jpg"
          name="Bopomofo Cafe"
          link="https://www.yelp.com/biz/bopomofo-cafe-san-gabriel"  
          likes="96"
        />
        
        <Card 
          img="https://s3-media0.fl.yelpcdn.com/bphoto/qGEv5H5h0znSAMG4-ym81g/348s.jpg"
          name="Cha Redefine"
          link="https://www.yelp.com/biz/cha-redefine-pasadena-2"  
          likes="80"
        />
    </div>  
    </div>
  )
}
export default App