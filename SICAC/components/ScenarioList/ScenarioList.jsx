import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./ScenarioListStyles";
import { Transition, Transitioning } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";

const transition = (
  <Transition.Together>
    <Transition.In type="scale" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="scale" durationMs={200} />
  </Transition.Together>
);

function getSubCategoriesListStyles(section) {
  return [
    styles.subCategoriesListButton,
    styles["subCategoriesList" + section],
  ];
}

const AppButton = ({ onPress, title, buttonStyles, textStyles, icon }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles}>
    <Text style={textStyles}>
      {icon ? (
        icon.left ? (
          <Text>
            <Icon name={icon.name} size={icon.size} />
            {"   "}
          </Text>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {title}
      {icon ? (
        icon.right ? (
          <Text>
            <Icon name={icon.name} size={icon.size} />
            {"   "}
          </Text>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </Text>
  </TouchableOpacity>
);

const ScenarioButton = ({ name, buttonStyles, textStyles, icon }) => (
  <View>
    <AppButton
      title={name}
      buttonStyles={buttonStyles}
      textStyles={textStyles}
      icon={icon}
      size="sm"
    />
  </View>
);

export default function ScenarioList() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scenarios = useSelector((state) => state.scenarios);
  const ref = React.useRef();

  const headers = ['Enabled', 'Disabled'];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Transitioning.View
          ref={ref}
          transition={transition}
          style={styles.container}
        >
          <StatusBar hidden />
          {scenarios && scenarios.scenarios &&
            headers.map((title, index) => {
              return (
                <TouchableOpacity
                  key={title}
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
                      {title}
                    </Text>
                    <Text
                      style={styles.heading}
                      onPress={() => {
                        ref.current.animateNextTransition();
                        setCurrentIndex(index === currentIndex ? null : index);
                      }}
                    >
                      {index === currentIndex ? (
                        <Icon name="chevron-down" size={styles.heading.fontSize} />
                      ) : (
                        <Icon name="chevron-up" size={styles.heading.fontSize} />
                      )}
                    </Text>
                    {index === currentIndex && (
                      <View style={styles.subCategoriesList}>
                        {scenarios.scenarios.map(({ id, name, active, conditions, actions }) =>
                          {active && (
                            <ScenarioButton
                              key={id}
                              name={name}
                              buttonStyles={getSubCategoriesListStyles(headers[currentIndex])}
                              textStyles={styles.subCategoriesListText}
                            />
                          )}
                        )}
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
        </Transitioning.View>
      </ScrollView>

      <View style={styles.floatingButton}>
        <ScenarioButton
          icon={{ left: true, name: "plus", size: styles.newScenarioButtonText.fontSize }}
          name="New scenario"
          buttonStyles={styles.newScenarioButton}
          textStyles={styles.newScenarioButtonText}
        />
      </View>
    </View>
  );
}
