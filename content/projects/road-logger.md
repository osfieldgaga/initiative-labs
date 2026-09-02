---
title: "Road Logger"
slug: "road-logger"
status: "Active"
license: "MIT"
techTags: ["Python", "OpenCV", "SocketCAN"]
repoUrl: "https://github.com/example/lorem-ipsum-rover"
docsUrl: "https://example.com/docs/lorem-ipsum-rover"
summary: "A Raspberry Pi-based logger to record data for tuning a self-driving control algorithm"
---

The main purpose of this project is to provide a simple, almost forgettable device that will collect data from every drive cycle, making it useful for open-loop control or as a baseline for tuning a close loop control. The data collected here can be used as ground truth and can provide a solid background for testing a controller.

Unlike the widely available dashcam footage that can be found online, this project aims to provide enriched data by adding IMU data and CAN logs, all timestamped to every frame collected by the vision system. 
