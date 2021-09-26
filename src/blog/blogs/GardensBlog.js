import * as React from "react";
import shaniwarwada from "../../images/Shanivarwada.jpeg";

export default function GardensBlog(props) {
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
      <h2 id="heading">1. Shaniwar Wada Palace</h2>
      <p>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.
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
