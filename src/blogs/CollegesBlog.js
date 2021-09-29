import * as React from "react";
import shaniwarwada from "../images/Shanivarwada.jpeg";

export default function CollegesBlog(props) {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <div>
      <h1 id="sample-blog-post">Places to visit in Pune</h1>
      <h4 id="april-1-2020-by-olivier-">
        Sep 26, 2022 by <a href="/">Vishal</a>
      </h4>
      <p>
        Pune is a city located in the state of Maharashtra. Previously known as
        Poona, it is a city situated at the junction of Mutha and Mula rivers.
        It is also given the name – “Queen of the Deccan”. It is considered as a
        capital of culture for the people of Maratha. There are a lot of
        intresting historical places in Pune. Following are some must visit
        places.
      </p>

      {/* Start */}
      <h2 id="heading">1. COEP College </h2>
      <p>
        College of Engineering, Pune (CoEP), chartered in 1854 is a nationally
        respected leader in technical education. The institute is distinguished
        by its commitment to finding solutions to the great predicaments of the
        day through advanced technology. The institute has a rich history and
        dedication to the pursuit of excellence. CoEP offers a unique learning
        experience across a spectrum of academic and social experiences. With a
        firm footing in truth and humanity, the institute gives you an
        understanding of both technical developments and the ethics that go with
        it. The curriculum is designed to enhance your academic experience
        through opportunities like internships, study abroad programmes and
        research facilities. The hallmark of CoEP education is its strong and
        widespread alumni network, support of the industry and the camaraderie
        that the institute shares with several foreign universities. The
        institute is consistently ranked amongst the top 20 technical colleges
        in India and its alumni have contributed a lion’s share in development
        of national infrastructure.
        <p></p>Postal Address:
        <p></p>College of Engg. Pune,
        <p></p>Wellesely Rd,
        <p></p>Shivajinagar,
        <p></p>Pune-411 005.
        <p></p>Maharashtra, INDIA.
      </p>
      <img src={shaniwarwada} style={imgStyle} alt="Shaniwar Wada"></img>
      {/* End */}

      <h2 id="heading">2. Aga Khan Palace</h2>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.
      </p>
      <h2 id="heading">3. Dagdusheth Halwai Temple</h2>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
        porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus.
      </p>
    </div>
  );
}
