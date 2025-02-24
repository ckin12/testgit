import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import styles from "./styles"; // ✅ Import đúng styles

const YeuThichScreen = () => (
    <View style={styles.scene}>
        <Text style={styles.text}>Màn hình Yêu Thích</Text>
    </View>
);

const PhoBienScreen = () => (
    <View style={styles.scene}>
        <Text style={styles.text}>Màn hình Phổ Biến</Text>
    </View>
);

const TrucTiepScreen = () => (
    <View style={styles.scene}>
        <Text style={styles.text}>Màn hình Trực Tiếp</Text>
    </View>
);

const renderScene = SceneMap({
    yeuThich: YeuThichScreen,
    phoBien: PhoBienScreen,
    trucTiep: TrucTiepScreen,
});

const TopTabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "yeuThich", title: "YÊU THÍCH" },
        { key: "phoBien", title: "PHỔ BIẾN" },
        { key: "trucTiep", title: "TRỰC TIẾP" },
    ]);

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicatorStyle}
            style={styles.tabBar}
            labelStyle={styles.labelStyle}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    );
};

export default TopTabs; // ✅ Export mặc định
