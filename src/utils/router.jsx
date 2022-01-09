import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import MainPage from "../MainPage";
import { HipReplacementPage } from "../pages/HipReplacement";
import { KneeReplacementPage } from "../pages/KneeJointReplacement";
import { ServicesMainPage } from "../pages/Services/ServicesMainPage";
import { ArthritisPage } from "../pages/ArthritisTreatment";
import { FractureTreatmentPage } from "../pages/FractureTreatment";
import { SportsInjuryPage } from "../pages/SportsInjuries";
import { Contact } from "../pages/Contact";
import { AboutMe } from "../pages/AboutMe";

export const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route key="home" path="/" exact>
          <MainPage />
        </Route>
        <Route key="hip-replacement" path="/services/hip-replacement" exact>
          <HipReplacementPage />
        </Route>
        <Route key="knee-replacement" path="/services/knee-replacement" exact>
          <KneeReplacementPage />
        </Route>
        <Route key="arthritis-treatment" path="/services/arthritis-treatment" exact>
          <ArthritisPage />
        </Route>
        <Route key="fracture-treatment" path="/services/fracture-treatment" exact>
          <FractureTreatmentPage />
        </Route>
        <Route key="sports-injury-treatment" path="/services/sports-injury-treatment" exact>
          <SportsInjuryPage />
        </Route>
        <Route key="services" path="/services" exact>
          <ServicesMainPage />
        </Route>
        <Route key="contact" path="/contact" exact>
          <Contact />
        </Route>
        <Route key="about-me" path="/about-dr-bharat" exact>
          <AboutMe />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};
