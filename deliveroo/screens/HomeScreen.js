import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";


export default function HomeScreen() {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className="pt-10">
			<View className="flex-row align-center mx-4 pb-3 gap-2">
				<Image
					source={{ uri: "https://links.papareact.com/wru" }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full self-center"
				/>
				<View>
					<Text className="text-gray-400">Deliver now</Text>
					<Text className="text-lg font-bold">Current Location
                        <ChevronDownIcon />
                    </Text>
				</View>

			</View>
			<Text className="text-red-500">HomeScreen</Text>
		</SafeAreaView>
	);
}
