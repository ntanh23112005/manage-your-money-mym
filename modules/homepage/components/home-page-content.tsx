import { Text, View } from "react-native";
import IncomeChart from "./income-chart-content";

export default function HomePageContent() {
  return (
    <View className="flex flex-col">
      {/* Hi word section */}
      <View className="flex flex-col gap-2">
        <Text className="text-2xl font-bold text-pink-400">
          Xin Chào Nguyễn Thế Anh,
        </Text>
        <Text className="text-base text-pink-300">
          Đây là thống kê quản lý tài chính tháng này của bạn
        </Text>
      </View>

      {/* Statistic section 
        There are 2 card hear: in - out of money in this month, and the total balance of the month
      */}
      <View className="flex flex-row mt-4 gap-3">
        <View className="flex-1 flex flex-col items-center bg-pink-50 border shadow-sm border-pink-100 p-4 h-36 rounded-xl">
          <Text className="text-lg font-semibold text-pink-400 w-full text-center">
            Tổng thu
          </Text>
          <Text className="text-lg font-bold text-pink-500 mt-6">
            10.000.000đ
          </Text>
        </View>
        <View className="flex-1 flex flex-col items-center bg-pink-50 border shadow-sm border-pink-100 p-4 h-36 rounded-xl">
          <Text className="text-lg font-semibold text-pink-400 w-full text-center">
            Tổng chi
          </Text>
          <Text className="text-lg font-bold text-pink-500 mt-6">
            5.000.000đ
          </Text>
        </View>
      </View>

      {/* Chart by month section */}
      <View className="flex flex-col mt-6 gap-3">
        <Text className="text-lg font-semibold text-pink-400">
          Biểu đồ thống kê theo tháng
        </Text>
        <Text className="text-sm text-pink-300">
          Cột dọc: số tiền, cột ngang: tháng trong năm
        </Text>
        <IncomeChart />
      </View>
    </View>
  );
}
