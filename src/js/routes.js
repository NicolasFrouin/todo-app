import HomePage from "../pages/home.f7";
import LesTachesPage from "../pages/lesTaches.f7";
import LesListesPage from "../pages/lesListes.f7";
import ajouterListePage from "../pages/ajouterListe.f7";
import ajouterTachePage from "../pages/ajouterTache.f7";
import lesTypesPage from "../pages/lesTypes.f7";
import ajouterTypePage from "../pages/ajouterType.f7";
import modifierTache from "../pages/modifierTache.f7";
import modifierListe from "../pages/modifierListe.f7";

var routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/lesListes/",
		component: LesListesPage,
	},
	{
		path: "/lesTaches/:idListe",
		component: LesTachesPage,
	},
	{
		path: "/ajouterListe",
		component: ajouterListePage,
	},
	{
		path: "/ajouterTache/:idListe",
		component: ajouterTachePage,
	},
	{
		path: "/lesTypes",
		component: lesTypesPage,
	},
	{
		path: "/ajouterType",
		component: ajouterTypePage,
	},
	{
		path: "/modifierTache/:idTache",
		component: modifierTache,
	},
	{
		path: "/modifierListe/:idListe",
		component: modifierListe,
	},
];

export default routes;
