import $ from "jquery";
import React from "react";
import MenuComponent from "./MenuComponent";
import LogoNavComponent from "./LogoNavComponent";
const NavigationBar = () => {
  const navPadding =
    "px-2 py-2  sm:py-4 sm:px-24 md:px-24 lg:px-48  border-bottom-2  ";
  const navDisplay =
    "fixed z-50 flex justify-center md:justify-end w-full bg-transparent";

  $(window).scroll(function () {
    var home = $("#home").offset().top;
    var products = $("#bestSeller").offset().top;
    var aboutUs = $("#aboutUs").offset().top;
    var contactUs = $("#footer").offset().top - 540;
    if ($(window).scrollTop() >= home) {
      $("#homeNav").addClass("public_semibold border-b-2 ");
      $("#productsNav").removeClass("public_semibold border-b-2");
      $("#aboutUsNav").removeClass("public_semibold border-b-2");
      $("#contactUsNav").removeClass("public_semibold border-b-2");
      $("#navBar").removeClass("bg-white shadow-md");
      $("#navBar").addClass("bg-transparent");
    }
    if ($(window).scrollTop() >= products) {
      $("#homeNav").removeClass("public_semibold border-b-2 ");
      $("#productsNav").addClass("public_semibold border-b-2");
      $("#aboutUsNav").removeClass("public_semibold border-b-2");
      $("#contactUsNav").removeClass("public_semibold border-b-2");
      $("#navBar").addClass("bg-white shadow-md");
      $("#navBar").removeClass("bg-transparent");
    }
    if ($(window).scrollTop() >= aboutUs) {
      $("#homeNav").removeClass("public_semibold border-b-2 ");
      $("#productsNav").removeClass("public_semibold border-b-2");
      $("#aboutUsNav").addClass("public_semibold border-b-2");
      $("#contactUsNav").removeClass("public_semibold border-b-2");
    }
    if ($(window).scrollTop() >= contactUs) {
      $("#homeNav").removeClass("public_semibold border-b-2 ");
      $("#productsNav").removeClass("public_semibold border-b-2");
      $("#aboutUsNav").removeClass("public_semibold border-b-2");
      $("#contactUsNav").addClass("public_semibold border-b-2");
    }
  });
  return (
    <nav className={navDisplay + navPadding} id="navBar">
      <div className="items-center flex-grow hidden md:flex">
        <LogoNavComponent />
      </div>
      <div className="flex items-center text-xs public_thin">
        <MenuComponent
          linkReference="#home"
          id="homeNav"
          status="active"
          label="Home"
        />
        <MenuComponent
          linkReference="#bestSeller"
          id="productsNav"
          status="inactive"
          label="Products"
        />
        <MenuComponent
          linkReference="#aboutUs"
          id="aboutUsNav"
          status="inactive"
          label="About"
        />
        <MenuComponent
          linkReference="#footer"
          id="contactUsNav"
          status="inactive"
          label="Contact"
        />
      </div>
    </nav>
  );
};
export default NavigationBar;
