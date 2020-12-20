import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, TouchableOpacity, ScrollView, Switch } from "react-native";
import styles from "./ScenarioListStyles";
import { Transition, Transitioning } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  addScenario,
  deleteScenario,
  switchOnScenario,
  switchOffScenario,
  modifyScenario
} from 'reducers/scenarios/scenariosSlice'

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

export default function ScenarioList() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const dispatch = useDispatch()
  const scenarios = useSelector((state) => state.scenarios);
  const ref = React.useRef();

  const headers = ['Enabled', 'Disabled'];

  const AppButton = ({ onPress, scenario, buttonStyles, textStyles, icon }) => (
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
        {scenario.name}
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
      {scenario.id && (
        <View style={styles.scenarioIcons}>
          <View style={styles.scenarioIconAndLabel}>
            <Switch
              onValueChange={() => {
                ref.current.animateNextTransition();
                if (scenario.active) {
                  dispatch(switchOffScenario(scenario.id))
                } else {
                  dispatch(switchOnScenario(scenario.id))
                }
              }}
              value={scenario.active}
              trackColor={{ false: "white", true: "black" }}
              thumbColor={scenario.active ? "white" : "black"}
            />
            <Text style={styles.scenarioIconLabel}>
              Tap to { scenario.active ? 'disable' : 'enable' }
            </Text>
          </View>
          <View style={styles.scenarioIconAndLabel}>
            <Icon
              containerStyle={{ alignSelf: 'flex-end' }}
              name='edit'
              size={20}
              color='black'
              type='font-awesome'
              onPress={() => {
                //
              }}
            />
            <Text style={styles.scenarioIconLabel}>
              Tap to modify
            </Text>
          </View>
          <View style={styles.scenarioIconAndLabel}>
            <Icon
              containerStyle={{ alignSelf: 'flex-end' }}
              name='trash'
              size={20}
              color='black'
              type='font-awesome'
              onPress={() => {
                ref.current.animateNextTransition();
                dispatch(deleteScenario(scenario.id))
              }}
            />
            <Text style={styles.scenarioIconLabel}>
              Tap to delete
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
  
  const ScenarioButton = ({ scenario, buttonStyles, textStyles, icon, isScenario }) => (
    <View>
      <AppButton
        scenario={scenario}
        buttonStyles={buttonStyles}
        textStyles={textStyles}
        icon={icon}
        isScenario={isScenario}
        size="sm"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Transitioning.View
          ref={ref}
          transition={transition}
          style={styles.container}
        >
          <StatusBar hidden />
          {headers &&
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
                    {index === currentIndex && scenarios && scenarios.scenarios && (
                      <View style={styles.subCategoriesList}>
                        {scenarios.scenarios.map((scenario) =>
                          {
                            return scenario.active === !index && (
                              <ScenarioButton
                                key={scenario.id}
                                scenario={scenario}
                                buttonStyles={getSubCategoriesListStyles(headers[currentIndex])}
                                textStyles={styles.subCategoriesListText}
                                isScenario={true}
                              />
                            )
                          }
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
          scenario={{ name: "New scenario" }}
          buttonStyles={styles.newScenarioButton}
          textStyles={styles.newScenarioButtonText}
        />
        <TouchableOpacity onPress={() => {
          const dummy_scenario = {
            name: 'Mon scenario fun',
            conditions: [
              {
                id: 34,
                options: {}
              },
              {
                id: 75,
                options: {
                  auth: '33442243654234_fg'
                }
              }
            ],
            actions: [
              {
                id: 45,
                options: {}
              },
              {
                id: 30,
                options: {
                  lng: -45,
                  lat: 35
                }
              }
            ]
          }
          dispatch(addScenario(dummy_scenario))
        }}>
          <Text>JMKDFB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
