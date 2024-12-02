import { BooleanStateSetter } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export function UnitsDropdown({ category, units, setUnits }: { category: string, units: string, setUnits: React.Dispatch<React.SetStateAction<string>>}) {
    const possibleUnits = category === "Strength" ? ["kg", "lbs"] : ["mins", "km", "miles"]
    
    return <SelectDropdown
        data={possibleUnits} 
        onSelect={(selectedItem) => setUnits(selectedItem)} 
        renderButton={() => {
            return <View style={styles.button}>
                <Text style={styles.buttonText}>{units}</Text>
            </View>
        }}
        renderItem={(element, index, isSelected) => {
            const elementStyling: any[] = [styles.dropdownElement]
            elementStyling.push(isSelected ? styles.selectedElement : {})
            return <View>
                <Text style={elementStyling}>{element}</Text>
            </View>
        }}
        showsVerticalScrollIndicator={false}
    />
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        width: 50,
        height: "50%",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center"
    },
    dropdownElement: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 15
    },
    selectedElement: {
        backgroundColor: "#CFCFCF",
    },
})