import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 13,
        backgroundColor: "#7DA453",
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    deleteButton: {
        padding: 10,
        backgroundColor: "#FF0000",
        borderRadius: 5,
    },
    deleteButtonText: {
        color: "white",
        fontWeight: "bold",
    }
});