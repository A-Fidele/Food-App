import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Recipe from "../Recipe";

export default function RecipesList({ recipesData, handlePressRecipe }) {
  return (
    <ScrollView>
      <View style={styles.recipeContainer}>
        {recipesData.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              description={recipe.desc}
              color={recipe.color}
              servingNb={recipe.servingNb}
              handlePress={() => handlePressRecipe(recipe.id, recipe.servingNb)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
