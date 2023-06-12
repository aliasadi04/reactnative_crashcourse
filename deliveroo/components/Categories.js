import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			
			contentContainerStyle={{
				paddingTop: 10,
				paddingHorizontal: 15,
				gap: 10,
			}}
			className="space-x-4"
		>
			<CategoryCard
				imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"
				title="Sushi"
			/>
			<CategoryCard
				imgUrl="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
				title="Burger"
			/>
			<CategoryCard
				imgUrl="https://www.allrecipes.com/thmb/g8TbBtq9Ka3tt6iX4B8luFkqtIw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/268494-basic-air-fryer-hot-dogs-BuckwheatQueen-4x3-84d84c97b9084e75ad49d8d6154494ca.jpg"
				title="Hotdog"
			/>
			<CategoryCard
				imgUrl="https://www.allrecipes.com/thmb/RFpigljvRaJmCKYloZ9t2p3i-VA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140422-onigiri-japanese-rice-balls-ddmfs-Beauty-3x4-1-aa650c90910247d086e22c57b8402367.jpg"
				title="Onigiri"
			/>
			<CategoryCard
				imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"
				title="Sushi"
			/>
			<CategoryCard
				imgUrl="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
				title="Burger"
			/>
			<CategoryCard
				imgUrl="https://www.allrecipes.com/thmb/g8TbBtq9Ka3tt6iX4B8luFkqtIw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/268494-basic-air-fryer-hot-dogs-BuckwheatQueen-4x3-84d84c97b9084e75ad49d8d6154494ca.jpg"
				title="Hotdog"
			/>
			<CategoryCard
				imgUrl="https://www.allrecipes.com/thmb/RFpigljvRaJmCKYloZ9t2p3i-VA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140422-onigiri-japanese-rice-balls-ddmfs-Beauty-3x4-1-aa650c90910247d086e22c57b8402367.jpg"
				title="Onigiri"
			/>
			<CategoryCard
				imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"
				title="Sushi"
			/>
			<CategoryCard
				imgUrl="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
				title="Burger"
			/>
			<CategoryCard
				imgUrl="https://www.allrecipes.com/thmb/g8TbBtq9Ka3tt6iX4B8luFkqtIw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/268494-basic-air-fryer-hot-dogs-BuckwheatQueen-4x3-84d84c97b9084e75ad49d8d6154494ca.jpg"
				title="Hotdog"
			/>
			<CategoryCard
				imgUrl="https://www.allrecipes.com/thmb/RFpigljvRaJmCKYloZ9t2p3i-VA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140422-onigiri-japanese-rice-balls-ddmfs-Beauty-3x4-1-aa650c90910247d086e22c57b8402367.jpg"
				title="Onigiri"
			/>
		</ScrollView>
	);
};

export default Categories;
