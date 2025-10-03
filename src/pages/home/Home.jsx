import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/loader/loader";
import "../home/HomeStyle.css";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards";

const Home = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const subm = (e) => {
    e.preventDefault();

    setLoading(true);

    if (text.length < 5) {
      toast("text too short");
    } else {
      toast("Text is long enough");
    }
    toast(text);
    toast(email);
  };

  return (
    <>
      {/* <p>Home</p> */}

      <div className="backdrop pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Cards />
            </div>
            <div className="col-md-8">
              <Carousel />
            </div>
            <div className="col-md-2">
              <Cards />
            </div>
          </div>
         
        </div>
      </div>
      {loading && <Loader />}
      <section className="container w-50">
        <form onSubmit={subm}>
          <input
            className="form-control"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email address"
          />
          <input
            className="form-control"
            type="text"
            required
            placeholder="What is your name?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button className="form-control" type="submit">
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Home;
