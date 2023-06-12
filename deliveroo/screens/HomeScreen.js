import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
} from "react-native";
import {
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
	UserIcon,
	MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView className="pt-10 bg-white flex-1">
			<View className="flex-row align-center px-3 pb-3 gap-2">
				<Image
					source={{ uri: "https://links.papareact.com/wru" }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full self-center"
				/>
				<View className="flex-1">
					<Text className="text-gray-400 text-xs">Deliverr Now!</Text>
					<Text className="text-xl font-bold items-center">
						Current Location
						<ChevronDownIcon
							size={20}
							color={"green"}
							className="self-center justify-self-center"
						/>
					</Text>
				</View>
				<UserIcon size={35} color={"green"} />
			</View>

			{/* Search */}

			<View className="flex-row p-2 items-center space-x-2 mx-2">
				<View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center rounded-2xl">
					<MagnifyingGlassIcon size={20} color="gray" />
					<TextInput
						placeholder="Restaurants and Cuisines"
						keyboardType="default"
						className="self-center"
					/>
				</View>
				<AdjustmentsVerticalIcon color="gray" />
			</View>

			<ScrollView>
				{/* categories */}

				<Categories />

				{/* Featured row */}

				<FeaturedRow
				id="123"
				title="Featured"
				description="Lorem Ipsum Amal Doti"
				/>
					<FeaturedRow
					id="12"
				title="Featured"
				description="Lorem Ipsum Amal Doti"
				/>
					<FeaturedRow
					id="1234"
				title="Featured"
				description="Lorem Ipsum Amal Doti"
				/>
					<FeaturedRow
					id="12345"
				title="Featured"
				description="Lorem Ipsum Amal Doti"
				/>

			</ScrollView>
		</SafeAreaView>
	);
}
