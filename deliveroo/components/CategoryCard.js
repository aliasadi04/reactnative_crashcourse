import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
	return (
		<TouchableOpacity className="">
			<Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
			<Text className="absolute bottom-1 self-center text-white font-bold">{title}</Text>
		</TouchableOpacity>
	);
};

export default CategoryCard;
