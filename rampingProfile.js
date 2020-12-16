const Load = [
    { duration: "2m", target: 50 },
    { duration: "6m", target: 50 },
    { duration: "2m", target: 0 },
]
const Soak = [
    { duration: "1m", target: 50 },
    { duration: "8m", target: 50 },
    { duration: "1m", target: 0 },
  ]
const Spike = [
    { duration: "1m15s", target: 8 },
    { duration: "1m15s", target: 8 },
    { duration: "1m15s", target: 50 },
    { duration: "5m", target: 50 },
    { duration: "1m15s", target: 0 },
  ]
const Stress = [
    { duration: "2m", target: 25 },
    { duration: "2m", target: 25 },
    { duration: "2m", target: 50 },
    { duration: "2m", target: 50 },
    { duration: "2m", target: 0 },
  ]

export {
    Load,
    Soak,
    Spike,
    Stress
}