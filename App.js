import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SimpleBar from 'react-native-simplebar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SimpleBar
            title="Simple Bar demo 1"
            showOpenedStart={false}
            iconClose="ios-arrow-down"
            iconOpen="ios-arrow-up"
            iconSize={22}
            iconColor="#ff8026"
            titleBackgroundColor="rgba(25, 128, 38, 0.1)"
            titleBarBorderColor="#ff8026"
            titleBarBorderRadius={0}
            textColor="#ff8026"
            textTitleAlign="center"
            titleFontSize={18}
            titleFontWeight="bold"
          >
            <View
              style={{ padding: 5, backgroundColor: 'rgba(255, 128, 38, 0.1)' }}
            >
              <Text>A Simple Customizable Bar demo 1.</Text>
              <Text>A Simple Customizable Bar demo 1.</Text>
            </View>
          </SimpleBar>

          <SimpleBar
            title="Simple Bar demo 2"
            showOpenedStart={false}
            iconClose="ios-checkmark-circle-outline"
            iconOpen="ios-arrow-up"
            iconSize={22}
            iconColor="blue"
            titleBackgroundColor="white"
            titleBarBorderColor="blue"
            titleBarBorderRadius={0}
            textColor="blue"
            textTitleAlign="center"
            titleFontSize={18}
            titleFontWeight="bold"
          >
            <View style={{ padding: 5 }}>
              <Text>A Simple Customizable Bar demo 2.</Text>
              <Text>A Simple Customizable Bar demo 2.</Text>
            </View>
          </SimpleBar>

          <SimpleBar
            title="Simple Bar demo 3"
            showOpenedStart={true}
            iconClose="ios-add"
            iconOpen="ios-remove"
            iconSize={22}
            iconColor="black"
            titleBackgroundColor="rgba(162, 155, 254, 0.1)"
            titleBarBorderColor="#fff"
            titleBarBorderRadius={0}
            textColor="#000"
            textTitleAlign="center"
            titleFontSize={18}
            titleFontWeight="bold"
          >
            <View style={{ padding: 5 }}>
              <Text>A Simple Customizable Bar demo 3.</Text>
              <Text>A Simple Customizable Bar demo 3.</Text>
            </View>
          </SimpleBar>

          <SimpleBar
            title="Simple Bar demo 4"
            showOpenedStart={false}
            // iconClose="ios-arrow-down"
            // iconOpen="ios-arrow-up"
            // iconSize={22}
            // iconColor="#ff8026"
            // titleBackgroundColor="rgba(25, 128, 38, 0.1)"
            // titleBarBorderColor="#ff8026"
            // titleBarBorderRadius={0}
            // textColor="#ff8026"
            // textTitleAlign="center"
            // titleFontSize={18}
            // titleFontWeight="bold"
          >
            <View style={{ padding: 5 }}>
              <Text>A Simple Customizable Bar demo 4.</Text>
              <Text>A Simple Customizable Bar demo 4.</Text>
            </View>
          </SimpleBar>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 10
  }
});
