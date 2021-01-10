export const exampleScenarios = [
    {
        id: 1,
        conditions: [
            {
                name: "High heart rate (> 100 BPM)",
                options: { threshold: 100 }
            }
        ],
        actions: [
            {
                name: "Send notification : Your heart rate is too high (#rate#)",
                options: {
                    core: "Your heart rate is too high (#rate#)"
                }
            },
            {
                name: "Send SMS to 0612345678",
                options: {
                    to: "0612345678",
                    core: "Alert : my heart rate is too high (#rate#)"
                }
            }
        ],
        name: "Alert when the heart rate is too high"
    },
    {
        id: 2,
        conditions: [
            {
                name: "Have to walk"
            }
        ],
        actions: [
            {
                name: "Trigger the pedometer"
            },
            {
                name: "Send SMS to 0612345678",
                options: {
                    to: "0612345678",
                    core: "I walked #distance# meters.",
                    time: "end of event"
                }
            }
        ],
        name: "Walking check with pedometer"
    },
    {
        id: 3,
        conditions: [
            {
                name: "Have to answer form"
            }
        ],
        actions: [
            {
                name: "Launch a form",
                options: {
                    question: "Are you all right ?"
                }
            }
        ],
        name: "Launch of follow-up form"
    },
    {
        id: 4,
        conditions: [
            {
                name: "Have to take pills"
            }
        ],
        actions: [
            {
                name: "Send notification : Don't forget to take your pills (#pills_details#)",
                options: {
                    core: "Don't forget to take your pills (#pills_details#)"
                }
            },
            {
                name: "Launch a form",
                options: {
                    question: "Did you take your pills ?",
                    delay: 15,
                    send_results: true,
                    to: "0612345678"
                }
            }
        ],
        name: "Taking the treatment"
    },
    {
        id: 5,
        conditions: [
            {
                name: "At home"
            }
        ],
        actions: [
            {
                name: "Open the shutters"
            }
        ],
        name: "Open the shutters when I get home"
    },
    {
        id: 6,
        conditions: [
            {
                name: "Away from home"
            }
        ],
        actions: [
            {
                name: "Close the shutters"
            }
        ],
        name: "Close the shutters when I'm not at home"
    },
    {
        id: 7,
        conditions: [
            {
                name: "Have an appointment"
            }
        ],
        actions: [
            {
                name: "Send notification : You have an appointment today (#appointment_details#)",
                options: {
                    core: "You have an appointment today (#appointment_details#)"
                }
            }
        ],
        name: "Appointment notification"
    },
    {
        id: 8,
        conditions: [
            {
                name: "Have an appointment"
            }
        ],
        actions: [
            {
                name: "Send notification : You have an appointment today (#appointment_details#)",
                options: {
                    core: "You have an appointment today (#appointment_details#)"
                }
            },
            {
                name: "Send SMS to 0612345678",
                options: {
                    to: "0612345678",
                    core: "I have an appointment today (#appointment_details#)"
                }
            }
        ],
        name: "Notification of an appointment for yourself and a loved one"
    },
    {
        id: 9,
        conditions: [
            {
                name: "At home"
            },
            {
                name: "Turn on the lights"
            }
        ],
        actions: [],
        name: "Turn on the lights when I'm at home and it's dark"
    },
    {
        id: 10,
        conditions: [
            {
                name: "Away from home"
            }
        ],
        actions: [
            {
                name: "Turn off the lights"
            }
        ],
        name: "Turn off the lights when I'm not at home"
    },
    {
        id: 11,
        conditions: [
            {
                name: "Connected to speaker"
            }
        ],
        actions: [
            {
                name: "Launch music"
            }
        ],
        name: "Launching music when connected to headphones"
    }
]