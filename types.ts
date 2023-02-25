/* export interface IRecipes {
  results: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    summary: string;
    servings: number;
    readyInMinutes: number;
    sourceUrl: string;
    diets: string[];
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    healthScore: number;
  };
} */

export interface IRecipes {
  results: IRecipe[];
}

export interface IRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  summary: string;
  servings: number;
  readyInMinutes: number;
  sourceUrl: string;
  diets: string[];
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  healthScore: number;
}
