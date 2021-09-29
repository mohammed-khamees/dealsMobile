import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
} from 'react-native';
import styles from './style';

const data = [
	{
		_id: '1',
		title: 'Title',
		img: 'https://i.pinimg.com/564x/73/32/b4/7332b454851d91bae11afca63d07eef8.jpg',
		color: '#2974e5',
	},
	{
		_id: '2',
		title: '46.60 KD',
		subTitle: '70.30 KD',
		time: '42:59:59',
		img: 'https://i.pinimg.com/564x/73/32/b4/7332b454851d91bae11afca63d07eef8.jpg',
		color: '#46b138',
	},
	{
		_id: '3',
		title: 'Answer & win',
		img: 'https://i.pinimg.com/564x/73/32/b4/7332b454851d91bae11afca63d07eef8.jpg',
		color: '#fb795d',
	},
	{
		_id: '4',
		img: 'https://i.pinimg.com/564x/73/32/b4/7332b454851d91bae11afca63d07eef8.jpg',
	},
];

const Home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<ImageBackground
						source={{ uri: item.img }}
						style={styles.image}
						imageStyle={{ borderRadius: 15 }}
					>
						<View
							style={[
								styles.footer,
								{
									backgroundColor: item.color,
									justifyContent: item.title ? 'space-between' : 'space-around',
								},
							]}
						>
							{item.title && (
								<View>
									<Text style={styles.textTitle}>{item.title}</Text>
									{item.subTitle && (
										<Text style={styles.textSubTitle}>{item.subTitle}</Text>
									)}
								</View>
							)}
							{item.time && <Text style={styles.textTime}>{item.time}</Text>}
							{item.title ? (
								<TouchableOpacity style={styles.btn}>
									<Text style={styles.btnText}>
										{item.time ? 'Buy now' : 'Play now'}
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={[
										styles.btn,
										{
											backgroundColor: '#f9c047',
											paddingHorizontal: '10%',
											paddingVertical: '3%',
										},
									]}
								>
									<Text
										style={[styles.btnText, { color: '#130D3A', fontSize: 30 }]}
									>
										Play now
									</Text>
								</TouchableOpacity>
							)}
						</View>
					</ImageBackground>
				)}
				keyExtractor={(item) => item._id}
			/>
		</SafeAreaView>
	);
};

export default Home;
