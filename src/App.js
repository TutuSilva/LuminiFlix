import React, { useEffect, useState, useRef } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./componentes/MovieRow";
import "./App.css";
import EstilosGlobais from "./componentes/EstilosGlobais/index";
import FeaturedMovie from "./componentes/FeaturedMovie";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Loading from "./componentes/Loading";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque somente os originais
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <EstilosGlobais />
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {movieList.length <= 0 && <Loading />}
      <Footer />
    </div>
  );
};
