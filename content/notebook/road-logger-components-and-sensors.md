---
title: "Components and sensors"
date: "2026-08-08"
projectTag: "road-logger"
slug: "components-sensors"
---

I will use the Raspberry Pi 3 that has been lying around for a while. It sounds like a great limitation on its own because it only has 1GB of RAM, enough to run a logger, but definitely not enough to run any image recognition algorithm.

The list of components is as follows, all from AliExpress, with the implicit goal of costing less than an additional $100, not including the Pi I already own.

|Component|Model|Price|Link|
|---|---|---|---|
|Camera|IMX219 - FOV 130 deg|$18.06| [Link](https://www.aliexpress.us/item/3256803588211535.html?spm=a2g0o.order_list.order_list_main.11.409f1802Eo6iN1&gatewayAdapt=glo2usa)|
|GPS|BE-880|$24.31|[Link](https://www.aliexpress.us/item/3256811719128769.html?spm=a2g0o.order_list.order_list_main.5.409f1802Eo6iN1&gatewayAdapt=glo2usa)|
|Accelerometer|MPU9250|$3.43|[Link](https://www.aliexpress.us/item/3256807534573687.html?spm=a2g0o.order_list.order_list_main.17.409f1802Eo6iN1&gatewayAdapt=glo2usa)|

I also purchased an additional accelerometer, which will be used with an ESP32 and placed as close as possible to the car's center of gravity. I intend to position the camera and GPS on the windshield, under the rear-view mirror. Nothing is stopping me from putting the accelerometer there as well, but I would rather have it in the center console's glove box and just transmit data to the Pi over wifi. More work, but theoretically better data. Needless to say, I also have an ESP32 lying around doing nothing.
