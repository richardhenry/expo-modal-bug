import { countries } from "@/generated/countryData";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function CountriesScreen() {
  return <>
    <FlatList
      data={countries} 
      style={styles.container}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Text>{item.code}</Text>
          <Text>{item.callingCode}</Text>
          <Text>{item.flag}</Text>
        </View>
      )}
      automaticallyAdjustContentInsets={false}
      automaticallyAdjustKeyboardInsets={false}
      automaticallyAdjustsScrollIndicatorInsets={false}
      contentInsetAdjustmentBehavior="never"
    />
    <StatusBar style="light" />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
