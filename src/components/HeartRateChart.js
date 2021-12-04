import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const HeartRateChart = () => {
  const data = {
    labels: ['00:00', '06:00', '12:00', '18:00', '23:59'],
    datasets: [
      {
        data: [80, 65, 58, 80, 100, 75],
        color: (opacity = 1) => `rgba(255, 50, 50, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Heartrate'], // optional
  };

  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#AAF0EE',
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: '#AAF0EE',
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
    propsForDots: {
      r: '3',
    },
  };

  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={data}
        width={screenWidth - 25}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
        withDots={true}
        withShadow={true}
        segments={4}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    padding: 16,
  },

  chart: {
    borderRadius: 16,
  },
});

export default HeartRateChart;
