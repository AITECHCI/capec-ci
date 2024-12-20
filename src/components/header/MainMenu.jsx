/** @format */

import React from "react";
import Link from "next/link";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
  return (
    <ul
      className={`nav navbar-nav ${navbarPlacement}`}
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      {/* Accueil */}
      <li>
        <Link href="/">ACCUEIL</Link>
      </li>

      {/* A PROPOS */}
      <li className="dropdown">
        <Link
          href="#"
          className="dropdown-toggle active"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
        >
          A PROPOS
        </Link>
        <ul className="dropdown-menu">
          <li><Link href="/Mot-Directeur">Mot du Directeur</Link></li>
          <li><Link href="/Historique-Objectifs">Historique et Objectifs</Link></li>
          <li><Link href="/Nos-activités">Nos activités</Link></li>
          <li><Link href="/Organigramme">Organigramme</Link></li>
          <li><Link href="/en-10-questions">La CAPEC en 10 questions</Link></li>
          <li><Link href="/en-chiffres">La CAPEC en chiffres</Link></li>
          <li><Link href="/Quelques-références">Quelques références</Link></li>
        </ul>
      </li>

      {/* ETUDES */}
      <li className="dropdown">
        <Link
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
        >
          ETUDES
        </Link>
        {/* 
        <ul className="dropdown-menu">
          <li><Link href="/about-us">Analyse d’impacts économiques et sociaux</Link></li>
          <li><Link href="/team">Institutions et gouvernance</Link></li>
          <li><Link href="/team-details/1">Transformation structurelle, croissance, développement et financement de l’économie</Link></li>
          <li><Link href="/pricing">Finance publique et convergence économique</Link></li>
          <li><Link href="/faq">Commerce international, intégration régionale et Compétitivité</Link></li>
          <li><Link href="/contact-us">Economie du crime et de la violence</Link></li>
          <li><Link href="/about-us">Entrepreneuriat et modèles d’affaires inclusifs</Link></li>
          <li><Link href="/team">Pauvreté, inégalité et redistribution</Link></li>
          <li><Link href="/team-details/1">Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et Ressources Naturelles</Link></li>
          <li><Link href="/pricing">Suivi et évaluation de projets</Link></li>
          <li><Link href="/faq">Commerce international, intégration régionale et Compétitivité</Link></li>
          <li><Link href="/contact-us">Modélisation économique</Link></li>
        </ul> 
        */}
      </li>

      {/* RECHERCHES */}
      <li className="dropdown">
        <Link
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
        >
          RECHERCHES
        </Link>
        {/* 
        <ul className="dropdown-menu multi-column">
          <div className="row">
            <div className="col-md-6">
              <ul className="multi-column-dropdown">
                <li className="mtitle"><a href="#">Recherches et travaux</a></li>
                <li><Link href="/project">Analyse d’impacts économiques et sociaux</Link></li>
                <li><Link href="/project">Institutions et gouvernance</Link></li>
                <li><Link href="/project">Transformation structurelle</Link></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="multi-column-dropdown">
                <li className="mtitle"><span className="nothing">Études</span></li>
                <li><Link href="/project">Entrepreneuriat</Link></li>
                <li><Link href="/project">Pauvreté et inégalité</Link></li>
                <li><Link href="/project">Agriculture et sécurité alimentaire</Link></li>
              </ul>
            </div>
          </div>
        </ul>
        */}
      </li>

      {/* PUBLICATIONS */}
      <li>
        <Link href="/contact-us">PUBLICATIONS</Link>
      </li>

      {/* FORMATIONS */}
      <li>
        <Link href="/contact-us">FORMATIONS</Link>
      </li>

      {/* ACTIVITES */}
      <li className="dropdown">
        <Link
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
        >
          ACTIVITES
        </Link>
        <ul className="dropdown-menu">
          <li><Link href="/services">Programme d'activités</Link></li>
          <li><Link href="/services">Rapports d'activités</Link></li>
          <li><Link href="/services">CR d'activités</Link></li>
          <li><Link href="/services">Interview / Question</Link></li>
          <li><Link href="/services">Actualités</Link></li>
        </ul>
      </li>

      {/* MEDIAS */}
      <li className="dropdown">
        <Link
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
        >
          MEDIAS
        </Link>
        <ul className="dropdown-menu">
          <li><Link href="/blog-standard">Photothèque</Link></li>
          <li><Link href="/blog-with-sidebar">Vidéothèque</Link></li>
        </ul>
      </li>

      {/* CHERCHEURS */}
      <li>
        <Link href="/contact-us">CHERCHEURS</Link>
      </li>
    </ul>
  );
};

export default MainMenu;