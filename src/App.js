import './App.css';
import Card from './Componants/Cards'


function App() {
  const card1 = {
    cardTitle: "Mercedes-AMG GLE 53 Coupe",
    imgUrl: "https://i.pinimg.com/564x/10/16/d8/1016d8b877027b1a2a99c03964976999.jpg",
    imgAlt: "Mercedes-AMG GLE 53 Coupe",
    cardText: "The Mercedes-Benz GLE-Class, formerly Mercedes-Benz M-Class, " +
        "is a mid-size luxury 4x4 produced by the German automaker Mercedes-Benz since 1997. " +
        "In terms of size, it is slotted in between the smaller GLC-Class (based on the C-Class) and the " +
        "larger GLS-Class, the latter with which it shares platforms."
  }
  const card2 = {
    cardTitle: "Mercedes-Benz S-Class (W223)",
    imgUrl: "https://i.pinimg.com/564x/28/b6/56/28b656688fbdcdf67f6fedf29203b827.jpg",
    imgAlt: "Mercedes-Benz S-Class (W223)",
    cardText: "The Mercedes-Benz W223 is the seventh generation of the S-Class produced by Mercedes-Benz." +
        " It was unveiled online on 2 September 2020, and is the seventh generation of the S-Class." +
        "The price list for German market has been announced on 15 September 2020, starting from 93,438" +
        " Euro for S 350 d (standard wheelbase) to 117,786.40 Euro for S 500 4MATIC (long wheelbase)."
  }
  const card3 = {
    cardTitle: "Mercedes-Benz GTR",
    imgUrl: "https://i.pinimg.com/564x/c1/b7/aa/c1b7aab7bf7513f752918ecf7f0213a8.jpg",
    imgAlt: "Mercedes-Benz GTR",
    cardText: "The GT R is a high-performance variant of the Mercedes-AMG GT and was introduced at the Goodwood" +
        " Festival of Speed on 24 June 2016. The M178 engine in this variant is tuned to an output of " +
        "430 kW (585 PS; 577 hp) at 6,250 rpm and 700 N⋅m (516 lb⋅ft) of torque at 5,500 rpm. The GT R " +
        "accelerates from 0 to 100 km/h (62 mph) in 3.6 seconds and has a claimed top speed of 319 km/h (198 mph)."
  }

  return (
    <div className="App">
      <div className="cards_div">
        <Card cardTitle={card1.cardTitle} imgUrl={card1.imgUrl} imgAlt={card1.imgAlt} cardText={card1.cardText} />
        <Card cardTitle={card2.cardTitle} imgUrl={card2.imgUrl} imgAlt={card2.imgAlt} cardText={card2.cardText} />
        <Card cardTitle={card3.cardTitle} imgUrl={card3.imgUrl} imgAlt={card3.imgAlt} cardText={card3.cardText} />
      </div>
    </div>
  );
}

export default App;
