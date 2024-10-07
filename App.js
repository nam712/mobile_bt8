import * as React from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Home Screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header with user info */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image style={styles.avatar} source={require('./assets/avatar.jpg')} />
      </View>

      {/* Your Insights */}
      <Text style={styles.Title}>Your Insights</Text>

{/* Insights Section */}
<View style={styles.insightsContainer}>
  <View style={styles.insightBox}>
    <Ionicons name="scan" size={30} color="#5A67D8" />
    <Text style={styles.insightText}>Scan new</Text>
    <Text style={styles.insightSubText}>Scanned 483</Text>
  </View>
  <View style={styles.insightBox}>
    <Ionicons name="alert-circle" size={30} color="#E53E3E" />
    <Text style={styles.insightText}>Counterfeits</Text>
    <Text style={styles.insightSubText}>Counterfeited 32</Text>
  </View>
  <View style={styles.insightBox}>
    <Ionicons name="checkmark-circle" size={30} color="#48BB78" />
    <Text style={styles.insightText}>Success</Text>
    <Text style={styles.insightSubText}>Checkouts 8</Text>
  </View>
  <View style={styles.insightBox}>
    <Ionicons name="calendar" size={30} color="#38B2AC" />
    <Text style={styles.insightText}>Directory</Text>
    <Text style={styles.insightSubText}>History 26</Text>
        </View>
      </View>

      {/* Explore More Section */}
      <View style={styles.exploreMoreContainer}>
  <Text style={styles.sectionTitle}>Explore More</Text>
  <Text style={styles.arrow}>→</Text>
</View>
      <View style={styles.exploreMore}>
        {/* You can add images or more content here */}
      </View>
    </View>
  );
}

// Scan Screen
function ScanScreen({ navigation }) {
  return (
    <View style={styles.scanContainer}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Product Image and Scan Area */}
      <View style={styles.scanArea}>
        <Image
          style={styles.productImage}
          source={require('./assets/juice.jpg')}
        />
        <View style={styles.scanFrame} />
      </View>

      {/* Product Info */}
      <View style={styles.productInfoContainer}>
        <View style={styles.productInfo}>
        <Image style={styles.avatar} source={require('./assets/juice.jpg')} />
          <Text style={styles.productName}>Lauren's Orange Juice</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Stack for Home Navigation
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// Main App Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Scan') {
              iconName = 'qr-code-outline'; 
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: '#a0aec0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Title:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a5568',
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a5568',
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',  // Ensure spacing between the cards
  },
  insightBox: {
    backgroundColor: '#fff',
    width: '47%',   // Adjust width to fit two in a row with some margin
    padding: 20,
    borderRadius: 12,
    marginBottom: 20, // Space between rows
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  insightText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  insightSubText: {
    marginTop: 5,
    color: '#a0aec0',
  },
  exploreMore: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  exploreMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will space out the title and arrow
    alignItems: 'center', // Center them vertically
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  arrow: {
    fontSize: 24, // Adjust size if needed
    color: '#4A5568', // Match with your theme
  },
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f7',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  scanArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 120, // Adjusted width for a smaller image
    height: 240, // Adjusted height for a smaller image
  },
  scanFrame: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderColor: '#ff007f',
    borderWidth: 2,
    borderRadius: 10,
  },
  productInfoContainer: {
    backgroundColor: 'white', // Background color for the product info container
    padding: 10,
    borderRadius: 8,
    marginTop: 20, // Space above the container
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure space between name and button
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#ff007f',
    padding: 10,
    borderRadius: 5,
  },
});