import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownItem from "react-native-drop-down-item";

export default class App extends Component {
  state = {
    item: [
      {
        title: "Orgão Superior",
        body: "Ministério da Educação"
      },
      {
        title: "Orgão Subordinado",
        body: "IFMA Timon"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: "stretch" }}>
          {this.state.item
            ? this.state.item.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "blue"
                          }}
                        >
                          {param.title}
                        </Text>
                      </View>
                    }
                  >
                    <Text
                      style={[
                        styles.txt,
                        {
                          fontSize: 20
                        }
                      ]}
                    >
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
            : null}
          <View style={{ height: 96 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 60
  },
  header: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center"
  },
  headerTxt: {
    fontSize: 12,
    color: "rgb(74,74,74)",
    marginRight: 60,
    flexWrap: "wrap"
  },
  txt: {
    fontSize: 14
  }
});
