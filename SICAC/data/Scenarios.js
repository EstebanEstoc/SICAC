export const exampleScenarios = configuration => {
  return [
    {
      id: 1,
      conditions: [
        {
          name: `High heart rate (> ${configuration.cardiacThreshold} BPM)`
        }
      ],
      actions: [
        {
          name: 'Send notification : Your heart rate is too high (#rate#)',
          options: {
            core: 'Your heart rate is too high (#rate#)'
          }
        },
        {
          name: `Send SMS to ${configuration.doctorNumber}`,
          options: {
            to: `${configuration.doctorNumber}`,
            core: 'Alert : my heart rate is too high (#rate#)'
          }
        }
      ],
      name: 'Alert when the heart rate is too high'
    },
    {
      id: 2,
      conditions: [
        {
          name: 'Have to walk'
        }
      ],
      actions: [
        {
          name: 'Trigger the pedometer'
        },
        {
          name: `Send SMS to ${configuration.doctorNumber}`,
          options: {
            to: `${configuration.doctorNumber}`,
            core: 'I walked #distance# meters.',
            time: 'end of event'
          }
        }
      ],
      name: 'Walking check with pedometer'
    },
    {
      id: 3,
      conditions: [
        {
          name: 'Have to answer form'
        }
      ],
      actions: [
        {
          name: 'Launch a form',
          options: {
            question: 'Are you all right ?'
          }
        },
        {
          name: `Send SMS to ${configuration.doctorNumber}`,
          options: {
            to: `${configuration.doctorNumber}`,
            core: 'The patient answered #form_answer# to the form'
          }
        }
      ],
      name: 'Launch of follow-up form'
    },
    {
      id: 4,
      conditions: [
        {
          name: 'Have to take pills'
        }
      ],
      actions: [
        {
          name: "Send notification : Don't forget to take your pills",
          options: {
            core: "Don't forget to take your pills"
          },
          calendar: ['Have to take pills']
        },
        {
          name: 'Launch a form',
          options: {
            question: 'Did you take your pills ?',
            delay: 15,
            send_results: true,
            to: `${configuration.doctorNumber}`
          }
        }
      ],
      name: 'Taking the treatment'
    },
    {
      id: 5,
      conditions: [
        {
          name: 'At home'
        }
      ],
      actions: [
        {
          name: 'Open the shutters'
        }
      ],
      name: 'Open the shutters when I get home'
    },
    {
      id: 6,
      conditions: [
        {
          name: 'Away from home'
        }
      ],
      actions: [
        {
          name: 'Close the shutters'
        }
      ],
      name: "Close the shutters when I'm not at home"
    },
    {
      id: 7,
      conditions: [
        {
          name: 'Have an appointment'
        }
      ],
      actions: [
        {
          name: 'Send notification : You have an appointment today',
          options: {
            core: 'You have an appointment today'
          },
          calendar: ['Have an appointment']
        }
      ],
      name: 'Appointment notification'
    },
    {
      id: 8,
      conditions: [
        {
          name: 'Have an appointment'
        }
      ],
      actions: [
        {
          name: 'Send notification : You have an appointment today ',
          options: {
            core: 'You have an appointment today'
          },
          calendar: ['Have an appointment']
        },
        {
          name: `Send SMS to ${configuration.doctorNumber}`,
          options: {
            to: `${configuration.doctorNumber}`,
            core: 'I have an appointment today'
          },
          calendar: ['Have an appointment']
        }
      ],
      name: 'Notification of an appointment for yourself and a loved one'
    },
    {
      id: 9,
      conditions: [
        {
          name: 'At home'
        },
        {
          name: 'Turn on the lights'
        }
      ],
      actions: [],
      name: "Turn on the lights when I'm at home and it's dark"
    },
    {
      id: 10,
      conditions: [
        {
          name: 'Away from home'
        }
      ],
      actions: [
        {
          name: 'Turn off the lights'
        }
      ],
      name: "Turn off the lights when I'm not at home"
    },
    {
      id: 11,
      conditions: [
        {
          name: 'Connected to headphones'
        }
      ],
      actions: [
        {
          name: 'Launch music'
        }
      ],
      name: 'Launching music when connected to headphones'
    }
  ]
}
