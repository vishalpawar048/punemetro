import * as React from "react";
// import restaurants from "../images/Shanivarwada.jpeg";
import { restaurants } from "../images/imageUrls.json";

export default function RestaurantsBlog(props) {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <div>
      <h1 id="sample-blog-post">Best Food in Pune</h1>
      {/* <h4 id="april-1-2020-by-olivier-">
        Sep 26, 2022 by <a href="/">Vishal</a>
      </h4> */}
      {/* <p>
        Pune is a city located in the state of Maharashtra. Previously known as
        Poona, it is a city situated at the junction of Mutha and Mula rivers.
        It is also given the name – “Queen of the Deccan”. It is considered as a
        capital of culture for the people of Maratha. There are a lot of
        intresting historical places in Pune. Following are some must visit
        places.
      </p> */}

      {/* Start */}
      <h2 id="heading">1. Marz-O-Rin</h2>
      <p>
        Famous for their sandwiches, Marz-O-Rin also sells some really good
        cakes and cookies. The Macaroons here are super famous and quite great;
        try the Chocolate ones because we simply loved them. You can even try
        the other classic loaf cakes in vanilla and chocolate flavours.
        <p></p>Address: Bakthiar Plaza, 6, Mahatma Gandhi Road, Camp
        <p></p>Time: 9 am to 9.30 pm
      </p>
      <img
        src={restaurants.marxorin}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}
      {/* Start */}
      <h2 id="heading">2. Vouhman Cafe</h2>
      <p>
        If you’re around Dhole Patil Road, stop at Vohuman Cafe for a kadak cup
        of chai with some yummy bun maska or their cheese omelette. From good
        vibes to delicious grub, this cafe is just perfect for a jolly good
        time.
        <p></p>Address: Millennium Star, Near Ruby Hall, Dhole Patil Road
        <p></p>Time: 6 am to 6 pm
      </p>
      <img src={restaurants.vohman} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}
      {/* Start */}
      <h2 id="heading">3. George Restaurant</h2>
      <p>
        This legendary outlet on East Street has been the talk of the town since
        ages. Popular for their tandoors and biryanis, go for their Chicken and
        Mutton Biryani and you will keep going back for more. The order might
        take a while so you will have to be patient.
        <p></p>Address: 243, Camp, East Street
        <p></p>Time: 8 am to 11.30 pm
      </p>
      <img src={restaurants.george} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}
      {/* Start */}
      <h2 id="heading">4. Vaishali, FC Road</h2>
      <p>
        Vaishali is Pune’s best restaurant for all South Indian foodies and
        vegetarians. There’s often a line in front of the place, especially
        during peak hours. But all of that is worth it when you finally get a
        table and dive into their fluffy, warm idlis that’ll take you from
        Maharashtra to Tamil Nadu in a second.
      </p>
      <img
        src={restaurants.vaishali}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">5. Dorabjee & Sons Restaurant</h2>
      <p>
        Run by the fourth-generation Dorabjee Sorabjee Chindy family, Dorabjee &
        Sons Restaurant is one of the most iconic Parsi eateries in Camp. The
        restaurant continues to maintain the old-world charm through its bare
        minimum decor comprising Formica tables, plastic chairs and damp walls.
        Food-wise, nothing much has changed since 1878. We love the all-time
        favourites out here like dum biryani, mutton kheema, mutton paya and
        chicken dhansak with brown rice. Two people have to shell out INR 700
        for a wholesome meal. Check out our photostory here.
      </p>
      <img
        src={restaurants.dorajbee}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">6. Cafe Goodluck</h2>
      <p>
        When it comes to the best Irani breakfast in town, nothing beats the
        legendary Cafe Goodluck on FC Road. Established in 1935, the restaurant
        is known for bun maska and special chai. However, for a more scrumptious
        meal (that is dinner or lunch), one must try their tawa kheema with
        boneless chicken biryani and roomali roti. For desserts, order nothing
        but the caramel custard. It’s simply breathtaking! A meal for two comes
        up to INR 1000.
      </p>
      <img
        src={restaurants.goodluck}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">7. Zamu's Place</h2>
      <p>
        Located in Dhole Patil Road, Zamu’s Place has been dishing out
        mouthwatering signature sizzlers for the last three decades. We highly
        recommend you try their steak special sizzler which is an overdose of
        ham, cheese and beef steaks. Vegetarians, you can choose from a variety
        of paneer shashlik, macaroni and mushroom steaks. Meal for two is INR
        1000.
      </p>
      <img src={restaurants.zamus} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">8. Malaka Spice</h2>
      <p>
        Started by Praful and Cheeru Chandawarkar, Malaka Spice is perhaps one
        of the most iconic South-East Asian restaurants at Lane No.5 in Koregaon
        Park as well as Baner. We recommend you try the pho chiru soup, a
        Vietnamese specialty made of star anise, basil, coriander and mutton.
        Meat-lovers, must try their Mandarin duck, made in exotic honey and
        orange sauce, and tossed with sliced chillies, litchi and pineapple.
        Meal for two is INR 1400.
      </p>
      <img src={restaurants.malaka} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">9. Hotel Shreyas</h2>
      <p>
        Established in 1966, Hotel Shreyas belly-filling, soul-satisfying
        Maharashtrian thalis, starting at INR 270. The best thing about their
        food is that it reminds of an authentic home-cooked Maharashtrian meal.
        These thalis comprise one dry veg sabzi made of either katri batata or
        gobi batata or bhendi masala or a combination of everything; there is a
        gravy-based dish too, made of bharli wangi, methi patal, palak patal and
        tomato rasa. Adding to that, there will also be an usal option, either
        mutter, moog, matki or birdi. The thali will also have amti, solkadi,
        two kinds of farsan, koshimbir and a spicy veg curry.
      </p>
      <img
        src={restaurants.shreyash}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">10. The First Brewhouse</h2>
      <p>
        Located inside The Corinthians at NIBM, The First Brewhouse is the
        extension of the popular Doolally’s from Mumbai. Touted as one of the
        pioneers of craft beer makers of Pune, this brewhouse is immensely
        popular for their house fries which is served with 6 variants of dips,
        apple cider and delicious oatmeal stout. The awesome part out here is
        their LONG happy hours which is between 12.00 pm (noon) and 7.00 pm.
        Meal and drinks for two here is around INR 1500.
      </p>
      <img
        src={restaurants.brewhouse}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">11. Shabree</h2>
      <p>
        Last but definitely not the least is Shabree, a legendary Maharastrian
        restaurant on FC road. Head here to try some authentic puran poli,
        pithala zunka, masala bhaat and tupacha varan. It is also known to serve
        breakfast items such as misal pav, thalipeeth and even upvas thalis on
        special fasting occassions. A visit here will cost you INR 800.
      </p>
      <img src={restaurants.shabree} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">12. The Place- Touche The Sizzler</h2>
      <p>
        One of the most legendary restaurants in on MG Road, Pune (open since
        1971), The Place is like the godfather of sizzler eateries in the city.
        From steak to seafood – and everything in-between (pork, poultry, veg,
        paneer) – they serve around 40 varieties of sizzlers on their menu. One
        thing you won’t find at other sizzler eateries is their Goan-specialty
        sizzlers: cafreal and balchao with the protein of your choice. Almost
        all the sizzlers are served with rice, loaded with thick-cut potato
        chips and sauteed veggies. The place is crammed and stuffy and you may
        have to wait for 40 min or more for a table but that's an experience you
        must have!
      </p>
      <img
        src={restaurants.thePlace}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">13. Blue Nile</h2>
      <p>
        Established in the early 1960s, the restaurant was initially named
        Nanking Cafe. Over five decades, Blue Nile rose to the fame it boasts of
        now! With its retro Indian ambience, wooden furniture and spacious
        dining halls, eating here is close to a tradition that has been going
        strong through generations. Enjoy Irani-style chicken biryani with a
        plate of rich and spicy mutton chilly fry, Mughlai parathas and more.
        Meal for two is INR 1000.
      </p>
      <img
        src={restaurants.bluenile}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">14. Roopali</h2>
      <p>
        Another gem of FC Road and a popular hangout spot for true blue
        Punekars, Roopali is a cult-favourite. A humble coffee house and a South
        Indian eatery, no one can resist the fresh aroma of crisp dosas, wadas,
        sambhar and filter coffee. There is an indoor as well as an outdoor
        seating and people love coming down for enjoying affordable food and
        have catch-ups with their friends (especially on Sunday mornings). A
        meal for two takes you back INR 500 or less.
      </p>
      <img src={restaurants.roopali} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">15. German Bakery</h2>
      <p>
        Everyone who comes to Pune has to visit the iconic German Bakery atleast
        once. Although some of their branches (SB Road and Kalyani Nagar) are
        fairly new, the first and the main outlet is in Koregaon Park. The place
        is colourful, quirky, and frequented by a lot of foreigners too! We love
        the continental food spread, irish coffee and sinful desserts
        (especially the mango cheesecake). A meal for two comes up to INR 1200.
      </p>
      <img
        src={restaurants.germenBekery}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}

      {/* Start */}
      <h2 id="heading">16. Spice Kitchen</h2>
      <p>
        Popular for hosting its fabulous Sunday brunches and having a dazzling
        nightlife, Spice Kitchen is one of the most spectacular places to visit
        in Pune. With its eclectic menu hosting a variety of cuisines, Spice
        Kitchen is a wonderful getaway to enjoy a casual outing with your loved
        ones.<p></p>
        The soothing ambience and the courteous staff add to the USP of this
        place and surely not a place to miss out when you’re visiting the city
        of Pune on your next trip.<p></p>
        Timings: It is open for 24 hours every day.<p></p>
        Price: Rs 2200 for two (approximately)<p></p>
        Location: JW Marriott Hotel, Lobby Level, Senapati Bapat Road, West
        Pune, Pune<p></p>
        Best Time to Visit: Evenings
      </p>
      <img
        src={restaurants.spicekitchen}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>
      {/* End */}
    </div>
  );
}
