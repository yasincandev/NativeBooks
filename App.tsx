import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { IRecipes } from "./types";
import { COMPLEX_SEARCH_LINK } from "./helpers/links";

const App: React.FC = () => {
  const [complexSearch, setComplexSearch] = useState<IRecipes | null>(null);

  const getComplexSearch = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=121b7c1687b84d7a93275189cd7a930b"
    );
    const data = await response.json();
    setComplexSearch(data);
  };

  useEffect(() => {
    getComplexSearch();
  }, []);

  console.log(complexSearch);

  return (
    <ScrollView>
      {complexSearch?.results.map((recipe) => (
        <RecipesContainer key={recipe.id}>
          <Text>{recipe.title}</Text>
          <StyledImage source={{ uri: recipe.image }} />
        </RecipesContainer>
      ))}
    </ScrollView>
  );
};
export default App;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
`;

const RecipesContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
`;

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`;
