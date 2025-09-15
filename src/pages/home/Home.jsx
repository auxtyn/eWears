import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/loader/loader";
import "../home/HomeStyle.css";
// import ''

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
      <div className=" fd">
        <img src="https://i.ibb.co/XxRhZSm2/BD-top-strip.gif" alt="gif" />
      </div>
      <div className="backdrop pt-3">
        <div className="container">
          <div className="row mt-3 bg-dark">
            <div className="col-md-2">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                aperiam suscipit minima sunt perspiciatis dolorum.
              </p>
            </div>
            <div className="col-md-8">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img
                      src="https://i.ibb.co/XrGPpZz5/aotm-slider.gif"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.ibb.co/G33ynMyK/ADIDAS-BOGO-712x384.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item active">
                    <img
                      src="https://i.ibb.co/ZpvJjnDg/PHILIP-712-X384.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              aperiam suscipit minima sunt perspiciatis dolorum.
            </p>
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
