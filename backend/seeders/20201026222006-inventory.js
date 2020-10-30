"use strict";
var faker = require("faker");
var axios = require("axios");

// const products = axios
//   .get(
//     "https://api.bestbuy.com/v1/products(inStoreAvailability=true&(categoryPath.id=pcmcat209400050001))?apiKey=MQjtJDzd5V6UQROxaBS6jMzu&sort=name.asc&show=name,image,longDescription,regularPrice,shortDescription&pageSize=100&format=json"
//   )
//   .then((res) => {
//     return res.data.products;
//   })
//   .then((products) => {
//     products.map((v) => {
//       return Object.assign(v, { quantity: Math.floor(Math.random() * 100) });
//     });
//   })
//   .catch((error) => {
//     console.log("error");
//   });

const products = [
  {
    product_name: "CanaKit - Power Adapter for Raspberry Pi 3 - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6339/6339654_sa.jpg",
    price: 9.99,
    shortDescription:
      "Compatible with Raspberry Pi 3; converts 100-240V AC power to 5V DC power; Micro-USB Type B",
    longDescription:
      "Power up devices with this CanaKit 2.5A Raspberry Pi 3 power supply/adapter. The 5V DC/2.5A regulated power output ensures stable operating, while the 5-foot cord provides the flexibility to position the device anywhere. This CanaKit 2.5A Raspberry Pi 3 power supply/adapter features a robust plastic housing for durability and is compatible with Pi 2, Pi 3 and various Micro-USB devices.",
  },
  {
    product_name: "CanaKit - Premium Case for Raspberry Pi 4 - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6365/6365739_sa.jpg",
    price: 9.99,
    shortDescription:
      "Designed for use with Raspberry Pi 4; high-gloss black finish; ABS three-piece plastic; retains access to ports and connectors",
    longDescription:
      "Protect your self-built computer with this CanaKit Premium case for Raspberry Pi 4. Completely compatible with your setup, this case features ABS three-piece plastic construction for lightweight defense against daily use while retaining access to ports and connectors. An integrated fan mount on this CanaKit Premium case keeps your system running cool.",
  },
  {
    product_name: "Raspberry Pi - 3 Model B+",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6339/6339655_sa.jpg",
    price: 34.99,
    shortDescription:
      "1.4GHz 64-bit quad-core ARMv8 CPU with 1GB LPDDR2 SDRAM; 2.4GHz and 5GHz IEEE 802.11.b/g/n/ac wireless LAN, Bluetooth 4.2, BLE; CSI camera, DSI display, 4 USB 2.0 ports; HDMI port; 4-pole stereo output and composite video port; microSD port",
    longDescription:
      "Create a media center or budget desktop with this Raspberry Pi 3 Model Plus motherboard. The dual-band wireless networking supports long-range connectivity. Bluetooth technology supports cord-free devices, while the 64-bit quad-core processor runs multiple processes quickly. This Raspberry Pi 3 Model Plus motherboard has a USB card reader for external media, and the two aluminum heat sinks offer thermal management.",
  },
  {
    product_name: "CanaKit - Raspberry Pi 4 Basic Kit",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6405/6405651_sa.jpg",
    price: 69.99,
    shortDescription:
      "Credit-card-size computer; 1.5GHz 64-bit quad-core ARMv8 CPU with 4GB LPDDR4 SDRAM; built-in Wi-Fi, Gigabit Ethernet, USB 3.0, Bluetooth 5.0",
    longDescription:
      "Build your own mini-computer with this Raspberry Pi 4 desktop kit. The 1.5GHz 64-bit quad-core processor and 4GB of RAM allow smooth operation for basic computing tasks, while the multi-display capability lets you connect two screens to your setup via HDMI ports. This Raspberry Pi 4 desktop kit includes a CanaKit USB-C power supply for stable powering, and the set of heat sinks provides efficient thermal regulation.",
  },
  {
    product_name: "CanaKit - Raspberry Pi 4 2GB Starter Kit - Clear Case",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6365/6365734_sa.jpg",
    price: 79.99,
    shortDescription:
      "Credit-card-size computer; 4th-generation Raspberry Pi; 2GB LPDDR4 SDRAM; 16GB (Class 10) memory card; clear case; USB-C power supply with noise filter; Micro HDMI to HDMI cable; set of heat sinks; multidisplay capability; Gigabit Ethernet, USB 3.0, and Bluetooth 5.0",
    longDescription:
      "Set up this CanaKit Raspberry Pi 4 Starter PRO kit to handle your basic computing needs. The tiny footprint takes up little space, and HDMI compatibility lets you use your TV as a monitor with sharp 4K graphics. Boasting a 64-bit quad-core processor and 2GB of RAM, this CanaKit Raspberry Pi 4 Starter PRO kit easily handles simple computing tasks, while the sleek case keeps everything protected.",
  },
  {
    product_name:
      "CanaKit - Raspberry Pi 4 2GB Starter PRO Kit - Premium Black Case",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6365/6365735_sa.jpg",
    price: 89.99,
    shortDescription:
      "Credit-card-size computer; 4th-generation Raspberry Pi; 2GB LPDDR4 SDRAM; 32GB (Class 10) memory card; premium black case; CanaKit PiSwitch; USB-C power supply with noise filter; Micro HDMI to HDMI cable; USB card reader; set of heatsinks; multidisplay capability; Gigabit Ethernet, USB 3.0, and Bluetooth 5.0",
    longDescription:
      "Set up a small yet mighty computer with this CanaKit Raspberry Pi 4 Starter PRO kit. Boasting a 64-bit quad-core processor and 2GB of RAM, this credit-card-size system easily handles basic computing tasks. The included 32GB memory card with OS and 6-foot micro HDMI to HDMI cable lets you get started with this CanaKit Raspberry Pi 4 Starter PRO kit the moment it arrives.",
  },
  {
    product_name: "CanaKit - Raspberry Pi 4 Starter Kit",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6405/6405652_sa.jpg",
    price: 89.99,
    shortDescription:
      "Credit-card-size computer; 1.5GHz 64-bit quad-core ARMv8 CPU with 4GB LPDDR4 SDRAM; built-in Wi-Fi, Gigabit Ethernet, USB 3.0, Bluetooth 5.0",
    longDescription:
      "Set-up your personal credit-sized computer with this CanaKit Raspberry Pi 4 starter kit. The 1.5GHz quad-core processor and 4GB of RAM provide smooth performance for computing tasks, while the 16GB memory card provides storage for media content and files. This CanaKit Raspberry Pi 4 starter kit features a micro HDMI to HDMI cable for connecting to a display, and the USB-C connection offers fast syncing with devices.",
  },
  {
    product_name:
      "CanaKit - Raspberry Pi 4 2GB Ultimate Maker Kit - Clear Case",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6365/6365733_sa.jpg",
    price: 99.99,
    shortDescription:
      "Credit-card-size computer; 4th-generation Raspberry Pi; 2GB LPDDR4 SDRAM; 32GB (Class 10) memory card; clear case; CanaKit PiSwitch; USB-C power supply with noise filter; Micro HDMI to HDMI cable; USB card reader; set of heat sinks; multidisplay capability; Gigabit Ethernet, USB 3.0, and Bluetooth 5.0; additional electronic parts",
    longDescription:
      "Build your own basic computer from scratch with this CanaKit Raspberry Pi 4 Ultimate maker kit. The quad-core processor and 2GB of system memory can handle basic computing tasks effortlessly, while the 32GB SD card provides dependable storage. This CanaKit Raspberry Pi 4 Ultimate maker kit features a clear case to house all components and a preloaded operating system for convenient setup.",
  },
  {
    product_name:
      "CanaKit - Raspberry Pi 4 4GB Starter PRO Kit - Premium Black Case",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6365/6365737_sa.jpg",
    price: 99.99,
    shortDescription:
      "Credit-card-size computer; 4th-generation Raspberry Pi; 4GB LPDDR4 SDRAM; 32GB (Class 10) memory card; premium black case; CanaKit PiSwitch; USB-C power supply with noise filter; Micro HDMI to HDMI cable; USB card reader; set of heat sinks; multidisplay capability; Gigabit Ethernet, USB 3.0, and Bluetooth 5.0",
    longDescription:
      "Create a custom computer setup with this CanaKit Raspberry Pi 4 Starter PRO kit. Blending a 64-bit quad-core processor with 4GB of RAM, this complete kit lets you handle basic computing tasks, while built-in Wi-Fi and Bluetooth capabilities expand your connection options. This CanaKit Raspberry Pi 4 Starter PRO kit includes a high-gloss black case to keep your build protected against dust and damage.",
  },
  {
    product_name: "CanaKit - Raspberry Pi 4 Starter MAX Kit",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6405/6405650_sa.jpg",
    price: 114.99,
    shortDescription:
      "Credit-card-size computer; 1.5GHz 64-bit quad-core ARMv8 CPU with 4GB LPDDR4 SDRAM; built-in Wi-Fi, Gigabit Ethernet, USB 3.0, Bluetooth 5.0",
    longDescription:
      "Realize your ideal computer with this Raspberry Pi 4 Starter MAX kit. The 1.5GHz processor and 4GB RAM allow for rapid multitasking, while three heat sinks and a fan keep the unit running at optimal conditions. This Raspberry Pi 4 Starter MAX kit features a high-gloss case and includes two micro HDMI-to-HDMI cables for easy setup.",
  },
  {
    product_name:
      "HP - Refurbished Compaq Desktop - Intel Pentium - 4GB Memory - 500GB HDD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6390/6390316_sa.jpg",
    price: 139.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: Intel&#174; Pentium&#174;-G620 processor; 4GB memory; 500GB hard drive",
    longDescription:
      "Refurbished HP Compaq Desktop: Stay productive with this refurbished HP Compaq Pro desktop. The Intel Pentium processor and 4GB of RAM let you engage with intensive applications smoothly, while the 500GB HDD offer plenty of storage space for your media files and documents. This HP Compaq Pro desktop has a built-in DVDRW drive that means you can easily write and access CDs and DVDs.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Refurbished Compaq Desktop - Intel Core 2 Duo - 4GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5710/5710118_sa.jpg",
    price: 149.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: Intel&#174; Core&#8482; 2 Duo processor; 4GB memory; 1TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished HP Compaq Desktop: Streamline your business performance with this HP Compaq Elite PC. Its 1TB hard drive provides ample space to save large files, while its 4GB of RAM ensures fast processing speeds. The Windows 10 operating system in this HP Compaq Elite PC lets you add multiple screens and manage your work more efficiently.",
  },
  {
    product_name:
      "HP - Refurbished Compaq Desktop - Intel Core 2 Duo - 4GB Memory - 250GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5710/5710200_sa.jpg",
    price: 156.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: Intel&#174; Core&#8482; 2 Duo processor; 4GB memory; 250GB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished HP Compaq Desktop: Enjoy reliable performance in your home or office with this HP Compaq computer. It has an Intel Core processor and 4GB of RAM to speed up commonly used programs, and its 250GB hard drive offers plenty of space for digital documents. This HP Compaq computer has a small form factor that saves space on your desk.",
  },
  {
    product_name:
      "HP - Refurbished Desktop - Intel Core i5 - 4GB Memory - 250Gb Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5506/5506824_sa.jpg",
    price: 161.24,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 2th Gen Intel&#174; Core&#8482; i5 processor; 4GB memory; 250GB hard driveSpecial features:  keyboard and mouse included",
    longDescription:
      "Refurbished HP Desktop:Enjoy a fast computing experience on this refurbished HP desktop computer. With 4GB of RAM and the Core i5-2400 3.1GHz processor, it runs programs smoothly on the Windows 10 Pro platform. A 250GB hard drive provides enough space to save documents, while a DVD player on this HP desktop computer makes it possible to watch your favorite movies.",
  },
  {
    product_name:
      "Next Unit of Computing Kit Desktop - Intel Celeron - Black/Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6136/6136516_sa.jpg",
    price: 174.28,
    shortDescription:
      "Technical details: Intel&#174; Celeron&#174;-J3455 processorSpecial features: built-in wireless networking; Bluetooth; HDMI output",
    longDescription:
      "Intel Next Unit of Computing Kit Desktop: Keep your family entertained with this black Intel NUC barebone mini PC. A quad-core Intel Celeron processor runs streaming applications smoothly, while 32GB of onboard flash storage loads media quickly. This Intel NUC barebone mini PC features an HDMI 2.0 port and 7.1 channel audio for 4K display support and immersive sound, and the USB 3.0 port and SDXC memory card slot provide fast data transfer.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 4GB Memory - 250GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5713/5713337_sa.jpg",
    price: 179.99,
    shortDescription:
      "Refurbished Windows 10 Professional 64-bitTechnical details: 2nd Gen Intel&#174; Core&#8482; i5 processor; 4GB memory; 250GB hard drive",
    longDescription:
      "Accomplish business tasks smoothly with this refurbished Dell OptiPlex desktop. Its fast Intel Core i5 processor and 4GB of RAM provide efficient operation when multitasking, and it has 250GB of storage for company data. This Dell OptiPlex desktop is expandable with two 5.25-inch external and two 3.5-inch internal drive bays.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i3 - 4GB Memory - 500GB HDD - Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6400/6400505_sa.jpg",
    price: 189.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 2nd Gen Intel&#174; Core&#8482; i3-2120 processor; 4GB memory; 500GB hard drive",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Run applications smoothly with this refurbished Dell OptiPlex desktop computer. The Intel Core i3 processor provides reliable performance, while the 4GB of RAM support everyday multitasking. A 500GB hard drive offers ample space for your files and programs. This Dell OptiPlex desktop computer boasts Windows 10 Pro so you can access multiple software and project management tools.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 4GB Memory - 250GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6298/6298350_sa.jpg",
    price: 190.24,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 3rd Gen Intel&#174; Core&#8482; i5-3470 processor; 4GB memory; 250GB hard driveSpecial features: HDMI output; keyboard; mouse",
    longDescription:
      "Improve productivity with this refurbished Dell desktop computer. Its Intel Core i5 processor and 4GB of RAM enable smooth multitasking, and the 250GB hard drive allows ample storage of documents, pictures and videos. This Dell desktop computer comes with Windows 10 Pro and has a small form factor that lets you maximize desk space.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Refurbished Desktop - Intel Core i5 - 8GB Memory - 500GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5830/5830116_sa.jpg",
    price: 196.04,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 2nd Gen Intel&#174; Core&#8482; i5 processor; 8GB memory; 500GB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished HP Desktop: Upgrade your home office with help from this refurbished HP desktop computer. It has 8GB of RAM and an Intel Core i5 processor to support your workflow, and its 500GB hard drive lets you save plenty of files. This HP desktop computer includes multiple connections for custom setups, including 10 USB ports and three display ports.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383556_sa.jpg",
    price: 209.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 2nd Gen Intel&#174; Core&#8482; i5-2400 processor; 8GB memory; 256GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Get a powerful computing solution that offers space economy with this Dell OptiPlex 790 Minitower computer. The Intel Core i5 processor and 8GB of memory let you open and run multiple applications concurrently, while a 256GB SSD offers plenty of storage space for large files and fast start-ups. Featuring integrated Intel HD graphics and high-definition audio, this Dell OptiPlex 790 Minitower computer delivers crisp and clear sound and video.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Lenovo - Refurbished ThinkCentre Desktop - Intel Core i5 - 4GB Memory - 128GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6390/6390319_sa.jpg",
    price: 209.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 3rd Gen Intel&#174; Core&#8482; i5-3470 processor; 4GB memory; 128GB solid state drive",
    longDescription:
      "Refurbished Lenovo ThinkCentre Desktop: Manage daily works tasks efficiently with this refurbished Lenovo ThinkCentre desktop computer. The Intel Core i5 processor and 4GB RAM deliver reliable performance and responsiveness, while the 128GB SSD provides ample room for hundreds of media files and projects. This Lenovo ThinkCentre desktop computer features Windows 10 Pro, which includes robust antivirus and security features.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i3 - 8GB Memory - 500GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6314/6314250_sa.jpg",
    price: 226.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 4th Gen Intel&#174; Core&#8482; i3-4130 processor; 8GB memory; 500GB hard drive",
    longDescription:
      "Increase performance in your home office with this Dell OptiPlex desktop computer. The 4GB of RAM supports basic multitasking, and the Intel Core i3 processor executes most common productivity programs and basic games. This Dell OptiPlex desktop computer has a 500GB hard drive for storing documents, program downloads and digital photo archives.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 2TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5713/5713334_sa.jpg",
    price: 229.99,
    shortDescription:
      "Refurbished Windows 10 Professional 64-bitTechnical details: 3rd Gen Intel&#174; Core&#8482; i5 processor; 8GB memory; 2TB hard drive",
    longDescription:
      "Discover extra computing power with this refurbished Dell desktop computer. Its Intel Core i5 processor and 8GB of RAM run programs efficiently, and a 2TB hard drive stores large work files. This Dell desktop computer has an optical drive for burning and storing saved projects, and it includes Windows 10 Pro for business or home use.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Refurbished Desktop - Intel Core i5 - 8GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5830/5830121_sa.jpg",
    price: 230.84,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 3rd Gen Intel&#174; Core&#8482; i5 processor; 8GB memory; 1TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished HP Desktop: Get tasks done quickly with this refurbished HP desktop computer. Its 1TB hard drive comes with Windows 10 Pro installed and plenty of room to store your work and personal files. This small form factor HP desktop computer has an Intel Core i5 processor and 8GB of RAM to keep you productive.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell Optiplex 7010 PC Intel Core i7 8GB Ram 1TB Windows 10 Pro - Refurbished",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6431/6431173_sa.jpg",
    price: 239.99,
    shortDescription:
      "The OptiPlex 7010 is designed to seamlessly integrate into the office environment.",
    longDescription:
      "The OptiPlex 7010 is designed to seamlessly integrate into the office environment. It delivers the right-sized performance, security and manageability features to match your productivity needs. With its Core i7 Quad-Core processor, you will be able to meet your computing needs for work, school or your daily activities",
  },
  {
    product_name:
      "HP - Refurbished Compaq Desktop - Intel Core i5 - 4GB Memory - 250GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5710/5710134_sa.jpg",
    price: 244.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 2nd Gen Intel&#174; Core&#8482; i5 processor; 4GB memory; 250GB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished HP Compaq Desktop: Fulfill your company's digital needs with this HP computer. The small form factor makes it suitable for tight spaces, and the 250GB hard drive lets you store documents locally. This HP computer has 4GB of RAM, making it possible to multitask without experiencing a lag, and it comes with Windows 10 preinstalled.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 4GB Memory - 1TB Hard Drive - Black/silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5710/5710168_sa.jpg",
    price: 249.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 4th Gen Intel&#174; Core&#8482; i5 processor; 4GB memory; 1TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Manage daily business operations with this Dell OptiPlex desktop. Its 1TB of storage provides ample space for securing business data and updating Windows 10 Pro applications, and it operates efficiently with its Intel Core i5 processor and 4GB of RAM. This small form factor Dell OptiPlex desktop lets you manage your business remotely thanks to its Intel vPro technology.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 500GB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5623/5623684_sa.jpg",
    price: 265.99,
    shortDescription:
      "RefurbishedWindows 10 Professional 64-BitTechnical details: Intel&#174; Core i5 processor; 8GB memory; 500GB hard driveSpecial features: keyboard and mouse included",
    longDescription:
      "Accomplish more with this refurbished Dell OptiPlex desktop computer. Its 3.4GHz Intel Core i5 processor and 8GB of RAM help you get work done quickly and effortlessly, and its 500GB hard drive provides ample storage for software, videos and music. This Dell OptiPlex desktop computer comes with Windows 10 Pro preinstalled.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Refurbished EliteDesk Desktop - Intel Core i5 - 8GB Memory - 2TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5830/5830100_sa.jpg",
    price: 277.24,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i5 processor; 8GB memory; 2TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished HP EliteDesk Desktop: Designed to perform, impress, and protect - this sleek HP EliteDesk helps you power through to business success while allowing customized deployment.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 240GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383520_sa.jpg",
    price: 288.84,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i5-4570 processor; 8GB memory; 240GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Finish assignments quickly on this refurbished Dell OptiPlex 7020 small form factor PC. The 240GB SSD offers rapid startup and loading times, and the 8GB of RAM let you run multiple programs at once. This Dell OptiPlex 7020 small form factor PC has a 3.2GHz Intel Core i5 processor that delivers consistently smooth performance.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Refurbished Compaq Desktop - Intel Core i5 - 16GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5506/5506916_sa.jpg",
    price: 294.64,
    shortDescription:
      "RefurbishedWindows 10 Professional 64-bitTechnical details: 3th Gen Intel Core i5-3470 processor; 16GB memory; 1TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Game or use high-powered programs on this refurbished HP computer. With a massive 16GB of RAM and 1TB hard drive, it has the power and space needed to load and run large programs smoothly. The DVDRW drive on this HP computer makes it easy to install the latest program files directly off the disk or to burn your own disks.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 4GB Memory - 2TB Hard Drive - Black/silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5710/5710141_sa.jpg",
    price: 319.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 2nd Gen Intel&#174; Core&#8482; i5 processor; 4GB memory; 2TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Power up this Dell OptiPlex PC for performance and reliability. Its Intel Core i5 processor and 4GB of RAM allows for quick access to business applications, and the 2TB hard drive provides ample secure data storage. This small form factor Dell OptiPlex PC maximizes desk space and blends seamlessly into any office environment.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 480GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383550_sa.jpg",
    price: 329.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i5-4570 processor; 8GB memory; 480GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Reach your productive potential with this refurbished Dell OptiPlex 7020 small form factor PC. The Intel Core i5 processor and 8GB of RAM provide the power to finish multiple resource-intensive tasks simultaneously. This refurbished Dell OptiPlex 7020 small form factor PC has a 480GB SSD that accommodates plenty of files and loads programs in seconds.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished 7010 Desktop - Intel Core i5 - 16GB Memory - 2TB Hard Drive",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5506/5506872_sa.jpg",
    price: 335.24,
    shortDescription:
      "Refurbished Windows 10 Professional 64-bitTechnical details: 3rd Gen Intel&#174; Core&#8482; i5 processor; 16GB memory; 2TB hard drive",
    longDescription:
      "Complete business tasks with this refurbished Dell desktop computer. Its 16GB of RAM and Intel Core i5 processor provide the power and speed you need to stay efficient, and the 2TB hard drive provides plenty of space for all of your working files. This Dell desktop computer comes with Windows 10 Pro preinstalled, giving you a familiar interface.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 4GB Memory - 1TB Hard Drive - Black/silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5710/5710167_sa.jpg",
    price: 339.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 3rd Gen Intel&#174; Core&#8482; i5 processor; 4GB memory; 1TB hard driveSpecial features: keyboard and mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Experience fast speeds and high performance with this Dell OptiPlex computer. Its Intel Core i5 processor and 4GB of RAM ensure all applications run smoothly, and it has a 1TB hard drive for all your documents and multimedia files. This Dell OptiPlex computer has Windows 10 preinstalled to manage all your software and hardware.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 16GB Memory - 240GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383541_sa.jpg",
    price: 349.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i5-4570 processor; 16GB memory; 240GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Stay on top of your to-do list with this refurbished Dell OptiPlex 7020 small form factor PC. The 16GB of RAM support smooth, resource-efficient multitasking, and the Intel Core i5 processor easily handles demanding tasks and applications. A 240GB SSD makes this Dell OptiPlex 7020 small form factor PC start up and load programs in seconds.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Lenovo - IdeaCentre 3 07ADA Desktop - AMD Athlon-Series - 4GB Memory - 1TB HDD - Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6398/6398133_ra.jpg",
    price: 349.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Athlon Silver-3050U processor; 4GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Lenovo IdeaCentre 3 07ADA Desktop: Get the job done with this silver Lenovo IdeaCentre 3 desktop computer. An AMD Athlon 3050U processor and 4GB of RAM run multiple programs simultaneously for increased productivity, while the 1TB HDD offers vast storage space for your files and applications. This Lenovo IdeaCentre 3 desktop computer includes a wired mouse and keyboard for easy operation.",
  },
  {
    product_name:
      "Lenovo - IdeaCentre 310S Desktop - AMD A9-Series - 4GB Memory - 1TB Hard Drive - Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6291/6291839_ra.jpg",
    price: 359.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD A9-9425 processor; 4GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Upgrade your PC with this Lenovo IdeaCentre computer. Its 4GB of RAM and 1TB hard drive provide a powerful performance, and the AMD A9 processor with integrated Radeon graphics powers through your favorite apps, media and games. This Lenovo IdeaCentre computer has a slim form factor for high space efficiency.",
  },
  {
    product_name:
      "HP - Refurbished EliteDesk Desktop - Intel Core i5 - 8GB Memory - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383551_sa.jpg",
    price: 359.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 6th Gen Intel&#174; Core&#8482; i5-6500 processor; 8GB memory; 256GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished HP EliteDesk Desktop: Tackle your toughest assignments with this refurbished HP EliteDesk 800 G2 small form factor PC. The 3.2GHz Intel Core i5 processor makes demanding programs run smoothly, and the 8GB of RAM let you run applications simultaneously. This HP EliteDesk 800 G2 small form factor PC has a 256GB SSD that offers rapid startups and loading times.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Refurbished ProDesk Desktop - Intel Core i7 - 8GB Memory - 256GB Solid State Drive",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6395/6395386_ra.jpg",
    price: 379.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 8GB memory; 256GB solid-state drive",
    longDescription:
      "Boost your productivity with this refurbished HP ProDesk G1-T desktop computer. The Intel Core i7 processor and 8GB of RAM run multiple applications simultaneously for simple multitasking, and the 256GB SSD offers ample file storage space and high performance. This HP ProDesk G1-T desktop computer has Intel HD 4600 integrated graphics for rendering crisp, detailed visuals, and the Windows 10 Pro operating software ensures smooth operation.    This product has been refurbished.Learn more.",
  },
  {
    product_name:
      "Dell - Inspiron Desktop - Intel Pentium - 8GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/4639/4639004_sa.jpg",
    price: 399.99,
    shortDescription:
      "Windows 10Technical details: Intel&#174; Pentium&#174; processor; 8GB memory; 1TB hard driveSpecial features: Built-in wireless networking; Bluetooth; HDMI output",
    longDescription:
      "Dell Inspiron Desktop: Stay connected with this efficient desktop, which features built-in wireless networking for rapid Internet access. You can house plenty of pictures, videos and documents on the spacious 1TB hard drive and pair with devices via Bluetooth.",
  },
  {
    product_name:
      'HP - 19.5" All-In-One - AMD A4-Series - 4GB Memory - 1TB Hard Drive - Snow White',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6332/6332165_sa.jpg",
    price: 399.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD A4 processor; 4GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth keyboard and mouse",
    longDescription:
      "Do research and other online tasks with this HP all-in-one desktop. It has 1TB of storage for software and large media files, and the seventh-generation AMD A4 processor and 4GB of RAM provide smooth-running performance on Windows 10 Home. Enjoy streaming high-definition content on the 19.5-inch HD+ display of this HP all-in-one desktop.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6413/6413746_sa.jpg",
    price: 399.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 6th Gen Intel&#174; Core&#8482; i5-6500T processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; HDMI output",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Finish your projects on time with this refurbished Dell Optiplex 7040 business PC. The 8GB of RAM and an Intel Core i5 processor run complex content-editing apps easily, while Windows 10 Pro provides access to key enterprise tools. This Dell Optiplex 7040 business PC features a 256GB for rapid app loading and boot times.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i7 - 8GB Memory - 512GB SSD - Black/Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6413/6413749_sa.jpg",
    price: 399.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 8GB memory; 512GB solid state drive",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Keep up with your growing business needs with this refurbished Dell Optiplex 9020 SFF PC. The 512GB SSD accommodates large multimedia files, while the Intel Core i7 processor and 8GB of RAM run multiple apps simultaneously for seamless multitasking. This Dell Optiplex 9020 SFF PC features Windows 10 Pro to provide a secure, user-friendly platform for smooth operation.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Desktop - Intel Pentium Gold G6400 - 8GB Memory - 256GB SSD - Jet Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6420/6420306_ra.jpg",
    price: 399.99,
    shortDescription:
      "A stylish desktop PC that blends modern design with proven technology, from a trusted brand you can count on. Whether working on your latest project, watching videos or everyday tasks &#8211; take on more confidently with a dependable PC.",
    longDescription:
      "A stylish desktop PC that blends modern design with proven technology, from a trusted brand you can count on. Whether working on your latest project, watching videos or everyday tasks &#8211; take on more confidently with a dependable PC.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6395/6395377_ra.jpg",
    price: 404.99,
    shortDescription:
      "RefurbishedWindows 10 ProTechnical details: 4th Gen Intel&#174; Core&#8482; i5-4570 processor; 8GB memory; 256GB solid-state drive",
    longDescription:
      "Refurbished Dell OptiPlex 7020 Desktop: Get more work done with this refurbished Dell OptiPlex minitower desktop computer. The 8GB of RAM and an Intel Core i5 processor easily handle demanding tasks, while a 256GB SSD offers fast data access and ample file storage. This Dell OptiPlex minitower desktop computer features a DVD-RW drive for easy software installation and CD and DVD burning.    This product has been refurbished.  Learn more.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i7 - 8GB Memory - 480GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383548_sa.jpg",
    price: 429.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 8GB memory; 480GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Get an efficient computing solution that lets you run multiple applications with this refurbished Dell OptiPlex desktop. The Intel Core i7-4770 processor and 480GB SSD deliver rapid data access and processing, while 8GB of RAM enhance program availability and multitasking. This Dell OptiPlex desktop has integrated Intel Gigabit Ethernet for networking.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i7 - 16GB Memory - 256GB SSD - Black/Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383565_sa.jpg",
    price: 429.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 16GB memory; 256GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Stay on top of your workload with this refurbished Dell OptiPlex 7020 desktop computer. The 16GB of RAM and Intel Core i7 processor make light work of resource-intensive tasks, and the 256GB SSD provides fast startup and load times. This Dell OptiPlex 7020 desktop computer features a DVD-RW drive for simple software installation, and Windows 10 Pro offers a fast, intuitive interface.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Lenovo - 510A-15ICB Desktop - Intel Core i3 - 8GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6325/6325578_ra.jpg",
    price: 449.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i3-8100 processor; 8GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Lenovo 510A-15ICB Desktop: Take care of business with this Lenovo IdeaCentre desktop computer. The Intel Core i3 processor and 8GB of RAM let you engage with intensive applications, while the DVD-RW drive lets you watch movies and install new programs. This Lenovo IdeaCentre desktop computer has a 1TB hard drive to store your files.",
  },
  {
    product_name:
      "HP - Refurbished ProDesk Desktop - Intel Core i7 - 16GB Memory - 2TB HDD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383533_sa.jpg",
    price: 451.24,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 16GB memory; 2TB hard driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished HP ProDesk Desktop: Get a high-performance PC with this refurbished HP ProDesk desktop. The 2TB hard drive accommodates plenty of documents, photos and videos, while the 16GB of RAM and Intel Core i7 processor run multiple programs at once. This HP ProDesk desktop features Windows 10 Pro for a secure, user-friendly interface, and multiple drive bays let you expand the storage capacity.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Desktop - AMD Ryzen 3-Series - 8GB Memory - 256GB Solid State Drive - Jet Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366134_sa.jpg",
    price: 459.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 3-3200U processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; keyboard; mouse",
    longDescription:
      "HP Desktop: Increase productivity with this HP desktop computer. The AMD Ryzen 3 3200U processor works together with 8GB of RAM to run multiple programs smoothly for simple multitasking, and the 256GB SSD offers rapid startup and data access times. This HP desktop computer has AMD Radeon Vega 8 integrated graphics for rendering detailed visuals when connected to an HD monitor.",
  },
  {
    product_name:
      "HP - Refurbished ProDesk Desktop - Intel Core i7 - 16GB Memory - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383560_sa.jpg",
    price: 462.84,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 16GB memory; 256GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished HP ProDesk Desktop: Run games or work programs with this refurbished HP ProDesk desktop computer. The Intel Core i7 processor handles everyday software, and the 16GB of RAM offer a smooth experience while multitasking. This HP ProDesk desktop computer features a 256GB SSD to store your media collection and promptly load applications, while the included keyboard and mouse connect easily with the two front-facing USB ports.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i7 - 16GB Memory - 480GB SSD - Black/Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383535_sa.jpg",
    price: 479.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 16GB memory; 480GB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Push the limits of what you can achieve with this refurbished Dell OptiPlex laptop computer. The Intel Core i7-4770 processor and 16GB of RAM run challenging applications smoothly, while a 480GB SSD offers plenty of storage for your files, videos and photos. Featuring a DVDRW optical drive and pre-loaded Microsoft 10 Pro, this Dell OptiPlex laptop computer ensures easy software installation from CDs and DVDs.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Dell - Inspiron 3000 Desktop - Intel Core i3-10100 - 8GB RAM - 1TB HDD - DVD drive - Ethernet+WiFi+Bluetooth - keyboard/mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6416/6416002_sa.jpg",
    price: 479.99,
    shortDescription:
      "Inspiron 3000 Desktop - Intel Core i3-10100 - 8GB RAM - 1TB HDD - DVD drive - Ethernet+WiFi+Bluetooth - keyboard/mouse",
    longDescription:
      "The new Dell Inspiron 3000 Desktop. The compact design of the new desktop is 16% smaller than the previous Inspiron desktop. Featuring 10th Gen Intel&#174; Core&#8482; processors and a wide range of upgradability options for a home office or tight workspace. Comes with a Killer e2500 Gigabit Ethernet port, built-in WiFi, DVD drive, and a wired keyboard/mouse.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i5 - 16GB Memory - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383522_sa.jpg",
    price: 497.64,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 6th Gen Intel&#174; Core&#8482; i5-6500 processor; 16GB memory; 256GB solid state driveSpecial features: HDMI output; keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Take on everyday tasks with this refurbished Dell OptiPlex 5040 small form factor desktop PC. The 3.2GHz Intel Core i5 processor and 16GB of RAM easily handle demanding programs and support seamless multitasking. This Dell OptiPlex 5040 small form factor desktop PC has a 256GB SSD that loads programs quickly and offers rapid boot times.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "HP - Pavilion Desktop - Intel Core i3 - 8GB Memory - 256GB Solid State Drive - Natural Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366129_sa.jpg",
    price: 499.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i3-8100 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; keyboard; mouse",
    longDescription:
      "HP Pavilion Desktop: Increase productivity with this HP Pavilion desktop computer. The 8th Gen Intel Core i3-8100 processor and 8GB of RAM allow for smooth and fast load times, while the 256GB SSD provides enough storage space for media files and documents. This HP Pavilion desktop computer has a Type C USB port, letting you connect to a variety of devices.",
  },
  {
    product_name:
      "HP - Desktop - AMD Ryzen 3-Series - 8GB Memory - 512GB SSD - Jet Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383568_ra.jpg",
    price: 499.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 3-3200U processor; 8GB memory; 512GB solid state driveSpecial features: built-in wireless networking; Bluetooth; keyboard; mouse",
    longDescription:
      "HP Desktop Desktop: Load applications quickly with this HP desktop computer. The 512GB SSD ensures rapid data access and storage times, while Wi-Fi functionality connects to wireless networks. This HP desktop computer has an AMD Ryzen 3 processor and 8GB of RAM for powerful performance, and the AMD Radeon Vega 8 integrated graphics deliver clear, immersive visuals.",
  },
  {
    product_name:
      "HP - Refurbished EliteDesk Desktop - Intel Core i7 - 16GB Memory - 512GB Solid State Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6395/6395381_ra.jpg",
    price: 509.99,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 16GB memory; 512GB solid-state drive",
    longDescription:
      "Complete your assignments on time with this refurbished HP EliteDesk 800 G1 desktop computer. An Intel Core i7 processor and 16GB of RAM support seamless multitasking, while the 512GB SSD combines fast data access and rapid boots. This HP EliteDesk 800 G1 desktop computer has a DVD-RW drive that lets you install software or games from CDs or DVDs.    This product has been refurbished.  Learn more.",
  },
  {
    product_name:
      "Dell - Inspiron 3000 Desktop - Intel Core i3-10100 - 8GB RAM - 256GB SSD - DVD(R/W) - Ethernet+WiFi+Bluetooth - keyboard/mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6416/6416011_sa.jpg",
    price: 519.99,
    shortDescription:
      "Inspiron 3000 Desktop - Intel Core i3-10100 - 8GB RAM - 256GB SSD - DVD(R/W) - Ethernet+WiFi+Bluetooth - keyboard/mouse",
    longDescription:
      "The new Dell Inspiron 3000 Desktop. Featuring a compact design, the new desktop is 16% smaller than the previous Inspiron desktop. Featuring 10th Gen Intel&#174; Core&#8482; processors and a wide range of upgradability options for a home office or tight workspace. Comes with a Killer e2500 Gigabit Ethernet port, built-in WiFi, DVD drive, and a wired keyboard/mouse.",
  },
  {
    product_name:
      "HP Elitedesk 705-G4 Mini PC - AMD R5-2400G - 8GB RAM - 256GB SSD - AMD-Radeon Vega - Windows 10 Pro",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6426/6426830_sa.jpg",
    price: 519.99,
    shortDescription:
      "HP Elitedesk 705-G4 Mini PC - AMD R5-2400G - 8GB RAM - 256GB SSD - AMD-Radeon Vega - Windows 10 Pro",
    longDescription:
      "Get outstanding power that meets your budget requirements with the performance, security, manageability, and expandability of the HP EliteDesk 705 Desktop Mini. Take your footprint down to near zero with a PC that mounts securely behind an HP EliteDisplay  or place it almost anywhere with HP accessories.",
  },
  {
    product_name:
      'Lenovo - IdeaCentre A340-22IGM 21.5" Touch-Screen All-In-One - Intel Pentium Silver - 8GB Memory - 1TB HDD - Business Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6398/6398131_sa.jpg",
    price: 529.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: Intel&#174; Pentium Silver processor; 8GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; webcam; wireless keyboard and mouse",
    longDescription:
      "Finish office work flawlessly with this all-in-one Lenovo IdeaCentre desktop computer. The 1TB HDD provides ample storage space for projects and media, while the 8GB of RAM and Intel Pentium Silver processor let you run multiple programs effortlessly. This 21.5-inch Lenovo IdeaCentre desktop computer includes a Full HD touchscreen, and integrated Intel UHD graphics produce quality visuals.",
  },
  {
    product_name:
      'HP - Pavilion 23.8" All-In-One - Intel Pentium - 8GB Memory - 1TB Hard Drive - Snow White',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5325/5325806_sa.jpg",
    price: 549.99,
    shortDescription:
      "Windows 10 HomeTechnical details: Intel&#174; Pentium processor; 8GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; one HDMI output; keyboard and mouse; webcam",
    longDescription:
      "Save desk space with this Hewlett Packard all-in-one desktop computer. Put the Intel Pentium processor to work streaming, surfing the Internet or putting the final touches on any school or work project. With this Hewlett Packard all-in-one desktop computer, you can store all your data on the 1TB hard drive and view the files on the 24-inch HD screen.",
  },
  {
    product_name:
      'Lenovo - IdeaCentre A340-22IGM 21.5" Touch-Screen All-In-One - Intel Pentium Silver - 8GB Memory - 1TB Hard Drive - Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6362/6362952_sa.jpg",
    price: 549.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: Intel&#174; Pentium Silver processor; 8GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; webcam; keyboard and mouse",
    longDescription:
      "Work seamlessly with this Lenovo IdeaCentre desktop computer. The 1TB HDD offers ample storage for your documents and media files, while the 8GB of RAM lets you run several programs simultaneously for smooth multitasking. This Lenovo IdeaCentre computer has a 21.5-inch Full HD touchscreen display that delivers crisp visuals and offers 10-point multi-touch operations for easy interfacing.",
  },
  {
    product_name:
      "HP - Desktop - AMD Ryzen 5-Series - 12GB Memory - 256GB Solid State Drive - Jet Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366135_sa.jpg",
    price: 549.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 5-3400G processor; 12GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; keyboard; mouse",
    longDescription:
      "HP Desktop: Speed through work tasks with this HP desktop. The 12GB of RAM let you seamlessly multitask for enhanced productivity, and the 256GB SSD loads and installs applications quickly. This HP desktop features an AMD Ryzen 5 processor to handle all of your multi-tasking needs.",
  },
  {
    product_name:
      "Dell - Inspiron 3000 Desktop - Intel Core i5-10400 - 8GB Memory - 1TB HDD - Ethernet - WiFi - Bluetooth - keyboard and mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6416/6416004_sa.jpg",
    price: 549.99,
    shortDescription:
      "Inspiron 3000 Desktop - Intel Core i5-10400 - 8GB Memory - 1TB HDD - Ethernet - WiFi - Bluetooth - keyboard and mouse",
    longDescription:
      "The new Dell Inspiron 3000 Desktop . The compact design of the new desktop is 16% smaller than the previous Inspiron desktop. Featuring 10th Gen Intel&#174; Core&#8482; processors and a wide range of upgradability options for a home office or tight workspace. Comes with a Killer e2500 Gigabit Ethernet port, built-in WiFi, bluetooth, and a wired keyboard/mouse.  (DVD drive not included).",
  },
  {
    product_name:
      'Dell - Inspiron 21.5" Touch-Screen All-In-One - Intel Core i3 - 6GB Memory - 1TB Hard Drive - Black Bezel',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5795/5795715_sa.jpg",
    price: 584.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: Intel Core i3; 6GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; webcam",
    longDescription:
      "Highlight your entertainment space with this Dell Inspiron all-in-one desktop. Its Intel Core i3 processor and 6GB of RAM keep up with everyday browsing and leisurely gaming, and its 1TB capacity stores plenty of Windows 10 applications and files. The 21.5-inch Full HD touch-screen display of this Dell Inspiron all-in-one desktop provides quick navigation and high-quality video streaming.",
  },
  {
    product_name:
      "Dell - Refurbished OptiPlex Desktop - Intel Core i7 - 16GB Memory - 1TB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6383/6383529_sa.jpg",
    price: 590.44,
    shortDescription:
      "RefurbishedWindows 10 Pro 64-bitTechnical details: 4th Gen Intel&#174; Core&#8482; i7-4770 processor; 16GB memory; 1TB solid state driveSpecial features: keyboard; mouse",
    longDescription:
      "Refurbished Dell OptiPlex Desktop: Increase productivity with this refurbished Dell OptiPlex 7020 desktop computer. The Intel Core i7-4770 processor and 16GB of memory deliver powerful performance, while a 1TB SSD stores all your photos, movies and programs and speeds up the boot process. This Dell OptiPlex desktop computer arrives with Microsoft Windows Pro so you can effortlessly install security updates.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Lenovo - IdeaCentre 510A Desktop - Intel Core i5 - 8GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6203/6203016_ra.jpg",
    price: 599.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i5-8400 processor; 8GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Lenovo 510A-15ICB Desktop: Upgrade your home computer with this Lenovo IdeaCentre desktop PC. The fast Intel Core i5-8400 processor and Intel UHD 630 graphics card easily handle complex software, and you can store your photos and files on the big 1TB hard drive or make use of the seven-in-one card reader to save on other storage media. Connect this Lenovo IdeaCentre computer wirelessly to other devices using the built-in Bluetooth or Wi-Fi.",
  },
  {
    product_name:
      "Lenovo - IdeaCentre 5i Desktop - Intel Core i5 - 8GB Memory - 1TB Hard Drive - Mineral Grey",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6424/6424471_ra.jpg",
    price: 599.99,
    shortDescription:
      "Windows 10 Home; Technical Details: 10th Gen Intel Core i5-10500 processor; 8GB memory; 1TB hard drive; Special features: built-in wireless networking; Bluetooth; HDMI outputl keyboard; mouse",
    longDescription:
      "Lenovo&#8482; IdeaCentre&#8482; 5i is a powerful, contemporary desktop powered by the latest Intel&#174; Core&#8482; processors. Featuring gaming-grade graphics, fast DDR4 memory, and plenty ofstorage, it&#8217;s up to the task of having fun and will immerse you in it&#8212;and looks great in your home.",
  },
  {
    product_name:
      "Dell - Inspiron Desktop - Intel Core i5 - 12GB Memory - 1TB HDD - Black With Silver Trim",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6387/6387214_ra.jpg",
    price: 619.99,
    shortDescription:
      "Windows 10 ProTechnical details: 9th Gen Intel&#174; Core&#8482; i5-9400 processor; 12GB DDR4 memory; 1TB hard driveSpecial features: Built-in wireless networking; Bluetooth, HDMI output",
    longDescription:
      "Dell Inspiron Desktop: Get the job done with this Dell Inspiron desktop computer. The Intel Core i5 processor and 12GB of RAM run multiple demanding tasks simultaneously, while Intel UHD 630 integrated graphics deliver crisp visuals for seamless movie watching and web browsing. With a 1TB HDD, this Dell Inspiron desktop computer offers ample storage space for files.",
  },
  {
    product_name:
      'Dell - Inspiron 23.8" Touch-Screen All-In-One - AMD A9-Series - 8GB Memory - 256GB Solid State Drive - Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6334/6334300_sa.jpg",
    price: 649.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD A9 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; webcam; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Do it all with this Dell Inspiron all-in-one PC. An integrated 24-inch LED touchscreen displays your favorite movies and games in striking Full HD, while stereo speakers tuned with Waves MaxxAudio Pro deliver professional sound quality. The 8GB of RAM, a 256GB SSD and an AMD A9 processor provide stellar performance from this Dell Inspiron 24-3475 all-in-one PC.",
  },
  {
    product_name:
      "Dell - Inspiron Desktop - Intel Core i5 - 12GB Memory - 256GB Solid State Drive - Black With Silver Trim",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6334/6334301_ra.jpg",
    price: 649.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i5-8400 processor; 12GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; keyboard",
    longDescription:
      "Meet deadlines and exceed expectations with this Dell Inspiron desktop PC. A 4GHz Intel Core i5 processor and 12GB of RAM deliver smooth, productivity-boosting performance and let users multitask without reducing system speeds. This Dell Inspiron desktop PC starts up and loads programs in seconds thanks to a 256GB SSD.",
  },
  {
    product_name:
      'Lenovo - A540-24API 23.8" Touch-Screen All-In-One - AMD Ryzen 3-Series - 8GB Memory - 256GB Solid State Drive - Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6365/6365785_sa.jpg",
    price: 649.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 3 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; webcam; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Get the job done with this Lenovo IdeaCentre all-in-one computer. The 23.8-inch Full HD capacitive display offers high-quality visuals and smooth touch operation while typing, and 8GB of RAM lets you run several windows simultaneously. This Lenovo IdeaCentre all-in-one computer features a 256GB SSD for fast data access and an AMD Ryzen 3 3200 processor for seamless performance while streaming.",
  },
  {
    product_name:
      'HP - 23.8" Touch-Screen All-In-One - AMD Ryzen 3-Series - 8GB Memory - 256GB SSD - Jet Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402515_sa.jpg",
    price: 649.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 3 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; wireless keyboard and mouse",
    longDescription:
      "Stay productive with this HP All-in-One desktop computer. The dual-core AMD Ryzen processor and 8GB of RAM smoothly handle numerous programs at once, while the 256GB SSD ensures speedy file storage and access. This HP All-in-One desktop computer has an AMD Radeon graphics card that delivers vivid visuals, and the four USB ports and single HDMI port offer flexible connectivity to various external devices.",
  },
  {
    product_name:
      "Dell - Inspiron 3880 Desktop - Intel Core i5-10400 - 12GB Memory - 256B SSD -Ethernet - WiFi - Bluetooth - keyboard + mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6423/6423485_sa.jpg",
    price: 649.99,
    shortDescription:
      "Inspiron 3880 Desktop - 10th Gen Intel Core - i5-10400 - 12GB Memory + 256GB SSD - Designed Specifically for home office/Small Business  - Windows 10 Home - Integrated Intel UHD Graphics 630 - no DVD drive included - Bluetooth  - HDMI output - Built-in wireless networking",
    longDescription:
      "The new Dell Inspiron 3880 Desktop. The compact design of the new desktop is 16% smaller than the previous Inspiron desktop. Featuring a 10th Gen Intel&#174; Core&#8482; i5 processor, 12GB of Memory, and a 256GB Solid State Drive, this desktop has the power to zip through tasks quickly and easily. Comes with a Gigabit Ethernet port, built-in WiFi, and a wired keyboard/mouse.  An expandable, space-saving design makes the Dell Inspiron 3880 a great option for the office or home. (DVD drive not included).",
  },
  {
    product_name:
      "Dell - Inspiron 3880 Desktop - Intel Core i5-10400 - 8GB Memory - 512B SSD -DVD Drive - DVD Drive - keyboard + mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6425/6425573_ra.jpg",
    price: 649.99,
    shortDescription:
      "Inspiron 3880 Desktop - 10th Gen Intel Core - i5-10400 - 8GB Memory + 512GB SSD - Designed Specifically for home office/Small Business  - Windows 10 Home - Integrated Intel UHD Graphics 630 - DVD drive included - Bluetooth  - HDMI output - Built-in wireless networking + killer ethernet port",
    longDescription:
      "The new Dell Inspiron 3880 Desktop. The compact design of the new desktop is 16% smaller than the previous Inspiron desktop. Featuring a 10th Gen Intel&#174; Core&#8482; i5 processor, 8GB of Memory, and a 512GB Solid State Drive, this desktop has the power to zip through tasks quickly and easily. Comes with a Gigabit Ethernet port, built-in WiFi, and a wired keyboard/mouse. Also equipped with a Tray load DVD drive (reads and writes DVD/CD's).  An expandable, space-saving design makes the Dell Inspiron 3880 a great option for the office or home.",
  },
  {
    product_name:
      'Dell - Inspiron 23.8" Touch-Screen All-In-One - Intel Core i3 - 8GB Memory - 256GB SSD - Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6398/6398974_sa.jpg",
    price: 679.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 10 Intel&#174; Core&#8482; i3 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; webcam; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Boost your productivity with this 23.8-inch Dell Inspiron all-in-one desktop computer. The Intel Core i3 processor and 8GB of RAM ensure fast, responsive program execution, while the 256GB SSD provides vast storage space for files. This Dell Inspiron all-in-one desktop computer has Intel UHD 620 integrated graphics that produce detailed visuals on the Full HD touch screen.",
  },
  {
    product_name:
      "HP - ENVY Desktop - Intel Core i5 - 12GB Memory - 512GB Solid State Drive - Nightfall Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366130_ra.jpg",
    price: 699.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i5-8400 processor; 12GB memory; 512GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "HP ENVY Desktop: Power your creativity with this HP ENVY desktop computer. The Intel UHD Graphics 630 integrated graphics deliver high-quality visuals so you can create or edit with precision, and the 512GB SSD shortens load times to start work quickly. This HP ENVY desktop computer has an 8th Gen Intel Core i5-8400 processor for speed, while the 12GB of RAM let you work with multiple windows smoothly.",
  },
  {
    product_name:
      "Dell - Inspiron 3000 Desktop - Intel Core i5-10400 - 12GB RAM - 1TB HDD - Win10 Pro - Ethernet+WiFi+Bluetooth - keyboard+mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6416/6416006_sa.jpg",
    price: 699.99,
    shortDescription:
      "Inspiron 3000 Desktop - Intel Core i5-10400 - 12GB RAM - 1TB HDD - Win10 Pro - Ethernet+WiFi+Bluetooth - keyboard+mouse",
    longDescription:
      "The new Dell Inspiron 3000 Desktop with Windows 10 Pro. The compact design of the new desktop is 16% smaller than the previous Inspiron desktop. Featuring 10th Gen Intel&#174; Core&#8482; processors and a wide range of upgradability options for a home office or tight workspace. Comes with a Killer Ethernet port, built-in WiFi, bluetooth, and a wired keyboard/mouse.  (DVD drive not included).",
  },
  {
    product_name:
      "HP - ENVY Desktop - Intel Core i5 - 12GB Memory - 512GB SSD - Nightfall Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6428/6428090_sa.jpg",
    price: 699.99,
    shortDescription: "ENVY Desktop - Intel Core i5 - 12GB Memory - 512GB SSD",
    longDescription:
      "Fuel your creativity. Experience the power and performance of the Intel&#174; processor that&#8217;s designed to meet your creation needs. Render, edit, and stream better than ever before.",
  },
  {
    product_name:
      "HP Pavilion Gaming Desktop - Intel Core i5-10400 - 8GB RAM - NVIDIA GeForce GTX 1650 Graphics - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437564_sa.jpg",
    price: 699.99,
    shortDescription:
      "Get ready to game on your terms. With seamless expansion and easy upgrades, this potent PC keeps up with you and the games of tomorrow.",
    longDescription:
      "Powerful graphics: Power the latest games with smooth and responsive visuals. Discrete graphics ensure this machine easily runs your favorite gaming titles.  High-speed performance: Play, create and multitask with a powerful processor. An enhanced thermal solution keeps your tower cool and quiet even when running demanding games and apps. Customizable and compact design: This sleek, space-saving tower allows you to expand and upgrade with customizable LED lights.",
  },
  {
    product_name:
      "Lenovo - ThinkCentre M720q Desktop - Intel Core i3 - 8GB Memory - 128GB Solid State Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6292/6292302_sa.jpg",
    price: 719.99,
    shortDescription:
      "Windows 10 Pro 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i3-8100T processor; 8GB memory; 128GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Complete challenging assignments quickly with this Lenovo ThinkCentre Tiny desktop PC. Featuring a quad-core 3.1GHz Intel Core i3 processor, this computer smoothly handles taxing programs and a range of professional assignments. This Lenovo ThinkCentre Tiny desktop PC has a 128GB solid-state drive that provides plenty of storage space and improves startup and loading times.",
  },
  {
    product_name:
      'Lenovo - IdeaCentre A340-24ICK 23.8" Touch-Screen All-In-One - Intel Core i3 - 8GB Memory - 1TB HDD - Business Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6408/6408485_sa.jpg",
    price: 729.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 9 Intel&#174; Core&#8482; i3 processor; 8GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; webcam; wireless keyboard and mouse",
    longDescription:
      "Clear your work backlog swiftly with this Lenovo IdeaCentre all-in-one desktop computer. The Intel Core i3 processor and 8GB of RAM run demanding programs smoothly, and the 1TB HDD offers vast storage space. This Lenovo IdeaCentre all-in-one desktop computer has a 23.8-inch Full HD touchscreen for delivering detailed visuals, and the included Calliope wireless keyboard and mouse ensure seamless operation.",
  },
  {
    product_name:
      'HP - 23.8" Touch-Screen All-In-One - Intel Core i3 - 8GB Memory - 256GB SSD - Jet Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6382/6382226_sa.jpg",
    price: 749.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 9 Intel&#174; Core&#8482; i3 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; webcam; keyboard and mouse",
    longDescription:
      "Stay on top of your game with this HP all-in-one computer. The Intel Core i3 processor and 8GB of RAM easily execute resource-intensive applications and support multitasking. This HP all-in-one computer boasts a Full HD display for crisp and clear picture quality.",
  },
  {
    product_name:
      'Lenovo - IdeaCentre A540 24" Touch-Screen All-In-One - AMD Ryzen 3-Series - 8GB Memory - 256GB Solid State Drive - Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6424/6424474_sa.jpg",
    price: 749.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 3 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; built-in wireless charger; Bluetooth; webcam; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Get the job done with this Lenovo IdeaCentre all-in-one computer. The 23.8-inch Full HD capacitive display offers high-quality visuals and smooth touch operation while typing, and 8GB of RAM lets you run several windows simultaneously. This Lenovo IdeaCentre all-in-one computer features a 256GB SSD for fast data access and an AMD Ryzen 3 3200 processor for seamless performance while streaming.",
  },
  {
    product_name:
      'HP - 23.8" Touch-Screen All-In-One - AMD Ryzen 5-Series - 12GB Memory - 256GB SSD - Natural Silver',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402516_sa.jpg",
    price: 779.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: AMD Ryzen 5 processor; 12GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; webcam; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Conserve space and enjoy a sleek computing solution with this HP all-in-one desktop. The 23.8-inch Full HD touchscreen offers clear, detailed graphics and responsive performance, while the 12GB of RAM and AMD Ryzen 5 processor support light gaming and multitasking. This Bluetooth-enabled HP all-in-one desktop features a 256GB NVMe SSD for short application and boot-up times.",
  },
  {
    product_name:
      "HP - Refurbished Desktop - Intel Core i7 - 16GB Memory - AMD Radeon RX 580 - 2TB Hard Drive + 128GB Solid State Drive - Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6358/6358983_sa.jpg",
    price: 799,
    shortDescription:
      "RefurbishedWindows 10 Home 64-bitAMD Radeon RX 580 8GB dedicated graphicsTechnical details: 8th Gen Intel&#174; Core&#8482; i7-8700 processor; 16GB memory; 128GB solid state drive; 2TB hard driveSpecial features: built-in wireless networking; HDMI output",
    longDescription:
      "Refurbished HP ENVY Desktop: Handle business computing with ease by using this refurbished HP ENVY tower. The powerful Intel Core i7 six-core processor and 16GB of RAM let you complete Photoshop tasks or video editing without lag, while the AMD Radeon RX 580 graphics card runs games at high settings. This Bluetooth-enabled HP ENVY tower has a 2TB hard drive and 128GB SSD for vast, speedy hybrid storage.  Learn more about refurbished products &#8250;",
  },
  {
    product_name:
      "Apple - Mac mini - Intel Core i3 - 8GB Memory - 128GB Solid-State Drive - Space Gray",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/1107/1107177_ra.jpg",
    price: 799.99,
    shortDescription:
      "New Mac mini. Now with eighth-generation 6-core and quad-core processors. Faster 2666MHz DDR4 memory. And blazing-fast all-flash storage. It's a huge update to Mac mini, ever",
    longDescription:
      "It's a huge update to Mac mini, ever. Eighth-generation quad-core processor. Faster 2666MHz DDR4 memory. A variety of new ports, including Thunderbolt 3, HDMI 2.0, and available 10Gb Ethernet.&#185; And blazing-fast all-flash storage so you can load giant files and launch apps faster than ever.&#178; The re-engineered Mac mini offers perfect performing. Ready for the desktop. And beyond.",
  },
  {
    product_name:
      "Apple - Mac mini Desktop - Intel Core i3 - 8GB Memory - 256GB Solid State Drive - Space Gray",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6200/6200727_sa.jpg",
    price: 799.99,
    shortDescription:
      "Eighth-generation quad-core processor. Fast 2666MHz DDR4 memory. And ultrafast all-flash storage. The reengineered Mac mini is more powerful than ever",
    longDescription:
      "Eighth-generation quad-core processor. Fast 2666MHz DDR4 memory. A variety of ports, including Thunderbolt 3, HDMI 2.0, and available 10Gb Ethernet.* And all-flash storage that's ultrafast, so you can load giant files and launch apps in an instant. The reengineered Mac mini is the best performing yet. Ready for the desktop. And beyond.",
  },
  {
    product_name:
      "Lenovo - IdeaCentre 510A Desktop - Intel Core i7 - 12GB Memory - 1TB Hard Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6203/6203018_ra.jpg",
    price: 799.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i7-8700 processor; 12GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Lenovo 510A-15ICB Desktop: Give yourself the gift of speed with this Lenovo desktop computer. This build features an Intel i7 processor and 12GB of DDR4 RAM for fast processing power, and the 1TB hard drive and DVD RW drive provide massive storage capacity. This Lenovo desktop computer comes with Windows 10 installed and includes a wired keyboard and mouse.",
  },
  {
    product_name:
      "Pavilion Desktop - Intel Core i7 - 8GB Memory - 256GB SSD - HP Finish In Natural Silver",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366726_sa.jpg",
    price: 799.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i7-8700 processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "HP Pavilion Desktop: Combine high performance and sleek styling with this HP Pavilion computer. An Intel Core i7 processor handles video editing and gaming, while the 8GB of RAM let you load multiple applications for better productivity. This HP Pavilion computer includes a 256GB M.2 SSD for a fast boot-up process and ample storage space, while the included mouse and keyboard enable quick setup.",
  },
  {
    product_name:
      "OptiPlex Desktop - Intel Core i5 - 8GB Memory - 256GB SSD - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6385/6385539_sa.jpg",
    price: 799.99,
    shortDescription:
      "Windows 10 Pro 64-bitTechnical details: 9th Gen Intel&#174; Core&#8482; i5-9500T processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output",
    longDescription:
      "Dell OptiPlex Desktop: Work smart and efficiently with this Dell OptiPlex desktop tower computer. The Intel Core i5 processor and 8GB of RAM deliver reliable performance and seamless multitasking, while the 256GB SSD blends fast boot times with ample storage. This Dell OptiPlex desktop tower computer features an Intel UHD graphics card for crisp clear visuals.",
  },
  {
    product_name:
      "Lenovo - ThinkCentre M90n-1 Nano Desktop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6397/6397684_ra.jpg",
    price: 799.99,
    shortDescription:
      "Windows 10 ProTechnical details: Intel Core i5-8265U processor; 8GB memory; 256GB solid-state driveSpecial features: Built-in wireless networking; Bluetooth; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Finish assignments and stream videos with this Lenovo ThinkCentre Nano desktop PC. The 1.6GHz Intel Core i5 processor and 8GB of RAM let you keep multiple tabs open and run programs simultaneously. This Lenovo ThinkCentre Nano desktop PC has a 256GB SSD that provides plenty of storage space and loads files quickly.",
  },
  {
    product_name:
      "Lenovo - ThinkCentre M720q Desktop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6306/6306024_sa.jpg",
    price: 809,
    shortDescription:
      "Windows 10 Pro 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i5-8400T processor; 8GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Lenovo ThinkCentre M720q Desktop: Maintain a clear work area with this small-form-factor Lenovo ThinkCentre Tiny computer. The Intel Core i5 processor and 8GB of RAM let you use multiple applications simultaneously, and the 256GB NVMe PCIe SSD shortens load times. This Lenovo ThinkCentre Tiny computer has an integrated Intel UHD Graphics 630 chipset, supporting multiple displays via the HDMI and DisplayPort outputs.",
  },
  {
    product_name:
      "Dell - Inspiron Desktop - Intel Core i7 - 12GB Memory - 256GB Solid State Drive - Black With Silver Trim",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6334/6334302_ra.jpg",
    price: 829.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i7-8700 processor; 12GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; keyboard",
    longDescription:
      "Manage large project files with the consistent fast performance of this Dell Inspiron desktop PC. The Intel Core i7 processor makes short work out of complex analyses with clock speeds up to 4.6GHz, while the 256GB SSD brings you enough storage space for vast data collection. This Dell Inspiron desktop PC manages resources efficiently while multitasking with its 12GB of RAM.",
  },
  {
    product_name:
      "Lenovo - IdeaCentre 5 14IMB05 Desktop - Intel Core i7 - 12GB Memory - 256GB SSD - Mineral Gray",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6408/6408489_sa.jpg",
    price: 829.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 10th Gen Intel&#174; Core&#8482; i7-10700 processor; 12GB memory; 256GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "Lenovo IdeaCentre 5 14IMB05 Desktop: Stay productive with this Lenovo IdeaCenter 5 desktop computer. An Intel Core i5 processor and 12GB of RAM let you execute tasks quickly even when running multiple applications. The 256GB SSD provides reliable storage for large files and applications, while the USB Type-C port transfers data at speeds of up to 10Gbps. Windows 10 Home is already loaded on this Lenovo IdeaCenter 5 desktop computer for function right out of the box.",
  },
  {
    product_name:
      'Dell - Inspiron 23.8" Touch-Screen All-In-One - Intel Core i7 - 12GB Memory - 1TB Hard Drive - Black',
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6297/6297719_sa.jpg",
    price: 849.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 7th Gen Intel&#174; Core&#8482; i7 processor; 12GB memory; 1TB hard driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; webcam; wireless keyboard and mouseNote: DVD/CD drive not included",
    longDescription:
      "Work efficiently with this 23.8-inch Dell Inspiron all-in-one PC. The Intel Core i7 processor facilitates smooth performance, and the 12GB of RAM ensures quick access to internet browsers, video editing software and other applications. This Dell Inspiron all-in-one PC has a 1TB hard drive for essential media and backup storage.",
  },
  {
    product_name:
      "Dell - Inspiron 3000 Desktop - Intel Core i7-10700 - 8GB Memory - 512GB SSD -DVD(R/W) - LAN+WiFi+Bluetooth - keyboard+mouse - Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6416/6416009_sa.jpg",
    price: 859.99,
    shortDescription:
      "Inspiron 3000 Desktop - 10th Gen Intel Core - i7-10700 - 8GB Memory + 512GB SSD - Designed Specifically for home office/small business - Windows 10 Home 64 bit - Integrated Intel UHD Graphics 630 - DVD drive (read and write) - Bluetooth  - HDMI output - Built-in wireless networking",
    longDescription:
      "The new Dell Inspiron 3000 Desktop . The compact design of the new desktop is 16% smaller than the previous Inspiron desktop. Featuring 10th Gen Intel&#174; Core&#8482;i7 processors and a wide range of upgradability options for a home office or tight workspace. Comes with an Ethernet port, built-in WiFi, DVD drive, and a wired keyboard/mouse.",
  },
  {
    product_name:
      "HP - ENVY Desktop - Intel Core i7 - 16GB Memory - 512GB Solid State Drive - Nightfall Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366132_ra.jpg",
    price: 869.99,
    shortDescription:
      "Windows 10 Home 64-bitTechnical details: 8th Gen Intel&#174; Core&#8482; i7-8700 processor; 16GB memory; 512GB solid state driveSpecial features: built-in wireless networking; Bluetooth; HDMI output; keyboard; mouse",
    longDescription:
      "HP ENVY Desktop: Enjoy solid power while creating content with this HP ENVY desktop computer. The 8th Gen Intel Core i7-8700 processor and 16GB of RAM provide high performance for running editing programs and simple multitasking, and the Intel UHD graphics 630 produce fast framerates for quality visuals. This HP ENVY desktop computer has a 512GB SSD for swift startup and data access times.",
  },
  {
    product_name:
      "HP - ENVY Desktop - Intel Core i7 - 16GB memory - 512GB SSD - Nightfall Black",
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6428/6428087_sa.jpg",
    price: 869.99,
    shortDescription: "ENVY Desktop - Intel Core i7 - 16GB memory - 512GB SSD",
    longDescription:
      "Fuel your creativity. Experience the power and performance of the Intel&#174; processor that&#8217;s designed to meet your creation needs. Render, edit, and stream better than ever before.",
  },
  {
    product_name: 'Amazon - All-New Kindle - 6" - 8GB - Black',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6408/6408375_sa.jpg",
    longDescription:
      "Read your favorite books on the go with this black Amazon Kindle. The rechargeable LiIon battery offers up to 34 days of use on a single charge, while the 6-inch 167 ppi display delivers crisp visuals even in direct sunlight. This Amazon Kindle features an adjustable front light for comfortable reading, and the 8GB of internal storage accommodate thousands of books.",
    shortDescription:
      '6" anti-glare touch screenSupports AAX, AZW, AZW3, DOC, DOCX, GIF, HTML, JPEG, MOBI, PDF, PNG, PRC, TXT formats8GB built-in memoryWi-Fi connectivity',
  },
  {
    product_name: 'Amazon - Fire 7 2019 release - 7" - Tablet - 16GB - Black',
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351374_sa.jpg",
    longDescription:
      "Read books and browse the web with this Amazon Fire 7 tablet. The 7-inch IPS display delivers clear text and sharp visuals, and the powerful battery offers up to 7 hours of use per charge. A 1.3GHz processor and 1GB of RAM ensure smooth performance and let this Amazon Fire 7 tablet handle heavy-duty tasks.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name: 'Amazon - Fire 7 2019 release - 7" - Tablet - 16GB - Plum',
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351407_sa.jpg",
    longDescription:
      "Browse the web or play games with this Amazon Fire 7-inch tablet. The 1GB of RAM lets you keep several apps open at once for effective multitasking, while the 2MP camera means you can capture photos and video. This Amazon Fire 7-inch tablet comes with Alexa for looking up information, running apps or turning on music with voice commands.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name: 'Amazon - Fire 7 2019 release - 7" - Tablet - 16GB - Sage',
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351409_sa.jpg",
    longDescription:
      "Stream content and access e-books with this Amazon Fire 7 tablet. The quad-core processor and 1GB of RAM deliver responsive performance, and dual-band Wi-Fi connectivity maximizes available bandwidth for streaming high-definition content. Featuring a 7-inch IPS display and a powerful battery, this Amazon Fire 7 tablet offers up to 7 hours of use per charge.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire 7 2019 release - 7" - Tablet - 16GB - Twilight Blue',
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351400_sa.jpg",
    longDescription:
      "Upgrade to a powerful new entertainment device with this Amazon Fire 7 tablet. The 1.3GHz quad-core processor and 1GB of RAM keep things running smoothly, and up to 7 hours of battery life provide ample on-the-go use. Hands-free Alexa support lets you easily access movies, music and information with this Amazon Fire 7 tablet, and the 7-inch IPS display offers stunning visuals.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name: 'Amazon - Fire 7 2019 release - 7" - Tablet - 32GB - Black',
    price: 69.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351530_sa.jpg",
    longDescription:
      "Stream content for up to seven hours on the 7-inch screen of this Amazon Fire 7 tablet. The 1.3GHz quad-core processor with 1GB of RAM handles tasks and queues up your favorite apps and movies efficiently for entertainment options. This black Amazon Fire 7 tablet features Wi-Fi connectivity that lets you manage the content your kids see.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name: 'Amazon - Fire 7 2019 release - 7" - Tablet - 32GB - Sage',
    price: 69.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351534_sa.jpg",
    longDescription:
      "Enjoy up to 7 hours of reading, browsing or streaming videos with this Amazon Fire 7 tablet. The 32GB of internal storage keep all your content in one place for quick access, while the quad-core processor and 1GB of RAM provide faster load speeds. This Amazon Fire 7 tablet is compatible with Alexa for hands-free control.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name: 'Amazon - Fire 7 2019 release- 7" - Tablet - 32GB - Plum',
    price: 69.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351533_sa.jpg",
    longDescription:
      "Read books and stream high-definition videos with this 7-inch Amazon Fire 7 tablet. A 1.3GHz processor and 1GB of RAM provide a responsive user experience and easily handle resource-intensive applications. This Amazon Fire 7 tablet has a 7-inch display and a powerful battery that offer up to 7 hours of viewing per charge.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire 7 Kids Edition 2019 release - 7" - Tablet - 16GB - Blue',
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351410_sa.jpg",
    longDescription:
      "Get kids interested in reading with this Amazon Fire 7 Kids Edition 7-inch tablet. A MediaTek processor and 1GB of RAM deliver responsive performance, and the 1024 x 600 display makes books and videos look detailed. This Amazon Fire 7 Kids Edition 7-inch tablet includes a protective case with a built-in kickstand that provides reliable protection and lets you watch content hands-free.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with kid-proof case',
  },
  {
    product_name:
      'Amazon - Fire 7 Kids Edition 2019 release - 7" - Tablet - 16GB - Pink',
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351415_sa.jpg",
    longDescription:
      "Let children pass the time away playing on this Amazon Fire 7 Kids Edition tablet. An included one-year Amazon subscription offers free unlimited access to over 20,000 apps, books, videos and games. Simple controls allow you to limit screen time, set learning objectives and ensure kids interact with age-appropriate content. This Amazon Fire 7 Kids Edition tablet features a child-proof case for durability.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with kid-proof case',
  },
  {
    product_name:
      'Amazon - Fire 7 Kids Edition 2019 release - 7" - Tablet - 16GB - Purple',
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6351/6351420_sa.jpg",
    longDescription:
      "Foster a love of reading with this Amazon Fire 7 Kids Edition tablet. Wi-Fi connectivity and the included 1 year of Amazon FreeTime Unlimited provide easy access to thousands of books and audiobooks. A 7-inch display and a powerful battery let this Amazon Fire 7 Kids Edition tablet deliver up to seven hours of videos, browsing and reading per charge.",
    shortDescription:
      'Fire OS 67" IPS touch-screen display with 1024 x 600 resolution16GB storage capacityQuad-core processorWi-Fi2.0MP front- and rear-facing camerasExpandable microSD slotComes with kid-proof case',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 32GB - Black',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384431_sa.jpg",
    longDescription:
      "Watch your favorite movie on this Amazon Fire HD 10 black tablet. The 6300 mAh battery offers uninterrupted use, while 32GB of internal memory provides enough storage space for downloads and media. This Amazon Fire HD 10 black tablet has 2GB of RAM and an octa-core 2.0GHz processor for reliable response, and the HD resolution renders detailed visuals on the 10.1-inch display.",
    shortDescription:
      'Fire OS 710.1" display with 1920 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 32GB - Plum',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384440_sa.jpg",
    longDescription:
      "Stay entertained with this Amazon Fire HD 10 tablet. The 2GB of RAM and octa-core 2.0GHz processor ensure fast, responsive performance, and the 32GB of internal memory holds your collection of movies, games and books. This Amazon Fire HD 10 tablet has a 6300 mAh battery, providing ample power for uninterrupted use, while the Bluetooth connectivity lets you stream music wirelessly.",
    shortDescription:
      'Fire OS 710.1" display with 1920 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 32GB - Twilight Blue',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384433_sa.jpg",
    longDescription:
      "Watch your favorite movie with this twilight blue Amazon Fire HD 10 tablet. The Full HD screen resolution produces crisp, bright visuals on the 10.1-inch display, and 32GB of internal storage offers plenty of space for apps and media. This Amazon Fire HD 10 tablet has an octa-core 2.0GHz processor and 2GB of RAM for smooth games and videos.",
    shortDescription:
      'Fire OS 710.1" display with 1920 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 32GB - White',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384432_sa.jpg",
    longDescription:
      "Get a portable entertainment system with this white Amazon Fire HD 10 tablet. The 10.1-inch Full HD capacitive display offers high-quality visuals and seamless touch operation, while the 32GB of internal storage ensures ample space for all your files and applications. This Amazon Fire HD 10 tablet has a 6300 mAh lithium-ion battery, providing more than 11 hours of intensive use.",
    shortDescription:
      'Fire OS 710.1" display with 1920 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 64GB - Black',
    price: 189.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384441_sa.jpg",
    longDescription:
      "Stay productive with this black 10.1-inch Amazon Fire HD 10 tablet. The 2.0MP rear camera and front camera let you capture special moments, while the 64GB of internal memory offers plenty of storage space for apps and media. This Amazon Fire HD 10 tablet has 2GB of RAM for fast, smooth performance, and the Bluetooth connectivity streams music wirelessly.",
    shortDescription:
      'Fire OS 710.1" display with 1920 x 1200 resolution64GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 64GB - Plum',
    price: 189.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384445_sa.jpg",
    longDescription:
      "Read, watch videos and browse the web with this Amazon Fire HD 10 tablet. The 10.1-inch Full HD touch screen delivers detailed visuals for an immersive viewing experience, and the 64GB of memory provides plenty of storage space. This Amazon Fire HD 10 tablet has a 2GHz processor and 2GB of RAM that let you run multiple demanding applications at once.",
    shortDescription:
      'Fire OS 710.1" display with 1600 x 1200 resolution64GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 64GB - Twilight Blue',
    price: 189.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384444_sa.jpg",
    longDescription:
      "Immerse yourself in all-day web browsing with this twilight blue Amazon Fire HD 10 tablet. The 64GB of storage space lets you install favorite applications and download media files, while 2GB of RAM works across multiple windows for effective multitasking. This Amazon Fire HD 10 tablet has a 6300 mAh LiIon battery that offers up to 11 hours of use on a single charge.",
    shortDescription:
      'Fire OS 710.1" display with 1600 x 1200 resolution64GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 2019 release - 10.1" - Tablet - 64GB - White',
    price: 189.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384443_sa.jpg",
    longDescription:
      "Watch movies and chat seamlessly with this white Amazon Fire HD 10 tablet. The 64GB of internal storage offers ample space for your applications and media files, while the 6300 mAh rechargeable LiIon battery provides up to 11 hours of use when fully charged. This Amazon Fire HD 10 tablet has dual 2.0MP cameras for capturing precious moments in stunning clarity, and 2GB of RAM ensures effortless multitasking.",
    shortDescription:
      'Fire OS 710.1" display with 1920 x 1200 resolution64GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 Kids Edition 2019 release - 10.1" - 32GB - Purple',
    price: 199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384449_sa.jpg",
    longDescription:
      "Keep your kid entertained with this purple Amazon Fire HD 10 Kids Edition tablet. With 32GB of internal storage, this tablet offers space for video clips and games, while the 6300 mAh battery provides up to 11 hours of continuous use on a single charge. This Amazon Fire HD 10 Kids Edition tablet has 2GB of RAM for playing games and audio files simultaneously, and the 2.0MP dual camera captures clear pictures and videos.",
    shortDescription:
      'Fire OS 710.1" display with 1600 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 Kids Edition 2019 release - 10.1" - Tablet - 32GB - Blue',
    price: 199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384446_sa.jpg",
    longDescription:
      "Deliver hours of engagement for your child with this black Amazon Fire HD 10 Kids Edition tablet. The 6300 mAh rechargeable LiIon battery offers up to 11 hours of intensive use when fully charged, and the pair of 0.7W speakers produce crisp, powerful sound for an immersive gaming and multimedia experience. This Amazon Fire HD 10 Kids Edition tablet has a 10.1-inch Full HD capacitive display for high-quality visuals and responsive touch operation.",
    shortDescription:
      'Fire OS 710.1" display with 1600 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 10 Kids Edition 2019 release - 10.1" - Tablet - 32GB - Pink',
    price: 199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384447_sa.jpg",
    longDescription:
      "Keep your child entertained with this Amazon Fire HD 10 Kids Edition tablet. The Full HD resolution produces detailed photos on the 10.1-inch display, while the 32GB of internal memory provides ample storage space for media and games. This Amazon Fire HD 10 Kids Edition tablet has a built-in stand for seamless hands-free operation, and the 6300 mAh battery offers reliable power for extended use.",
    shortDescription:
      'Fire OS 710.1" display with 1600 x 1200 resolution32GB memoryOcta-core processorWi-Fi connectivityHands-free with AlexamicroSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 32GB - Black',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412935_sa.jpg",
    longDescription:
      "Work and play on the go with this 8-inch 10th Gen Amazon Fire HD tablet. The 2GB of RAM lets you flip through multiple apps smoothly, while the 2.0MP front-facing camera enables crystal-clear video calls. This Amazon Fire HD tablet features 32GB of internal storage to provide ample space for videos and photos.",
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP rear- and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 32GB - Plum',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412937_sa.jpg",
    longDescription:
      "Stay in touch with loved ones with this Amazon Fire HD 8 tablet. The 8-inch HD display offers vibrant visuals, while the 2.0GHz quad-core processor and 2GB of RAM deliver responsive performance. This Amazon Fire HD 8 tablet has a durable battery that provides up to 12 hours of uninterrupted use.",
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP rear- and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 32GB - Twilight Blue',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412943_sa.jpg",
    longDescription:
      "Stay productive on the go with this Amazon all-new Fire HD tablet. The 720p HD recording capacity allows smooth teleconferencing, while the 2GB of RAM and a quad-core processor deliver ultrafast performance. This Amazon all-new Fire HD tablet is USB Type-C enabled for rapid charging, and a built-in battery provides up to 12 hours of runtime.",
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP rear- and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 32GB - White',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412945_sa.jpg",
    longDescription:
      "Enjoy the latest videos and games with this 10th Gen Amazon Fire HD tablet. The 32GB of storage accommodates plenty of media files and apps, while the lithium-ion polymer battery lasts for up to 12 hours for reliable availability. This Amazon Fire HD tablet features 2GB of RAM and a quad-core processor for seamless multitasking.",
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP rear- and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 64GB - Black',
    price: 119.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412936_sa.jpg",
    longDescription:
      'Work, play and browse with this black Amazon Kindle Fire HD 8 tablet. The quad-core processor and 2GB of RAM deliver fast processing speeds, while the 64GB of memory provides ample storage space for files and applications. This Amazon Kindle Fire HD 8 tablet has Wi-Fi connectivity that lets you stream games and videos, and the 8" capacitive display allows easy menu navigation.',
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution64GB storage capacityQuad-core processorWi-Fi2.0MP rear and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 64GB - Plum',
    price: 119.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412938_sa.jpg",
    longDescription:
      'Stream your favorite videos easily with this 8" Amazon Fire HD 8 tablet. The 64GB of internal storage offers ample space and can be expanded up to 1TB, while the rechargeable battery delivers up to 12 hours of use. This Amazon Fire HD 8 tablet features a 2.0GHz quad-core processor for fast performance, and the Amazon FreeTime function lets you set child profiles for educational use.',
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution64GB storage capacityQuad-core processorWi-Fi2.0MP rear and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 64GB - Twilight Blue',
    price: 119.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412944_sa.jpg",
    longDescription:
      'Stream content from your favorite apps with this Amazon Fire HD tablet. The responsive, 8" HD screen offers an immersive viewing experience from multiple angles, while the 64GB of internal storage lets you store movies and music for on-the-go entertainment. This Amazon Fire HD tablet is compatible with Amazon Alexa for convenient, hands-free control.',
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution64GB storage capacityQuad-core processorWi-Fi2.0MP rear and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 10th Generation - 8" - Tablet - 64GB - White',
    price: 119.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412946_sa.jpg",
    longDescription:
      "Connect with loved ones using this Amazon Fire HD tablet. The 2.0GHz quad-core processor and 2GB of RAM let you work with multiple open tabs. This Amazon Fire HD tablet features a USB Type-C charger for fast charging and an all-day battery that allows up to 12 hours of use on a single charge.",
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution64GB storage capacityQuad-core processorWi-Fi2.0MP rear and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 Kids Edition 10th Generation - 8" - Tablet - 32GB - Blue',
    price: 139.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412947_sa.jpg",
    longDescription:
      "Foster a reading culture in your young one with this blue Amazon Kindle Fire HD 8 Kids Edition tablet. The 32GB of internal storage offers ample file storage, while the rechargeable 4580 mAh LiIon battery offers over 12 hours of use when fully charged. This Amazon Kindle Fire HD 8 Kids Edition tablet has a 2-megapixel camera for capturing quality videos and photos.",
    shortDescription:
      'Fire OS 7; 8" display with 1280 x 800 resolution; 32GB memory; quad-core processor; Wi-Fi connectivity; hands-free with Alexa; 2.0MP cameras; up to 1TB microSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 8 Kids Edition 10th Generation - 8" - Tablet - 32GB - Pink',
    price: 139.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412948_sa.jpg",
    longDescription:
      "Homeschool your children with this Amazon Fire HD 8 Kids Edition tablet. The 12-hour of battery life offers all-day use for reading activities and is powered via USB-C for fast charging, while the 32GB of internal storage accommodates media content. This Amazon Fire HD 8 Kids Edition tablet features a kid-proof case with a built-in stand for hands-free use and durability.",
    shortDescription:
      'Fire OS 7; 8" display with 1280 x 800 resolution; 32GB memory; quad-core processor; Wi-Fi connectivity; hands-free with Alexa; 2.0MP cameras; up to 1TB microSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 8 Kids Edition 10th Generation - 8" - Tablet - 32GB - Purple',
    price: 139.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412950_sa.jpg",
    longDescription:
      "Keep your child entertained with this 8-inch Kindle Fire HD Kids Edition tablet. The 4850 mAh battery offers over 12 hours of use on a single charge, while the MTK/MT8168 processor and 2GB of RAM deliver smooth response and multitasking. This Kindle Fire HD Kids Edition tablet has 32GB of internal storage for accommodating downloads and photos.",
    shortDescription:
      'Fire OS 7; 8" display with 1280 x 800 resolution; 32GB memory; quad-core processor; Wi-Fi connectivity; hands-free with Alexa; 2.0MP cameras; up to 1TB microSD card slot',
  },
  {
    product_name:
      'Amazon - Fire HD 8 Plus 10th Generation - 8" - Tablet - 32GB - Slate',
    price: 109.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412940_sa.jpg",
    longDescription:
      'Stay connected with friends and family with this Amazon Fire tablet. The 8" HD display produces lifelike visuals, while a powerful battery provides up to 12 hours of uninterrupted use. Featuring a quad-core processor, this Amazon Fire tablet delivers ultrafast performance, and 1TB of storage capacity accommodates files and downloads.',
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution32GB storage capacityQuad-core processorWi-Fi2.0MP rear- and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Fire HD 8 Plus 10th Generation - 8" - Tablet - 64GB - Slate',
    price: 139.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6412/6412941_sa.jpg",
    longDescription:
      'Enjoy uninterrupted web browsing on the go with this 10th-generation 8" Amazon Fire HD 8 Plus tablet. The 64GB storage capacity offers ample space for applications and media files, while the 4GB of RAM allows multitasking across multiple applications and windows. This Amazon Fire HD 8 Plus tablet features a quad-core processor for enhanced performance and Amazon Alexa for effortless operation.',
    shortDescription:
      'Fire OS 78" IPS touch-screen display with 1280 x 800 resolution64GB storage capacityQuad-core processorWi-Fi2.0MP rear- and front-facing camerasExpandable microSD slotComes with Alexa',
  },
  {
    product_name:
      'Amazon - Kindle (10th Generation) Kids Edition - 6" - 8GB - Blue',
    price: 109.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384526_sa.jpg",
    longDescription:
      "Load up this Kindle reader with your favorite titles, and take you library with you wherever you roam. The slim design stows easily in your bag or backpack, while the 8GB memory provides room for hundreds of books. Featuring an adjustable front light, this Kindle reader offers comfortable reading indoors or out.",
    shortDescription:
      '6" screen with 167 ppi resolutionAZW3, AZW, TXT, PDF, unprotected MOBI, PRC natively; HTML DOC, DOCX, JPEG, GIF, PNG, PMP through conversion; audible audio format (AAX)8GB built-in memoryWi-Fi connectivity',
  },
  {
    product_name:
      'Amazon - Kindle (10th Generation) Kids Edition - 6" - 8GB - Pink',
    price: 109.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6384/6384528_sa.jpg",
    longDescription:
      "Take on any title with this Kindle reader. At-a-tap controls let you underline important passages and look up unfamiliar terms quickly, while the paper-like display looks just like the pages of your favorite books. This Kindle reader features adjustable front lighting, letting you read outside in broad daylight or snuggled up in your bed at night.",
    shortDescription:
      '6" screen with 167 ppi resolutionAZW3, AZW, TXT, PDF, unprotected MOBI, PRC natively; HTML DOC, DOCX, JPEG, GIF, PNG, PMP through conversion; audible audio format (AAX)8GB built-in memoryWi-Fi connectivity',
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (AT&T) - Gold",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340574_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (AT&T) - Silver",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340573_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (AT&T) - Space Gray",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340571_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (Unlocked) - Gold",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340428_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (Unlocked) - Silver",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340427_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (Unlocked) - Space Gray",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340426_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (Verizon) - Gold",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340814_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (Verizon) - Silver",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340813_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 128GB (Verizon) - Space Gray",
    price: 559.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340812_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 32GB (AT&T) - Gold",
    price: 459.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340570_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 32GB (AT&T) - Silver",
    price: 459.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340568_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 32GB (Unlocked) - Gold",
    price: 459.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340425_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name:
      "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi + Cellular - 32GB (Unlocked) - Silver",
    price: 459.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6340/6340424_sa.jpg",
    longDescription:
      "The new iPad. It's your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.&#185; Attach a full-size Smart Keyboard for comfortable typing.&#185; And go further with Wi-Fi and Gigabit-class LTE&#178; and all-day battery life.&#179;",
    shortDescription:
      "Delightfully capable. Surprisingly affordable. More function. More fun",
  },
  {
    product_name: '24" Class D-Series LED HD Smart VIZIO SmartCast TV',
    price: 119.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6293/6293774_sa.jpg",
    longDescription:
      "Get lost in your favorite shows when you watch on this VIZIO D-Series smart LED HDTV. Edge-lit LED backlighting delivers excellent picture quality, while the 24-inch screen is ideal for use in a bedroom, kitchen or den. VIZIO WatchFree provides access to more than 100 free streaming channels, and built-in Chromecast provides access to even more content. This VIZIO D-Series smart LED HDTV connects to DVRs and DVD players using the convenient HDMI inputs.",
    shortDescription: "720p (HD) resolutionSmart TV, Chromecast built-in",
  },
  {
    product_name: '32" Class D-Series LED HD Smart VIZIO SmartCast TV',
    price: 129.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6363/6363866_sa.jpg",
    longDescription:
      "Experience advanced access to entertainment with this VIZIO D-Series smart TV. The full-array LED back-lighting plus impressive refresh rate generates quality photos, and voice-control support for Google Assistant ensures easy use as a smart-home companion. This VIZIO D-Series smart TV lets you surf and launch well-known streaming apps using the innovative remote.",
    shortDescription: "720p (HD) resolutionSmart TV, SmartCast",
  },
  {
    product_name: '40" Class V-Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 239.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6333/6333198_sa.jpg",
    longDescription:
      "Watch movies or deliver presentations with this VIZIO Ultra HD smart home theater display. Measuring 40 inches diagonally, the screen is large enough for everyone in the room to see. This VIZIO Ultra HD smart home theater display shows 1.07 billion colors for vivid photos and strong color accuracy.",
    shortDescription:
      "2160p (4K) resolution with HDRHigh Dynamic Range plus Dolby VisionChromecast built-in",
  },
  {
    product_name:
      '43" Class M-Series Quantum Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 379.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366591_sa.jpg",
    longDescription:
      "Watch content in stunning detail on this VIZIO M-Series 43-inch 4K smart TV. Quantum Color technology makes everything look vibrant and lifelike, and the Active Full Array backlight enhances contrast. This VIZIO M-Series 43-inch 4K smart TV lets you watch content in up to 4K resolution and offers easy access to streaming services.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0Clear Action 360",
  },
  {
    product_name: '43" Class V-Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 279.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6350/6350185_sa.jpg",
    longDescription:
      "Experience cinematic visuals at home with this VIZIO 43-inch 4K smart TV. SmartCast 3.0 and Chromecast provide access to popular streaming services, and an octa-core processor makes the interface responsive and lag-free. This VIZIO 43-inch 4K smart TV features voice control for intuitive hands-free operation, while the two built-in speakers offer virtual surround sound for immersive audio.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0Clear Action 180",
  },
  {
    product_name: '50" Class V-Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6305/6305315_sa.jpg",
    longDescription:
      "Watch the shows and movies you've been missing with this 50-inch VIZIO smart TV. It has a USB port and three HDMI ports, so you can access content from multiple devices, and the LED backlit screen represents colors realistically. This VIZIO smart TV has motion-enhanced technology for a 60Hz refresh rate.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast60Hz refresh rate",
  },
  {
    product_name:
      '55" Class M-Series Quantum Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 549.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6345/6345457_sa.jpg",
    longDescription:
      "Upgrade your home theater with this 55-inch VIZIO M-Series Quantum smart TV. Native 4K resolution lets you experience content in rich detail, and an integrated Spatial Scaling engine improves photo quality in real time. This VIZIO M-Series Quantum smart TV features Apple AirPlay and Homekit compatibility and boasts a dynamic contrast ratio of 5,000,000:1, which improves photo quality with brighter whites and darker, more natural blacks.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0Clear Action 360",
  },
  {
    product_name: '55" Class V-Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 339.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6362/6362192_sa.jpg",
    longDescription:
      "Get a cinematic viewing experience with this VIZIO V-Series 55-inch 4K smart TV. Native 4K resolution and Dolby Vision HDR make content look detailed and lifelike with accurate colors and striking contrast. This VIZIO V-Series 55-inch 4K smart TV includes a variety of smart features that provide easy access to applications and huge content libraries.",
    shortDescription: "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0",
  },
  {
    product_name:
      '65" Class M-Series Quantum LED LED 4K UHD Smart VIZIO SmartCast TV',
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6345/6345460_sa.jpg",
    longDescription:
      "Get cinema-quality visuals with this 65-inch VIZIO M-Series Quantum smart TV. The native 4K resolution delivers sharp, lifelike visuals in the comfort of your home. This VIZIO M-Series Quantum smart TV features Chromecast, Apple AirPlay and Homekit compatibility and boasts an advanced Wi-Fi connectivity for watching content on popular streaming services.",
    shortDescription:
      "2160p (4K) resolution with HDRQLED TV: Featuring Quantum Dot technologySmart TV, SmartCastClear Action 360",
  },
  {
    product_name:
      '65" Class P-Series Quantum Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 999.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6346/6346168_sa.jpg",
    longDescription:
      "Enjoy immersive visual content with this 65-inch VIZIO P-Series UHD smart TV. The Wi-Fi connectivity supports seamless media streaming, while the five HDMI inputs and USB and Ethernet ports connect to external sources. Compatibility with Apple AirPlay and HomeKit lets you share photos and video from all your enabled devices with a touch. This VIZIO P-Series UHD smart TV provides 4K picture quality for true-to-life viewing experience, and two 10W speakers deliver audio.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0Clear Action 960",
  },
  {
    product_name: '65" Class V-Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 529.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6363/6363882_sa.jpg",
    longDescription:
      "Control and stream content directly or from a compatible mobile device with this VIZIO V-Series 65-inch smart UHD LED TV. The spatial scaling engine gives low-resolution content a boost for better clarity, while Clear Action technology reduces blur in fast-moving scenes for a more immersive experience. This VIZIO V-Series 65-inch smart UHD LED TV features three HDMI ports, letting you connect multiple devices.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0Clear Action 180",
  },
  {
    product_name: '70" Class V-Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 659.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6358/6358925_sa.jpg",
    longDescription:
      "Get a cinematic viewing experience with this VIZIO V-Series 70-inch 4K Smart TV. Native 4K UHD resolution and Dolby Vision HDR let you watch content in stunning detail with vivid colors. Dual-band Wi-Fi connectivity and an array of smart features let this VIZIO V-Series 70-inch 4K Smart TV access a variety of streaming services.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0120Hz effective refresh rate",
  },
  {
    product_name:
      '75" Class P-Series Quantum Series LED 4K UHD Smart VIZIO SmartCast TV',
    price: 1649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6346/6346172_sa.jpg",
    longDescription:
      "Watch movies, TV shows and even your vacation videos in Ultra HD quality on this 75-inch VIZIO smart TV. The 178-degree viewing angle provides superior color accuracy from multiple sitting positions. This VIZIO smart TV features two 15W speakers for an immersive acoustic experience, and compatibility with Apple AirPlay and HomeKit lets you use Siri to share from your phone, tablet and other devices.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, SmartCast 3.0Clear Action 960",
  },
  {
    product_name: 'Furrion - 43" Class LED Outdoor Full Shade 4K UHD TV',
    price: 1099.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414917_sa.jpg",
    longDescription:
      "Tune in to your favorite shows on this 43-inch Furrion Aurora Shade outdoor TV. The auto-brightness control adjusts the screen lighting to help prevent glaring and eye strain, while the weatherproof construction and an included waterproof remote withstand harsh conditions. This Furrion Aurora Shade outdoor TV has a 4K UHD display for detailed visuals.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Furrion - 43" Class LED Outdoor Partial Sun 4K UHD TV',
    price: 1299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414920_sa.jpg",
    longDescription:
      "Experience immersive visuals with this 43-inch Furrion Aurora Partial Sun TV. The IP54 rating and weatherproof construction make it ideal for outdoor use, while the 4K UHD display produces crisp, detailed photory. Boasting auto-brightness control, this Furrion Aurora Partial Sun TV allows optimal viewing, and anti-glare technology helps prevent eye strain.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Furrion - 49" Class LED Outdoor Full Shade 4K UHD TV',
    price: 1399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414916_sa.jpg",
    longDescription:
      "Enjoy a cinematic viewing experience with this 49-inch Furrion Aurora 4K full-shade outdoor TV. The anti-glare screen coating minimizes reflections for immersive viewing, while the weatherproof design resists the elements for enduring durability. This Furrion Aurora 4K full-shade outdoor TV has a UHD resolution, which offers sharp visuals, and the ambient light sensor adjusts screen lighting for crisp visuals during the day and night.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Furrion - 49" Class LED Outdoor Partial Sun 4K UHD TV',
    price: 1799.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414922_sa.jpg",
    longDescription:
      "Watch your favorite shows on this 49-inch Furrion Aurora partial sun outdoor TV. The 4K display produces stunning UHD photory, while auto brightness control adjusts brightness depending on the lighting conditions for an immersive experience. This Furrion Aurora partial sun outdoor TV features a weatherproof housing that withstand harsh conditions, and the included weatherproof remote control offers easy operation.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Furrion - 55" Class LED Outdoor Full Shade 4K UHD TV',
    price: 1699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414918_sa.jpg",
    longDescription:
      "Enhance your viewing experience with this 55-inch Furrion Aurora full shade 4K LED outdoor TV. The 178-degree viewing angle provides clear pictures from different positions, while the 60Hz refresh rate minimizes motion blur for crisp, detailed visuals. This Furrion Aurora full shade 4K LED outdoor TV is weatherproof to protect against harsh elements, and the 2160p UHD resolution renders stunning photos.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Furrion - 55" Class LED Outdoor Partial Sun 4K UHD TV',
    price: 2299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414921_sa.jpg",
    longDescription:
      "Improve barbeque entertainment with this 55-inch Furrion Aurora Partial Sun 4K LED outdoor TV. The weatherproof construction has an IP54 rating to withstand wet and hot conditions, while the UHD display produces sharp vivid photos for quality visuals. This Furrion Aurora Partial Sun 4K LED outdoor TV features auto-brightness control for detecting external light conditions and adjusting for ideal viewing.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Furrion - 65" Class LED Outdoor Full Shade 4K UHD TV',
    price: 2399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414923_sa.jpg",
    longDescription:
      "Catch up with your favorite actors and shows with this 65-inch Furrion Aurora full shade outdoor TV. The 4K support and UHD display deliver lifelike visuals for immersive viewing, while the weatherproof construction and water-resistant remote stand up to the elements. This Furrion Aurora full shade outdoor TV has auto-brightness control to help reduce eye strain.",
    shortDescription: "2160p (4K) resolution60Hz refresh rate",
  },
  {
    product_name: 'Hisense - 32" Class H55 Series LED HD Smart Android TV',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402785_sa.jpg",
    longDescription:
      "Stream your favorite content wirelessly with this 32-inch Hisense HD smart TV. The Android OS with Google Assistant built in lets you search for movies or control smart appliances from the comfort of your sofa, while the 720p resolution delivers a sharp, vivid display for a more immersive experience. This 32-inch Hisense HD smart TV features motion rate photo processing to minimize lag during fast-paced scenes.",
    shortDescription: "720p (HD) resolutionSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name: 'Hisense - 32" Class H5500 Series LED HD Smart Android TV',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6374/6374925_sa.jpg",
    longDescription:
      "Bring endless audiovisual entertainment to your living room with this 32-inch Hisense Android smart TV. DTS Studio Sound produces stunning audio, while Android OS provides access to thousands of apps and enables voice control via the built-in Google Assistant. This Hisense Android smart TV features Motion Rate 120 technology for smooth transitions in action movies and games.",
    shortDescription: "720p (HD) resolutionSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name: 'Hisense - 32" Class H5510G Series HD Tv Smart LED',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6431/6431204_sa.jpg",
    longDescription:
      "The H55 Series HD Smart TV is an entertainment must-have that features an Android Operating System (OS) with Google Assistant built-in, so that you can search for movies and control the lights without ever leaving your couch. Other details include DTS Studio Sound for crisp audio and Bluetooth connectivity, to stream music through your headphones without the fuss of wires. The screen size also makes it ideal for smaller rooms&#8212;and budgets.",
    shortDescription: "720p resolution Smart Tv Android Tv Motion Rate 120",
  },
  {
    product_name: 'Hisense - 40" Class H55 Series LED Full HD Smart Android TV',
    price: 229.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6403/6403993_sa.jpg",
    longDescription:
      "Enjoy a cinematic view while watching favorite movies on this 40-inch Hisense H55 Series Full HD smart TV. The pair of 7W speakers deliver powerful, room-filling sound for an all-around entertainment experience, while Wi-Fi connectivity lets you stream online content smoothly. This Hisense H55 Series Full HD smart TV supports Google Assistant for easy multimedia handling, and VESA mount compatibility allows installation on a wall.",
    shortDescription:
      "1080p (Full HD) resolutionSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name: 'Hisense - 43" Class H55 Series LED Full HD Smart Android TV',
    price: 269.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404057_sa.jpg",
    longDescription:
      "The H55 Series Full HD Smart TV is an entertainment must-have that features an Android Operating System (OS) with Google Assistant built-in, so that you can search for movies and control the lights without ever leaving your couch.  Other details include DTS Studio Sound for crisp audio and Bluetooth Audio, to stream music through your headphones without the fuss of wires.  The screen size also makes it ideal for smaller rooms&#8212;and budgets.",
    shortDescription: "2K Full HD Smart Android TV",
  },
  {
    product_name:
      'Hisense - 43" Class H5510G Series LED Full HD Smart Android TV',
    price: 299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6429/6429656_sa.jpg",
    longDescription:
      "The H55 Series Full HD Smart TV is an entertainment must-have that features an Android Operating System (OS) with Google Assistant built-in, so that you can search for movies and control the lights without ever leaving your couch.  Other details include DTS Studio Sound for crisp audio and Bluetooth Audio, to stream music through your headphones without the fuss of wires.  The screen size also makes it ideal for smaller rooms&#8212;and budgets.",
    shortDescription: "Full HD Smart Android TV",
  },
  {
    product_name: 'Hisense - 43" Class H65 Series LED 4K UHD Smart Android TV',
    price: 279.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404056_sa.jpg",
    longDescription:
      "Enjoy exceptional color and clarity with this 43-inch Hisense UHD smart TV. Remote voice control supports TV programming selection, app search and modifications to the volume and other inputs simply by speaking. This Hisense UHD smart TV lets you display videos, photos and music from your smartphone and streaming services with built-in Chromecast.",
    shortDescription:
      '43" Class H65 Series LED 4K UHD Smart Android Tv with Dolby Vision HDR',
  },
  {
    product_name: 'Hisense - 50" Class H65 Series LED 4K UHD Smart Android TV',
    price: 349.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404000_sa.jpg",
    longDescription:
      "Experience advanced entertainment with this 50-inch Hisense Ultra HD TV. Dolby Vision HDR displays everything from deepest blacks to bright whites in crisp resolution, while Google Assistant delivers hands-free voice control. Discover a range of movies, TV shows and over 4,000 apps and games with Android TV compatibility. With four times the resolution of standard high-definition, this Hisense Ultra HD TV brings your favorite shows to life.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name:
      'Hisense - 50" Class H8G Quantum Series LED 4K UHD Smart Android TV',
    price: 429.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6403/6403989_sa.jpg",
    longDescription:
      "Experience unparalleled detail and rich color with this Hisense Quantum UHD TV. With a bezel-less frame, additional dimming zones and a display capable of over a billion color combinations, your favorite games and programs are more vivid than ever. Built-in voice control on this Hisense Quantum UHD TV lets you change channels with just a word.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion rate 240",
  },
  {
    product_name: 'Hisense - 55" Class H65 Series LED 4K UHD Smart Android TV',
    price: 399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402782_sa.jpg",
    longDescription:
      "Revolutionize your gaming and movie-watching experience with this 55-inch Hisense H65 Series smart Android TV. The built-in Chromecast makes it easy to share content from your smartphone onto the big screen, while 4K Ultra HD resolution ensures accurate picture reproduction. This Hisense H65 Series smart Android TV features Bluetooth functionality for easy connection to soundbars and external speakers.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name:
      'Hisense - 55" Class H6510G Series LED 4K UHD Smart Android TV',
    price: 399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6429/6429406_sa.jpg",
    longDescription:
      "Revolutionize your gaming and movie-watching experience with this 55-inch Hisense H65 Series smart Android TV. The built-in Chromecast makes it easy to share content from your smartphone onto the big screen, while 4K Ultra HD resolution ensures accurate picture reproduction. This Hisense H65 Series smart Android TV features Bluetooth functionality for easy connection to soundbars and external speakers.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name:
      'Hisense - 55" Class H8G Quantum Series LED 4K UHD Smart Android TV',
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6403/6403994_sa.jpg",
    longDescription:
      "Transform your viewing experience with this 55-inch Hisense Quantum smart TV. The Dolby Vision HDR technology and Dolby Atmos blend to deliver immersive visuals and cinema-like sound, while the Hi-View Engine and local dimming zones produce vivid and sharp photo contrasts. This Hisense Quantum smart TV features AI technology for adjusting pictures automatically, and the game mode improves refresh rates for impressive responses.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 240",
  },
  {
    product_name:
      'Hisense - 55" Class H9G Quantum Series LED 4K UHD Smart Android TV',
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6403/6403995_sa.jpg",
    longDescription:
      "Savor hyper-realistic entertainment with this Hisense 55-inch Quantum UHD TV. A combination of quantum dot and wide color gamut technologies boosts color and brightness. Motion Rate 480 keeps up with all the action, while local dimming zones deliver sharp contrast. ULED and PQ enhancing focus on the most important areas of picture quality for a vibrant, lifelike experience from this Hisense 55-inch Quantum UHD TV.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 480",
  },
  {
    product_name: 'Hisense - 55" Class R6070E3 Series LED 4K UHD Smart Roku TV',
    price: 349.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6387/6387624_sa.jpg",
    longDescription:
      "Stream high-definition content with this Hisense 55-inch 4K UHD Roku TV. Native 4K resolution and HDR10 provide a cinematic viewing experience with crisp details and lifelike colors. This Hisense 55-inch 4K UHD Roku TV runs on Roku TV OS, which provides easy access to a variety of streaming services and on-demand content.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Built-in Roku smart platformMotion Rate 120",
  },
  {
    product_name:
      'Hisense - 65" Class H6510G Series LED 4K UHD Smart Android TV',
    price: 499.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430857_sa.jpg",
    longDescription:
      "Upgrade your entertainment with this 65-inch Hisense 4K Ultra HD Android TV. DTS Virtual:X audio provides high-quality sound, while 4K UHD resolution utilizes over eight million pixels for sharp, clear photos and vivid color. The voice remote makes finding your shows simple. With built-in Google Assistant, Chromecast and all the apps and games available through Android TV, this Hisense 4K UltraHD Android TV brings the convenience of a smartphone to the largest screen in your home.",
    shortDescription:
      "4K UHD resolution with HDRFull-array LEDDTS Virtual: X sound technologySmart TVMotion Rate 120",
  },
  {
    product_name: 'Hisense - 65" Class H65G Series LED 4K UHD Smart Android TV',
    price: 499.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404020_sa.jpg",
    longDescription:
      "Upgrade your entertainment with this 65-inch Hisense 4K Ultra HD Android TV. DTS Virtual:X audio provides high-quality sound, while 4K UHD resolution utilizes over eight million pixels for sharp, clear photos and vivid color. The voice remote makes finding your shows simple. With built-in Google Assistant, Chromecast and all the apps and games available through Android TV, this Hisense 4K UltraHD Android TV brings the convenience of a smartphone to the largest screen in your home.",
    shortDescription:
      "4K UHD resolution with HDRFull-array LEDDTS Virtual: X sound technologySmart TVMotion Rate 120",
  },
  {
    product_name: 'Hisense - 65" Class H8F Series LED 4K UHD Smart Android TV',
    price: 699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6360/6360623_sa.jpg",
    longDescription:
      "Watch your favorite movies and shows in lifelike quality with this 65-inch Hisense 4K ULED Android smart TV. Dolby Vision HDR provides exceptional color, brightness and contrast, while the built-in Google Assistant enables voice control. This Hisense 4K ULED Android smart TV features automated scene recognition, matching video and sound settings to the content.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 240",
  },
  {
    product_name:
      'Hisense - 65" Class H8G Quantum Series LED 4K UHD Smart Android TV',
    price: 799.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402783_sa.jpg",
    longDescription:
      "Stream a movie or cast videos from your smartphone with this 65-inch Hisense Quantum series Android TV. The Quantum Dot technology delivers a better picture quality with lifelike color combinations, while the voice-powered remote offers more intuitive control. This Hisense Quantum series Android TV features a gaming mode, so your moves are executed instantly with minimal lag.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 240",
  },
  {
    product_name:
      'Hisense - 65" Class H9G Quantum Series LED 4K UHD Smart Android TV',
    price: 999.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404014_sa.jpg",
    longDescription:
      "Enjoy a cinematic theater experience at home with this 65-inch Hisense H9G quantum 4K Android TV. Quantum dot technology combined with Dolby HDR deliver high definition to video streaming and games, and the various backlighting and dimming options provide a brilliant picture in any lighting. This 65-inch Hisense H9G quantum 4K Android TV has voice command so you can skip the remote and go straight to your favorite program.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 480",
  },
  {
    product_name: 'Hisense - 65" Class R8 Series LED 4K UHD Smart Roku TV',
    price: 699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6414/6414393_sa.jpg",
    longDescription:
      "Featuring 4K ULED resolution, the R8F packs incredible detail to create astonishingphotos with enhanced color and more depth. The Hisense Roku TV serves up amassive library of free and premium content at the touchof a button. Simple to set-up and easy-to-use, connect tothe internet, activate, and start streaming.",
    shortDescription: "4K with HDR ULED Smart Roku Tv Motion Rate 240",
  },
  {
    product_name: 'Hisense - 70" Class H65 Series LED 4K UHD Smart Android TV',
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404002_sa.jpg",
    longDescription:
      "The H65 series is as smooth as it is smart, thanks to advanced technologies inside and out. Colors burst off the screen in amazing 4K UltraHD resolution. Experience movies and games with incredible contrast, thanks to advanced picture technologies like Dolby Vision HDR and HDR10. For a 4K UHD picture, plus incredible content, and convenience, the smart money is on the H65 series.  With more than four times the resolution of a regular 1080p high-definition screen, an Android OS with more than 4,000 apps and games, and Google Assistant built-in for voice control; the H65 4K UltraHD Hisense Android Smart TV changes the standard for affordable, premium TVs.",
    shortDescription: "4K UHD with HDR Smart Android TV Motion Rate 120",
  },
  {
    product_name: 'Hisense - 75" Class H65 Series LED 4K UHD Smart Android TV',
    price: 999.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404309_sa.jpg",
    longDescription:
      "Entertain with the whole family with this Hisense 75-inch 4K UHD television. Dolby Vision HDR and HDR10 combined with DTS Virtual: X technology deliver a theater-quality experience, while access to Android apps and games expands your entertainment options. Bluetooth technology on this Hisense 75-inch 4K UHD television lets you pair with compatible devices to share photographs and downloaded content.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name:
      'Hisense - 75" Class H6510G Series LED 4K UHD Smart Android TV',
    price: 999.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430858_sa.jpg",
    longDescription:
      "Entertain with the whole family with this Hisense 75-inch 4K UHD television. Dolby Vision HDR and HDR10 combined with DTS Virtual: X technology deliver a theater-quality experience, while access to Android apps and games expands your entertainment options. Bluetooth technology on this Hisense 75-inch 4K UHD television lets you pair with compatible devices to share photographs and downloaded content.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 120",
  },
  {
    product_name:
      'Hisense - 75" Class H8G Quantum Series LED 4K UHD Smart Android TV',
    price: 1299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402784_sa.jpg",
    longDescription:
      "Access your favorite streaming service with this 75-inch Hisense H8 Quantum series Android TV. The ULED display and Dolby Atmos sound combine to give you a cinematic feel in the comfort of your home, while Chromecast built in lets you cast content from compatible devices for limitless entertainment. This Alexa-enabled Hisense H8 Quantum series Android TV features a voice-activated remote and Google Assistant, so you can quickly find and stream the latest blockbuster.",
    shortDescription:
      "2160p (4K) resolution with HDRSmart TV, Android TVMotion Rate 240",
  },
  {
    product_name: 'Hisense - 85" Class H65 Series LED 4K UHD Smart Android TV',
    price: 1699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6404/6404008_sa.jpg",
    longDescription:
      "The H65 series is as smooth as it is smart, thanks to advanced technologies inside and out. Colors burst off the screen in amazing 4K UltraHD resolution. Experience movies and games with incredible contrast, thanks to advanced picture technologies like Dolby Vision HDR and HDR10. For a 4K UHD picture, plus incredible content, and convenience, the smart money is on the H65 series.  With more than four times the resolution of a regular 1080p high-definition screen, an Android OS with more than 4,000 apps and games, and Google Assistant built-in for voice control; the H65 4K UltraHD Hisense Android Smart TV changes the standard for affordable, premium TVs.",
    shortDescription: '85" Class H65 Series LED 4K UHD Smart Android Tv',
  },
  {
    product_name:
      'Hisense - 85" Class H6510G Series LED 4K UHD Smart Android TV',
    price: 1699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6429/6429407_sa.jpg",
    longDescription:
      "The H65 series is as smooth as it is smart, thanks to advanced technologies inside and out. Colors burst off the screen in amazing 4K UltraHD resolution. Experience movies and games with incredible contrast, thanks to advanced picture technologies like Dolby Vision HDR and HDR10. For a 4K UHD picture, plus incredible content, and convenience, the smart money is on the H65 series.  With more than four times the resolution of a regular 1080p high-definition screen, an Android OS with more than 4,000 apps and games, and Google Assistant built-in for voice control; the H65 4K UltraHD Hisense Android Smart TV changes the standard for affordable, premium TVs.",
    shortDescription: '85" Class H65 Series LED 4K UHD Smart Android Tv',
  },
  {
    product_name: 'Insignia™ - 19" Class LED HD',
    price: 79.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6164/6164904_sa.jpg",
    longDescription:
      "Only at Best Buy Put this 19-inch Insignia LED TV in a bedroom to enjoy movies comfortably. Its built-in DTS sound technology delivers clear, natural audio with powerful bass, and its 720p HD resolution provides a crisp, colorful picture. This Insignia LED TV has two HDMI inputs for connecting game consoles or a digital receiver.",
    shortDescription:
      "Only at Best Buy\nOnly at Best Buy720p (HD) resolution60Hz refresh rate",
  },
  {
    product_name: 'Insignia™ - 19" Class LED HD TV',
    price: 79.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6394/6394757_sa.jpg",
    longDescription:
      "Upgrade your home theater with this 19-inch Insignia LED TV. The 60Hz panel refresh rate minimizes motion blur for crisp, clear visuals, while the 720p resolution produces detailed, vibrant photos on the LCD screen. This Insignia LED TV has two HDMI ports for effortless connectivity to gaming consoles and compatible devices.",
    shortDescription: "Only at Best Buy720p (HD) resolution60Hz refresh rate",
  },
  {
    product_name: 'Insignia™ - 22" Class LED Full HD TV',
    price: 119.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6260/6260936_sa.jpg",
    longDescription:
      "Enjoy increased clarity when watching your favorite shows on this 22-inch Insignia TV. The LED screen boosts color accuracy while providing a crisp HD viewing experience, and the 60Hz refresh rate maintains consistent frames to keep you immersed in scenes. This Insignia TV has two HDMI slots and a USB port for gaming consoles, DVD players and streaming devices.",
    shortDescription: "1080p (Full HD) resolution60Hz refresh rate",
  },
  {
    product_name: 'Insignia™ - 24" Class LED HD Smart Fire TV EditionTV',
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6395/6395125_sa.jpg",
    longDescription:
      "Stay entertained with this 24-inch Insignia Fire TV Edition smart TV. The 720p resolution delivers vibrant picture clarity, while the built-in Wi-Fi lets you stream your favorite shows and movies wirelessly. This Insignia Fire TV Edition smart TV is voice controllable for smooth hands-free operation, and the included stand provides sturdy support.",
    shortDescription:
      "Only at Best Buy720p (HD) resolutionSmart TV, Fire TV60Hz refresh rate",
  },
  {
    product_name: "16' Extension Cable for Philips Hue Play - Black",
    price: 14.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6298/6298633_sa.jpg",
    longDescription:
      "Get power to your Hue Play Black with this Philips Hue Play extension cable. Its 16-foot length lets you extend the distance between your device and its power source for versatile setup and placement. Get the durability you need with the superior quality of this Philips Hue Play extension cable.",
    shortDescription:
      "Compatible only with Philips Hue Play; 16' length; can be used between the power supply and your first light point or to extend the space between light points",
  },
  {
    product_name:
      "25' Outdoor Magnetic Charging Cable for Arlo Ultra and Pro 3 Security Cameras - Black",
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373077_sa.jpg",
    longDescription:
      "Keep your Arlo wire-free cameras charged at all times with this Arlo Ultra/Pro 3 magnetic charging cable and power adapter. The 25-foot cable lets you reach hard-to-access power sources, while the weather-resistant connector permits use outdoors. This Arlo Ultra/Pro 3 magnetic charging cable and power adapter comes with a window decal that keeps it in place for uninterrupted charging.",
    shortDescription:
      "Compatible with Arlo Ultra cameras; weather-resistant connector; 25' charging cable",
  },
  {
    product_name:
      "25' Outdoor Magnetic Charging Cable for Arlo Ultra and Pro 3 Security Cameras - White",
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6317/6317482_sa.jpg",
    longDescription:
      "Provide a reliable source of power to your security cameras with this Arlo Ultra/Pro 3 charging cable. The 25-foot length offers an extended reach to ensure a reliable charge, and the magnetic design plugs in effortlessly. This Arlo Ultra/Pro 3 charging cable is constructed for both indoor and outdoor use, making it a versatile addition to your security setup.",
    shortDescription:
      "Compatible with Arlo Ultra cameras; weather-resistant connector; 25' charging cable",
  },
  {
    product_name:
      "8' Indoor Magnetic Charging Cable for Arlo Ultra/Pro 3 Security Cameras - White",
    price: 24.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6317/6317484_sa.jpg",
    longDescription:
      "Keep your cameras charged with this Arlo Ultra/Pro 3 indoor magnetic charging cable. Designed for Arlo cameras, this 8-foot cable and included power adapter offer flexible placement and easily reach out-of-the-way outlets. This Arlo Ultra/Pro 3 indoor magnetic charging cable features a magnetic plug that stays firmly in place and keeps your cameras charged.",
    shortDescription:
      "Compatible with most Arlo wire-free security cameras; keeps cameras charged; 8' length",
  },
  {
    product_name:
      "8' Indoor Magnetic Charging Cable for Arlo Ultra/Pro 3 Wire-Free Security Cameras - Black",
    price: 24.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6378/6378619_sa.jpg",
    longDescription:
      "Run your wireless security camera continuously with this Arlo Ultra/Pro 3 indoor magnetic charging cable. The 8-foot length enables connection to a distant power source, letting your Arlo Ultra/Pro 3 camera guard your home 24/7. This black Arlo Ultra/Pro 3 indoor magnetic charging cable comes with a power adapter for plugging into an electrical outlet.",
    shortDescription:
      "Compatible with Arlo Ultra and Arlo Pro 3 Wire-Free Security Cameras; keeps cameras charged; 8' length; indoor use; black finish",
  },
  {
    product_name:
      "Accell - Power Wall Charger with Holder for Amazon Echo Dot 3rd Gen and 2 USB-A Charging Ports",
    price: 24.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437867cv11a.jpg",
    longDescription:
      "Have an Amazon Echo Dot 3? A passthrough wall charger with Echo Dot (3rd Gen) Holder and 2 USB Type A charging ports, the Accell Power Wall Charger in White allows you to easily mount your Amazon Echo Dot 3rd Generation onto any standard wall outlet without blocking the other outlets. The holder secures the hub itself and provides a clean and neat cable management design around the holder.",
    shortDescription:
      "A passthrough wall charger with Echo Dot (3rd Gen) Holder and 2 USB Type A charging ports, the Accell Power Wall Charger allows you to easily mount Amazon Echo Dot 3rd Generation onto any standard wall outlet without blocking the other outlets.",
  },
  {
    product_name:
      "Accell - Power Wall Charger with Holder for Amazon Echo Dot 3rd Gen and 2 USB-A Charging Ports",
    price: 24.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437868cv11a.jpg",
    longDescription:
      "Have an Amazon Echo Dot 3? A passthrough wall charger with Echo Dot (3rd Gen) Holder and 2 USB Type A charging ports, the Accell Power Wall Charger in Black allows you to easily mount your Amazon Echo Dot 3rd Generation onto any standard wall outlet without blocking the other outlets. The holder secures the hub itself and provides a clean and neat cable management design around the holder.",
    shortDescription:
      "A passthrough wall charger with Echo Dot (3rd Gen) Holder and 2 USB Type A charging ports, the Accell Power Wall Charger allows you to easily mount Amazon Echo Dot 3rd Generation onto any standard wall outlet without blocking the other outlets.",
  },
  {
    product_name: "Airthings - Corentium Home Radon Detector",
    price: 179.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5915/5915701_sa.jpg",
    longDescription:
      "Check for harmful gas emissions with this Airthings Corentium Home radon detector. Its digital display shows the surrounding radon levels along with weekly and long-term concentration averages, and the high-quality internal components ensure accurate results. This Airthings Corentium Home radon detector is powered by batteries, so it's easy to inspect multiple locations.",
    shortDescription:
      "Quick results; automatic calibration; lightweight and portable design; 3 AAA batteries; up to 2 years of continuous operation",
  },
  {
    product_name:
      "Airthings - Wave Mini Indoor Air Quality Monitor w/ TVOC, Temp & Humidity sensors, Works w/ Alexa, Google Assistant and IFTTT - White",
    price: 79.99,
    photo: null,
    longDescription:
      "The Airthings Wave Mini is the perfect, cost-effective first step into understanding your indoor air quality, or a great addition to your existing Airthings air quality monitoring system for your home. The Wave Mini includes a mold-risk indication to help in mold growth prevention because when you see it, it's too late. Air quality and temperature vary drastically from room to room and the only way to reach optimal comfort and health is to measure in every room. The Airthings Wave Mini is small in size but big in impact. The VOC sensor monitors harmful chemicals and odors in your air that can cause negative health effects, while additional sensors measure temperature and humidity. Keep an eye on the comfort levels and health in every room of your home with this compact and easy-to-use companion. Or use as a complement to the Wave Plus for a complete air quality picture.",
    shortDescription: "Air Quality Monitor w/ Mold Risk Indicator",
  },
  {
    product_name:
      "Airthings - Wave Plus Smart Indoor Air Quality Monitor with Radon Detection - White",
    price: 229.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6321/6321997_sa.jpg",
    longDescription:
      "Monitor your home for indoor air quality with this Airthings Wave Plus IAQ sensor. The unique design detects radon, carbon dioxide levels and TVOCs to ensure the conditions in your home are safe. This Airthings Wave Plus IAQ sensor includes access to the Airthings Dashboard, which lets you review current levels and provides tips on how to improve the air in your living space.",
    shortDescription:
      "Radon, CO2, VOC, temperature, humidity, and air pressure sensors; battery powered; Bluetooth and Airthings Smartlink connectivity; wall or ceiling mount support",
  },
  {
    product_name:
      "Airthings House Kit, Radon and Indoor Air Quality Monitoring System, Multi-room - White",
    price: 299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6433/6433286_sa.jpg",
    longDescription:
      "The Airthings House Kit has everything you need to start monitoring the quality of your air, for a healthier home. This multi-room kit includes: Wave, the first smart radon detector, Wave Mini, for airborne chemicals, humidity, temperature and mold risk indication, and Hub, which brings everything online. Simply connect the Hub to the internet and set up the monitors using the Airthings Wave App. You then gain visibility into indoor air contaminants in multiple rooms in your home, no matter where you are. Data is available via the free Airthings Wave app (iOS/Android) as well as online with the Airthings Dashboard with more advanced analytics options.",
    shortDescription: "Whole Home Air Quality Kit w/ Radon Detection",
  },
  {
    product_name:
      "Airthings Hub, 24/7 access to your Airthings monitor data - White",
    price: 79.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6433/6433283_sa.jpg",
    longDescription:
      "The Airthings Hub is the heart of the Airthings home system: It brings all supported Airthings monitors online, providing on-demand access to your indoor air quality data at any time, from anywhere! Simply connect the Hub to the internet with an Ethernet cable, set up your monitors using the Airthings Wave App, and unlock 24/7 access to your data. View live data from your Airthings monitors via Airthings Wave App or Dashboard. With visibility into your radon and contaminant levels, you can take action to improve the quality of your air, sleep, health and comfort. Easily view insights and compare data to help reduce indoor air hazards, optimize ventilation and save on energy costs. Compatible with Wave Mini, Wave 2ND Gen and Wave Plus. Power adapter included.",
    shortDescription: "Whole Home Air Quality Smart Hub",
  },
  {
    product_name:
      "Airthings Wave Smart Radon Detector with Free App, Temp and Humidity Monitor, Battery Operated, No Lab Fees. - White",
    price: 199.99,
    photo: null,
    longDescription:
      "Radon gas is a radioactive gas that is found in all buildings at varying levels. It is the leading cause of lung cancer among non-smokers and kills more than six times the amount of people than home fires and carbon monoxide poisoning combined. It is invisible, is found everywhere and fluctuates daily. Radon one of the most important components in our indoor air quality and the only way to know if you are exposed to radon is to measure daily. Every home needs a radon detector. The Airthings Wave 2nd Generation is a smart radon detector providing accurate continuous and long-term results straight to your smartphone. Replacing single-use radon test kits, this digital radon monitor shows daily, weekly, monthly and yearly measurements in the free mobile app. Use the data to take the necessary steps to protect your home and loved ones from the dangers of radon gas and make sure radon levels stay low. It is battery powered, meaning no AC outlet is required and it can be placed anywhere in the home. The Airthings Wave includes an additional humidity sensor and temperature sensor, allowing you to improve indoor air quality overall. Monitor to ensure healthy indoor humidity levels and a comfortable temperature. Detailed analytics are available in the Airthings app and Web Dashboard or simply wave in front of the device to receive a color-coded visual indicator of the overall air quality; Green (Low), Yellow (Warning), Red (Poor). The radon monitor is also smart home enabled. It's part of the Airthings Ecosystem of smart home devices that work with Alexa, Google Assistant and IFTTT (if this then that). The Airthings Wave 2nd generation has Smartlink functionality that will allow the device to connect to the Airthings Hub to help you build out your whole home ecosystem of Airthings air quality monitoring solutions.",
    shortDescription: "Smart Radon Monitor w/ Temp & Humidity",
  },
  {
    product_name:
      "ALC - Observer Indoor/Outdoor Wireless Network Surveillance Camera - Black",
    price: 109.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6333/6333497_sa.jpg",
    longDescription:
      "Monitor the goings-on around your home with this ALC wireless outdoor surveillance camera. The 1080p Full HD resolution provides high-quality videos, and the 65-foot night vision capability ensures round the clock surveillance. This ALC wireless outdoor surveillance camera has infrared LEDs to improve photo clarity and supports remote viewing on smartphones.",
    shortDescription:
      "90&#176; field of view; infrared night vision up to 65' away; indoor/outdoor; wireless connectivity; power extension cable included",
  },
  {
    product_name:
      "ALC - Observer Indoor/Outdoor Wireless Surveillance System - Black",
    price: 239.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6333/6333491_sa.jpg",
    longDescription:
      "Protect your home with this ALC Observer touchscreen wireless surveillance system. An easy-to-install weatherproof outdoor camera captures footage of potential intruders in Full HD resolution and sends automated alerts when triggered. This ALC Observer touchscreen wireless surveillance system has a 7-inch monitor that lets you watch recorded footage and monitor live feeds.",
    shortDescription:
      "1 camera; 90&#176; viewing angle; 65' IR night vision; indoor/outdoor; wireless; microSD/SDHC/SDXC memory card slot",
  },
  {
    product_name:
      "ALC - Sight HD Indoor 1080p Wi-Fi Wireless Network Surveillance Camera - White",
    price: 79.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6331/6331727_sa.jpg",
    longDescription:
      "Keep a watchful eye on your interiors with this ALC indoor Wi-Fi camera. The 1080p resolution offers vivid, Full HD video quality for effortless viewing on a smartphone or tablet, and the 90-degree field of view provides wide coverage of your space. This ALC indoor Wi-Fi camera's night vision has a 25-foot range to accommodate various lighting conditions.",
    shortDescription:
      "90&#176; field of view; infrared night vision up to 25' away; indoor; Wi-Fi; 1920 x 1080 resolution; USB cable included",
  },
  {
    product_name:
      "ALC - Sight HD Indoor 720p Wi-Fi Wireless Network Surveillance Camera - White",
    price: 54.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6333/6333490_sa.jpg",
    longDescription:
      "Maintain a safe, secure home with this ALC indoor panoramic Wi-Fi camera. The two -way audio lets you listen in and communicate via the speaker, and the motion detector focuses the lens on potential intruders. This ALC indoor panoramic Wi-Fi camera has a 35-foot night-vision range to ensure high-quality photos regardless of the time.",
    shortDescription:
      "180&#176; field of view; infrared night vision up to 33' away; indoor; Wi-Fi; 1280 x 720 resolution",
  },
  {
    product_name:
      "Amaryllo - Apollo Biometric Auto-Tracking Indoor Security Camera - White",
    price: 199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6435/6435235cv11a.jpg",
    longDescription:
      "The Amaryllo Apollo Biometric Auto-Tracking Security Camera is small and discreet enough to sit on a table in your home or office, or be mounted to any wall. This advanced biometric security camera can auto track moving objects 360&#176; and recognize family members within seconds. Receive motion, audio, and face alert notifications that can help keep your home and family safe and secure! Take action to protect your home, even when you aren&#8217;t around. Sound the alarm or use the 2-way communication to warn unrecognized persons away from your property while you contact the authorities. From the free smartphone app, you can live stream, review footage and upgrade your subscription plan to unlock biometric features such as fire, human, vehicle, and pet recognition! Professional monitoring is also available.",
    shortDescription:
      "The Amaryllo Apollo Biometric Auto-Tracking Security Camera is small and discreet enough to sit on a table in your home or office, or be mounted to any wall. This advanced biometric security camera can auto track moving objects 360&#176; and recognize family members within seconds. Receive motion, audio, and face alert notifications that can help keep your home and family safe and secure!",
  },
  {
    product_name:
      "Amaryllo - Ares Biometric Auto-Tracking Outdoor Security Camera - Black",
    price: 399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6435/6435240cv11a.jpg",
    longDescription:
      "The Amaryllo Ares Biometric Auto-Tracking Outdoor Security Camera is designed to protect your home. Ares is able to auto track moving objects 360&#176;, covering blind spots. You&#8217;ll never miss a moment as auto tracking eliminates the need for multiple cameras facing different areas. Designed for the outdoors, Ares is certified with IP66 weather resistance, allowing it to withstand temperatures from -40&#176;F to 140&#176;F. From the free smartphone app, you can live stream, review footage and upgrade your subscription plan to unlock biometric features such as fire, human, vehicle and pet recognition. Professional monitoring is also available.",
    shortDescription:
      "The Amaryllo Ares Biometric Auto-Tracking Outdoor Security Camera is designed to protect your home. Ares is able to auto track moving objects 360&#176;, covering blind spots. Designed for the outdoors, Ares is certified with IP66 weather resistance, allowing it to withstand temperatures from -40&#176;F to 140&#176;F.",
  },
  {
    product_name:
      "Amaryllo - Hermes Biometric Auto-Tracking Portable Indoor Security Camera - White",
    price: 159.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6435/6435239cv11a.jpg",
    longDescription:
      "The Amaryllo Hermes Biometric Auto-Tracking Portable Security Camera is so portable, you can take it with you on vacation! When you leave your home, have the same peace of mind as you would when with your regular security cameras. It fits in the palm of your hand and is powered with a regular power bank (sold separately). With 240&#176; auto-tracking, you can eliminate blind spots and track unwanted guests. When there are unwanted guests, receive push notifications and use 2-way communication to make your presence aware as well as warning light and alarm. From the free smartphone app, you can live stream, review footage and upgrade your subscription plan to unlock biometric features such as fire, human, vehicle and pet recognition. Professional monitoring is also available.",
    shortDescription:
      "The Amaryllo Hermes Biometric Auto-Tracking Portable Security Camera is so portable, you can take it with you on vacation! When you leave your home, have the same peace of mind as you would when with your regular security cameras. It fits in the palm of your hand and is powered with a regular power bank (sold separately).",
  },
  {
    product_name:
      "Amaryllo - Triton Biometric Auto-Tracking Light Bulb Outdoor Security Camera - Black",
    price: 399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6435/6435231cv11a.jpg",
    longDescription:
      "The Amaryllo Triton Biometric Auto-Tracking Outdoor Light Bulb Security Camera is designed to screw into a light socket for easy and no fuss installation. Triton was designed with the outdoors in mind and therefore able to withstand harsh weather conditions with an IP66 weather resistant certification allowing it to operate in temperatures ranging from -40&#176;F to 140&#176;F. You&#8217;ll never miss a moment with Triton&#8217;s 360&#176; auto tracking that can detect moving objects to eliminate blind spots and the need for multiple cameras! From the free smartphone app, you can live stream, review footage and upgrade your subscription plan to unlock biometric features such as fire, human, vehicle and pet recognition. Professional monitoring is also available.",
    shortDescription:
      "The Amaryllo Triton Biometric Auto-Tracking Outdoor Light Bulb Security Camera is designed to screw into a light socket for easy and no fuss installation. Triton was designed with the outdoors in mind and therefore able to withstand harsh weather conditions with an IP66 weather resistant certification allowing it to operate in temperatures ranging from -40&#176;F to 140&#176;F.",
  },
  {
    product_name:
      "Amaryllo - Zeus Biometric Auto-Tracking Light Bulb Indoor Security Camera - White",
    price: 249.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6435/6435244cv11a.jpg",
    longDescription:
      "No drilling, no wires, and no headaches! The Amaryllo Zeus Biometric Security Camera is powered on by a standard light bulb socket! Zeus is the biometric indoor security camera designed to screw into a light socket for easy and no-fuss installation. You&#8217;ll never miss a moment with Zeus&#8217; 360&#176; auto tracking that can detect moving objects to eliminate blind spots and the need for multiple cameras. If you wish, you can also detach it from its base and place it on any flat surface. From the free smartphone app, you can live stream, review footage and upgrade your subscription plan to unlock biometric features such as fire, human, vehicle and pet recognition. Professional monitoring is also available.",
    shortDescription:
      "No drilling, no wires, and no headaches! The Amaryllo Zeus Biometric Security Camera is powered on by a standard light bulb socket! Zeus is the biometric indoor security camera designed to screw into a light socket for easy and no-fuss installation. You&#8217;ll never miss a moment with Zeus&#8217; 360&#176; auto tracking that can detect moving objects to eliminate blind spots and the need for multiple cameras.",
  },
  {
    product_name:
      "Amazon - Echo (4th Gen) With premium sound, smart home hub, and Alexa - Charcoal",
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430065_sa.jpg",
    longDescription:
      "Meet the all-new Echo. Talk about well-rounded. Echo combines premium sound, a built-in Zigbee smart home hub, and a temperature sensor. Powerful speakers deliver clear highs, dynamic mids, and deep bass for rich, detailed sound that adapts to any room. Just ask Alexa to play music, answer questions, make calls, and tell you the news, sports scores, weather, and more.",
    shortDescription:
      "All-new Echo (4th Gen) - With premium sound, smart home hub, and Alexa - Charcoal",
  },
  {
    product_name:
      "Amazon - Echo (4th Gen) With premium sound, smart home hub, and Alexa - Glacier White",
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430069_sa.jpg",
    longDescription:
      "Meet the all-new Echo. Talk about well-rounded. Echo combines premium sound, a built-in Zigbee smart home hub, and a temperature sensor. Powerful speakers deliver clear highs, dynamic mids, and deep bass for rich, detailed sound that adapts to any room. Just ask Alexa to play music, answer questions, make calls, and tell you the news, sports scores, weather, and more.",
    shortDescription:
      "All-new Echo (4th Gen) - With premium sound, smart home hub, and Alexa - Glacier White",
  },
  {
    product_name:
      "Amazon - Echo (4th Gen) With premium sound, smart home hub, and Alexa - Twilight Blue",
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430064_sa.jpg",
    longDescription:
      "Meet the all-new Echo. Talk about well-rounded. Echo combines premium sound, a built-in Zigbee smart home hub, and a temperature sensor. Powerful speakers deliver clear highs, dynamic mids, and deep bass for rich, detailed sound that adapts to any room. Just ask Alexa to play music, answer questions, make calls, and tell you the news, sports scores, weather, and more.",
    shortDescription:
      "All-new Echo (4th Gen) - With premium sound, smart home hub, and Alexa - Twilight Blue",
  },
  {
    product_name:
      "Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa - Charcoal",
    price: 39.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6287/6287974_sa.jpg",
    longDescription:
      "Echo Dot is a voice-controlled Smart Speaker with Alexa, perfect for any room. Just ask for music, news, information, and more. You can also call almost anyone and control compatible smart home devices with your voice.",
    shortDescription:
      "Voice-controlled; cloud-based Alexa Voice Service; Bluetooth connectivity; built-in speaker",
  },
  {
    product_name:
      "Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa - Heather Gray",
    price: 39.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6287/6287978_sa.jpg",
    longDescription:
      "Echo Dot is a voice-controlled Smart Speaker with Alexa, perfect for any room. Just ask for music, news, information, and more. You can also call almost anyone and control compatible smart home devices with your voice.",
    shortDescription:
      "Voice-controlled; cloud-based Alexa Voice Service; Bluetooth connectivity; built-in speaker",
  },
  {
    product_name:
      "Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa - Plum",
    price: 39.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6380/6380477_sa.jpg",
    longDescription:
      'Ask questions and play music with this Amazon Echo Dot smart speaker. The built-in microphone lets you control smart home devices with voice commands, and the 1.6" speaker delivers impressively clear audio. This Amazon Echo Dot smart speaker has a compact design that offers flexible placement and intuitive controls that make it easy to adjust volume and activate the microphone.',
    shortDescription:
      "Voice control; Bluetooth technology; Wi-Fi connectivity; built-in speaker",
  },
  {
    product_name:
      "Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa - Sandstone",
    price: 39.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6287/6287976_sa.jpg",
    longDescription:
      "Echo Dot is a voice-controlled Smart Speaker with Alexa, perfect for any room. Just ask for music, news, information, and more. You can also call almost anyone and control compatible smart home devices with your voice.",
    shortDescription:
      "Voice-controlled; cloud-based Alexa Voice Service; Bluetooth connectivity; built-in speaker",
  },
  {
    product_name:
      "Amazon - Echo Dot (3rd Gen) Smart Speaker with Alexa - Sandstone",
    price: 59.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6347/6347259_sa.jpg",
    longDescription:
      "The all-new Echo Dot (3rd Gen), the most popular Echo is now even better. This version of Echo Dot has an LED display that can show the time, outdoor temperature, or timers. It is perfect for your nightstand - ask Alexa to set an alarm, tap the top to snooze, and the light sensor automatically adjusts the display's brightness, day or night. Play music, get the news, call almost anyone, and control compatible smart home devices - just ask Alexa.",
    shortDescription:
      "LED display; alarm function; voice control; Bluetooth technology; Wi-Fi connectivity; built-in speaker",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Kids Edition Designed for kids, with parental controls - Panda",
    price: 59.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430067_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot Kids Edition, our most popular smart speaker with Alexa, made for kids. It comes with 1 year of Amazon Kids+ (FreeTime Unlimited), which unlocks a world of kid-friendly content. Kids can ask Alexa to play music, read stories, and call approved friends and family. The super-fun designs deliver crisp vocals and balanced bass for full sound the whole family can enjoy.",
    shortDescription:
      "All-new Echo Dot (4th Gen) Kids Edition |Designed for kids, with parental controls - Panda",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Kids Edition Designed for kids, with parental controls - Tiger",
    price: 59.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430070_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot Kids Edition, our most popular smart speaker with Alexa, made for kids. It comes with 1 year of Amazon Kids+ (FreeTime Unlimited), which unlocks a world of kid-friendly content. Kids can ask Alexa to play music, read stories, and call approved friends and family. The super-fun designs deliver crisp vocals and balanced bass for full sound the whole family can enjoy.",
    shortDescription:
      "All-new Echo Dot (4th Gen) Kids Edition |Designed for kids, with parental controls - Tiger",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Smart speaker with Alexa - Charcoal",
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430060_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot. Round out any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home.",
    shortDescription:
      "All-new Echo Dot (4th Gen) - Smart speaker with Alexa - Charcoal",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Smart speaker with Alexa - Glacier White",
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430072_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot. Round out any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home.",
    shortDescription:
      "All-new Echo Dot (4th Gen) - Smart speaker with Alexa - Glacier White",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Smart speaker with Alexa - Twilight Blue",
    price: 49.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430058_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot. Round out any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home.",
    shortDescription:
      "All-new Echo Dot (4th Gen) - Smart speaker with Alexa - Twilight Blue",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Smart speaker with clock and Alexa - Glacier White",
    price: 59.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430059_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot with clock. Round out any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home. See the time, alarms, and timers on the LED display. Plus, tap the top to snooze an alarm.",
    shortDescription:
      "All-new Echo Dot (4th Gen) - Smart speaker with clock and Alexa - Glacier White",
  },
  {
    product_name:
      "Amazon - Echo Dot (4th Gen) Smart speaker with clock and Alexa - Twilight Blue",
    price: 59.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430063_sa.jpg",
    longDescription:
      "Meet the all-new Echo Dot with clock. Round out any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home. See the time, alarms, and timers on the LED display. Plus, tap the top to snooze an alarm.",
    shortDescription:
      "All-new Echo Dot (4th Gen) - Smart speaker with clock and Alexa - Twilight Blue",
  },
  {
    product_name: "Amazon - Echo Flex Smart Speaker with Alexa - White",
    price: 24.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6380/6380475_sa.jpg",
    longDescription:
      "Echo Flex allows you to make any space a little smarter. This plug-in smart speaker lets you get help from Alexa in more places in your home. From down the hall to around the corner, Alexa is happy to help make your day a little brighter. Use your voice to set timers or create daily reminders. Check the news, weather, or traffic. Ask for sports scores, movie showtimes, or restaurant hours.",
    shortDescription:
      "Plug-in smart speaker; voice control your smart home; Bluetooth and Wi-Fi connectivity; built-in USB port",
  },
  {
    product_name: "Amazon - Echo Glow Multicolor Smart Lamp - White",
    price: 29.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6347/6347256_sa.jpg",
    longDescription:
      "Get the ultimate nightlight with this Amazon Echo Glow smart lamp. The built-in LEDs deliver 100 lumens of white or colored light, and the simple tap controls make it easy to turn the light on and off. This Amazon Echo Glow smart lamp has a customizable Rainbow Timer feature that provides colorful reminders to help keep kids on schedule.",
    shortDescription:
      "Smart lamp for kids; requires compatible Alexa device; adjustable brightness and color; Wi-Fi connectivity",
  },
  {
    product_name: "Amazon - Echo Link - Charcoal",
    price: 199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6292/6292553_sa.jpg",
    longDescription:
      "Echo Link is an Echo companion that connects your home hi-fi stereo system to streaming music services. Echo Link is designed to connect to a receiver or amplifier or directly to powered speakers. It includes 5 lines out (analog, optical, coax, headphone 3.5mm, subwoofer) and 3 lines in (analog, optical, coax) to connect other audio components. Echo Link includes a volume knob for granular control, an ethernet port for reliable connectivity, and offers full Echo multi-room music support.",
    shortDescription:
      "Stream hi-fi music to your stereo systemWi-Fi enabledVolume knob",
  },
  {
    product_name:
      "Amazon - Echo Plus (2nd Gen) Smart Speaker with Alexa - Charcoal",
    price: 149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6287/6287971_sa.jpg",
    longDescription:
      "Echo Plus features premium speakers for powerful 360&#176; sound, built-in Zigbee smart home hub, and temperature sensor. Just ask Alexa to play music, answer questions, make calls, and provide information, news, sports scores, weather, and more. With the built-in hub, starting your smart home is easy.",
    shortDescription:
      "Echo Plus features premium speakers for powerful 360&#176; sound, built-in Zigbee smart home hub, and temperature sensor. Just ask Alexa to play music, answer questions, make calls, and provide information, news, sports scores, weather, and more",
  },
  {
    product_name:
      'Amazon - Echo Show (2nd Gen) 10.1" Smart Display with Alexa - Charcoal',
    price: 229.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6292/6292547_sa.jpg",
    longDescription:
      "The all-new Echo Show features a new look, a vibrant 10\" HD screen, built-in smart home hub, and improved speakers. Just ask Alexa to show you a recipe, watch live TV and sports with Hulu, make video calls, or see who's at the front door.",
    shortDescription:
      'Large 10" touch screen; see music lyrics, security cameras, photos, Amazon Video and more; voice control; Bluetooth technology; Wi-Fi connectivity; Alexa app for smartphones; stereo speakers with Dolby processing',
  },
  {
    product_name:
      'Amazon - Echo Show (2nd Gen) 10.1" Smart Display with Alexa - Sandstone',
    price: 229.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6292/6292551_sa.jpg",
    longDescription:
      "The all-new Echo Show features a new look, a vibrant 10\" HD screen, built-in smart home hub, and improved speakers. Just ask Alexa to show you a recipe, watch live TV and sports with Hulu, make video calls, or see who's at the front door.",
    shortDescription:
      'Large 10" touch screen; lets you see music lyrics, security cameras, photos, Amazon Video and more; voice control; Bluetooth technology; Wi-Fi connectivity; Alexa app for smartphone; stereo speakers with Dolby processing',
  },
  {
    product_name:
      "Amazon - Echo Show 10 (3rd Gen) HD smart display with motion and Alexa - Charcoal",
    price: 249.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430066_sa.jpg",
    longDescription:
      "Meet the Echo Show 10 -Designed to move with you.  Move around the room during video calls or while watching a TV show and the brilliant 10.1&#8221; HD screen will automatically turn to face you. You can stay focused on who you&#8217;re talking to or what you&#8217;re watching.",
    shortDescription:
      "All-new Echo Show 10 (3rd Gen)| HD smart display with motion and Alexa - Charcoal",
  },
  {
    product_name:
      "Amazon - Echo Show 10 (3rd Gen) HD smart display with motion and Alexa - Glacier White",
    price: 249.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6430/6430068_sa.jpg",
    longDescription:
      "Meet the Echo Show 10 -Designed to move with you.  Move around the room during video calls or while watching a TV show and the brilliant 10.1&#8221; HD screen will automatically turn to face you. You can stay focused on who you&#8217;re talking to or what you&#8217;re watching.",
    shortDescription:
      "All-new Echo Show 10 (3rd Gen) Echo Show 10 - HD smart display with motion and Alexa - Glacier White",
  },
  {
    product_name: "Amazon - Echo Show 5 Adjustable Stand - Charcoal",
    price: 19.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6347/6347251_sa.jpg",
    longDescription:
      "View your virtual assistant easily with this Amazon Echo Show 5 stand. The tiltable design lets you angle the screen in various directions, while the magnetic attachment ensures a strong hold. This Amazon Echo Show 5 stand is compact, so you can bring it on the go, and the black finish offers a sleek appearance.",
    shortDescription:
      "Designed for use with Amazon Echo Show 5; simple tilt adjustment; magnetic attachment",
  },
  {
    product_name: "Amazon - Echo Show 5 Adjustable Stand - Sandstone",
    price: 19.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6347/6347253_sa.jpg",
    longDescription:
      "Get the most out of your Echo Show 5 with this Amazon Echo adjustable stand. The magnetic adjustment feature lets you place your assistant on the stand for easy viewing. Tilt function on this Amazon Echo adjustable stand means you can tilt your device for comfort, and compatibility with Echo Show 5 ensures a proper fit.",
    shortDescription:
      "Designed for use with Amazon Echo Show 5; simple tilt adjustment; magnetic attachment",
  },
  {
    product_name: 'Amazon - Echo Show 5" Smart Display with Alexa - Charcoal',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6347/6347249_sa.jpg",
    longDescription:
      "Ask questions and watch videos with this Amazon Echo Show 5 smart display. The 5.5-inch display lets you watch the news and get traffic updates, and the built-in camera supports video-chatting with friends. This Amazon Echo Show 5 smart display makes it easy to control smart home devices using voice commands.",
    shortDescription:
      '5.5" smart display; easily update to-do lists and calendars; control your smart home; designed around your privacy',
  },
  {
    product_name: 'Amazon - Echo Show 5" Smart Display with Alexa - Sandstone',
    price: 89.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6347/6347250_sa.jpg",
    longDescription:
      "Streamline your life with this Amazon Echo Show 5 smart display. Integration with Alexa and an advanced microphone let you control smart home devices, update calendars and queue up content using voice commands. This Amazon Echo Show 5 smart display has a 5.5-inch display and a built-in camera for video chatting with friends and family.",
    shortDescription:
      '5.5" smart display; easily update to-do lists and calendars; control your smart home; designed around your privacy',
  },
  {
    product_name: "Amazon - Echo Show 8 Adjustable Stand - Charcoal",
    price: 24.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6380/6380483_sa.jpg",
    longDescription:
      "Prop up your smart display with this Amazon black adjustable stand for Echo Show 8. The simple design offers easy installation and removal, and the magnetic connector attaches securely to your smart display. This Amazon black adjustable stand has a wide base that prevents tipping and a tilting design that lets you adjust viewing angles.",
    shortDescription:
      "Designed for use with Amazon Echo Show 8; simple tilt adjustment; magnetic attachment",
  },
  {
    product_name: "Canon - EOS 5D Mark IV DSLR Camera (Body Only) - Black",
    price: 2499.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5578/5578523_sa.jpg",
    longDescription:
      "Step up your photography with the Canon EOS 5D Mark IV body. It has a 30.4-megapixel full-frame CMOS sensor and a 100-32,000 ISO range that lets you take large photos that are sharp and bright. The Canon EOS 5D Mark IV body is ideal for shooting action photos with speeds of up to seven frames per second.",
    shortDescription:
      "30.4-megapixel full-frame CMOS sensorISO 100-32,000, expandable to 50-102,400Shooting speeds up to 7 fps61 focus points (41 cross-type)4K video at 30p, 24pBuilt-in Wi-Fi, NFC, GPS connectivity",
  },
  {
    product_name:
      "Canon - EOS 5D Mark IV DSLR Camera with 24-105mm f/4L IS II USM Lens - Black",
    price: 3399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5578/5578529_sa.jpg",
    longDescription:
      "Shoot beautiful photos in almost any lighting with this Canon EOS 5D camera. Its 30.4-megapixel full-frame sensor captures vivid detail for beautiful travel and event montages. Its 4K motion JPEG video capability helps you preserve precious moments, while its increased responsiveness provides smooth recording. The built-in GPS on this Canon EOS 5D camera helps you geotag photos.   .",
    shortDescription:
      "30.4-megapixel full-frame CMOS sensorISO 100-32,000, expandable to 50-102,400Shooting speeds up to 7 fps61 focus points (41 cross-type)4K video at 30p, 24pBuilt-in Wi-Fi, NFC, GPS connectivity",
  },
  {
    product_name:
      "Canon - EOS 5D Mark IV DSLR Camera with 24-70mm f/4L IS USM Lens - Black",
    price: 3249.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5578/5578528_ra.jpg",
    longDescription:
      "Shoot professional photos and videos with this Canon EOS 5D Mk V 24-70mm lens kit. A huge 30.4-megapixel full-frame sensor delivers outstanding photo clarity, and 4K video is possible from this DSLR for powerful films. Ultra-precise autofocus and huge ISO ranges give you the photos you want from this Canon EOS 5D Mk V 24-70mm lens kit.   .",
    shortDescription:
      "30.4-megapixel full-frame CMOS sensorISO 100-32,000, expandable to 50-102,400Shooting speeds up to 7 fps61 focus points (41 cross-type)4K video at 30p, 24pBuilt-in Wi-Fi, NFC, GPS connectivity",
  },
  {
    product_name: "Canon - EOS 5DS DSLR Camera (Body Only) - Black",
    price: 1299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/3778/3778012_sa.jpg",
    longDescription:
      "Capture realistic photos using this Canon EOS 5DS DSLR camera, which features a 50.6-megapixel CMOS sensor for high-resolution shooting. The 100 - 6400 ISO enables clear shooting in a variety of lighting conditions. .  .",
    shortDescription:
      '3.2" ClearView II LCD monitor50.6-megapixel CMOS sensorFull high-definition 30p videoISO 100-6400 (expandable to 50 and 12,800)EOS Scene Detection System',
  },
  {
    product_name: "Canon - EOS 5DS R DSLR Camera (Body Only) - Black",
    price: 1499.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/3779/3779204_sa.jpg",
    longDescription:
      'This Canon EOS 5DS R DSLR camera features a 50.6-megapixel CMOS sensor that enables you to capture realistic photos. The 3.2" LCD makes it easy to frame and review shots. .  .',
    shortDescription:
      '3.2" ClearView II LCD monitor50.6-megapixel CMOS sensor with low-pass filter (LPF) effect cancelledFull high-definition 30p videoISO 100-6400 (expandable to 50 and 12,800)EOS Scene Detection System',
  },
  {
    product_name:
      "Canon - EOS 6D Mark II DSLR Camera with EF 24-105mm f/3.5-5.6 IS STM Lens - Black",
    price: 1799.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5959/5959401_sa.jpg",
    longDescription:
      "Head to your next location shoot with this Canon EOS 6D Mark II camera, and ensure you get the shot every time. The full-frame DSLR uses a 26.2-megapixel CMOS sensor and DIGIC 7 photo processing to deliver outstanding clear photos with every click of the shutter. This Canon EOS 6D Mark II camera arrives with a EF 24-105 standard lens.  .",
    shortDescription:
      "26.2-megapixel full-frame CMOS sensorISO 100-40,000, expandable to 50-102,400Shooting speeds up to 6.5 fps45 cross-type focus pointsFull HD video at up to 59.94 fpsBuilt-in Wi-Fi, NFC, GPS connectivity",
  },
  {
    product_name:
      "Canon - EOS 6D Mark II DSLR Video Camera (Body Only) - Black",
    price: 1399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5959/5959400_sa.jpg",
    longDescription:
      "Expand your photography skills with this powerful Canon EOS 6D Mark II camera body. Enhanced with a large 26.2MP CMOS sensor and a DIGIC 7 photo processor, this DSLR unit captures true-to-life color and compelling detail. The 45-point all-cross AF system in this Canon EOS 6D Mark II camera body helps you produce crisp, clear photos in any light.",
    shortDescription:
      "26.2-megapixel full-frame CMOS sensorISO 100-40,000, expandable to 50-102,400Shooting speeds up to 6.5 fps45 cross-type focus pointsFull HD video at up to 59.94 fpsBuilt-in Wi-Fi, NFC, GPS connectivity",
  },
  {
    product_name:
      "Canon - EOS 6D Mark II DSLR Video Camera with EF 24-105mm f/4L IS II USM Lens - Black",
    price: 2299.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5977/5977704_sa.jpg",
    longDescription:
      "Take stunning shots no matter where your travels take you with this Canon EOS camera. The compact DSLR camera gives you all the function of a full-frame device in a much smaller size, and the included EF 24-105 lens offers sharp zooming. This Canon EOS camera shoots video in full HD, making it an ideal option for vloggers.  .",
    shortDescription:
      "26.2-megapixel full-frame CMOS sensorISO 100-40,000, expandable to 50-102,400Shooting speeds up to 6.5 fps45 cross-type focus pointsFull HD video at up to 59.94 fpsBuilt-in Wi-Fi, NFC, GPS connectivity",
  },
  {
    product_name:
      "Canon - EOS 80D DSLR Camera with 18-135mm IS USM Lens - Black",
    price: 1399.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5005/5005633_sa.jpg",
    longDescription:
      "Get great performance with the Canon EOS 80D lens kit. It combines a 24.2-megapixel sensor with an 18-135mm lens to get you closer to the action than ever before, and photo stabilization reduces the effects of hand shake. Enjoy ultra-precise focusing and high-definition video for maximum versatility from this Canon EOS 80D lens kit. .",
    shortDescription:
      "24.2-megapixel APS-C format CMOS sensorISO 100&#8211;16,000, expandable to 25,600Shooting speeds up to 7 fpsBuilt-in Wi-Fi45 focus points (45 cross-type)Built-in NFC",
  },
  {
    product_name:
      "Canon - EOS 80D DSLR Camera with 18-55mm IS STM Lens - Black",
    price: 1149.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5005/5005642_sa.jpg",
    longDescription:
      "Combine powerful processing and a 24.2-megapixel sensor with a great 18-55mm lens for intense results from this Canon EOS 80D lens kit. A wide ISO range, up to 7 fps shooting and 1080p video ensure you have everything you need in this Canon EOS 80D lens kit for fabulous photography.  .",
    shortDescription:
      "24.2-megapixel APS-C format CMOS sensorISO 100&#8211;16,000, expandable to 25,600Shooting speeds up to 7 fpsBuilt-in Wi-Fi45 focus points (45 cross-type)Built-in NFC",
  },
  {
    product_name: "Canon - EOS 90D DSLR Camera (Body Only) - Black",
    price: 1199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373125_sa.jpg",
    longDescription:
      "Capture stunning still photos and brilliant 4K Ultra HD videos with this Canon EOS 90D digital camera. The LCD touchscreen and intuitive interface make it easy to change settings, while built-in Wi-Fi and Bluetooth connectivity let you transfer raw files effortlessly. This Canon EOS 90D digital camera has a 32.5MP CMOS sensor for enhanced clarity and dynamic range.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISOUp to 10 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS 90D DSLR Camera with EF-S 18-135mm Lens - Black",
    price: 1599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373129_sa.jpg",
    longDescription:
      "Immortalize precious memories with this Canon EOS 90D and EF-S 18-135mm lens camera kit. Intuitive controls make it easy to adjust settings and optimize photo quality, and the included lens lets you zoom in on subjects. A 32.5MP CMOS sensor lets this Canon EOS 90D and EF-S18-135mm lens camera kit take lifelike still photos and record videos in up to 4K resolution.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISOUp to 10 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS 90D DSLR Camera with EF-S 18-55mm Lens - Black",
    price: 1349.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373123_sa.jpg",
    longDescription:
      "Take incredible shots of nature or record your next trip with this Canon EOS 90D camera kit. The 32.5MP CMOS sensor and 4K Ultra HD recording deliver stunning picture quality, while the 18-55mm lens enables versatile shooting options. This Canon EOS 90D camera kit features Wi-Fi and Bluetooth technology so you can share your work easily.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISOUp to 10 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS 90D DSLR Camera with EF-S 18-55mm Lens Video Creator Kit - Black",
    price: 1449.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6388/6388024_sa.jpg",
    longDescription:
      "Take better, clearer videos with this Canon EOS 90D video creator kit. The 32.5MP CMOS sensor captures up to 10 photos per second and records videos in up to 4K resolution, while the 45-point autofocus hones in on your subject. This Canon EOS 90D video creator kit includes a stereo microphone for high-quality audio.",
    shortDescription:
      "32.5MP APS-C CMOS sensor100-25,600 ISOUp to 10 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M200 Mirrorless Camera with EF-M 15-45mm Lens - Black",
    price: 549.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6382/6382169_sa.jpg",
    longDescription:
      "Relive memorable moments with this Canon digital camera kit. The 24.1MP CMOS (APS-C) sensor offers plenty of detail, while the enhanced Dual Pixel CMOS AF captures high-quality photos. This Canon digital camera kit features 4K 24p/25p video capability for flexible frame-rate options and sharp photographs, and arrives with a 15-45mm IS STM lens for use right out of the box.  .",
    shortDescription:
      "24.1MP APS-C CMOS sensor100-25,600 ISO rangeUp to 6.1 fps maximum shooting speedDual-pixel CMOS AF system with up to 143 AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M200 Mirrorless Camera with EF-M 15-45mm Lens - White",
    price: 549.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6382/6382171_sa.jpg",
    longDescription:
      "Capture engaging photographs with this Wi-Fi-enabled Canon digital camera kit. The Dual Pixel CMOS AF feature delivers fast and accurate autofocus, while the 24.1MP CMOS (APS-C) sensor and included 15-45mm IS STM lens let you capture high-resolution pictures across a range of subjects. This Canon digital camera kit boasts a 3-inch Touch Panel LCD screen for versatile camera angles.  .",
    shortDescription:
      "24.1MP APS-C CMOS sensor100-25,600 ISO rangeUp to 6.1 fps maximum shooting speedDual-pixel CMOS AF system with up to 143 AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M200 Mirrorless Camera with EF-M 15-45mm Lens Content Creator Kit - Black",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6388/6388021_sa.jpg",
    longDescription:
      "Capture and broadcast videos with this Canon EOS M200 content creator kit. The included digital camera captures stunning photos and 4K videos, and integrated Bluetooth connectivity easily shares your media across connected devices. This Canon EOS M200 content creator kit includes a combination tripod grip with a remote control that lets you pan and tilt the camera with the press of a button.",
    shortDescription:
      "24.1MP APS-C CMOS sensor100-25,600 ISO rangeUp to 6.1 fps maximum shooting speedDual Pixel CMOS AF system with up to 143 AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS M5 Mirrorless Camera (Body Only) - Black",
    price: 679.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5623/5623274_sa.jpg",
    longDescription:
      "Take beautiful pictures with this Canon EOS camera. The mirrorless device weighs less than 1 lb., making it ideal for travel, and its 24.2MP autofocus helps even beginning photographers get really great shots. This Canon EOS camera captures video with sound at a rate of 60 fps to eliminate lag.   .",
    shortDescription:
      "24.2-megapixel APS-C CMOS sensorISO 100-25,600High-speed continuous shooting at up to 9.0 fpsTouch and Drag AF frameFull HD 60p/50p videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M5 Mirrorless Camera with EF-M 15-45mm Zoom Lens - Black",
    price: 899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5623/5623277_sa.jpg",
    longDescription:
      "Create high-quality photos with this compact Canon EOS camera. The customizable device captures detailed photos easily, and its interchangeable lenses keep photos crisp and vivid even in low-light situations. This Canon EOS camera includes Bluetooth connectivity to share photos with your compatible smartphone, and automatic settings ensure pictures turn out just right.  .",
    shortDescription:
      "24.2-megapixel APS-C CMOS sensorISO 100-25,600High-speed continuous shooting at up to 9.0 fpsTouch and Drag AF frameFull HD 60p/50p videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS M50 Mark II Mirrorless Camera (Body Only)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437722_sa.jpg",
    longDescription:
      "The EOS M50 Mark II carries and builds on the strong performance of the popular EOS M50 with improvements that will be especially notable for content creators like vloggers and more. You still get the impressive photo quality of the 24.1 Megapixel CMOS sensor, power of the DIGIC 8 photo processor, 4K UHD 24p and HD 120p for slow motion video and more, along with some additional boosts. The autofocus locks onto the subject faster, and Eye Detection is improved so it recognizes the eyes and face further away. Eye Detection can now even be used during video with Movie Servo AF, and you can use both Eye and Face Detection during Servo AF. What you get is added versatility and stability to keep the subject(s) in focus and as the center of attention. For content creators, you can use the EOS M50 Mark II to livestream your content with built-in Wi-Fi&#174;, and use with EOS Webcam Utility software for an easy webcam alternative. When a different angle is needed, you can shoot vertically in addition to horizontally, and the camera even offers clean HDMI output for high-resolution, high frame-rate streaming. When it comes to content, whether stills or video, the EOS M50 Mark II goes far beyond letting you just scratch the surface of your vision.",
    shortDescription:
      "Canon EOS M50 Mark II Mirrorless Camera Body only. 24.1 megapixels.  4K video.  CMOS sensor.  Digig 8 photo processor.",
  },
  {
    product_name:
      "Canon - EOS M50 Mark II Mirrorless Camera 2 Lens Kit with EF-M 15-45mm f/3.5-6.3 IS STM & EF-M 55-200mm f/4.5-6.3 IS STM Lenses",
    price: 929.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437723_sa.jpg",
    longDescription:
      "The EOS M50 Mark II carries and builds on the strong performance of the popular EOS M50 with improvements that will be especially notable for content creators like vloggers and more. You still get the impressive photo quality of the 24.1 Megapixel CMOS sensor, power of the DIGIC 8 photo processor, 4K UHD 24p and HD 120p for slow motion video and more, along with some additional boosts. The autofocus locks onto the subject faster, and Eye Detection is improved so it recognizes the eyes and face further away. Eye Detection can now even be used during video with Movie Servo AF, and you can use both Eye and Face Detection during Servo AF. What you get is added versatility and stability to keep the subject(s) in focus and as the center of attention. For content creators, you can use the EOS M50 Mark II to livestream your content with built-in Wi-Fi&#174;, and use with EOS Webcam Utility software for an easy webcam alternative. When a different angle is needed, you can shoot vertically in addition to horizontally, and the camera even offers clean HDMI output for high-resolution, high frame-rate streaming. When it comes to content, whether stills or video, the EOS M50 Mark II goes far beyond letting you just scratch the surface of your vision.",
    shortDescription:
      "Canon EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM and EF-M 55-200 f/4.5-6.3 IS STM Lenses. 24.1 megapixels.  4K video.  CMOS sensor.  Digig 8 photo processor.",
  },
  {
    product_name:
      "Canon - EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens - Black",
    price: 699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437726_sa.jpg",
    longDescription:
      "The EOS M50 Mark II carries and builds on the strong performance of the popular EOS M50 with improvements that will be especially notable for content creators like vloggers and more. You still get the impressive photo quality of the 24.1 Megapixel CMOS sensor, power of the DIGIC 8 photo processor, 4K UHD 24p and HD 120p for slow motion video and more, along with some additional boosts. The autofocus locks onto the subject faster, and Eye Detection is improved so it recognizes the eyes and face further away. Eye Detection can now even be used during video with Movie Servo AF, and you can use both Eye and Face Detection during Servo AF. What you get is added versatility and stability to keep the subject(s) in focus and as the center of attention. For content creators, you can use the EOS M50 Mark II to livestream your content with built-in Wi-Fi&#174;, and use with EOS Webcam Utility software for an easy webcam alternative. When a different angle is needed, you can shoot vertically in addition to horizontally, and the camera even offers clean HDMI output for high-resolution, high frame-rate streaming. When it comes to content, whether stills or video, the EOS M50 Mark II goes far beyond letting you just scratch the surface of your vision.",
    shortDescription:
      "Canon EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens. 24.1 megapixels.  4K video.  CMOS sensor.  Digig 8 photo processor.",
  },
  {
    product_name:
      "Canon - EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens - White",
    price: 699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6437/6437721_sa.jpg",
    longDescription:
      "The EOS M50 Mark II carries and builds on the strong performance of the popular EOS M50 with improvements that will be especially notable for content creators like vloggers and more. You still get the impressive photo quality of the 24.1 Megapixel CMOS sensor, power of the DIGIC 8 photo processor, 4K UHD 24p and HD 120p for slow motion video and more, along with some additional boosts. The autofocus locks onto the subject faster, and Eye Detection is improved so it recognizes the eyes and face further away. Eye Detection can now even be used during video with Movie Servo AF, and you can use both Eye and Face Detection during Servo AF. What you get is added versatility and stability to keep the subject(s) in focus and as the center of attention. For content creators, you can use the EOS M50 Mark II to livestream your content with built-in Wi-Fi&#174;, and use with EOS Webcam Utility software for an easy webcam alternative. When a different angle is needed, you can shoot vertically in addition to horizontally, and the camera even offers clean HDMI output for high-resolution, high frame-rate streaming. When it comes to content, whether stills or video, the EOS M50 Mark II goes far beyond letting you just scratch the surface of your vision.",
    shortDescription:
      "Canon EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens. 24.1 megapixels.  4K video.  CMOS sensor.  Digig 8 photo processor.",
  },
  {
    product_name:
      "Canon - EOS M50 Mirrorless 4k Video Camera (Body Only) - Black",
    price: 579.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6204/6204316_sa.jpg",
    longDescription:
      "Bring the photos to life with this Canon EOS M50 camera body. A 24.1-megapixel sensor provides high-resolution photo and video files, making this camera ideal for photo enlargements. Use the 4K Ultra HD resolution or HD 120p to create a cinematic look or capture slow motion. Featuring an OLED viewfinder with touch-and-drag operation, this Canon EOS M50 camera body makes it easy to focus on a subject and make adjustments as needed.  .",
    shortDescription:
      "24.1-megapixel APS-C CMOS sensorISO 100 - 25,600High-speed continuous shooting at up to 7.4 fpsDual Pixel CMOS AF with 143 / 99 focus points4K videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M50 Mirrorless Camera Two Lens Kit with EF-M 15-45mm f/3.5-6.3 IS STM and EF-M 55-200mm 1:4.5-6.3 IS STM Zoom Lenses - Black",
    price: 879.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6204/6204312_sa.jpg",
    longDescription:
      "Capture moving photos with this Canon EOS M50 camera with zoom kit. The Dual Pixel CMOS AF allows for fast auto-focus so you can snap the perfect shot as you see it unfold, while the 24.1-megapixel sensor records high-resolution photos and video for easy editing or enlargements. This Canon EOS M50 camera with zoom kit comes with an OLED electronic viewfinder and vari-angle touchscreen LCD display to help find the right angle and shot.",
    shortDescription:
      "24.1-megapixel APS-C CMOS sensorISO 100-25,600High-speed continuous shooting at up to 7.4 fpsDual Pixel CMOS AF with 143 / 99 focus points4K videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M50 Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens - Black",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6204/6204310_sa.jpg",
    longDescription:
      "Keep this Canon EOS kit on hand to capture memories with professional results. The interchangeable lens camera features a 24.1MP CMOS sensor for incredibly crisp still shots and 4K UHD video recording to make it ideal for vloggers. This Canon EOS kit features a 15-45mm lens that handles everything from wide-angle to telephoto zoom.",
    shortDescription:
      "24.1-megapixel APS-C CMOS sensorISO 100-25,600High-speed continuous shooting at up to 7.4 fpsDual Pixel CMOS AF with 143 / 99 focus points4K videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M50 Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens - White",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6204/6204320_sa.jpg",
    longDescription:
      "Explore the capabilities for high-quality photo captures with this Canon EOS digital camera kit. High-resolution 4K UHD records and delivers lifelike video for your vlog, while the 24.1MP CMOS sensor grabs even high-action stills with clarity. The 24-72mm lens in this Canon EOS digital camera kit lets you take wide-angle epic landscape shots or tightly focused portrats.  .",
    shortDescription:
      "24.1-megapixel APS-C CMOS sensorISO 100-25,600High-speed continuous shooting at up to 7.4 fpsDual Pixel CMOS AF with 143 / 99 focus points4K videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M50 Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 IS STM Zoom Lens Video Creator Kit - Black",
    price: 699.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6205/6205300_sa.jpg",
    longDescription:
      "Create a portable production studio with this Canon EOS M50 mirrorless camera video creator kit. A VideoMic GO lightweight on-camera microphone by Rode connects to the camera for high-quality audio capture, while the 32GB SDHC memory card provides storage space for raw footage. This camera features a 2.36m-Dot OLED electronic viewfinder to see what the camera sees. With a dual-pixel CMOS AF, this Canon EOS M50 mirrorless camera video creator kit allows for smooth, fast focusing.  .",
    shortDescription:
      "24.1-megapixel APS-C CMOS sensorISO 100-25,600High-speed continuous shooting at up to 7.4 fpsDual Pixel CMOS AF with 143 / 99 focus points4K videoWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mark II Mirrorless Camera (Body Only) - Silver",
    price: 849.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373120_sa.jpg",
    longDescription:
      "Capture gorgeous pictures and videos with this Canon EOS M6 Mark II digital camera. The advanced 32.5MP CMOS sensor lets you take stunning still photos and capture footage in immersive 4K resolution. This Canon EOS M6 Mark II digital camera has a 3-inch touchscreen and an intuitive interface that makes it easy to change settings and view captured photos.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISO rangeUp to 14 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mark II Mirrorless Camera with EF-M 15-45mm Lens and EVF-DC2 Viewfinder - Black",
    price: 1099.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373127_sa.jpg",
    longDescription:
      "Record 4K UHD videos and capture high-quality stills with this Canon EOS M6 Mark II camera. The 32.5MP APS-C photo sensor lets you take detailed, true-to-life photos, while the electronic shutter capable of speeds up to 1/16000 is ideal for taking professional-caliber action shots. This Canon EOS M6 Mark II camera comes equipped with an 15-45mm f/3.5-6.3 interchangeable zoom lens for wide-angle and short telephoto shots.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISO rangeUp to 14 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mark II Mirrorless Camera with EF-M 15-45mm Lens and EVF-DC2 Viewfinder - Silver",
    price: 1099.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373126_sa.jpg",
    longDescription:
      "Catch memorable moments in 4K quality with this Canon M6 EOS Mark II camera kit. Built-in Wi-Fi and Bluetooth functionality enable easy sharing of your 32.5MP photos, while the 14 fps burst mode and AF/AE tracking keep up with the demands of high-speed shooting. This Canon EOS M6 Mark II camera kit includes a 15-45mm lens for stunning close-ups.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISO rangeUp to 14 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mark II Mirrorless Camera with EF-M 18-150mm Lens and EVF-DC2 Viewfinder - Black",
    price: 1349.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373124_sa.jpg",
    longDescription:
      "Bring objects and scenery to life in 4K quality with this Canon EOS Mark II camera kit. The 32.5 MP sensor delivers sharp, detailed photos, while the 30 fps burst mode keeps up with high-speed continuous shooting. This Canon EOS Mark II camera kit comes with an 18-150mm lens for versatile photography, and Wi-Fi and Bluetooth connectivity enables easy sharing.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISO rangeUp to 14 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mark II Mirrorless Camera with EF-M 18-150mm Lens and EVF-DC2 Viewfinder - Silver",
    price: 1349,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6373/6373130_sa.jpg",
    longDescription:
      "Produce high-resolution videos and photos with this Canon EOS M6 Mark II camera kit. The 32.5MP APS-C sensor and AF/AE tracking let you capture professional-quality action shots and stills, while the 4K UHD resolution delivers high-quality videos with near-cinematic quality. This Canon EOS M6 Mark II camera kit includes an EF-M 18-150mm f/3.5-6.3 lens for zoom, telephoto and wide-angle shots.  .",
    shortDescription:
      "32.5-megapixel APS-C CMOS sensor100-25,600 ISO rangeUp to 14 fps maximum shooting speedDual Pixel CMOS AF system with up to 5,481 manually selectable AF points4K UHD at 30 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mirrorless Camera with EF-M 18-150mm f/3.5-6.3 IS STM Zoom Lens - Black",
    price: 1179.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5774/5774301_sa.jpg",
    longDescription:
      "Enjoy a fast, accurate camera when you get this Canon EOS M6 camera kit. It includes an 18-150mm f/3.5-6.3 lens for impressive flexibility when shooting landscapes, portraits and wildlife, while the camera itself is extremely lightweight thanks to the mirrorless technology. This Canon EOS M6 camera kit incorporates DSLR-like responses in its compact form factor.  .",
    shortDescription:
      "24.2-megapixel APS-C CMOS sensorISO 100 - 6,400, expandable to 25,600 High-speed continuous shooting at up to 9.0 fpsDual Pixel CMOS AF systemFull HD video at up to 59.94 fpsWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS M6 Mirrorless Camera with EF-M 18-150mm f/3.5-6.3 IS STM Zoom Lens - Silver",
    price: 1179.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5774/5774294_sa.jpg",
    longDescription:
      "Discover fast, accurate photography with this Canon EOS M6 camera kit. The camera itself is mirrorless, which reduces weight dramatically while ensuring DSLR-like functionality, and you can interchange lenses for the perfect setup. The included 18-150mm f/3.5-6.3 lens ensures you can get a wide variety of shots with this Canon EOS M6 camera kit.  .",
    shortDescription:
      "24.2-megapixel APS-C CMOS sensorISO 100 - 6,400, expandable to 25,600 High-speed continuous shooting at up to 9.0 fpsDual Pixel CMOS AF systemFull HD video at up to 59.94 fpsWi-Fi, NFC, Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS R Mirrorless 4K Video Camera (Body Only)",
    price: 1799.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6298/6298167_sa.jpg",
    longDescription:
      "Expand your photography skills with this 30.2-megapixel Canon mirrorless camera. Equipped with an all-new mount that lets you use superior lens designs, it has a Dual Pixel AF system that transforms the shooting experience for novice users and professionals alike. This full-frame Canon mirrorless camera has Ultra HD 4K30 video capabilities for crystal clear movies.",
    shortDescription:
      "30.3MP 36 x 24mm CMOS sensorISO 100-40,000, expandable to 102,400Shooting speeds up to 8 fpsDual Pixel CMOS AF with 5,655 focus points4K videoWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS R Mirrorless 4K Video Camera with RF 24-105mm f/4-7.1 IS STM Lens - Black",
    price: 2199.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6415/6415568_sa.jpg",
    longDescription:
      "For outstanding quality and convenience, all in one package, turn to the EOS R + RF24-105mm F4-7.1 IS STM Lens Kit. Designed to deliver optical excellence, the EOS R features a 30.3 MP CMOS sensor, DIGIC 8 photo processor and a maximum of 5,655 manually selectable AF point positions &#8213; providing incredible detail and clarity, even in low-light situations. Shoot stunning 4K video up to 30 frames per second (fps) or Full HD 1080p video up to 60 fps. Plus, when paired with the compact RF24-105mm F4-7.1 IS STM lens, which boasts smooth and quiet autofocusing in both still and video shooting, thanks to its leadscrew-type STM motor, and optical photo stabilization with up to 5 stops of shake correction, you&#8217;ll have the versatility at your fingertips to capture everything from portraits and landscapes, to everyday snapshots and more.",
    shortDescription:
      "30.3MP 36 x 24mm CMOS sensorISO 100-40,000, expandable to 102,400Shooting speeds up to 8 fpsDual Pixel CMOS AF with 5,655 focus points4K videoWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS R Mirrorless 4K Video Camera with RF 24-105mm f/4L IS USM Lens",
    price: 2899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6298/6298174_sa.jpg",
    longDescription:
      "Unleash your inner photographer with this Canon digital camera kit. Its 30.3-megapixel full-frame CMOS sensor delivers high-resolution photos in even low-light conditions, and the included 24-105mm lens lets you take wide-angle shots and portraits. This Canon digital camera kit records video in up to UHD 4K resolution to capture every detail.",
    shortDescription:
      "30.3MP 36 x 24mm CMOS sensorISO 100-40,000, expandable to 102,400Shooting speeds up to 8 fpsDual Pixel CMOS AF with 5,655 focus points4K videoWi-Fi and Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS R5 Mirrorless Camera (Body Only) - Black",
    price: 3899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6420/6420364_sa.jpg",
    longDescription:
      "Canon&#8217;s all-new 45 Megapixel full-frame sensor is at the heart of the EOS R5&#8217;s superb photo quality, which also leads the way for impressive 8K DCI cinematic movie capture with the ability to extract 35.4 Megapixel still photos. Focus and speed are paramount in the EOS R5, providing impressive continuous capture at speeds of up to 20 frames-per-second and with Dual Pixel CMOS AF II capability, to track split second movements of even the most elusive of subjects. With 1,053 Automatic AF zones, it is easier than ever to photograph people with the use of Eye, Face and Head Detection AF, or intuitively track the whole body, face or eye of cats, dogs, or birds with Animal Detection AF. The 5-axis in-body photo stabilization can effectively compensate for camera shake with approximately 8 stops of stabilization with use of both non-stabilized, and optically photo stabilized lenses. Connectivity like 5GHz and 2.4GHz Wi-Fi and Bluetooth, is also included.",
    shortDescription:
      "45 Megapixel Full-Frame CMOS Sensor. ISO range of 100-51200; Expandable to 102400. High-Speed Continuous Shooting of up to 12 fps with Mechanical Shutter and up to 20 fps Electronic (Silent) Shutter. Dual Pixel CMOS AF covering Approx. 100% Area with 1,053 AF Areas. 8K RAW, 4K up to 120fps. 2.4/5Ghz Built-in Wi-Fi&#174;, Bluetooth Technology.",
  },
  {
    product_name:
      "Canon - EOS R5 Mirrorless Camera with RF 24-105mm f/4L IS USM Lens - Black",
    price: 4999.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6420/6420371_sa.jpg",
    longDescription:
      "Canon&#8217;s all-new 45 Megapixel full-frame sensor is at the heart of the EOS R5&#8217;s superb photo quality, which also leads the way for impressive 8K DCI cinematic movie capture with the ability to extract 35.4 Megapixel still photos. Focus and speed are paramount in the EOS R5, providing impressive continuous capture at speeds of up to 20 frames-per-second and with Dual Pixel CMOS AF II capability, to track split second movements of even the most elusive of subjects. With 1,053 Automatic AF zones, it is easier than ever to photograph people with the use of Eye, Face and Head Detection AF, or intuitively track the whole body, face or eye of cats, dogs, or birds with Animal Detection AF. The 5-axis in-body photo stabilization can effectively compensate for camera shake with approximately 8 stops of stabilization with use of both non-stabilized, and optically photo stabilized lenses. Connectivity like 5GHz and 2.4GHz Wi-Fi and Bluetooth, is also included.",
    shortDescription:
      "45 Megapixel Full-Frame CMOS Sensor. ISO range of 100-51200; Expandable to 102400. High-Speed Continuous Shooting of up to 12 fps with Mechanical Shutter and up to 20 fps Electronic (Silent) Shutter. Dual Pixel CMOS AF covering Approx. 100% Area with 1,053 AF Areas. 8K RAW, 4K up to 120fps. 2.4/5Ghz Built-in Wi-Fi&#174;, Bluetooth Technology.",
  },
  {
    product_name: "Canon - EOS R6 Mirrorless Camera (Body Only) - Black",
    price: 2499.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6420/6420368_sa.jpg",
    longDescription:
      "The EOS R6 features the same base photo sensor and photo processor as the EOS-1D X Mark III, enabling a native ISO range of 100-102,400. With high-speed continuous shooting of up to 12 fps with the Mechanical shutter and up to 20 fps with Electronic &#8220;silent&#8221; shutter, the EOS R6 can keep upwith just about any fast-moving subject. Combined with the new Dual Pixel CMOS AF II system with approx. 100% coverage of the frame, and 1,053 Automatic AF Zones, the EOS R6 will confidently follow elusive subjects at 20fps for sharp photos. Tracking subjects is easy and intuitive with the abilityto track people using Eye, Face and Head Detection AF, or when tracking the whole body, face or eye of cats, dogs, or birds with Animal Detection AF. With the new 5-axis In-Body photo Stabilizer, up to 8-stops of shake correction is possible with both non-stabilized and optically photo-stabilized lenses, opening up many more creative opportunities for incredibly stable lower light photo or video content creation. Those looking for creative cinematic video options will appreciate frame rates including 4K 60P and Full HD 120P with the option of internally recorded 4:2:2 10-bit Canon Log or HDR-PQ recording. The inclusion of Dual SDXC UHS-II card slots combined with Wi-Fi and Bluetooth allows for multiple transfer and automatic backup options, making the EOS R6 ready when you are.",
    shortDescription:
      "20 Megapixel Full-Frame CMOS Sensor. ISO range of 100-102400; Expandable to 204800. High-Speed Continuous Shooting of up to 12 fps with Mechanical Shutter and up to 20 fps Electronic (Silent) Shutter. Dual Pixel CMOS AF covering Approx. 100% Area with 1,053 AF Areas. 4K up to 60fps, 1080p up to 120fps. Built-in Wi-Fi&#174;, Bluetooth Technology.",
  },
  {
    product_name:
      "Canon - EOS R6 Mirrorless Camera with RF 24-105mm f/4-7.1 IS STM Lens - Black",
    price: 2899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6420/6420365_sa.jpg",
    longDescription:
      'The EOS R6 features the same base photo sensor and photo processor as the EOS-1D X Mark III, enabling a native ISO range of 100-102,400. With high-speed continuous shooting of up to 12 fps with the Mechanical shutter and up to 20 fps with Electronic "silent" shutter, the EOS R6 can keep up with just about any fast-moving subject. Combined with the new Dual Pixel CMOS AF II system with approx. 100% coverage of the frame, and 1,053 Automatic AF Zones, the EOS R6 will confidently follow elusive subjects at 20fps for sharp photos. Tracking subjects is easy and intuitive with the ability to track people using Eye, Face and Head Detection AF, or when tracking the whole body, face or eye of cats, dogs, or birds with Animal Detection AF. With the new 5-axis In-Body photo Stabilizer, up to 8-stops of shake correction is possible with both non-stabilized and optically photo-stabilized lenses, opening up many more creative opportunities for incredibly stable lower light photo or video content creation. Those looking for creative cinematic video options will appreciate frame rates including 4K 60P and Full HD 120P with the option of internally recorded 4:2:2 10-bit Canon Log or HDR-PQ recording. The inclusion of Dual SDXC UHS-II card slots combined with Wi-Fi and Bluetooth allows for multiple transfer and automatic backup options, making the EOS R6 ready when you are.',
    shortDescription:
      "20 Megapixel Full-Frame CMOS Sensor. ISO range of 100-102400; Expandable to 204800. High-Speed Continuous Shooting of up to 12 fps with Mechanical Shutter and up to 20 fps Electronic (Silent) Shutter. Dual Pixel CMOS AF covering Approx. 100% Area with 1,053 AF Areas. 4K up to 60fps, 1080p up to 120fps. Built-in Wi-Fi&#174;, Bluetooth Technology.",
  },
  {
    product_name:
      "Canon - EOS R6 Mirrorless Camera with RF 24-105mm f/4L IS USM Lens - Black",
    price: 3599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6420/6420369_sa.jpg",
    longDescription:
      "The EOS R6 features the same base photo sensor and photo processor as the EOS-1D X Mark III, enabling a native ISO range of 100-102,400. With high-speed continuous shooting of up to 12 fps with the Mechanical shutter and up to 20 fps with Electronic &#8220;silent&#8221; shutter, the EOS R6 can keep upwith just about any fast-moving subject. Combined with the new Dual Pixel CMOS AF II system with approx. 100% coverage of the frame, and 1,053 Automatic AF Zones, the EOS R6 will confidently follow elusive subjects at 20fps for sharp photos. Tracking subjects is easy and intuitive with the abilityto track people using Eye, Face and Head Detection AF, or when tracking the whole body, face or eye of cats, dogs, or birds with Animal Detection AF. With the new 5-axis In-Body photo Stabilizer, up to 8-stops of shake correction is possible with both non-stabilized and optically photo-stabilized lenses, opening up many more creative opportunities for incredibly stable lower light photo or video content creation. Those looking for creative cinematic video options will appreciate frame rates including 4K 60P and Full HD 120P with the option of internally recorded 4:2:2 10-bit Canon Log or HDR-PQ recording. The inclusion of Dual SDXC UHS-II card slots combined with Wi-Fi and Bluetooth allows for multiple transfer and automatic backup options, making the EOS R6 ready when you are.",
    shortDescription:
      "20 Megapixel Full-Frame CMOS Sensor. ISO range of 100-102400; Expandable to 204800. High-Speed Continuous Shooting of up to 12 fps with Mechanical Shutter and up to 20 fps Electronic (Silent) Shutter. Dual Pixel CMOS AF covering Approx. 100% Area with 1,053 AF Areas. 4K up to 60fps, 1080p up to 120fps. Built-in Wi-Fi&#174;, Bluetooth Technology.",
  },
  {
    product_name: "Canon - EOS Ra Mirrorless Camera (Body Only) - Black",
    price: 2499.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6389/6389882_sa.jpg",
    longDescription:
      "Capture detailed shots with this compact Canon EOS Ra full-frame mirrorless camera. The modified filter lets you take clear pictures of the night sky, and the 30.3MP resolution ensures photos look crisp and detailed. This lightweight Canon EOS Ra full-frame mirrorless camera records gorgeous videos in up to 4K resolution.",
    shortDescription:
      "30.3MP CMOS sensor100-40,000 ISO Dual Pixel CMOS AF with 5,655 focus points4K video recordingWi-Fi connectivityDesigned specifically for astrophotography",
  },
  {
    product_name:
      "Canon - EOS Rebel SL3 DSLR 4K Video Camera with EF-S 18-55mm IS STM Lens",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6346/6346259_sa.jpg",
    longDescription:
      "Capture videos with great sound and minimal background noise using this Canon EF-S 18-55mm f/4-5.6 lens. The lead screw-type stepping motor delivers smooth and quiet recordings, while the improved photo stabilization system provides shake reduction for consistently sharp results. This Canon EF-S 18-55mm f/4-5.6 lens features a non-retracting design and lightweight body that's easy to carry around.  .",
    shortDescription:
      "24.1MPl (APS-C) CMOS sensorISO 100-25,600, expandable to 51,2009-point AFRecords 4K video at 24 fpsBuilt-in Wi-Fi and Bluetooth, GPS adaptable",
  },
  {
    product_name:
      "Canon - EOS Rebel T7 DSLR Video Camera with 18-55mm Lens - Black",
    price: 449.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6323/6323758_sa.jpg",
    longDescription:
      "Take professional-looking photos with this Canon DSLR camera bundle. The 24.1-megapixel CMOS sensor captures the smallest details, even in low light, and the optical photo stabilizer technology ensures handheld shots are sharp. The 18-55mm lens included in this Canon DSLR camera bundle is suitable for taking wide-angle pictures or zooming in for portraits.  .",
    shortDescription:
      "24.1-megapixel CMOS sensorISO 100-6,400, expandable to 12,800Shooting speeds up to 3 fps9 focus points1080p Full HD video up to 30 fpsWi-Fi and NFC (Near Field Communication)",
  },
  {
    product_name:
      "Canon - EOS Rebel T7 DSLR Video Two Lens Kit with EF-S 18-55mm and EF 75-300mm Lenses",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6323/6323759_sa.jpg",
    longDescription:
      "Take stunning pictures with vibrant colors using this EOS Rebel T7 camera. The built-in Wi-Fi makes printing and sharing pictures quick and easy, and the auto-focus system creates crisp photos at a moment's notice. This EOS Rebel T7 camera takes Full HD video, allowing experiences to be captured with quality.  .",
    shortDescription:
      "24.1-megapixel APS-C format CMOS sensorISO 100-6,400, expandable to 12,800Shooting speeds up to 3 fps9 points of focus1920 x 1080 (Full HD) 30 fps video recording capabilityBuilt-in Wi-Fi, NFC, and GPS capable",
  },
  {
    product_name:
      "Canon - EOS Rebel T7i DSLR Video Camera with EF-S 18-55mm IS STM Lens - Black",
    price: 799.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/5792/5792700_sa.jpg",
    longDescription:
      "Capture life's precious moments with this 24.2-megapixel Canon EOS Rebel DSLR camera. With a sensitivity level of ISO 100 to 51,200, this camera works well in nearly all types of lighting conditions, and it includes a phase detection autofocus for high-quality photos. This Canon EOS Rebel DSLR camera offers full HD 1080p video recording for recording live events.",
    shortDescription:
      "24.2-megapixel APS-C CMOS sensorISO 100-25,600 expandable to 51,200Shooting speeds up to 6 fps45 cross-type focus points1080p Full HD video at up to 59.94fps with HDRWi-Fi, NFC and Bluetooth connectivity",
  },
  {
    product_name: "Canon - EOS Rebel T8i DSLR Camera (Body Only) - Black",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402246_sa.jpg",
    longDescription:
      "Capture sharp photos and high-quality video with this Canon EOS Rebel DSLR camera. The 24.1MP resolution and DIGIC 8 photo processor offer true-to-life color and compelling photo quality, while built-in Wi-Fi and Bluetooth technology support sharing with compatible devices. This Canon EOS Rebel DSLR camera boasts a wide ISO range for various lighting conditions.",
    shortDescription:
      "24.1MP CMOS sensor100-25,600 ISO, expandable to 51,200Up to 7 fps maximum shooting speed45-point all cross-type AF system with face detection4K UHD at 24 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name:
      "Canon - EOS Rebel T8i DSLR Camera with EF-S 18-55mm Lens - Black",
    price: 899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6402/6402248_sa.jpg",
    longDescription:
      "Never miss a moment of the action with this Canon EOS Rebel digital camera kit. The wide sensitivity range is ideal for use in almost all lighting conditions, while the 45-point face-detection autofocus system ensures high-quality photos. This Canon EOS Rebel digital camera kit features built-in Bluetooth and Wi-Fi connectivity for effortless transfer of your raw files to compatible smart devices.",
    shortDescription:
      "24.1MP CMOS sensor100-25,600 ISO, expandable to 51,200Up to 7 fps maximum shooting speed45-point all cross-type AF system with face detection4K UHD at 24 fpsWi-Fi and Bluetooth connectivity",
  },
  {
    product_name: "Alcatel - AVALON V - Suede Gray (Verizon)",
    price: 99.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6366/6366110_sa.jpg",
    longDescription:
      "Stay connected with this sleek Alcatel Avalon V smartphone. The 1.4GHz quad-core Snapdragon 425 processor and 2GB of RAM provide smooth performance and quick switching between apps. This Alcatel Avalon V smartphone runs on Android 8.1 Oreo OS, has a bright 5.34 inch display and has 16GB of internal memory.",
    shortDescription:
      'Android 8.1 Oreo4G LTE speed5.34" touch screenBluetooth5.0MP rear- and 2.0MP front-facing camerasQualcomm Snapdragon 425 1.4GHz quad-core processor',
  },
  {
    product_name:
      "Apple - Geek Squad Certified Refurbished iPhone 8 256GB - Space Gray (Sprint)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6304/6304057_sa.jpg",
    longDescription:
      "Geek Squad&#174; Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away. Learn more about Geek Squad&#174; Certified Refurbished products.Talk online or play games with this refurbished iPhone 8 smartphone for Sprint. It has a 12MP camera for capturing important moments and memories, and its 256GB of memory lets you store plenty of files and apps. This iPhone 8 smartphone has a front-facing 7MP camera for taking selfies or making video calls.",
    shortDescription:
      "4.7-inch Retina HD displayA11 Bionic chip with 64-bit architecture12MP camera with optical photo stabilization, and Live Photos3D TouchiOS 11 and iCloud7.3mm thin",
  },
  {
    product_name:
      "Apple - Geek Squad Certified Refurbished iPhone 8 64GB - Space Gray (Sprint)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6255/6255530_sa.jpg",
    longDescription:
      "Geek Squad&#174; Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away. Learn more about Geek Squad&#174; Certified Refurbished products.iPhone 8 is a new generation of iPhone. Designed with most durable glass and a stronger aerospace grade aluminum band. Charges wirelessly.&#185; Resists water and dust.&#178; 4.7-inch Retina HD display with True Tone.&#179; The 12MP camera comes with a new sensor and advanced photo signal processor. Powered by A11 Bionic, a most powerful smartphone chip. Supports augmented reality experiences in games and apps. With iPhone 8, intelligence has never looked better.",
    shortDescription:
      "4.7-inch Retina HD displayA11 Bionic chip with 64-bit architecture12MP camera with optical photo stabilization, and Live Photos3D TouchiOS 11 and iCloud7.3mm thin",
  },
  {
    product_name:
      "Apple - Geek Squad Certified Refurbished iPhone X 256GB - Space Gray (Sprint)",
    price: 1049.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6304/6304048_sa.jpg",
    longDescription:
      "Geek Squad&#174; Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away. Learn more about Geek Squad&#174; Certified Refurbished products.Keep in touch with friends and family by using this refurbished iPhone X smartphone for Sprint. The A11 Bionic chip powers both applications and games with minimum lag, and its glass design is resistant to dust and water while providing wireless charging. The 256GB of storage in this iPhone X smartphone stores your pictures and videos efficiently.",
    shortDescription:
      '5.8" Super Retina HD displayA11 Bionic chip with 64-bit architecture12.0MP wide-angle and telephoto cameras with dual OIS, Portrait mode and Portrait Lighting3D TouchiOS 11 and iCloud7.7mm thin',
  },
  {
    product_name:
      "Apple - Geek Squad Certified Refurbished iPhone X 64GB - Space Gray (Sprint)",
    price: 899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6304/6304051_sa.jpg",
    longDescription:
      "Geek Squad&#174; Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away. Learn more about Geek Squad&#174; Certified Refurbished products.Stay connected to friends and family with this refurbished iPhone X smartphone for Sprint. It has 64GB of internal memory to save important files and contacts, and its 12MP camera takes crisp photos almost anywhere. This iPhone X smartphone has wireless charging capability and a long-lasting battery for added convenience.",
    shortDescription:
      "5.8-inch Super Retina HD displayA11 Bionic chip with 64-bit architecture12MP wide-angle and telephoto cameras with dual OIS, Portrait mode and Portrait Lighting3D TouchiOS 11 and iCloud7.7mm thin",
  },
  {
    product_name:
      "Apple - Geek Squad Certified Refurbished iPhone X 64GB - Space Gray (Verizon)",
    price: 899.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6304/6304052_sa.jpg",
    longDescription:
      "Geek Squad&#174; Certified Refurbished products are thoroughly, painstakingly and lovingly tested, so you can be sure that your device will work right, right away. Learn more about Geek Squad&#174; Certified Refurbished products.Talk to friends and family with this refurbished iPhone X smartphone for Verizon. The A11 Bionic chip keeps it running at maximum efficiency, and its 12-megapixel camera lets you memorialize all of your adventures. This powerful iPhone X smartphone has 64GB of storage to save all your photos and videos.",
    shortDescription:
      "5.8-inch Super Retina HD displayA11 Bionic chip with 64-bit architecture12MP wide-angle and telephoto cameras with dual OIS, Portrait mode and Portrait Lighting3D TouchiOS 11 and iCloud7.7mm thin",
  },
  {
    product_name: "Apple - iPhone 11 128GB - (PRODUCT)RED (AT&T)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341295_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - (PRODUCT)RED (Sprint)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341446_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - (PRODUCT)RED (Verizon)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341349_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Black (AT&T)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341293_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Black (Sprint)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341444_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Black (Verizon)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341347_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Green (AT&T)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341279_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Green (Sprint)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341428_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Green (Verizon)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341549_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Purple (AT&T)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341297_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - Purple (Verizon)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341351_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - White (AT&T)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341294_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - White (Sprint)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341445_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 128GB - White (Verizon)",
    price: 649.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341348_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - (PRODUCT)RED (AT&T)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341301_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - (PRODUCT)RED (Sprint)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341453_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - (PRODUCT)RED (Verizon)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341355_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Green (AT&T)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341304_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Green (Sprint)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341457_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Green (Verizon)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341358_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Purple (AT&T)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341303_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Purple (Sprint)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341455_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Purple (Verizon)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341357_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - White (AT&T)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341300_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - White (Sprint)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341451_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2m for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11Just the right amount of everythingColorful, powerful, essentialSee the whole picture with the ultrawide cameraiPhone 11 - an essential upgrade",
  },
  {
    product_name: "Apple - iPhone 11 256GB - White (Verizon)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341353_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Yellow (AT&T)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341302_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Yellow (Sprint)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341454_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 256GB - Yellow (Verizon)",
    price: 749.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341356_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - (PRODUCT)RED (AT&T)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341288_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - (PRODUCT)RED (Sprint)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341439_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - (PRODUCT)RED (Verizon)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341342_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Black (AT&T)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341287_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Black (Sprint)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341437_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Black (Verizon)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341340_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Green (AT&T)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341291_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Green (Sprint)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341442_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Green (Verizon)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341346_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Purple (AT&T)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341290_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Purple (Sprint)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341441_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Purple (Verizon)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341344_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Yellow (AT&T)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341289_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Yellow (Sprint)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341440_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
  {
    product_name: "Apple - iPhone 11 64GB - Yellow (Verizon)",
    price: 599.99,
    photo:
      "https://pisces.bbystatic.com/photo2/BestBuy_US/photos/products/6341/6341343_sa.jpg",
    longDescription:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.&#179; Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.&#178; And worry less with water resistance up to 2 meters for 30 minutes.&#185;",
    shortDescription:
      "Take it to 11.Just the right amount of everything.Colorful. Powerful. Essential.See the whole picture with Ultra Wide.iPhone 11. An essential upgrade.",
  },
];

const allProducts = products.map((v) => {
  return Object.assign(v, { quantity: Math.floor(Math.random() * 100) });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("inventory", allProducts);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("inventory", null, {});
  },
};
