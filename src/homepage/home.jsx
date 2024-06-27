import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

const MovixHomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-light p-0">
        <div className="container-fluid px-5">
          <a className="navbar-brand">Movix</a>
          <form className="d-flex">
            <select className="form-select mx-4 text-white" aria-label="Default select example">
              <option selected>English</option>
              <option value="1">Español</option>
            </select>
            <button type="button" className="btn btn-danger top-sign-in">signin</button>
          </form>
        </div>
      </nav>
      <div className="bg-img">
        <div className="layer">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Unlimited movies, TV <br />shows and more.</h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-md-2 col-1"></div>
            <div className="col-md-8 col-10 p-0 main-search">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email address" />
                <span className="input-group-text" id="basic-addon2">Get Started <i className="bi bi-chevron-right text-white"></i></span>
              </div>
            </div>
            <div className="col-md-2 col-1"></div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row align-items-center reverse">
            <div className="col-lg-6">
              <h2>Enjoy on your TV.</h2>
              <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="col-lg-6">
              <img src="" alt="Enjoy on your TV" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="single.png" alt="Download your shows" />
            </div>
            <div className="col-lg-6">
              <h2>Download your shows to watch offline.</h2>
              <p>Save your favourites easily and always have something to watch.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center reverse">
            <div className="col-lg-6">
              <h2>Enjoy on your TV.</h2>
              <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="col-lg-6">
              <img src="foto.jpg" alt="Enjoy on your TV" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="single.pngbg" alt="Download your shows" />
            </div>
            <div className="col-lg-6">
              <h2>Download your shows to watch offline.</h2>
              <p>Save your favourites easily and always have something to watch.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="faq">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mb-5">Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-2 col-1"></div>
              <div className="col-lg-6 col-md-8 col-10 p-0">
                <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">What is Netflix?</a>
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body">
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /><br />
                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                  </div>
                </div>
                <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Where can I watch?</a>
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body">
                    Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                  </div>
                </div>
                <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">How do I cancel?</a>
                <div className="collapse multi-collapse" id="multiCollapseExample3">
                  <div className="card card-body">
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </div>
                </div>
                <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">What can I watch on Netflix?</a>
                <div className="collapse multi-collapse" id="multiCollapseExample4">
                  <div className="card card-body">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </div>
                </div>
                <a className="btn text-white" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">Is Netflix good for kids?</a>
                <div className="collapse multi-collapse" id="multiCollapseExample5">
                  <div className="card card-body">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br /><br />
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-1"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bottom-search">
          <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-1"></div>
              <div className="col-md-8 col-10 p-0 main-search">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Email address" />
                  <span className="input-group-text" id="basic-addon2">Get Started <i className="bi bi-chevron-right text-white"></i></span>
                </div>
              </div>
              <div className="col-md-2 col-1"></div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <ul>
            <li className="ps-2 pb-3">Questions? Call <a href="#"> 000-800-040-1843</a></li>
          </ul>
          <div className="row">
            <div className="col-md-3 col-6">
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul>
                <li>An active item</li>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Netflix Originals</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul>
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ps-4 pb-4">
            <div className="col-lg-2 col-md-4 col-6">
              <select className="form-select" aria-label="Default select example">
                <option selected className="text-white">English</option>
                <option value="1" className="text-white">Español</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MovixHomePage;
