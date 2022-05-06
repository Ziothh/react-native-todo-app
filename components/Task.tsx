import { PropsWithChildren } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

export interface ITask {
    ID: number;
    title: string;
    isCompleted: boolean;
}

interface Props extends ITask {
    toggleCompleted: () => void;
}

const Task: React.FC<Props> = ({ title, isCompleted, toggleCompleted }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.item,
            }}
            onPress={() => toggleCompleted()}
        >
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{title}</Text>
            </View>
            <View
                style={{
                    ...styles.circular,
                    backgroundColor: isCompleted ? "#75D846" : undefined,
                    borderColor: isCompleted ? "#75D846" : "#55BCF6",
                }}
            ></View>
        </TouchableOpacity>
    );
};

export default Task;

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    square: {
        backgroundColor: "#55BCF6",
        width: 24,
        height: 24,
        borderRadius: 10,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius: 5,
    },
});
