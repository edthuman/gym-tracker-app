import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "./Navigator";
import { useState } from "react";
import UserContext from "../hooks/UserContext";
import PageContext from "@/hooks/PageContext";
import { CurrentPage } from "@/types";

export default function RootLayout() {
    const [user, setUser] = useState({
        username: "guest",
        _id: "guest",
    });
    const userContextValues = { user, setUser };

    const [page, setPage] = useState<CurrentPage>("Home")
    const pageContextValues = {page, setPage}

    return (
        <SafeAreaView style={styles.safeArea}>
            <UserContext.Provider value={userContextValues}>
                <PageContext.Provider value={pageContextValues}>
                    <Navigator />
                </PageContext.Provider>
            </UserContext.Provider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "green",
    },
});
