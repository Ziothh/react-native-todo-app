import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Task, { ITask } from "./components/Task";

export default function App() {
    const [tasks, setTasks] = useState<ITask[]>([
        { title: "My first task", isCompleted: false, ID: Date.now() },
    ]);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    console.log(tasks);

    const addTask = (taskTitle: string) =>
        setTasks((p) => [...p, { title: taskTitle, isCompleted: false, ID: Date.now() }]);

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>

                <View style={styles.items}>
                    {tasks.map((t) => (
                        <Task
                            key={t.ID}
                            toggleCompleted={() =>
                                setTasks((prev) =>
                                    prev.map((p) => ({
                                        ...p,
                                        isCompleted: p.ID === t.ID ? !p.isCompleted : p.isCompleted,
                                    }))
                                )
                            }
                            {...t}
                        />
                    ))}
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Write a task"
                    value={newTaskTitle}
                    onChangeText={setNewTaskTitle}
                />
                <TouchableOpacity
                    onPress={() => {
                        if (newTaskTitle === "") return;

                        addTask(newTaskTitle);
                        setNewTaskTitle("");
                    }}
                >
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
        opacity: 1,
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        borderRadius: 60,
        backgroundColor: "#FFF",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addText: {},
});
