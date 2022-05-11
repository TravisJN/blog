import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
} from "react-router-dom";
import AppStoreImage from "../assets/appstore.svg";
import PrivacyPolicy from "./PrivacyPolicy";
import InsAndOutsHomeImage from "../assets/InsAndOuts/Home.png";
import InsAndOutsHistoryImage from "../assets/InsAndOuts/History.png";
import InsAndOutsFoodEntryImage from "../assets/InsAndOuts/FoodEntry.png";
import MacroRecipesHomeImage from "../assets/MacroRecipes/Home.png";
import MacroRecipesListImage from "../assets/MacroRecipes/List.png";
import MacroRecipesRecipeImage from "../assets/MacroRecipes/Recipe.png";
import DlivrStoreOrdersImage from "../assets/Dlivr/dlivr-store-orders.png";
import DlivrStoreCustomersImage from "../assets/Dlivr/dlivr-store-customers.png";
import DlivrStoreChatImage from "../assets/Dlivr/dlivr-store-chat.png";
import DlivrDriveHomeImage from "../assets/Dlivr/dlivr-drive-home.png";
import DlivrDriveConnectImage from "../assets/Dlivr/dlivr-drive-connect.png";
import DlivrDriveSummaryImage from "../assets/Dlivr/dlivr-drive-summary.png";

import CrapsBattle from "./Crapsbattle";

function Apps() {
  const { path, url } = useRouteMatch();
  const { pathname } = useLocation();
  const startingPath = pathname.replace("/apps/", "");
  const [currentApp, setCurrentApp] = useState(
    startingPath === "/apps" ? "dlivr" : startingPath
  ); // hack to fix initial underline

  return (
    <Fade>
      <div className="main-container">
        <div className="links-list">
          <Link
            className={`link ${currentApp === "dlivr" ? "underline" : ""}`}
            to={`${url}/dlivr`}
            onClick={() => setCurrentApp("dlivr")}
          >
            Dlivr
          </Link>
          <Link
            className={`link ${currentApp === "bomblobber" ? "underline" : ""}`}
            to={`${url}/bomblobber`}
            onClick={() => setCurrentApp("bomblobber")}
          >
            Bomblobber
          </Link>
          <Link
            className={`link ${
              currentApp === "crapsbattle" ? "underline" : ""
            }`}
            to={`${url}/crapsbattle`}
            onClick={() => setCurrentApp("crapsbattle")}
          >
            Craps Battle
          </Link>
          <Link
            className={`link ${
              currentApp === "ins-and-outs" ? "underline" : ""
            }`}
            to={`${url}/ins-and-outs`}
            onClick={() => setCurrentApp("ins-and-outs")}
          >
            Ins & Outs
          </Link>
          <Link
            className={`link ${
              currentApp === "macro-recipes" ? "underline" : ""
            }`}
            to={`${url}/macro-recipes`}
            onClick={() => setCurrentApp("macro-recipes")}
          >
            Macro Recipes
          </Link>
        </div>

        <Switch>
          <Route path={`${path}/dlivr`}>
            <Dlivr />
          </Route>
          <Route path={`${path}/bomblobber`}>
            <Bomblobber />
          </Route>
          <Route path={`${path}/crapsbattle`}>
            <div>
              <CrapsBattle />
            </div>
          </Route>
          <Route path={`${path}/ins-and-outs`}>
            <InsAndOuts />
          </Route>
          <Route path={`${path}/macro-recipes`}>
            <MacroRecipes />
          </Route>
          <Route path={"/apps"}>
            <Redirect to={"/apps/dlivr"} />
          </Route>
        </Switch>
      </div>
    </Fade>
  );
}

function Bomblobber() {
  return (
    <Fade>
      <iframe
        title="bomblobber"
        style={{ border: "none" }}
        height="600px"
        width="600px"
        id="bomblobber-game"
        src="/bomblobber/bomblobber.html"
      />
    </Fade>
  );
}

// function CrapsBattle() {
//   return (
//     <Fade>
//       <iframe
//         title="crapsbattle"
//         style={{ border: "none" }}
//         height="600px"
//         width="600px"
//         id="crapsbattle-game"
//         src="/crapsbattle/index.html"
//       />
//     </Fade>
//   );
// }

function Dlivr() {
  return (
    <Fade>
      <div className="app-container">
        <span className="page-title">Dlivr</span>
        <span>
          Dlivr is a fully integrated tool for restaurants to manage their
          delivery orders and dispatch drivers to fulfill those orders.
        </span>
        <span>
          Dlivr includes two applications: 1) A native tablet app used in the
          restaurant to receive and manage orders, dispatch drivers, and
          communicate with the driver and customer during the delivery window.
          2) A native mobile app used by drivers to claim orders, view delivery
          details, and communicate with the restaurant or customer.
        </span>

        <div className="app-subcontainer">
          <div className="app-name-container">
            <span className="app-name">Dlivr Store</span>
            <a
              href="https://apps.apple.com/us/app/ins-outs-food-symptom-log/id1529371763"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStoreImage} alt="Download from the app store" />
            </a>
          </div>

          <div className="app-picture-container">
            <img
              src={DlivrStoreOrdersImage}
              width={237}
              height={330}
              alt="Dlivr Store orders"
            />
            <img
              src={DlivrStoreCustomersImage}
              width={237}
              height={330}
              alt="Dlivr Store customers"
            />
            <img
              src={DlivrStoreChatImage}
              width={237}
              height={330}
              alt="Dlivr Store chat"
            />
          </div>
        </div>

        <div className="app-subcontainer">
          <div className="app-name-container">
            <span className="app-name">Dlivr Drive</span>
            <a
              href="https://apps.apple.com/us/app/ins-outs-food-symptom-log/id1529371763"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStoreImage} alt="Download from the app store" />
            </a>
          </div>

          <div className="app-picture-container">
            <img
              src={DlivrDriveHomeImage}
              width={177}
              height={330}
              alt="Dlivr Store orders"
            />
            <img
              src={DlivrDriveConnectImage}
              width={177}
              height={330}
              alt="Dlivr Store customers"
            />
            <img
              src={DlivrDriveSummaryImage}
              width={177}
              height={330}
              alt="Dlivr Store chat"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

function InsAndOuts() {
  return (
    <Fade>
      <div className="app-container">
        <span className="page-title">Ins & Outs: The Food Symptom Log</span>
        <span>
          Ins & Outs: The Food Symptom Log is an app for iOS and Android that
          tracks IBS symptoms with a simple intuitive UI.
        </span>
        <span>
          Meant to be used while you go. Simply record how you're feeling and
          what you've eaten. Ins and Outs will look for patterns and inform you
          of foods you should avoid.
        </span>

        <a
          href="https://apps.apple.com/us/app/ins-outs-food-symptom-log/id1529371763"
          style={{ marginTop: 25, textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppStoreImage} alt="Download from the app store" />
        </a>

        <div className="app-picture-container">
          <img
            src={InsAndOutsHomeImage}
            width={150}
            height={330}
            alt="Ins & Outs app home page"
          />
          <img
            src={InsAndOutsFoodEntryImage}
            width={150}
            height={330}
            alt="Ins & Outs app food entry page"
          />
          <img
            src={InsAndOutsHistoryImage}
            width={150}
            height={330}
            alt="Ins & Outs app history page"
          />
        </div>

        <PrivacyPolicy />
      </div>
    </Fade>
  );
}

function MacroRecipes() {
  return (
    <Fade>
      <div className="app-container">
        <span className="page-title">Macro Recipes</span>
        <span>
          Macro Recipes is an iOS app that lets you easily find recipes based on
          macro nutrients.
        </span>
        <span>
          Simply enter how may grams of protein, fat, or carbs you'd like in
          your meal and see a list of recipes that fit your criteria.
        </span>

        <a
          href="https://apps.apple.com/ms/app/macro-recipes/id1534017115"
          style={{ marginTop: 25, textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AppStoreImage} alt="Download from the app store" />
        </a>

        <div className="app-picture-container">
          <img
            src={MacroRecipesHomeImage}
            width={170}
            height={330}
            alt="Macro Recipes app home page"
          />
          <img
            src={MacroRecipesListImage}
            width={170}
            height={330}
            alt="Macro Recipes app recipe list page"
          />
          <img
            src={MacroRecipesRecipeImage}
            width={170}
            height={330}
            alt="Macro Recipes app recipe page"
          />
        </div>

        <PrivacyPolicy />
      </div>
    </Fade>
  );
}

export default Apps;
