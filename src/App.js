import React from "react";
import i1 from "./img/1.jpg";
function App() {
  return (
    <main>
      <div class="content content--grid content--second">
        <h3 class="content__title">
          Andrea <br />
          Ricci
        </h3>
        <p class="content__text">
          All photographs are memento mori. To take a photograph is to
          participate in another person’s (or thing’s) mortality, vulnerability,
          mutability. Precisely by slicing out this moment and freezing it, all
          photographs testify to time’s relentless melt.
        </p>
        <div class="social">
          <a class="social__link" href="https://www.instagram.com/codropsss/">
            In
          </a>
          <a class="social__link" href="https://twitter.com/codrops">
            Tw
          </a>
        </div>
        <div class="reel">
          <img class="reel__img" src="img/2.jpg" alt="Some image" />
          <span class="reel__number">001</span>
          <img class="reel__img" src="img/3.jpg" alt="Some image" />
          <span class="reel__number">002</span>
          <img class="reel__img" src="img/4.jpg" alt="Some image" />
          <span class="reel__number">003</span>
          <img class="reel__img" src="img/5.jpg" alt="Some image" />
          <span class="reel__number">004</span>
        </div>
        <div class="select">
          <h4 class="select__heading">select</h4>
          <a class="select__item select__item--current">all</a>
          <a class="select__item">portraits</a>
          <a class="select__item">b &amp; w</a>
          <a class="select__item">nude</a>
        </div>
        <button class="content__back" aria-label="Back to main view"></button>
      </div>
      <div class="content content--first">
        <div class="content__move">
          <div class="content__reverse">
            <div class="intro">
              <div class="frame">
                <div class="frame__title-wrap">
                  <h1 class="frame__title">Rotated Revealer Effect</h1>
                  <div class="frame__links">
                    <a href="https://tympanus.net/Tutorials/StickyImageEffect/">
                      Previous Demo
                    </a>
                    <a href="https://tympanus.net/codrops/?p=40167">Article</a>
                    <a href="https://github.com/codrops/RotatedRevealers/">
                      GitHub
                    </a>
                  </div>
                </div>
                <div class="frame__demos">
                  <a href="index.html" class="frame__demo frame__demo--current">
                    01
                  </a>
                  <a href="index2.html" class="frame__demo">
                    02
                  </a>
                  <a href="index3.html" class="frame__demo">
                    03
                  </a>
                  <a href="index4.html" class="frame__demo">
                    04
                  </a>
                  <a href="index5.html" class="frame__demo">
                    05
                  </a>
                </div>
              </div>
              <div
                class="intro__img"
                style={{ backgroundColor: `url(${i1})` }}
              ></div>
              <h2 class="intro__title">Bottega Ricci</h2>
              <a href="#" class="intro__enter">
                enter
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
