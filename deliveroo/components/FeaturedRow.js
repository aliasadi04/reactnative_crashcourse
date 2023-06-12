import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";

const FeaturedRow = ({ id, title, description }) => {
	return (
        <View>
		<View className="mt-3 px-3 justify-between flex-row flex-1">
			<Text className="font-bold text-lg">{title}</Text>
			<ArrowRightIcon color="green" />
		</View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
            
        }}
        className="pt-4">

        </ScrollView>

        </View>
	);
};

export default FeaturedRow;
