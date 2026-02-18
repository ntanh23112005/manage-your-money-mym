import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function IncomeChart() {
  const lineData = [
    { value: 500000, label: "1", dataPointText: "500.000đ" },
    { value: -200000, label: "2", dataPointText: "-200.000đ" },
    { value: 650000, label: "3", dataPointText: "650.000đ" },
    { value: 400000, label: "4", dataPointText: "400.000đ" },
    { value: 400000, label: "5", dataPointText: "400.000đ" },
    { value: 400000, label: "6", dataPointText: "400.000đ" },
    { value: 400000, label: "7", dataPointText: "400.000đ" },
  ];

  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="py-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={lineData}
          width={screenWidth - 60}
          height={220}
          spacing={45}
          color="#FF6FA1"
          thickness={2}
          startFillColor="rgba(255, 111, 161, 0.3)"
          endFillColor="rgba(255, 111, 161, 0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={15}
          noOfSections={4}
          yAxisColor="#F8D7E4"
          yAxisThickness={1}
          rulesType="solid"
          rulesColor="#FCEBF2"
          yAxisTextStyle={{ color: "#C48AA6", fontSize: 10 }}
          xAxisColor="#F8D7E4"
          xAxisLabelTextStyle={{ color: "#C48AA6", fontSize: 11 }}
          pointerConfig={{
            pointerStripHeight: 180,
            pointerStripColor: "#FF6FA1",
            pointerStripWidth: 1,
            pointerColor: "#FF6FA1",
            radius: 5,
            activatePointersOnLongPress: false,
            autoAdjustPointerLabelPosition: true,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    width: 70,
                    backgroundColor: "#FF6FA1",
                    borderRadius: 6,
                    padding: 6,
                    paddingHorizontal: 10,
                    marginTop: -10,
                    marginLeft: -10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {items[0].dataPointText}
                  </Text>
                </View>
              );
            },
          }}
          areaChart
          curved
          dataPointsColor="#FF6FA1"
          dataPointsRadius={4}
          textShiftY={-10}
          textShiftX={-8}
          textFontSize={0}
          hideDataPoints={false}
          adjustToWidth={true}
        />
      </ScrollView>
    </View>
  );
}
