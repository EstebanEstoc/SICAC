import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import data from './ScenarioListData';
import styles from './ScenarioListStyles'
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

const transition = (
  <Transition.Together>
    <Transition.In type='scale' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='scale' durationMs={200} />
  </Transition.Together>
);

function getContainerStyles(section) {
    return [styles.subCategoriesListButton, styles["subCategoriesList" + section]];
};

const AppButton = ({ onPress, title, section }) => (
    <TouchableOpacity onPress={onPress} style={getContainerStyles(section)}>
      <Text style={styles.subCategoriesListText}>{title}</Text>
    </TouchableOpacity>
);
  
const ScenarioButton = ({ name, section }) => (
    <View>
        <AppButton title={name} section={section} size="sm" backgroundColor="#007bff" />
    </View>
);

export default function ScenarioList() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const ref = React.useRef();

  return (
    <ScrollView>
        <Transitioning.View
            ref={ref}
            transition={transition}
            style={styles.container}
        >
        <StatusBar hidden />
        {data.map(({ category, subCategories }, index) => {
            return (
            <TouchableOpacity
                key={category}
                style={styles.cardContainer}
                activeOpacity={0.9}
            >
                <View style={[styles.card]}>
                    <Text 
                        style={styles.heading}
                        onPress={() => {
                            ref.current.animateNextTransition();
                            setCurrentIndex(index === currentIndex ? null : index);
                        }}
                    >
                        {category}
                    </Text>
                    <Text 
                        style={styles.heading} 
                        onPress={() => {
                            ref.current.animateNextTransition();
                            setCurrentIndex(index === currentIndex ? null : index);
                        }}
                    >
                        {index === currentIndex
                        ? ( <Icon name="chevron-down" size={35} /> )
                        : ( <Icon name="chevron-up" size={35} /> )
                        }
                    </Text>
                {index === currentIndex && (
                    <View style={styles.subCategoriesList}>
                        {subCategories.map((subCategory) => (
                            <ScenarioButton key={subCategory} name={subCategory} section={category} />
                        ))}
                    </View>
                )}
                </View>
            </TouchableOpacity>
            );
        })}
        </Transitioning.View>
    </ScrollView>
  );
}