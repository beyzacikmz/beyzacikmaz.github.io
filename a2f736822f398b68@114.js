function _1(md){return(
md`# Historical Earthquakes in Turkey
`
)}

function _2(md){return(
md`## 1. Introduction
The moment magnitude (Mw) 7.8 and 7.7 two earthquakes in Kahramanmaras, Turkey on 6 February 2023 caused enormous destruction and tens of thousands of casualties from collapsed structures and together were one of the deadliest natural disasters for Turkey and Syria over the past millennium (Edrik et al., 2023). According to the Earthquake Department of the Disaster and Emergency Management Presidency (AFAD), an earthquake is briefly defined as follows: it is the phenomenon of vibrations that occur suddenly due to fractures in the earth's crust, spreading as waves and shaking the environment and the earth they pass through. Turkey is a seismically active, first-degree earthquake country on the Alpine-Himalayan Mountain belt, surrounded by active fault lines (Unlugenc et al., 2023). There are 3 fault lines: the Northern Anatolian Fault Line, the Eastern Anatolian Fault Line, and the Western Anatolian Fault Line. The most active and dangerous fault line is the Western Anatolian Fault Line. `
)}

function _3(md){return(
md` ## 2. Project Goal & Objectives
Turkey ranks third in the world in terms of earthquake-related casualties and eighth concerning the total number of people affected. In addition, it is a fact that the country experiences at least one 5-magnitude earthquake every year. The overarching goal of the project is whether there is a pattern of earthquakes' location or not. If the earthquakes that have occurred over the years have a spatial order, this will provide answers to public and private organizations about which regions should be focused on the correct management and coordination of this natural disaster. In this way, necessary measures, comprehensive plans, and land use policies can be produced for some cities instead of all 81 cities in Turkey.

Even though the regions through which fault lines pass have been defined in the field of geology, spatial interpretations cannot be made about earthquake frequencies and patterns over the years. This project plans to produce an interactive map containing all earthquakes, which were recorded by the USGS, locations, magnitudes, and dates between 1990 and 2024 years. This study will guide earthquake experts, researchers, and academicians about the spatial distribution of past earthquakes. It will also provide earthquake information to individuals and communities in Turkey regarding the environment they live in. As a result of the study to be conducted, answers to the questions listed below will be found.
* Where did the major earthquakes occur between 1990-2024 and what are their magnitudes?
* What are the other regions/cities affected by major earthquakes?
* In which regions/cities have earthquakes occurred most frequently in approximately 35 years?
* How often do earthquakes occur each year?
* Do the earthquakes that have occurred over approximately 35 years have a pattern? In other words, can we state that an earthquake with a magnitude of 5 occurs in a certain region every 10 years?
`
)}

function _4(md){return(
md` ## 3. Literature Review
Generally, an earthquake with a magnitude between M = 7.0 and M = 7.9 (caused serious damage) is considered a major earthquake (Michigan Technological University, 2021). The return period for major earthquakes that occurred in Turkey is seven years, and considering the fault characteristics in Turkey, it is expected to be a major earthquake in the coming years (Atmaca et al., 2020). In addition, Atmaca et al.’s study includes historical earthquakes with magnitude M = 7.0 and greater since 1900 and magnitude M = 6.0 and greater since 1992. As a result, their outcome indicated that most historical earthquakes with magnitudes greater than 7 occurred in regions located close to the North Anatolian Fault whereas most earthquakes with magnitudes greater than 6 occurred close to the East Anatolian Fault and West Anatolian Fault instead of the North Anatolian Fault.
`
)}

function _5(md){return(
md` ## 4. Data Collection and Maps
*Earthquake Data*

The USGS Earthquake Catalog contains earthquake source parameters (e.g. hypocenters, magnitudes, phase picks, and amplitudes) and other products (e.g. moment tensor solutions, macroseismic information, tectonic summaries, maps) produced by contributing seismic networks. The data of historic earthquakes in Turkey between 1990 and 2024 years were found in the USGS Earth Catalog. The data was first downloaded as a CSV file and then converted to point vector data using latitude and longitude information in QGIS. The link can be accessed below.

https://earthquake.usgs.gov/earthquakes/search/

*Border of Turkey*

The border data, which includes the borders of all 81 cities of Turkey, can be accessed via the link below.

https://data.humdata.org/dataset/cod-ab-tur

According to metadata information, the data source is the General Command of Mapping. In fact, the Administrative Divisions dataset was prepared at a 1:1,000,000 scale and is the property of the General Command of Mapping, Turkey. This dataset was shared through http://www.hgk.msb.gov.tr/u-23-turkiye-mulki-idare-sinirlari.html for humanitarian use only.
`
)}

function _6(md){return(
md` ## 5. Planned Presentation Techniques
Please list a variety of geovisualization methods that have been or could be used to visualize your data. Please identify appropriate geovisualization methods and interaction techniques not only to communicate information but also to support data exploration. You are expected to cite at least 2 alternative visualization methods for each data set in your final project. Planned representation alternatives visualizing similar data should be cited through example notebook or other online visualization links in the proposal.
* What information would you like people to extract by using your interactive and web-based visualization tools?
* What specific objectives can you achieve with each planned visualization method?

** Dorling Cartogram **

The Dorling cartogram (Dorling, 1996), named after the geographer Danny Dorling, is a method of representing absolute quantitative data with proportional circles while avoiding the superimposition of these. A Dorling cartogram does not preserve the shape, topology, or centroids of the objects and is an abstract representation of the spatial configuration of the mapped phenomena. This representation technique is often used without a background map on top.
`
)}

function _7(md){return(
md` ## References
Unlugenc, U. C., Akinci, A. C., Ocgun, A. G. (2023). 6 Şubat 2023 Kahramanmaraş-Gaziantep Depremleri; Adana İli ve Yakın Kesimlerine Yansımaları. Geosound, 57(1), 1-41.

Erdik, M., Tümsa, M. B. D., Pınar, A., Altunel, E., & Zülfikar, A. C. (2023). A preliminary report on the February 6, 2023 earthquakes in Türkiye. Research Briefs.

Michigan Technological University. (2021, October 4). Earthquake magnitude scale. https://www.mtu.edu/geo/community/seismology/learn/earthquake-measure/magnitude/

Atmaca, B., Demir, S., Günaydın, M., Altunışık, A. C., Hüsem, M., Ateş, Ş., ... & Angın, Z. (2020). Lessons learned from the past earthquakes on building performance in Turkey. J. Struct. Eng. Appl. Mech, 3(2), 61-84.

`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  return main;
}
