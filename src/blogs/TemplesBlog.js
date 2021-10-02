import * as React from "react";
// import temples from "../images/Shanivarwada.jpeg";
import { temples } from "../images/imageUrls.json";

export default function TemplesBlog(props) {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <div>
      <h1 id="sample-blog-post">Temples In Pune</h1>
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
      <h2 id="heading">1. Dagduseth Halwai Ganpati Temple</h2>
      <p>
        Dagduseth Halwai Ganpati temple is one of the most famous Ganpati
        temples in the world and ironically, it is known after the founder and
        so much so that, the Ganpati is lovingly referred to as ‘Dagdu Ganpati’.
        It is located alongside a busy street on Budhwar Peth. Dagdusheth Gadve
        was a sweet seller who became famous as ‘halwai’. He was struck with
        tragedy when his son died of plague and his guru suggested that he build
        a Ganesh temple. That was how he built the temple in 1893. The famous
        freedom fighter, Lokmanya Tilak, was his close friend and it is said
        that it was here that the idea of celebrating Ganesh festival every year
        to unite people struck Tilak. Later, the festival became a cementing
        factor in times of freedom struggle.
        <p></p>Entry timings: The temple is open on all days from 06:00 am to
        11:00 pm.
        <p></p>Entry fee: There is no entry fee to be paid to enter the temple.
        Special poojas and offerings may cost differently.
        <p></p>Location: Ganpati Bhavan, 250, Budhvar Peth, Shivaji Road, Pune,
        Maharashtra 411002.
      </p>
      <img src={temples.dagduShet} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}
      {/* Start */}
      <h2 id="heading">2. Swami Narayan Temple</h2>
      <p>
        BAPS Swaminarayan temple is one the most beautiful temples in Pune. It
        is located on the outskirts of Pune in Nanhe, Ambegaon Khurd. Surrounded
        by the hills of Ambegaon and spread extravagantly across 32 acres, it
        has ample parking space for public vehicles. The temple attracts many
        devotees and worshippers daily and offers a variety of activities in and
        outside the temple.
        <p></p>The brilliant architecture by Sri Swaminarayan Sansthan showcases
        exquisite carvings and intricately crafted idols of many deities, and is
        carefully maintained by the Sansthan with a beautiful lush garden
        surrounding the main mandir.
        <p></p>With a mesmerizing lighting show in the evening and a space
        filled with tranquility and strong positive vibes, the experience simply
        leaves you asking for more.
        <p></p>Besides the daily prasadam offered by the priests, the canteen
        inside the temple offers delicious sattvik food and is open from 9:30 AM
        to 9 PM.
        <p></p>Touted as one of the most beautiful temples of the 21st century,
        it needs no further reasons for you to pay a visit as soon as possible.
        <p></p>Timings – 7:30 AM – 12 Noon & 4 PM – 9 PM
        <p></p>Entry – Free
        <p></p>Address – Mumbai-Bengaluru National Highway 4, Ambe Gaon – Narhe,
        Pune, Maharashtra 411046 India
      </p>
      <img
        src={temples.swamiNarayan}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">3. Parvati Hill Temple</h2>
      <p>
        The temple is located atop a hill, 2100 feet above sea level. To reach
        this beautiful temple in Pune, you will have to climb 103 steps.
        However, all the exhaustion from such a long climb will fade away when
        you finally see the temple, its idols and of course, the scenic view of
        the surrounding area.
        <p></p>It is said that at the same place where the present temple
        stands, there used to be a smaller temple (or a shrine) where Nana
        Saheb’s mother used to go and pray. She was suffering from a disease and
        she vowed to build a larger temple once she was cured. The temple was
        then built by Nana Sabeh, the third Peshwa.
        <p></p>Location: Parvati Paytha, Pune
        <p></p>Timings: 8 AM – 5 PM
      </p>
      <img
        src={temples.parvatiHills}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">4. Kasba Ganpati</h2>
      <p>
        Dedicated to the protector of the city – Kasba Ganpati, the temple was
        built by Chhatrapati Shivaji’s mother, Queen Jijabai. The idol which you
        will find inside the temple was founded by Shivaji’s teacher.
        <p></p>While the temple was visited by many, it was popularized after
        Lokmanya Tilak started celebrating festivals here during the freedom
        struggle. Since then, the temple has also become important for holding
        festivities related to Lord Ganesha. Do visit the temple on Ganesh
        Chaturthi to see the temple in all its glory.
        <p></p>Location: Kasba Peth Rd, Phadke Haud, Kasba Peth, Pune
        <p></p>Timings: 6 AM – 9 PM
      </p>
      <img
        src={temples.kasbaGanpati}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">5. Neelkanteshwar Temple</h2>
      <p>
        As the name suggests, this temple is dedicated to the Lord with the blue
        neck – Shiva. One of the most beautiful temples near Pune,
        Neelkanteshwar temple is situated atop a hillock, 900 metre above sea
        level. To reach the temple, you will have to trek for about an hour
        making your journey all the more worthwhile.
        <p></p>While the structure of the temple resembles South Indian temples,
        it is the aura and serenity of the temple that draws visitors. From
        beautiful sunsets to views of the valleys, the location of the temple
        offers beautiful scenery worth making that steep climb. Click here to
        know about forts in Pune
        <p></p>Location: Kondhur, Pune
        <p></p>Timings: 5 AM – 9 PM
      </p>
      <img
        src={temples.neelkanteshwar}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">6. Bhuleshwar Shiva Temple</h2>
      <p>
        Bhuleshwar Shiva Temple is situated around 45 kilometres from Pune near
        Yawat on Pune Solapur highway. The ancient temple of Lord Shiva is
        situated on a hill and known for its unique architecture and classical
        carvings on the walls.
      </p>
      <img src={temples.bhuleshwar} style={imgStyle} alt="Shaniwar Wada"></img>

      {/* End */}

      {/* Start */}
      <h2 id="heading">7. Jejuri Khandoba Temple</h2>
      <p>
        Jejuri city is famous for the temple of Lord Khandoba, situated 48 km
        from Pune on Pune Pandharpur road at hill top. Lord Khandoba also known
        as Martanda Bhairava or Malhari Martand, There are over 500 temples
        dedicated to Lord Khandoba in India.
      </p>
      <img src={temples.jejuri} style={imgStyle} alt="Shaniwar Wada"></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">8. Ekvira Devi Temple, Lonavala</h2>
      <p>
        Ekvira Devi Temple in Lonavala is located near the Karla Caves and a
        prime place of worship for the Koli People. Goddess Ekvira or known as
        Renuka is situated 49 km from Pune and Karla caves are protected by the
        Archeological of India.
      </p>
      <img src={temples.eviraDevi} style={imgStyle} alt="Shaniwar Wada"></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">9. Narayanpur Balaji Temple</h2>
      <p>
        Balaji Temple near Narayanpur is a beautiful replica of the Tirumal
        Tirupati and also known as Sri Venkateswara temple. The temple and
        surroundings are very beautiful with lush greenery during the monsoon
        season.
      </p>
      <img
        src={temples.narayangavBalaji}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>

      {/* End */}
      {/* Start */}
      <h2 id="heading">10. Bhimashankar Temple</h2>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
        porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus.
      </p>
      <img
        src={temples.bhimashankar}
        style={imgStyle}
        alt="Shaniwar Wada"
      ></img>

      {/* End */}
    </div>
  );
}
